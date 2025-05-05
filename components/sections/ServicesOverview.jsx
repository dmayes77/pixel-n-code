"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import CloudImage from "@/components/ui/CloudImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesOverview({ content }) {
  if (!content) return null; // Safe fallback

  return (
    <section>
      <div className="rounded-lg overflow-hidden bg-accent/10 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto space-y-16">
          {content.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                service.reverse ? "tablet:flex-row-reverse" : "tablet:flex-row"
              } items-center !mb-0`}
            >
              <div className="mobile:w-full tablet:w-1/2 space-y-4 p-6">
                <h3>{service.heading}</h3>
                <p>{service.description}</p>
              </div>
              <div className="mobile:w-full tablet:w-1/2">
                <AspectRatio ratio={7 / 5} className="w-full">
                  <CloudImage
                    publicId={service.image.publicId}
                    alt={service.image.alt}
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          ))}
          {/* CTA Button */}
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <Button asChild size="lg">
          <Link href="/contact">Let’s Talk About Your Website Project</Link>
        </Button>
      </div>
    </section>
  );
}
