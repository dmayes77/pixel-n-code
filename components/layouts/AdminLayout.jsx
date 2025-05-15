"use client";

import SessionChecker from "@/components/admin/SessionChecker";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AdminLayoutUI({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Dashboard Home", href: "/admin" },
    { label: "Manage Leads", href: "/admin/leads" },
    { label: "Pricing", href: "/admin/pricing" },
    { label: "Proposals", href: "/admin/proposals" },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      toast.success("Logged out successfully.");
      setTimeout(() => {
        router.push("/login");
      }, 500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to log out.");
    }
  };
  

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="mt-6 text-left hover:underline text-sm text-primary-foreground/80"
              >
                Logout
              </button>
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-auto text-xs text-primary-foreground/70">
            &copy; {new Date().getFullYear()} Code Maze
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10 bg-gray-50">
        <SessionChecker />
        {children}
      </main>
    </div>
  );
}
