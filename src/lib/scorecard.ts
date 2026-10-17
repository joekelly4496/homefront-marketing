/**
 * The After-the-Keys Scorecard (getafterkey.com/scorecard): nine one-tap
 * questions, an email + phone step, then a score out of 100 with two
 * sub-scores (time after the keys, money after the keys), a result type, a
 * line about the part the builder hates most, and a plan calculator.
 *
 * Shared by the page (src/components/Scorecard.tsx) and the API route
 * (src/app/api/scorecard/route.ts), which recomputes everything from the raw
 * answers so nothing in the lead depends on the browser.
 *
 * Copy approved by Joe, Oct 17 2026 (Project doc "After-the-Keys Scorecard").
 * The score is never compared to other builders: there is no real data to
 * compare against. Calculator numbers are examples the builder sets.
 */

export type QuestionId = "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7" | "q8" | "q9";

export type Option = { value: string; label: string; points?: number };

export type Question = {
  id: QuestionId;
  prompt: string;
  /** Wording for remodelers (question 1 = "remodel"), where it differs. */
  remodelerPrompt?: string;
  options: Option[];
  scored: boolean;
};

export const questions: Question[] = [
  {
    id: "q1",
    prompt: "Which one sounds like you?",
    scored: false,
    options: [
      { value: "builder", label: "I build new homes" },
      { value: "remodeler", label: "I remodel or renovate" },
      { value: "developer", label: "I develop and sell homes" },
      { value: "sub", label: "I’m a sub or a trade" },
      { value: "other", label: "Something else" },
    ],
  },
  {
    id: "q2",
    prompt: "How many homes or big jobs do you hand over a year?",
    scored: false,
    options: [
      { value: "under-5", label: "Fewer than 5" },
      { value: "5-15", label: "5 to 15" },
      { value: "16-50", label: "16 to 50" },
      { value: "50-plus", label: "More than 50" },
    ],
  },
  {
    id: "q3",
    prompt: "Something breaks a month after closing. Who does the homeowner call?",
    remodelerPrompt: "Something breaks a month after the job wraps. Who does the homeowner call?",
    scored: true,
    options: [
      { value: "me", label: "Me, on my cell", points: 0 },
      { value: "depends", label: "Depends who they have a number for", points: 5 },
      { value: "office", label: "My office", points: 12 },
      { value: "sub", label: "The sub for that trade", points: 20 },
    ],
  },
  {
    id: "q4",
    prompt: "How many after-closing calls and texts do you get in a normal week?",
    remodelerPrompt: "How many calls and texts from past clients do you get in a normal week?",
    scored: true,
    options: [
      { value: "10-plus", label: "More than 10", points: 0 },
      { value: "6-10", label: "6 to 10", points: 5 },
      { value: "3-5", label: "3 to 5", points: 12 },
      { value: "0-2", label: "0 to 2", points: 20 },
    ],
  },
  {
    id: "q5",
    prompt: "What do you hate most about the year after the keys?",
    scored: false,
    options: [
      { value: "texts", label: "Night and weekend texts" },
      { value: "subs", label: "Chasing subs to show up" },
      { value: "warranty", label: "“Is this warranty?” arguments" },
      { value: "tracking", label: "Keeping track of it all" },
      { value: "free", label: "Working on it for free" },
    ],
  },
  {
    id: "q6",
    prompt: "How do you keep track of warranty requests now?",
    scored: true,
    options: [
      { value: "memory", label: "Texts and memory", points: 0 },
      { value: "spreadsheet", label: "A spreadsheet or notes", points: 8 },
      { value: "office", label: "Someone in the office handles it", points: 12 },
      { value: "software", label: "Software built for it", points: 20 },
    ],
  },
  {
    id: "q7",
    prompt: "Do you earn anything from a home after closing?",
    remodelerPrompt: "Do you earn anything from a client after the job wraps?",
    scored: true,
    options: [
      { value: "nothing", label: "Nothing", points: 0 },
      { value: "repair", label: "An occasional repair", points: 8 },
      { value: "plan", label: "A maintenance plan", points: 20 },
    ],
  },
  {
    id: "q8",
    prompt: "A past client needs HVAC service or a repair. Who gets the job?",
    scored: true,
    options: [
      { value: "online", label: "Whoever they find online", points: 0 },
      { value: "unknown", label: "No idea", points: 5 },
      { value: "me", label: "Me or my subs", points: 20 },
    ],
  },
  {
    id: "q9",
    prompt: "If your past homeowners could join a maintenance plan under your name, would you offer one?",
    scored: false,
    options: [
      { value: "yes", label: "Yes, I’d start tomorrow" },
      { value: "maybe", label: "Maybe, show me how" },
      { value: "no", label: "No" },
    ],
  },
];

