"use client";

import { useEffect, useState } from "react";
import { getClientMessaging } from "@/lib/firebase/client";
import { toast } from "sonner";

export default function EnablePushButton({
  className = "",
  label = "Enable Notifications",
}) {
  const [supported, setSupported] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

  useEffect(() => {
    (async () => {
      const messaging = await getClientMessaging();
      setSupported(!!messaging);
      try {
        if (localStorage.getItem("fcm-token")) setEnabled(true);
      } catch {}
    })();
  }, []);

  if (!supported) return null;

  const handleEnable = async () => {
    try {
      setLoading(true);
      const perm = await Notification.requestPermission();
      if (perm !== "granted") {
        toast.error("Notifications blocked");
        return;
      }
      const messaging = await getClientMessaging();
      const { getToken } = await import("firebase/messaging");
      const token = await getToken(messaging, { vapidKey });
      if (!token) throw new Error("No token");
      try {
        localStorage.setItem("fcm-token", token);
      } catch {}
      setEnabled(true);
      toast.success("Notifications enabled");
    } catch (e) {
      toast.error("Failed to enable notifications");
    } finally {
      setLoading(false);
    }
  };

  return enabled ? (
    <span className="text-xs text-slate-500">Notifications enabled</span>
  ) : (
    <button
      onClick={handleEnable}
      disabled={loading}
      className={[
        "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm shadow-sm transition",
        "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary",
        "disabled:opacity-60",
        className,
      ].join(" ")}
    >
      {loading ? "Enabling…" : label}
    </button>
  );
}
