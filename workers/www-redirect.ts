const CANONICAL_ORIGIN = "https://ravencourtcapital.com";

export default {
  async fetch(request: Request): Promise<Response> {
    const source = new URL(request.url);
    const destination = new URL(`${source.pathname}${source.search}`, CANONICAL_ORIGIN);

    return new Response(null, {
      status: 308,
      headers: {
        Location: destination.toString(),
        "Cache-Control": "public, max-age=3600",
        "X-Ravencourt-Redirect": "www-to-apex",
      },
    });
  },
};
