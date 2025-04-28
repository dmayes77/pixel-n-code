"use client";

import { services } from "@/constants/content";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="w-full py-12 mobile:py-12 fold:py-16 tablet:py-20 laptop:py-24 bg-gray-50 overflow-hidden">
      {/* Heading */}
      <div className="text-center px-4 fold:px-6 tablet:px-8 laptop:px-12 space-y-3 fold:space-y-4">
        <h2 className="text-3xl fold:text-4xl tablet:text-5xl laptop:text-6xl font-bold text-gray-900">
          What We Offer
        </h2>
        <p className="text-gray-600 text-base fold:text-lg tablet:text-xl laptop:text-2xl">
          Everything you need to launch, grow, and manage your digital presence.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 fold:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-4  gap-6 tablet:gap-8 mt-12 px-4 fold:px-6 tablet:px-8 laptop:px-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
