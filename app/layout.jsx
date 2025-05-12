// app/layout.jsx
import "@/styles/globals.css";
import { metadata, structuredData, logo } from "@/content/globals";
import AppLayout from "@/components/layouts/AppLayout";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum‑scale=1.0, user‑scalable=no"
        />
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
        {/* This is a Server Component placeholder */}
        {/* AppRouter will hydrate the client layout here */}
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
