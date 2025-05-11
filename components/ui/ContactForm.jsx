// components/sections/GoHighLevelForm.jsx
"use client";

import React from "react";
import Script from "next/script";

/**
 * Embeds a GoHighLevel inline form via iframe and external script.
 *
 * @param {Object} props
 * @param {string} props.formId - The GoHighLevel form ID.
 * @param {string} props.height - Height of the iframe in pixels.
 * @param {string} props.title - Accessible title for the iframe.
 */
export default function ContactUsForm({
  formId = "YPXiwDtFHI2nOvZlslHj",
  height = "856",
  title = "Contact Us Form",
}) {
  const iframeId = `inline-${formId}`;
  return (
    <>
      <div className="w-full" style={{ height: `${height}px` }}>
        <iframe
          src={`https://link.getcodemaze.com/widget/form/${formId}`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "3px",
          }}
          id={iframeId}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={title}
          data-height={height}
          data-layout-iframe-id={iframeId}
          data-form-id={formId}
          title={title}
        />
      </div>
      <Script
        src="https://link.getcodemaze.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
