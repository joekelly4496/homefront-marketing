// Renders the still frames and caption overlays for the /start explainer.
// Needs the dev server on :3000 (for the product mockups) and Chromium.
//   node video/render-frames.mjs
import { chromium } from "playwright-core";
import { existsSync, mkdirSync, readFileSync } from "node:fs";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT = `${ROOT}video/frames`;
mkdirSync(OUT, { recursive: true });
const timeline = JSON.parse(readFileSync(`${ROOT}video/timeline.json`, "utf8"));

const browser = await chromium.launch({
  executablePath: process.env.CHROME || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  args: ["--no-sandbox"],
});

// Google Fonts' woff2 host isn't reachable from every build box, so frames are
// painted inside the running site, where next/font has already loaded the
// real Bricolage Grotesque + Hanken Grotesk files.
const BASE_CSS = (fam) => `
  :root{--ink:#1A2332;--paper:#FAF8F4;--drywall:#E8E4DC;--brass:#B08D42;--tape:#3A5A80}
  html,body{margin:0!important;padding:0!important}
  body{font-family:${fam.body};color:var(--paper);-webkit-font-smoothing:antialiased}
  .display,h2{font-family:${fam.display};font-weight:700;letter-spacing:-0.02em}
`;

async function settle(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
}

// 1. Product mockups, screenshotted off the live homepage at 2x.
const mocks = {
  dashboard: { sel: '[role="img"][aria-label^="The Afterkey builder dashboard"]', width: 1440 },
  request: { sel: '[role="img"][aria-label^="A service request moving"]', width: 1440 },
  binder: { sel: '[role="img"][aria-label^="The Afterkey AI Home Binder"]', width: 1440 },
  phone: { sel: '[role="img"][aria-label^="The Afterkey homeowner portal"]', width: 1440 },
};
const shots = {};
for (const [name, m] of Object.entries(mocks)) {
  const ctx = await browser.newContext({ viewport: { width: m.width, height: 1000 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 90000 });
  await settle(page);
  const el = page.locator(m.sel).locator("visible=true").first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  shots[name] = await el.screenshot({ type: "png" });
  console.log("mockup", name, shots[name].length, "bytes");
  await ctx.close();
}
const dataUrl = (buf) => `data:image/png;base64,${buf.toString("base64")}`;

// 2. One page on the live site; each frame swaps the body and injects CSS.
const fctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
const fpage = await fctx.newPage();
await fpage.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 90000 });
await settle(fpage);
const fam = await fpage.evaluate(() => ({
  display: getComputedStyle(document.querySelector("h1")).fontFamily,
  body: getComputedStyle(document.body).fontFamily,
}));
console.log("fonts", fam);

async function paint({ width, height, css, html, out, transparent = false }) {
  await fpage.setViewportSize({ width, height });
  await fpage.evaluate(({ css, html }) => {
    document.querySelectorAll("style[data-vid]").forEach((e) => e.remove());
    const s = document.createElement("style");
    s.dataset.vid = "1";
    s.textContent = css;
    document.head.appendChild(s);
    document.body.className = "";
    document.body.innerHTML = html;
    window.scrollTo(0, 0);
  }, { css, html });
  await settle(fpage);
  await fpage.screenshot({ path: out, type: "png", omitBackground: transparent });
}

