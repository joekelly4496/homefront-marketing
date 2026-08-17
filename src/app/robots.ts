import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

/**
 * Permissive by design. Traditional search crawlers and AI answer-engine
 * crawlers are both welcome — being quotable by ChatGPT, Perplexity, and
 * Google's AI surfaces is a goal, not a risk, so the reputable AI agents are
 * named explicitly rather than left to inherit the wildcard.
 *
 * /login is excluded: it is a sign-in doorway with no search value.
 */
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'DuckAssistBot',
  'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/login' },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: '/login',
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
