/**
 * Canonical site URL used for metadata, Open Graph/preview images, canonical
 * tags, JSON-LD, the sitemap, and robots. Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — override for previews or a domain change.
 *   2. Vercel's production domain (auto-set on Vercel builds).
 *   3. The current Vercel deployment URL.
 *   4. The production domain.
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

  return 'https://getafterkey.com';
}

export const siteUrl = resolveSiteUrl();

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path = '') =>
  `${siteUrl}${path.startsWith('/') ? path : path ? `/${path}` : ''}`;