const SCENE_CSS = `${BASE_CSS(fam)}
  html{background:var(--ink)!important}
  body{width:1920px;height:1080px;background:var(--ink)!important;overflow:hidden;position:relative}
  .glow{position:absolute;inset:0;background:radial-gradient(900px 600px at 50% 40%,rgba(58,90,128,.35),transparent 70%)}
  .stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:72px;padding:0 120px}
  .shot{border-radius:18px;box-shadow:0 40px 100px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.06)}
  .label{max-width:520px}
  .label .eyebrow{font-size:22px;font-weight:600;color:var(--brass);letter-spacing:.06em;text-transform:uppercase;margin-bottom:18px}
  .label h2{font-size:54px;line-height:1.08;color:var(--paper)}
  .label p{margin-top:22px;font-size:26px;line-height:1.4;color:#C9C4B8}
`;
async function frame(name, html) {
  await paint({ width: 1920, height: 1080, css: SCENE_CSS, html: `<div class="glow"></div>${html}`, out: `${OUT}/scene-${name}.png` });
  console.log("frame", name);
}
await frame("phone", `<div class="stage">
  <img class="shot" style="width:470px;border-radius:40px" src="${dataUrl(shots.phone)}">
  <div class="label"><div class="eyebrow">Homeowner portal</div><h2>Under your name, not ours.</h2><p>A photo and two sentences, instead of a text to your cell.</p></div>
</div>`);
await frame("dashboard", `<div class="stage" style="flex-direction:column;gap:36px;padding-top:40px">
  <div class="label" style="max-width:none;text-align:center"><div class="eyebrow">Your list</div><h2>Every callback, one list. One step to assign the sub.</h2></div>
  <img class="shot" style="width:1380px" src="${dataUrl(shots.dashboard)}">
</div>`);
await frame("request", `<div class="stage">
  <div class="label"><div class="eyebrow">The sub's update</div><h2>Updated from the driveway.</h2><p>The homeowner watches it move. Nobody calls you for a status.</p></div>
  <img class="shot" style="width:620px" src="${dataUrl(shots.request)}">
</div>`);
await frame("binder", `<div class="stage">
  <img class="shot" style="width:680px" src="${dataUrl(shots.binder)}">
  <div class="label"><div class="eyebrow">Maintenance schedule</div><h2>Built from the home's own manuals.</h2><p>A source on every line, so the reminders come from you for years.</p></div>
</div>`);
await frame("end", `<div class="stage" style="flex-direction:column;gap:0;text-align:center">
  <div style="display:flex;align-items:center;gap:16px;margin-bottom:56px">
    <span style="display:inline-flex;width:56px;height:56px;border-radius:8px;background:var(--brass);align-items:center;justify-content:center">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1A2332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    </span>
    <span class="display" style="font-size:40px;color:var(--paper)">Afterkey</span>
  </div>
  <h2 class="display" style="font-size:88px;line-height:1.02;color:var(--paper)">$149 a month.<br>$10 per home.</h2>
  <p style="margin-top:36px;font-size:30px;line-height:1.4;color:#C9C4B8;max-width:1100px">Build the $10 into the price at closing. If it's not working for you in the first 30 days, we refund your subscription in full.</p>
  <p style="margin-top:56px;font-size:28px;font-weight:600;color:var(--brass)">Book a call below — or set up your first home today.</p>
</div>`);

// 3. Caption overlays (1280x200, transparent), one per caption segment.
const CAP_CSS = `${BASE_CSS(fam)}
  html{background:transparent!important}
  body{width:1280px;height:200px;background:transparent!important;display:flex;align-items:flex-end;justify-content:center;padding-bottom:34px!important}
  .cap{display:inline-block;max-width:1100px;padding:14px 26px;border-radius:8px;background:rgba(26,35,50,.88);color:#FAF8F4;font-size:34px;font-weight:600;line-height:1.3;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.35)}
`;
const timed = existsSync(`${ROOT}video/captions.json`)
  ? JSON.parse(readFileSync(`${ROOT}video/captions.json`, "utf8")) : null;
for (const line of timeline.lines) {
  const texts = timed?.[line.id] ? timed[line.id].map((c) => c.text) : line.captions;
  for (const [i, text] of texts.entries()) {
    await paint({ width: 1280, height: 200, css: CAP_CSS, html: `<div class="cap">${text}</div>`, out: `${OUT}/cap-${line.id}-${i + 1}.png`, transparent: true });
  }
}
console.log("captions done");
await browser.close();
