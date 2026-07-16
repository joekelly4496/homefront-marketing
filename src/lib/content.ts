import {
  ShieldCheck,
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  PhoneOff,
  PhoneCall,
  Phone,
  FileClock,
  FolderArchive,
  BookMarked,
  type LucideIcon,
} from 'lucide-react';
import type { Accent } from '@/components/ui/IconBox';

/** Where every primary "sign up / get started" CTA points — the on-site /signup page. */
/** Base URL of the live app where auth/portals live. */
export const appBase = 'https://builder-service-platform.vercel.app';

/** Portal login URLs in the app (external). */
export const loginUrls = {
  builder: `${appBase}/builder/login`,
  homeowner: `${appBase}/homeowner/login`,
  sub: `${appBase}/sub/login`,
};

/**
 * Where every "start free trial / sign up" CTA points — the app's sign-up
 * flow. Links straight to the app (auth pages can't be embedded reliably).
 */
export const signupHref = `${appBase}/builder/login?signup=1`;

/** Free trial length — used in copy as `${trialLength} free trial`. */
export const trialLength = '30-day';

/** A generic icon + title + description block, reused across the site. */
export type Highlight = {
  icon: LucideIcon;
  accent: Accent;
  title: string;
  description: string;
};

/* ------------------------------------------------------------------ */
/* The lifecycle arc — one story told across the life of a home       */
/* ------------------------------------------------------------------ */

export type Phase = {
  stage: string;
  icon: LucideIcon;
  accent: Accent;
  title: string;
  description: string;
  points: string[];
};

