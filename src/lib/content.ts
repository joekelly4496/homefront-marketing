import {
  ShieldCheck,
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  PhoneCall,
  MessageSquare,
  FileClock,
  FolderArchive,
  BookMarked,
  BadgeCheck,
  Sparkles,
  FileCheck2,
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
    "Afterkey is a post-closing software platform for residential home builders that turns the homes they have already closed into a service business: homeowner maintenance memberships the builder prices, paid repair work billed through the builder’s own branded portal, and warranty callbacks routed to the builder’s subs.",
  /** The second sentence — what it's for. */
  purpose:
    "Builders use Afterkey after the keys are handed over so every closed home keeps earning — monthly membership revenue, billed repair work, and the next job — instead of eating margin.",
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
 * The ad landing page at /start. Everything that changes between campaigns
 * lives here, so swapping the video or the booking link is a one-line edit.
 *
 * - videoUrl: a YouTube, Vimeo or Loom share link, or a self-hosted file
 *   path like "/videos/afterkey-ad.mp4". Empty = the page shows the
 *   request-flow walkthrough in the video's place.
 * - bookCallUrl: a Calendly / Cal.com / similar link, shown only to leads
 *   who pass the qualifier at /start/book (Cal.com and Calendly embed
 *   inline; other tools open in a new tab). Empty = qualified leads are told you'll email
 *   them to set a time. Their answers reach your inbox either way.
 * - videoDuration: shown on the play button, e.g. "1:05". Leave empty
 *   rather than guess.
 */
export const adLanding = {
  path: "/start",
  videoUrl: "",
  videoDuration: "",
  videoPoster: "/images/hero-colonial-dusk.webp",
  bookCallUrl: "https://cal.com/joseph-kelly-afterkey/demo",
} as const;

/**
 * The 30-day money-back guarantee — the risk reversal that replaced the free
 * trial. CANONICAL WORDING from the product repo's CLAUDE.md (Pricing Model
 * v2); use `body` verbatim. "Every dollar Afterkey charged" means the base,
 * the per-home line, and the AI add-on for the period; the carve-out is
 * exactly the $29 SMS number charge and SMS overage. Processing on homeowner
 * payments is not something Afterkey charged the builder, so it is outside
 * the promise by construction — don't add language about it either way.
 */
export const guarantee = {
  days: 30,
  headline: "30-day money-back guarantee",
  /** The full promise. Featured on /pricing and echoed in /terms. */
  body: "30-day money-back guarantee. If it’s not working for you, we refund every dollar Afterkey charged. The only exceptions: the $29 SMS add-on for the phone number you used, and any SMS usage over your included allotment.",
  /** One-line version for microcopy under a CTA. */
  short:
    "30-day money-back guarantee — if it’s not working for you, we refund every dollar Afterkey charged.",
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
export const smsStatus = "coming-soon" as "live" | "coming-soon";

/**
 * /welcome — the page a builder sends a homeowner after closing. The link
 * carries the builder's name (?builder=Whitfield+Homes) so the page reads
 * as the builder's, with Afterkey in the background.
 */
export const welcomePath = "/welcome";
export function builderNameFrom(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const name = raw.replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 60);
  return name.length >= 2 ? name : null;
}

/** The standard label for the primary call to action. */
// The CTA continues the headline's story; never "Get started" / "Learn more".
export const primaryCta = "Set up your first home";

/* ------------------------------------------------------------------ */
/* Pricing — the numbers are final. Every price on the site reads      */
/* from this object so /pricing, /faq, schema and llms.txt agree.      */
/*                                                                     */
/* DECISION NOTE (Sept 2026): processing rates are cards 3.5% + 30¢    */
/* and ACH flat 1.25%, raised from at-cost / 1% to absorb Stripe       */
/* Connect costs (payouts, connected-account fees). There is no        */
/* platform fee on homeowner payments. Recurring plan dues are paid by */
/* card OR bank account — never ACH-only, never disparage cards. The   */
/* guarantee covers subscription fees only. This supersedes any older  */
/* numbers; do not revert them.                                        */
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
  /**
   * Payment processing on homeowner payments. There is NO platform fee —
   * these are Afterkey's published flat all-in rates. FRAMING RULES (product
   * CLAUDE.md): describe them as Afterkey's all-in rates that "include every
   * Stripe processing and payout fee" — never as Stripe's own fee, and never
   * "at cost" or "we never mark it up". Allowed: "you pay only processing."
   * Not allowed: a bare "we take no cut" or "100% yours" without the
   * processing mention.
   */
  processing: {
    bankPercent: 1.25,
    cardPercent: 3.5,
    cardFixedCents: 30,
  },
} as const;

/**
 * The only approved description of homeowner-payment costs. No platform fee;
 * flat published all-in processing rates. Never "at cost", never "Stripe's
 * fee" — the rates include every processing and payout cost, and that is the
 * honest way to say it.
 */
export const processingLine = `There’s no platform fee on homeowner payments — you pay only processing, at our published flat rates: ${pricing.processing.bankPercent}% for bank (ACH) payments, ${pricing.processing.cardPercent}% + ${pricing.processing.cardFixedCents}¢ for cards. Those are Afterkey’s all-in rates and include every Stripe processing and payout fee.`;

/**
 * The one competitive comparison allowed on the site: Buildertrend's
 * monthly price for its warranty features. Never a per-transaction rate
 * comparison against anyone. Re-check the figure before each launch.
 */
export const competitorAnchor = {
  name: "Buildertrend",
  monthlyFrom: 829,
  what: "warranty features",
} as const;

