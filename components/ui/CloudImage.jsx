"use client";

import { CldImage } from "next-cloudinary";

export default function CloudImage({
  publicId,
  alt,
  ratio = 1, // e.g. 3/1, 4/3
  objectFit = "contain",
  className = "", // width classes go here
  ...props
}) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: ratio }}>
      <CldImage
        src={publicId}
        alt={alt}
        fill
        quality={80}
        style={{ objectFit }}
        sizes="(max-width: 640px) 100vw, 600px"
        {...props}
      />
    </div>
  );
}
