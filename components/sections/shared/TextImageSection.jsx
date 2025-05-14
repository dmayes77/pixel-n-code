"use client";

import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import CloudImage from "@/components/ui/CloudImage";

export default function TextImageSection({ content }) {
  const { heading, paragraphs, buttonText, image } = content;

  return (
    <section>
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-primary text-center mobile:max-w-sm fold:max-w-xl laptop:max-w-3xl desktop:max-w-4xl mx-auto">
          {heading}
        </h2>
        <div className="flex mobile:flex-col laptop:flex-row items-start tablet:items-center gap-8 w-full">
          {/* Text Content */}
          <div className="w-full laptop:w-1/2 space-y-6">
            {paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
            <div className="mt-4 flex justify-center laptop:justify-start">
              <Button size="lg">{buttonText}</Button>
            </div>
          </div>

          {/* Image */}
          <div className="mobile:w-full laptop:w-1/2">
            <CloudImage
              publicId={image.src}
              alt={image.alt}
              objectFit="cover"
              ratio={16/9}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
