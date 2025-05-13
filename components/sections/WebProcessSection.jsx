// components/sections/ProcessSection.jsx
"use client";

import React from "react";

// Background color classes for each step
const bgClasses = ["bg-primary", "bg-secondary", "bg-accent"];

export default function WebProcessSection({ content }) {
  return (
    <div className="flex flex-col laptop:flex-row">
      {content.steps.map((step, idx) => (
        <div
          key={idx}
          className={
            `flex-1 prose mx-auto p-18 text-primary-foreground ` +
            bgClasses[idx % bgClasses.length]
          }
        >
          <p className="h3">{step.title}</p>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
