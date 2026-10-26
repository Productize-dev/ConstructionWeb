"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: "/images/maple/01.jpg",
    label: "1348 Maple Chase Lane",
    place: "Brookberry",
    href: "/portfolio/1348-maple",
  },
  {
    src: "/images/hidden-woods/223/01.jpg",
    label: "223 Timber Hill Court",
    place: "Hidden Woods Village",
    href: "/portfolio/hidden-woods#223",
  },
  {
    src: "/images/hidden-woods/221/01.jpg",
    label: "211 Timber Hill Court",
    place: "Hidden Woods Village",
    href: "/portfolio/hidden-woods#211",
  },
  {
    src: "/images/hero-house.jpg",
    label: "Custom home",
    place: "Winston-Salem, NC",
    href: "/portfolio",
  },
  {
    src: "/images/portfolio-2.jpg",
    label: "4614",
    place: "Winston-Salem, NC",
    href: "/portfolio",
  },
] as const;

const FACTS = [
  { label: "Established", value: "2014" },
  { label: "Custom homes", value: "100+" },
  { label: "License", value: "Unlimited NC" },
  { label: "Territory", value: "Piedmont Triad" },
] as const;

export function Hero() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const slide = SLIDES[active];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enter = window.setTimeout(() => setReady(true), reduced ? 0 : 40);
    return () => window.clearTimeout(enter);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % SLIDES.length);
    }, 6500);

    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section className="border-b border-line bg-paper">
      <div className="container grid grid-cols-1 items-end gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div
          className={cn(
            "lg:col-span-5 lg:pb-2 transition-all duration-700 ease-out",
            ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}
        >
          <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-navy uppercase">
            <span className="h-px w-8 bg-pink" />
            Serving the Piedmont Triad
          </p>
          <h1 className="mt-5 max-w-[12ch] text-[clamp(2.7rem,4.8vw,4.35rem)] leading-[1.02] font-semibold text-navy">
            Built right, from the ground up.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Residential communities, custom homes, and commercial spaces across
            the Piedmont Triad — delivered on time and on budget since 2014.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <Link href="/get-started">Get started</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio">View our work</Link>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "lg:col-span-7 transition-all delay-100 duration-700 ease-out",
            ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep sm:aspect-[16/11]">
            {SLIDES.map((item, index) => (
              <div
                key={item.src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  index === active ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={item.src}
                  alt={`${item.label}, ${item.place}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 bg-navy px-4 py-3 text-paper sm:px-5">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-pink uppercase">
                {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </p>
              <p className="mt-0.5 truncate text-sm font-semibold" aria-live="polite">
                {slide.label}
              </p>
            </div>
            <p className="hidden text-[12px] text-paper/70 sm:block">{slide.place}</p>
            <Link
              href={slide.href}
              className="shrink-0 text-[12px] font-semibold tracking-wide text-paper uppercase hover:text-pink"
            >
              View
            </Link>
          </div>
        </div>
      </div>

      <div className="container pb-8 lg:pb-10">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {SLIDES.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={selected}
                aria-label={`Show ${item.label}, ${item.place}`}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden bg-navy-deep text-left",
                  selected ? "ring-2 ring-pink" : "ring-1 ring-line"
                )}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 18vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 bg-navy/90 px-2 py-1.5">
                  <span className="block truncate text-[11px] font-semibold text-paper">
                    {item.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-navy">
        <div className="container grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="px-4 py-4 md:px-6 md:py-5">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-pink uppercase">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-paper md:text-base">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
