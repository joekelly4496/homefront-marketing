import { ShieldCheck, Receipt, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { graph, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import {
  brand,
  signupHref,
  guarantee,
  primaryCta,
  onboarding,
} from "@/lib/content";

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
        title="The customers every builder already has"
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
                That is the weaker half of the story, and it is the half most
                software tells: make the builder’s life easier. The stronger
                half is that every home a builder has already closed is a
                customer he isn’t earning on. The homeowner needs the HVAC
                serviced twice a year, the water heater flushed, the dryer vent
                cleaned, the dishwasher looked at — from day one, whoever built
                the house — and today they find someone else to do it, or they
                call the builder, who sends a sub over for free.
              </p>
              <p>
                {brand.name} turns those homes into a service business. The
                builder sells a maintenance plan at whatever price his market
                carries — $40 a month for the schedule and the reminders, $500
                for the whole house, lawn to septic, with his subs on the work
                — and it bills monthly to his own account from a portal that
                carries his name. Repairs get priced, approved by
                the homeowner before anyone is charged, and paid out with the
                builder’s markup on them, the sub and the builder paid
                separately. Warranty work stays warranty and stays free; the
                membership is never a paywall in front of it.
              </p>
              <p>
                Easier is the side effect. The homeowner and the sub talk to
                each other in the portal, the builder sees everything and
                touches nothing he doesn’t want to, and the reminders keep him
                in the homeowner’s life every month — which is why he gets the
                call for the basement, the addition, and the neighbor. A
                builder with 200 homes on a membership has recurring revenue,
                an asset he can sell or step back from. A builder with a phone
                full of homeowner texts has a job.
              </p>
              <p>
                {brand.founder} That is why it starts at closing instead of at
                the permit: the year after handoff is the part of the job nobody
                writes software for, and it is the part that decides whether the
                next buyer calls you.
              </p>
              <p>
                It is also why the homeowner side is white-labeled.{" "}
                {brand.whiteLabel} A builder spends years earning a name. The
                software running underneath the experience should not be the one
                collecting the credit for it.
              </p>
              <p>
                We are early. There is no customer logo wall on this site
                because we have not earned one yet, and we would rather show you
                the product than borrow someone else’s credibility. The pricing
                is published, onboarding is concierge — {onboarding.body}{" "}
                — and a 30-day money-back
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
                {primaryCta}
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
