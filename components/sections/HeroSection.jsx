"use client";

import Link from "next/link";
import CloudImage from "@/components/ui/CloudImage";
import { Button } from "../ui/button";

export default function HeroSection({ content }) {
  if (!content) return null;

  const { headline, subheadline, cta, secondaryCta, image, announcement } =
    content;

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 flex">
        <div className="relative flex-1">
          <CloudImage
            publicId={image.publicId}
            alt={image.alt}
            objectFit="cover"
          />
        </div>

        {/* Overlay for better text legibility */}
        <div className="absolute inset-0 bg-gray-900/70  backdrop-blur-xs" />
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-4 fold:px-6 tablet:px-8 laptop:px-12 py-24 mobile:py-28 fold:py-32 tablet:py-36 laptop:py-40">
        <div className="mx-auto max-w-2xl text-center text-primary-foreground space-y-6">
          {announcement && (
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold mb-6">
              <span>{announcement.text}</span>
              {announcement.link && (
                <Button asChild size="sm">
                  <Link href={announcement.link.href}>
                    {announcement.link.label}
                  </Link>
                </Button>
              )}
            </div>
          )}

          <h1>{headline}</h1>

          <p className="text-primary-foreground">{subheadline}</p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {cta && (
              <Button asChild>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                variant="link"
                className="text-sm font-semibold text-primary-foreground hover:text-primary !no-underline"
              >
                <Link href={secondaryCta.href}>
                  {secondaryCta.label} <span aria-hidden="true">→</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
