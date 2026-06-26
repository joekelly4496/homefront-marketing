import type { MetadataRoute } from 'next';

const baseUrl = 'https://gethomefront.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/features',
    '/pricing',
    '/for-subcontractors',
    '/signup',
    '/login',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route === '/pricing' || route === '/signup'
          ? 0.9
          : 0.7,
  }));
}
