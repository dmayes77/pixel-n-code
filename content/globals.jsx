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
    facebook: "https://facebook.com/codemaze",
    instagram: "https://instagram.com/codemaze",
    linkedin: "https://linkedin.com/company/codemaze",
    twitter: "https://twitter.com/codemaze",
    youtube: "https://youtube.com/codemaze",
    tiktok: "https://tiktok.com/@codemaze",
    pinterest: "https://pinterest.com/codemaze",
    github: "https://github.com/codemaze",
    yelp: "https://yelp.com/biz/codemaze",
  },

  logo: {
    main: {
      publicId: "pixel-n-code/logo-images/Code_Maze_Long_Logo",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738304/pixel-n-code/logo-images/Code_Maze_Long_Logo.png",
      alt: "Code Maze Logo",
    },
    badge: {
      publicId: "pixel-n-code/logo-images/Code_Maze_Badge",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/Code_Maze_Badge.png",
      alt: "Code Maze Logo",
    },
    logoOnly: {
      publicId: "pixel-n-code/logo-images/Code_Maze_Logo",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/Code_Maze_Logo.png",
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
  bookingUrl: "https://pixelncode.io/book",

  // This can power your meta tags or footer links
  privacyPolicyUrl: "/privacy-policy",
  termsOfServiceUrl: "/terms-of-service",

  designCompany: {
    name: "Code & Pixel Web Design",
    url: "https://pixelncode.io",
  },
};

export const logo = businessInfo.logo;
export const socials = businessInfo.socials;
