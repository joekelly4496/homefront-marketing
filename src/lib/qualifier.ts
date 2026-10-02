/**
 * The ad-funnel qualifier: three one-tap questions before anyone books a
 * call. Shared by the /start/book page (to route the visitor) and by
 * /api/qualify (which recomputes the fit on the server before emailing the
 * lead, so the result in the inbox never depends on the browser).
 */

export type QuestionId = "homes" | "role" | "pain";

export type Question = {
  id: QuestionId;
  prompt: string;
  options: { value: string; label: string }[];
};

export const questions: Question[] = [
  {
    id: "homes",
    prompt: "How many homes do you close a year?",
    options: [
      { value: "under-5", label: "Fewer than 5" },
      { value: "5-15", label: "5 to 15" },
      { value: "16-50", label: "16 to 50" },
      { value: "50-plus", label: "More than 50" },
    ],
  },
  {
    id: "role",
    prompt: "Which one sounds like you?",
    options: [
      { value: "builder", label: "I build new homes, custom or production" },
      { value: "remodeler", label: "I remodel or renovate" },
      { value: "sub", label: "I’m a sub or a trade" },
      { value: "other", label: "Something else" },
    ],
  },
  {
    id: "pain",
    prompt: "What eats the most time after closing?",
    options: [
      { value: "callbacks", label: "Callbacks and homeowner calls" },
      { value: "subs", label: "Chasing subs to show up" },
      { value: "maintenance", label: "Maintenance and the homeowner binder" },
      { value: "revenue", label: "Nothing earns after closing" },
      { value: "looking", label: "Just looking around" },
    ],
  },
];

export type Answers = Partial<Record<QuestionId, string>>;

/**
 * qualified: a new-home builder closing 5+ a year → contact step, then the calendar.
 * sub: trades use Afterkey free through their builder → the subs page.
 * small: a builder under 5 a year → self-serve signup, no call.
 * other: not a new-home builder → self-serve signup, no call.
 */
export type Fit = "qualified" | "sub" | "small" | "other";

export function assessFit(answers: Answers): Fit {
  if (answers.role === "sub") return "sub";
  if (answers.role !== "builder") return "other";
  if (answers.homes === "under-5") return "small";
  return "qualified";
}

/** Human-readable label for a stored answer, for the lead email. */
export function answerLabel(id: QuestionId, value: string | undefined): string {
  const q = questions.find((x) => x.id === id);
  return q?.options.find((o) => o.value === value)?.label ?? "—";
}

/** True only if every answer is one of the offered options. */
export function validAnswers(answers: Answers): boolean {
  return questions.every((q) =>
    q.options.some((o) => o.value === answers[q.id]),
  );
}
