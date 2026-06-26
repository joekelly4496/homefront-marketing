import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { siteUrl } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Homefront — Build homes. Not a help desk.',
    template: '%s · Homefront',
  },
  description:
    'After closing, your homeowners treat you like a 24/7 help desk. Homefront sends every warranty request to the sub who did the work, so your phone stops blowing up — and you stay in the loop without fielding every call.',
  keywords: [
    'home builder warranty software',
    'home builder help desk',
    'warranty management for builders',
    'homeowner handoff',
    'punch list software',
    'home maintenance plan',
  ],
  openGraph: {
    title: 'Homefront — Build homes. Not a help desk.',
    description:
      'Stop being your homeowners’ 24/7 help desk. Homefront sends every warranty request to the right sub, so your phone stops blowing up.',
    url: siteUrl,
    siteName: 'Homefront',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homefront — Build homes. Not a help desk.',
    description:
      'Stop being your homeowners’ 24/7 help desk. Your phone stops blowing up — the right sub takes the call.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
