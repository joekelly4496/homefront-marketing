import { ArrowRight, ShieldCheck, Receipt, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { graph, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { brand, signupHref, guarantee } from "@/lib/content";

const title = "About";
const description =
  "Afterkey is post-closing software for residential home builders — built so warranty work, subcontractors, and homeowner relationships run on one system.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/about",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Documented, not adversarial",
    description:
      "A complete record protects everyone in the transaction. The builder can show what happened, the subcontractor can show the work was done, and the homeowner can see it without asking. Nobody has to win an argument from memory.",
  },
  {
    icon: Sparkles,
    title: "AI that shows its work",
    description:
      "Software that guesses about someone’s furnace is worse than software that admits it doesn’t know. Every AI suggestion in Afterkey cites its source or says plainly that it’s a typical schedule to verify. The builder confirms every line.",
  },
  {
    icon: Receipt,
    title: "Prices you can read",
    description:
      "Published rates, live meters on anything metered, ceilings you set, and 60 days’ notice before anything changes. If a pricing page needs a phone call to decode, that is a choice somebody made.",
  },
];

export default function AboutPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: "/about" }),
    breadcrumbSchema([{ name: "About", path: "/about" }]),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      <PageHeader
        eyebrow="About"
        title="The part of homebuilding nobody built software for"
        subtitle={`${brand.definition}`}
      />

      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <div className="space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                A builder’s job doesn’t end at closing. The warranty period runs
                for a year or more, the subcontractors who did the work still
                have to come back, and the homeowner has questions for years
                after that. For most builders none of it runs on a system — it
                runs on a phone, a truck-seat notepad, and whoever remembers.
              </p>
              <p>
                That gap is expensive in a way that is hard to see on a P&amp;L.
                Callbacks get handled late because nobody was tracking them. A
                subcontractor’s coverage lapses and nobody notices until there
                is a claim. Deferred maintenance turns into a warranty repair
                the builder eats. And the buyer who felt ignored writes the
                review that quietly costs the next three referrals.
              </p>
              <p>
                {brand.name} exists to close that gap. It gives the builder one
                place to run warranty and service requests, dispatch and manage
                subcontractors, track compliance documents, and hand every
                homeowner a maintenance schedule built from their own home’s
                documents. It gives the homeowner somewhere to go besides the
                builder’s cell phone, and it gives the subcontractor a clear job
                list and a place to keep their paperwork current.
              </p>
              <p>
                The premise is simple: the easier and more professional the
                post-closing relationship, the stickier the builder’s brand.
                Referrals and repeat business come from how a builder behaves
                after the sale, not during it. {brand.name} is built to make
                that part effortless — and, through homeowner memberships, to
                make it pay for itself instead of eating margin.
              </p>
              <p>
                We are early. There is no customer logo wall on this site
                because we have not earned one yet, and we would rather show you
                the product than borrow someone else’s credibility. The pricing
                is published, setup is self-serve, and a 30-day money-back
                guarantee means you can find out whether it fits your operation
                without talking to anybody first.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <Card className="h-full p-6">
                  <IconBox icon={v.icon} accent="brand" />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">
                    {v.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {v.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              See it on your own homes
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Run your next closing on {brand.name}. {guarantee.short}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Get started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/features" size="lg" variant="secondary">
                Explore features
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
