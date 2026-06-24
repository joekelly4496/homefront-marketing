import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Home, Layers, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { IconBox } from '@/components/ui/IconBox';
import { pricingModel, pricingIncludes } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Usage-based pricing for residential home builders — a small base platform fee plus a recurring fee per active home. Subcontractors join free. Request pricing.',
};

const modelIcons = [Layers, Home];

const faqs = [
  {
    q: 'How does pricing work?',
    a: 'Homefront is usage-based: a small base platform fee plus a recurring fee per active home. Your cost scales with the homes you’re actively servicing, so you’re never paying for capacity you don’t use.',
  },
  {
    q: 'Do subcontractors pay?',
    a: 'No. Subcontractors join free and get a mobile job list, status updates, and photo uploads at no cost.',
  },
  {
    q: 'What counts as an active home?',
    a: 'A home that’s currently under warranty service or enrolled in a homeowner maintenance membership. Once a home is no longer active, it no longer counts toward your usage.',
  },
  {
    q: 'Can I charge homeowners for ongoing service?',
    a: 'Yes. You set a monthly homeowner membership price, collected through Stripe Connect, so you can keep serving homeowners with maintenance and service after the warranty period ends.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Pricing that scales with your homes
            </h1>
            <p className="mt-5 text-balance text-lg text-slate-600">
              A small base platform fee plus a recurring fee per active home. No
              rigid tiers, no paying for capacity you don’t use. Subcontractors
              always join free.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Pricing model */}
      <section className="py-16 sm:py-20">
        <Container size="6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {pricingModel.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <Card className="h-full p-6 sm:p-8">
                  <IconBox icon={modelIcons[i]} accent="brand" />
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                    {point.title}
                  </h2>
                  <p className="mt-2 text-base text-slate-600">
                    {point.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-8">
            <Card className="flex flex-col items-center gap-5 p-8 text-center sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                Let’s build a number that fits your business
              </h3>
              <p className="max-w-xl text-base text-slate-600">
                Tell us how many homes you close and service each year and we’ll
                put together pricing for your operation — no obligation.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/demo" size="lg">
                  Request pricing
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Talk to us
                </Button>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* ROI line */}
      <section className="pb-4">
        <Container size="6xl">
          <Reveal>
            <div className="rounded-3xl bg-brand-700 px-6 py-10 text-center sm:px-12 sm:py-12">
              <p className="mx-auto max-w-3xl text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
                All-in-one platforms bury warranty in an $800-a-month tier full
                of tools you’ll never use. Homefront does the one job that
                actually drives your referrals — for a fraction of the price.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What's included */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Everything’s included
            </h2>
            <p className="mt-4 text-base text-slate-600">
              No feature gates and no surprise add-ons. Every builder gets the
              full platform — you only pay for the homes you’re servicing.
            </p>
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {pricingIncludes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Pricing questions
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-base font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <Plus
                    className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
