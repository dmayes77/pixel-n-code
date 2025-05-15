import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6">
        <nav className="space-y-4">
          <Link href="/admin" className="block hover:underline">
            Dashboard Home
          </Link>
          <Link href="/admin/leads" className="block hover:underline">
            Manage Leads
          </Link>
          {/* Add more links later like /pricing /proposals */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">{children}</main>
    </div>
  );
}
