// app/orbisx/page.jsx  (Server Component)
import HomePage from "@/components/orbisx/HomePage";

export const metadata = {
  title: "OrbisX for Detailers & Tint Shops | Subscriber Setup & Portal | Code Maze",
  description:
    "Done-for-you OrbisX implementation and subscriber portal: pipelines, 2-way SMS, booking, automations, websites, and training—purpose-built for detailers & tint shops.",
  alternates: { canonical: "/orbisx" },
  robots: { index: false, follow: false },
};

const features = [
  [
    "Custom Booking Form Design",
    "We restyle your OrbisX booking form with custom HTML and CSS so it visually matches your website’s design and layout.",
  ],
  [
    "Branded Color & Font Matching",
    "We apply your website’s exact brand colors, typography, and spacing for a seamless, on-brand experience.",
  ],
  [
    "Responsive Layout Adjustments",
    "We ensure your booking form looks clean and consistent across desktop, tablet, and mobile devices.",
  ],
  [
    "Embed & Integration Support",
    "We provide easy embed code and guidance to integrate your customized booking form back into your website flawlessly.",
  ],
];


const steps = [
  ["Map", "We review your website and booking form to understand your brand style, structure, and layout."],
  ["Build", "We rebuild your OrbisX booking form using custom HTML and CSS to match your website’s look and flow."],
  ["Review", "You’ll receive a live preview for feedback, and we’ll make refinements until it’s a perfect visual match."],
  ["Embed", "We provide the embed code and assist with adding your customized form back to your website."],
];


// ✅ Reuse one link for all plans
const discoveryLink = "https://calendly.com/getcodemaze/orbisx-discovery-meeting";

// ✅ Now includes Companion App + 1:1 Setup Check with per-plan turnaround & badges
const plans = [
  {
    name: "Custom Booking Header",
    price: "$99",
    turnaround: "1 business day",
    badge: "First Impression",
    badgeColor: "slate",
    tagline: "Fully branded hero header for your OrbisX booking page",
    bullets: [
      "Custom hero header (HTML/CSS within OrbisX limits): headline, subtext, CTA",
      "Brand-matched colors using OrbisX theme settings (no global CSS)",
      "Layout polish for above-the-fold only (logo, trust badges, highlights)",
      "Optional hero media slot: static image or video with Cloudinary optimization",
      "Google Meets walkthrough + up to 2 rounds of revisions",
    ],
    idealFor: "Shops that want the booking page to feel on-brand without changing the rest of the page.",
    notes: [
      "Light copy tidy-up for services/packages on request; no structural changes.",
      "No custom global CSS; we stick to OrbisX’s native color/theme controls.",
      "No redesign below the header.",
    ],
    ctaHref: discoveryLink,
    ctaLabel: "Choose Header Upgrade",
  },
  {
    name: "Quick Start Setup (Basic)",
    price: "$199",
    turnaround: "1-2 business days",
    badge: "Fastest launch",
    badgeColor: "primary",
    tagline: "Branded header + marketing-focused setup using OrbisX tools",
    bullets: [
      "Includes the Custom Booking Header",
      "Branded setup with your logo, banner, and business info",
      "Services & packages cleaned up and organized for clarity & conversion",
      "Marketing/client-focused wording adjustments (no custom CSS)",
      "Google Meets walkthrough + up to 2 rounds of revisions",
    ],
    idealFor: "Shops wanting a branded booking page and professional setup fast, without advanced CSS customizations.",
    ctaHref: discoveryLink,
    ctaLabel: "Choose Quick Start",
  },
  {
    name: "Custom Setup",
    price: "$499",
    turnaround: "3–5 business days",
    badge: "Most tailored",
    badgeColor: "orange",
    tagline: "Fully tailored build with advanced integrations",
    bullets: [
      "Everything from Quick Start (header + marketing-focused services/packages)",
      "Custom booking page (HTML/CSS — branded layout, improved UX)",
      "Cloudinary image optimization for all booking assets",
      "Branded system emails (HTML/CSS) — confirmations, reminders, updates",
      "Branded color styling and layout customizations beyond OrbisX defaults",
      "Google Meets walkthrough + up to 3 rounds of revisions",
    ],
    idealFor: "Teams wanting a highly branded, dialed-in experience.",
    notes: [
      "Any and everything that can be customized within OrbisX will be customized.",
      "Emails are built with inlined CSS for broad client support and wired to OrbisX triggers.",
      "Images hosted via Cloudinary; copy and branding matched to your booking experience.",
    ],
    ctaHref: discoveryLink,
    ctaLabel: "Choose Custom",
  },
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
    ctaHref: discoveryLink,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
    </>
  );
}
