import { logo } from "@/content/globals";
import HeroSection from "@/components/sections/HeroSection";
import * as pageContent from "@/content/pages/about";

export default function AboutPage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <BrandLogo
          image={logo.publicId.longFormat}
          alt={logo.alt}
          ratio={4 / 3}
          width="w-[450px]"
        />
      </div>
    </>
  );
}
