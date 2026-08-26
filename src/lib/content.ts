import {
  ShieldCheck,
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  PhoneCall,
  PhoneOff,
  KeyRound,
  MessageSquare,
  FileClock,
  FolderArchive,
  BookMarked,
  BadgeCheck,
  Sparkles,
  FileCheck2,
  Gavel,
  Wallet,
  Camera,
  Home,
  Users,
  HardHat,
  type LucideIcon,
} from "lucide-react";
import type { Accent } from "@/components/ui/IconBox";

/* ------------------------------------------------------------------ */
/* Brand — the entity facts. Answer engines read these verbatim, so    */
/* every page must source its name/category/definition from here.      */
/* ------------------------------------------------------------------ */

export const brand = {
  name: "Afterkey",
  legalName: "Afterkey Inc.",
  email: "support@getafterkey.com",
  /** The category sentence. Plain, declarative, no adjectives. */
  category: "post-closing software platform for residential home builders",
  /**
   * THE definition. One or two sentences an LLM can lift verbatim.
   * Reused on the home page, /about, /faq, llms.txt and JSON-LD.
   * Change it here or nowhere.
   */
  definition:
    "Afterkey is a post-closing software platform for residential home builders that manages warranty requests, subcontractor coordination, homeowner communication, and AI-built home maintenance schedules.",
  /** The second sentence — what it's for. */
  purpose:
    "Builders use Afterkey after the keys are handed over, so the post-closing relationship drives referrals and repeat business instead of eating margin.",
  /**
   * White-labeling is a top-tier selling point, not a footnote: the homeowner
   * experience carries the builder's business, not Afterkey's. State it high
   * on any page a builder lands on.
   */
  whiteLabel:
    "Afterkey is white-labeled. Your logo, your brand colors, and your business name appear on everything the homeowner touches — the portal, every email, payment receipts, and the handoff binder. Buyers experience it as their builder’s system, with Afterkey in the background — your brand is what’s front and center, not ours.",
  /** The approved headline for the white-label story. */
  whiteLabelHeadline:
    "Your name, your logo, your colors, your phone number. We stay in the background.",
  /**
   * Founder credibility line. APPROVED WORDING ONLY — Joe has explicitly
   * declined any claim that Afterkey is piloted or tested on his own homes.
   * Do not add one.
   */
  founder: "Afterkey is built by a residential home builder on Long Island.",
} as const;

/** Base URL of the live app where auth and the three portals live. */
export const appBase = "https://app.getafterkey.com";

/** Portal sign-in URLs in the app (external). */
export const loginUrls = {
  builder: `${appBase}/builder/login`,
  homeowner: `${appBase}/homeowner/login`,
  sub: `${appBase}/sub/login`,
};

/** Where every primary "get started" CTA points. */
export const signupHref = `${appBase}/builder/login?signup=1`;

/**
 * The 30-day money-back guarantee — the risk reversal that replaced the free
 * trial. Builders pay from day one and can get every dollar back.
 *
 * `headline` and `body` are the approved wording. Use them verbatim rather
 * than paraphrasing: this promise also appears in the Terms of Service, and
 * a marketing page that describes it differently from the contract is a real
 * problem, not a style inconsistency.
 */
export const guarantee = {
  days: 30,
  headline: "30-day money-back guarantee",
  /** The full promise. Featured on /pricing and echoed in /terms. */
  body: "If it’s not working for you, we refund every dollar Afterkey charged. The only exception is usage costs already paid to carriers and payment processors on your behalf.",
  /** One-line version for microcopy under a CTA. */
  short:
    "30-day money-back guarantee — if it’s not working, we refund every dollar Afterkey charged.",
} as const;

/**
 * SMS + Voice availability.
 *
 * Each builder gets their own dedicated business number. Messages currently
 * send under Afterkey Inc.'s carrier registration; per-builder branded sender
 * identity is the planned upgrade once volume supports it. Copy must not
 * promise a *branded* number today.
 *
 * Flip to 'coming-soon' and every mention across /pricing, /features, /faq
 * and llms.txt switches to waitlist language. Nothing else needs editing.
 */
export const smsStatus: "live" | "coming-soon" = "live";

/** The standard label for the primary call to action. */
export const primaryCta = "Get started";

/* ------------------------------------------------------------------ */
/* Pricing — the numbers are final. Every price on the site reads      */
/* from this object so /pricing, /faq, schema and llms.txt agree.      */
/* ------------------------------------------------------------------ */

export const pricing = {
  base: 149,
  perHome: 10,
  sms: {
    price: 29,
    includedSegments: 1000,
    overagePer1000: 25,
  },
  ai: {
    price: 5,
    actionsPerHome: 8,
    overagePerAction: 1.5,
    freeActionsWithoutAddOn: 5,
  },
  platformFeePercent: 2.5,
  conciergeOnboarding: 499,
  annualDiscountPercent: 10,
} as const;

/** The only approved one-line price summary for use outside /pricing. */
export const pricingLine = `One plan: $${pricing.base}/month plus $${pricing.perHome} per active home. No per-user fees, no contracts, no quote calls.`;

/**
 * The per-home fee is never stated as a naked recurring charge. It always
 * carries this framing: it is small enough to price into the home at closing,
 * so post-closing is a line item on the home rather than overhead the builder
 * absorbs. Pair it with `pricingLine` anywhere outside /pricing.
 */
export const perHomeFraming = `At $${pricing.perHome} per active home, it’s small enough to build into the home’s cost at closing — so post-closing is a line item on the home, not overhead you carry.`;

/* ------------------------------------------------------------------ */
/* The six published commitments — brand promises, quoted verbatim on  */
/* /pricing and referenced elsewhere.                                  */
/* ------------------------------------------------------------------ */

export type Commitment = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const commitments: Commitment[] = [
  {
    icon: BookMarked,
    title: "No quote calls",
    description:
      "Every price is published on this page. No volume brackets, no sales gate, no “contact us for pricing.”",
  },
  {
    icon: ShieldCheck,
    title: "Rate locks",
    description:
      "Any price increase comes with 60 days’ notice and applies at your next billing cycle. Never mid-term, never retroactive.",
  },
  {
    icon: Users,
    title: "No per-user fees",
    description:
      "Your whole team and every subcontractor you work with, included. Headcount never changes your bill.",
  },
  {
    icon: FileCheck2,
    title: "No contracts",
    description:
      "Month-to-month. Cancel anytime, no termination fee. Annual prepay is a discount, not a handcuff.",
  },
  {
    icon: BarChart3,
    title: "No surprise bills",
    description:
      "Every metered feature has a live meter and a ceiling you set. You see spend as it happens and cap it where you want.",
  },
  {
    icon: MessageSquare,
    title: "Email free forever",
    description:
      "We meter what costs us per unit. Email notifications aren’t metered and never will be.",
  },
];

