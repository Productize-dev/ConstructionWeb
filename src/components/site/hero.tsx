"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FEATURED = [
  {
    src: "/images/hero-house.png",
    label: "Custom home",
    place: "Winston-Salem, NC",
  },
  {
    src: "/images/residential-1.jpg",
    label: "Residential development",
    place: "Hidden Woods Village",
  },
  {
    src: "/images/residential-2.jpg",
    label: "Craftsman build",
    place: "Piedmont Triad",
  },
  {
    src: "/images/portfolio-2.jpg",
    label: "Completed residence",
    place: "Winston-Salem, NC",
  },
];

const THUMBS = [
  "/images/portfolio-1.jpg",
  "/images/portfolio-3.jpg",
  "/images/kitchen.jpg",
  "/images/commercial-dental.jpg",
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enter = window.setTimeout(() => setReady(true), reduced ? 0 : 40);
    return () => window.clearTimeout(enter);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % FEATURED.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="container grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        {/* Copy */}
        <div
          className={cn(
            "lg:col-span-5 transition-all duration-700 ease-out",
            ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <p className="mb-5 text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
            General contractor &middot; North Carolina
          </p>
          <h1 className="text-[40px] leading-[1.1] font-semibold text-navy sm:text-[46px]">
            Built right, from the <span className="text-pink">ground up.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Residential communities, custom homes, and commercial spaces across
            the Piedmont Triad — delivered on time and on budget since 2014.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="pink">
              <a href="#quote">Request a quote</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#portfolio">View our work</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {THUMBS.slice(0, 3).map((src, i) => (
              <div
                key={src}
                className="relative h-12 w-12 overflow-hidden rounded-md border border-line sm:h-14 sm:w-14"
                style={{ marginLeft: i === 0 ? 0 : -10 }}
              >
                <Image src={src} alt="" fill sizes="56px" className="object-cover" />
              </div>
            ))}
            <p className="ml-2 text-[12px] leading-snug text-ink-soft">
              100+ homes delivered
              <span className="block font-medium text-navy">across the Triad</span>
            </p>
          </div>
        </div>

        {/* Imagery */}
        <div
          className={cn(
            "lg:col-span-7 transition-all delay-150 duration-700 ease-out",
            ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <div className="grid grid-cols-12 gap-3 sm:gap-4">
            {/* Main featured */}
            <div className="relative col-span-12 aspect-[16/11] overflow-hidden rounded-xl bg-offwhite sm:col-span-8 sm:aspect-auto sm:min-h-[420px]">
              {FEATURED.map((shot, i) => (
                <div
                  key={shot.src}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000 ease-out",
                    i === active ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={shot.src}
                    alt={`${shot.label} — ${shot.place}`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-[6000ms] ease-out",
                      i === active ? "scale-105" : "scale-100"
                    )}
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-pink uppercase">
                    Featured project
                  </p>
                  <p className="mt-1 text-sm font-medium text-paper">
                    {FEATURED[active].label}
                  </p>
                  <p className="text-[12px] text-paper/70">
                    {FEATURED[active].place}
                  </p>
                </div>

                <div className="flex gap-1.5">
                  {FEATURED.map((shot, i) => (
                    <button
                      key={shot.src}
                      type="button"
                      aria-label={`Show ${shot.label}`}
                      onClick={() => setActive(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === active
                          ? "w-6 bg-pink"
                          : "w-1.5 bg-paper/45 hover:bg-paper/70"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Side stack */}
            <div className="col-span-12 grid grid-cols-3 gap-3 sm:col-span-4 sm:grid-cols-1 sm:gap-4">
              {[
                {
                  src: "/images/portfolio-4.jpg",
                  caption: "Clemmons, NC",
                },
                {
                  src: "/images/hero-hidden-woods.jpg",
                  caption: "Hidden Woods",
                },
                {
                  src: "/images/commercial-dental.jpg",
                  caption: "Commercial",
                },
              ].map((item, i) => (
                <div
                  key={item.src}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-xl bg-offwhite sm:aspect-auto sm:min-h-[128px] transition-all duration-700 ease-out",
                    ready
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${280 + i * 120}ms` }}
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 640px) 20vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
                  <p className="absolute bottom-2.5 left-2.5 text-[11px] font-medium text-paper">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
