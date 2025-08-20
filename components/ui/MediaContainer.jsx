// components/ui/MediaContainer.jsx
"use client";

function normalizeAspect(aspectRatio) {
  if (!aspectRatio || typeof aspectRatio !== "string") return aspectRatio;
  // If it's already a Tailwind utility, pass it through
  if (aspectRatio.startsWith("aspect-")) return aspectRatio;
  // Normalize "16/9" -> "16 / 9" for CSS
  return aspectRatio.replace("/", " / ");
}

export default function MediaContainer({
  children,
  className = "",
  style = {},
  aspectRatio, // "16/9" | "1/1" | "21/9" | "aspect-video" | etc.
  ...props
}) {
  const isTailwindAspect =
    typeof aspectRatio === "string" && aspectRatio.startsWith("aspect-");

  const inlineStyle =
    aspectRatio && !isTailwindAspect
      ? { ...style, aspectRatio: normalizeAspect(aspectRatio) }
      : style;

  return (
    <div
      className={`relative w-full ${
        isTailwindAspect ? aspectRatio : ""
      } ${className}`.trim()}
      style={inlineStyle}
      {...props}
    >
      {children}
    </div>
  );
}