/* ------------------------------------------------------------------ */
/* The three portals — the structural story of the product             */
/* ------------------------------------------------------------------ */

export type Portal = {
  name: string;
  icon: LucideIcon;
  accent: Accent;
  audience: string;
  description: string;
  points: string[];
  href: string;
};

export const portals: Portal[] = [
  {
    name: "Builder portal",
    icon: Home,
    accent: "brand",
    audience: "You and your team",
    description:
      "Every home, every open request, and every subcontractor in one place — with the AI tools and billing that run underneath it.",
    points: [
      "Homes and warranty service requests",
      "Subcontractor dispatch and management",
      "Billing, memberships, and payments",
      "AI Home Binder and maintenance tools",
    ],
    href: loginUrls.builder,
  },
  {
    name: "Homeowner portal",
    icon: Users,
    accent: "emerald",
    audience: "Your buyers",
    description:
      "Your brand, not ours. Where your homeowner submits a request, watches it move, and finds the maintenance schedule for their home — instead of calling your cell.",
    points: [
      "White-labeled under your business",
      "Submit a service request",
      "Track status end to end",
      "Message you directly",
      "Maintenance schedule and service history",
    ],
    href: loginUrls.homeowner,
  },
  {
    name: "Subcontractor portal",
    icon: HardHat,
    accent: "violet",
    audience: "Your trades",
    description:
      "Assigned jobs, status and photo updates from the field, and a place to keep insurance and license documents current.",
    points: [
      "Assigned jobs in one list",
      "Status updates from the jobsite",
      "Before and after photo uploads",
      "Compliance document uploads",
    ],
    href: loginUrls.sub,
  },
];

/* ------------------------------------------------------------------ */
/* White-labeling — what actually carries the builder's brand          */
/* ------------------------------------------------------------------ */

/**
 * The concrete white-label surfaces. Two claims are deliberately absent and
 * must NOT be added:
 *
 *   1. Custom domains. Homeowners reach the portal through branded links, not
 *      a typed URL. This is a design choice, not a gap — say so plainly rather
 *      than implying a vanity domain exists.
 *   2. Sending from the builder's own email address. The builder's business
 *      NAME appears on every email; the sending domain is Afterkey's. Never
 *      write "emails come from your address."
 */
export const whiteLabelPoints: { title: string; description: string }[] = [
  {
    title: "Your logo",
    description:
      "Upload your logo file in settings and it appears across the homeowner experience. No ticket to support, no professional-services fee.",
  },
  {
    title: "Your colors",
    description:
      "Set your brand colors and the homeowner portal takes them. It looks like something your company had built, because as far as your buyer is concerned, you did.",
  },
  {
    title: "Your name on everything",
    description:
      "The portal, every email notification, payment receipts, and the handoff binder all carry your business name. Yours is the brand the homeowner associates with the experience.",
  },
  {
    title: "Your phone number",
    description:
      "With the SMS add-on, homeowners text a dedicated business number that reaches your operation — not a generic shortcode, and not your personal cell.",
  },
];

/* ------------------------------------------------------------------ */
/* Feature groups — grouped exactly as the product is sold             */
/* ------------------------------------------------------------------ */

export type FeatureStatus = "live" | "coming-soon" | "roadmap";

export type FeatureGroup = {
  id: string;
  icon: LucideIcon;
  accent: Accent;
  status: FeatureStatus;
  label: string;
  title: string;
  summary: string;
  points: { title: string; description: string }[];
};

