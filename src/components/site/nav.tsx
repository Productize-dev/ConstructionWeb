"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Item = { label: string; href: string; note: string };

const menu: {
  label: string;
  href: string;
  items?: Item[];
}[] = [
  {
    label: "Residential",
    href: "/residential/development",
    items: [
      {
        label: "Development",
        href: "/residential/development",
        note: "Communities, lots, and infrastructure",
      },
      {
        label: "Custom homes",
        href: "/residential/construction",
        note: "Single-family construction",
      },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
    items: [
      {
        label: "Commercial construction",
        href: "/commercial",
        note: "Medical, retail, and office",
      },
      {
        label: "Start a commercial project",
        href: "/get-started#commercial",
        note: "Questionnaire",
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    items: [
      { label: "All projects", href: "/portfolio", note: "Residential, development, commercial" },
      { label: "1348 Maple", href: "/portfolio/1348-maple", note: "Luxury Homes Division" },
    ],
  },
  {
    label: "About",
    href: "/about",
    items: [
      { label: "The company", href: "/about", note: "Winston-Salem since 2014" },
      { label: "Contact", href: "/contact", note: "Phone, visit, and email" },
    ],
  },
];

function isCurrent(pathname: string, href: string) {
  const path = href.split("#")[0];
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container flex items-center justify-between py-2.5 md:py-3">
        <Logo priority />

        <nav className="hidden items-center gap-1 lg:flex">
          {menu.map((entry) => {
            const active =
              isCurrent(pathname, entry.href) ||
              entry.items?.some((item) => {
                const path = item.href.split("#")[0];
                if (path === "/get-started") return false;
                return isCurrent(pathname, item.href);
              });

            if (!entry.items) {
              return (
                <Link
                  key={entry.label}
                  href={entry.href}
                  className={cn(
                    "px-3 py-2 text-[13px] font-medium transition-colors",
                    active ? "text-navy" : "text-ink-soft hover:text-navy"
                  )}
                >
                  {entry.label}
                </Link>
              );
            }

            return (
              <div
                key={entry.label}
                className="relative"
                onMouseEnter={() => setOpen(entry.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  aria-expanded={open === entry.label}
                  onClick={() =>
                    setOpen((current) =>
                      current === entry.label ? null : entry.label
                    )
                  }
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors",
                    active || open === entry.label
                      ? "text-navy"
                      : "text-ink-soft hover:text-navy"
                  )}
                >
                  {entry.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform",
                      open === entry.label && "rotate-180"
                    )}
                  />
                </button>
                {open === entry.label && (
                  <div className="absolute top-full left-0 w-72 pt-2">
                    <div className="border border-line bg-paper p-2 shadow-sm">
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-3 transition-colors hover:bg-offwhite"
                        >
                          <span className="block text-[13px] font-medium text-navy">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-[12px] text-ink-soft">
                            {item.note}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:3364791600"
            className="hidden text-[13px] font-medium text-ink-soft transition-colors hover:text-navy xl:block"
          >
            (336) 479-1600
          </a>
          <Button
            asChild
            variant="primary"
            className="!rounded-md !px-5 !py-2.5 !text-[12px] !normal-case !tracking-normal"
          >
            <Link href="/get-started">Get started</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-navy lg:hidden"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            onClick={() => setMobile((value) => !value)}
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
          <div className="container flex flex-col py-4">
            {menu.map((entry) => (
              <div key={entry.label} className="border-b border-line">
                {entry.items ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-navy"
                      aria-expanded={mobileSection === entry.label}
                      onClick={() =>
                        setMobileSection((current) =>
                          current === entry.label ? null : entry.label
                        )
                      }
                    >
                      {entry.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform",
                          mobileSection === entry.label && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileSection === entry.label && (
                      <div className="pb-4 pl-1">
                        {entry.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2.5"
                          >
                            <span className="block text-sm font-medium text-navy">
                              {item.label}
                            </span>
                            <span className="text-[12px] text-ink-soft">
                              {item.note}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={entry.href}
                    className="block py-4 text-base font-medium text-navy"
                  >
                    {entry.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="tel:3364791600"
              className="py-4 text-sm font-medium text-ink-soft"
            >
              (336) 479-1600
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
