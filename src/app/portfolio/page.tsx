import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { PortfolioGallery } from "@/components/site/portfolio-gallery";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Portfolio | J&L Construction",
  description:
    "Selected residential, development, and commercial projects by J&L Construction across the North Carolina Piedmont Triad.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Nav />

      <section className="border-b border-line bg-paper">
        <div className="container py-16 md:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Portfolio
            </p>
            <h1 className="mt-4 max-w-2xl text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.1] font-semibold text-navy">
              Selected projects across the Piedmont Triad.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Custom homes, residential communities, and commercial builds —
              delivered with the same schedule discipline since 2014.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-offwhite py-14 md:py-20">
        <div className="container">
          <PortfolioGallery />
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="container grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-12 md:py-20">
          <Reveal className="md:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Start a project
            </p>
            <h2 className="mt-4 max-w-[18ch] text-[clamp(1.75rem,3vw,2.4rem)] leading-tight font-semibold">
              Tell us about the scope. We&apos;ll follow up with next steps.
            </h2>
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
              <a href="/#quote">Request a quote</a>
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
