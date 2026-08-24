import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl, absoluteUrl } from "@/lib/site";
import { brand } from "@/lib/content";
import {
  graph,
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
} from "@/lib/schema";
import "./globals.css";

const defaultTitle = "Afterkey — Post-Closing Software for Home Builders";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${brand.name}`,
  },
  description:
    "Post-closing software for residential home builders. Warranty requests, subcontractor coordination, homeowner portals, and AI-built maintenance schedules.",
  applicationName: brand.name,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: defaultTitle,
    description:
      "Post-closing software for residential home builders. Warranty requests, subcontractor coordination, homeowner portals, and AI-built maintenance schedules.",
    url: absoluteUrl("/"),
    siteName: brand.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Post-closing software for residential home builders. Warranty, subcontractors, homeowner portals, and AI-built maintenance schedules.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Site-wide entity graph: who Afterkey is, what the site is, what the
  // product is and what it costs. Emitted on every page so any single page
  // an answer engine lands on can resolve the entity.
  const siteGraph = graph([
    organizationSchema(),
    websiteSchema(),
    softwareApplicationSchema(),
  ]);

  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={siteGraph} />
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
