import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { brand, signupHref, loginUrls, useCases } from '@/lib/content';

const columns: { heading: string; links: { href: string; label: string }[] }[] =
  [
    {
      heading: 'Product',
      links: [
        { href: '/features', label: 'Features' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/compare', label: 'Compare' },
        { href: '/faq', label: 'FAQ' },
        { href: '/for-subcontractors', label: 'For Subcontractors' },
      ],
    },
    {
      heading: 'Use cases',
      links: useCases.map((u) => ({
        href: `/use-cases/${u.slug}`,
        label: u.navLabel,
      })),
    },
    {
      heading: 'Portals',
      links: [
        { href: loginUrls.builder, label: 'Builder login' },
        { href: loginUrls.homeowner, label: 'Homeowner login' },
        { href: loginUrls.sub, label: 'Subcontractor login' },
        { href: signupHref, label: 'Start free trial' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' },
      ],
    },
  ];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate-600">
              {brand.definition}
            </p>
            <p className="mt-4 text-sm text-slate-600">
              <a
                href={`mailto:${brand.email}`}
                className="font-medium text-brand-600 hover:text-brand-700"
              >
                {brand.email}
              </a>
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {brand.legalName}. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-400">
            Post-closing software for residential home builders.
          </p>
        </div>
      </div>
    </footer>
  );
}