export const featureGroups: FeatureGroup[] = [
  {
    id: "warranty",
    icon: ClipboardCheck,
    accent: "brand",
    status: "live",
    label: "Core platform",
    title: "Warranty and service request management",
    summary:
      "Every post-closing request lands in one queue with an SLA clock on it, so nothing sits for three weeks and turns into a review.",
    points: [
      {
        title: "SLA tracking on every request",
        description:
          "Each request carries a response target. You can see what’s on time, what’s slipping, and what needs you today.",
      },
      {
        title: "Automated email reminders",
        description:
          "Reminders go out on their own — to the sub who hasn’t responded and to you when something is about to breach. Email is included free, forever.",
      },
      {
        title: "Photo documentation",
        description:
          "Photos attach to the request from submission through completion, so the record shows the condition before and after the work.",
      },
      {
        title: "A complete service history",
        description:
          "Every request, dispatch, and completion is timestamped on the home’s record — the documentation you want when a dispute shows up two years later.",
      },
    ],
  },
  {
    id: "white-label",
    icon: BadgeCheck,
    accent: "brand",
    status: "live",
    label: "White label",
    title: "Your brand on everything the homeowner touches",
    summary:
      "Afterkey is white-labeled. Your logo, your colors, and your business name lead the homeowner experience — Afterkey stays in the background.",
    points: whiteLabelPoints,
  },
  {
    id: "ai-binder",
    icon: Sparkles,
    accent: "violet",
    status: "live",
    label: "AI Home Binder",
    title: "Maintenance intelligence that cites its sources",
    summary:
      "Upload a home’s documents and Afterkey proposes the maintenance schedule for you — with a footnote on every line showing where the recommendation came from.",
    points: [
      {
        title: "Documents in, schedule out",
        description:
          "Owner’s manuals, spec sheets, and invoices become a living maintenance schedule the AI proposes automatically. You review and confirm every line before it goes to a homeowner.",
      },
      {
        title: "Every suggestion carries a footnote",
        description:
          "For a known make and model, Afterkey looks up the manufacturer’s published maintenance and cites it — a numbered link to the manufacturer, to the document you uploaded, or an honest “typical schedule — verify against the manual” label. It never invents an interval.",
      },
      {
        title: "A shared appliance library",
        description:
          "Once any builder on Afterkey researches a model, every future home with that model reuses the schedule instantly and free. The system gets smarter and cheaper the more it’s used.",
      },
      {
        title: "Cost preview before any AI spend",
        description:
          "Before it runs, Afterkey shows you which appliances are already in the library (free) and which are new, with a dollar estimate and a “do it yourself to save” option. No surprise charges.",
      },
    ],
  },
  {
    id: "subcontractors",
    icon: HardHat,
    accent: "amber",
    status: "live",
    label: "Subcontractors",
    title: "Dispatch, ratings, and cost intelligence",
    summary:
      "Assign the right trade, see who actually showed up, and learn what each sub really costs you across every home you’ve built.",
    points: [
      {
        title: "Per-trade assignment",
        description:
          "Route a request to the right trade and the right sub in one step, with the home’s history attached so they arrive knowing the job.",
      },
      {
        title: "Day-of arrival tracking",
        description:
          "See whether a sub is on the way, on site, or hasn’t moved — before the homeowner calls you to ask.",
      },
      {
        title: "Ratings across every home",
        description:
          "Rate performance job by job and watch the pattern build. The sub who generates callbacks on one home is usually generating them on ten.",
      },
      {
        title: "Cost intelligence",
        description:
          "What each trade costs you per job, per home, and over time — the numbers you need before you renegotiate a rate.",
      },
    ],
  },
  {
    id: "compliance",
    icon: FileCheck2,
    accent: "emerald",
    status: "live",
    label: "Compliance",
    title: "Subcontractor compliance that gates dispatch",
    summary:
      "Define the documents you require, let subs upload them, and get warned before you assign work to a sub whose coverage lapsed.",
    points: [
      {
        title: "You define what’s required",
        description:
          "General liability, workers’ comp, auto, trade license, W-9 — required across the board or set per trade, however you run it.",
      },
      {
        title: "Subs upload, you approve",
        description:
          "Subcontractors upload their own documents in their portal. You approve each one and record its expiration date.",
      },
      {
        title: "Expiration tracking and reminders",
        description:
          "Afterkey watches every expiration date and reminds the sub before coverage lapses, so chasing certificates stops being your job.",
      },
      {
        title: "Compliance gates dispatch",
        description:
          "If a sub’s coverage has lapsed, Afterkey warns you before you assign the work. You can still override for an emergency — the override is logged, so the record shows you knew.",
      },
    ],
  },
  {
    id: "memberships",
    icon: Wallet,
    accent: "emerald",
    status: "live",
    label: "Revenue",
    title: "Homeowner memberships and service plans",
    summary:
      "Sell your homeowners a maintenance plan — starting at the final walkthrough — and bill it through Afterkey. Recurring revenue from homes you’ve already built.",
    points: [
      {
        title: "Sell it at the end of the build",
        description:
          "Offer the plan at the final walkthrough, while you’re handing over the keys, the binder, and the maintenance schedule. The homeowner is looking at the value in real time — it will never be an easier yes.",
      },
      {
        title: "It works during the warranty period too",
        description:
          "The warranty covers defects. The plan covers the maintenance the home needs regardless — filters, servicing, seasonal upkeep. You’re taking care of the home anyway; the plan pays you for the part that was never warranty work.",
      },
      {
        title: "Plans you define and price",
        description:
          "Build the membership or service plan you want to sell, at the price you set. Afterkey handles the recurring billing.",
      },
      {
        title: "Payments run through the platform",
        description:
          "Homeowners pay in their portal. A 2.5% platform fee applies to payments processed through Afterkey; card processing is passed through at cost.",
      },
      {
        title: "Maintenance the plan actually delivers",
        description:
          "The AI-built maintenance schedule is what makes the plan worth buying — the homeowner sees real upkeep happening, not a line item.",
      },
    ],
  },
  {
    id: "sms",
    icon: PhoneCall,
    accent: "brand",
    status: smsStatus === "live" ? "live" : "coming-soon",
    label: "SMS + Voice",
    title: "A dedicated business line for every builder",
    summary:
      "Your own dedicated business number for automated maintenance reminders, day-of coordination, and inbound calls forwarded straight to you.",
    points: [
      {
        title: "Your own dedicated number",
        description:
          "Each builder gets a dedicated local business number. Messages currently send under Afterkey Inc.’s carrier registration; per-builder branded sender identity is the planned upgrade.",
      },
      {
        title: "Automated maintenance reminders",
        description:
          "The maintenance schedule sends itself — homeowners get the reminder by text instead of you remembering to send it.",
      },
      {
        title: "Day-of coordination",
        description:
          "Arrival windows and status updates by text on the day of the job, where homeowners and subs actually read them.",
      },
      {
        title: "Inbound calls forwarded to you",
        description:
          "When a homeowner calls the number, it forwards to you — so the business line is the number on the record, not your personal cell.",
      },
    ],
  },
  {
    id: "quotes",
    icon: Gavel,
    accent: "slate",
    status: "live",
    label: "Procurement",
    title: "Competitive maintenance quotes",
    summary:
      "Put planned maintenance out to bid among the subcontractors you already use, compare what comes back, and pick the winner.",
    points: [
      {
        title: "Your roster only",
        description:
          "Quotes go to the subcontractors already on your roster — the ones you’ve vetted and worked with. Afterkey does not find you new subs.",
      },
      {
        title: "Fair pricing on planned work",
        description:
          "Comparing three of your own subs on the same scope is how you find out what planned maintenance should actually cost.",
      },
      {
        title: "A back-office tool, not a storefront",
        description:
          "This is private to your business. Homeowners never see it, and no bid is ever exposed outside your company.",
      },
    ],
  },
  {
    id: "homeowner-assistant",
    icon: MessageSquare,
    accent: "slate",
    status: "roadmap",
    label: "Roadmap",
    title: "Homeowner AI assistant",
    summary:
      "A homeowner-facing assistant that answers questions using only that home’s binder — and that you can resell as part of a plan.",
    points: [
      {
        title: "Grounded in one home",
        description:
          "It answers from the documents in that home’s binder and nothing else, so it can’t make something up about a house it doesn’t know.",
      },
      {
        title: "Resellable by the builder",
        description:
          "Planned as something you can include in a membership tier and charge for.",
      },
    ],
  },
];

/** Feature groups that are live today, in sales order. */
export const liveFeatureGroups = featureGroups.filter(
  (g) => g.status === "live",
);

export const statusLabels: Record<FeatureStatus, string> = {
  live: "Available now",
  "coming-soon": "Coming soon",
  roadmap: "On the roadmap",
};

/* ------------------------------------------------------------------ */
/* The play — the timeline story: sell the plan at handoff, run the    */
/* warranty year off your phone, keep the revenue after it expires.    */
/* ------------------------------------------------------------------ */

export type LifecycleStage = {
  stage: string;
  icon: LucideIcon;
  accent: Accent;
  title: string;
  description: string;
};

