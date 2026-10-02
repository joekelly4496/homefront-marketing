"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import posthog from "posthog-js";

type Source =
  | { kind: "embed"; src: string }
  | { kind: "file"; src: string }
  | null;

/** Turns a share link into an embeddable source. Unknown links → null. */
export function parseVideoUrl(url: string): Source {
  if (!url) return null;
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (yt)
    return {
      kind: "embed",
      src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1`,
    };
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo)
    return {
      kind: "embed",
      src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`,
    };
  const loom = url.match(/loom\.com\/(?:share|embed)\/([\w]+)/);
  if (loom)
    return {
      kind: "embed",
      src: `https://www.loom.com/embed/${loom[1]}?autoplay=1&hide_owner=true&hide_share=true&hide_title=true`,
    };
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) return { kind: "file", src: url };
  return null;
}

/**
 * The landing-page video. Shows a poster with a play button and only loads
 * the player on click, so a third-party embed never slows the first paint.
 * With no usable URL it renders `fallback` instead, so the page is
 * shippable before the video exists.
 */
export function AdVideo({
  url,
  poster,
  title,
  duration,
  fallback,
}: {
  url: string;
  poster: string;
  title: string;
  duration?: string;
  fallback: ReactNode;
}) {
  const source = parseVideoUrl(url);
  const [playing, setPlaying] = useState(false);

  if (!source) return <>{fallback}</>;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[6px] bg-ink shadow-2xl ring-1 ring-paper/10">
      {playing ? (
        source.kind === "embed" ? (
          <iframe
            src={source.src}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <video
            src={source.src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        )
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            if (posthog.__loaded) posthog.capture("ad_video_play");
          }}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="photo object-cover"
          />
          <span className="absolute inset-0 bg-ink/45 transition-colors group-hover:bg-ink/35" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brass text-ink shadow-lg transition-transform group-hover:scale-105">
              <Play className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-paper">
              {title}
              {duration ? <span className="ml-2 text-paper/70">{duration}</span> : null}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
