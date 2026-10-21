import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { ProjectInquiry } from "@/components/site/project-inquiry";

export const metadata: Metadata = {
  title: "Get Started | J&L Construction",
  description:
    "How a residential or commercial project starts with J&L Construction — from the first questionnaire through contract and construction.",
};

const steps = [
  {
    number: "01",
    title: "Contact us.",
    body: "Before we meet, we need a clear first picture of the work. Use the questionnaire and mark it residential or commercial. We read it before anyone calls you back.",
  },
  {
    number: "02",
    title: "We'll reach out.",
    body: "Every project starts with a conversation. After the questionnaire, we call to talk through the goal, what you expect from a general contractor, and a realistic budget. Bring questions. We will have some of our own. Both sides should know if this is the right fit.",
  },
  {
    number: "03",
    title: "Let's meet.",
    body: "We set a meeting to go further. Bring drawings, surveys, photos, a site address, or a list of the spaces you need. We use that time to understand the property and answer the building questions that decide the next step.",
  },
  {
    number: "04",
    title: "Planning begins.",
    body: "When the fit is right, we prepare a feasibility review: scope, a first plan if you need one, and a general budget. Residential work looks at the lot, the home, and the level of finish. Commercial work looks at the use, the size, and how the space has to operate. If we both agree to continue, we develop the full set — plans, specifications, structural and mechanical details, and finish selections — before construction starts. At that point we ask for a financial commitment, because the team is putting real time into the project.",
  },
  {
    number: "05",
    title: "The project starts.",
    body: "Once you approve the design and the scope, we prepare the contract. Plans, specifications, and the agreement are signed. If a lender is involved, they receive copies. Then the work is officially underway.",
  },
];

export default function GetStartedPage() {
  return (
    <main>
      <Nav />

      <section className="border-b border-line bg-paper">
        <div className="container grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
              Get started
            </p>
            <h1 className="mt-4 max-w-xl text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] font-semibold text-navy">
              A clear path before construction begins.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              The same sequence applies to a custom home, a residential
              community, or a commercial build. You always know what happens
              next.
            </p>
          </Reveal>
          <Reveal delay={80} className="md:col-span-5 md:pt-10">
            <div className="border border-line bg-offwhite p-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
                On this page
              </p>
              <ol className="mt-4 space-y-2 text-sm text-navy">
                {steps.map((step) => (
                  <li key={step.number}>
                    <a href={`#step-${step.number}`} className="hover:text-pink">
                      <span className="mr-3 text-pink">{step.number}</span>
                      {step.title.replace(".", "")}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#questionnaire" className="hover:text-pink">
                    <span className="mr-3 text-pink">06</span>
                    Questionnaire
                  </a>
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container divide-y divide-line">
          {steps.map((step, index) => (
            <Reveal key={step.number}>
              <article
                id={`step-${step.number}`}
                className="grid scroll-mt-28 grid-cols-1 gap-4 py-12 md:grid-cols-12 md:gap-10 md:py-16"
              >
                <p className="text-sm font-semibold tracking-[0.16em] text-pink md:col-span-3">
                  Step {index + 1}
                </p>
                <div className="md:col-span-8">
                  <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight font-semibold text-navy">
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-offwhite">
        <div className="container grid grid-cols-1 gap-4 py-14 md:grid-cols-2 md:py-16">
          <a
            href="#residential"
            className="block border border-line bg-paper p-7 transition-colors hover:border-navy"
          >
            <p className="text-[11px] font-semibold tracking-[0.16em] text-pink uppercase">
              Residential
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-navy">
              Building a home or a community?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Custom homes, neighborhood development, and improvements to a
              property you already own.
            </p>
          </a>
          <a
            href="#commercial"
            className="block border border-line bg-paper p-7 transition-colors hover:border-navy"
          >
            <p className="text-[11px] font-semibold tracking-[0.16em] text-pink uppercase">
              Commercial
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-navy">
              Building a commercial space?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Medical, retail, office, and other commercial work under an
              unlimited North Carolina general contractor license.
            </p>
          </a>
        </div>
      </section>

      <section className="bg-offwhite pb-20">
        <div className="container">
          <ProjectInquiry />
          <p className="mt-6 text-sm text-ink-soft">
            Prefer to talk first? Call{" "}
            <a href="tel:3364791600" className="font-medium text-navy hover:text-pink">
              (336) 479-1600
            </a>{" "}
            or see{" "}
            <Link href="/portfolio" className="font-medium text-navy hover:text-pink">
              recent work
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
