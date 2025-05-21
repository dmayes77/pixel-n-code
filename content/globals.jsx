// constants/content.js

/**
 * Core business information for Code Maze Web Design.
 * This file exports businessInfo, logo, socials, metadata, and structuredData for SEO and JSON-LD.
 */

// Business Info
export const businessInfo = {
  name: "Code Maze Web Design",
  tagline: "Vision Meets Function",
  description:
    "Based in Chattanooga, TN, Code Maze Web Design crafts eye‑catching, user‑friendly websites that not only look great but perform beautifully. We build on a foundation of SEO best practices—ensuring your site ranks where it matters—and round out our services with print‑design and social‑media expertise to give your brand a cohesive, multi‑channel presence.",
  phone: "(423) 558-3659",
  email: "info@getcodemaze.com",
  website: "https://www.getcodemaze.com",

  address: {
    street: "123 Innovation Lane",
    city: "Chattanooga",
    state: "TN",
    zip: "37402",
    latitude: 35.0456,
    longitude: -85.3097,
    country: "US",
  },

  hoursOfOperation: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "09:00-14:00",
    sunday: "Closed",
  },

  socials: {
    google: { url: "https://google.com/codemaze", iconName: "FaGoogle" },
    facebook: { url: "https://facebook.com/codemaze", iconName: "FaFacebookF" },
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
      alt: "Code Maze Logo (White)",
    },
    badge: {
      publicId: "pixel-n-code/logo-images/code-maze-badge",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-badge.png",
      alt: "Code Maze Badge",
    },
    badgeWhite: {
      publicId: "pixel-n-code/logo-images/code-maze-badge-white",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-badge-white.png",
      alt: "Code Maze Badge (White)",
    },
    logoOnly: {
      publicId: "pixel-n-code/logo-images/code-maze-logo-only",
      url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1746738303/pixel-n-code/logo-images/code-maze-logo-only.png",
      alt: "Code Maze Logo Only",
    },
  },

  // Brand palette
  brandColors: {
    primary: "#f26739", // CTA and key UI elements
    secondary: "#4CA84C", // Supporting actions
    accent: "#F5F7C1", // Highlights and focus
    neutral: "#F5F5F5", // Background panels
    text: "#2D2D2D", // Body copy
  },

  // Additional business metadata
  businessCategory: "Web Design Agency",
  paymentMethods: ["Visa", "Mastercard", "Amex", "PayPal"],
  bookingUrl: "https://getcodemaze.com/book",
  privacyPolicyUrl: "/privacy-policy",
  termsOfServiceUrl: "/terms-of-service",
  designCompany: {
    name: "Code Maze Web Design",
    url: "https://getcodemaze.com",
  },
};

// Convenience exports
export const logo = businessInfo.logo;
export const socials = businessInfo.socials;

// Next.js Metadata API config
export const metadata = {
  title: `TN Website Design | SEO Services in ${businessInfo.address.state} | ${businessInfo.name}`,
  description: businessInfo.description,
  openGraph: {
    title: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.website,
    siteName: businessInfo.name,
    images: [
      {
        url: businessInfo.logo.main.url,
        alt: businessInfo.logo.main.alt,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: businessInfo.name,
    description: businessInfo.description,
    images: [businessInfo.logo.main.url],
  },
};

// JSON-LD structured data for SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: businessInfo.name,
  description: businessInfo.description,
  url: businessInfo.website,
  logo: businessInfo.logo.logoOnly.url,
  image: businessInfo.logo.main.url,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.state,
    postalCode: businessInfo.address.zip,
    addressCountry: businessInfo.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessInfo.address.latitude,
    longitude: businessInfo.address.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: Object.values(businessInfo.socials).map((s) => s.url),
  priceRange: "$$$",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: businessInfo.phone,
    contactType: "customer support",
  },
  areaServed: businessInfo.address.city,
};
