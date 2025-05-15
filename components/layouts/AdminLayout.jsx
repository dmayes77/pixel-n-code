// /app/admin/layout.jsx

import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col space-y-6 p-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/admin" className="hover:underline">
            Dashboard Home
          </Link>
          <Link href="/admin/leads" className="hover:underline">
            Manage Leads
          </Link>
          {/* Add more links later: Pricing, Proposals, Settings */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">{children}</main>
    </div>
  );
}
