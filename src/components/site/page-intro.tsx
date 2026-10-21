import Link from "next/link";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.1rem,4vw,3.3rem)] leading-[1.08] font-semibold text-navy">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {lede}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function PageCta({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="bg-navy text-paper">
      <div className="container grid grid-cols-1 items-center gap-8 py-16 md:grid-cols-12 md:py-20">
        <Reveal className="md:col-span-7">
          <h2 className="max-w-xl text-[clamp(1.7rem,3vw,2.3rem)] leading-tight font-semibold">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-paper/65">
            {body}
          </p>
        </Reveal>
        <Reveal
          delay={80}
          className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end"
        >
          <Button asChild variant="pink" className="w-full sm:w-auto">
            <Link href="/get-started">Get started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full !border-paper/35 !text-paper hover:!border-paper hover:!bg-paper hover:!text-navy sm:w-auto"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
