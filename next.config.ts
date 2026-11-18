import type { NextConfig } from "next";

// PostHog traffic goes through /ingest on our own domain, served by
// src/app/ingest/[...path]/route.ts, which re-sends it WITHOUT the visitor's
// IP address (a rewrite here would forward it in X-Forwarded-For). Keeps
// analytics first-party and stops ad blockers from dropping events.
const nextConfig: NextConfig = {
  // PostHog API requests end with a trailing slash; don't redirect them.
  skipTrailingSlashRedirect: true,
  // Short links for the Instagram bio (Nov 2026). Instagram shows a bio link
  // as its bare URL, so these keep it clean ("getafterkey.com/trial") while
  // the visit still lands tagged as Instagram. Temporary (307) so they can
  // be pointed somewhere else later without browsers caching the old target.
  async redirects() {
    return [
      {
        source: "/trial",
        destination: "/start?utm_source=instagram&utm_medium=bio&utm_campaign=trial",
        permanent: false,
      },
      {
        source: "/quiz",
        destination: "/scorecard?utm_source=instagram&utm_medium=bio&utm_campaign=scorecard",
        permanent: false,
      },
      {
        source: "/demo",
        destination: "/start/book?utm_source=instagram&utm_medium=bio&utm_campaign=demo",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
