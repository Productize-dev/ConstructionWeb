import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { PageCta } from "@/components/site/page-intro";
import { Button } from "@/components/ui/button";
import { VideoGrid } from "@/components/site/video-grid";
import { maplePhotos, mapleStagingPhotos, mapleVideos } from "@/lib/maple";

export const metadata: Metadata = {
  title: "1348 Maple Chase Lane | J&L Construction",
  description:
    "1348 Maple Chase Lane in Brookberry, a luxury home by J&L Construction. Finished photography, virtual staging, and construction video.",
};

const facts = [
  { label: "Address", value: "1348 Maple Chase Lane" },
  { label: "Community", value: "Brookberry" },
  { label: "Division", value: "Luxury homes" },
  { label: "Garage", value: "Two-car" },
];

export default function MaplePage() {
  const cover = maplePhotos[0];
  const door = maplePhotos[3];
  const porch = maplePhotos[19];
  const rest = maplePhotos.filter(
    (photo) => photo !== cover && photo !== door && photo !== porch
  );

  return (
    <main>
      <Nav />

      <section className="border-b border-line bg-paper">
        <div className="container grid grid-cols-1 gap-8 py-10 lg:grid-cols-12 lg:items-end lg:py-14">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Portfolio · Luxury Homes Division
            </p>
            <h1 className="mt-3 text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] font-semibold tracking-tight text-navy">
              1348 Maple Chase Lane
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Brick and white board-and-batten, black windows, and a two-car
              garage. Inside: an open kitchen, a linear fireplace, marble
              primary bath, and a screened porch over the field.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button asChild variant="primary">
              <Link href="/get-started">Start a project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio">All projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="px-4 py-5 md:px-6">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-pink uppercase">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-paper md:text-base">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative min-h-[420px] lg:col-span-8 lg:min-h-[640px]">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            {[door, porch].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-offwhite">
        <div className="container grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-12 lg:py-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              On the job
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-navy">
              Construction and virtual staging.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              The construction video and the virtual staging video for 1348
              Maple Chase Lane. The photographs below are the finished house,
              then the staged interiors.
            </p>
          </div>
          <div className="lg:col-span-8">
            <VideoGrid videos={mapleVideos} title="1348 Maple Chase Lane" />
          </div>
        </div>
      </section>

      <section className="bg-paper py-8 md:py-10">
        <div className="container">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold text-navy">The residence</h2>
            <p className="text-[11px] tracking-[0.14em] text-ink-soft uppercase">
              {maplePhotos.length} photographs
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3 lg:grid-cols-4">
            {rest.map((photo, index) => (
              <figure
                key={photo.src}
                className={
                  index === 0
                    ? "relative col-span-2 aspect-[16/10] overflow-hidden bg-navy-deep md:col-span-2 lg:col-span-2"
                    : "relative aspect-[4/3] overflow-hidden bg-navy-deep"
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="staging" className="border-t border-line bg-offwhite py-8 md:py-10">
        <div className="container">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
                Virtual staging
              </p>
              <h2 className="mt-2 text-lg font-semibold text-navy">
                Furnished interiors
              </h2>
            </div>
            <p className="text-[11px] tracking-[0.14em] text-ink-soft uppercase">
              {mapleStagingPhotos.length} photographs
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3">
            {mapleStagingPhotos.map((photo, index) => (
              <figure
                key={photo.src}
                className={
                  index === 0
                    ? "relative col-span-2 aspect-[16/9] overflow-hidden bg-navy-deep md:col-span-2"
                    : "relative aspect-[16/9] overflow-hidden bg-navy-deep"
                }
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Building something in this range?"
        body="Send the residential questionnaire with the lot, the size, and a budget if you have one. We will call with next steps."
      />
      <Footer />
    </main>
  );
}
