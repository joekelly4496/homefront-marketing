# CRO Loop — measure, hypothesize, test, learn

A marketing team doesn't ship a page and walk away; it reads what visitors did and changes one thing a week. PostHog is the instrument (analytics, session replay, heatmaps, feature flags, experiments), the PostHog MCP is how Claude reads it, and this file is the routine. Everything here is proposal-then-approval: Claude recommends, Joe decides, Claude implements.

## Instrumentation (done at build time, not later)

PostHog is installed via `instrumentation-client.ts` (pageviews, session replay with inputs masked, error tracking) with events routed through the site's own domain. On top of autocapture, fire named events so funnels are readable:

- `cta_clicked` with `{ location: "hero" | "pricing" | "final", label }`
- `quiz_started`, `quiz_step_completed` `{ step }`, `quiz_completed`, `quiz_email_submitted` `{ bucket }`, `quiz_cta_clicked` `{ bucket }`
- `form_submitted` `{ form: "contact" | "signup" | "demo" }`
- `pricing_viewed` (section entered viewport)
- `booking_started` (Cal.com embed opened)

Set `utm` capture on (PostHog does this by default) so campaign source survives to the lead record. Mirror the important ones (`quiz_email_submitted`, `form_submitted`) into Supabase so the lead table stands on its own.

Build two saved funnels in PostHog on day one: **Visit → CTA click → form submitted** and **Quiz started → completed → email submitted → CTA clicked.**

## The weekly review (what Claude produces every week)

Pull the last 7 days (compare to the prior 7) and write a one-page note, in plain language, with numbers:

1. **Traffic** — visitors, top sources, top landing pages.
2. **Funnel** — conversion at each step of both funnels; where the biggest drop-off is.
3. **Quiz** — starts, completion rate, drop-off by question, bucket distribution, email capture rate.
4. **Behavior** — from session replay and heatmaps: what people actually did on the weakest page. Watch 3–5 recordings of visitors who reached the drop-off point and left. Describe what they did in one line each (no speculation about who they are).
5. **Errors** — anything from error tracking that touched a form or the quiz.
6. **One hypothesis** — the single highest-leverage change, stated as: *"Because [observation], we believe [change] will [move metric]. We'll know in [N] visitors."* One, not five.
7. **Ask** — a yes/no for Joe.

Keep the note in the repo at `marketing/cro-log.md`, newest week on top, and append the outcome of last week's change. This file is the team's memory; read it before writing the next review so hypotheses build on each other and nothing gets retested.

## Running an experiment

- Only after Joe says yes.
- Small sites don't have the traffic for many simultaneous A/B tests. Rule: **one live experiment at a time**, on the page with the most traffic, testing the biggest-swing element (headline, hero image, CTA copy, quiz gate placement). Tiny tweaks won't reach significance; skip them.
- Use a PostHog feature flag with two variants and a PostHog Experiment with the funnel's conversion event as the goal. Implement the variant in code behind the flag (`posthog.getFeatureFlag('hero-headline-v2')`), server-rendered where possible to avoid flicker.
- Decide the sample size up front (PostHog's experiment setup estimates it). Don't peek and call it early. If traffic is too low to conclude in ~3 weeks, prefer a sequential "ship the better-looking version, watch for two weeks" approach and say so explicitly rather than running a fake test.
- When it concludes: ship the winner, remove the flag from code, log the result in `cro-log.md`.

## SEO check, monthly

Once a month, alongside the weekly review: Google Search Console impressions and clicks by page and query, pages that gained or lost, queries the site is ranking 8–20 for (the cheap wins: strengthen that page's H2s and answer-first copy). Propose one content change. Same approval rule.

## Automating it

Set the weekly review up as a scheduled Claude Code task (or a GitHub Action that opens a PR with the note) so it runs without Joe remembering. The review is read-only; the experiment step always waits for a human.
