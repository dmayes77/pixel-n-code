"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phoneNumber: "",
    email: "",
    website: "",
    orbisxUrl: "",
    serviceInterest: "",
    servicesOffered: "",
    hasOrbisX: "",
    goals: "",
    agreed: false,
  });

  const [error, setError] = useState("");
  const calendlyRedirect =
    "https://calendly.com/getcodemaze/orbisx-discovery-meeting";

  // 🔁 Prepopulate serviceInterest from URL
  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: service,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      setError("Please confirm your acknowledgment before continuing.");
      return;
    }

    try {
      const res = await fetch("/api/orbisx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        setError("Something went wrong sending your info. Please try again.");
        return;
      }

      router.push(calendlyRedirect);
    } catch (err) {
      console.error("Form submission failed:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium">Your Name *</label>
        <input
          name="name"
          type="text"
          required
          onChange={handleChange}
          value={formData.name}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Business Name *</label>
        <input
          name="businessName"
          type="text"
          required
          onChange={handleChange}
          value={formData.businessName}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email Address *</label>
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={formData.email}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone Number *</label>
        <input
          name="phoneNumber"
          type="email"
          required
          onChange={handleChange}
          value={formData.email}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Website or Business Domain
        </label>
        <input
          name="website"
          type="url"
          onChange={handleChange}
          value={formData.website}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          OrbisX Booking Page URL *
        </label>
        <input
          name="orbisxUrl"
          type="url"
          required
          onChange={handleChange}
          value={formData.orbisxUrl}
          placeholder="https://orbisx.ca/app/booknow/..."
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Which service are you interested in?
        </label>
        <select
          name="serviceInterest"
          onChange={handleChange}
          value={formData.serviceInterest}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        >
          <option value="">Select...</option>
          <option value="Quick Start">Quick Start</option>
          <option value="Custom Setup">Custom Setup</option>
          <option value="Custom Booking Page">Companion App</option>
          <option value="1:1 Setup Check">1:1 Setup Check</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">
          What services do you offer?
        </label>
        <textarea
          name="servicesOffered"
          rows="2"
          onChange={handleChange}
          value={formData.servicesOffered}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Have you already started using OrbisX?
        </label>
        <select
          name="hasOrbisX"
          onChange={handleChange}
          value={formData.hasOrbisX}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        >
          <option value="">Select...</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">
          What are your biggest goals or frustrations?
        </label>
        <textarea
          name="goals"
          rows="3"
          onChange={handleChange}
          value={formData.goals}
          className="mt-1 w-full rounded border-gray-300 shadow-sm"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="agreed"
          checked={formData.agreed}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm">
          I understand this is a free discovery call to explore options before
          purchase.
        </label>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="rounded bg-primary px-5 py-2 text-white hover:bg-primary/90"
      >
        Continue to Schedule Your Call →
      </button>
    </form>
  );
}
