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

export const textImageSectionContent = {
  heading: `About ${business.name}: Built for Small Business Success`,
  paragraphs: [
    `${business.name} was founded with a simple mission: to make professional, high-performing websites accessible to small businesses without the hassle of managing multiple vendors. From the first brainstorming session to your site's launch day, we’re with you every step of the way—delivering a seamless, end-to-end digital experience.`,
    "In today’s world, your website is often the first impression you make. Studies show over 90% of people judge a brand based on its online presence. We believe every small business deserves a site that’s clean, intuitive, and designed to turn visitors into loyal customers.",
    "At Pixel & Code, we blend creative design with strategic functionality. With vibrant visuals, smart navigation, and performance-first development, we don’t just build websites—we build powerful brand experiences that help you grow, connect, and stand out in a crowded market.",
  ],
  buttonText: "Book Your Free Web Strategy Call",
  image: {
    src: "pixel-n-code/content-images/pixel-code-workspace",
    alt: "Overhead view of a wooden designer’s desk featuring a MacBook Pro, tablet, and smartphone—all displaying the Pixel & Code website in synchronized layouts—surrounded by a coffee mug, succulent, pen, and color swatches.",
  },
};
