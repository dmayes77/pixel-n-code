const VERSION = "v1";
const APP_CACHE = `app-cache-${VERSION}`;
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      self.skipWaiting();
      try {
        const cache = await caches.open(APP_CACHE);
        await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
      } catch (_) {}
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((k) =>
          k !== APP_CACHE ? caches.delete(k) : Promise.resolve()
        )
      );
      self.clients.claim();
    })()
  );
});

async function networkFirstNavigate(request, event) {
  try {
    const preload = event?.preloadResponse ? await event.preloadResponse : null;
    if (preload) return preload;
  } catch {}
  try {
    const fresh = await fetch(request);
    const cache = await caches.open(APP_CACHE);
    cache.put(request, fresh.clone()).catch(() => {});
    return fresh;
  } catch {
    const cache = await caches.open(APP_CACHE);
    const cached = await cache.match(request);
    return cached || cache.match(OFFLINE_URL);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(APP_CACHE);
  const cached = await cache.match(request);
  const fetching = fetch(request)
    .then((res) => {
      cache.put(request, res.clone()).catch(() => {});
      return res;
    })
    .catch(() => null);
  return cached || (await fetching) || new Response(null, { status: 504 });
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigate(request, event));
    return;
  }

  const dest = request.destination;
  if (["style", "script", "image", "font"].includes(dest)) {
    event.respondWith(staleWhileRevalidate(request));
  }
});
