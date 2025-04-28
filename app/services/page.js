import { logoImages } from "@/constants/images";
import BrandLogo from "@/components/ui/BrandLogo";

export default function ServicePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <BrandLogo
        image={logoImages.main.src}
        alt={logoImages.main.alt}
        ratio={4 / 3}
        width="w-[450px]"
      />
    </div>
  );
}