/** The only approved one-line price summary for use outside /pricing. */
export const pricingLine = `One plan: $${pricing.base}/month plus $${pricing.perHome} per active home. No per-user fees, no contracts, no quote calls.`;

/**
 * The per-home fee is never stated as a naked recurring charge. Its framing
 * is opportunity: the same home can carry a maintenance membership the
 * builder prices himself, so $10 reads as small next to what the home brings
 * in. Never tell the builder how to account for or pass through the fee —
 * that is his business. Pair it with `pricingLine` anywhere outside /pricing.
 */
export const perHomeFraming = `At $${pricing.perHome} per active home, the fee is small next to what the same home can carry — a maintenance plan you price yourself — and small enough to build into the home’s cost at closing, if that’s how you want to run it.`;

/**
 * Onboarding — per the product CLAUDE.md: standard onboarding is free;
 * concierge onboarding is a $499 one-time option where we build the binder
 * from the builder's documents. Say both plainly; never promise a timeline.
 */
export const onboarding = {
  headline: "Onboarding",
  conciergePrice: 499,
  body: "Standard onboarding is free: add your homes and subs and start the same day. Optional concierge onboarding is a one-time $499 — we build the binder for your homes from your documents.",
  short: "Standard onboarding is free; concierge onboarding, where we build your binders from your documents, is an optional one-time $499.",
} as const;

/* ------------------------------------------------------------------ */
/* The frame — every home a builder has closed is a customer he isn't   */
/* earning on. "Easier" is the side effect; "more money from homes you  */
/* already built" is the headline. Every page carries at least one of   */
/* the five points below, in roughly this order of weight.              */
/* ------------------------------------------------------------------ */

export const thesis = {
  /** The H1. Revenue on homes already built. */
  headline: "You’ve built hundreds of homes. They should still be paying you.",
  /** Supporting line only — never the H1. */
  supporting: "You stop being the only number they have.",
  /** The one-sentence version of the whole shift. */
  short:
    "Every home you’ve closed is a customer you aren’t earning on. Afterkey turns those homes into a service business with recurring revenue.",
} as const;

/**
 * The membership is maintenance, never warranty. Every mention of the
 * membership on the site carries this distinction in one plain sentence.
 * HARD RULE: never imply a homeowner pays monthly for warranty service or
 * that non-members get slower warranty work.
 */
export const membershipDistinction =
  "Warranty covers what the builder got wrong and stays free; the membership covers maintenance, which every house needs from day one, whoever built it.";

/** The same rule for tight spots: hero fine print, button captions. */
export const membershipDistinctionShort =
  "The plan covers maintenance; warranty work stays free.";

/**
 * What's warranty, what's maintenance — the homeowner-facing comparison,
 * shown under the builder's brand. It educates the homeowner so the plan
 * makes sense, and shows the builder how the two stay separate so the
 * "why am I paying for this" call never comes.
 */
export const warrantyVsMaintenance = {
  warranty: {
    title: "Warranty",
    lede: "What your builder is responsible for fixing. Free, always.",
    items: [
      "A window that leaks at the seal",
      "Drywall cracks beyond normal settling",
      "A door that won’t latch after the house settles",
      "Grout, caulk, and finish defects in year one",
      "Plumbing and electrical that was installed wrong",
    ],
    foot: "Covered by your builder’s warranty, member or not.",
  },
  maintenance: {
    title: "Maintenance",
    lede: "What every house needs on a schedule, from day one, whoever built it.",
    items: [
      "HVAC serviced twice a year",
      "Boiler or furnace serviced annually",
      "Dryer vent cleaned",
      "Water heater flushed",
      "Appliances maintained on the manufacturer’s schedule",
      "Plumbing checked before it leaks",
      "Septic pumped, gutters cleaned, lawn and grounds kept up",
    ],
    foot: "What a maintenance plan covers — up to the whole house.",
  },
} as const;

/** How a repair gets paid — one line per step, no jargon. */
export const repairPaySteps = [
  "The homeowner submits the request in your branded portal.",
  "It’s classified warranty or billable — by you before dispatch, or by the sub before heading out or on site.",
  "If it’s billable, you price it, and you and the homeowner both approve before anything is charged.",
  "The sub does the work and posts completion photos.",
  "The homeowner pays in the portal — card or bank account on file.",
  "Your markup is added, processing is deducted, and the sub and you are paid out separately.",
] as const;

/**
 * The objection to say out loud: "my homes are new, nothing needs service."
 * A brand-new house needs all of this from day one, regardless of who built it.
 */
export const newHomeMaintenance = {
  heading: "A new house still needs maintenance",
  lede: "Prospects assume a new home has nothing to service yet. It does, from the day the keys change hands, whoever built it:",
  items: [
    "HVAC serviced twice a year",
    "Boiler or furnace serviced annually",
    "Dryer vent cleaned",
    "Water heater flushed",
    "Appliances maintained on the manufacturer’s schedule",
    "Septic pumped, gutters cleaned, lawn and grounds kept up",
  ],
  close:
    "Warranty covers what the builder got wrong. Maintenance covers what every house needs. The membership sells the second one, starting at closing, and is never a paywall in front of the first.",
} as const;

export type RevenuePoint = {
  id: "membership" | "repairs" | "middle" | "sellable" | "next-job";
  icon: LucideIcon;
  title: string;
  body: string;
};

/**
 * The membership ladder. The $40 plan is the floor, not the product: the
 * ceiling is the builder running the whole house — lawn, HVAC, appliances,
 * plumbing, septic, everything — with his subs on the work and the
 * homeowner paying one number a month. Prices are what a builder CAN
 * charge, labeled as examples; Afterkey never sets or caps them.
 */
