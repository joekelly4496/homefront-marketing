import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { FaqList } from '@/components/ui/FaqList';
import { PageHeader } from '@/components/ui/PageHeader';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import {
  graph,
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from '@/lib/schema';
import {
  brand,
  pricing,
  coreFaqs,
  pricingFaqs,
  signupHref,
  trialLength,
} from '@/lib/content';

const title = 'Frequently Asked Questions';
const description =
  'What Afterkey is, who it is for, what it costs, what the AI does, how homeowners use it, and how it differs from a CRM. Straight answers, no sales call.';

export const metadata = pageMetadata({
  title,
  description,
  path: '/faq',
});

/** Pricing FAQs live on /pricing too; both pages render the same source text. */
const allFaqs = [...coreFaqs, ...pricingFaqs];

export default function FaqPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: '/faq' }),
    breadcrumbSchema([{ name: 'FAQ', path: '/faq' }]),
    faqPageSchema(allFaqs),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      <PageHeader
        eyebrow="FAQ"
        title="Questions builders actually ask"
        subtitle={`${brand.definition} Below are direct answers to the questions that come up before builders switch — including the ones about price, data, and what the AI will and won't do.`}
      />

      {/* The definition, stated once more as a standalone block */}
      <section className="py-16 sm:py-20">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <Card className="border-brand-200 bg-brand-50/40 p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                The short version
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {brand.definition} {brand.purpose} It costs ${pricing.base} per
                month plus ${pricing.perHome} per active home, includes unlimited
                team members and subcontractors, and is sold month-to-month with
                no contract.
              </p>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* Product FAQs */}
      <section className="pb-16 sm:pb-20">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <SectionLabel>About the product</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Product questions
            </h2>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-8 max-w-3xl">
            <FaqList faqs={coreFaqs} />
          </Reveal>
        </Container>
      </section>

      {/* Pricing FAQs */}
      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <SectionLabel>About the price</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Billing questions
            </h2>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-8 max-w-3xl">
            <FaqList faqs={pricingFaqs} />
            <p className="mt-6 text-sm text-slate-600">
              The full breakdown, including add-ons and worked examples, is on
              the{' '}
              <Link
                href="/pricing"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                pricing page
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Still have a question */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Still have a question?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Email{' '}
              <a
                href={`mailto:${brand.email}`}
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                {brand.email}
              </a>{' '}
              and a person will answer. Or start a {trialLength} free trial and
              find out for yourself — self-serve, no sales call.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/compare" size="lg" variant="secondary">
                Compare Afterkey
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
