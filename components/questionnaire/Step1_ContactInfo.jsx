// components/questionnaire/Step1_ContactInfo.jsx
import React from "react";

export default function Step1_ContactInfo({ data, setData }) {
  return (
    <div className="space-y-6">
      <label>
        <span className="block font-medium">Full Name</span>
        <input
          type="text"
          value={data.fullName || ""}
          onChange={(e) => setData((d) => ({ ...d, fullName: e.target.value }))}
          required
          placeholder="Jane Doe"
          className="mt-1 p-2 w-full border rounded"
        />
      </label>

      <label>
        <span className="block font-medium">
          Business Name <small>(optional)</small>
        </span>
        <input
          type="text"
          value={data.businessName || ""}
          onChange={(e) =>
            setData((d) => ({ ...d, businessName: e.target.value }))
          }
          placeholder="Acme Co."
          className="mt-1 p-2 w-full border rounded"
        />
      </label>

      {/* Email */}
      <label>
        <span className="block font-medium">Email Address</span>
        <input
          type="email"
          value={data.email || ""}
          onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
          required
          placeholder="you@example.com"
          className="mt-1 p-2 w-full border rounded"
        />
      </label>

      {/* Phone */}
      <label>
        <span className="block font-medium">Phone Number</span>
        <input
          type="tel"
          value={data.phone || ""}
          onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
          required
          placeholder="123-456-7890"
          className="mt-1 p-2 w-full border rounded"
        />
      </label>
    </div>
  );
}
