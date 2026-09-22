import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactWidget } from "@/components/ContactWidget";
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

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Title tag + meta chase the searched query. "Post-closing" is brand
// vocabulary for body copy, never a target query.
const defaultTitle = "Warranty Callback Software for Home Builders | Afterkey";
const defaultDescription =
  "Warranty callback software for home builders doing 5 to 50 homes a year. Callbacks, subs, and maintenance on one record, under your brand. $149/month.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${brand.name}`,
  },
  description: defaultDescription,
  applicationName: brand.name,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: absoluteUrl("/"),
    siteName: brand.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[6px] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <JsonLd data={siteGraph} />
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <ContactWidget />
      </body>
    </html>
  );
}
