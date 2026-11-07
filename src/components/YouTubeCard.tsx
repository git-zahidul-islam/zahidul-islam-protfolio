"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { YouTubeVideo } from "@/lib/youtube";

export function YouTubeCard({ video, meta }: { video: YouTubeVideo; meta: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="group">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-line bg-bg">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 size-full"
          >
            <Image
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
            <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#ff0033] text-white shadow-lg transition-transform group-hover:scale-110">
              <Play className="ml-0.5 size-5 fill-current" />
            </span>
          </button>
        )}
      </div>
      <a
        href={video.url}
        target="_blank"
        rel="noreferrer"
        className="mt-3 line-clamp-2 text-sm font-medium leading-snug transition-colors hover:text-accent"
      >
        {video.title}
      </a>
      <p className="mt-1 text-xs text-subtle">{meta}</p>
    </article>
  );
}