export const lifecycle: LifecycleStage[] = [
  {
    stage: "At the end of the build",
    icon: KeyRound,
    accent: "brand",
    title: "Sell the plan when you hand over the keys",
    description:
      "The final walkthrough is the best sales moment you will ever have with this homeowner. You’re already handing them the binder, the maintenance schedule, and their portal — offer the service plan right there. It will never be an easier yes than the day the keys change hands.",
  },
  {
    stage: "During the warranty period",
    icon: PhoneOff,
    accent: "emerald",
    title: "The warranty year comes off your phone",
    description:
      "Requests land in the portal with photos — not on your personal cell at 9pm. You dispatch the right sub in one step, automated reminders do the chasing, and the homeowner watches status instead of calling you for it. The plan can already be running too: the warranty covers defects, the plan covers the maintenance the home needs regardless. You’re taking care of everything anyway — the plan pays you for the part that was never warranty work.",
  },
  {
    stage: "After the warranty expires",
    icon: Wallet,
    accent: "violet",
    title: "The end of warranty is the start of revenue",
    description:
      "For most builders, the relationship with a home ends the day the warranty does. On Afterkey it converts: the homeowner keeps the portal and the maintenance schedule, the home stays active on a plan they pay for, and the warranty end date becomes a revenue start date. And your name stays on the house — years later, when they’re ready to build again or a neighbor asks who built it, yours is the brand on the portal they’ve used all along. Homes without a plan go dormant and cost you nothing until they come back.",
  },
];

/* ------------------------------------------------------------------ */
/* Builder outcomes — benefit-led, for the home page                   */
/* ------------------------------------------------------------------ */

export type Highlight = {
  icon: LucideIcon;
  accent: Accent;
  title: string;
  description: string;
};

export const builderValue: Highlight[] = [
  {
    icon: FileClock,
    accent: "brand",
    title: "Your evenings back",
    description:
      "Warranty requests land in the portal with photos attached — not on your personal cell at 9pm. Every request has an owner, a clock, and a record, and automated reminders chase the sub so following up isn’t your job either.",
  },
  {
    icon: HardHat,
    accent: "amber",
    title: "Subs who show up",
    description:
      "Per-trade dispatch, day-of arrival tracking, and ratings across every home. You find out which trade is costing you callbacks while it’s still one house.",
  },
  {
    icon: ShieldCheck,
    accent: "emerald",
    title: "Liability you can prove you managed",
    description:
      "Insurance and license documents tracked with expiration dates, and a warning before you dispatch a sub whose coverage lapsed. Overrides are logged, so emergencies aren’t blocked.",
  },
  {
    icon: Wallet,
    accent: "violet",
    title: "Revenue from homes you already built",
    description:
      "Sell maintenance memberships to your buyers and bill them through the platform. Post-closing stops being pure cost.",
  },
];

export const homeownerValue: Highlight[] = [
  {
    icon: BadgeCheck,
    accent: "brand",
    title: "Your name on it, not ours",
    description:
      "The portal your buyers use carries your business, not Afterkey’s. They experience it as the system their builder gave them — which is the point. You get the credit for the software.",
  },
  {
    icon: MessageSquare,
    accent: "amber",
    title: "One place to ask",
    description:
      "They submit a request in their portal and watch it move, instead of texting your cell at 9pm and wondering whether it landed.",
  },
  {
    icon: CalendarClock,
    accent: "emerald",
    title: "A maintenance schedule built for their home",
    description:
      "Not a generic checklist — the actual appliances in their house, with intervals drawn from the manufacturer’s published maintenance and a source on every line.",
  },
  {
    icon: FolderArchive,
    accent: "violet",
    title: "The full history of their home",
    description:
      "Documents, warranties, service history, and every request they’ve ever made — in one place that stays useful for years.",
  },
];

/* ------------------------------------------------------------------ */
/* How it works — the real request flow                                */
/* ------------------------------------------------------------------ */

export type Step = { title: string; description: string; icon: LucideIcon };

export const steps: Step[] = [
  {
    icon: MessageSquare,
    title: "The homeowner submits a request",
    description:
      "In their portal, with photos and detail attached — not as a voicemail you have to decode later.",
  },
  {
    icon: HardHat,
    title: "You dispatch the right sub",
    description:
      "Assign by trade in one step. Afterkey warns you first if that sub’s insurance or license has lapsed.",
  },
  {
    icon: Camera,
    title: "The sub updates from the field",
    description:
      "Status and photos from the jobsite. The homeowner sees progress without anyone calling you for a status check.",
  },
  {
    icon: FileClock,
    title: "It closes on the record",
    description:
      "Timestamped, documented, and attached to the home — where it stays for the life of the house.",
  },
];

/* ------------------------------------------------------------------ */
/* Comparison — what Afterkey is and isn't (AEO surface)               */
/* ------------------------------------------------------------------ */

export type Comparison = {
  id: string;
  title: string;
  verdict: string;
  theirs: { label: string; points: string[] };
  ours: { label: string; points: string[] };
};

