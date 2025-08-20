// app/layout.jsx
import "@/styles/globals.css";
import { businessInfo as business, structuredData } from "@/content/globals";
import PWAUpdate from "@/components/pwa/PWAUpdate.client";
import PWADiagnostics from "@/components/pwa/PWADiagnostics.client";
// import { PawPrint } from "lucide-react"; // ← unused

export const metadata = {
  title: {
    default: business.name,
    template: `%s | ${business.name || "Code Maze"}`,
  },
  description: business.description,
  manifest: "/manifest.webmanifest",
  alternates: { canonical: business.website }, // ensure absolute URL
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    // ✅ Modern equivalent your linter asked for
    "mobile-web-app-capable": "yes",
  },
};

export const viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// If you absolutely need legacy iOS fullscreen/status bar styling,
// you can add this block—but some linters will flag it as non-standard:
// export const metadata = {
//   ...metadata,
//   appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: business.name }
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
