// components/GHLEmbed.jsx
'use client';

import React from 'react';
import Script from 'next/script';

/**
 * GHLEmbed
 *
 * Embeds GoHighLevel forms or generic widgets/calendars, ensuring no inline padding persists.
 *
 * Props:
 * - formId:    string  (the GHL form ID)
 * - embedId:   string  (generic container ID for calendars/widgets)
 * - scriptUrl: string  (URL to the GHL embed script)
 * - height:    number|string (iframe/container height, only for forms)
 * - title:     string  (accessible title for form iframes)
 */
export default function GHLEmbed({ formId, embedId, scriptUrl, height, title }) {
  // Form embed branch
  if (formId) {
    const placeholderId = `inline-${formId}`;
    const heightPx = typeof height === 'number' ? `${height}px` : height;

    return (
      <div
        id={placeholderId}
        className="w-full max-w-3xl mx-auto relative overflow-hidden"
        style={{ height: heightPx }}
        aria-label={title}
      >
        <iframe
          src={`https://app.getcodemaze.com/widget/form/${formId}`}
          id={placeholderId}
          title={title}
          scrolling="no"
          className="absolute inset-0 w-full h-full rounded-md border-0"
          style={{ overflow: 'hidden' }}
        />

        <Script
          src={scriptUrl}
          strategy="afterInteractive"
          
        />
      </div>
    );
  }

  // Generic embed (calendar/widget)
  return (
    <div id={embedId} className="w-full mx-auto">
      <Script src={scriptUrl} strategy="afterInteractive" />
    </div>
  );
}