export type Answers = Partial<Record<QuestionId, string>>;

export function promptFor(q: Question, answers: Answers): string {
  return answers.q1 === "remodeler" && q.remodelerPrompt ? q.remodelerPrompt : q.prompt;
}

function option(id: QuestionId, value: string | undefined): Option | undefined {
  return questions.find((q) => q.id === id)?.options.find((o) => o.value === value);
}

export function answerLabel(id: QuestionId, value: string | undefined): string {
  return option(id, value)?.label ?? "—";
}

/** True only if every question has one of its offered answers. */
export function validAnswers(answers: Answers): boolean {
  return questions.every((q) => q.options.some((o) => o.value === answers[q.id]));
}

const pts = (id: QuestionId, a: Answers) => option(id, a[id])?.points ?? 0;

export type Score = { total: number; time: number; money: number };

/** Time after the keys = q3 + q4 + q6 (60). Money after the keys = q7 + q8 (40). */
export function scoreOf(a: Answers): Score {
  const time = pts("q3", a) + pts("q4", a) + pts("q6", a);
  const money = pts("q7", a) + pts("q8", a);
  return { total: time + money, time, money };
}

export type ResultType = { key: "help-desk" | "halfway" | "tight-ship"; title: string; body: string };

export function resultTypeOf(total: number): ResultType {
  if (total < 40) {
    return {
      key: "help-desk",
      title: "The Free Help Desk",
      body: "You’re the warranty department, the dispatcher and the repair shop, and none of it pays. The first fix: get requests going to the sub for that trade, not your cell.",
    };
  }
  if (total < 70) {
    return {
      key: "halfway",
      title: "Halfway There",
      body: "You have some system after the keys, but the work still runs through you and the money doesn’t. Next: get out of the middle, then put a plan on your past homes.",
    };
  }
  return {
    key: "tight-ship",
    title: "The Tight Ship",
    body: "Your after-closing work is under control. The open question is money: a plan you price turns past homes into monthly revenue.",
  };
}

export const painLines: Record<string, string> = {
  texts: "Those texts stop when requests go straight to the sub for that trade, and you’re told, not called.",
  subs: "Reminders go to the sub on a clock; it only comes back to you if he goes quiet.",
  warranty:
    "The home’s warranty dates sort what’s covered, you make the call on anything gray, and the homeowner is told either way.",
  tracking: "One record per house: every request, sub, photo and document, out of your texts.",
  free: "Warranty stays free. Everything after it can bill through your company, with your markup on top.",
};

export function painLineOf(a: Answers): string {
  return painLines[a.q5 ?? ""] ?? "";
}

/** Calculator starting points: 5× the yearly count from question 2. */
export function defaultPastHomes(a: Answers): number {
  switch (a.q2) {
    case "under-5":
      return 15;
    case "5-15":
      return 50;
    case "16-50":
      return 150;
    case "50-plus":
      return 300;
    default:
      return 50;
  }
}

export const calculator = {
  homes: { min: 0, max: 500, step: 5 },
  price: { min: 20, max: 500, step: 5, start: 100 },
  join: { min: 5, max: 50, step: 1, start: 15 },
} as const;

/** Monthly gross for a plan: homes × join% × price, rounded to the dollar. */
export function planMonthly(homes: number, joinPercent: number, price: number): number {
  return Math.round(homes * (joinPercent / 100) * price);
}

/**
 * qualified: builder / remodeler / developer handing over 5+ a year → book a call.
 * small: the same, under 5 a year → pricing, no call push.
 * sub: trades use Afterkey free through their builder → the subs page.
 * other: everyone else → how it works.
 */
export type Fit = "qualified" | "small" | "sub" | "other";

export function fitOf(a: Answers): Fit {
  if (a.q1 === "sub") return "sub";
  if (a.q1 !== "builder" && a.q1 !== "remodeler" && a.q1 !== "developer") return "other";
  if (a.q2 === "under-5") return "small";
  return "qualified";
}

/** US/Canada numbers: 10 digits, or 11 starting with 1. */
export function validPhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}
