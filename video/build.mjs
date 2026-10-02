// Assembles the /start explainer: still frames with slow camera moves,
// caption overlays, and the narration, into one MP4.
//
//   node video/build.mjs --root <dir with video/, public/, vo/> \
//     --ffmpeg <ffmpeg> --ffprobe <ffprobe> --out <dir>
//
// Narration files live in <root>/vo/ (see timeline.json "vo"). To re-dub with
// a human voice, drop replacement files there and re-run; timings follow the
// audio lengths automatically.
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > -1 ? process.argv[i + 1] : d; };
const ROOT = arg("root", process.cwd());
const FFMPEG = arg("ffmpeg", "ffmpeg");
const FFPROBE = arg("ffprobe", "ffprobe");
const OUT = arg("out", join(ROOT, "out"));
mkdirSync(OUT, { recursive: true });

const T = JSON.parse(readFileSync(join(ROOT, "video/timeline.json"), "utf8"));
const { fps, width: W, height: H, gap, tail } = T;
const run = (bin, args) => execFileSync(bin, args, { stdio: ["ignore", "pipe", "inherit"], maxBuffer: 1 << 26 }).toString();
const probe = (f) => parseFloat(run(FFPROBE, ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]));
const r3 = (n) => Math.round(n * 1000) / 1000;

// 1. Timing. Each line runs for its narration plus a gap; the last gets a tail.
let cursor = 0;
const scenes = [];
const captions = [];
for (const [li, line] of T.lines.entries()) {
  const vo = probe(join(ROOT, line.vo));
  const lineDur = vo + gap + (li === T.lines.length - 1 ? tail : 0);
  line.start = cursor; line.vo_dur = vo; line.dur = lineDur;

  let left = lineDur;
  for (const [si, sc] of line.scenes.entries()) {
    const last = si === line.scenes.length - 1;
    const d = last ? left : Math.min(sc.seconds ?? left, left);
    scenes.push({ ...sc, dur: d, name: `l${line.id}s${si + 1}` });
    left -= d;
  }

  const total = line.captions.reduce((n, c) => n + c.length, 0);
  let acc = 0;
  for (const [ci, text] of line.captions.entries()) {
    const start = cursor + (vo * acc) / total;
    acc += text.length;
    const end = ci === line.captions.length - 1 ? cursor + vo + Math.min(gap, 0.4) : cursor + (vo * acc) / total;
    captions.push({ png: join(ROOT, `video/frames/cap-${line.id}-${ci + 1}.png`), start: r3(start), end: r3(end), text });
  }
  cursor += lineDur;
}
const TOTAL = r3(cursor);
console.log(`total ${TOTAL}s, ${scenes.length} scenes, ${captions.length} captions`);

// 2. One clip per scene. zoompan runs on an oversized frame so the move is smooth.
const motion = (m, N) => {
  const c = `x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'`;
  switch (m) {
    case "zoom-in": return `z='1+0.10*on/${N}':${c}`;
    case "zoom-in-soft": return `z='1+0.035*on/${N}':${c}`;
    case "pan-right": return `z='1.12':x='(iw-iw/zoom)*on/${N}':y='ih/2-(ih/zoom/2)'`;
    default: return `z='1':${c}`;
  }
};
const clips = [];
for (const sc of scenes) {
  const N = Math.round(sc.dur * fps);
  const out = join(OUT, `${sc.name}.mp4`);
  const vf = `scale=${W * 2}:${H * 2}:force_original_aspect_ratio=increase,crop=${W * 2}:${H * 2},` +
    `zoompan=${motion(sc.motion, N)}:d=${N}:s=${W}x${H}:fps=${fps},format=yuv420p`;
  run(FFMPEG, ["-y", "-loglevel", "error", "-i", join(ROOT, sc.image), "-vf", vf, "-frames:v", String(N),
    "-r", String(fps), "-c:v", "libx264", "-preset", "medium", "-crf", "19", "-g", String(fps * 2), out]);
  clips.push(out);
  console.log("clip", sc.name, sc.dur.toFixed(2) + "s", sc.image);
}
const list = join(OUT, "concat.txt");
writeFileSync(list, clips.map((c) => `file '${c}'`).join("\n"));
const silent = join(OUT, "video-silent.mp4");
run(FFMPEG, ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", list, "-c", "copy", silent]);

// 3. Captions + narration in one pass.
const inputs = ["-i", silent];
let fc = "";
captions.forEach((c, i) => { inputs.push("-i", c.png); });
T.lines.forEach((l) => { inputs.push("-i", join(ROOT, l.vo)); });
let v = "[0:v]";
captions.forEach((c, i) => {
  const o = i === captions.length - 1 ? "[vout]" : `[v${i}]`;
  fc += `${v}[${i + 1}:v]overlay=0:${H - 200}:enable='between(t,${c.start},${c.end})'${o};`;
  v = o;
});
const a0 = captions.length + 1;
T.lines.forEach((l, i) => { fc += `[${a0 + i}:a]aresample=48000,aformat=channel_layouts=stereo,apad=pad_dur=${gap}[a${i}];`; });
fc += T.lines.map((_, i) => `[a${i}]`).join("") + `concat=n=${T.lines.length}:v=0:a=1,apad=whole_dur=${TOTAL},loudnorm=I=-16:TP=-1.5:LRA=11[aout]`;
const final = join(OUT, "afterkey-explainer.mp4");
run(FFMPEG, ["-y", "-loglevel", "error", ...inputs, "-filter_complex", fc, "-map", "[vout]", "-map", "[aout]",
  "-t", String(TOTAL), "-c:v", "libx264", "-preset", "medium", "-crf", "19", "-pix_fmt", "yuv420p",
  "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", final]);
run(FFMPEG, ["-y", "-loglevel", "error", "-ss", "1", "-i", final, "-frames:v", "1", "-q:v", "3", join(OUT, "poster.jpg")]);
console.log("done", final, probe(final).toFixed(2) + "s");
writeFileSync(join(OUT, "timing.json"), JSON.stringify({ total: TOTAL, lines: T.lines.map((l) => ({ id: l.id, start: r3(l.start), vo: r3(l.vo_dur) })), captions }, null, 2));
