"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";
import TopBar from "@/components/ui/TopBar";
import { businessInfo as business } from "@/content/globals";
import { navItems } from "@/content/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MainLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer content={{ navItems, business }} />
    </>
  );
}
