"use client";

import { useEffect, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

type Track = "residential" | "commercial";

const residentialKinds = [
  "Custom home",
  "Residential community",
  "Renovation or addition",
] as const;

const commercialKinds = [
  "Medical or dental",
  "Retail",
  "Office",
  "Other commercial",
] as const;

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-navy";

export function ProjectInquiry({ initialTrack = "residential" }: { initialTrack?: Track }) {
  const [track, setTrack] = useState<Track>(initialTrack);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    function applyHash() {
      const hash = window.location.hash.replace("#", "");
      if (hash !== "residential" && hash !== "commercial") return;
      setTrack(hash);
      document.getElementById("questionnaire")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();

    const lines = [
      `Project type: ${track === "residential" ? "Residential" : "Commercial"}`,
      `Name: ${value("name")}`,
      track === "commercial" ? `Company: ${value("company")}` : null,
      `Email: ${value("email")}`,
      `Phone: ${value("phone")}`,
      `Location: ${value("location")}`,
      `Scope: ${value("kind")}`,
      track === "residential" ? `Property: ${value("property")}` : `Approx. size: ${value("size")}`,
      `Timing: ${value("timing")}`,
      "",
      value("details"),
    ].filter((line) => line !== null);

    const subject = `Project inquiry — ${track === "residential" ? "Residential" : "Commercial"}`;
    window.location.href = `mailto:info@jandlinc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <form
      id="questionnaire"
      onSubmit={onSubmit}
      className="scroll-mt-28 rounded-xl border border-line bg-paper p-6 sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-pink uppercase">
            Questionnaire
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-navy">
            Tell us about the project
          </h2>
        </div>
        <div className="grid grid-cols-2 rounded-md border border-line p-1">
          {(
            [
              ["residential", "Residential"],
              ["commercial", "Commercial"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setTrack(value)}
              className={cn(
                "rounded px-3 py-2 text-[12px] font-medium transition-colors",
                track === value
                  ? "bg-navy text-paper"
                  : "text-ink-soft hover:text-navy"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
        {track === "residential"
          ? "Custom homes, communities, and improvements to a home you already own."
          : "Medical, retail, office, and other commercial builds."}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block text-[13px] font-medium text-navy">
          Name
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        {track === "commercial" ? (
          <label className="block text-[13px] font-medium text-navy">
            Company
            <input name="company" required autoComplete="organization" className={fieldClass} />
          </label>
        ) : (
          <label className="block text-[13px] font-medium text-navy">
            Phone
            <input name="phone" required type="tel" autoComplete="tel" className={fieldClass} />
          </label>
        )}
        <label className="block text-[13px] font-medium text-navy">
          Email
          <input name="email" required type="email" autoComplete="email" className={fieldClass} />
        </label>
        {track === "commercial" ? (
          <label className="block text-[13px] font-medium text-navy">
            Phone
            <input name="phone" required type="tel" autoComplete="tel" className={fieldClass} />
          </label>
        ) : (
          <label className="block text-[13px] font-medium text-navy">
            City or site address
            <input name="location" required className={fieldClass} />
          </label>
        )}
        {track === "commercial" && (
          <label className="block text-[13px] font-medium text-navy sm:col-span-2">
            City or site address
            <input name="location" required className={fieldClass} />
          </label>
        )}
        <label className="block text-[13px] font-medium text-navy">
          What are you building?
          <select key={track} name="kind" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {(track === "residential" ? residentialKinds : commercialKinds).map((kind) => (
              <option key={kind}>{kind}</option>
            ))}
          </select>
        </label>
        {track === "residential" ? (
          <label className="block text-[13px] font-medium text-navy">
            Property
            <select name="property" required className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>I own the lot or home</option>
              <option>I am still looking for land</option>
              <option>This is a community or multi-home site</option>
            </select>
          </label>
        ) : (
          <label className="block text-[13px] font-medium text-navy">
            Approximate size
            <input
              name="size"
              placeholder="Square footage, or number of suites"
              className={fieldClass}
            />
          </label>
        )}
        <label className="block text-[13px] font-medium text-navy sm:col-span-2">
          When do you want to start?
          <select name="timing" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>As soon as possible</option>
            <option>Within 3 months</option>
            <option>Within 6–12 months</option>
            <option>I am still exploring</option>
          </select>
        </label>
        <label className="block text-[13px] font-medium text-navy sm:col-span-2">
          Project notes
          <textarea
            name="details"
            required
            rows={5}
            placeholder={
              track === "residential"
                ? "Home size, style, must-haves, and a budget range if you have one."
                : "Use of the space, timeline constraints, and a budget range if you have one."
            }
            className={fieldClass}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[12px] leading-relaxed text-ink-soft">
          Sending opens your email with these details addressed to J&amp;L. We review it, then call.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-pink px-6 py-3 text-[13px] font-medium text-paper transition-colors hover:bg-pink-deep"
        >
          Send questionnaire
        </button>
      </div>
      {sent && (
        <p className="mt-4 text-sm text-navy">
          If your email app did not open, write us at info@jandlinc.com or call (336) 479-1600.
        </p>
      )}
    </form>
  );
}
