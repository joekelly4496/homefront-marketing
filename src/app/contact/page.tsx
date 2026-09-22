import { Mail, UserPlus, HelpCircle, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { graph, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { brand, signupHref, guarantee, primaryCta } from "@/lib/content";
import { ContactForm } from "./ContactForm";

const title = "Contact";
const description =
  "Get started with Afterkey, email the team a question about pricing or onboarding, or sign in to your builder, homeowner, or subcontractor portal.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/contact",
});

const options = [
  {
    icon: UserPlus,
    title: "Get started",
    description: `Create your account and set up your first home in minutes. Self-serve, no demo required, and a ${guarantee.days}-day money-back guarantee.`,
    cta: { label: "Get started", href: signupHref },
  },
  {
    icon: Mail,
    title: "Email us",
    description:
      "Questions about pricing, onboarding, or whether Afterkey fits how you work. A person answers.",
    cta: { label: brand.email, href: `mailto:${brand.email}` },
  },
  {
    icon: BookOpen,
    title: "Read the answers first",
    description:
      "Most questions are already answered in writing — what it is, what it costs, what the AI does, and how it compares.",
    cta: { label: "Go to the FAQ", href: "/faq" },
  },
  {
    icon: HelpCircle,
    title: "Already a customer?",
    description:
      "Sign in to your portal — builder, homeowner, or subcontractor.",
    cta: { label: "Go to sign in", href: "/login" },
  },
];

export default function ContactPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: "/contact" }),
    breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      <PageHeader
        eyebrow="Contact"
        title="Talk to us — or skip us entirely"
        subtitle="Pricing is published and setup is self-serve, so you never have to sit through a call to find out what Afterkey costs. But if you want to talk to somebody, we are glad to."
      />

      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
            {/* The form is the main event — a mailto link loses the builder
                whose phone has no mail app set up. */}
            <Reveal>
              <Card className="p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  Send us a message
                </h2>
                <p className="mt-1.5 text-sm text-slate-600">
                  Pricing, onboarding, or whether Afterkey fits how you work. A
                  person answers within one business day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </Card>
            </Reveal>

            <div className="space-y-5">
              {options.map((opt, i) => (
                <Reveal key={opt.title} delay={i * 70}>
                  <Card className="flex h-full flex-col p-5 sm:p-6">
                    <IconBox icon={opt.icon} accent="brand" />
                    <h2 className="mt-3 text-base font-semibold text-slate-900">
                      {opt.title}
                    </h2>
                    <p className="mt-1 flex-1 text-sm text-slate-600">
                      {opt.description}
                    </p>
                    <a
                      href={opt.cta.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      {opt.cta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={140} className="mt-12 text-center">
            <Button href={signupHref} size="lg">
              {primaryCta}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
