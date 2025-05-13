import { businessInfo as business } from "@/content/globals";

/**
 * Page content for the Website Process overview
 */
export const metadata = {
  title: `Our Process | Web Design and SEO Services in ${business.address.city}, ${
    business.address.state}`,
  description: `Discover the three-step approach ${business.name} uses—from discovery and proposal to design kickoff and development—ensuring a seamless, transparent site build experience.`,
};

export const processContent = {
  steps: [
    {
      title: "Step 1: Discovery & Proposal",
      description: `We begin with a conversation—phone call, video chat, or in-person meeting—where we explore your goals, audience, and desired website features. We'll review any existing site you have, sketch out a clear sitemap, and present a detailed proposal covering scope, timeline, and investment. Once you approve the proposal and submit your deposit, we lock in your start date and prepare for the design phase.`,
    },
    {
      title: "Step 2: Design Kickoff",
      description: `After the proposal is signed, we collect all the brand assets we need—logos, colors, photos, and any login credentials. Our design team creates a moodboard to establish the visual direction, then delivers a polished homepage mockup for your review. With your feedback, we refine the design before moving on to the inner pages, ensuring every page aligns with your brand and objectives before development begins.`,
    },
    {
      title: "Step 3: Development & Launch",
      description: `With designs approved, we build your site in a secure staging environment—writing clean, responsive code, integrating any custom functionality, and optimizing for performance and SEO. You'll get a private staging link to test every feature. Once you give final approval and complete the remaining payment, we launch your site live and provide a comprehensive walkthrough of the CMS along with post-launch support to ensure a smooth transition.`,
    },
  ],
};

export default { metadata, processContent };
