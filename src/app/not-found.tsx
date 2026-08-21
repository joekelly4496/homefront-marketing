import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { signupHref } from '@/lib/content';

const suggestions = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/use-cases', label: 'Use cases' },
  { href: '/faq', label: 'FAQ' },
];

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container size="6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            404
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            We couldn’t find that page
          </h1>
          <p className="mt-4 text-base text-slate-600">
            The page may have moved. Here’s where most people are headed.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {suggestions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={signupHref} size="lg" variant="secondary">
              Start free trial
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
