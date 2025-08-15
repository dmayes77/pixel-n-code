// app/layout.jsx
import {
  businessInfo as business,
  logo,
  metadata,
  structuredData,
} from "@/content/globals";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon / icons from your content config */}
        <link rel="icon" href={logo.logoOnly.url} />
        <link rel="apple-touch-icon" sizes="180x180" href={logo.logoOnly.url} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={logo.logoOnly.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={logo.logoOnly.url}
        />
        <link rel="canonical" href={business.website} />
        {/* JSON-LD structured data */}
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-gray-50 antialiased w-full overflow-x-hidden">
        {/* (site) layout will wrap actual pages; Root keeps global providers */}
        <Toaster position="top-center" richColors />
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
