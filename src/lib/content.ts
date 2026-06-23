import {
  Home,
  HardHat,
  Wrench,
  ShieldCheck,
  Clock,
  MessageSquare,
  Camera,
  BarChart3,
  CalendarClock,
  Palette,
  Users,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';
import type { Accent } from '@/components/ui/IconBox';

export type Portal = {
  icon: LucideIcon;
  accent: Accent;
  name: string;
  tagline: string;
  bullets: string[];
};

export const portals: Portal[] = [
  {
    icon: Home,
    accent: 'brand',
    name: 'Builder portal',
    tagline: 'Every home, request, and sub in one dashboard.',
    bullets: [
      'See open vs. completed work at a glance',
      'Know who’s assigned and what’s overdue',
      'One record of every home you’ve closed',
    ],
  },
  {
    icon: Users,
    accent: 'emerald',
    name: 'Homeowner portal',
    tagline: 'Self-service that makes you look buttoned-up.',
    bullets: [
      'Submit requests and upload photos in seconds',
      'Track status and approve schedules',
      'Message the builder in one place',
    ],
  },
  {
    icon: HardHat,
    accent: 'violet',
    name: 'Subcontractor portal',
    tagline: 'A job list your trades actually use.',
    bullets: [
      'Assigned jobs, ready on their phone',
      'Update status: “on my way,” “complete”',
      'Upload before & after photos from the field',
    ],
  },
];

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    title: 'Homeowner submits',
    description:
      'A homeowner reports an issue from their portal with photos and details — no more midnight texts.',
    icon: ClipboardList,
  },
  {
    title: 'Builder assigns a sub',
    description:
      'You review the request, set the deadline, and assign the right trade partner in a couple of clicks.',
    icon: HardHat,
  },
  {
    title: 'Sub updates from the field',
    description:
      'The subcontractor sees the job on their phone, marks progress, and uploads completion photos.',
    icon: Wrench,
  },
  {
    title: 'Everyone’s notified',
    description:
      'Homeowner, builder, and sub stay in sync automatically — every step documented on one thread.',
    icon: MessageSquare,
  },
];

export type Feature = {
  icon: LucideIcon;
  accent: Accent;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Clock,
    accent: 'amber',
    title: 'SLA tracking',
    description:
      'Every request gets an acknowledgment deadline. Overdue jobs are flagged automatically before they become complaints.',
  },
  {
    icon: CalendarClock,
    accent: 'brand',
    title: 'Maintenance reminders',
    description:
      'Schedule recurring upkeep reminders — HVAC filters, gutter cleaning — sent to homeowners long after closing.',
  },
  {
    icon: Camera,
    accent: 'emerald',
    title: 'Photo documentation',
    description:
      'Submitted and completion photos live on every job, stored as a permanent record of the work done.',
  },
  {
    icon: MessageSquare,
    accent: 'violet',
    title: 'One thread per request',
    description:
      'Builder, homeowner, and sub aligned on a single thread — no scattered texts, no “who said what.”',
  },
  {
    icon: BarChart3,
    accent: 'brand',
    title: 'Cost intelligence',
    description:
      'Track job cost per sub per trade so you know what things should cost and where the money goes.',
  },
  {
    icon: Palette,
    accent: 'violet',
    title: 'White-label experience',
    description:
      'The homeowner portal carries your name and your brand — not ours. You stay front and center.',
  },
];

export type Pillar = {
  icon: LucideIcon;
  accent: Accent;
  title: string;
  points: { icon: LucideIcon; title: string; description: string }[];
};

export const pillars: Pillar[] = [
  {
    icon: ShieldCheck,
    accent: 'brand',
    title: 'Three connected portals',
    points: [
      {
        icon: Home,
        title: 'Builder dashboard',
        description:
          'Every home, service request, and subcontractor in one view — open vs. complete, who’s assigned, what’s overdue.',
      },
      {
        icon: Users,
        title: 'Homeowner self-service',
        description:
          'Homeowners submit requests, upload photos, track status, approve schedules, and message you.',
      },
      {
        icon: HardHat,
        title: 'Subcontractor app',
        description:
          'Subs get a job list, update status from their phone, and upload before/after photos.',
      },
    ],
  },
  {
    icon: Clock,
    accent: 'amber',
    title: 'Stay-ahead automation',
    points: [
      {
        icon: Clock,
        title: 'SLA tracking',
        description:
          'Acknowledgment deadlines on every request; overdue jobs flagged automatically.',
      },
      {
        icon: MessageSquare,
        title: 'Automated reminders',
        description:
          'Email nudges to the right party so nothing stalls or gets forgotten.',
      },
      {
        icon: CalendarClock,
        title: 'Maintenance reminders',
        description:
          'Recurring upkeep reminders sent to homeowners — a goodwill touch long after closing.',
      },
    ],
  },
  {
    icon: BarChart3,
    accent: 'emerald',
    title: 'Run it like a business',
    points: [
      {
        icon: MessageSquare,
        title: 'One thread per request',
        description:
          'Builder, homeowner, and sub aligned without scattered texts.',
      },
      {
        icon: BarChart3,
        title: 'Cost intelligence',
        description:
          'Track job cost per sub per trade and know what things should cost.',
      },
      {
        icon: HardHat,
        title: 'Subcontractor management',
        description:
          'A roster of trade partners with assignment and full job history.',
      },
    ],
  },
];

