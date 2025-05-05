import { logo } from "@/content/globals";
import BrandLogo from "@/components/ui/BrandLogo";
import HeroSection from "@/components/sections/HeroSection";
import * as pageContent from "../../content/pages/contact";

export default function ContactPage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <BrandLogo
          image={logo.publicId.shortFormat}
          alt={logo.alt}
          ratio={4 / 3}
          width="w-[450px]"
        />
      </div>
    </>
  );
}
