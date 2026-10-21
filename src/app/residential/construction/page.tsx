import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { PageCta, PageIntro } from "@/components/site/page-intro";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Custom Homes | J&L Construction",
  description:
    "J&L Construction builds custom and single-family homes across Winston-Salem, Clemmons, and the North Carolina Piedmont Triad.",
};

const included = [
  {
    title: "Plans before production",
    body: "Selections, structure, and the budget are settled before framing starts. Changes still happen. They happen as decisions, not as surprises on the invoice.",
  },
  {
    title: "A schedule you can see",
    body: "You know what is happening this month. Inspections, trades, and finish work are sequenced so the house is not sitting half-done between subcontractors.",
  },
  {
    title: "Finish that matches the approval",
    body: "The home you walk at the end is the one you approved: contemporary or traditional, on the budget that was agreed.",
  },
  {
    title: "A real walkthrough",
    body: "We close with a punch list and a walkthrough, not a set of keys and a voicemail. Warranty items have a person to call.",
  },
];

const homes = projects.filter((project) => project.category === "Residential").slice(0, 4);

export default function ResidentialConstructionPage() {
  return (
    <main>
      <Nav />
      <PageIntro
        eyebrow="Residential · Custom homes"
        title="Single-family homes, built to the plan and the budget."
        lede="J&L builds custom and production homes across Winston-Salem, Clemmons, and the rest of the Piedmont Triad. More than 100 homes are already standing. The standard is the same on the next one: scope first, then construction."
      />

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <Image
            src="/images/maple/01.jpg"
            alt="1348 Maple, a luxury home by J&L Construction"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-offwhite px-6 py-16 sm:px-12 lg:px-16">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              What you are hiring
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy">
              A general contractor who stays on the job.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              We are not a plan service that hands you to someone else at
              groundbreaking. From the first meeting through move-in, one
              company is accountable for the schedule, the trades, and the
              cost.
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              If the project is a community rather than one house, that work
              lives under{" "}
              <Link
                href="/residential/development"
                className="font-medium text-navy hover:text-pink"
              >
                residential development
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-24">
          {included.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 60}>
              <p className="text-[12px] font-semibold tracking-[0.14em] text-pink">
                0{index + 1}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-navy">
                {item.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-offwhite py-16 md:py-20">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold text-navy">Recent homes</h2>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-navy hover:text-pink"
            >
              Full portfolio
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {homes.map((home) => (
              <Link
                key={home.src}
                href={home.href ?? "/portfolio"}
                className="group relative aspect-[4/5] overflow-hidden bg-navy"
              >
                <Image
                  src={home.src}
                  alt={`${home.name}, ${home.place}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 to-transparent p-4">
                  <p className="text-sm font-medium text-paper">{home.name}</p>
                  <p className="text-[11px] tracking-wide text-paper/70 uppercase">
                    {home.place}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to build a home?"
        body="Send the residential questionnaire with the lot, the size, and a budget range if you have one. We will call to talk through whether we should meet."
      />
      <Footer />
    </main>
  );
}
