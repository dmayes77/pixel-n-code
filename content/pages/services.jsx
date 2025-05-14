import { businessInfo as business } from "@/content/globals";
import {
  FaCamera,
  FaGlobe,
  FaPaintBrush,
  FaPrint,
  FaSearch,
  FaVideo,
} from "react-icons/fa";

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

export const introContent = {
  headline: "Built for Small Businesses Like Yours",
  text: "We don't just build websites—we build digital experiences that spark trust, drive action, and grow your brand. Whether you're launching a new business or leveling up your existing one, we tailor every solution to your needs.",
};

export const whyChooseUsContent = {
  headline: "Why Choose Code Maze?",
  reasons: [
    {
      icon: "🎯",
      title: "Small Business Focused",
      text: "We understand your challenges and create solutions that drive real-world growth—not just flashy designs.",
    },
    {
      icon: "⚡",
      title: "Quick Turnarounds",
      text: "Launch fast without sacrificing quality. Most projects delivered in weeks, not months.",
    },
    {
      icon: "📈",
      title: "Growth-Driven Design",
      text: "Our websites aren’t just pretty—they’re built to convert clicks into customers.",
    },
    {
      icon: "💬",
      title: "Direct Communication",
      text: "You’ll work directly with your designer—no middlemen, no confusion, just results.",
    },
  ],
};

export const servicesSectionContent = {
  title: "Our Services",
  services: [
    {
      title: "Website Design",
      icon: "FaGlobe",
      image: "website-design",
      description: `Your website is your brand’s home base. We craft custom-designed, mobile-friendly websites that look incredible, load fast, and guide visitors toward action—whether that’s booking, calling, or buying.`,
      startingPrice: 499,
    },
    {
      title: "Logo Design",
      icon: "FaPaintBrush",
      image: "logo-design",
      description: `Your logo is often the first impression of your brand. We design logos that are visually striking, versatile, and aligned with your brand's voice.`,
      startingPrice: 299,
    },
    {
      title: "Print Material",
      icon: "FaPrint",
      image: "print-materials",
      description: `From business cards to brochures, we create polished print materials that complement your digital presence and make a lasting impact.`,
      startingPrice: 149,
    },
    {
      title: "SEO (Search Engine Optimization)",
      icon: "FaSearch",
      image: "seo",
      description: `We set your business up for long-term success with smart SEO foundations—giving you a stronger chance to climb search engine rankings organically.`,
      startingPrice: 499,
    },
    {
      title: "Photography",
      icon: "FaCamera",
      image: "photography",
      description: `Stock photos can’t capture your brand’s essence. We provide authentic, high-quality photography to showcase your team, products, and services.`,
      startingPrice: 399,
    },
    {
      title: "Videography",
      icon: "FaVideo",
      image: "videography",
      description: `Bring your story to life through engaging video. From service highlights to testimonial reels, we craft professional videos that connect and convert.`,
      startingPrice: 699,
    },
  ],
};

export const ctaContent = {
  title: "Ready to Build Something Incredible?",
  subtitle: "Custom Websites, Branding, SEO, and More.",
  description:
    "Let's work together to create a digital presence that elevates your brand and drives real growth.",
  buttonText: "Get Your Free Quote",
  buttonLink: "/contact",
  bgColor: "bg-accent",
  textColor: "text-primary-foreground",
};
