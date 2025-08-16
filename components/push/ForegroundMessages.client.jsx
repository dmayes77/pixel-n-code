"use client";

import { useEffect } from "react";
import { getClientMessaging } from "@/lib/firebase/client";
import { toast } from "sonner";

export default function ForegroundMessages() {
  useEffect(() => {
    let unsub = null;
    (async () => {
      const messaging = await getClientMessaging();
      if (!messaging) return;
      const { onMessage } = await import("firebase/messaging");
      unsub = onMessage(messaging, (payload) => {
        const title = payload?.notification?.title ?? "Notification";
        const body = payload?.notification?.body ?? "";
        toast(title, { description: body });
      });
    })();
    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, []);
  return null;
}
