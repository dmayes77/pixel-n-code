// next.config.mjs
import withPWA from "next-pwa";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Workbox runtime caching used by next-pwa
 * - Navigations (HTML): NetworkFirst -> fresh when online, works offline
 * - Next static: CacheFirst
 * - Images (incl. Cloudinary + your /images rewrite): StaleWhileRevalidate
 * - Videos (your /videos rewrite): StaleWhileRevalidate
 * - Fonts (Google): CacheFirst
 * - Same-origin GET /api/* (future-proof): StaleWhileRevalidate
 */
const runtimeCaching = [
  // Page navigations / HTML
  {
    urlPattern: ({ request }) => request.mode === "navigate",
    handler: "NetworkFirst",
    options: {
      cacheName: "html-cache",
      networkTimeoutSeconds: 10,
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 },
    },
  },
  // Next.js static assets
  {
    urlPattern: /\/_next\/static\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheName: "next-static-cache",
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 },
    },
  },
  // Images (remote + your /images/* rewrite)
  {
    urlPattern: ({ request, url }) =>
      request.destination === "image" ||
      /^https:\/\/res\.cloudinary\.com\//i.test(url.href) ||
      /^\/images\//i.test(url.pathname),
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "image-cache",
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 200, maxAgeSeconds: 14 * 24 * 60 * 60 },
    },
  },
  // Videos (your /videos/* rewrite)
  {
    urlPattern: ({ request, url }) =>
      request.destination === "video" || /^\/videos\//i.test(url.pathname),
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "video-cache",
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 },
    },
  },
  // Google Fonts
  {
    urlPattern: /https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheName: "font-cache",
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 50, maxAgeSeconds: 365 * 24 * 60 * 60 },
    },
  },
  // Same-origin GET /api/* (if you add any later)
  {
    urlPattern: /\/api\/.*/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "api-cache",
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 },
    },
  },
  {
    urlPattern: ({ url, request }) =>
      url.origin === self.location.origin &&
      url.pathname.startsWith("/api/contact") &&
      request.method === "POST",
    handler: "NetworkOnly",
    options: {
      backgroundSync: {
        name: "contact-queue",
        options: { maxRetentionTime: 60 * 24 }, // minutes
      },
    },
  },
];

const withPWACfg = withPWA({
  dest: "public",
  disable: isDev, // enable PWA only in production by default
  register: true, // auto-inject SW registration
  skipWaiting: true, // take over as soon as a new SW is available
  runtimeCaching,
  fallbacks: {
    document: "/offline", // make sure app/offline/page.jsx exists
    image: "/icons/icon-192.png",
  },
  buildExcludes: [/middleware-manifest\.json$/],
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWACfg({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  images: {
    remotePatterns: [
      // tightened patterns (still cover your current usage)
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination:
          "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/wheel-doctor/:path*",
      },
      {
        source: "/videos/:path*",
        destination:
          "https://res.cloudinary.com/mayes-auto-detailing-llc/video/upload/mad-web-app/videos/:path*",
      },
    ];
  },

  async headers() {
    return [];
  },
});

export default nextConfig;
