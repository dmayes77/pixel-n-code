"use client";

import { useState } from "react";
import {
  FaGlobe,
  FaPaintBrush,
  FaPrint,
  FaSearch,
  FaCamera,
  FaVideo,
} from "react-icons/fa";

// Icon map to use string names safely
const iconMap = {
  FaGlobe: FaGlobe,
  FaPaintBrush: FaPaintBrush,
  FaPrint: FaPrint,
  FaSearch: FaSearch,
  FaCamera: FaCamera,
  FaVideo: FaVideo,
};

// Background colors for flipped side (with slight opacity)
const bgColorClasses = ["bg-primary/90", "bg-secondary/90", "bg-accent/90"];
// Matching shadow colors for hover glow
const shadowColorClasses = [
  "hover:shadow-primary/40",
  "hover:shadow-secondary/40",
  "hover:shadow-accent/40",
];

export default function ServiceCard({ service, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[service.icon];
  const backBgColor = bgColorClasses[index % bgColorClasses.length];
  const shadowColor = shadowColorClasses[index % shadowColorClasses.length];

  return (
    <div
      className="perspective group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-72 transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] transform-style preserve-3d group-hover:scale-105 hover:shadow-2xl ${shadowColor} ${
          isFlipped
            ? "rotate-y-180 shadow-xl"
            : "group-hover:rotate-y-180 group-hover:rotate-x-3"
        }`}
      >
        {/* Ripple Effect Layer */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div className="ripple-overlay"></div>
        </div>

        {/* Front side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 backface-hidden">
          <div className="text-primary mb-4">{Icon && <Icon size={56} />}</div>
          <h3 className="text-xl text-center font-semibold text-gray-800">
            {service.title}
          </h3>
          {service.startingPrice && (
            <p className="mt-2 text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1">
              Starting at ${service.startingPrice}
            </p>
          )}
          {/* Tap hint on mobile */}
          <p className="mt-2 text-xs text-gray-400 italic tablet:hidden">
            Tap to flip
          </p>
        </div>

        {/* Back side */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-white rounded-xl shadow-md p-6 rotate-y-180 backface-hidden ${backBgColor} border border-white/10`}
        >
          <p className="text-center">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
