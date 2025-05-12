"use client";

import { logo } from "@/content/globals";
import HeroSection from "@/components/sections/HeroSection";
import CloudImage from "@/components/ui/CloudImage";
import * as pageContent from "@/content/pages/pricing";
import TextImageSection from "@/components/sections/TextImageSection";
import NavLink from "@/components/ui/NavLink";

const pricingOptions = [
  {
    title: "Starter Website",
    price: "$497",
    description:
      "Perfect for solopreneurs and local businesses starting online.",
    features: [
      "4 Essential Pages (Home, About, Services, Contact)",
      "Mobile-Responsive Design",
      "Basic SEO Setup",
      "Two Rounds of Revisions Included",
      "Launch-Ready in 7–10 Business Days",
    ],
  },
  {
    title: "Pro Presence Website",
    price: "$997",
    description:
      "Ideal for growing businesses needing a larger digital footprint.",
    features: [
      "Custom Multi-Page Website (up to 10 pages)",
      "Advanced SEO Foundations",
      "Custom Forms & Integrations",
      "Premium Hosting Guidance",
      "Two Rounds of Revisions Included",
    ],
  },
  {
    title: "CRM Add-Ons",
    price: "Starting at $197/mo",
    description:
      "Automate and scale your marketing, sales, and support systems.",
    features: [
      "Lead Management CRM",
      "Automated Follow-Ups & Reminders",
      "Pipeline & Deal Tracking",
      "Google Review Campaigns",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection content={pageContent.heroContent} />
      <TextImageSection content={pageContent.textImageSectionContent} />

      {/* Pricing Plans Section */}
      <section id="plans" className="mx-auto px-6 py-16">
        <h2 className="text-center mb-12">Our Plans</h2>

        <div className="grid gap-12 mobile:grid-cols-1 tablet:grid-cols-3">
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className="flex flex-col rounded-lg border p-8 shadow-lg bg-gray-800 text-gray-100"
            >
              <h3 className="mb-4 text-center">{option.title}</h3>
              <h4 className="mb-4 text-center">{option.price}</h4>
              <p className="mb-6 text-center ">{option.description}</p>
              <ul className="mb-6 space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <p className="mb-0">{feature}</p>
                  </li>
                ))}
              </ul>
              <NavLink
                href="/contact"
                className="mt-auto bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark text-center"
              >
                Get Started
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Site Enhancements Section */}
      <section id="enhancements" className="mx-auto px-6 py-16">
        <h2 className="text-center mb-12">Site Enhancements</h2>

        <div className="grid gap-8 mobile:grid-cols-1 tablet:grid-cols-2">
          {[
            {
              title: "Additional Pages",
              description:
                "Need a Gallery, FAQ, or Blog? Add extra pages to your site easily.",
              price: "$99 per page",
            },
            {
              title: "Logo Design",
              description:
                "Get a clean, professional logo to match your new website branding.",
              price: "Starting at $199",
            },
            {
              title: "Domain & Hosting Setup",
              description:
                "Full setup and management of your domain and hosting plan.",
              price: "$99 per month",
            },
            {
              title: "Google Business Profile Optimization",
              description:
                "Boost your local SEO with a professionally optimized Google listing.",
              price: "$149 one-time",
            },
            {
              title: "Extra Revisions",
              description:
                "Need more changes? Purchase extra rounds of revisions.",
              price: "$75 per revision",
            },
          ].map((enhancement, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border shadow-md bg-gray-800 text-gray-100"
            >
              <h3 className="mb-4">{enhancement.title}</h3>
              <p className="mb-4 text-gray-300">{enhancement.description}</p>
              <p className="font-bold text-primary">{enhancement.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Footer Section */}
      <div className="flex flex-col items-center justify-center py-12">
        <CloudImage
          publicId={logo.main.publicId}
          alt={logo.main.alt}
          ratio={4 / 1}
          className="w-44 tablet:w-60"
        />
      </div>
    </>
  );
}
