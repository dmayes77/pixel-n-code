export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>

      <p className="mb-4">
        At Code Maze Web Design, we respect your privacy and are committed to
        protecting the personal information you share with us. This Privacy
        Policy explains how we collect, use, and safeguard your information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Information We Collect
      </h2>
      <p className="mb-4">
        When you interact with our website, contact forms, or booking tools, we
        may collect the following personal data:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Any information you voluntarily provide in a form or message</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        How We Use Your Information
      </h2>
      <p className="mb-4">We use the data you provide to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Confirm and remind you of appointments</li>
        <li>Send promotional updates via SMS or email (if you opt in)</li>
        <li>Respond to your inquiries and support requests</li>
        <li>Improve our services and website experience</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">SMS Communications</h2>
      <p className="mb-4">
        By submitting your contact information through our website or forms, you
        consent to receive SMS messages from Code Maze Web Design related to
        appointment confirmations, reminders, and occasional promotions. Message
        frequency may vary. Message and data rates may apply.
      </p>
      <p className="mb-4">
        You may opt out of SMS communications at any time by replying{" "}
        <strong>STOP</strong>. For help, reply <strong>HELP</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Data Sharing</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. We may share your information
        with trusted service providers (such as SMS or CRM platforms) strictly
        for the purpose of delivering communications or managing appointments.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security practices to protect your data.
        While no system is completely secure, we strive to ensure your
        information is safe.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">
        You may request to access, correct, or delete your personal information
        by contacting us at{" "}
        <a
          href="mailto:info@getcodemaze.com"
          className="text-blue-600 hover:underline"
        >
          info@getcodemaze.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Policy Updates</h2>
      <p className="mb-4">
        This Privacy Policy may be updated occasionally. The latest version will
        always be available at this page.
      </p>

      <p className="mt-8 text-sm text-gray-500">Last updated: May 2025</p>
    </main>
  );
}
