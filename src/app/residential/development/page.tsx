import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { PageCta, PageIntro } from "@/components/site/page-intro";

export const metadata: Metadata = {
  title: "Residential Development | J&L Construction",
  description:
    "J&L Construction plans and builds residential communities across the North Carolina Piedmont Triad, including Hidden Woods Village.",
};

const work = [
  {
    title: "Site and infrastructure",
    body: "Roads, utilities, drainage, and the sequence of the site are planned before the first house is released. The community has to work as a whole, not as a row of unrelated lots.",
  },
  {
    title: "Lot and home planning",
    body: "We coordinate lot layout with the homes that will sit on them — setbacks, driveways, and how each house meets the street — so the neighborhood reads as one project.",
  },
  {
    title: "Construction through closeout",
    body: "The same crew standards used on a single custom home apply here: schedule, inspections, and a walkthrough before a buyer moves in.",
  },
];

const phases = [
  {
    step: "01",
    title: "Land and program",
    body: "We start with the property, the number of homes, and the price range the community has to hit.",
  },
  {
    step: "02",
    title: "Infrastructure",
    body: "Civil work, utilities, and access are sequenced so vertical construction is not waiting on the site.",
  },
  {
    step: "03",
    title: "Vertical construction",
    body: "Homes are released in a controlled order. Each one is built to the plans, not adjusted in the field without a decision.",
  },
  {
    step: "04",
    title: "Turnover",
    body: "Punch, walkthrough, and a clear handoff. The last house is held to the same standard as the first.",
  },
];

export default function ResidentialDevelopmentPage() {
  return (
    <main>
      <Nav />
      <PageIntro
        eyebrow="Residential · Development"
        title="Communities built as one project, not a stack of houses."
        lede="J&L plans and builds residential communities across the Piedmont Triad. Hidden Woods Village is the reference: infrastructure, lots, and homes delivered with the same communication we use on a single custom build."
      />

      <section className="bg-paper">
        <div className="container grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden bg-offwhite">
              <Image
                src="/images/hero-hidden-woods.jpg"
                alt="Hidden Woods Village site developed by J&L Construction"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Hidden Woods Village
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy">
              A Triad community, managed from the ground up.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Development work fails when the site and the houses are treated
              as separate jobs. We keep both under one general contractor so
              grading, utilities, and the homes stay on one schedule.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              That is the work behind communities like Hidden Woods: three- and
              four-bedroom homes, a defined start, and a builder who is on the
              site instead of coordinating from a distance.
            </p>
            <p className="mt-5">
              <Link
                href="/portfolio/hidden-woods"
                className="text-sm font-semibold text-navy hover:text-pink"
              >
                See 211, 223, 224, and 229 Timber Hill Court
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-offwhite">
        <div className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-3 md:py-20">
          {work.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-pink">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-navy">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="container py-16 md:py-24">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-semibold text-navy">
              How a community project moves.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase) => (
              <div key={phase.step} className="bg-paper p-6">
                <p className="text-[12px] font-semibold tracking-[0.14em] text-pink">
                  {phase.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            Building one house instead?{" "}
            <Link
              href="/residential/construction"
              className="font-medium text-navy hover:text-pink"
            >
              See custom home construction.
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[320px]">
            <Image
              src="/images/residential-1.jpg"
              alt="New construction home in a J&L residential community"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center bg-navy-deep px-8 py-16 text-paper md:px-14">
            <div className="max-w-md">
              <h2 className="text-3xl font-semibold">
                The house and the neighborhood are the same job.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">
                Buyers notice when the street, the drainage, and the house
                were built by people who were not talking to each other. We
                keep that conversation inside one company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Planning a residential community?"
        body="Tell us the site, the number of homes, and the timing. We will say plainly whether we are the right contractor."
      />
      <Footer />
    </main>
  );
}