export const membershipLadder = {
  heading: "From reminders to the whole house",
  lede:
    "A maintenance plan is whatever you decide to sell. You pick what each tier includes and what it costs; the portal shows the homeowner the list before they join.",
  tiers: [
    {
      name: "The schedule and the reminders",
      price: "$20–40 a month",
      summary: "The plan runs the calendar. The visits are extra, priced before you approve them.",
      includes: [
        "A maintenance schedule for your actual house, built from its manuals",
        "A reminder by email or text when something is due",
        "Your builder’s portal: submit a request, see the status, talk to the sub",
        "Your documents, warranties, and service history in one place",
      ],
      visits:
        "Service visits are not included. Book one from the reminder and the sub quotes it; you approve the price before anyone comes out.",
    },
    {
      name: "Scheduled service",
      price: "$100–250 a month",
      summary: "The visits are in. Your builder’s subs come on the schedule, labor included, and you never book a thing.",
      includes: [
        "Everything in the schedule-and-reminders plan",
        "Two HVAC tune-ups a year",
        "Annual boiler or furnace service",
        "Dryer vent cleaning",
        "Water heater flush",
        "Appliance maintenance on the manufacturer’s interval",
      ],
      visits:
        "Labor for the scheduled visits is included. Parts, and any repair the sub finds while there, are priced and approved before they’re charged.",
    },
    {
      name: "The whole house",
      price: "$500 a month and up",
      summary: "One number a month, one company to call. The trades who built the house keep it running.",
      includes: [
        "Everything in scheduled service",
        "Lawn and grounds",
        "Gutters cleaned",
        "Septic pumped on schedule",
        "Snow removal",
        "Plumbing and electrical check-ups",
      ],
      visits:
        "All scheduled work and labor is included. Repairs outside the plan are still priced and approved first — no surprise bills at any tier.",
    },
  ],
  builder:
    "You decide what each tier includes and what it costs. Afterkey shows the homeowner the list, bills the plan to your account, routes each visit to your sub, sends the reminders, and keeps the record.",
  foot:
    "Example tiers and prices. You set every number and every line item; your market decides what it carries, and Afterkey never sets or caps it. Whatever the tier, the plan covers maintenance; warranty work stays free.",
} as const;

/** The five points, in order of weight. */
export const revenuePoints: RevenuePoint[] = [
  {
    id: "membership",
    icon: Wallet,
    title: "A membership you price, billed to your account",
    body:
      "Sell your homeowners a maintenance plan at whatever your market carries — $40 a month for the schedule and the reminders, $500 for a full-service plan where your subs handle the lawn, the HVAC, the appliances, the plumbing, the septic, everything that goes into a house. Afterkey never sets or caps it. The homeowner puts a card or bank account on file in your branded portal, and the plan bills monthly to your own account.",
  },
  {
    id: "repairs",
    icon: FileClock,
    title: "Repair work you’ve been giving away",
    body:
      "Today a homeowner calls, you send a sub, the sub bills them direct, and you coordinated the whole thing for free. On Afterkey you price the job, the homeowner approves and pays in the portal, the platform adds your markup, deducts processing, and pays the sub and you separately. You never invoice, chase, or split a check by hand.",
  },
  {
    id: "middle",
    icon: MessageSquare,
    title: "You’re out of the middle",
    body:
      "The homeowner submits a request in the portal, it routes to the right sub, and the two of them handle it from there. You see everything and touch nothing you don’t want to.",
  },
  {
    id: "sellable",
    icon: BarChart3,
    title: "A business you can sell",
    body:
      "A builder with 200 homes on a membership has recurring revenue — an asset he can sell or step back from. A builder with a phone full of homeowner texts has a job.",
  },
  {
    id: "next-job",
    icon: PhoneCall,
    title: "First call for the next job",
    body:
      "You’re in the homeowner’s life every month: the reminder, the filter change, the furnace tune-up. When the basement, the addition, or the neighbor’s referral comes up, you’re the one they call. Afterkey is a lead engine for homes you’ve already closed.",
  },
];

/**
 * The worked example. Arithmetic on inputs the builder controls — labeled
 * as an example everywhere it appears, never as a customer result.
 */
export const workedExample = (() => {
  const homes = 60;
  const planPrice = 40;
  const fullServicePrice = 500;
  const fullServiceHomes = 10;
  const repairJob = 400;
  const markupPercent = 15;
  const repairsPerHomePerYear = 4;
  const markupPerJob = (repairJob * markupPercent) / 100;
  const membershipMonthly = homes * planPrice;
  const membershipYearly = membershipMonthly * 12;
  const repairMarkupYearly = homes * repairsPerHomePerYear * markupPerJob;
  const afterkeyMonthly = pricing.base + homes * pricing.perHome;
  const fullServiceMonthly = fullServiceHomes * fullServicePrice;
  return {
    homes,
    planPrice,
    fullServicePrice,
    fullServiceHomes,
    fullServiceMonthly,
    fullServiceYearly: fullServiceMonthly * 12,
    repairJob,
    markupPercent,
    repairsPerHomePerYear,
    markupPerJob,
    membershipMonthly,
    membershipYearly,
    membershipYearlyAtHalf: membershipYearly / 2,
    repairMarkupYearly,
    afterkeyMonthly,
    afterkeyYearly: afterkeyMonthly * 12,
    label: "Example, not a customer result",
  };
})();

/**
 * Warranty vs. billable — how every repair request gets classified.
 * Described as a feature, sold to both sides.
 */
