// constants/content.js

//Business Info
export const businessInfo = {
  name: "Code & Pixel Web Design",
  tagline: "Vision Meets Function",
  phone: "(423) 497-0881",
  email: "info@pixelncode.io",
  website: "https://pixelncode.io",

  address: {
    street: "123 Innovation Lane",
    city: "Chattanooga",
    state: "TN",
    zip: "37402",
    latitude: 35.0456,
    longitude: -85.3097,
  },

  hoursOfOperation: {
    monday: "9:00 AM – 6:00 PM",
    tuesday: "9:00 AM – 6:00 PM",
    wednesday: "9:00 AM – 6:00 PM",
    thursday: "9:00 AM – 6:00 PM",
    friday: "9:00 AM – 6:00 PM",
    saturday: "9:00 AM – 2:00 PM",
    sunday: "Closed",
  },

  socials: {
    facebook: "https://facebook.com/pixelncode",
    instagram: "https://instagram.com/pixelncode",
    linkedin: "https://linkedin.com/company/pixelncode",
    twitter: "https://twitter.com/pixelncode",
    youtube: "https://youtube.com/pixelncode",
    tiktok: "https://tiktok.com/@pixelncode",
    pinterest: "https://pinterest.com/pixelncode",
    github: "https://github.com/pixelncode",
    yelp: "https://yelp.com/biz/pixelncode",
  },

  logo: {
    publicId: {
      shortFormat: "pixel-n-code/logo-images/cnp-short-format-logo",
      longFormat: "pixel-n-code/logo-images/cnp-long-format-logo",
      logoOnly: "pixel-n-code/logo-images/cnp-logo-only",
    },
    urls: {
      shortFormat:
        "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1745900145/pixel-n-code/logo-images/cnp-short-format-logo.png",
      longFormat:
        "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1745900145/pixel-n-code/logo-images/cnp-long-format-logo.png",
      logoOnly:
        "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1745900144/pixel-n-code/logo-images/cnp-logo-only.png",
    },
    alt: "Code & Pixel Logo",
  },

  // Tie in your brand palette
  brandColors: {
    primary: "#A8E05F", // primary brand color for CTAs, links, and key UI elements
    secondary: "#4CA84C", // secondary tone for supporting actions and subheadings
    accent: "#F5F7C1", // accent hue for subtle highlights, badges, and focus rings
    neutral: "#F5F5F5", // the background canvas for cards, panels, and sections
    text: "#2D2D2D", // the default copy color for maximum readability
  },

  // Great for a site footer or JSON‑LD
  businessCategory: "Web Design Agency",
  paymentMethods: ["Visa", "Mastercard", "Amex", "PayPal"],

  // If you use an online scheduler
  bookingUrl: "https://pixelncode.io/book",

  // This can power your meta tags or footer links
  privacyPolicyUrl: "/privacy-policy",
  termsOfServiceUrl: "/terms-of-service",

  designCompany: {
    name: "Code & Pixel Web Design",
    url: "https://pixelncode.io",
  },
};

const { ...business } = businessInfo;

// Navigation items for Pixel & Code SPA
export const navItems = [
  { label: "Home", key: "home", href: "/" },
  { label: "About", key: "about", href: "/about" },
  { label: "Services", key: "services", href: "/services" },
  { label: "Contact", key: "contact", href: "/contact" },
];

// Services we offer
export const services = [
  {
    title: "New Website",
    icon: "FaLaptopCode",
    description:
      "Custom-built websites designed for speed, scalability, and conversions.",
  },
  {
    title: "Account Manager",
    icon: "FaUserTie",
    description:
      "A dedicated expert guiding you throughout your website journey.",
  },
  {
    title: "Ongoing Improvements",
    icon: "FaChartLine",
    description:
      "Continuous optimizations to boost your site's performance and effectiveness.",
  },
  {
    title: "Mobile Friendly",
    icon: "FaMobileAlt",
    description:
      "Fully responsive designs, ensuring a seamless experience on all devices.",
  },
  {
    title: "Security & Backups",
    icon: "FaLock",
    description:
      "Protection and backups to keep your website safe and recoverable.",
  },
  {
    title: "24/7 Website Access",
    icon: "FaKey",
    description:
      "Your website is always live and accessible with high availability.",
  },
  {
    title: "Custom Emails",
    icon: "FaEnvelope",
    description:
      "Professional custom email addresses to enhance your brand credibility.",
  },
  {
    title: "Detailed Analytics",
    icon: "FaChartPie",
    description:
      "Deep insights into visitor behavior and traffic sources at your fingertips.",
  },
];
