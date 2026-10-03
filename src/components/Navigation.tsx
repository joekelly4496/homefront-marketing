"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLandingPath, isWelcomePath } from "@/components/HideOnLanding";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { buttonVariants } from "@/components/ui/Button";
import { signupHref, primaryCta, loginUrls } from "@/lib/content";

const navLinks = [
  { href: "/memberships", label: "Memberships" },
  { href: "/features", label: "Features" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/for-subcontractors", label: "For Subs" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Ad landing pages: the logo and nothing else. Every extra link is an
  // exit from the one decision the page asks for.
  if (isLandingPath(pathname)) {
    return (
      <header className="border-b border-paper/10 bg-ink">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Main">
          <div className="flex h-16 items-center">
            <Logo tone="light" />
          </div>
        </nav>
      </header>
    );
  }

  // The homeowner welcome page: the logo, and the one thing to do.
  if (isWelcomePath(pathname)) {
    return (
      <header className="border-b border-drywall bg-paper">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Main">
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <a
              href={loginUrls.homeowner}
              className={buttonVariants({ variant: "ink", size: "sm" })}
            >
              Open your portal
            </a>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-drywall bg-paper/85 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Main">
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
            <Link
              href={signupHref}
              className={buttonVariants({ variant: "ink", size: "sm" })}
            >
              {primaryCta}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-slate-700 hover:bg-slate-100"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
        <div className="md:hidden border-t border-drywall bg-paper">
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
                className={buttonVariants({ size: "lg", className: "w-full" })}
              >
                {primaryCta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
