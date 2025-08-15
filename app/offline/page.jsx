export const metadata = { title: "Offline" };

export default function OfflinePage() {
  return (
    <section className="py-16">
      <h1 className="text-2xl font-semibold">You’re offline</h1>
      <p className="mt-2 text-slate-600">
        Your connection dropped. You can still view cached pages and assets. Try
        again once you’re back online.
      </p>
    </section>
  );
}
