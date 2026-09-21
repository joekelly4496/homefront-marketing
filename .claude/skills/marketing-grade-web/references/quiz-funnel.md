# Quiz Funnel — the diagnostic that turns visitors into named leads

Interactive quizzes convert far better than static forms because each answer gives the visitor something (a diagnosis) before asking for anything. For B2B, the winning format is an **assessment**: "how much is [problem] costing you?" or "how mature is your [process]?" The quiz's real job is to make the buyer *feel* the pain point in his own numbers, then hand him the fix.

Build it custom in Next.js with results stored in Supabase. Hosted quiz tools cost $25–125/month, cap leads, add their branding, and put the data somewhere Claude can't reach. Custom is a few screens plus one table.

## Design rules

- **5–10 questions**, one per screen, tappable answer cards (no free text except the email). Progress indicator visible.
- **Every answer is a signal.** Each option maps to points on one or more dimensions (e.g., process maturity, callback cost, time cost). Don't ask a question whose answers don't change the result.
- **Partial result before the gate.** After the last question, show the tier name and a one-line diagnosis immediately. Then gate the *full* report (score breakdown, benchmark, action checklist) behind **one field: email.** Single-field gating outperforms multi-field forms; ask for company and home count later or infer from answers.
- **3–4 result buckets**, each with a name the buyer would repeat to a peer, a plain diagnosis, a specific next step, and a CTA matched to fit (high-fit → book a demo / start; low-fit → nurture email, not a hard sell).
- **The result page is a landing page.** PAS structure: name the problem from their answers, quantify it, present the fix. Same design system as the site; not a bare white card.
- **Copy passes** — quiz questions and results go through the humanizer checklist and the brand's voice rules like any other copy. Questions sound like a colleague asking, not a survey.

## Build spec (Next.js + Supabase)

- Route: `/quiz` (or `/scorecard`) with client-side state for answers; one screen per question; keyboard and mobile friendly.
- Supabase table `quiz_leads`: `id, created_at, email, answers (jsonb), scores (jsonb), bucket (text), source (text), utm (jsonb)`. Written via a Next.js route handler on email submit (never directly from the browser). Use Drizzle if the repo uses Drizzle.
- Fire a PostHog event per step (`quiz_started`, `quiz_step_completed` with step number, `quiz_completed`, `quiz_email_submitted`, `quiz_cta_clicked`) so the funnel is visible and drop-off per question is measurable.
- On email submit: send the full result via Resend (one email, brand voice, contains the score, the bucket, the checklist, and one CTA). Add the lead to the nurture sequence appropriate to the bucket.
- Result pages have their own URL (`/scorecard/result/[bucket]`) so they can be shared and revisited; `noindex` them.
- Never expose the scoring logic client-side as something to game; it's fine for it to be simple, but compute the final bucket on the server when storing.

## The Afterkey Post-Closing Scorecard (designed out)

**Working title:** "The Post-Closing Callback Scorecard — how much are warranty callbacks really costing your builds?"

**Hook framing:** industry sources put the average homeowner callback around $476 each (a figure cited by 2-10 Home Buyers Warranty as an NAHB average), and callbacks are commonly estimated to erode 2–3% of project cost. Use the cost economics; do not use homeowner-satisfaction statistics (they're inconsistent across sources).

**Questions (one per screen, visual answer cards):**

1. How many homes do you close per year? — 1–5 · 6–15 · 16–30 · 31–50+
2. How do homeowners report post-closing issues today? — Text or call my cell · Email · A spreadsheet or shared doc · A portal or form
3. Who decides whether an item is warranty vs. homeowner maintenance? — Me, personally · Office admin · Nobody, it piles up · A system does it
4. How does the right trade get dispatched once an item comes in? — I chase them by phone/text · Email chain · Software · It's inconsistent
5. What happens at the 11-month mark before the workmanship warranty ends? — We reach out proactively · The homeowner has to remember · Nothing structured
6. How often do the same defects recur across homes? — Never tracked · Occasionally · Frequently, same issues every phase
7. What does a bad post-closing experience cost you most? — Lost referrals · Bad reviews · My personal time · Sub relationships

**Scoring:** two dimensions. *Process maturity* (Q2–Q6: 0 = chaos, 3 = systematized). *Callback cost estimate* = homes/year (midpoint of Q1) × an assumed callbacks-per-home (use a conservative, stated assumption like 4) × $476, adjusted up for "nobody triages" / "not tracked" answers. Show the assumption on the result page so the number is honest.

**Result buckets:**

- **The Firefighter** — homeowner texts your cell, you triage, you chase subs. Highest hidden cost, zero system. Strongest fit. CTA: "See a callback handled without your phone" → demo/start.
- **The Spreadsheet Juggler** — you track it, manually. Leaking hours and inconsistent dispatch. Strong fit. CTA: same as above.
- **The Portal Starter** — there's a form, but no triage, routing, or 11-month automation. Partial system; clear upgrade path. CTA: "See what your portal is missing" → feature comparison + start.
- **The Buttoned-Up Builder** — mostly systematized. Position Afterkey as the white-label polish under their own brand. CTA: nurture sequence, soft demo offer.

**Gating:** partial result (bucket name + one-line diagnosis + the cost number) shown ungated; full scorecard (breakdown, benchmark vs. other tiers, 5-item fix checklist) emailed after a single email field. Firefighters and Jugglers get a Cal.com booking link in the result email; Starters and Buttoned-Up get the nurture sequence.

**Copy rules apply:** builder voice, no fabricated benchmarks beyond the stated assumption, pricing mentioned plainly on the result page ($149/month base; per-home fee framed as baked into closing cost).
