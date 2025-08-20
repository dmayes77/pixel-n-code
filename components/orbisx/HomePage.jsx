// components/orbisx/HomePage.jsx  (Client Component)
"use client";

import VideoPlaceholder from "@/components/ui/VideoPlaceholder";

const badgeClasses = {
  primary: "bg-primary text-primary-foreground",
  orange: "bg-orange-100 text-orange-700",
  violet: "bg-violet-100 text-violet-700",
  slate: "bg-slate-200 text-slate-700",
};

export default function HomePage({ features, steps, plans }) {
  return (
    <div className="bg-gray-50">
      {/* Capacity ribbon */}
      <div className="bg-primary/10 text-primary text-center text-sm py-2">
        Accepting <span className="font-semibold">5 setups per week</span> to
        maintain quality.
      </div>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            For OrbisX subscribers — detailers & tint shops
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            OrbisX, set up right — <span className="text-primary">in days</span>
            , not weeks
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            We implement OrbisX end-to-end and give you a clean portal for
            training, templates, and ongoing optimization—so you book more jobs
            with less admin.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#pricing"
              className="rounded-xl bg-primary px-5 py-3 text-white hover:bg-primary/90"
            >
              Choose your setup
            </a>
            <a
              href="#included"
              className="rounded-xl px-5 py-3 text-primary ring-1 ring-primary/20 hover:bg-primary/5"
            >
              See what’s included
            </a>
          </div>

          {/* Video */}
          <div className="mt-10">
            <VideoPlaceholder
              title="OrbisX Overview"
              subtitle="What you get, how we build it, and how the portal helps your team"
            />
          </div>
        </div>
      </section>

      {/* Included */}
      <section id="included" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          What’s included
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 tablet:grid-cols-2">
          {features.map(([t, d]) => (
            <div
              key={t}
              className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
            >
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                ✓
              </span>
              <div>
                <h3 className="font-medium">{t}</h3>
                <p className="text-slate-600">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Our Process</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 laptop:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-xl border bg-gray-50 p-5">
              <div className="text-xs font-semibold text-primary">
                Step {i + 1}
              </div>
              <h3 className="mt-1 font-medium">{t}</h3>
              <p className="mt-2 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            Services & Pricing for subscribers
          </h2>
          <p className="mt-2 text-slate-600">
            Four ways to launch fast and keep momentum.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 laptop:grid-cols-2">
            {plans.map((p) => (
              <div
                key={p.name}
                className="relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                {p.badge && (
                  <span
                    className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-medium ${
                      badgeClasses[p.badgeColor] || badgeClasses.slate
                    }`}
                  >
                    {p.badge}
                  </span>
                )}

                <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                <div className="mt-1 text-3xl font-bold">{p.price}</div>
                <p className="mt-2 text-slate-600">{p.tagline}</p>

                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm text-slate-500">
                  Ideal for: {p.idealFor}
                </p>

                {/* CTA + Turnaround at the bottom */}
                <div className="mt-auto pt-6">
                  <a
                    href={p.ctaHref}
                    className="inline-flex w-full justify-center rounded-xl bg-primary px-4 py-2 text-white hover:bg-primary/90"
                  >
                    {p.ctaLabel}
                  </a>
                  {p.turnaround && (
                    <p className="mt-3 text-xs text-slate-500">
                      Typical timeline:{" "}
                      <span className="font-medium">{p.turnaround}</span>.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Revisions: Quick Start (up to 2 rounds), Custom (up to 3 rounds)
            within 7 days of delivery. Larger changes may be quoted separately.
          </p>
        </div>
      </section>

      {/* CTA bar */}
      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-white">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to make OrbisX your unfair advantage?
          </h2>
          <p className="mt-2 text-white/90">
            We’ll map, build, connect, and train—so you can focus on booked
            jobs.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/orbisx/contact?service=Quick%20Start"
              className="rounded-xl bg-white px-5 py-3 text-primary hover:bg-white/90"
            >
              Choose Quick Start
            </a>
            <a
              href="/orbisx/contact?service=Custom%20Setup"
              className="rounded-xl ring-1 ring-white/30 px-5 py-3 text-white hover:bg-white/10"
            >
              Choose Custom
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