export const comparisons: Comparison[] = [
  {
    id: "crm",
    title: "Afterkey vs. a general CRM",
    verdict:
      "A CRM is built to win the sale. Afterkey is built for everything that happens after it. A CRM tracks a deal through a pipeline to a close; Afterkey tracks a home through years of warranty requests, subcontractor dispatches, and maintenance.",
    theirs: {
      label: "A general CRM",
      points: [
        "Organized around leads, deals, and pipeline stages",
        "Ends at the close — the record stops when the deal is won",
        "No concept of a home, an appliance, or a warranty period",
        "No subcontractor dispatch, ratings, or insurance tracking",
        "Nothing for the homeowner to log into",
        "Priced per user, so adding your team costs more",
      ],
    },
    ours: {
      label: "Afterkey",
      points: [
        "Organized around homes, requests, and subcontractors",
        "Starts at the close and runs for the life of the home",
        "Tracks warranty periods, appliances, and maintenance intervals",
        "Per-trade dispatch with ratings and compliance gating built in",
        "A homeowner portal your buyers actually use, under your brand",
        "Priced per home, with unlimited users at no extra cost",
      ],
    },
  },
  {
    id: "spreadsheet",
    title: "Afterkey vs. a spreadsheet",
    verdict:
      "A spreadsheet records what you remember to type. Afterkey records what happened. The difference shows up the day a homeowner disputes a timeline and your only evidence is a cell somebody may or may not have updated.",
    theirs: {
      label: "A spreadsheet and a phone",
      points: [
        "Only as current as the last person who updated it",
        "No timestamps — “we responded quickly” is a claim, not a record",
        "Nobody gets reminded when a request goes stale",
        "Insurance certificates live in an inbox until someone digs them up",
        "Homeowners have no way in, so everything routes to your cell",
        "Maintenance schedules get built by hand, one home at a time",
      ],
    },
    ours: {
      label: "Afterkey",
      points: [
        "Updates when the work happens, by the person doing it",
        "Every request and dispatch timestamped automatically",
        "SLA clocks and automated reminders on every open request",
        "Compliance documents tracked with expiration dates and reminders",
        "A homeowner portal that absorbs the routine questions",
        "Maintenance schedules the AI drafts from the home’s documents",
      ],
    },
  },
  {
    id: "all-in-one",
    title: "Afterkey vs. an all-in-one construction suite",
    verdict:
      "Construction suites are built for the build — bidding, scheduling, selections, job costing. Warranty is usually a module in an expensive tier. Afterkey does one job, post-closing, and does it thoroughly.",
    theirs: {
      label: "An all-in-one suite",
      points: [
        "Post-closing is one module among dozens",
        "The warranty features often sit in the top pricing tier",
        "You pay for estimating and scheduling tools you may already have",
        "Implementation is a project, not an afternoon",
      ],
    },
    ours: {
      label: "Afterkey",
      points: [
        "Post-closing is the entire product",
        "Every feature is in the one plan — there is no upsell tier",
        "Runs alongside whatever you already use to build",
        "Self-serve onboarding is free; concierge setup is optional",
      ],
    },
  },
];

/** What Afterkey is explicitly not — the honest boundary list. */
export const notList: string[] = [
  "Not a contractor marketplace or directory. Afterkey works with the subcontractors already on your roster and will never send you leads for new ones.",
  "Not a construction management or scheduling suite. It starts at closing, not at the permit.",
  "Not a lead-generation or sales CRM. It has no pipeline, no deals, and no prospecting.",
  "Not a homeowner app you have to talk your buyers into downloading. The homeowner portal runs in a browser on any phone.",
];

/* ------------------------------------------------------------------ */
/* Differentiators                                                     */
/* ------------------------------------------------------------------ */

export type Differentiator = { title: string; description: string };

