// components/sections/GoHighLevelForm.jsx
"use client";

import React from "react";
import GHLEmbed from "./GHLEmbed";

export default function ContactUsForm({ formId = "YPXiwDtFHI2nOvZlslHj", embedId = "contact-us-form", height = 1200, title = "Contact Us Form" }) {
  return (
    <div className="w-full" style={{ height: typeof height === "number" ? `${height}px` : height }}>
      <GHLEmbed formId={formId} embedId={embedId} title={title} scriptUrl="https://app.getcodemaze.com/js/form_embed.js" height={height} />
    </div>
  );
}
