"use client";

import Link from "next/link";
import CloudImage from "@/components/ui/CloudImage";
import Button from "../ui/Button";

export default function HeroSection({ content }) {
  if (!content) return null;

  const { headline, subheadline, cta, secondaryCta, image, announcement } =
    content;

  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background Images */}

      <div className="absolute inset-0 -z-10 flex">
        <div className="relative flex-1">
          <CloudImage
            publicId={image.publicId}
            alt={image.alt}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Overlay for better text legibility */}
        <div className="absolute inset-0 bg-gray-800/60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          {announcement && (
            <div className="mb-4 text-sm font-medium text-gray-100 flex flex-col justify-center items-center sm:flex-row">
              <span>{announcement.text}</span>
              {announcement.link && (
                <Link
                  href={announcement.link.href}
                  className="mt-1 sm:mt-0 sm:ml-1 text-primary bg-white rounded-sm px-1.5 py-0.5 block sm:inline-block"
                >
                  {announcement.link.label}
                </Link>
              )}
            </div>
          )}

          <h1 className="text-white leading-tight">{headline}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">{subheadline}</p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            {cta && <Button href={cta.href}>{cta.label}</Button>}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="text-sm font-semibold text-white hover:text-primary"
              >
                {secondaryCta.label} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
