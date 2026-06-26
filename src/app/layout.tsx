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
    'Homefront is the warranty and homeowner-handoff platform for home builders. Homeowners reach the right sub directly, you monitor instead of firefight, and every buyer walks away with a complete home record. Less work, a better reputation.',
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
      'The warranty and homeowner-handoff platform for home builders. Get out of the middle, keep your reputation on the record, and hand over something premium.',
    url: siteUrl,
    siteName: 'Homefront',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homefront — Build homes. Not a help desk.',
    description:
      'The warranty and homeowner-handoff platform for home builders. Your phone stops ringing. Your reviews go up.',
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
