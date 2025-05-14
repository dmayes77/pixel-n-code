// components/sections/ProcessSection.jsx

import React from "react";
import CloudImage from "@/components/ui/CloudImage";

// Background color classes for each step
const bgClasses = ["bg-primary", "bg-secondary", "bg-accent"];
// Spelled‑out ordinals for your steps
const ordinalLabels = ["First Step", "Second Step", "Third Step"];

export default function WebProcessSection({ content }) {
  
  return (
    <div className="flex flex-col laptop:flex-row ">
      {content.steps.map((step, idx) => (
        <div
          key={idx}
          className={
            `flex-1 prose mx-auto px-20 py-10 text-primary-foreground w-full ` +
            bgClasses[idx % bgClasses.length]
          }
        >
          <div className="max-w-md mx-auto">
            <CloudImage
              src={step.image.publicId}
              alt={step.title}
              objectFit="cover"
              ratio={16 / 9}
            />

            <p className="text-primary-foreground/70 h6 pt-6">
              {ordinalLabels[idx] || `Step ${idx + 1}`}
            </p>
            <p className="h3">{step.title}</p>
            <p className="font-semibold">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
