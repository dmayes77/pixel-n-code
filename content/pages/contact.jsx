import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { businessInfo as business } from "@/content/globals";

export const metadata = {
  title: `Contact Us | ${business.name}`,
  description: `Get in touch with ${business.name} for custom web design quotes, project consultations, or general inquiries. Our team is ready to assist you!`,
};

export const heroContent = {
  headline: (
    <>
      Ready to{" "}
      <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
        Elevate
      </mark>{" "}
      Your Web Presence?
    </>
  ),
  subheadline:
    "Let’s discuss your project goals and craft a custom solution that scales with your business.",
  cta: { label: "Get in Touch", href: "/#contact" },
  secondaryCta: { label: "Request a Call", href: "/#contact" },
  announcement: {
    text: "Open Mon–Sat • 9 AM–6 PM EST",
    link: { label: "Book a Call", href: "/#contact" },
  },
  image: {
    url: "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1745798773/pixel-n-code/hero-images/pixel-contact.webp",
    publicId: "pixel-n-code/hero-images/pixel-contact",
    alt: "Person typing on laptop with chat widget visible, set in a modern office environment",
  },
};


export const contactContent = {
  title: "Get in Touch",
  subtitle:
    "Ready to start your project? Drop us a line or fill out the form below.",
  contactMethods: [
    { icon: FaPhone, label: "Phone", value: business.phone },
    { icon: FaEnvelope, label: "Email", value: business.email },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: `${business.address.city}, ${business.address.state}`,
    },
  ],
  formFields: [
    { name: "name", type: "text", placeholder: "Your Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "project", type: "text", placeholder: "Project Type" },
    { name: "budget", type: "text", placeholder: "Budget Range" },
    {
      name: "message",
      type: "textarea",
      placeholder: "Tell us more about your project",
    },
  ],
  buttonText: "Send Message",
  formAction: "/api/contact",
  formMethod: "POST",
};