// app/(orbisx)/layout.jsx
import OrbisXLayout from "@/components/layout/OrbisXLayout";

export const metadata = {
  title: "OrbisX Subscriber Portal | Code Maze",
  description: "Exclusive resources and tools for OrbisX subscribers.",
  robots: { index: false, follow: false }, // keep private-ish
  alternates: { canonical: "/orbisx" },
};

export default function OrbisXRootLayout({ children }) {
  return <OrbisXLayout>{children}</OrbisXLayout>;
}
