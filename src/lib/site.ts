/**
 * Canonical site URL used for metadata, Open Graph/preview images, the
 * sitemap, and robots. Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — set this to the real domain (e.g. the live
 *      gethomefront.com) when it's ready.
 *   2. Vercel's production domain (auto-set on Vercel builds).
 *   3. The current Vercel deployment URL.
 *   4. A sensible default for local/dev.
 *
 * This must point at a domain that actually serves the site, or link
 * previews (which fetch og:image from this base) come up blank.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const deployment = process.env.VERCEL_URL;
  if (deployment) return `https://${deployment}`;

  return 'https://homefront-marketing.vercel.app';
}

export const siteUrl = resolveSiteUrl();
