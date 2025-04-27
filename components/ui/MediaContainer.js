"use client";

export default function MediaContainer({
  children,
  className = "",
  style = {},
  aspectRatio, // Can be a numeric/string value (e.g. "16/9") or a Tailwind utility (e.g. "aspect-square")
  ...props
}) {
  // If aspectRatio starts with 'aspect-', assume it's a Tailwind class.
  const tailwindAspect =
    aspectRatio &&
    typeof aspectRatio === "string" &&
    aspectRatio.startsWith("aspect-")
      ? aspectRatio
      : "";

  // Otherwise, if aspectRatio is provided and not a Tailwind class, add it as an inline style.
  const inlineStyle =
    aspectRatio && !tailwindAspect
      ? { ...style, aspectRatio: aspectRatio }
      : style;

  return (
    <div
      className={`relative w-full h-auto ${className} ${tailwindAspect}`.trim()}
      style={inlineStyle}
      {...props}
    >
      {children}
    </div>
  );
}
