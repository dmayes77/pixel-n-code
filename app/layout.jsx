// app/layout.jsx
import "@/styles/globals.css";

// NOTE: don't import `metadata` here to avoid a name clash
import {
  businessInfo as business,
  logo,
  structuredData,
} from "@/content/globals";

export const metadata = {
  title: { default: "Your Brand", template: "%s | Your Brand" },
  description: "Public website.",
  manifest: "/manifest.webmanifest",
  themeColor: "#0f172a",
  alternates: { canonical: business.website }, // canonical via metadata
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* iOS PWA friendliness */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* Use your generated PWA icon if you created it; fallback to logo URL is fine */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
      
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16.png"
        />

        {/* JSON-LD structured data */}
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-gray-50 antialiased w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
