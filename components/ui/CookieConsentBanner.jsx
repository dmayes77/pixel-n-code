"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary text-white p-2 text-sm z-50">
      <div className="max-w-5xl mx-auto flex flex-col tablet:flex-row items-center justify-between gap-4">
        <p className="text-center tablet:text-left mb-0">
          We use cookies to improve your experience, analyze traffic, and
          deliver personalized content.{" "}
          <Link
            href="/privacy-policy"
            className="underline text-white font-semibold hover:text-blue-300"
          >
            Learn more
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-4 py-2 rounded"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
