"use client";
import NextLink from "next/link";
import CloudImage from "./CloudImage.jsx";
import { AspectRatio } from "./aspect-ratio.jsx";

// BrandLogo with configurable size via `size` prop (defaults to 12)
export default function BrandLogo({ href, image, alt, ratio, width }) {
  const logoContent = (
    <AspectRatio ratio={ratio}>
      <CloudImage src={image} alt={alt} className="object-contain" />
    </AspectRatio>
  );

  // Conditionally wrap in a link if href is provided
  return href ? (
    <NextLink href={href} className={width} aria-label="Home">
      {logoContent}
    </NextLink>
  ) : (
    <div className={width}>{logoContent}</div>
  );
}
