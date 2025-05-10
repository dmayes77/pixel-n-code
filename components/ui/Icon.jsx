import React from "react";

export default function Icon({
  iconName: IconComponent,
  size = 24,
  className = "",
  ...props
}) {
  if (!IconComponent) {
    console.warn("❌ Icon component is not provided.");
    return null;
  }

  return <IconComponent size={size} className={className} {...props} />;
}
