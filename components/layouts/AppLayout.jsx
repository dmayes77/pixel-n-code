"use client";

import { usePathname } from "next/navigation";
import MainLayout from "@/components/layouts/MainLayout";
import ClientPortalLayout from "@/components/layouts/ClientPortalLayout";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const isClientPortal = pathname.startsWith("/client-portal");

  return isClientPortal ? (
    <ClientPortalLayout>{children}</ClientPortalLayout>
  ) : (
    <MainLayout>{children}</MainLayout>
  );
}
