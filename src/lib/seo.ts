import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { brand } from "@/lib/content";

/**
 * Builds a complete per-page Metadata object: title, description, canonical
 * URL, Open Graph, and Twitter card. Every page uses this so no page ships
 * without a canonical tag or social card.
 *
 * `title` is the page-level title. The root layout appends " · Afterkey"
 * via the title template, so don't include the brand name here.
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  /**
   * Skip the root layout's "%s · Afterkey" template. Use when the title
   * already names the brand, so it doesn't render "Afterkey … · Afterkey".
   */
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  // The OG/Twitter title stands alone outside the site, so it carries the brand.
  const socialTitle = absoluteTitle ? title : `${title} · ${brand.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: brand.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
