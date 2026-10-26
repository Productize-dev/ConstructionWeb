import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { PageCta } from "@/components/site/page-intro";
import { VideoGrid } from "@/components/site/video-grid";
import { Button } from "@/components/ui/button";
import {
  hiddenWoodsHomes,
  hiddenWoodsPlaylist,
  hiddenWoodsVideos,
} from "@/lib/hidden-woods";

export const metadata: Metadata = {
  title: "Hidden Woods Village | J&L Construction",
  description:
    "Finished homes at Hidden Woods Village by J&L Construction: 221, 223, 224, and 229 Timber Hill Court, with construction videos and photography.",
};

const facts = [
  { label: "Community", value: "Hidden Woods Village" },
  { label: "Street", value: "Timber Hill Court" },
  { label: "Homes", value: "221 · 223 · 224 · 229" },
  { label: "Videos", value: "Five videos" },
];

export default function HiddenWoodsPage() {
  const cover = hiddenWoodsHomes[0].photos[0];

  return (
    <main>
      <Nav />

      <section className="border-b border-line bg-paper">
        <div className="container grid grid-cols-1 gap-8 py-10 lg:grid-cols-12 lg:items-end lg:py-14">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Portfolio · Development
            </p>
            <h1 className="mt-3 text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] font-semibold tracking-tight text-navy">
              Hidden Woods Village
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Completed homes on Timber Hill Court.               Photography of 221, 223, 224, and 229, plus the modeling and
              construction videos for the community.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <Button asChild variant="primary">
              <Link href="/get-started">Start a project</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={hiddenWoodsPlaylist} target="_blank" rel="noreferrer">
                YouTube playlist
              </a>
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
          <div className="flex flex-col justify-between gap-8 bg-offwhite px-6 py-10 lg:col-span-4 lg:px-8">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
                On this page
              </p>
              <ul className="mt-4 space-y-3">
                {hiddenWoodsHomes.map((home) => (
                  <li key={home.address}>
                    <a
                      href={`#${home.address}`}
                      className="text-lg font-semibold text-navy hover:text-pink"
                    >
                      {home.address} Timber Hill Court
                    </a>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {home.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-ink-soft">
              <a href="#videos" className="font-medium text-navy hover:text-pink">
                Construction videos
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="videos" className="border-y border-line bg-offwhite">
        <div className="container py-12 md:py-16">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
            Modeling and construction
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-navy md:text-3xl">
            Five videos
          </h2>
          <div className="mt-6">
            <VideoGrid videos={hiddenWoodsVideos} title="Hidden Woods Village" />
          </div>
        </div>
      </section>

      {hiddenWoodsHomes.map((home) => {
        const [hero, ...rest] = home.photos;
        return (
          <section
            key={home.address}
            id={home.address}
            className="border-b border-line bg-paper"
          >
            <div className="container py-10 md:py-14">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
                Timber Hill Court
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy">
                {home.address}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                {home.note}
              </p>
            </div>
            <div className="relative min-h-[360px] md:min-h-[520px]">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-1 md:grid-cols-3 xl:grid-cols-4">
              {rest.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] bg-offwhite"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <PageCta
        title="Planning a community or a single home?"
        body="Tell us the site and the timing. We will say plainly whether we are the right contractor."
      />
      <Footer />
    </main>
  );
}
