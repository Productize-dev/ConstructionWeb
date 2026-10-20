"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { projects, type ProjectCategory } from "@/lib/projects";

const filters = ["All", "Residential", "Development", "Commercial"] as const;

export function PortfolioGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-md border px-4 py-2 text-[12px] font-medium tracking-wide transition-colors",
              filter === item
                ? "border-navy bg-navy text-paper"
                : "border-line bg-paper text-ink-soft hover:border-navy hover:text-navy"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.src} delay={(i % 3) * 60}>
            <article className="group relative aspect-[4/5] overflow-hidden bg-navy-deep">
              <Image
                src={project.src}
                alt={`${project.name}, ${project.place} — ${project.category.toLowerCase()} project by J&L Construction`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent opacity-95 sm:opacity-80 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] tracking-[0.16em] text-pink uppercase">
                  {project.category as ProjectCategory}
                </p>
                <p className="mt-1 text-[15px] font-semibold text-paper">
                  {project.name}
                </p>
                <p className="mt-1 text-[11px] tracking-wide text-paper/65 uppercase">
                  {project.place}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
