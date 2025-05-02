import { logoImages } from "@/constants/images";
import BrandLogo from "@/components/ui/BrandLogo";
import HeroSection from "@/components/sections/HeroSection";
import * as pageContent from "./contactPageContent";

export default function ContactPage() {
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