export const classification = {
  title: "Warranty or billable, decided before the argument",
  how: [
    "Every repair request is classified as warranty or billable.",
    "You can set it before the sub is dispatched.",
    "The sub can set it or change it before heading out, or on site once they see what it actually is — the “leak” that turns out to be a hose bib the homeowner left open.",
    "Any time a request is classified or reclassified as billable, you and the homeowner both approve before anything is charged.",
  ],
  homeowner:
    "No surprise bills, ever. You see what it is and what it costs before anyone is charged.",
  builder:
    "Warranty work stays warranty, billable work gets billed, and nobody — not the sub, not the homeowner, not you at 9pm — has to argue about which is which after the fact.",
} as const;

/* ------------------------------------------------------------------ */
/* The seven published commitments — brand promises, quoted verbatim   */
/* on /pricing and referenced elsewhere.                               */
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
    title: "24-month rate lock",
    description:
      "Your rate is locked for 24 months from signup. After that, any increase comes with 60 days’ notice and applies at your next billing cycle. Never mid-term, never retroactive.",
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
      "Month-to-month. Cancel anytime, no termination fee. One simple monthly bill.",
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
  {
    icon: BadgeCheck,
    title: "30-day money-back guarantee",
    description:
      "If it’s not working for you, we refund every dollar Afterkey charged. The only exceptions: the $29 SMS add-on for the phone number you used, and any SMS usage over your included allotment.",
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
      "Every home, every open request, every sub, and the money: memberships billing to your account, repair work paid out with your markup on it.",
    points: [
      "Memberships, repair billing, and payouts",
      "Homes and warranty callbacks",
      "Subcontractor dispatch and compliance",
      "AI Home Binder and maintenance schedules",
    ],
    href: loginUrls.builder,
  },
  {
    name: "Homeowner portal",
    icon: Users,
    accent: "emerald",
    audience: "Your buyers",
    description:
      "Your brand, not ours. Where your homeowner joins the maintenance plan, submits a request, approves a repair price before anyone is charged, and talks to the sub directly.",
    points: [
      "White-labeled under your business",
      "Join the maintenance membership",
      "Submit a request and talk to the sub",
      "Approve repair prices — no surprise bills",
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
      "Upload your logo file in settings and it appears across the homeowner experience. No ticket to support, no professional-services fee. The buyer credits you for the software.",
  },
  {
    title: "Your colors",
    description:
      "Set your brand colors and the homeowner portal takes them. It looks like something your company had built, because as far as your buyer is concerned, you did.",
  },
  {
    title: "Your name on everything",
    description:
      "The portal, every email notification, payment receipts, and the handoff binder all carry your business name. Yours is the brand the homeowner associates with the experience — and the name they give the neighbor.",
  },
  {
    title: "Your phone number",
    description:
      "With the SMS add-on, homeowners text a dedicated business number that reaches your operation — not a generic shortcode, and not your personal cell. The 9pm text goes to a business line.",
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
    label: "Callbacks",
    title: "Warranty callbacks, out of your phone and onto a record",
    summary:
      "Every request lands in one queue with a clock on it, routes to the right sub, and the homeowner and the sub talk directly from there. You see everything and touch nothing you don’t want to.",
    points: [
      {
        title: "SLA tracking on every request",
        description:
          "Each request carries a response target. You see what’s on time and what’s slipping before the homeowner does, so the thing that would have become a review becomes a sub on the way.",
      },
      {
        title: "Automated email reminders",
        description:
          "Reminders go out on their own — to the sub who hasn’t responded and to you when something is about to breach. Email is included free, forever. You stop being the relay, and the job still gets closed and billed.",
      },
      {
        title: "Photo documentation",
        description:
          "Photos attach to the request from submission through completion, so the record shows the condition before and after the work. You never eat a second trip over a “nobody came.”",
      },
      {
        title: "A complete service history",
        description:
          "Every request, dispatch, and completion is timestamped on the home’s record — the documentation that ends a dispute two years later in one screenshot.",
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
      "Upload a home’s documents and Afterkey proposes the maintenance schedule for you — with a footnote on every line showing where it came from. The schedule is the reason a homeowner keeps paying dues: real upkeep they watch happen, with your name on every reminder.",
    points: [
      {
        title: "Documents in, schedule out",
        description:
          "Owner’s manuals, spec sheets, and invoices become a living maintenance schedule the AI proposes automatically. You review and confirm every line before it goes to a homeowner. Fewer “where’s the shutoff” calls, and the homeowner has a reason to open the app.",
      },
      {
        title: "Every suggestion carries a footnote",
        description:
          "For a known make and model, Afterkey looks up the manufacturer’s published maintenance and cites it — a numbered link to the manufacturer, to the document you uploaded, or an honest “typical schedule — verify against the manual” label. It never invents an interval, so the schedule you put your name on holds up.",
      },
      {
        title: "A shared appliance library",
        description:
          "Once any builder on Afterkey researches a model, every future home with that model reuses the schedule instantly and free. Your thirtieth home costs less to set up than your first.",
      },
      {
        title: "Cost preview before any AI spend",
        description:
          "Before it runs, Afterkey shows you which appliances are already in the library (free) and which are new, with a dollar estimate and a “do it yourself to save” option. The AI line on your bill is one you chose.",
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
          "Route a request to the right trade and the right sub in one step, with the home’s history attached so they arrive knowing the job. You stop being the relay and still bill the job when it’s billable.",
      },
      {
        title: "Day-of arrival tracking",
        description:
          "See whether a sub is on the way, on site, or hasn’t moved — before the homeowner calls you to ask. The status question gets answered without you.",
      },
      {
        title: "Ratings across every home",
        description:
          "Rate performance job by job and watch the pattern build. The sub who generates callbacks on one home is usually generating them on ten — you find out while it’s still one.",
      },
      {
        title: "Cost intelligence",
        description:
          "What each trade costs you per job, per home, and over time — the numbers you need before you renegotiate a rate, and before you set a markup that holds.",
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
          "General liability, workers’ comp, auto, trade license, W-9 — required across the board or set per trade, however you run it. Written down once instead of remembered per job.",
      },
      {
        title: "Subs upload, you approve",
        description:
          "Subcontractors upload their own documents in their portal. You approve each one and record its expiration date. Chasing certificates stops being your job.",
      },
      {
        title: "Expiration tracking and reminders",
        description:
          "Afterkey watches every expiration date and reminds the sub before coverage lapses, so a stale certificate never stalls a dispatch.",
      },
      {
        title: "Compliance gates dispatch",
        description:
          "If a sub’s coverage has lapsed, Afterkey warns you before you assign the work. You can still override for an emergency — the override is logged, so the record shows you knew. Liability you can prove you managed.",
      },
    ],
  },
  {
    id: "memberships",
    icon: Wallet,
    accent: "emerald",
    status: "live",
    label: "Recurring revenue",
    title: "A maintenance membership you price, billed to your account",
    summary:
      "Every home you’ve closed can carry a monthly maintenance membership. You set the price, the homeowner pays in your branded portal, and the money lands in your account — recurring revenue from homes you’ve already built.",
    points: [
      {
        title: "Your price, never ours",
        description:
          "$40 a month for the schedule and reminders, $500 for the whole house — whatever your market carries. Afterkey never sets or caps it. Offer one plan or several tiers, priced per home. The revenue line is sized to your market, not to ours.",
      },
      {
        title: "From reminders to the whole house",
        description:
          "The bottom tier is the schedule and the reminders, with visits priced per job. The top tier is your subs handling lawn care, HVAC, appliances, plumbing, septic — labor included, on the schedule, billed as one number a month. The homeowner has one company to call for the life of the home, and it’s you.",
      },
      {
        title: "You decide what’s in each tier",
        description:
          "Every plan is a list you wrote: which visits are included, which are priced per job, what it costs. The homeowner sees that list before they join, so what $40 or $500 a month buys is never a mystery, and the “what am I paying for” call never comes.",
      },
      {
        title: "Card or bank on file, billed monthly",
        description:
          "The homeowner puts a card or bank account on file in your branded portal and the plan bills every month to your own account. There’s no platform fee on homeowner payments — you pay only processing, at our published rates. Recurring revenue without an invoice ever leaving your office.",
      },
      {
        title: "Maintenance, never warranty",
        description:
          "Warranty covers what the builder got wrong and stays free; the membership covers maintenance, which every house needs from day one. It is never a paywall in front of warranty work, so you never get the “why am I paying for this” call.",
      },
      {
        title: "What the plan actually delivers",
        description:
          "The maintenance schedule built from the home’s own manuals, the reminders, the filter change, the furnace tune-up — real upkeep the homeowner watches happen, not a line item on a statement. That is why the dues keep coming.",
      },
    ],
  },
  {
    id: "win-back",
    icon: Home,
    accent: "emerald",
    status: "live",
    label: "Win-back",
    title: "Win back the homes you’ve already built",
    summary:
      "Every home you’ve ever delivered is a maintenance-plan prospect. Add past builds free, send the pitch, and pay only when they say yes. The plan covers maintenance; warranty work stays free.",
    points: [
      {
        title: "Prospect homes are free",
        description:
          "Add a past build as a prospect and it costs nothing while you court it. Billing starts only when the homeowner joins a plan or you activate the home to start working it. Your back catalog costs nothing to court.",
      },
      {
        title: "One-click claim invites",
        description:
          "Send the homeowner a personalized membership pitch by email. One click and they’re inside their own portal — signed in, home already set up, your offer in front of them. No password gauntlet, so the pitch gets read instead of abandoned at a login screen.",
      },
      {
        title: "Your pitch, your tiers",
        description:
          "Offer one plan or several, at prices you set per home. The homeowner picks a tier and subscribes right in the portal, and the dues bill to your account from that month.",
      },
      {
        title: "Quotes that expire",
        description:
          "Set how long each offer is good for, so a homeowner who circles back two years later gets today’s pricing — not a quote from a different economy.",
      },
    ],
  },
  {
    id: "repair-billing",
    icon: FileClock,
    accent: "amber",
    status: "live",
    label: "Repair revenue",
    title: "Paid repairs, with your markup, paid out automatically",
    summary:
      "Today a homeowner calls, you send a sub, the sub bills direct, and you coordinated the whole thing for free. On Afterkey you price the job, the homeowner pays in the portal, and the platform pays the sub and you separately — your markup included.",
    points: [
      {
        title: "Warranty or billable, decided up front",
        description:
          "You classify a request before the sub is dispatched. The sub can set or change it before heading out, or on site once they see what it actually is. Any time a request becomes billable, you and the homeowner both approve before anything is charged. Nobody argues about which is which after the fact.",
      },
      {
        title: "The homeowner approves the price first",
        description:
          "You price the job, the homeowner approves it in their portal, and only then does the work get scheduled. Approval secures a payment method, and the charge can never exceed the number they approved. No surprise bills, so no 9pm call about an invoice.",
      },
      {
        title: "Split payout: the sub’s number and your markup",
        description:
          "When the work is done, the platform charges the homeowner, adds your markup, deducts processing, and pays the sub and you separately. You never invoice, chase a payment, or split a check by hand. The favor becomes a revenue line.",
      },
      {
        title: "Photos before money moves",
        description:
          "Subs attach completion photos, so the record shows the finished work before the homeowner is charged. The “did he actually do it” call never comes.",
      },
      {
        title: "Handyman and odd jobs too",
        description:
          "Hang the TV, fix the fence gate, service the boiler — any paid work beyond warranty runs through the same estimate, approval, and payout path. Every one carries your markup.",
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
      "Your own dedicated business number for real two-way texting, automated maintenance reminders, day-of coordination, and inbound calls forwarded straight to you.",
    points: [
      {
        title: "Your own dedicated number",
        description:
          "Each builder gets a dedicated local business number. Messages currently send under Afterkey Inc.’s carrier registration; per-builder branded sender identity is the planned upgrade. The number on the record is the business, not your cell.",
      },
      {
        title: "Automated maintenance reminders",
        description:
          "The maintenance schedule sends itself by text. The reminder is the reason the homeowner keeps paying dues, and you never had to remember to send it.",
      },
      {
        title: "Day-of coordination",
        description:
          "Arrival windows and status updates by text on the day of the job, where homeowners and subs actually read them. The arrival-window call doesn’t come to you.",
      },
      {
        title: "Inbound calls forwarded to you",
        description:
          "When a homeowner calls the number, it forwards to you — so the business line is the number on the record, not your personal cell. When you step back, the number stays with the business.",
      },
      {
        title: "Real two-way texting",
        description:
          "Homeowners and subs can simply text back. Replies land in your Afterkey inbox matched to the right request, right next to the portal messages — one conversation, whichever channel they used. Nothing lives only in your phone.",
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

// Sales order: the revenue first, then the work that earns it.
const featureOrder = [
  "memberships",
  "repair-billing",
  "warranty",
  "white-label",
  "subcontractors",
  "compliance",
  "ai-binder",
  "win-back",
  "sms",
  "homeowner-assistant",
];
featureGroups.sort(
  (a, b) => featureOrder.indexOf(a.id) - featureOrder.indexOf(b.id),
);

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
    title: "Fewer callbacks that turn into problems",
    description:
      "Every request has an owner, a clock, and a record. Things get handled before they escalate — and when a delay isn’t on you, the history shows exactly where it sat.",
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
      "In your branded portal, with photos and two sentences — not a 9pm text to your cell.",
  },
  {
    icon: HardHat,
    title: "It routes to the right sub",
    description:
      "By trade, to the sub you’d have called anyway. Afterkey warns you first if his insurance or license has lapsed.",
  },
  {
    icon: Camera,
    title: "They handle it between them",
    description:
      "The homeowner and the sub schedule it and talk directly. Status and photos come from the driveway. You see every message and touch nothing you don’t want to.",
  },
  {
    icon: FileClock,
    title: "Warranty stays warranty. Billable gets billed.",
    description:
      "The request is classified before dispatch or on site, both of you approve before any charge, and it closes on the home’s record with the sub and you paid separately.",
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
        "Post-closing is the entire product, including the revenue in it: memberships and paid repairs",
        "Every feature is in the one plan — there is no upsell tier",
        "Runs alongside whatever you already use to build",
        "Standard onboarding is free; concierge onboarding is an optional one-time $499",
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
    title: "Your markup, paid out automatically",
    description:
      "Paid repairs charge the homeowner, add your markup, deduct processing, and pay the sub and you separately. The favor you used to coordinate for free is a revenue line, and you never split a check by hand.",
  },
  {
    title: "Warranty and billable decided before the argument",
    description:
      "Every request is classified before dispatch or on site, and any billable call needs you and the homeowner to approve before a charge. Nobody relitigates it after the fact.",
  },
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
    title: "A business you can sell",
    description:
      "Memberships turn the homes you’ve already delivered into recurring revenue at a price you set. A builder with 200 homes on a plan has an asset; a builder with a phone full of homeowner texts has a job.",
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
    a: "Afterkey is a post-closing software platform for residential home builders that turns the homes they have already closed into a service business: homeowner maintenance memberships the builder prices, paid repair work billed through the builder’s own branded portal, and warranty callbacks routed to the builder’s subs. It consists of three portals: a builder portal for homes, requests, subcontractors, memberships, repair billing, and payouts; a homeowner portal, under the builder’s brand, for joining the membership, submitting requests, approving repair prices, and viewing the maintenance schedule and service history; and a subcontractor portal for assigned jobs, status and photo updates, and compliance documents.",
  },
  {
    q: "Who is Afterkey for?",
    a: "Afterkey is built for production and custom residential home builders, roughly 5 to 50 homes a year, who have closed homes they are not earning on. It is designed for builders who want every closed home to produce recurring membership revenue, billed repair work, and the next job, instead of unpaid callbacks and 9pm texts. Subcontractors and homeowners use Afterkey through their own portals at no cost to them; the builder is the paying customer.",
  },
  {
    q: "How much does Afterkey cost?",
    a: "Afterkey has one plan with no tiers: $149 per month base, which includes unlimited team members and subcontractors, plus $10 per month per active home. Prospect homes (past builds you are pitching a membership) and archived homes (read-only history) are free; a home bills while you are actively serving it. Optional AI and SMS add-ons are priced on the pricing page. There is no platform fee on homeowner payments; the only cost on membership dues and repair payments is payment processing, at Afterkey’s published flat rates, also on the pricing page. Afterkey never sets or caps what the builder charges homeowners for a membership or a repair. Standard onboarding is free; concierge onboarding, where Afterkey builds the binders from the builder’s documents, is an optional one-time $499. Afterkey does not offer a free trial; every new account is instead covered by a 30-day money-back guarantee.",
  },
  {
    q: "Do homeowners have to pay for a membership to get warranty work?",
    a: "No. Warranty repairs are the builder’s obligation and stay free for every homeowner, member or not, and a homeowner who does not join never waits longer for warranty work. The membership sells maintenance — what every house needs from day one, regardless of who built it — and it is never a paywall in front of warranty service.",
  },
  {
    q: "My homes are new. What is there to maintain?",
    a: "A brand-new house needs its HVAC serviced twice a year, the boiler or furnace serviced annually, the dryer vent cleaned, the water heater flushed, and its appliances maintained on the manufacturer’s schedule — from day one, regardless of who built it. Warranty covers what the builder got wrong; maintenance covers what every house needs. A maintenance membership sells the second one, starting at closing.",
  },
  {
    q: "What should I charge homeowners for a maintenance membership?",
    a: "Whatever your market carries. Builders typically think in tiers: $20 to $40 a month for the maintenance schedule and the reminders; $100 to $250 for scheduled service, where your subs come on the schedule for HVAC, the boiler, the dryer vent, the water heater, and the appliances; and $500 a month or more for a full-service plan that covers everything that goes into a house — lawn and grounds, gutters, plumbing, septic, snow. Afterkey never sets or caps the price. You define the plan and its tiers, the homeowner puts a card or bank account on file in your branded portal, and the plan bills monthly to your own account. There is no platform fee on homeowner payments; you pay only processing, at Afterkey’s published flat rates.",
  },
  {
    q: "What does a homeowner actually get for $40 a month?",
    a: "Whatever you put in the plan — you define each tier and the portal shows the homeowner the list before they join. In the example bottom tier, $40 a month buys the calendar: a maintenance schedule built from that house’s own manuals, a reminder by email or text when something is due, your branded portal to submit a request and talk to the sub, and the home’s documents and service history in one place. The service visits are not included at that tier; the homeowner books one from the reminder, the sub quotes it, and they approve the price before anyone comes out. Move up a tier and the visits and labor are in: two HVAC tune-ups a year, the annual boiler service, the dryer vent, the water heater flush, appliances on the manufacturer’s interval. At the top, the whole house — lawn, gutters, septic, snow — for one number a month.",
  },
  {
    q: "Can the membership cover more than reminders — lawn care, septic, the whole house?",
    a: "Yes. A maintenance plan is whatever you decide to sell. At the top of the ladder it is a full-service plan: your subs handle lawn care, HVAC maintenance, appliance maintenance, plumbing, septic, gutters, snow — everything that goes into a house — on a schedule, and the homeowner pays one number a month to you. Afterkey holds the schedule, routes each visit to the right sub, sends the reminders, bills the plan to your account, and keeps the record. The trades who built the house keep it running, and the homeowner has one company to call for the life of the home. Whatever the tier, the plan covers maintenance; warranty work stays free.",
  },
  {
    q: "How does paid repair work get billed and paid?",
    a: "You price the job. The homeowner approves the estimate in their portal, which also secures a payment method. When the work is done and the sub’s completion photos are on the record, the platform charges the homeowner, adds your markup, deducts processing, and pays the sub and you separately. You never invoice, chase a payment, or split a check by hand, and the charge can never exceed the amount the homeowner approved.",
  },
  {
    q: "Who decides whether a request is warranty or billable?",
    a: "Every repair request is classified as warranty or billable. You can set it before the sub is dispatched; the sub can set or change it before heading out or once on site, when the “leak” turns out to be a hose bib left open. Any time a request is classified or reclassified as billable, both you and the homeowner approve before anything is charged. Warranty work stays warranty, billable work gets billed, and nobody argues about which is which after the fact.",
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
    a: "Homeowners get access to a browser-based portal, white-labeled under the builder's business — there is no app to download. They submit warranty and service requests with photos, talk directly with the sub assigned to the job, approve the price of any billable repair before they are charged, view the maintenance schedule built for their specific home and appliances, and see the full service history of the house. If the builder offers a maintenance membership, the homeowner joins and pays through the same portal with a card or bank account on file. Warranty work is never behind the membership.",
  },
  {
    q: "Do subcontractors have to pay for Afterkey?",
    a: "No. Subcontractors use Afterkey free. They sign in to see the jobs assigned to them, update status from the jobsite, upload before and after photos, and keep compliance documents such as general liability, workers’ compensation, auto insurance, trade licenses, and W-9s current. The builder’s $149 monthly base includes unlimited subcontractors, so adding trades never increases the bill.",
  },
  {
    q: "Does Afterkey find new subcontractors for me?",
    a: "No. Afterkey is not a marketplace, a network, or a contractor directory, and it does not send you leads for new trades. It works only with the subcontractors you have already vetted and added to your own roster — the trades who built the house are the ones who keep it running.",
  },
  {
    q: "What is an “active home”?",
    a: "An active home is a home you are actively serving on Afterkey. It bills at $10 per month, flat, regardless of the home’s age. Two home states are free. A prospect home is a past build you are trying to win back: adding it costs nothing, and you can pitch memberships and send claim invites, but full service features stay off until it converts — which happens automatically when the homeowner starts a membership or a warranty date is set, or when you activate it yourself. An archived home is the honest exit: free and read-only, with the full history and binder preserved, and you can reactivate it any time, which resumes billing.",
  },
  {
    q: "Can Afterkey help me win back homes I built years ago?",
    a: "Yes. Add a past build as a prospect home — it costs nothing while you court it. You build a membership pitch with one or more plan tiers at prices you set, and Afterkey emails the homeowner a claim invite: one click signs them into their own portal, home already set up, with your offer in front of them. If they join, the home converts to active automatically and normal billing starts. You can also put an expiration on any offer so an old quote does not linger at old pricing.",
  },
  {
    q: "How long does it take to get started with Afterkey?",
    a: "Standard onboarding is free: you subscribe, add your homes and subcontractors, and start logging requests the same day. If you would rather we build the binders for your homes from your documents, concierge onboarding is an optional one-time $499. There is no free trial — every new account is covered by a 30-day money-back guarantee instead, so you evaluate Afterkey on your real homes rather than in a sandbox. Your existing homes come in through the AI import tools: upload each home’s documents and Afterkey proposes its binder and maintenance schedule for you to confirm.",
  },
  {
    q: "Can I cancel Afterkey at any time?",
    a: "Yes. Afterkey is month-to-month with no contracts and no termination fees. New accounts are also covered by a 30-day money-back guarantee: if it is not working for you, we refund every dollar Afterkey charged. The only exceptions are the $29 SMS add-on for the phone number you used and any SMS usage over your included allotment. Your rate is locked for 24 months from signup; after that, any increase requires 60 days’ notice, takes effect at your next billing cycle, and is never applied mid-term or retroactively.",
  },
];

/**
 * Written for the buyer of a new home, not the builder. The builder is
 * watching too — this page is the homeowner side of the membership pitch.
 */
export const homeownerFaqs: Faq[] = [
  {
    q: "What do I actually get for the monthly price?",
    a: "Whatever your builder put in the plan — the portal shows the list before you join. A basic plan runs the calendar: a maintenance schedule built from your house’s own manuals, a reminder when something is due, the portal to submit a request and talk to the sub, and your documents and service history in one place; service visits are booked from the reminder and quoted before anyone comes out. A scheduled-service plan includes the visits and the labor — HVAC tune-ups, the boiler, the dryer vent, the water heater, the appliances. A whole-house plan adds lawn, gutters, septic, and snow for one number a month. At every tier, a repair outside the plan is priced and approved by you before it is charged.",
  },
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

/** Pricing-specific FAQs, shown on /pricing. */
export const pricingFaqs: Faq[] = [
  {
    q: "What counts as an active home?",
    a: "An active home is one you are actively serving on the platform — it bills $10 per month, flat. Two states are free: prospect homes (past builds you are pitching a membership — outreach and offers only, until they convert) and archived homes (read-only, full history kept, reactivate any time). A prospect converts to active automatically when the homeowner starts a membership or a warranty date is set.",
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
    q: "Does Afterkey take a cut of homeowner payments?",
    a: "No — there is no platform fee on homeowner payments. When homeowners pay through Afterkey, whether for a membership or a repair invoice, you pay only processing, at our published flat rates: 1.25% for bank (ACH) payments and 3.5% plus 30¢ for cards. Those are Afterkey’s all-in rates and include every Stripe processing and payout fee; bank is listed first everywhere because it is the cheaper rail. You choose whether homeowner pricing includes processing or your margin absorbs it. If you do not process homeowner payments through Afterkey, there is nothing to pay.",
  },
  {
    q: "Does Afterkey set or cap what I charge homeowners?",
    a: "No. The membership price, the tiers, and the markup on a paid repair are yours — $20 a month, $40, $60, whatever your market carries. Afterkey never sets, caps, or takes a percentage of any of it. Membership dues bill monthly to your own account, and repair payouts arrive with your markup already separated from the sub’s share.",
  },
  {
    q: "Is there a contract?",
    a: "No. Month-to-month, cancel anytime, no termination fees. There is one simple monthly bill and nothing to commit to up front.",
  },
  {
    q: "Can prices go up after I sign up?",
    a: "Not for the first 24 months: your rate is locked from the day you sign up. After that, any increase comes with 60 days’ notice and applies only at your next billing cycle. Increases are never applied mid-term and never retroactively. Prices are published on this page rather than quoted, so you can always see exactly what the plan costs.",
  },
  {
    q: "Is there a free trial?",
    a: "No. Afterkey uses a 30-day money-back guarantee instead of a free trial. You subscribe and use the product on your real homes from day one, and if it is not working for you, we refund every dollar Afterkey charged. The only exceptions are the $29 SMS add-on for the phone number you used and any SMS usage over your included allotment — carrier costs for messages already sent cannot be recovered. A guarantee fits this product better than a trial: the parts worth evaluating, like subcontractor patterns and maintenance schedules across a roster, take longer to show up than a sandbox week.",
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
          title: "Warranty or billable, decided before the argument",
          description:
            "You classify a request before dispatch; the sub can set or change it on site when the “leak” turns out to be a hose bib left open. Any billable call needs you and the homeowner to approve before a charge, so warranty stays warranty and billable gets billed.",
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
      title: "Where sub dispatch breaks down",
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
            "Route a request to the right trade and the right sub in one step. They arrive knowing the home, the issue, and what has been tried before. You stop being the relay and still bill the job when it’s billable.",
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
        "Deferred maintenance turns into a callback the builder ends up eating.",
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
            "Once confirmed, the schedule sends its own reminders by email, and by text for builders on the SMS add-on. The reminder is the reason the homeowner keeps paying dues, and the maintenance that would have become your callback gets done.",
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
        {
          title: "The membership, and no surprise bills",
          description:
            "They join your maintenance plan with a card or bank account on file, and they approve the price of any billable repair before anyone is charged. Warranty covers what the builder got wrong and stays free; the membership covers maintenance, which every house needs from day one.",
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
        a: "No. Homeowners see their own requests, status, messages, maintenance schedule, and service history. Subcontractor costs, ratings, and cost intelligence are private to the builder and are never exposed to homeowners.",
      },
    ],
  },
];

/** Named `find…` rather than `use…` so it isn't mistaken for a React hook. */
export const findUseCase = (slug: string) =>
  useCases.find((u) => u.slug === slug);
