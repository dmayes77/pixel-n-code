import { businessInfo as business } from "@/content/globals";

export const heroContent = {
  headline: (
    <>
      Simple,{" "}
      <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
        Transparent
      </mark>{" "}
      Pricing
    </>
  ),
  subheadline: `${business.name} offers straightforward pricing designed to help small businesses launch, grow, and thrive online—without the guesswork.`,
  cta: { label: "View Plans", href: "/#plans" },
  secondaryCta: { label: "Book a Strategy Call", href: "/contact" },
  announcement: {
    text: "Flexible options for every stage of growth",
    link: { label: "Get Started", href: "/contact" },
  },
  image: {
    url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1745797672/pixel-n-code/hero-images/pixel-about.webp",
    publicId: "pixel-n-code/hero-images/pixel-about", // (Ideally you'd replace this with a pricing-specific image later)
    alt: "Business team discussing website strategies over laptops and notebooks",
  },
};

export const textImageSectionContent = {
  heading: `Affordable Web Solutions from ${business.name}`,
  paragraphs: [
    `${business.name} is committed to making professional web design accessible to small businesses of all sizes. We believe you shouldn't have to choose between quality and affordability.`,
    "Whether you're launching your very first website or scaling your brand to new heights, our transparent pricing ensures you know exactly what you're getting—no hidden fees, no surprises.",
    "From starter sites to advanced, scalable solutions, we structure our pricing to grow with you. Our mission is simple: deliver high-impact, high-performance websites at a price point that empowers your success.",
  ],
  buttonText: "Explore Pricing Options",
  image: {
    src: "pixel-n-code/content-images/pixel-code-workspace", // (Same note: replace with pricing-specific image if possible later)
    alt: "Workspace with pricing plans displayed on laptop, tablet, and smartphone screens—aligned in a clean, professional setup.",
  },
};
