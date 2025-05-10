import { logo } from "@/content/globals";
import CloudImage from "@/components/ui/CloudImage";
import * as pageContent from "../../content/pages/services";
import HeroSection from "@/components/sections/HeroSection";

export default function ServicePage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <CloudImage
          publicId={logo.main.publicId}
          alt={logo.main.alt}
          ratio={4 / 1} // 3:1 aspect
          className="w-44 tablet:w-60"
        />
      </div>
    </>
  );
}
