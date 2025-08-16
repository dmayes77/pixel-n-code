// components/ui/VideoPlaceholder.jsx
export default function VideoPlaceholder({
  title = "OrbisX Overview",
  subtitle = "A quick walkthrough of your setup & portal",
  poster = null, // e.g. "/images/orbisx-video-poster.jpg"
}) {
  return (
    <section id="video" className="mx-auto max-w-5xl">
      <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-slate-900">
        {/* Poster / gradient */}
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
        )}

        {/* Play button (non-functional placeholder) */}
        <div className="absolute inset-0 grid place-items-center">
          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 text-slate-900 shadow-lg backdrop-blur hover:bg-white"
            aria-label="Play video (coming soon)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-90 group-hover:opacity-100"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-sm font-semibold">{title}</span>
          </button>
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-xs text-white/80">
          {subtitle} • <span className="italic">video coming soon</span>
        </div>
      </div>

      {/* ⬇️ When ready, replace the block above with a real embed:
        <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-gray-200">
          <iframe
            src="https://player.vimeo.com/video/XXXXXX?h=YYYYYY"
            title="OrbisX Overview"
            allow="autoplay; fullscreen; picture-in-picture"
            className="h-full w-full"
          />
        </div>
      */}
    </section>
  );
}
