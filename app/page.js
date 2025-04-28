import { logoImages } from "@/constants/images";
import BrandLogo from "@/components/ui/BrandLogo";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ServicesSection />
      <BrandLogo
        image={logoImages.main.src}
        alt={logoImages.main.alt}
        ratio={4 / 3}
        width="w-100"
      />
    </div>
  );
}
