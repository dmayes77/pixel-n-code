import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
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
