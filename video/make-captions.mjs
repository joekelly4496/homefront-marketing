// Turns word-level timestamps (from a speech-to-text pass over the cleaned
// takes) into caption phrases: a few words each, broken at punctuation and
// natural pauses, timed to the words actually spoken.
//   node video/make-captions.mjs <words.json> > video/captions.json
// words.json: { "<line id>": [ { "w": "word", "s": 0.12, "e": 0.4 }, ... ] }
import { readFileSync } from "node:fs";

const words = JSON.parse(readFileSync(process.argv[2], "utf8"));
const MAX_CHARS = 42;
const MAX_WORDS = 7;
const PAUSE = 0.45;

const out = {};
for (const [id, ws] of Object.entries(words)) {
  const phrases = [];
  let cur = [];
  const flush = () => {
    if (!cur.length) return;
    phrases.push({ text: cur.map((w) => w.w).join(" "), start: cur[0].s, end: cur[cur.length - 1].e });
    cur = [];
  };
  ws.forEach((w, i) => {
    cur.push(w);
    const text = cur.map((x) => x.w).join(" ");
    const next = ws[i + 1];
    const endsClause = /[.!?]$/.test(w.w) || (/[,;:—]$/.test(w.w) && text.length > 18);
    const longPause = next && next.s - w.e > PAUSE;
    const tooLong = next && (text.length + next.w.length + 1 > MAX_CHARS || cur.length >= MAX_WORDS);
    if (!next || endsClause || longPause || tooLong) flush();
  });
  // Hold each caption until the next one starts (or 0.5s past its last word).
  phrases.forEach((p, i) => { p.end = Math.max(p.end, i + 1 < phrases.length ? phrases[i + 1].start : p.end + 0.5); p.start = Math.round(p.start * 100) / 100; p.end = Math.round(p.end * 100) / 100; });
  out[id] = phrases;
}
process.stdout.write(JSON.stringify(out, null, 2) + "\n");
