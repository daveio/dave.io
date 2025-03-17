# Caddy-based static site server

# ===== STAGE 1: Caddy builder =====
FROM alpine:3.21.3 AS caddy-builder

# Install necessary build dependencies
# go: Required to build Caddy
# git: Required by xcaddy to fetch plugins
# build-base: Provides essential build tools (gcc, make, etc.)
RUN apk add --no-cache \
      build-base=0.5-r3 \
      ca-certificates=20241121-r1 \
      git=2.47.2-r0 \
      go=1.23.7-r0

# Set working directory for the build
WORKDIR /src

# Install xcaddy (the Caddy builder tool)
# This allows for custom builds with additional plugins if needed
# Using the official GOPATH location where xcaddy was installed
RUN go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest && \
    /root/go/bin/xcaddy build --output /src/caddy

# ===== STAGE 2: Site builder =====
FROM alpine:3.21.3 AS site-builder

RUN apk add --no-cache \
      bash=5.2.37-r0 \
      build-base=0.5-r3 \
      ca-certificates=20241121-r1 \
      curl=8.12.1-r1 \
      fish=3.7.1-r0 \
      git=2.47.2-r0 \
        && \
      mkdir -p /src

COPY . /src

WORKDIR /src

RUN /usr/bin/fish /src/build.fish

# ===== STAGE 3: Final stage =====
FROM alpine:3.21.3

# Add version labels to the final image
LABEL maintainer="dave@dave.io"
LABEL description="dave.io static site"

# Install runtime dependencies
RUN apk add --no-cache \
      ca-certificates=20241121-r1 \
      nss-tools=3.109-r0 \
      tzdata=2025a-r0 \
    && \
      addgroup -g 1000 -S dave.io && \
      adduser -u 1000 -S dave.io -G dave.io

# Create necessary directories with proper ownership
# /site: For the static site content
# /config: For Caddy configuration
# /data: For Caddy data (certificates, etc.)
RUN mkdir -p /site /config /data && \
    chown -R dave.io:dave.io /site /config /data

# Copy the built site from the site-builder stage
COPY --from=site-builder /src/dist /site

# Copy the Caddy binary from the builder stage
COPY --from=caddy-builder /src/caddy /usr/bin/caddy
RUN chmod +x /usr/bin/caddy

COPY Caddyfile /config/Caddyfile

# Set proper ownership for all Caddy-related files
RUN chown -R dave.io:dave.io /usr/bin/caddy /config /site

# Expose HTTP port
EXPOSE 80

# Change to non-root user for better security
USER dave.io

# Set up healthcheck to verify Caddy is running properly
# Checks every 30s, with 5s timeout, starts after 5s, and fails after 3 retries
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1

# Set the working directory to the Caddy configuration directory
WORKDIR /config

# Start Caddy with the appropriate configuration
# Using CMD instead of ENTRYPOINT for more flexibility
CMD ["caddy", "run", "--config", "/config/Caddyfile", "--adapter", "caddyfile"]

