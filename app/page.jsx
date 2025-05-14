import ProcessSection from "@/components/sections/pages/home/ProcessSection";
import ServicesOverview from "@/components/sections/pages/home/ServicesOverview";
import TechStackSection from "@/components/sections/pages/home/TechStackSection";
import WhyChooseUsSection from "@/components/sections/pages/home/WhyChooseUsSection";
import CTASection from "@/components/sections/shared/CTASection";
import HeroSection from "@/components/sections/shared/HeroSection";
import ParallaxSection from "@/components/sections/shared/ParallaxSection";
import TextImageSection from "@/components/sections/shared/TextImageSection";
import * as pageContent from "@/content/pages/home";

export default function HomePage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <div className="flex flex-col items-center justify-center min-h-screen">
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
