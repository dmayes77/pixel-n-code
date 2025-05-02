"use client";

import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";
import { navItems, businessInfo } from "@/content/globals";
import { logoImages } from "@/constants/images";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MainLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer content={{ navItems, businessInfo }} />
    </>
  );
}
