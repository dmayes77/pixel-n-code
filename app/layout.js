"use client";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";
import { heroContent, navItems } from "@/constants/content";
import { logoImages } from "@/constants/images";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  // strip leading slash or default to “home”
  const key = pathname === "/" ? "home" : pathname.slice(1);
  const content = heroContent[key];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-gray-50 antialiased w-100vw">
        <Navbar logoImages={logoImages} navItems={navItems} />
        <HeroSection content={content} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
