"use client";
import { useState } from "react";
import usePWAInstall from "./usePWAInstall";

export default function InstallButton({
  className = "",
  label = "Install Our App",
  variant = "primary",
}) {
  const { canInstall, canInstallIOS, installed, promptInstall, platform } =
    usePWAInstall();
  const [showTips, setShowTips] = useState(false);

  if (installed) return null;

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary",
    outline:
      "border border-primary text-primary hover:bg-primary/5 focus-visible:outline-primary",
  };
  const fallback =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-blue-600 text-blue-600 hover:bg-blue-50";

  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm shadow-sm transition";

  // Android/desktop path (BIP available)
  if (canInstall) {
    return (
      <button
        onClick={async () => {
          await promptInstall();
        }}
        className={[base, variants[variant] ?? "", fallback, className].join(
          " "
        )}
        aria-label={label}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 3v10m0 0l-3.5-3.5M12 13l3.5-3.5M6 17h12v4H6z"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span>{label}</span>
      </button>
    );
  }

  // iOS Safari fallback (no BIP)
  if (canInstallIOS) {
    return (
      <div className="w-full">
        <button
          onClick={() => setShowTips((s) => !s)}
          className={[
            base,
            variants[variant] ?? "",
            fallback,
            className,
            "w-full justify-center",
          ].join(" ")}
          aria-expanded={showTips}
          aria-controls="ios-install-tips"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M12 3v10m0 0l-3.5-3.5M12 13l3.5-3.5M6 17h12v4H6z"
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span>{label}</span>
        </button>

        {showTips && (
          <div
            id="ios-install-tips"
            className="mt-3 rounded-lg border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700"
          >
            <p className="font-medium">Add to Home Screen on iPhone/iPad:</p>
            <ol className="mt-1 list-decimal pl-5 space-y-1">
              <li>
                Tap the <span aria-label="share">Share</span> button{" "}
                <span aria-hidden>▵</span> in Safari.
              </li>
              <li>
                Choose <strong>Add to Home Screen</strong>.
              </li>
              <li>
                Tap <strong>Add</strong> to install.
              </li>
            </ol>
          </div>
        )}
      </div>
    );
  }

  // Otherwise: not installable yet (no SW/manifest) → render nothing
  return null;
}
