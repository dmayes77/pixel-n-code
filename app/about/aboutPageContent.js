import { businessInfo as business } from "@/content/globals";

export const heroContent = {
  headline: (
    <>
      Your{" "}
      <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
        Digital
      </mark>{" "}
      Dream Team
    </>
  ),
  subheadline: `${business.name} is a Chattanooga-based web design agency specializing in high-performance web applications and scalable architectures.`,
  cta: { label: "Meet the Team", href: "/#about" },
  secondaryCta: { label: "Our Story", href: "/#about" },
  announcement: {
    text: "Serving clients nationwide",
    link: { label: "Learn More", href: "/#about" },
  },
  image: {
    publicId: "pixel-n-code/hero-images/pixel-about",
    alt: "Team brainstorming in a modern office environment",
  },
};
