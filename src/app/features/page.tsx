import Link from 'next/link';
import { ArrowRight, CheckCircle2, Minus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { StatusPill } from '@/components/ui/StatusPill';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { graph, breadcrumbSchema, webPageSchema } from '@/lib/schema';
import {
  brand,
  featureGroups,
  portals,
  differentiators,
  notList,
  signupHref,
  trialLength,
  useCases,
} from '@/lib/content';

const title = 'Home Builder Warranty Management Software';
const description =
  'Afterkey manages warranty requests, subcontractor dispatch and compliance, homeowner portals, and AI-built maintenance schedules. See every feature.';

export const metadata = pageMetadata({
  title,
  description,
  path: '/features',
});

export default function FeaturesPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: '/features' }),
    breadcrumbSchema([{ name: 'Features', path: '/features' }]),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionLabel>Features</SectionLabel>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Everything post-closing, in one platform
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Afterkey is home builder warranty management software that covers
              the full post-closing workload: service requests with SLA
              tracking, subcontractor dispatch and compliance, homeowner
              memberships, and AI-built maintenance schedules that cite their
              sources.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Every feature below is marked with its real availability. Nothing
              on this page is aspirational unless it says so.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Feature groups */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-16">
            {featureGroups.map((group) => (
              <Reveal key={group.id}>
                <div
                  id={group.id}
                  className="grid scroll-mt-24 gap-8 lg:grid-cols-[300px_1fr] lg:gap-12"
                >
                  <div>
                    <IconBox icon={group.icon} accent={group.accent} />
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <SectionLabel>{group.label}</SectionLabel>
                      <StatusPill status={group.status} />
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                      {group.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                      {group.summary}
                    </p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {group.points.map((point) => (
                      <Card key={point.title} className="h-full p-5">
                        <h3 className="text-base font-semibold text-slate-900">
                          {point.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-600">
                          {point.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Three portals */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>The three portals</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              One home, three views of it
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {portals.map((portal) => (
              <Reveal key={portal.name}>
                <Card className="flex h-full flex-col p-6 sm:p-7">
                  <IconBox icon={portal.icon} accent={portal.accent} />
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {portal.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {portal.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {portal.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-600">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why {brand.name}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              What you won’t get anywhere else
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 60}>
                <Card className="h-full p-6 sm:p-7">
                  <div className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {d.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-600">
                        {d.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What Afterkey is not */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Straight talk</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              What {brand.name} is not
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Knowing what a tool doesn’t do saves everyone a demo.
            </p>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <ul className="space-y-4">
              {notList.map((item) => (
                <li key={item} className="flex gap-3">
                  <Minus
                    className="mt-1 h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                  <span className="text-base text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm text-slate-600">
              <Link
                href="/compare"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                Compare Afterkey to a CRM, a spreadsheet, and an all-in-one suite
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Use cases */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Go deeper on the part that matters to you
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <Reveal key={useCase.slug}>
                <Link
                  href={`/use-cases/${useCase.slug}`}
                  className="group block h-full"
                >
                  <Card interactive className="h-full p-5">
                    <IconBox icon={useCase.icon} accent={useCase.accent} />
                    <h3 className="mt-4 text-base font-semibold text-slate-900">
                      {useCase.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                      Read more
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
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Run it on your own homes
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Start a {trialLength} free trial, add your first home, and log a
              real request today. Self-serve setup, no demo required.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                See pricing
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
