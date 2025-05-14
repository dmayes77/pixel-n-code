import { businessInfo as business } from "@/content/globals";

/**
 * Page content for the Website Process overview
 */
export const metadata = {
  title: `Our Process | Web Design and SEO Services in ${business.address.city}, ${business.address.state}`,
  description: `Discover the three-step approach ${business.name} uses—from discovery and proposal to design kickoff and development—ensuring a seamless, transparent site build experience.`,
};

export const processContent = {
  steps: [
    {
      title: "Discovery & Proposal",
      description: `We begin with a conversation—phone call, video chat, or in-person meeting—where we explore your goals, audience, and desired website features. We'll review any existing site you have, sketch out a clear sitemap, and present a detailed proposal covering scope, timeline, and investment. Once you approve the proposal and submit your deposit, we lock in your start date and prepare for the design phase.`,
      image: {
        publicId: "pixel-n-code/content-images/step_discovery-proposal",
        alt: "Step Discovery & Proposal",
      },
    },
    {
      title: "Design Kickoff",
      description: `After the proposal is signed, we collect all the brand assets we need—logos, colors, photos, and any login credentials. Our design team creates a moodboard to establish the visual direction, then delivers a polished homepage mockup for your review. With your feedback, we refine the design before moving on to the inner pages, ensuring every page aligns with your brand and objectives before development begins.`,
      image: {
        publicId: "pixel-n-code/content-images/step_design-kickoff",
        alt: "Step Design Kickoff",
      },
    },
    {
      title: "Development & Launch",
      description: `With designs approved, we build your site in a secure staging environment—writing clean, responsive code, integrating any custom functionality, and optimizing for performance and SEO. You'll get a private staging link to test every feature. Once you give final approval and complete the remaining payment, we launch your site live and provide a comprehensive walkthrough of the CMS along with post-launch support to ensure a smooth transition.`,
      image: {
        publicId: "pixel-n-code/content-images/step_development-launch",
        alt: "Step Development & Launch",
      },
    },
  ],
};

// content/ctaContent.js
export const ctaContent = {
  title: "Ready to launch your next project?",
  subtitle: "Let’s collaborate to build a custom website that drives results.",
  description: `Get in Touch  
We love working with local businesses. So if you’re in need of a local resource for anything design or tech related, we’d love to chat. We offer free consultations, so it’s as quick as hopping on a call to see if we might be the right fit for your next project.`,
  buttonText: "Start My Project",
  buttonLink: "/contact",
  bgColor: "bg-secondary-foreground",
  textColor: "text-secondary",
};

export default { metadata, processContent };
