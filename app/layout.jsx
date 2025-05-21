// app/layout.jsx
import AppLayout from "@/components/layouts/AppLayout";
import {
  businessInfo as business,
  logo,
  metadata,
  structuredData,
} from "@/content/globals";
import { Toaster } from "sonner";
import "@/styles/globals.css";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <link rel="canonical" href={business.website}></link>
        {/* JSON‑LD structured data */}
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="bg-gray-50 antialiased w-full overflow-x-hidden">
        <Toaster position="top-center" richColors />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
