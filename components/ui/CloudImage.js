"use client";

import { CldImage } from "next-cloudinary";

export default function CloudImage({
  publicId, // The Cloudinary public ID of your image
  alt,
  objectFit = "", // Cloudinary transformation string
  ...props
}) {
  return (
    <CldImage
      src={publicId}
      alt={alt}
      fill
      style={{ objectFit: objectFit }}
      quality={80}
      {...props}
    />
  );
}
