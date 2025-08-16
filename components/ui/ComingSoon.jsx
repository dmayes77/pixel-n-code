// components/ui/ComingSoon.jsx
export default function ComingSoon({
  title = "Coming soon",
  description = "We’re putting the final touches on this section.",
  ctaHref = "/contact?service=OrbisX%20Support",
  ctaLabel = "Get updates",
}) {
  return (
    <section className="grid place-items-center min-h-[50vh]">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary text-xl">
          🚧
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 text-slate-600">{description}</p>
        <div className="mt-6">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-white hover:bg-primary/90"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
