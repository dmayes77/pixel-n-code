"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // adjust path if needed!

export default function ParallaxSection({ content }) {
  if (!content) return null;

  const { backgroundImage, headline, paragraph, subheadline, button } = content;

  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-center flex flex-col items-center justify-center w-full"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="bg-accent/60 backdrop-blur-sm p-8 rounded-lg max-w-3xl text-white space-y-6">
        <h2>{headline}</h2>
        <p>{paragraph}</p>
        <h3>{subheadline}</h3>

        <Button
          asChild
          className="text-sm font-semibold text-primary-foreground hover:text-primary-foreground !no-underline"
        >
          <Link href={button.link}>
            {button.text} <span aria-hidden="true">→</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
