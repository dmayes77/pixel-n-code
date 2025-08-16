// components/layout/OrbisXLayout.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import CloudImage from "@/components/ui/CloudImage";
import { logo } from "@/content/globals";

const NAV = [
  { href: "/orbisx", label: "Dashboard" },
  { href: "/orbisx/playbooks", label: "Playbooks" },
  { href: "/orbisx/templates", label: "Templates" },
  { href: "/orbisx/training", label: "Training" },
  { href: "/orbisx/support", label: "Support" }, // ← was Account
];

export default function OrbisXLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <Link href="/orbisx" className="flex items-center gap-3 ">
              <CloudImage
                publicId={logo.main.publicId}
                alt={logo.main.alt}
                ratio={4 / 1}
                className="w-40"
              />
              <span className="hidden tablet:inline text-sm font-medium text-slate-600">
                OrbisX Subscriber Portal
              </span>
            </Link>

            <nav className="hidden laptop:flex items-center gap-5">
              {NAV.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/orbisx" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-lg px-3 py-2 text-sm",
                      active
                        ? "bg-primary text-white"
                        : "text-slate-700 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
              title="Back to main site"
            >
              ← Back to site
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-7xl">{children}</main>

        <footer className="border-t bg-white/60">
          <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Code Maze • OrbisX Subscriber Portal
          </div>
        </footer>
      </div>
    </>
  );
}
