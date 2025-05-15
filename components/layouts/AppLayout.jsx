// app/components/layouts/AppLayout.jsx

"use client";

import { usePathname } from "next/navigation";
import MainLayout from "@/components/layouts/MainLayout";
import ClientPortalLayout from "@/components/layouts/ClientPortalLayout";
import AdminLayout from "@/components/layouts/AdminLayout"; // <-- Import AdminLayout too

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const isClientPortal = pathname.startsWith("/client-portal");
  const isAdmin = pathname.startsWith("/admin"); // <-- Add Admin check here

  if (isClientPortal) {
    return <ClientPortalLayout>{children}</ClientPortalLayout>;
  }

  if (isAdmin) {
    return <AdminLayout>{children}</AdminLayout>; // <-- Handle Admin pages
  }

  return <MainLayout>{children}</MainLayout>; // <-- Default public site
}
