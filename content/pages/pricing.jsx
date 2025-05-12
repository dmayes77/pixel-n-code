import { businessInfo as business } from "@/content/globals";

/**
 * Pricing page content: metadata, hero, text/image section, pricing plans, enhancements
 */

export const metadata = {
  title: `Pricing | ${business.name}`,
  description: `Discover straightforward pricing plans for custom web design and development at ${business.name}. Choose the perfect package to launch and grow your online presence.`,
};

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
  subheadline: `${business.name} offers transparent pricing designed to help small businesses launch, grow, and thrive online—without the guesswork.`,
  cta: { label: "View Plans", href: "#plans" },
  secondaryCta: { label: "Book a Strategy Call", href: "/contact" },
  announcement: {
    text: "Flexible options for every stage of growth",
    link: { label: "Get Started", href: "/contact" },
  },
  image: {
    url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1745797672/pixel-n-code/hero-images/pixel-about.webp",
    publicId: "pixel-n-code/hero-images/pixel-about",
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
    src: "pixel-n-code/content-images/pixel-code-workspace",
    alt: "Workspace with pricing plans displayed on laptop, tablet, and smartphone screens—aligned in a clean, professional setup.",
  },
};

// Pricing plan options
export const pricingOptions = [
  {
    title: "Starter Website",
    price: "$497",
    description:
      "Perfect for solopreneurs and local businesses starting online.",
    features: [
      "4 Essential Pages (Home, About, Services, Contact)",
      "Mobile-Responsive Design",
      "Basic SEO Setup",
      "Two Rounds of Revisions Included",
      "Launch-Ready in 7–10 Business Days",
    ],
  },
  {
    title: "Pro Presence Website",
    price: "$997",
    description:
      "Ideal for growing businesses needing a larger digital footprint.",
    features: [
      "Custom Multi-Page Website (up to 10 pages)",
      "Advanced SEO Foundations",
      "Custom Forms & Integrations",
      "Premium Hosting Guidance",
      "Two Rounds of Revisions Included",
    ],
  },
  {
    title: "CRM Add-Ons",
    price: "Starting at $197/mo",
    description:
      "Automate and scale your marketing, sales, and support systems.",
    features: [
      "Lead Management CRM",
      "Automated Follow-Ups & Reminders",
      "Pipeline & Deal Tracking",
      "Google Review Campaigns",
    ],
  },
];

// Additional site enhancements
export const enhancements = [
  {
    title: "Additional Pages",
    description:
      "Need a Gallery, FAQ, or Blog? Add extra pages to your site easily.",
    price: "$99 per page",
  },
  {
    title: "Logo Design",
    description:
      "Get a clean, professional logo to match your new website branding.",
    price: "Starting at $199",
  },
  {
    title: "Domain & Hosting Setup",
    description: "Full setup and management of your domain and hosting plan.",
    price: "$99 per month",
  },
  {
    title: "Google Business Profile Optimization",
    description:
      "Boost your local SEO with a professionally optimized Google listing.",
    price: "$149 one-time",
  },
  {
    title: "Extra Revisions",
    description: "Need more changes? Purchase extra rounds of revisions.",
    price: "$75 per revision",
  },
];

export default {
  metadata,
  heroContent,
  textImageSectionContent,
  pricingOptions,
  enhancements,
};
