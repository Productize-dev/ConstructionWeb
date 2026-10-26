"use client";

import { useState } from "react";

type Video = { id: string; label: string };

export function VideoGrid({
  videos,
  title,
}: {
  videos: readonly Video[];
  title?: string;
}) {
  const [active, setActive] = useState(videos[0]?.id ?? "");
  const current = videos.find((video) => video.id === active) ?? videos[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-video bg-navy">
        <iframe
          key={current.id}
          src={`https://www.youtube-nocookie.com/embed/${current.id}`}
          title={title ? `${title}, ${current.label}` : current.label}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div
        className={`mt-2 grid grid-cols-2 gap-2 ${
          videos.length > 2 ? "sm:grid-cols-5" : "max-w-md"
        }`}
      >
        {videos.map((video) => {
          const selected = video.id === current.id;
          return (
            <button
              key={video.id}
              type="button"
              onClick={() => setActive(video.id)}
              aria-pressed={selected}
              className={`relative aspect-video overflow-hidden bg-navy ${
                selected ? "ring-2 ring-pink" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt=""
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-navy/80 px-2 py-1 text-left text-[10px] font-semibold tracking-[0.14em] text-paper uppercase">
                {video.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
