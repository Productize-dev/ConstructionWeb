import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Residential", href: "/#residential" },
  { label: "Commercial", href: "/#commercial" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/#about" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-navy"
        >
          J&amp;L{" "}
          <span className="font-normal text-ink-soft">Construction</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-ink-soft transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="tel:3364791600"
            className="hidden text-[13px] font-medium text-ink-soft transition-colors hover:text-navy sm:block"
          >
            (336) 479-1600
          </a>
          <Button
            asChild
            variant="primary"
            className="!rounded-md !px-5 !py-2.5 !text-[12px] !normal-case !tracking-normal"
          >
            <a href="/#quote">Get a quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
