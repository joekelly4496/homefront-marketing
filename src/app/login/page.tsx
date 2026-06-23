import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Users, HardHat, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import type { Accent } from '@/components/ui/IconBox';

export const metadata: Metadata = {
  title: 'Sign in',
  description:
    'Sign in to Homefront — choose your portal: builder, homeowner, or subcontractor.',
};

const portals: {
  href: string;
  icon: typeof Home;
  accent: Accent;
  name: string;
  description: string;
}[] = [
  {
    href: '/builder/login',
    icon: Home,
    accent: 'brand',
    name: 'Builder',
    description:
      'Manage homes, service requests, and your subcontractor roster.',
  },
  {
    href: '/homeowner/login',
    icon: Users,
    accent: 'emerald',
    name: 'Homeowner',
    description:
      'Submit requests, track status, and message your builder.',
  },
  {
    href: '/sub/login',
    icon: HardHat,
    accent: 'violet',
    name: 'Subcontractor',
    description: 'See your assigned jobs and update them from the field.',
  },
];

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
              <Link href={portal.href} className="group block h-full">
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
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <p className="text-sm text-slate-600">
            New to Homefront?{' '}
            <Link
              href="/demo"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              Book a demo
            </Link>{' '}
            or{' '}
            <Link
              href="/pricing"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              start a free trial
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
