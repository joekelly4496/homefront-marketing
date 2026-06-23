import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const siteUrl = 'https://gethomefront.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Homefront — Post-closing service, finally organized',
    template: '%s · Homefront',
  },
  description:
    'Homefront keeps builders, homeowners, and subcontractors on the same page — from the first warranty request to the final completion photo. The system of record for post-closing home builder service.',
  keywords: [
    'home builder warranty software',
    'post-closing service',
    'home warranty management',
    'builder service software',
    'homeowner portal',
    'subcontractor management',
  ],
  openGraph: {
    title: 'Homefront — Post-closing service, finally organized',
    description:
      'The system of record for post-closing home builder service. Keep builders, homeowners, and subcontractors on the same page.',
    url: siteUrl,
    siteName: 'Homefront',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homefront — Post-closing service, finally organized',
    description:
      'The system of record for post-closing home builder service. Keep builders, homeowners, and subcontractors on the same page.',
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
