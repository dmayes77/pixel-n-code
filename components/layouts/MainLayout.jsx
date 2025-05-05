"use client";

import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";
import { businessInfo as business } from "@/content/globals";
import { navItems } from "@/content/navigation";
import { logoImages } from "@/content/images/images";
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
      <Footer content={{ navItems, business }} />
    </>
  );
}
