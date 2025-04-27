// constants/content.js

// Hero section content for Pixel & Code SPA
export const heroContent = {
  home: {
    headline: (
      <>
        Empowering{" "}
        <mark className="px-3 py-1 text-white bg-accent/75 rounded-sm">
          Digital
        </mark>{" "}
        Experiences
      </>
    ),
    subheadline:
      "We build scalable, high-performance SPAs that bring your brand vision to life—fast, secure, and mobile-first.",
    cta: { label: "Get Started", href: "/#contact" },
    secondaryCta: { label: "About Us", href: "/#about" },
    announcement: {
      text: "Custom SPA packages starting at $497!",
      link: { label: "Learn More", href: "/#services" },
    },
    image: {
      publicId: "mad-web-app/hero-images/pixel-home",
      alt: "Laptop on desk displaying a modern web app interface, with code snippets in background",
    },
  },

  about: {
    headline: (
      <>
        Your{" "}
        <mark className="px-3 py-1 text-white bg-accent/75 rounded-sm">
          Digital
        </mark>{" "}
        Dream Team
      </>
    ),
    subheadline:
      "Pixel & Code is a Chattanooga-based web design agency specializing in high-performance SPAs and scalable architectures.",
    cta: { label: "Meet the Team", href: "/#about" },
    secondaryCta: { label: "Our Story", href: "/#about" },
    announcement: {
      text: "Serving clients nationwide",
      link: { label: "Learn More", href: "/#about" },
    },
    image: {
      publicId: "mad-web-app/hero-images/pixel-about",
      alt: "Team brainstorming in a modern office environment",
    },
  },

  services: {
    headline: (
      <>
        Tailored{" "}
        <mark className="px-3 py-1 text-white bg-accent/75 rounded-sm">
          Web
        </mark>{" "}
        & App Development
      </>
    ),
    subheadline:
      "From design to deployment, our in-house team crafts pixel-perfect SPAs optimized for performance and SEO.",
    cta: { label: "Explore Services", href: "/#services" },
    secondaryCta: { label: "Request a Quote", href: "/#contact" },
    announcement: {
      text: "New service: Go High Level CRM Integration",
      link: { label: "Discover", href: "/#services" },
    },
    image: {
      publicId: "mad-web-app/hero-images/pixel-services",
      alt: "Developer hands typing code on laptop with UI mockups floating above",
    },
  },

  contact: {
    headline: (
      <>
        Ready to{" "}
        <mark className="px-3 py-1 text-white bg-accent/75 rounded-sm">
          Elevate
        </mark>{" "}
        Your Web Presence?
      </>
    ),
    subheadline:
      "Let’s discuss your project goals and craft a custom solution that scales with your business.",
    cta: { label: "Get in Touch", href: "/#contact" },
    secondaryCta: { label: "Request a Call", href: "/#contact" },
    announcement: {
      text: "Open Mon–Sat • 9 AM–6 PM EST",
      link: { label: "Book a Call", href: "/#contact" },
    },
    image: {
      publicId: "mad-web-app/hero-images/pixel-contact",
      alt: "Person typing on laptop with chat widget visible, set in a modern office environment",
    },
  },
};

// Navigation items for Pixel & Code SPA
export const navItems = [
  { label: "Home", key: "home", href: "/" },
  { label: "About", key: "about", href: "/#about" },
  { label: "Services", key: "services", href: "/#services" },
  { label: "Contact", key: "contact", href: "/#contact" },
];
