"use client";

import MainLayout from "@/components/layouts/MainLayout";
import ClientPortalLayout from "@/components/layouts/ClientPortalLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import ChatWidget from "@/components/ui/ChatWidget";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isClientPortal = pathname.startsWith("/client-portal");

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </head>
      <body className="bg-gray-50 antialiased w-full overflow-x-hidden">
        {isClientPortal ? (
          <ClientPortalLayout>{children}</ClientPortalLayout>
        ) : (
          <MainLayout>{children}</MainLayout>
        )}
        <ChatWidget />
      </body>
    </html>
  );
}