export type Differentiator = { title: string; description: string };

export const differentiators: Differentiator[] = [
  {
    title: 'Purpose-built for post-closing',
    description:
      'Not generic field-service software bent to fit. Homefront is built for the warranty and service work that starts the day a homeowner gets the keys.',
  },
  {
    title: 'Three-sided by design',
    description:
      'Homeowner self-service is the wedge. When homeowners help themselves, your team stops fielding callbacks.',
  },
  {
    title: 'Your brand, not ours',
    description:
      'Multi-tenant and white-label, so the builder’s brand stays front and center in every homeowner touchpoint.',
  },
  {
    title: 'Mobile-first for the field',
    description:
      'Subs update jobs from their phone on the jobsite — no laptop, no training, no friction.',
  },
];

export type Stat = { value: string; label: string };

// Placeholder figures — replace with your real numbers before launch.
export const stats: Stat[] = [
  { value: '60%', label: 'faster response to warranty requests' },
  { value: '90%', label: 'of requests resolved without a phone call' },
  { value: '4.8 / 5', label: 'average homeowner satisfaction' },
  { value: '0', label: 'requests lost to a spreadsheet' },
];

export type Tier = {
  name: string;
  price: number;
  blurb: string;
  popular?: boolean;
  highlights: string[];
};

export const tiers: Tier[] = [
  {
    name: 'Intro',
    price: 49,
    blurb: 'For builders just getting started.',
    highlights: [
      'Up to 25 active homes',
      '2 staff seats',
      'All three portals',
      'SLA tracking & reminders',
    ],
  },
  {
    name: 'Starter',
    price: 199,
    blurb: 'For a growing service operation.',
    highlights: [
      'Up to 100 active homes',
      '5 staff seats',
      'Maintenance reminders',
      'Photo documentation',
    ],
  },
  {
    name: 'Growth',
    price: 449,
    blurb: 'For builders scaling their volume.',
    popular: true,
    highlights: [
      'Up to 350 active homes',
      '15 staff seats',
      'Cost intelligence',
      'White-label homeowner portal',
    ],
  },
  {
    name: 'Pro',
    price: 899,
    blurb: 'For high-volume, multi-team builders.',
    highlights: [
      'Unlimited active homes',
      'Unlimited staff seats',
      'Advanced reporting',
      'Priority support & onboarding',
    ],
  },
];

export type FeatureRow = {
  label: string;
  values: (string | boolean)[]; // [Intro, Starter, Growth, Pro]
};

export type FeatureGroup = { group: string; rows: FeatureRow[] };

// Entitlements are illustrative — final entitlements are configurable.
export const comparison: FeatureGroup[] = [
  {
    group: 'Capacity',
    rows: [
      { label: 'Active homes', values: ['25', '100', '350', 'Unlimited'] },
      { label: 'Staff seats', values: ['2', '5', '15', 'Unlimited'] },
      {
        label: 'Subcontractor seats',
        values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
      },
    ],
  },
  {
    group: 'Core portals',
    rows: [
      { label: 'Builder dashboard', values: [true, true, true, true] },
      { label: 'Homeowner portal', values: [true, true, true, true] },
      { label: 'Subcontractor portal', values: [true, true, true, true] },
      { label: 'One thread per request', values: [true, true, true, true] },
    ],
  },
  {
    group: 'Automation',
    rows: [
      { label: 'SLA tracking & overdue flags', values: [true, true, true, true] },
      { label: 'Automated reminders', values: [true, true, true, true] },
      { label: 'Maintenance reminders', values: [false, true, true, true] },
      { label: 'Photo documentation', values: [false, true, true, true] },
    ],
  },
  {
    group: 'Business',
    rows: [
      { label: 'Cost intelligence', values: [false, false, true, true] },
      { label: 'White-label branding', values: [false, false, true, true] },
      { label: 'Advanced reporting', values: [false, false, false, true] },
      {
        label: 'Homeowner subscription billing',
        values: [false, false, true, true],
      },
    ],
  },
  {
    group: 'Support',
    rows: [
      {
        label: 'Support',
        values: ['Email', 'Email', 'Priority', 'Priority + onboarding'],
      },
    ],
  },
];
