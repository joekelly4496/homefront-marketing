import type { MetadataRoute } from 'next';
import { siteUrl as baseUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/features',
    '/pricing',
    '/for-subcontractors',
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
      route === '' ? 1 : route === '/pricing' || route === '/login' ? 0.9 : 0.7,
  }));
}
