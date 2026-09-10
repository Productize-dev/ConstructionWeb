export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="container grid grid-cols-1 gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">
            J&amp;L{" "}
            <span className="font-normal text-paper/70">Construction</span>
          </div>
          <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-paper/60">
            Licensed general contractor serving the North Carolina Piedmont
            Triad since 2014.
          </p>
        </div>

        <div className="space-y-2 text-sm text-paper/80">
          <p className="mb-3 text-[11px] font-medium tracking-wide text-paper/45 uppercase">
            Visit
          </p>
          <p>3067 Waughtown St</p>
          <p>Winston-Salem, NC 27107</p>
          <a
            href="tel:3364791600"
            className="block pt-2 transition-colors hover:text-pink"
          >
            (336) 479-1600
          </a>
        </div>

        <div className="space-y-2 text-sm text-paper/80">
          <p className="mb-3 text-[11px] font-medium tracking-wide text-paper/45 uppercase">
            Follow
          </p>
          <a
            href="https://twitter.com/J_LConstruction"
            className="block transition-colors hover:text-pink"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/company/j-and-l-construction-llc"
            className="block transition-colors hover:text-pink"
          >
            LinkedIn
          </a>
          <a
            href="https://medium.com/@JandLConstruction"
            className="block transition-colors hover:text-pink"
          >
            Medium
          </a>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container flex flex-col justify-between gap-2 py-5 text-[11px] text-paper/45 sm:flex-row">
          <span>Copyright 2026 J&amp;L Construction</span>
          <span>
            Unlimited General Contractor License &middot; North Carolina
          </span>
        </div>
      </div>
    </footer>
  );
}
