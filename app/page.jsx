"use client";
import ParallaxSection from "@/components/sections/ParallaxSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TextImageSection from "@/components/sections/TextImageSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import BrandLogo from "@/components/ui/BrandLogo";
import * as pageContent from "../content/pages/home";
import { businessInfo as business, logo } from "@/content/globals";
import HeroSection from "@/components/sections/HeroSection";
import CloudImage from "@/components/ui/CloudImage";
import TechStackSection from "@/components/sections/TechStackSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-16">
        <TextImageSection content={pageContent.textImageSectionContent} />
        <ServicesOverview content={pageContent.servicesOverviewContent} />
        <TechStackSection content={pageContent.techStackContent} />
        <ParallaxSection content={pageContent.parallaxSectionContent} />
        <WhyChooseUsSection content={pageContent.whyChooseUsContent} />
        <ProcessSection content={pageContent.processContent} />
        <CTASection content={pageContent.ctaContent} />
      </div>
    </>
  );
}
