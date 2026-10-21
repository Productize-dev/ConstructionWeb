import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { PageCta, PageIntro } from "@/components/site/page-intro";

export const metadata: Metadata = {
  title: "About | J&L Construction",
  description:
    "J&L Construction is a licensed general contractor in Winston-Salem, North Carolina, building residential communities, custom homes, and commercial spaces since 2014.",
};

const facts = [
  { label: "Founded", value: "2014" },
  { label: "Based in", value: "Winston-Salem" },
  { label: "License", value: "Unlimited GC, North Carolina" },
  { label: "Combined experience", value: "50+ years" },
  { label: "Custom homes", value: "100+" },
  { label: "Work", value: "Residential and commercial" },
];

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <PageIntro
        eyebrow="About"
        title="A Winston-Salem general contractor for homes and commercial buildings."
        lede="J&L Construction has been building in the Piedmont Triad since 2014. The company holds an unlimited North Carolina general contractor license, which is why the same office can run a residential community and a commercial interior."
      />

      <section className="bg-navy-deep text-paper">
        <div className="container grid grid-cols-2 gap-8 py-14 md:grid-cols-3 md:py-16">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="text-[11px] tracking-[0.16em] text-paper/45 uppercase">
                {fact.label}
              </p>
              <p className="mt-2 text-lg font-semibold">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-5">
            <h2 className="text-3xl font-semibold text-navy">
              What we are responsible for.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft md:col-span-7">
            <p>
              A general contractor is the company that owns the schedule, the
              budget, and the trades. That is the role J&L takes. We are not a
              referral desk. If we agree to build it, we are the ones you call
              when something is late or unclear.
            </p>
            <p>
              Residential work covers custom homes and communities such as
              Hidden Woods Village. Commercial work covers medical, retail,
              and other occupancies that need a building ready for a business,
              not just a finished shell.
            </p>
            <p>
              The combined field experience behind the company is more than 50
              years. The company itself has been operating since 2014, from
              3067 Waughtown Street in Winston-Salem.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-offwhite">
        <div className="container grid grid-cols-1 gap-6 py-16 md:grid-cols-3 md:py-20">
          {[
            {
              href: "/residential/development",
              title: "Development",
              body: "Communities, infrastructure, and the homes that follow.",
            },
            {
              href: "/residential/construction",
              title: "Custom homes",
              body: "Single-family construction across the Triad.",
            },
            {
              href: "/commercial",
              title: "Commercial",
              body: "Medical, retail, and office construction.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border border-line bg-paper p-6 transition-colors hover:border-navy"
            >
              <h2 className="text-xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <PageCta
        title="See if the project fits."
        body="The questionnaire is the fastest way to start. If you would rather talk first, call the office."
      />
      <Footer />
    </main>
  );
}
