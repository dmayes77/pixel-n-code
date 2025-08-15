// app/(site)/layout.jsx
import MainLayout from "@/components/layout/MainLayout";
import ServiceWorkerRegister from "@/components/pwa/ServiceWorkerRegister.client";

export const metadata = {
  title: "Site",
  description: "Public website pages",
};

export default function SiteLayout({ children }) {
  return (
    <MainLayout>
      <ServiceWorkerRegister />
      {children}
    </MainLayout>
  );
}
