import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/projects";

const services = [
  {
    id: "residential",
    number: "01",
    eyebrow: "Residential development",
    title: "Communities planned with intent",
    copy: "From infrastructure through final walkthrough, we build neighborhoods like Hidden Woods Village with the same standards we bring to a single custom home — clear timelines, solid craftsmanship, and direct communication.",
    img: "/images/residential-1.jpg",
    alt: "New construction home in a J&L Construction residential community",
    imageFirst: false,
  },
  {
    number: "02",
    eyebrow: "Residential construction",
    title: "Custom homes, built with discipline",
    copy: "Whether the project is contemporary or traditional, we stay accountable to budget and schedule — from first plans through finish work — so the house you move into matches the one you approved.",
    img: "/images/hero-house.png",
    alt: "Custom farmhouse built by J&L Construction",
    imageFirst: true,
  },
  {
    id: "commercial",
    number: "03",
    eyebrow: "Commercial construction",
    title: "Commercial work, tightly managed",
    copy: "Medical offices, retail, and other commercial builds — executed with quality control and schedule discipline, backed by an unlimited North Carolina general contractor license.",
    img: "/images/commercial-dental.jpg",
    alt: "Commercial dental office built by J&L Construction",
    imageFirst: false,
  },
];

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />

      {/* Trust — editorial, not a generic stat strip */}
      <section id="about" className="border-y border-line bg-navy-deep text-paper">
        <div className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-20">
          <Reveal className="md:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Since 2014
            </p>
            <h2 className="mt-4 max-w-[16ch] text-2xl leading-snug font-semibold md:text-[28px]">
              A local general contractor with serious experience behind it.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3 md:gap-6 md:pt-8">
            {[
              { stat: "50+", label: "Years combined experience" },
              { stat: "100+", label: "Custom homes delivered" },
              { stat: "NC", label: "Unlimited GC license" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={80 + i * 80}>
                <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {s.stat}
                </p>
                <p className="mt-2 max-w-[16ch] text-[13px] leading-snug text-paper/55">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((s) => (
        <section
          key={s.number}
          id={s.id}
          className="grid grid-cols-1 items-stretch lg:grid-cols-2"
        >
          <div
            className={`relative min-h-[360px] overflow-hidden sm:min-h-[440px] lg:min-h-[560px] ${
              s.imageFirst ? "order-1" : "order-1 lg:order-2"
            }`}
          >
            <Reveal className="absolute inset-0 h-full" delay={40}>
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <div
            className={`flex items-center bg-paper ${
              s.imageFirst ? "order-2 bg-offwhite" : "order-2 lg:order-1"
            }`}
          >
            <Reveal
              className={`w-full max-w-lg px-6 py-16 sm:px-10 md:px-14 lg:px-16 lg:py-24 ${
                s.imageFirst ? "lg:ml-auto" : ""
              }`}
              delay={120}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-[12px] tracking-[0.14em] text-pink">
                  {s.number}
                </span>
                <span className="h-px w-10 bg-pink/70" />
                <span className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
                  {s.eyebrow}
                </span>
              </div>

              <h2 className="text-[clamp(1.75rem,2.8vw,2.35rem)] leading-[1.15] font-semibold text-navy">
                {s.title}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                {s.copy}
              </p>
              <div className="mt-8">
                <Button asChild variant="primary">
                  <a href="#quote">Request a quote</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Portfolio */}
      <section id="portfolio" className="bg-offwhite py-20 md:py-28">
        <div className="container">
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-xl">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
                Selected work
              </p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.5rem)] font-semibold text-navy">
                Homes across the Piedmont Triad
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Button asChild variant="outline">
                <Link href="/portfolio">View full portfolio</Link>
              </Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 70}>
                <Link
                  href="/portfolio"
                  className="group relative block aspect-[4/5] overflow-hidden bg-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                >
                  <Image
                    src={p.src}
                    alt={`${p.name}, ${p.place} — home built by J&L Construction`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent opacity-90 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:translate-y-2 sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    <p className="text-[15px] font-semibold text-paper">
                      {p.name}
                    </p>
                    <p className="mt-1 text-[11px] tracking-wide text-paper/65 uppercase">
                      {p.place}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="bg-navy text-paper">
        <div className="container grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-12 md:py-20">
          <Reveal className="md:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Free consultation
            </p>
            <h2 className="mt-4 max-w-[18ch] text-[clamp(1.75rem,3vw,2.4rem)] leading-tight font-semibold">
              Tell us about the project. We&apos;ll follow up with next steps.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-paper/65">
              Residential or commercial — call or email and we&apos;ll respond
              personally.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end"
          >
            <Button asChild variant="pink" className="w-full sm:w-auto">
              <a href="tel:3364791600">(336) 479-1600</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full !border-paper/35 !text-paper hover:!border-paper hover:!bg-paper hover:!text-navy sm:w-auto"
            >
              <a href="mailto:info@jandlinc.com">Email us</a>
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
