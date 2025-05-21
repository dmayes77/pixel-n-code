// components/sections/GoHighLevelForm.jsx
"use client";

import React from "react";
import Script from "next/script";

/**
 * Embeds a responsive GoHighLevel inline form via iframe and external script.
 *
 * @param {Object} props
 * @param {string} props.formId - The GoHighLevel form ID.
 * @param {number|string} props.height - Height of the iframe in pixels.
 * @param {string} props.title - Accessible title for the iframe.
 */
export default function ContactUsForm({
  formId = "YPXiwDtFHI2nOvZlslHj",
  height = 1200,
  title = "Contact Us Form",
}) {
  <script src="https://app.getcodemaze.com/js/form_embed.js"></script>;
  const iframeId = `inline-${formId}`;
  const heightPx = typeof height === "number" ? `${height}px` : height;

  return (
    <>
      {/* Centered container with max width */}
      {/* Centered container with fixed height */}
      <div
        className="w-full max-w-3xl mx-auto relative"
        style={{ height: heightPx }}
      >
        <iframe
          src={`https://link.getcodemaze.com/widget/form/${formId}`}
          id={iframeId}
          title={title}
          className="absolute inset-0 w-full h-full rounded-md border-0"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={title}
          data-height={heightPx}
          data-layout-iframe-id={iframeId}
          data-form-id={formId}
        ></iframe>

        <script src="https://app.getcodemaze.com/js/form_embed.js"></script>
        {/* Load the embed script after the page is interactive */}
        <Script
          src="https://link.getcodemaze.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </div>
    </>
  );
}
