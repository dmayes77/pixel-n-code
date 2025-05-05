import { logo } from "@/content/globals";
import BrandLogo from "@/components/ui/BrandLogo";
import * as pageContent from "../../content/pages/services";
import HeroSection from "@/components/sections/HeroSection";

export default function ServicePage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <BrandLogo
          image={logo.publicId.shortFormat}
          alt={logo.alt}
          className="w-[200px] h-[200px] m-0 p-0"
          ratio={4 / 3}
          width="w-[450px]"
        />
      </div>
    </>
  );
}
