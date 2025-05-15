"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard Home", href: "/admin" },
    { label: "Manage Leads", href: "/admin/leads" },
    { label: "Pricing", href: "/admin/pricing" },
    { label: "Proposals", href: "/admin/proposals" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar (fixed full height, no scrolling) */}
      <aside className="w-64 flex-shrink-0 bg-primary text-primary-foreground flex flex-col p-6">
        <div className="flex flex-col h-full">
          <div>
            <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:underline ${
                    pathname === item.href ? "font-bold underline" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer fixed at bottom of sidebar */}
          <div className="mt-auto text-xs text-primary-foreground/70">
            &copy; {new Date().getFullYear()} Code Maze
          </div>
        </div>
      </aside>

      {/* Main Content (scrollable independently) */}
      <main className="flex-1 overflow-y-auto p-10 bg-gray-50">{children}</main>
    </div>
  );
}
