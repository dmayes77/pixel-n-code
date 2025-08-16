// app/offline/page.jsx
export const dynamic = "force-static"; // ensure it's pre-rendered & precached
export const metadata = { title: "Offline — Code Maze" };

export default function OfflinePage() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-8 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-2xl font-semibold">You’re offline</h1>
        <p className="text-slate-600">
          It looks like you’re not connected. You can keep browsing cached pages
          and come back when you’re online.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-primary text-white hover:bg-primary/90"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
