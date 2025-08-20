// components/ui/TurnstileWidget.client.jsx
"use client";

import { useEffect, useRef } from "react";

export default function TurnstileWidget({ onToken }) {
  const el = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return; // will render a placeholder
    const render = () => {
      if (!window.turnstile || !el.current) return;
      window.turnstile.render(el.current, {
        sitekey: siteKey,
        theme: "light",
        callback: (t) => onToken?.(t),
        "expired-callback": () => onToken?.(""),
        "error-callback": () => onToken?.(""),
      });
    };
    const src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (window.turnstile) render();
      existing.addEventListener("load", render, { once: true });
    } else {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.addEventListener("load", render, { once: true });
      document.body.appendChild(s);
    }
  }, [siteKey, onToken]);

  if (!siteKey) {
    return (
      <div className="rounded-lg border border-slate-200 p-3 text-sm text-slate-500">
        Captcha placeholder — set <code>NEXT_PUBLIC_TURNSTILE_SITE_KEY</code> to
        enable.
      </div>
    );
  }
  return <div ref={el} />;
}
