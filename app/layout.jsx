// app/layout.jsx
import "@/styles/globals.css";
import { businessInfo as business, structuredData } from "@/content/globals";
import PWAUpdate from "@/components/pwa/PWAUpdate.client";
import PWADiagnostics from "@/components/pwa/PWADiagnostics.client";
import { PawPrint } from "lucide-react";

export const metadata = {
  title: {
    default: business.name, // ✅ no extra braces
    template: `%s | ${business.name || "Code Maze"}`, // optional: derives from business
  },
  description: business.description,
  manifest: "/manifest.webmanifest",
  alternates: { canonical: business.website },
};

export const viewport = {
  themeColor: "#0f172a",
  // optional: match user theme+  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#0f172a" },
  //   { media: "(prefers-color-scheme: dark)",  color: "#0f172a" }
  // ],
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

        {/* Local icons */}
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
        <PWAUpdate />
        <PWADiagnostics />
        {children}
      </body>
    </html>
  );
}
