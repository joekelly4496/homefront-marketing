import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { FaqList } from '@/components/ui/FaqList';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import {
  graph,
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from '@/lib/schema';
import {
  useCases,
  findUseCase,
  pricing,
  signupHref,
  trialLength,
} from '@/lib/content';

type Params = { params: Promise<{ slug: string }> };

/** Statically render all four use-case pages at build time. */
export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const useCase = findUseCase(slug);
  if (!useCase) return {};

  return pageMetadata({
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    path: `/use-cases/${useCase.slug}`,
  });
}

export default async function UseCasePage({ params }: Params) {
  const { slug } = await params;
  const useCase = findUseCase(slug);
  if (!useCase) notFound();

  const path = `/use-cases/${useCase.slug}`;
  const related = useCases.filter((u) => u.slug !== useCase.slug);

  const pageGraph = graph([
    webPageSchema({
      name: useCase.metaTitle,
      description: useCase.metaDescription,
      path,
    }),
    breadcrumbSchema([
      { name: 'Use cases', path: '/use-cases' },
      { name: useCase.title, path },
    ]),
    faqPageSchema(useCase.faqs),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* Header — h1 with the definition paragraph immediately below it */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
              <Link href="/use-cases" className="hover:text-slate-900">
                Use cases
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-slate-700">{useCase.title}</span>
            </nav>
            <IconBox
              icon={useCase.icon}
              accent={useCase.accent}
              className="mt-6"
            />
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {useCase.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {useCase.lede}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start your {trialLength} free trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                See pricing
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The problem */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              {useCase.problem.title}
            </h2>
            <ul className="mt-8 space-y-4">
              {useCase.problem.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <XCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                    aria-hidden="true"
                  />
                  <span className="text-base text-slate-600">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* The solution */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <SectionLabel>The solution</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              {useCase.solution.title}
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5">
            {useCase.solution.points.map((point, i) => (
              <Reveal key={point.title} delay={(i % 3) * 60}>
                <Card className="p-6">
                  <div className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <FaqList faqs={useCase.faqs} />
          </Reveal>
        </Container>
      </section>

      {/* Related use cases */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Related
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((item) => (
              <Reveal key={item.slug}>
                <Link
                  href={`/use-cases/${item.slug}`}
                  className="group block h-full"
                >
                  <Card interactive className="h-full p-5">
                    <IconBox icon={item.icon} accent={item.accent} />
                    <h3 className="mt-4 text-base font-semibold text-slate-900">
                      {item.title}
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
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Try it on your own homes
            </h2>
            <p className="mt-4 text-base text-slate-600">
              ${pricing.base}/month plus ${pricing.perHome} per active home,
              unlimited users and subs, no contracts. Start a {trialLength} free
              trial and set up your first home today.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/features" size="lg" variant="secondary">
                See every feature
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
