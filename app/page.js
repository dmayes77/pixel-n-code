import ParallaxSection from "@/components/sections/ParallaxSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TextImageSection from "@/components/sections/TextImageSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import BrandLogo from "@/components/ui/BrandLogo";
import {
  parallaxSectionContent,
  processContent,
  servicesOverviewContent,
  textImageSectionContent,
  whyChooseUsContent,
} from "@/constants/content";
import { logoImages } from "@/constants/images";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-16">
      <TextImageSection content={textImageSectionContent.homePage} />
      <ServicesOverview content={servicesOverviewContent.homePage} />
      <ParallaxSection content={parallaxSectionContent.homePage} />
      <WhyChooseUsSection content={whyChooseUsContent.homePage} />
      <ProcessSection content={processContent.homePage}/>
      <BrandLogo
        image={logoImages.main.src}
        alt={logoImages.main.alt}
        ratio={4 / 3}
        width="w-100"
      />
    </div>
  );
}
