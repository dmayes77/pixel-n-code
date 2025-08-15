import HeroSection from "@/components/sections/shared/HeroSection";
import TextImageSection from "@/components/sections/shared/TextImageSection";
import CloudImage from "@/components/ui/CloudImage";
import NavLink from "@/components/ui/NavLink";
import { logo } from "@/content/globals";
import * as pageContent from "@/content/pages/pricing";

export const metadata = pageContent.metadata;

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection content={pageContent.heroContent} />
      <TextImageSection content={pageContent.textImageSectionContent} />

      {/* Pricing Plans Section */}
      <section id="plans" className="mx-auto px-6 py-16">
        <h2 className="text-center mb-12">Our Plans</h2>

        <div className="grid gap-12 mobile:grid-cols-1 tablet:grid-cols-3">
          {pageContent.pricingOptions.map((option) => (
            <div
              key={option.title}
              className="flex flex-col rounded-lg border p-8 shadow-lg bg-gray-800 text-gray-100"
            >
              <h3 className="mb-4 text-center">{option.title}</h3>
              <h4 className="mb-4 text-center">{option.price}</h4>
              <p className="mb-6 text-center ">{option.description}</p>
              <ul className="mb-6 space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <p className="mb-0">{feature}</p>
                  </li>
                ))}
              </ul>
              <NavLink
                href="/contact"
                className="mt-auto bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark text-center"
              >
                Get Started
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Site Enhancements Section */}
      <section id="enhancements" className="mx-auto px-6 py-16">
        <h2 className="text-center mb-12">Site Enhancements</h2>

        <div className="grid gap-8 mobile:grid-cols-1 tablet:grid-cols-2">
          {pageContent.enhancements.map((enhancement, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border shadow-md bg-gray-800 text-gray-100"
            >
              <h3 className="mb-4">{enhancement.title}</h3>
              <p className="mb-4 text-gray-300">{enhancement.description}</p>
              <p className="font-bold text-primary">{enhancement.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Footer Section */}
      <div className="flex flex-col items-center justify-center py-12">
        <CloudImage
          publicId={logo.main.publicId}
          alt={logo.main.alt}
          ratio={4 / 1}
          className="w-44 tablet:w-60"
        />
      </div>
    </>
  );
}
