// constants/content.js
import {
  FaLaptopCode,
  FaUserTie,
  FaChartLine,
  FaMobileAlt,
  FaLock,
  FaKey,
  FaEnvelope,
  FaChartPie,
} from "react-icons/fa";

//Business Info
export const businessInfo = {
  name: "Pixel & Code Web Design",
  tagline: "Vision Meets Function",
  phone: "(423) 497-0881",
  email: "info@pixelncode.io",
  address: {
    street: "123 Innovation Lane",
    city: "Chattanooga",
    state: "TN",
    zip: "37402",
  },
  logoPublicId: "pixel-n-code/logo-images/pixel-n-code-logo",
  website: "https://pixelncode.io",
  social: {
    facebook: "https://facebook.com/pixelncode",
    instagram: "https://instagram.com/pixelncode",
    linkedin: "https://linkedin.com/company/pixelncode",
  },
};

// Navigation items for Pixel & Code SPA
export const navItems = [
  { label: "Home", key: "home", href: "/" },
  { label: "About", key: "about", href: "/about" },
  { label: "Services", key: "services", href: "/services" },
  { label: "Contact", key: "contact", href: "/contact" },
  
];

// Hero section content for Pixel & Code SPA
export const heroContent = {
  home: {
    headline: (
      <>
        Empowering{" "}
        <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
          Digital
        </mark>{" "}
        Experiences
      </>
    ),
    subheadline:
      "We build scalable, high-performance web applications that bring your brand vision to life—fast, secure, and mobile-first.",
    cta: { label: "Get Started", href: "/#contact" },
    secondaryCta: { label: "About Us", href: "/#about" },
    announcement: {
      text: "Custom Website packages starting at $497!",
      link: { label: "Learn More", href: "/#services" },
    },
    image: {
      publicId: "pixel-n-code/hero-images/pixel-home",
      alt: "Laptop on desk displaying a modern web app interface, with code snippets in background",
    },
  },

  about: {
    headline: (
      <>
        Your{" "}
        <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
          Digital
        </mark>{" "}
        Dream Team
      </>
    ),
    subheadline: `${businessInfo.name} is a Chattanooga-based web design agency specializing in high-performance web applications and scalable architectures.`,
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
  },

  services: {
    headline: (
      <>
        Tailored{" "}
        <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
          Web
        </mark>{" "}
        App Development
      </>
    ),
    subheadline:
      "From design to deployment, our in-house team crafts pixel-perfect web apps optimized for performance and SEO.",
    cta: { label: "Explore Services", href: "/#services" },
    secondaryCta: { label: "Request a Quote", href: "/#contact" },
    announcement: {
      text: "New service: ClientFlow CRM Integration",
      link: { label: "Discover", href: "/#services" },
    },
    image: {
      publicId: "pixel-n-code/hero-images/pixel-services",
      alt: "Developer hands typing code on laptop with UI mockups floating above",
    },
  },

  contact: {
    headline: (
      <>
        Ready to{" "}
        <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
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
      publicId: "pixel-n-code/hero-images/pixel-contact",
      alt: "Person typing on laptop with chat widget visible, set in a modern office environment",
    },
  },
};



// Services we offer
export const services = [
  {
    title: "New Website",
    icon: FaLaptopCode,
    description: "Custom-built websites designed for speed, scalability, and conversions.",
  },
  {
    title: "Account Manager",
    icon: FaUserTie,
    description: "A dedicated expert guiding you throughout your website journey.",
  },
  {
    title: "Ongoing Improvements",
    icon: FaChartLine,
    description: "Continuous optimizations to boost your site's performance and effectiveness.",
  },
  {
    title: "Mobile Friendly",
    icon: FaMobileAlt,
    description: "Fully responsive designs, ensuring a seamless experience on all devices.",
  },
  {
    title: "Security & Backups",
    icon: FaLock,
    description: "Protection and backups to keep your website safe and recoverable.",
  },
  {
    title: "24/7 Website Access",
    icon: FaKey,
    description: "Your website is always live and accessible with high availability.",
  },
  {
    title: "Custom Emails",
    icon: FaEnvelope,
    description: "Professional custom email addresses to enhance your brand credibility.",
  },
  {
    title: "Detailed Analytics",
    icon: FaChartPie,
    description: "Deep insights into visitor behavior and traffic sources at your fingertips.",
  },
];
