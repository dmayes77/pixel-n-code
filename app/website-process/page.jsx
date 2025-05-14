import WebProcessSection from "@/components/sections/pages/our-process/WebProcessSection";
import CTASection from "@/components/sections/shared/CTASection";
import * as pageContent from "@/content/pages/website-process";

export const metadata = pageContent.metadata;

export default function ProcessPage() {
  return (
    <>
      <div className="py-30 px-4 text-center  max-w-5xl mx-auto">
        <h2 className="text-secondary">Our Website Process</h2>
        <p className="text-gray-500 font-semibold">
          There is no one-size-fits-all when it comes to websites because every
          single business is different in it’s own way. See our process to get a
          better understanding of what to expect when working with us.
        </p>
      </div>
      <WebProcessSection content={pageContent.processContent} />
      <CTASection content={pageContent.ctaContent} />
    </>
  );
}
