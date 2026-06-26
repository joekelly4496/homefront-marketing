import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { signupHref, loginUrls } from '@/lib/content';

const columns: { heading: string; links: { href: string; label: string }[] }[] =
  [
    {
      heading: 'Product',
      links: [
        { href: '/features', label: 'Features' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/for-subcontractors', label: 'For Subcontractors' },
        { href: signupHref, label: 'Sign up' },
      ],
    },
    {
      heading: 'Portals',
      links: [
        { href: loginUrls.builder, label: 'Builder login' },
        { href: loginUrls.homeowner, label: 'Homeowner login' },
        { href: loginUrls.sub, label: 'Subcontractor login' },
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
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate-600">
              The warranty and homeowner-handoff platform for home builders.
              Less work for you, a premium experience for your buyers.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {col.heading}
              </h3>
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
            © {new Date().getFullYear()} Homefront. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Stop being your homeowners’ help desk. Protect your reputation.
          </p>
        </div>
      </div>
    </footer>
  );
}
