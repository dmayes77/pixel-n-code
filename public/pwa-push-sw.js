// public/pwa-push-sw.js

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data?.json() || {};
  } catch {}
  const title = data.title || "Notification";
  const body = data.body || "";
  const url = data.url || "/";
  const tag = data.tag || "generic";

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      tag,
      icon: "/icons/icon-192.png",
      badge: "/icons/favicon-32.png",
      data: { url },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((list) => {
        const existing = list.find((c) => c.url.includes(url)) || list[0];
        if (existing) return existing.focus();
        return clients.openWindow(url);
      })
  );
});
