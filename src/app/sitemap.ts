import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { useCases } from "@/lib/content";

/**
 * Indexable routes only. /login is noindexed and deliberately absent — listing
 * a page you have asked crawlers not to index is a conflicting signal.
 */
const routes: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/use-cases", priority: 0.8, changeFrequency: "monthly" },
  ...useCases.map((useCase) => ({
    path: `/use-cases/${useCase.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/compare", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for-subcontractors", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // absoluteUrl normalizes '' to '/', matching the canonical tag exactly.
  // A sitemap URL that differs from its page's canonical is a wasted signal.
  return routes.map((route) => ({
    url: absoluteUrl(route.path || "/"),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
