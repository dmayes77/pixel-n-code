"use client";
import ParallaxSection from "@/components/sections/ParallaxSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TextImageSection from "@/components/sections/TextImageSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import BrandLogo from "@/components/ui/BrandLogo";
import * as pageContent from "./homePageContent";
import { businessInfo as business } from "@/content/globals";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  const { logo } = business;
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-16">
        <TextImageSection content={pageContent.textImageSectionContent} />
        <ServicesOverview content={pageContent.servicesOverviewContent} />
        <ParallaxSection content={pageContent.parallaxSectionContent} />
        <WhyChooseUsSection content={pageContent.whyChooseUsContent} />
        <ProcessSection content={pageContent.processContent} />
        <BrandLogo
          image={logo.publicId.shortFormat}
          alt={logo.alt}
          ratio={4 / 3}
          width="w-100"
        />
      </div>
    </>
  );
}
