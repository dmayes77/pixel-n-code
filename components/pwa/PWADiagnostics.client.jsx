"use client";

import { useEffect, useState } from "react";

export default function PWADiagnostics() {
  const [installed, setInstalled] = useState(false);
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia?.("(display-mode: standalone)");
    setInstalled(mq?.matches || window.navigator.standalone === true);
    const onChange = (e) => setInstalled(e.matches);
    mq?.addEventListener?.("change", onChange);

    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      mq?.removeEventListener?.("change", onChange);
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-3 right-3 rounded-md bg-black/70 text-white text-xs px-2 py-1">
      {installed ? "PWA: installed" : "PWA: not installed"} ·{" "}
      {online ? "online" : "offline"}
    </div>
  );
}
