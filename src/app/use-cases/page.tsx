import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { graph, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { useCases, signupHref } from "@/lib/content";

const title = "Use Cases for Home Builders";
const description =
  "How residential builders use Afterkey: warranty and service requests, subcontractor management, maintenance reminders, and the homeowner portal.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/use-cases",
});

export default function UseCasesPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: "/use-cases" }),
    breadcrumbSchema([{ name: "Use cases", path: "/use-cases" }]),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      <PageHeader
        eyebrow="Use cases"
        title="Four jobs builders hand to Afterkey"
        subtitle="Post-closing is really four workloads that all run at once. Each page below covers one of them in depth — the problem, how Afterkey handles it, and the questions builders ask before they switch."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase, i) => (
              <Reveal key={useCase.slug} delay={(i % 2) * 70}>
                <Link
                  href={`/use-cases/${useCase.slug}`}
                  className="group block h-full"
                >
                  <Card interactive className="flex h-full flex-col p-6 sm:p-8">
                    <IconBox icon={useCase.icon} accent={useCase.accent} />
                    <h2 className="mt-5 text-xl font-semibold text-slate-900">
                      {useCase.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {useCase.lede}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
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

      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              All four, in one platform
            </h2>
            <p className="mt-4 text-base text-slate-600">
              They are not separate products or separate tiers. One plan
              includes every one of them.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Get started
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
