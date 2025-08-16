// app/(site)/layout.jsx
import MainLayout from "@/components/layout/MainLayout";
import InstallButton from "@/components/pwa/InstallButton.client";
import EnablePushButton from "@/components/push/EnablePushButton.client";
import ForegroundMessages from "@/components/push/ForegroundMessages.client";

export const metadata = {
  title: "TN Website Design",
};

export default function SiteLayout({ children }) {
  return (
    <MainLayout
      rightSlot={
        <div className="flex items-center gap-2">
          <InstallButton label="Install Our App" />
          <EnablePushButton label="Enable Notifications" />
        </div>
      }
    >
      <ForegroundMessages />
      {children}
    </MainLayout>
  );
}
