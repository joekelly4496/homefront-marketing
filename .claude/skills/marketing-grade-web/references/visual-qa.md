# Visual QA — Claude looks at its own work

Building a page without looking at it is how AI-built sites ship with a nav that overflows on mobile, a hero image cropped through the subject, and text nobody can read over a photo. This file makes looking mandatory. Joe should never be the first person to see a broken layout.

## Setup (Claude Code does this itself, once per repo)

Use a browser MCP so Claude can open the running site, take screenshots, and read the console:

- **Chrome DevTools MCP** (`chrome-devtools-mcp`) — the daily driver: screenshots, console errors, performance traces, lightweight on context. Add via `claude mcp add chrome-devtools npx chrome-devtools-mcp@latest` or an entry in the repo's `.mcp.json`.
- **Playwright MCP** (`@playwright/mcp`) — for cross-browser and mobile-viewport verification before a release. Heavier on context; use it for the final pass, not every edit.

If the current environment can't launch a browser (some cloud containers can't), fall back to: `next build` must pass, then deploy a Vercel preview and screenshot the **preview URL** with the browser tool. If neither is possible, say so plainly and ask Joe for a screenshot rather than pretending the page was checked.

Run the dev server (`npm run dev`) or use the Vercel preview; never QA against stale builds.

## The review loop (every section, every time)

1. Build the section.
2. Screenshot at **three widths: 390px (phone), 820px (tablet), 1440px (desktop).**
3. Look at each screenshot and answer the checklist below in writing before moving on.
4. Fix, re-screenshot, confirm. Then move to the next section.
5. Before handing anything to Joe: a full-page pass at all three widths plus a console check (zero errors, no failed image loads).

## The checklist — what to look for in the screenshot

**Layout**
- Nothing overflows horizontally at 390px. No horizontal scrollbar. Nav collapses cleanly.
- Hero text is legible over the image at all widths; the image's subject isn't cropped out on mobile (fix with `object-position`).
- Placeholder blocks are gone (no "hero-keys-counter — 16:9" labels left in production).
- Spacing rhythm is consistent; sections don't stack with random gaps.
- Tap targets are at least 44px on mobile; buttons aren't touching each other.

**Typography**
- The display and body fonts actually loaded (a fallback font rendering silently is a common failure — compare against the brand file).
- Line lengths under ~80 characters on desktop; headings don't wrap into orphans (one word alone on a line).
- Hierarchy reads at a glance: one obvious H1, sections clearly separated.

**Imagery**
- Every image loaded (no broken-image icons), correct aspect ratio, no visible AI artifacts at display size, the unifying treatment applied consistently.

**The AI-tells scan** (from SKILL.md): default fonts, purple gradients, emoji icons, three identical cards, every link with an arrow, gradient text — if any survived to the screenshot, remove it now.

**Function**
- Every button and link goes somewhere. Forms submit and show a success state. The quiz advances and the result page renders for each bucket.
- Console: zero errors. Network: no 404s.

**States**
- Loading states exist for anything async; error states are written in the brand voice, not "Something went wrong."
- Focus rings visible when tabbing; reduced-motion respected.

## Performance floor

Run Lighthouse (via the DevTools MCP or `npx lighthouse` in CI) on the homepage before launch. Targets: Performance ≥ 90 on desktop, ≥ 80 on mobile; LCP under 2.5s; CLS under 0.1. If images are the problem, go back to image-integration.md and compress.

## Reporting to Joe

After QA, tell Joe in two or three sentences what was checked and what was fixed, and attach or link the desktop and phone screenshots. He judges the feel; Claude has already caught the mechanics.
