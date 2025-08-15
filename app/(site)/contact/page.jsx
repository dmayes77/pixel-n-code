import ContactSection from "@/components/sections/pages/contact/ContactSection";
import HeroSection from "@/components/sections/shared/HeroSection";
import * as pageContent from "../../content/pages/contact";

export const metadata = pageContent.metadata;

export default function ContactPage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <ContactSection content={pageContent.contactContent} />
    </>
  );
}