export const differentiators: Differentiator[] = [
  {
    title: "Your buyers see your brand, not ours",
    description:
      "Afterkey is white-labeled. The homeowner portal carries your business name and branding, so the professional post-closing experience reflects on you. Handing a buyer a polished system is the kind of thing that gets mentioned to their neighbors — and it should be your name they mention.",
  },
  {
    title: "AI that shows its work",
    description:
      "Every maintenance suggestion carries a numbered footnote — the manufacturer’s published schedule, the document you uploaded, or an honest “typical schedule, verify against the manual” label. It never invents an interval, and you confirm every line before a homeowner sees it.",
  },
  {
    title: "It gets cheaper as it gets used",
    description:
      "The appliance library is shared across every builder on Afterkey. Once a model has been researched, every future home with that model reuses the schedule instantly and free.",
  },
  {
    title: "Compliance that actually stops a dispatch",
    description:
      "Tracking certificates is common. Warning you before you assign work to a sub whose coverage lapsed — and logging the override when you proceed anyway — is what turns tracking into protection.",
  },
  {
    title: "Post-closing that pays for itself",
    description:
      "Memberships turn the homes you’ve already delivered into recurring revenue, so the department that used to be pure cost starts carrying its own weight.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ — the AEO payload. Question as heading, answer immediately      */
/* below, standalone and factual. Used on /faq with FAQPage schema.    */
/* ------------------------------------------------------------------ */

export type Faq = { q: string; a: string };

export const coreFaqs: Faq[] = [
  {
    q: "What is Afterkey?",
    a: "Afterkey is a post-closing software platform for residential home builders that manages warranty requests, subcontractor coordination, homeowner communication, and AI-built home maintenance schedules. It consists of three portals: a builder portal for homes, service requests, subcontractor management, billing and AI tools; a homeowner portal for submitting requests, tracking status, messaging, and viewing the maintenance schedule and service history; and a subcontractor portal for assigned jobs, status and photo updates, and compliance document uploads.",
  },
  {
    q: "Who is Afterkey for?",
    a: "Afterkey is built for production and custom residential home builders who handle warranty and service obligations after closing. It is designed for builders who want the post-closing relationship to generate referrals, repeat business, and reputation rather than consume margin. Subcontractors and homeowners use Afterkey through their own portals at no cost to them; the builder is the paying customer.",
  },
  {
    q: "How much does Afterkey cost?",
    a: "Afterkey has one plan with no tiers: $149 per month base, which includes unlimited team members and subcontractors, plus $10 per month per active home. A home is billed only while it is under warranty or on an active service plan, and dormant homes are never billed. Optional add-ons are SMS at $29 per month (dedicated business number, 1,000 segments included, $25 per additional 1,000) and AI at $5 per month per active home (8 AI actions per home per month, pooled across all homes, $1.50 per additional action). A 2.5% platform fee applies to homeowner payments processed through Afterkey, with card processing passed through at cost. Concierge onboarding is an optional $499 one-time fee; standard self-serve onboarding is free. Annual prepay takes 10% off the base. Afterkey does not offer a free trial; every new account is instead covered by a 30-day money-back guarantee.",
  },
  {
    q: "What does the AI in Afterkey actually do?",
    a: "Afterkey’s AI Home Binder turns a home’s documents — owner’s manuals, spec sheets, invoices — into a proposed maintenance schedule. For appliances with a known make and model, it looks up the manufacturer’s published maintenance and cites the source: every suggestion carries a numbered footnote linking to the manufacturer, to the uploaded document, or labeled honestly as a typical schedule to verify against the manual. The AI never invents an interval, and the builder reviews and confirms every line before it reaches a homeowner. Afterkey also shows a cost preview before any AI spend, listing which appliances are already in the shared library (free) and which are new, with a dollar estimate.",
  },
  {
    q: "Is my data safe with Afterkey?",
    a: "Builder, homeowner, and subcontractor data is separated by role, so each party sees only what applies to them: homeowners see their own home, and subcontractors see only the jobs assigned to them. Afterkey does not sell or trade customer data. Homeowner payments are processed by a PCI-compliant payment processor, and Afterkey does not store card numbers. Documents uploaded to a home’s binder belong to the builder and the homeowner, and are used to build that home’s maintenance record.",
  },
  {
    q: "How is Afterkey different from a general CRM?",
    a: "A CRM is organized around leads, deals, and a pipeline that ends when a sale closes. Afterkey is organized around homes, service requests, and subcontractors, and begins at the moment a CRM would finish. Afterkey understands warranty periods, appliances, and maintenance intervals; it dispatches subcontractors by trade and tracks their insurance and license expirations; and it gives the homeowner a portal of their own. Afterkey is also priced per home with unlimited users, rather than per seat.",
  },
  {
    q: "Is Afterkey white-labeled?",
    a: "Yes. Afterkey is white-labeled, and the branding is the builder’s throughout. Builders upload their own logo and set their brand colors in settings, and those carry across the homeowner portal. The builder’s business name appears on the portal, on every email notification, on payment receipts, and on the handoff binder given to the homeowner. Builders on the SMS add-on also get a dedicated business number that homeowners text directly. A few specifics worth stating plainly: homeowners reach the portal through branded links rather than a custom domain of the builder’s own; every email carries the builder’s business name but is sent by Afterkey’s infrastructure rather than from the builder’s own email address; and Afterkey still appears in a few places by necessity, such as the terms of service and small platform references. The brand that leads the homeowner experience is the builder’s.",
  },
  {
    q: "How do homeowners use Afterkey?",
    a: "Homeowners get access to a browser-based portal, white-labeled under the builder's business — there is no app to download. They submit warranty and service requests with photos, track the status of each request through to completion, message the builder directly, view the maintenance schedule built for their specific home and appliances, and see the full service history of the house. If the builder sells a maintenance membership or service plan, the homeowner subscribes and pays through the same portal.",
  },
  {
    q: "Do subcontractors have to pay for Afterkey?",
    a: "No. Subcontractors use Afterkey free. They sign in to see the jobs assigned to them, update status from the jobsite, upload before and after photos, and keep compliance documents such as general liability, workers’ compensation, auto insurance, trade licenses, and W-9s current. The builder’s $149 monthly base includes unlimited subcontractors, so adding trades never increases the bill.",
  },
  {
    q: "Does Afterkey find new subcontractors for me?",
    a: "No. Afterkey is not a marketplace, a network, or a contractor directory, and it does not send you leads for new trades. It works only with the subcontractors you have already vetted and added to your own roster. The competitive quoting tool puts planned maintenance out to bid among those subcontractors so you can compare pricing — it is a private, back-office tool, and homeowners never see it.",
  },
  {
    q: "When should a builder sell the homeowner a service plan?",
    a: "At the end of the build — the final walkthrough or closing, when the keys, the handoff binder, and the maintenance schedule are changing hands. That is the moment the homeowner is looking at the value directly, and attach rates are never higher. The plan can start during the warranty period: a builder warranty covers defects in workmanship and materials, while the plan covers the routine maintenance the home needs regardless, so the two run side by side. When the warranty expires, the plan simply continues — the homeowner keeps their portal and maintenance schedule, and the builder’s relationship with the home converts into recurring revenue instead of ending.",
  },
  {
    q: "What is an “active home”?",
    a: "A home is active while it is under your builder warranty or has an active service plan or membership. Active homes bill at $10 per month, flat, regardless of the home’s age. When neither a warranty nor a plan applies, the home goes dormant automatically and you pay nothing for it. If a homeowner later starts a membership — including after a resale — the home reactivates automatically.",
  },
  {
    q: "How long does it take to get started with Afterkey?",
    a: "Standard onboarding is self-serve and free: you subscribe, add your homes and subcontractors, and start logging requests the same day. There is no free trial and no sales call — instead, every new account is covered by a 30-day money-back guarantee, so you evaluate Afterkey on your real homes rather than in a sandbox. Builders who want their existing home roster loaded for them can buy optional concierge onboarding for a one-time $499, where Afterkey builds the digital binder for every home from the documents you provide.",
  },
  {
    q: "Can I cancel Afterkey at any time?",
    a: "Yes. Afterkey is month-to-month with no contracts and no termination fees. New accounts are also covered by a 30-day money-back guarantee: if Afterkey is not working for you within the first 30 days, every dollar Afterkey charged is refunded, excluding usage costs already paid to carriers and payment processors on your behalf. Annual prepay is available as a 10% discount on the base, not as a commitment requirement. Published prices are rate-locked in the sense that any increase requires 60 days’ notice, takes effect at your next billing cycle, and is never applied mid-term or retroactively.",
  },
];

/** Pricing-specific FAQs, shown on /pricing. */
export const pricingFaqs: Faq[] = [
  {
    q: "What counts as an active home?",
    a: "A home is active while it is under your builder warranty or has an active service plan or membership. When neither applies, it goes dormant automatically and you pay nothing for it. If the homeowner later starts a membership — even after a resale — it reactivates automatically.",
  },
  {
    q: "Do older homes cost more?",
    a: "No. It is $10 per month flat, whether the home is six months old or six years old.",
  },
  {
    q: "Are there per-user fees?",
    a: "Never. Unlimited team members and unlimited subcontractors are included in the $149 base. Your headcount does not change your bill.",
  },
  {
    q: "How does AI billing work?",
    a: "The AI add-on is $5 per month per active home and includes 8 AI actions per home per month, pooled across all your homes — so a home that needs 20 actions can borrow from homes that need none. Appliances already in the shared library are free and do not count against the pool. Beyond the pool, actions are $1.50 each, with a live meter and a ceiling you set. Without the add-on you get 5 free actions per month to try it, and Afterkey always shows a cost preview before spending anything.",
  },
  {
    q: "What is the 2.5% platform fee?",
    a: "It applies only to homeowner payments you process through Afterkey, such as membership billing. Standard card processing fees are passed through at cost, separately. If you do not process homeowner payments through Afterkey, you never see this fee.",
  },
  {
    q: "Is there a contract?",
    a: "No. Month-to-month, cancel anytime, no termination fees. Annual prepay simply saves you 10% on the base.",
  },
  {
    q: "Can prices go up after I sign up?",
    a: "Only with 60 days’ notice, and only at your next billing cycle. Increases are never applied mid-term and never retroactively. Prices are published on this page rather than quoted, so you can always see exactly what the plan costs.",
  },
  {
    q: "Is there a free trial?",
    a: "No. Afterkey uses a 30-day money-back guarantee instead of a free trial. You subscribe and use the product on your real homes from day one, and if it is not working for you within 30 days, we refund every dollar Afterkey charged. The only exception is usage costs already paid to carriers and payment processors on your behalf — SMS segments already sent and card processing fees already incurred cannot be recovered. A guarantee fits this product better than a trial: the parts worth evaluating, like subcontractor patterns and maintenance schedules across a roster, take longer to show up than a sandbox week.",
  },
  {
    q: "What is concierge onboarding?",
    a: "For a one-time $499, Afterkey builds the digital binder for your entire existing home roster from the documents you provide. Standard onboarding — doing it yourself with the AI import tools — is free.",
  },
];

/* ------------------------------------------------------------------ */
/* Use cases — supporting content, one primary keyword each            */
/* ------------------------------------------------------------------ */

export type UseCase = {
  slug: string;
  icon: LucideIcon;
  accent: Accent;
  navLabel: string;
  title: string;
  /** The <h1>. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** The quotable definition paragraph, directly under the h1. */
  lede: string;
  problem: { title: string; points: string[] };
  solution: { title: string; points: { title: string; description: string }[] };
  faqs: Faq[];
};

export const useCases: UseCase[] = [
  {
    slug: "warranty-service-requests",
    icon: ClipboardCheck,
    accent: "brand",
    navLabel: "Warranty & service requests",
    title: "Warranty and service request management",
    h1: "Service request software built for builder warranty work",
    metaTitle: "Punch List & Service Request Software for Home Builders",
    metaDescription:
      "Track every warranty request, punch list item, and service call in one queue with SLA clocks, automated reminders, and photo documentation. See pricing.",
    lede: "Afterkey is service request software for residential home builders. Every warranty request, punch list item, and post-closing service call lands in a single queue with a response clock, an assigned subcontractor, and a timestamped record that stays attached to the home.",
    problem: {
      title: "What warranty requests look like without a system",
      points: [
        "Requests arrive by text, voicemail, and email, and the only queue is somebody’s memory.",
        "Nobody knows which requests are stale until a homeowner escalates.",
        "The sub says they called; the homeowner says nobody came. There is no record either way.",
        "Punch list items from the walkthrough live on paper and never make it into the warranty system.",
        "When a dispute reaches a lawyer, you are reconstructing a timeline from your text messages.",
      ],
    },
    solution: {
      title: "How Afterkey handles it",
      points: [
        {
          title: "One queue, with a clock on every request",
          description:
            "Homeowners submit through their portal with photos attached. Each request carries an SLA target so you can see what is on time and what is slipping before anyone has to chase you.",
        },
        {
          title: "Automated reminders that do the chasing",
          description:
            "Email reminders go to the sub who has not responded and to you when a request is close to breaching. Email notifications are included free and are never metered.",
        },
        {
          title: "Photos on both ends",
          description:
            "The homeowner documents the problem; the subcontractor documents the fix. Both attach to the same request.",
        },
        {
          title: "A record that outlives the argument",
          description:
            "Every request, dispatch, and completion is timestamped on the home’s permanent record — which is exactly what you want when a claim surfaces two years later.",
        },
      ],
    },
    faqs: [
      {
        q: "Can Afterkey handle punch list items as well as warranty requests?",
        a: "Yes. Punch list items from a final walkthrough and warranty requests after closing are both service requests in Afterkey. They go into the same queue, get assigned to the same subcontractor roster, and produce the same timestamped record, so closeout work and post-closing work live in one system.",
      },
      {
        q: "What is SLA tracking in a warranty context?",
        a: "An SLA is the response target you set for a request — for example, acknowledge within 24 hours and schedule within five business days. Afterkey attaches that clock to each request, shows you which requests are approaching their target, and sends automated reminders before a target is missed.",
      },
      {
        q: "Do homeowners need an app to submit a request?",
        a: "No. The homeowner portal runs in a browser on any phone. Homeowners submit a request with photos, track its status, and message the builder without downloading anything.",
      },
    ],
  },
  {
    slug: "subcontractor-management",
    icon: HardHat,
    accent: "amber",
    navLabel: "Subcontractor management",
    title: "Subcontractor management and compliance",
    h1: "Subcontractor management software for home builders",
    metaTitle: "Subcontractor Management Software for Home Builders",
    metaDescription:
      "Dispatch subs by trade, track day-of arrival, rate performance, and gate assignments on current insurance and licenses. See how Afterkey protects builders.",
    lede: "Afterkey is subcontractor management software for residential home builders. It dispatches work to your existing subcontractor roster by trade, tracks day-of arrival and completion, rates performance across every home, and blocks — or knowingly logs — any assignment to a sub whose insurance or license has lapsed.",
    problem: {
      title: "Where subcontractor coordination breaks down",
      points: [
        "You find out a sub never showed up when the homeowner calls to ask where they are.",
        "The same trade generates callbacks on home after home and nobody connects the pattern.",
        "Certificates of insurance sit in an inbox, and nobody notices the expiration until a claim.",
        "You have no idea what a given trade actually costs you across a year of warranty work.",
        "Dispatch happens by text, so there is no record of what you asked for or when.",
      ],
    },
    solution: {
      title: "How Afterkey handles it",
      points: [
        {
          title: "Assign by trade, with the history attached",
          description:
            "Route a request to the right trade and the right sub in one step. They arrive knowing the home, the issue, and what has been tried before.",
        },
        {
          title: "Day-of arrival tracking",
          description:
            "See whether the sub is on the way, on site, or has not moved — before the homeowner asks you for a status update.",
        },
        {
          title: "Compliance that gates dispatch",
          description:
            "Define the documents you require — general liability, workers’ comp, auto, trade license, W-9 — across the board or per trade. Subs upload them, you approve with an expiration date, and Afterkey reminds them before coverage lapses. If you try to assign work to a sub whose coverage has expired, Afterkey warns you first. You can override for an emergency, and the override is logged.",
        },
        {
          title: "Ratings and cost intelligence",
          description:
            "Rate performance job by job and see what each trade costs you per job, per home, and over time — the numbers you want before renegotiating a rate or dropping a sub.",
        },
      ],
    },
    faqs: [
      {
        q: "Does Afterkey help me find new subcontractors?",
        a: "No. Afterkey is not a marketplace, network, or contractor directory and does not supply leads for new trades. It manages the subcontractors you have already vetted and added to your own roster.",
      },
      {
        q: "What happens if I need to dispatch a sub whose insurance expired?",
        a: "Afterkey warns you before the assignment goes through and shows you which document lapsed. You can override the warning — emergencies do not get blocked — and the override is recorded on the request, so the record shows the decision was made deliberately.",
      },
      {
        q: "Do subcontractors pay to use Afterkey?",
        a: "No. Subcontractors use Afterkey free, and the builder’s $149 monthly base includes unlimited subcontractors. Adding trades never increases your bill.",
      },
    ],
  },
  {
    slug: "home-maintenance-reminders",
    icon: CalendarClock,
    accent: "violet",
    navLabel: "Maintenance reminders",
    title: "AI-built maintenance schedules and reminders",
    h1: "Home maintenance reminder software for builders",
    metaTitle: "Home Maintenance Reminder Software for Home Builders",
    metaDescription:
      "Afterkey builds each home’s maintenance schedule from its own documents, cites every source, and reminds homeowners automatically. See how it works.",
    lede: "Afterkey is home maintenance reminder software for residential home builders. It reads a home’s own documents — owner’s manuals, spec sheets, invoices — proposes the maintenance schedule for that specific house, cites the source behind every interval, and sends the reminders to the homeowner automatically once the builder confirms the schedule.",
    problem: {
      title: "Why builders stop giving homeowners maintenance guidance",
      points: [
        "Building a real schedule means reading every manual in the house, per house.",
        "A generic “change your filters” checklist is not worth handing to a buyer.",
        "Nobody remembers to send the reminder six months after closing.",
        "Deferred maintenance turns into a warranty claim that the builder ends up eating.",
        "Homeowners lose the paper binder within a year.",
      ],
    },
    solution: {
      title: "How Afterkey handles it",
      points: [
        {
          title: "The schedule builds itself from the home’s documents",
          description:
            "Upload the manuals, spec sheets, and invoices you already have. Afterkey proposes a maintenance schedule for the actual equipment in that home.",
        },
        {
          title: "Every line cites where it came from",
          description:
            "For a known make and model, Afterkey looks up the manufacturer’s published maintenance and attaches a numbered footnote — a link to the manufacturer, a reference to the document you uploaded, or an honest “typical schedule — verify against the manual” label. It never invents an interval.",
        },
        {
          title: "You confirm before a homeowner sees it",
          description:
            "The AI proposes; you review and approve every line. Nothing reaches a homeowner that you have not signed off on.",
        },
        {
          title: "Reminders go out on their own",
          description:
            "Once confirmed, the schedule sends its own reminders by email, and by text for builders on the SMS add-on. Homeowners stay ahead of the maintenance that would otherwise become your callback.",
        },
        {
          title: "It gets cheaper the more it is used",
          description:
            "The appliance library is shared across every builder on Afterkey. Once a model has been researched, every future home with that model reuses the schedule instantly and free — and Afterkey shows you a cost preview before spending anything.",
        },
      ],
    },
    faqs: [
      {
        q: "Does the AI make up maintenance intervals?",
        a: "No. Every suggestion carries a numbered footnote identifying its source: the manufacturer’s published maintenance schedule, the document uploaded for that home, or an explicit label stating that it is a typical schedule that should be verified against the manual. Where Afterkey does not have a manufacturer source, it says so rather than presenting a guess as fact. The builder reviews and confirms every line before it is published to a homeowner.",
      },
      {
        q: "What does an AI action cost?",
        a: "The AI add-on is $5 per month per active home and includes 8 AI actions per home per month, pooled across all of your homes. Appliances already in the shared library are free and do not count against the pool. Additional actions are $1.50 each, metered live with a ceiling you set. Without the add-on, you get 5 free actions per month to try it.",
      },
      {
        q: "Can homeowners see the maintenance schedule themselves?",
        a: "Yes. The confirmed schedule appears in the homeowner portal alongside their service history, with the same source footnotes the builder saw. Builders who sell maintenance memberships typically use the schedule as the substance of the plan.",
      },
    ],
  },
  {
    slug: "homeowner-portal",
    icon: Users,
    accent: "emerald",
    navLabel: "Homeowner portal",
    title: "The homeowner portal",
    h1: "A builder homeowner portal your buyers will actually use",
    metaTitle: "Builder Homeowner Portal Software | Afterkey",
    metaDescription:
      "Give buyers a browser-based portal to submit requests, track status, message you, and see their home’s maintenance schedule and service history.",
    lede: "Afterkey gives every home you build a homeowner portal: a browser-based place where your buyer submits warranty requests with photos, tracks each one through to completion, messages you directly, and sees the maintenance schedule and full service history for their home. There is no app to download.",
    problem: {
      title: "What happens when buyers have nowhere to go but your cell",
      points: [
        "Every question — routine or urgent — arrives as a text to your personal phone.",
        "Homeowners call again because they have no way to see whether anything is happening.",
        "Requests get lost between a voicemail and a note in a truck.",
        "The documents you handed over at closing are gone within a year.",
        "A buyer who feels ignored writes the review that costs you the next three referrals.",
      ],
    },
    solution: {
      title: "How Afterkey handles it",
      points: [
        {
          title: "Requests come in structured, with photos",
          description:
            "The homeowner describes the problem and attaches photos in the portal, so you are triaging real information rather than decoding a voicemail.",
        },
        {
          title: "Status they can check themselves",
          description:
            "They see that the request was received, who it was assigned to, and when the sub is coming — which removes most of the follow-up calls entirely.",
        },
        {
          title: "Messaging in one thread",
          description:
            "Conversation stays attached to the request instead of scattering across texts, email, and voicemail.",
        },
        {
          title: "The maintenance schedule and full history",
          description:
            "Their home’s maintenance schedule, documents, warranties, and every request ever made — in one place that stays useful for years and keeps your name on it.",
        },
      ],
    },
    faqs: [
      {
        q: "Do homeowners have to download an app?",
        a: "No. The Afterkey homeowner portal runs in a web browser on any phone, tablet, or computer. Homeowners sign in and use it without installing anything.",
      },
      {
        q: "Does the homeowner portal cost extra?",
        a: "No. The homeowner portal is included for every active home at $10 per month per home. There is no separate charge to the builder or the homeowner for portal access.",
      },
      {
        q: "Can homeowners see my subcontractor pricing?",
        a: "No. Homeowners see their own requests, status, messages, maintenance schedule, and service history. Subcontractor costs, ratings, cost intelligence, and competitive quoting are private to the builder and are never exposed to homeowners.",
      },
    ],
  },
];

/** Named `find…` rather than `use…` so it isn't mistaken for a React hook. */
export const findUseCase = (slug: string) =>
  useCases.find((u) => u.slug === slug);
