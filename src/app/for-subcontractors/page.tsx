import type { Metadata } from 'next';
import {
  ArrowRight,
  Smartphone,
  Camera,
  CheckCircle2,
  Bell,
  ListChecks,
  DollarSign,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { PhoneMockup } from '@/components/mockups/PhoneMockup';

export const metadata: Metadata = {
  title: 'For Subcontractors',
  description:
    'Get assigned jobs on your phone, update status in a tap, and upload before/after photos from the jobsite. Subcontractors join Homefront free.',
};

const benefits = [
  {
    icon: ListChecks,
    title: 'Your jobs, in one list',
    description:
      'Every job a builder assigns you shows up in one place — address, issue, and what’s expected. No more digging through texts.',
  },
  {
    icon: Smartphone,
    title: 'Update from the field',
    description:
      'Tap “on my way” or “complete” right from your phone. The builder and homeowner see it instantly.',
  },
  {
    icon: Camera,
    title: 'Photos that protect you',
    description:
      'Upload before and after photos on every job — proof the work was done right, stored on the record.',
  },
  {
    icon: Bell,
    title: 'Never miss an assignment',
    description:
      'Get notified the moment a builder assigns you work, so you can schedule it before it stacks up.',
  },
];

const subProFeatures = [
  'Job history across every builder you work with',
  'Faster payouts and clearer cost records',
  'Priority support',
  'Advanced scheduling and availability tools',
];

export default function ForSubcontractorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <Container size="7xl" className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <Pill color="violet">For subcontractors</Pill>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Get the job. Do the work. Get the next one.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 max-w-xl text-balance text-lg text-slate-600">
                  When a builder runs on Homefront, your assignments land on your
                  phone with everything you need. Update status, upload photos,
                  and keep the work moving — for free.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/sub/login" size="lg">
                    Subcontractor sign in
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button href="/demo" size="lg" variant="secondary">
                    Tell my builder
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-sm text-slate-500">
                  Free for subcontractors · Works on any phone
                </p>
              </Reveal>
            </div>

            <Reveal delay={140} className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why subs like it</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Built for the jobsite, not the office
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 70}>
                <Card interactive className="h-full p-6 sm:p-7">
                  <IconBox icon={b.icon} accent="violet" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {b.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sub Pro */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal>
            <Card className="overflow-hidden p-0">
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <IconBox icon={DollarSign} accent="violet" />
                    <Pill color="violet">Sub Pro · $29/mo</Pill>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                    Want more? Add Sub Pro.
                  </h2>
                  <p className="mt-3 text-base text-slate-600">
                    The free account covers everything you need to do the work.
                    Sub Pro is for trade partners who want history, faster
                    payouts, and more control over their schedule.
                  </p>
                  <Button href="/sub/login" className="mt-6">
                    Get started free
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                <ul className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  {subProFeatures.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-violet-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Your builder isn’t on Homefront yet?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Let them know. When they’re set up, your jobs and photos all live
              in one place — and you get paid for documented, completed work.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/demo" size="lg">
                Tell my builder about Homefront
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/sub/login" size="lg" variant="secondary">
                Subcontractor sign in
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
