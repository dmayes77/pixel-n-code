import { logo } from "@/content/globals";
import CloudImage from "@/components/ui/CloudImage";
import HeroSection from "@/components/sections/HeroSection";
import * as pageContent from "../../content/pages/contact";
import ContactSection from "@/components/sections/ContactSection";
import { Contact } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <HeroSection content={pageContent.heroContent} />
      <ContactSection content={pageContent.contactContent} />
      content
    </>
  );
}
