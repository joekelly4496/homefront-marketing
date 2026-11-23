import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { WarrantyVsBillable } from "@/components/WarrantyVsBillable";
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
  classification,
  homeownerFaqs,
} from "@/lib/content";

const title = "Warranty Requests to Your Builder, Without the Phone Tag";
const description =
  "If your builder runs on Afterkey, you send a warranty or service request with photos, it goes straight to the trade who knows your house, and you can see the status without calling.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/for-homeowners",
});

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
                Something wrong with the house? Send it to the right person.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
                If your builder runs on {brand.name}, you have a portal under
                their name. Describe the problem, add a photo, and it goes
                straight to the trade who knows your house. You see when it’s
                received, who’s coming and when, and photos when it’s done,
                without a single “did you get my text?”
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={loginUrls.homeowner} external size="lg">
                  Homeowner sign in
                </Button>
                <Button href="#warranty" size="lg" variant="secondary">
                  What’s warranty, what isn’t
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

      {/* What's warranty, what's billable — under the builder's brand */}
      <section id="warranty" className="scroll-mt-24 bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Before anyone comes out</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                What’s warranty, what isn’t
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Every request is marked warranty or billable when you send it,
                from your home’s warranty dates. If the trade finds it isn’t
                what it looked like, your builder makes the call and you’re
                told.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink">
                Warranty work is free. Anything billable is priced first, and
                nothing is charged until you approve it.
              </p>
              <div className="relative mt-8 hidden aspect-[3/2] overflow-hidden lg:block">
                <Image
                  src="/images/page-about-modern-ranch.webp"
                  alt="A newly built modern ranch home with a covered entry in soft afternoon light"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="photo object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <WarrantyVsBillable />
            </div>
          </div>
        </Container>
      </section>

      {/* What the portal does for you */}
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
                A request that goes to the right person
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">
                Describe the problem, add a photo, and it routes to the trade
                who knows your house. You talk to them directly, watch the
                status move, and see their photos when it’s done. At night or
                on a weekend it still goes out the moment you send it.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-ink">
                No surprise bills, ever
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">
                {classification.homeowner} Warranty work is never charged, and
                nothing billable is charged until you’ve approved the price.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-ink">
                The record of your house
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-700">
                Documents, warranties, maintenance reminders, and every
                request you’ve made, in one place that stays useful for as
                long as you own the home.
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
              Send them the page written for them. It shows how your requests
              would go straight to the trades who built the house, and how
              your builder hears about each one without being in the middle.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/features" size="lg">
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
                href="/features"
                className="font-semibold text-paper underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
              >
                see how callbacks run on {brand.name}
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
