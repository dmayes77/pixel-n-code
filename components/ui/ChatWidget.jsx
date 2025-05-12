// components/ui/ChatWidget.jsx
"use client";

import React from "react";
import Script from "next/script";

/**
 * ChatWidget embeds the LeadConnectorHQ chat widget on your site.
 * Place <ChatWidget /> at the root of your app (e.g., in layout.jsx) to load it globally.
 */
export default function ChatWidget() {
  return (
    <>
      <Script
        id="leadconnector-chat"
        src="https://beta.leadconnectorhq.com/loader.js"
        strategy="afterInteractive"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="68218798bd14c52a46dd40c7"
      />
    </>
  );
}
