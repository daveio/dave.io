fish_add_path /root/.local/bin
fish_add_path /root/.bun/bin

curl -fsSL https://bun.sh/install | bash

/root/.bun/bin/bun install
/root/.bun/bin/bun run vite build

rm /src/dist/_headers
rm /src/dist/_redirects
