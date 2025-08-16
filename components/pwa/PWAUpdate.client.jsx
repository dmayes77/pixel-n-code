"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function PWAUpdate() {
  useEffect(() => {
    // Fired by next-pwa's register.js when a new SW is waiting
    const onSWUpdated = (event) => {
      const registration = event.detail;
      toast("A new version is available.", {
        action: {
          label: "Reload",
          onClick: () =>
            registration?.waiting?.postMessage({ type: "SKIP_WAITING" }),
        },
        duration: 10000,
      });
    };

    // When the new SW takes control, refresh the page
    const onControllerChange = () => window.location.reload();

    window.addEventListener("swUpdated", onSWUpdated);
    navigator.serviceWorker?.addEventListener?.(
      "controllerchange",
      onControllerChange
    );

    return () => {
      window.removeEventListener("swUpdated", onSWUpdated);
      navigator.serviceWorker?.removeEventListener?.(
        "controllerchange",
        onControllerChange
      );
    };
  }, []);

  return null;
}
