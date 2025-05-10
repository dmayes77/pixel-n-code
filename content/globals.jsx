// constants/content.js

//Business Info
export const businessInfo = {
  name: "Code Maze Web Design",
  tagline: "Vision Meets Function",
  phone: "(423) 497-0881",
  email: "info@getcodemaze.com",
  website: "https://getcodemaze.com",

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
    google: { url: "https://google.com/codemaze", iconName: "FaGoogle" },
    facebook: {
      url: "https://facebook.com/codemaze",
      iconName: "FaFacebookF",
    },
    instagram: {
      url: "https://instagram.com/codemaze",
      iconName: "ImInstagram",
    },
    twitter: { url: "https://twitter.com/codemaze", iconName: "BsTwitterX" },
  },

  logo: {
    main: {
      publicId: "pixel-n-code/logo-images/code-maze-logo-main",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-logo-main.png",
      alt: "Code Maze Logo",
    },
    mainWhite: {
      publicId: "pixel-n-code/logo-images/code-maze-logo-white",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-logo-white.png",
      alt: "Code Maze Logo",
    },
    badge: {
      publicId: "pixel-n-code/logo-images/code-maze-badge",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-badge.png",
      alt: "Code Maze Logo",
    },
    badgeWhite: {
      publicId: "pixel-n-code/logo-images/code-maze-badge-white",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-badge-white.png",
      alt: "Code Maze Logo",
    },
    logoOnly: {
      publicId: "pixel-n-code/logo-images/code-maze-logo-only",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-logo-only.png",
      alt: "Code Maze Logo",
    },
  },

  // Tie in your brand palette
  brandColors: {
    primary: "#f26739", // primary brand color for CTAs, links, and key UI elements
    secondary: "#4CA84C", // secondary tone for supporting actions and subheadings
    accent: "#F5F7C1", // accent hue for subtle highlights, badges, and focus rings
    neutral: "#F5F5F5", // the background canvas for cards, panels, and sections
    text: "#2D2D2D", // the default copy color for maximum readability
  },

  // Great for a site footer or JSON‑LD
  businessCategory: "Web Design Agency",
  paymentMethods: ["Visa", "Mastercard", "Amex", "PayPal"],

  // If you use an online scheduler
  bookingUrl: "https://getcodemaze.com/book",

  // This can power your meta tags or footer links
  privacyPolicyUrl: "/privacy-policy",
  termsOfServiceUrl: "/terms-of-service",

  designCompany: {
    name: "Code Maze Web Design",
    url: "https://getcodemaze.com",
  },
};

export const logo = businessInfo.logo;
export const socials = businessInfo.socials;
