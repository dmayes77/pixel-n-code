// app/(site)/layout.jsx
import MainLayout from "@/components/layouts/MainLayout";

export const metadata = {
  title: "Site",
  description: "Public website pages",
};

export default function SiteLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