export const lifecycle: Phase[] = [
  {
    stage: 'Before handoff',
    icon: ClipboardCheck,
    accent: 'brand',
    title: 'Close out the home',
    description:
      'Walk the finished home and run your punch list right in Homefront — log items, assign them to subs, track them to done. You’re using it from day one of every home, before a homeowner ever logs in.',
    points: [
      'Log punch items as you walk',
      'Assign each item to the right sub',
      'Track every item through to done',
    ],
  },
  {
    stage: 'During warranty',
    icon: ShieldCheck,
    accent: 'emerald',
    title: 'Get out of the middle',
    description:
      'Homeowners deal directly with the sub who did the work; you monitor instead of fielding every call. Every request is timestamped and every dispatch logged — so you look responsive because you are.',
    points: [
      'Homeowners reach the right sub directly',
      'You monitor instead of firefighting',
      'Every request and dispatch on the record',
    ],
  },
  {
    stage: 'At handoff & beyond',
    icon: BookMarked,
    accent: 'violet',
    title: 'Hand over something premium',
    description:
      'A maintenance plan, a record of which subs did the work, and a complete “who to call for what” — value that stays useful for years and makes you look like a premium operation long after closing.',
    points: [
      'A maintenance plan that never expires',
      'The exact subs who worked on the home',
      'A complete home record, theirs to keep',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Builder-facing value — less work, better reputation                */
/* ------------------------------------------------------------------ */

export const builderValue: Highlight[] = [
  {
    icon: PhoneOff,
    accent: 'brand',
    title: 'Get out of the middle',
    description:
      'When something breaks, the homeowner reaches the sub who installed it — tap to call — instead of reaching you. You monitor everything, field almost none of it, and get hours of your week back.',
  },
  {
    icon: FileClock,
    accent: 'emerald',
    title: 'Reputation, on the record',
    description:
      'Every request is timestamped and every dispatch logged. You look responsive because you are — and when a delay isn’t on you, the history shows exactly where it sat. Responsiveness is what turns into reviews and referrals.',
  },
  {
    icon: ClipboardCheck,
    accent: 'amber',
    title: 'Your final walkthrough, built in',
    description:
      'Run your punch list right in Homefront — log items, assign them to subs, track them to done. The same system you use to close out a job becomes the system that serves the homeowner.',
  },
  {
    icon: BarChart3,
    accent: 'violet',
    title: 'Know your subs',
    description:
      'See which trades are generating callbacks across every home, so you catch a problem sub before it costs you ten more. And when a dispute arises, you’ve got the documentation.',
  },
];

/* ------------------------------------------------------------------ */
/* Homeowner-facing value — what makes the builder look premium       */
/* ------------------------------------------------------------------ */

export const homeownerValue: Highlight[] = [
  {
    icon: CalendarClock,
    accent: 'emerald',
    title: 'A maintenance plan that never expires',
    description:
      'Homeowners see exactly what to do and when to keep their home in shape — value that’s still there whether or not they keep a subscription.',
  },
  {
    icon: PhoneCall,
    accent: 'brand',
    title: 'Who to call for what',
    description:
      'The exact plumber, electrician, and HVAC tech who worked on their home — saved and ready to tap.',
  },
  {
    icon: FolderArchive,
    accent: 'violet',
    title: 'A complete home record, theirs to keep',
    description:
      'Specs, documents, warranties, and contacts in one place — and a clean handoff they can take with them. You handed over something premium, not a pile of manuals in a drawer.',
  },
];

/* ------------------------------------------------------------------ */
/* How it works — what happens when something breaks                  */
/* ------------------------------------------------------------------ */

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    title: 'The homeowner taps to call',
    description:
      'When something breaks, they reach the sub who installed it directly — straight from their home record, not straight to your phone.',
    icon: Phone,
  },
  {
    title: 'You monitor, you don’t firefight',
    description:
      'The request lands on your dashboard. You watch it move and only step in when you actually need to.',
    icon: ShieldCheck,
  },
  {
    title: 'It’s all on the record',
    description:
      'Every request is timestamped and every dispatch logged, so the history shows exactly what happened and when.',
    icon: FileClock,
  },
];

/* ------------------------------------------------------------------ */
/* The toolkit — a scannable recap of what’s in the box               */
/* ------------------------------------------------------------------ */

export const features: Highlight[] = [
  {
    icon: ClipboardCheck,
    accent: 'brand',
    title: 'Punch list',
    description:
      'Walk the finished home, log items, and assign them to subs — your closeout tool and your service tool in one.',
  },
  {
    icon: PhoneCall,
    accent: 'emerald',
    title: 'Direct-to-sub dispatch',
    description:
      'Homeowners reach the sub who did the work with a tap, so routine fixes never hit your phone.',
  },
  {
    icon: FileClock,
    accent: 'amber',
    title: 'Documented accountability',
    description:
      'Every request timestamped, every dispatch logged. Responsive on the record — and clear where a delay actually sat.',
  },
  {
    icon: CalendarClock,
    accent: 'brand',
    title: 'Maintenance reminders',
    description:
      'Recurring upkeep reminders — HVAC filters, gutters — keep homeowners ahead of problems long after closing.',
  },
  {
    icon: FolderArchive,
    accent: 'violet',
    title: 'The home record',
    description:
      'Specs, documents, warranties, and the subs who did the work — a complete binder the homeowner keeps.',
  },
  {
    icon: BarChart3,
    accent: 'emerald',
    title: 'Callback insights',
    description:
      'See which trades generate callbacks across every home, so you catch a problem sub before it costs you ten more.',
  },
];

/* ------------------------------------------------------------------ */
/* Why Homefront — differentiators                                    */
/* ------------------------------------------------------------------ */

export type Differentiator = { title: string; description: string };

export const differentiators: Differentiator[] = [
  {
    title: 'The one job that drives referrals',
    description:
      'All-in-one platforms bury warranty in an expensive tier full of tools you’ll never use. Homefront does the one job that actually drives your referrals.',
  },
  {
    title: 'Adopted from day one',
    description:
      'The punch list gets you in the tool on every home before a homeowner ever logs in — so warranty isn’t a separate thing you have to remember to use.',
  },
  {
    title: 'Documented, never adversarial',
    description:
      'The record protects everyone. You look responsive because you are, and when a delay isn’t on you, the history simply shows where it sat — no finger-pointing required.',
  },
  {
    title: 'Value that outlasts the subscription',
    description:
      'The maintenance plan, the contacts, and the home record stay useful to the homeowner whether or not they keep paying — and keep making you look premium for years.',
  },
];

/* ------------------------------------------------------------------ */
/* Pricing — usage-based; never quote dollar amounts for Homefront    */
/* ------------------------------------------------------------------ */

export type PricingPoint = {
  price: string;
  unit: string;
  title: string;
  description: string;
};

export const pricingModel: PricingPoint[] = [
  {
    price: '$99',
    unit: '/month',
    title: 'Base platform fee',
    description:
      'One flat monthly fee to run your punch list, warranty, and homeowner handoff on Homefront.',
  },
  {
    price: '$7',
    unit: '/active home',
    title: 'Per active home',
    description:
      'You only pay for homes actively under warranty or on a maintenance membership, so your cost scales with your book of business — not a rigid tier.',
  },
];

export type AddOn = {
  price: string;
  unit: string;
  title: string;
  description: string;
  comingSoon?: boolean;
};

export const addOns: AddOn[] = [
  {
    price: '$19',
    unit: '/month',
    title: 'SMS notifications',
    description:
      'Text updates to homeowners and subs, up to 500 messages a month.',
    comingSoon: true,
  },
];

export const pricingIncludes: string[] = [
  'Punch list and closeout tracking',
  'Direct-to-sub dispatch for homeowners',
  'Documented accountability — timestamps & dispatch logs',
  'Automated reminder emails',
  'Maintenance plans and reminders',
  'Photo documentation on every job',
  'Callback insights across every home',
  'A complete home record for every homeowner',
  'Unlimited staff seats and subcontractors',
  'Homeowner memberships billed through Stripe Connect',
];
