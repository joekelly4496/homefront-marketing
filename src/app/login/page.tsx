import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { pageMetadata } from '@/lib/seo';
import { brand, portals, signupHref } from '@/lib/content';

export const metadata = pageMetadata({
  title: 'Sign in',
  description: `Sign in to ${brand.name} — choose your portal: builder, homeowner, or subcontractor.`,
  path: '/login',
  // A sign-in doorway has no search value and would only compete with the
  // pages that do. Kept crawlable for link equity, out of the index.
  noIndex: true,
});

export default function LoginPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container size="6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Welcome back
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Choose your portal to sign in.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {portals.map((portal, i) => (
            <Reveal key={portal.name} delay={i * 80}>
              {/* External — the portals live in the app, not this site. */}
              <a href={portal.href} className="group block h-full">
                <Card interactive className="flex h-full flex-col p-6">
                  <IconBox icon={portal.icon} accent={portal.accent} />
                  <h2 className="mt-5 text-lg font-semibold text-slate-900">
                    {portal.name}
                  </h2>
                  <p className="mt-1.5 flex-1 text-sm text-slate-600">
                    {portal.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                    Sign in
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <p className="text-sm text-slate-600">
            New to {brand.name}?{' '}
            <a
              href={signupHref}
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              Start a free trial
            </a>{' '}
            or{' '}
            <Link
              href="/pricing"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              see pricing
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
