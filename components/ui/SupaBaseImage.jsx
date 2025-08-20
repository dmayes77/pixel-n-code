// components/ui/SupabaseImage.jsx
"use client";
import Image from "next/image";

const PROJECT_URL = process.env.NEXT_PUBLIC_SUPABASE_URL; // e.g. https://abc.supabase.co

export default function SupabaseImage({
  src, // e.g. "images/hero.jpg" (path inside the 'assets' bucket)
  alt,
  fit = "cover", // "cover" | "contain" (default: cover)
  quality = 100,
  sizes = "100vw", // IMPORTANT when using fill
  style,
  ...rest // typically: fill, className, priority, placeholder, etc.
}) {
  const resize = fit === "contain" ? "contain" : "cover";
  const cleaned = String(src || "").replace(/^\/+/, ""); // tolerate leading slash

  const loader = ({ src: s, width, quality: q }) => {
    const params = new URLSearchParams({
      width: String(width || 1200),
      quality: String(q ?? quality),
      format: "webp",
      resize, // cover (default) or contain
    });
    return `${PROJECT_URL}/storage/v1/object/public/assets/${cleaned}?${params.toString()}`;
  };

  return (
    <Image
      alt={alt}
      loader={loader}
      src={cleaned}
      unoptimized
      sizes={sizes}
      style={{ objectFit: resize, ...style }}
      {...rest}
    />
  );
}
