// PostHog pass-through that never forwards the visitor's IP address
// (owner decision, Nov 2026: "make sure we're not passing along any of our
// customers' IP addresses").
//
// The browser talks to /ingest on our own domain (posthog-js api_host). A
// plain Next.js rewrite would forward the visitor's IP to PostHog in the
// X-Forwarded-For header; this handler re-sends the request from our server
// instead, copying only the headers PostHog needs to read the payload. PostHog
// sees our server's address, never the visitor's. The PostHog project also
// has "Discard client IP data" (anonymize_ips) on as a second lock.
//
// Trade-off: PostHog can no longer guess a visitor's country or city from
// their IP. Page views, funnels and errors are unaffected.
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const API_HOST = "https://us.i.posthog.com";
const ASSET_HOST = "https://us-assets.i.posthog.com";

// Only these request headers are forwarded. Everything else (IP headers,
// cookies, Vercel geo headers) stays here.
const FORWARD_HEADERS = ["content-type", "content-encoding", "accept", "user-agent"];

async function proxy(request: NextRequest): Promise<Response> {
  const url = new URL(request.url);
  // Keep the exact path, trailing slash included (PostHog endpoints end in "/").
  const path = url.pathname.replace(/^\/ingest/, "") || "/";
  const host = path.startsWith("/static/") ? ASSET_HOST : API_HOST;
  const target = `${host}${path}${url.search}`;

  const headers = new Headers();
  for (const name of FORWARD_HEADERS) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  const hasBody = request.method !== "GET" && request.method !== "HEAD";
  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method: request.method,
      headers,
      body: hasBody ? await request.arrayBuffer() : undefined,
      redirect: "manual",
      cache: "no-store",
    });
  } catch {
    // Analytics must never break the page: answer quietly.
    return new Response(null, { status: 204 });
  }

  // fetch() already decoded the body, so the original encoding/length no
  // longer apply; PostHog's own cookies are never relayed either.
  const out = new Headers();
  for (const name of ["content-type", "cache-control"]) {
    const value = upstream.headers.get(name);
    if (value) out.set(name, value);
  }
  return new Response(upstream.body, { status: upstream.status, headers: out });
}

export const GET = proxy;
export const POST = proxy;
export const HEAD = proxy;
