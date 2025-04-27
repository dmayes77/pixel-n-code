"use client";

import React from "react";

export default function ButtonContainer({ children, className = "" }) {
  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      {React.Children.map(children, (child) => (
        <div className="flex-1 mb-4 md:mb-0 md:mr-4 last:mr-0">{child}</div>
      ))}
    </div>
  );
}
