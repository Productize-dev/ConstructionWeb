import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { PageIntro } from "@/components/site/page-intro";
import { ProjectInquiry } from "@/components/site/project-inquiry";

export const metadata: Metadata = {
  title: "Contact | J&L Construction",
  description:
    "Contact J&L Construction in Winston-Salem, North Carolina. Call (336) 479-1600 or send a residential or commercial project questionnaire.",
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <PageIntro
        eyebrow="Contact"
        title="Call the office, or send the project in writing."
        lede="J&L Construction is at 3067 Waughtown Street in Winston-Salem. Use the phone if you want to talk now. Use the questionnaire if you want us to read the scope before we call you back."
      />

      <section className="border-b border-line bg-offwhite">
        <div className="container grid grid-cols-1 gap-10 py-14 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-pink uppercase">
              Visit
            </p>
            <p className="mt-3 text-navy">
              3067 Waughtown St
              <br />
              Winston-Salem, NC 27107
            </p>
            <a
              href="https://maps.google.com/?q=3067+Waughtown+St+Winston-Salem+NC+27107"
              className="mt-3 inline-block text-sm font-medium text-navy hover:text-pink"
            >
              Open in maps
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-pink uppercase">
              Call
            </p>
            <a
              href="tel:3364791600"
              className="mt-3 block text-2xl font-semibold text-navy hover:text-pink"
            >
              (336) 479-1600
            </a>
            <p className="mt-2 text-sm text-ink-soft">
              Residential and commercial inquiries go to the same office.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-pink uppercase">
              Email
            </p>
            <a
              href="mailto:info@jandlinc.com"
              className="mt-3 block text-navy hover:text-pink"
            >
              info@jandlinc.com
            </a>
            <p className="mt-2 text-sm text-ink-soft">
              The form below opens that address with your answers filled in.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-offwhite pb-20">
        <div className="container">
          <ProjectInquiry />
        </div>
      </section>

      <Footer />
    </main>
  );
}
