'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { buttonVariants } from '@/components/ui/Button';
import { signupHref } from '@/lib/content';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/for-subcontractors', label: 'For Subs' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Sign in
            </Link>
            <Link href={signupHref} className={buttonVariants({ size: 'sm' })}>
              Sign up
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-slate-700 hover:bg-slate-100"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-200 space-y-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Sign in
              </Link>
              <Link
                href={signupHref}
                onClick={() => setIsOpen(false)}
                className={buttonVariants({ size: 'lg', className: 'w-full' })}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
