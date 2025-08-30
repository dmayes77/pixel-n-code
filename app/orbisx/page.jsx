// app/orbisx/page.jsx  (Server Component)
import HomePage from "@/components/orbisx/HomePage";

export const metadata = {
  title:
    "OrbisX for Detailers & Tint Shops | Subscriber Setup & Portal | Code Maze",
  description:
    "Done-for-you OrbisX implementation and subscriber portal: pipelines, 2-way SMS, booking, automations, websites, and training—purpose-built for detailers & tint shops.",
  alternates: { canonical: "/orbisx" },
  robots: { index: false, follow: false },
};

const features = [
  [
    "Lead → Job Pipeline",
    "Custom stages that match your workflow (Inquiry, Quote, Booked, Completed, Review).",
  ],
  [
    "Online Booking System",
    "Branded booking flow with calendar rules, service logic, and add-ons.",
  ],
  [
    "Automations & Workflows",
    "Deposit requests, reminders, no-show buffers, and internal alerts — all prebuilt and tested.",
  ],
  [
    "Custom Quotes & Invoices",
    "Use preset packages, upsell extras, and send clean, consistent proposals in clicks.",
  ],
  [
    "Visual Customizations",
    "Custom HTML/CSS booking pages, branded colors, and Cloudinary-optimized images.",
  ],
  [
    "Mobile App Experience",
    "A PWA clients can install from your website — looks and feels like a real app, without the App Store.",
  ],
  [
    "Push Notifications",
    "Send promotional alerts or reminders directly to clients through your branded Companion App.",
  ],
  [
    "Admin Dashboard Control",
    "You control your content — services, pricing, booking rules, and FAQs — with ease.",
  ],
];

const steps = [
  ["Map", "Short discovery to map your services and current flow."],
  ["Build", "We configure pipelines, templates, booking, and automations."],
  ["Test", "We test everything internally to ensure it works before handoff."],
  [
    "Train",
    "Live handoff, playbooks, and a 30-day optimization window for revisions.",
  ],
];

// ✅ Now includes Companion App + 1:1 Setup Check with per-plan turnaround & badges
const plans = [
  {
    name: "Quick Start Setup (Basic)",
    price: "$195",
    turnaround: "1-2 business days",
    badge: "Fastest launch",
    badgeColor: "primary",
    tagline: "Template-based build with light customizations",
    bullets: [
      "Booking page setup using default OrbisX tools",
      "Add your logo, banner, and business info",
      "Services & packages loaded and organized",
      "Basic workflows",
      "Zoom walkthrough + up to 2 rounds of revisions",
    ],
    idealFor: "Shops wanting a professional, ready-to-use setup fast.",
    ctaHref: "/orbisx/contact?service=Quick%20Start",
    ctaLabel: "Choose Quick Start",
  },
  {
    name: "Custom Setup",
    price: "$495",
    turnaround: "3–5 business days",
    badge: "Most tailored",
    badgeColor: "orange",
    tagline: "Fully tailored build with advanced integrations",
    bullets: [
      "Everything from Quick Launch",
      "Custom booking page (HTML/CSS — branded layout, better UX)",
      "Cloudinary image optimization",
      "Advanced automations (custom workflows, lead flows, tagging logic)",
      "Branded color styling and layout customizations",
      "Tailored service flow logic (e.g., conditional forms, follow-up sequences)",
      "Zoom walkthrough + up to 3 rounds of revisions",
    ],
    idealFor: "Teams wanting a highly branded, dialed-in experience.",
    ctaHref: "/orbisx/contact?service=Custom%20Setup",
    ctaLabel: "Choose Custom",
  },
  {
    name: "Custom Booking Header",
    price: "$95",
    turnaround: "1 business day",
    badge: "First Impression",
    badgeColor: "orange",
    tagline: "Fully branded hero header for your OrbisX booking page",
    bullets: [
      "Custom hero header (HTML/CSS within OrbisX limits): headline, subtext, CTA",
      "Brand-matched colors using OrbisX theme settings (no external CSS)",
      "Layout polish for above-the-fold only (logo, trust badges, highlights)",
      "Optional hero media slot: static image or video with Cloudinary optimization",
      "Zoom walkthrough + up to 2 rounds of revisions",
    ],
    idealFor:
      "Shops that want the booking page to ‘feel on-brand’ without a full rebuild.",
    notes: [
      "Services & packages: cleaned up for clarity (titles/order/copy) but not custom-styled.",
      "No custom global CSS; we stick to OrbisX’s native color/theme controls.",
      "This does not include a full page redesign below the fold.",
    ],
    ctaHref: "/orbisx/contact?service=Custom%20Booking%20Header",
    ctaLabel: "Choose Header Upgrade",
  },

  /* {
    name: "Companion App",
    price: "$250 setup + $69/mo",
    turnaround: "Go live in ~3 days",
    badge: "Recurring value",
    badgeColor: "violet",
    tagline: "Installable web app (no App Store) with push notifications.",
    bullets: [
      "Branded App installed at app.yourdomain.com that behaves like a real app",
      "Optional Push notifications for promos & reminders",
      "Services, packages, booking, and FAQs",
      "Fully integrated admin dashboard so you control your content",
    ],
    idealFor: "Shops that want an app-like experience & re-engagement.",
    ctaHref: "/orbisx/contact?service=Companion%20App",
    ctaLabel: "Get the App",
  },*/
  {
    name: "1:1 Setup Check",
    price: "$99/Session",
    turnaround: "60-minute private session",
    badge: "Great for DIYers",
    badgeColor: "slate",
    tagline: "Live audit + expert fixes for your current OrbisX setup.",
    bullets: [
      "Screen-share review of pipelines, forms & automations",
      "Quick wins implemented during the session",
      "Prioritized recommendations afterward",
      "Recording provided",
      "The Discovery Call is your one hour session",
    ],
    idealFor: "DIYers wanting expert eyes before going live.",
    ctaHref: "/orbisx/contact?service=1:1%20Setup%20Check",
    ctaLabel: "Book a Check",
  },
];

export default function OrbisXPage() {
  // Only include numeric-price offers in JSON-LD
  const offers = plans
    .filter((p) => /^\$\d+(\.\d+)?$/.test(p.price))
    .map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: Number(p.price.replace(/[\$,]/g, "")),
      priceCurrency: "USD",
    }));

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OrbisX Implementation (Base & Custom)",
    provider: { "@type": "Organization", name: "Code Maze Web Design" },
    areaServed: "United States",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "OrbisX Setups & Services",
      itemListElement: offers,
    },
  };

  return (
    <>
      <HomePage features={features} steps={steps} plans={plans} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </>
  );
}
