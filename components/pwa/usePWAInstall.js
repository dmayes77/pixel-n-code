"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);
  const [installed, setInstalled] = useState(false);

  // platform detect (best-effort)
  const platform = useMemo(() => {
    if (typeof window === "undefined") return "unknown";
    const ua = navigator.userAgent || "";
    const isIOS = /iphone|ipad|ipod/i.test(ua);
    return isIOS ? "ios" : "other";
  }, []);

  useEffect(() => {
    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)")?.matches ||
      window.navigator.standalone === true;
    if (isStandalone) setInstalled(true);

    const mq = window.matchMedia?.("(display-mode: standalone)");
    const onModeChange = (e) => setInstalled(e.matches);
    mq?.addEventListener?.("change", onModeChange);

    const handleBIP = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };
    const handleInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
      setCanInstall(false);
      try {
        localStorage.setItem("pwa-installed", "1");
      } catch {}
    };

    window.addEventListener("beforeinstallprompt", handleBIP);
    window.addEventListener("appinstalled", handleInstalled);

    try {
      if (localStorage.getItem("pwa-installed") === "1") setInstalled(true);
    } catch {}

    return () => {
      mq?.removeEventListener?.("change", onModeChange);
      window.removeEventListener("beforeinstallprompt", handleBIP);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return { accepted: false };
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setCanInstall(false);
    return { accepted: outcome === "accepted" };
  }, [deferredPrompt]);

  // iOS fallback: show button if not installed but platform is iOS
  const canInstallIOS = !installed && platform === "ios";

  return { canInstall, canInstallIOS, installed, platform, promptInstall };
}
