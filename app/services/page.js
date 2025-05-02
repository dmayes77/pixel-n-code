import { logoImages } from "@/constants/images";
import BrandLogo from "@/components/ui/BrandLogo";
import * as pageContent from "./servicesPageContent";
import HeroSection from "@/components/sections/HeroSection";

export default function ServicePage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <BrandLogo
          image={logoImages.main.src}
          alt={logoImages.main.alt}
          ratio={4 / 3}
          width="w-[450px]"
        />
      </div>
    </>
  );
}
