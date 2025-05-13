import HeroSection from "@/components/sections/HeroSection";
import CloudImage from "@/components/ui/CloudImage";
import { logo } from "@/content/globals";
import * as pageContent from "../../content/pages/services";

export const metadata = pageContent.metadata;

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
