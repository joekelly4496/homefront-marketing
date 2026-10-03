import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import {
  graph,
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from "@/lib/schema";
import {
  brand,
  loginUrls,
  newHomeMaintenance,
  classification,
  type Faq,
} from "@/lib/content";

const title = "Maintenance Plans for New Homes, From Your Builder";
const description =
  "A new house needs maintenance from day one. If your builder runs on Afterkey, you get a maintenance plan, reminders, and repairs priced before you’re charged.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/for-homeowners",
});

/**
 * Written for the buyer of a new home, not the builder. The builder is
 * watching too — this page is the homeowner side of the membership pitch.
 */
const homeownerFaqs: Faq[] = [
  {
    q: "Do I have to join the maintenance plan to get warranty repairs?",
    a: "No. Warranty repairs are your builder’s obligation and are free whether or not you join a plan, and joining never changes how quickly warranty work is handled. The maintenance plan covers upkeep — the service every house needs from day one, regardless of who built it.",
  },
  {
    q: "Can I be charged for a repair without agreeing to it?",
    a: "No. Every request is classified as warranty or billable before any work is charged. If a request is billable, you see what it is and what it costs and approve the price in your portal first. The amount charged can never exceed what you approved, and your builder approves it too.",
  },
  {
    q: "Who shows up to do the work?",
    a: "The same trades your builder uses — the plumber, electrician, or HVAC company who already know the house. Once a request is assigned, you and the sub talk directly in the portal to schedule it, and they post status and photos as they go.",
  },
  {
    q: "Do I need an app?",
    a: "No. The portal runs in a web browser on any phone, tablet, or computer. Your builder sends you a link; you sign in and everything about your home is there.",
  },
];

export default function ForHomeownersPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: "/for-homeowners" }),
    breadcrumbSchema([{ name: "For Homeowners", path: "/for-homeowners" }]),
    faqPageSchema(homeownerFaqs),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* Hero */}
      <section className="border-b border-drywall bg-paper">
        <Container size="7xl" className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-tape">For homeowners</p>
              <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Your builder can keep your new house running
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
                A new house needs maintenance from the day you get the keys.
                If your builder runs on {brand.name}, you get a maintenance
                plan under their name: the reminders, the scheduled service,
                and the trades who built the house, all in one place that
                isn’t a text thread.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={loginUrls.homeowner} external size="lg">
                  Homeowner sign in
                </Button>
                <Button href="#maintenance" size="lg" variant="secondary">
                  What a new house needs
                </Button>
              </div>
              <p className="mt-6 text-sm text-slate-600">
                Your builder sends the link. No app to install.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* A new house still needs maintenance */}
      <section id="maintenance" className="scroll-mt-24 bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <SectionLabel>From day one</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {newHomeMaintenance.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                New doesn’t mean maintenance-free. Whoever built your house,
                it needs this on a schedule:
              </p>
              <ul className="mt-4 space-y-1.5">
                {newHomeMaintenance.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-tape"
                      aria-hidden="true"
                    />
                    <span className="text-base text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink">
                Warranty covers what the builder got wrong, and it stays free.
                The maintenance plan covers what every house needs. One never
                stands in front of the other.
              </p>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden lg:col-span-6">
              <Image
                src="/images/page-about-modern-ranch.webp"
                alt="A newly built modern ranch home with a covered entry in soft afternoon light"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="photo object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* What the plan does for you */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>What you get</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              One place for everything about your house
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-ink">
                A maintenance schedule for your actual house
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">
                Built from the manuals for the equipment in your home, with the
                source on every line. The reminders come from your builder, by
                email or text, when something is due.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-ink">
                A request that goes to the right person
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">
                Describe the problem, add a photo, and it routes to the trade
                who knows your house. You talk to them directly, watch the
                status move, and see their photos when it’s done.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-ink">
                No surprise bills, ever
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">
                {classification.homeowner} Warranty work is never charged, and
                anything billable needs your approval of the price first.
              </p>
            </Card>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-600">
            The portal carries your builder’s name because it is their
            service. {brand.name} is the software underneath it.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Questions</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                Homeowner questions
              </h2>
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={homeownerFaqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA — for the homeowner whose builder isn't on it yet */}
      <section className="bg-ink py-20 text-paper sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Your builder isn’t on {brand.name} yet?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Send them the page written for them. It explains how the
              maintenance plan works, what it costs them, and why the trades
              who built your house are the ones who should keep it running.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/memberships" size="lg">
                Show my builder how it works
              </Button>
              <Button
                href={loginUrls.homeowner}
                external
                size="lg"
                variant="secondary"
                className="border-paper/40 text-paper hover:border-paper hover:bg-paper/10"
              >
                Homeowner sign in
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Builders:{" "}
              <Link
                href="/memberships"
                className="font-semibold text-paper underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
              >
                this is the homeowner side of the membership pitch
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
