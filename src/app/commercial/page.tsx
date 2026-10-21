import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { PageCta, PageIntro } from "@/components/site/page-intro";

export const metadata: Metadata = {
  title: "Commercial Construction | J&L Construction",
  description:
    "J&L Construction builds medical, retail, and other commercial spaces in North Carolina under an unlimited general contractor license.",
};

const types = [
  {
    title: "Medical and dental",
    body: "Operatories, reception, and the mechanical needs of a clinic. The building has to be ready for patients, not just for a certificate of occupancy.",
  },
  {
    title: "Retail",
    body: "A storefront that opens on the date the lease expects. We plan inspections and finishes around that date instead of discovering it at the end.",
  },
  {
    title: "Office",
    body: "Layout, finishes, and the quiet details — power, lighting, and how people actually move through the suite — decided before walls close.",
  },
  {
    title: "Other commercial",
    body: "If the use is different, the process is not. Scope, budget, and a schedule you can hold us to. Tell us the program and we will say if it fits.",
  },
];

const differences = [
  "Work often happens next to a business that is already operating, or against a lease commencement date.",
  "Mechanical, plumbing, and life-safety requirements are heavier than on a house. They are in the plan, not added later.",
  "Owners usually have a lender, a landlord, or both. Documents are prepared so those parties can review them.",
  "The same unlimited North Carolina general contractor license covers the residential communities and these commercial jobs.",
];

export default function CommercialPage() {
  return (
    <main>
      <Nav />
      <PageIntro
        eyebrow="Commercial construction"
        title="Commercial space, held to a schedule a business can use."
        lede="J&L builds medical offices, retail, and other commercial projects across the Piedmont Triad. The license is unlimited. The expectation is the same as our residential work: the scope is written down before construction spends the budget."
      />

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <Image
            src="/images/commercial-dental.jpg"
            alt="Commercial dental office built by J&L Construction"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-navy px-6 py-16 text-paper sm:px-12 lg:px-16">
          <div className="max-w-md">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Unlimited GC license
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              One contractor for the building your business has to open.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
              A commercial job is not a house with a bigger sign. Occupancy,
              inspections, and the day you need to open are part of the
              contract conversation, not a footnote.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:py-24">
          {types.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 70}>
              <h2 className="text-xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-offwhite">
        <div className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold text-navy">
              What changes from residential work.
            </h2>
          </div>
          <ul className="space-y-5 md:col-span-8">
            {differences.map((item) => (
              <li
                key={item}
                className="border-l-2 border-pink pl-4 text-[15px] leading-relaxed text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-navy">
              Start with the use of the space.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Tell us what the building has to do, where it is, and when it
              needs to open. If you already have drawings, send them with the
              commercial questionnaire. If you do not, the first meeting is
              where we decide what has to be drawn.
            </p>
            <p className="mt-4 text-sm text-ink-soft">
              Looking at houses instead?{" "}
              <Link
                href="/residential/construction"
                className="font-medium text-navy hover:text-pink"
              >
                Custom homes
              </Link>{" "}
              and{" "}
              <Link
                href="/residential/development"
                className="font-medium text-navy hover:text-pink"
              >
                community development
              </Link>{" "}
              are separate pages.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/kitchen.jpg"
              alt="Finished interior by J&L Construction"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <PageCta
        title="Have a commercial scope in mind?"
        body="Use the commercial questionnaire. Include the use, the size, and the date you need to open."
      />
      <Footer />
    </main>
  );
}
