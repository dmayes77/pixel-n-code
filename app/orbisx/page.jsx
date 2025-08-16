// app/orbisx/page.jsx
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";

export const metadata = {
  title:
    "OrbisX for Detailers & Tint Shops | Subscriber Setup & Portal | Code Maze",
  description:
    "Done-for-you OrbisX implementation and subscriber portal: pipelines, 2-way SMS, booking, automations, websites, and training—purpose-built for detailers & tint shops.",
  alternates: { canonical: "/orbisx" },
  robots: { index: false, follow: false }, // private-ish but market-y
};

const features = [
  [
    "Lead → Job pipeline",
    "Stages that match your shop (inquiry, quote, deposit, booked, completed, review).",
  ],
  [
    "2-way SMS/MMS",
    "Quick replies, follow-ups, and review requests—templates included.",
  ],
  [
    "Online booking",
    "Embed on your site with smart routing and calendar rules.",
  ],
  ["Automations", "Reminders, deposits, no-show protections, upsell triggers."],
  [
    "Quotes & invoices",
    "Preset packages with add-ons for fast, consistent pricing.",
  ],
  [
    "Tracking",
    "UTM capture, pixels/GA4 events, and source reports you can trust.",
  ],
];

const steps = [
  ["Map", "Short discovery to map your services and current flow."],
  ["Build", "We configure pipelines, templates, booking, and automations."],
  ["Connect", "Website embeds, forms, pixels, and UTM tracking wired up."],
  ["Train", "Live handoff, playbooks, and a 30-day optimization window."],
];

const plans = [
  {
    name: "Base Setup",
    price: "$495",
    tagline: "Template-based build with light customizations",
    bullets: [
      "Template booking pages, workflows, and forms",
      "Minor branding tweaks (logo, colors, copy nits)",
      "Pipelines & 2-way SMS templates",
      "Online booking embed on your site",
      "Zoom walkthrough + up to 2 rounds of revisions",
    ],
    idealFor: "Shops wanting a professional, ready-to-use setup fast.",
    ctaHref: "/contact?service=OrbisX%20Base%20Setup",
    ctaLabel: "Choose Base",
  },
  {
    name: "Custom Setup",
    price: "$795",
    tagline: "Fully tailored build with advanced integrations",
    bullets: [
      "Custom HTML/CSS booking pages & forms",
      "Cloudinary image optimization",
      "Advanced automations & rules",
      "GA4/pixel events + UTM tracking wired",
      "Zoom walkthrough + up to 3 rounds of revisions",
    ],
    idealFor: "Teams wanting a highly branded, dialed-in experience.",
    ctaHref: "/contact?service=OrbisX%20Custom%20Setup",
    ctaLabel: "Choose Custom",
  },
];

export default function OrbisXLanding() {
  return (
    <div className="bg-gray-50">
      {/* Capacity ribbon */}
      <div className="bg-primary/10 text-primary text-center text-sm py-2">
        Accepting <span className="font-semibold">3 setups per week</span> to
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
              // poster="/images/orbisx-video-poster.jpg"
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

      {/* Pricing */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            Pricing for subscribers
          </h2>
          <p className="mt-2 text-slate-600">
            Straightforward plans designed to remove barriers and launch
            quickly.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 laptop:grid-cols-2">
            {plans.map((p, idx) => (
              <div
                key={p.name}
                className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                {idx === 0 && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Fastest launch
                  </span>
                )}
                {idx === 1 && (
                  <span className="absolute -top-3 left-6 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                    Most tailored
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

                <a
                  href={p.ctaHref}
                  className="mt-6 inline-flex w-full justify-center rounded-xl bg-primary px-4 py-2 text-white hover:bg-primary/90"
                >
                  {p.ctaLabel}
                </a>

                <p className="mt-3 text-xs text-slate-500">
                  Includes Zoom walkthrough. Typical timeline:{" "}
                  <span className="font-medium">5–7 business days</span>.
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Revisions: Base (up to 2 rounds), Custom (up to 3 rounds) within 7
            days of delivery. Larger changes may be quoted separately.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">
          How scheduling works
        </h2>
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
              href="/contact?service=OrbisX%20Base%20Setup"
              className="rounded-xl bg-white px-5 py-3 text-primary hover:bg-white/90"
            >
              Choose Base
            </a>
            <a
              href="/contact?service=OrbisX%20Custom%20Setup"
              className="rounded-xl ring-1 ring-white/30 px-5 py-3 text-white hover:bg-white/10"
            >
              Choose Custom
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "OrbisX Implementation (Base & Custom)",
            provider: { "@type": "Organization", name: "Code Maze Web Design" },
            areaServed: "United States",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "OrbisX Setups",
              itemListElement: plans.map((p) => ({
                "@type": "Offer",
                name: p.name,
                price: p.price.replace("$", ""),
                priceCurrency: "USD",
              })),
            },
          }),
        }}
      />
    </div>
  );
}
