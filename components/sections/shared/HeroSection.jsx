"use client";

import Link from "next/link";
import { Button } from "../../ui/button";

export default function HeroSection({ content }) {
  if (!content) return null;
  const { headline, subheadline, cta, secondaryCta, image, announcement } =
    content;

  // Build your Cloudinary URL with transforms
  const bgUrl = `${image.url}?w=2000&fit=cover`;

  return (
    <section
      className="
        relative isolate overflow-hidden w-full
        h-[60vh] fold:h-[70vh] tablet:h-[75vh] laptop:h-[80vh]
        bg-center bg-cover
      "
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
      aria-label={image.alt}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-xs -z-10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 fold:px-6 tablet:px-8 laptop:px-12 space-y-6 text-center text-primary-foreground">
        {announcement && (
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold">
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

        <h1 className="text-3xl fold:text-4xl tablet:text-5xl font-bold">
          {headline}
        </h1>
        <p className="max-w-xl text-base fold:text-lg tablet:text-xl">
          {subheadline}
        </p>

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
    </section>
  );
}
