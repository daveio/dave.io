// Middleware to detect curl/wget requests and serve a shell script directly
// For browser requests, the middleware will pass the request along normally

export interface Env {
  // Add any environment variables here
}

export const onRequest = async (context) => {
  const { request, env } = context;
  const userAgent = request.headers.get('user-agent') || '';
  const url = new URL(request.url);

  // Check if this is a curl or wget request
  const isCurlOrWget = userAgent.toLowerCase().includes('curl') ||
                       userAgent.toLowerCase().includes('wget');

  // Only serve shell script for the root path
  if (isCurlOrWget && (url.pathname === '/' || url.pathname === '')) {
    // Fetch the shell script file from our own site
    const scriptResponse = await fetch(`${url.origin}/run.sh`);

    if (scriptResponse.ok) {
      const scriptContent = await scriptResponse.text();

      // Serve the script content directly
      return new Response(scriptContent, {
        headers: {
          'Content-Type': 'text/x-shellscript',
          'Cache-Control': 'no-cache'
        }
      });
    }

    // Fallback if script fetch fails
    return new Response(
      "echo \"Error: Couldn't load the install script. Fetch https://dave.io/run.sh instead.\"",
      {
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'no-cache',
          'Location': 'https://dave.io/run.sh'
        },
        status: 302
      }
    );
  }

  // For browser requests or non-root paths, continue with normal processing
  return context.next();
};
