# Ad landing video — script (about 65 seconds)

For the video on `/start` and for Instagram. Joe on camera at a job site,
phone video, saying the seven beats below to the lens. The stills-and-captions
cut built from site photos was rejected and is not used anywhere; the
`video/` scripts remain only for the edit (word-timed captions, end card).

**Shooting it**
- Phone, vertical, eye level, a step back so the site is behind you. The mess
  is the point — not a finished house.
- Outdoors, sun behind the camera or overcast. Not noon sun on your face.
- Audio decides it: a clip-on lav mic, or stand within three feet in a quiet
  moment. No wind.
- One take per beat, two or three tries each. Say it to another builder, don't
  read it.
- A few 10-second cutaways: walking the site, hand on a door frame, looking at
  your phone, the truck.
- Beats 3–6 cut to real screen recordings of the app from the demo workspace
  ("Whitfield Homes"). Never a real builder's workspace.

**Rules**
- No "AI handles it." The software organizes and reminds; people close requests.
- Pricing and guarantee wording comes from `src/lib/content.ts`; don't improvise.

---

**1 — On camera**
"I build homes on Long Island. Three weeks after closing, you get the text.
'Hey, quick question.' By August, you've had forty of them."

**2 — On camera**
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

**7 — On camera, then the pricing end card**
"A hundred forty-nine a month, plus ten dollars a home that you build into
the price at closing. Not working in thirty days? You get your subscription
back. Book a call, or set up your first home today."

---

**Editing it.** Takes go in `video/vo/` (audio is pulled from the video
files); `video/make-captions.mjs` turns a word-level transcript into
`video/captions.json`, `video/render-frames.mjs` paints the caption overlays
and end card, and `video/build.mjs` assembles with ffmpeg. See the README's
`/start` section.

**Hosting.** Put the MP4 at `public/videos/afterkey-explainer.mp4` and set
`adLanding.videoUrl` to `/videos/afterkey-explainer.mp4` (with its length in
`videoDuration`), or upload to YouTube (unlisted is fine), Vimeo or Loom and
paste the share link instead.
