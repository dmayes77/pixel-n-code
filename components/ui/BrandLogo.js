"use client";
import NextLink from "next/link";
import CloudImage from "./CloudImage";

// BrandLogo with configurable size via `size` prop (defaults to 12)
export default function BrandLogo({ href, image, alt, size = 12 }) {
  const wrapperClasses = "flex items-center -m-1.5 p-1.5";
  const logoContent = (
    <>
      <div style={{ width: size, height: size }} className="relative">
        <CloudImage src={image} alt={alt} objectFit="cover" />
      </div>
    </>
  );

  // Conditionally wrap in a link if href is provided
  return href ? (
    <NextLink href={href} className={wrapperClasses} aria-label="Home">
      {logoContent}
    </NextLink>
  ) : (
    <div className={wrapperClasses}>{logoContent}</div>
  );
}
