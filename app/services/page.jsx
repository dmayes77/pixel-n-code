import HeroSection from "@/components/sections/shared/HeroSection";
import IntroSection from "@/components/sections/shared/IntroSection";
import WhyChooseUs from "@/components/sections/pages/services/WhyChooseUs";
import ServicesGrid from "@/components/sections/pages/services/ServicesGrid";
import CTASection from "@/components/sections/shared/CTASection";
import * as pageContent from "@/content/pages/services";

export const metadata = pageContent.metadata;

export default function ServicePage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <IntroSection content={pageContent.introContent} />
      <WhyChooseUs content={pageContent.whyChooseUsContent} />
      <ServicesGrid content={pageContent.servicesSectionContent} />
      <CTASection content={pageContent.ctaContent} />
    </>
  );
}
