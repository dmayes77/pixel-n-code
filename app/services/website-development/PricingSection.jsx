import WebsitePackageCard from "./WebsitePackageCard";

export const websitePackages = [
  {
    title: "Starter Website Package",
    subtitle: "A clean, professional foundation for your brand",
    setupFee: 650,
    monthlyPrice: 239,
    totalPrice: 6386,
    pages: 5,
    features: [
      "Up to 5 custom-designed pages",
      "Professionally written content",
      "Unlimited updates",
      "Cloud hosting + SSL",
      "Mobile-optimized and SEO-ready",
      "U.S.-based support",
    ],
    idealFor: "Startups, solo professionals, and service providers",
  },
  {
    title: "Growth Website Package",
    subtitle: "More pages, more flexibility, and room to scale",
    setupFee: 850,
    monthlyPrice: 269,
    totalPrice: 7306,
    pages: 7,
    features: [
      "Up to 7 custom-designed pages",
      "Conversion-focused copywriting",
      "Unlimited content updates",
      "Lead capture forms & review feeds",
      "Cloud hosting, SSL, SEO optimization",
      "Optional Google Business sync",
    ],
    idealFor: "Multi-offer brands, local businesses, and small teams",
  },
  {
    title: "Thrive Website Package",
    subtitle: "Designed to drive conversions and growth",
    setupFee: 1050,
    monthlyPrice: 299,
    totalPrice: 8226,
    pages: 9,
    features: [
      "Up to 9 custom-designed pages",
      "Conversion-driven writing",
      "Blog setup with 3 SEO posts",
      "Unlimited updates & landing pages",
      "CRM integrations & review widgets",
      "Quarterly strategy check-ins",
    ],
    idealFor: "Consultants, multi-location services, local agencies",
  },
  {
    title: "Expand Website Package",
    subtitle: "Your complete digital engine for scale",
    setupFee: 1250,
    monthlyPrice: 329,
    totalPrice: 9146,
    pages: 11,
    features: [
      "Up to 11 custom-designed pages",
      "Blog with 5 launch-ready SEO posts",
      "Lead funnel design & integrations",
      "Unlimited edits & new pages",
      "CRM, booking, review feed tools",
      "Quarterly strategic growth reviews",
    ],
    idealFor: "Content-heavy brands, franchises, regional growth",
  },
];


export default function PricingSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Website Packages for Every Stage of Growth
        </h2>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6">
          {websitePackages.map((pkg, idx) => (
            <WebsitePackageCard key={idx} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
