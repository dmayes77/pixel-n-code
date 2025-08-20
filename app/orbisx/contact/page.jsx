// app/orbisx/contact/page.jsx
import { Suspense } from "react";
import ContactForm from "@/components/orbisx/ConactForm";


export const metadata = {
  title: "OrbisX Discovery Form | Code Maze",
  description: "Start your OrbisX setup with a free discovery call.",
};

export default function ContactPage() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          OrbisX Discovery Form
        </h1>
        <p className="mt-2 text-slate-600">
          This form helps us understand your needs before our free discovery
          call. It only takes a couple minutes!
        </p>
        <Suspense fallback={<div>Loading form...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
