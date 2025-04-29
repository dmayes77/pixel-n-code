"use client";

import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";
import { heroContent, navItems, businessInfo } from "@/constants/content";
import { logoImages } from "@/constants/images";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BusinessInfoProvider } from "@/context/BusinessInfoContext";

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const key = pathname === "/" ? "home" : pathname.slice(1);
  const content = heroContent[key];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <BusinessInfoProvider>
      <Navbar logoImages={logoImages} navItems={navItems} />
      <HeroSection content={content} />
      <main>{children}</main>
      <Footer content={{ navItems, businessInfo }} />
    </BusinessInfoProvider>
  );
}
