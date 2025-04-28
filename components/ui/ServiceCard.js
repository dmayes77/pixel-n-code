"use client";

import { useState } from "react";

export default function ServiceCard({ service }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="perspective group cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-64 transition-transform duration-700 transform-style preserve-3d ${
          isFlipped
            ? "rotate-y-180"
            : "group-hover:rotate-y-180 group-hover:rotate-x-3"
        }`}
      >
        {/* Front side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 backface-hidden">
          <div className="text-primary mb-4">
            <Icon size={56} />
          </div>
          <h3 className="text-xl text-center font-semibold text-gray-800">
            {service.title}
          </h3>

          {/* Mobile tap hint */}
          <p className="mt-2 text-xs text-gray-400 italic tablet:hidden">
            Tap to flip
          </p>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary text-white rounded-xl shadow-md p-6 rotate-y-180 backface-hidden">
          <p className="text-center">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
