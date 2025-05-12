// app/questionnaire/thank-you/page.jsx

import Link from "next/link";
import { businessInfo as business } from "@/content/globals";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <h2 className="mb-4 text-3xl font-extrabold">
        Thank You for Completing Our Design Questionnaire!
      </h2>
      <h3 className="text-xl mb-6">
        You’re One Step Closer to a Website That Works for You
      </h3>

      <p className="text-gray-700 mb-4">
        Thank you for taking the time to share your vision with {business.name}.
        We’ve received your responses and our team is reviewing them now.
      </p>

      <p className="text-gray-700 mb-4">
        You can expect to hear from one of our consultants within 24 business
        hours to review your answers and schedule your free strategy call.
      </p>

      <p className="text-gray-700 mb-8">
        In the meantime, if you have any questions or need immediate assistance,
        call us at{" "}
        <a
          href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`}
          className="text-primary underline"
        >
          {business.phone}
        </a>{" "}
        or email{" "}
        <a href={`mailto:${business.email}`} className="text-primary underline">
          {business.email}
        </a>
        .
      </p>

      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href="/schedule"
            className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-md border border-primary hover:bg-primary/10 hover:text-primary"
          >
            Schedule a Call
          </Link>
        </Button>
      </div>
    </section>
  );
}
