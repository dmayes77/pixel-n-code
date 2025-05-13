import { businessInfo as business } from "@/content/globals";

export const metadata = {
  title: `Services | ${business.name}`,
  description: `Discover ${business.name}'s full suite of web design and development services—from custom site design and CMS integration to e‑commerce, branding, and ongoing maintenance. We build responsive, SEO‑friendly websites tailored to your goals.`,
};

export const heroContent = {
  headline: (
    <>
      Tailored{" "}
      <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">Web</mark>{" "}
      App Development
    </>
  ),
  subheadline:
    "From design to deployment, our in-house team crafts pixel-perfect web apps optimized for performance and SEO.",
  cta: { label: "Explore Services", href: "/#services" },
  secondaryCta: { label: "Request a Quote", href: "/contact" },
  announcement: {
    text: "New service: ClientFlow CRM Integration",
    link: { label: "Discover", href: "/#services" },
  },
  image: {
    url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1745798037/pixel-n-code/hero-images/pixel-services.webp",
    publicId: "pixel-n-code/hero-images/pixel-services",
    alt: "Developer hands typing code on laptop with UI mockups floating above",
  },
};
