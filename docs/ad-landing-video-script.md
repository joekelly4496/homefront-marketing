# Ad landing video — script (about 66 seconds)

For the video on `/start`. Narrated, second person, one idea per beat. The
visuals are the site's own photography and product mockups (the "Whitfield
Homes" demo builder), with the spoken line captioned on screen so it works
muted in a feed.

The current cut uses an AI voice as a placeholder. A founder-read version
in Joe's voice is better for trust: record the seven lines below (one file
per line, 44.1 or 48 kHz, no music), drop them in `video/vo/1.m4a … 7.m4a` (any audio format works),
and re-run `video/build.mjs` — the timings follow the audio lengths.

**Rules**
- Real product screens only, from a demo workspace with a made-up builder
  name. Never a real builder's workspace.
- No "AI handles it." The software organizes and reminds; people close requests.
- Pricing and guarantee wording comes from `src/lib/content.ts`; don't improvise.

---

**1 — Photo: colonial at dusk**
"I build homes on Long Island. Three weeks after closing, you get the text.
'Hey, quick question.' By August, you've had forty of them."

**2 — Photo: punch-list tape on a new wall**
"Filter sizes. The water shutoff. The sub who says he went. None of it on a
system. All of it on your cell."

**3 — Screen: homeowner portal on a phone, under the builder's own name**
"Afterkey gives every homeowner a portal with your name on it. They send a
photo and two sentences, instead of a text."

**4 — Screen: the builder's request list**
"It lands in one list. You assign the sub in one step. If his insurance
lapsed, you find out now, not after a claim."

**5 — Screen: one request, submission to close**
"The sub updates from the driveway. The homeowner watches it move. Nobody
calls you for a status."

**6 — Screen: the home's maintenance schedule with sources**
"Every home gets a maintenance schedule built from its own manuals, with a
source on every line. So the reminders come from you, for years."

**7 — Photo: truck arriving at dusk, then the end card**
"A hundred forty-nine a month, plus ten dollars a home that you build into
the price at closing. Not working in thirty days? You get your subscription
back. Book a call, or set up your first home today."

---

**Building it.** `video/timeline.json` maps each line to its visuals and
captions. `video/render-frames.mjs` paints the product-screen frames and
caption overlays off the running dev site (so they use the real fonts and
mockups); `video/build.mjs` assembles everything with ffmpeg. See the
README's `/start` section for the commands.

**Hosting.** Put the MP4 at `public/videos/afterkey-explainer.mp4` and set
`adLanding.videoUrl` to `/videos/afterkey-explainer.mp4` (with its length in
`videoDuration`), or upload to YouTube (unlisted is fine), Vimeo or Loom and
paste the share link instead.
