"use client";

import Link from "next/link";
import { businessInfo as business } from "@/content/globals";

function ClientPortalLayoutContent({ children }) {
  const { name, phone, email, address } = business;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">{name}</div>
        <nav className="space-x-4 text-gray-700">
          <Link href="/client-portal/analytics" className="hover:text-primary">
            Analytics
          </Link>
          <Link href="/client-portal/settings" className="hover:text-primary">
            Settings
          </Link>
          <Link href="/client-portal/profile" className="hover:text-primary">
            Profile
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-4 text-center text-sm text-gray-500">
        <div>
          Contact us: {phone} | {email}
        </div>
        <div>
          {address.street}, {address.city}, {address.state} {address.zip}
        </div>
      </footer>
    </div>
  );
}

export default function ClientPortalLayout({ children }) {
  return <ClientPortalLayoutContent>{children}</ClientPortalLayoutContent>;
}
