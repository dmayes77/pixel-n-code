import { logoImages } from "@/constants/images";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <BrandLogo
        image={logoImages.whtBg.src}
        alt={logoImages.whtBg.alt}
        size={400}
      />
    </div>
  );
}
