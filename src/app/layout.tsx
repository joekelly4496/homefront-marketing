import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Homefront — Turn Every Completed Home Into Monthly Recurring Revenue',
  description:
    'Homefront helps home builders manage warranties, automate maintenance reminders, and generate recurring revenue from completed homes. Built by a builder, for builders.',
  openGraph: {
    title: 'Homefront — Turn Every Completed Home Into Monthly Recurring Revenue',
    description:
      'Homefront helps home builders manage warranties, automate maintenance reminders, and generate recurring revenue from completed homes.',
    url: 'https://gethomefront.com',
    siteName: 'Homefront',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homefront — Recurring Revenue for Home Builders',
    description:
      'Turn completed homes into monthly recurring revenue with warranty management, maintenance reminders, and a branded homeowner portal.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 Placeholder — replace G-XXXXXXXXXX with your GA4 ID */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} />
        */}
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
