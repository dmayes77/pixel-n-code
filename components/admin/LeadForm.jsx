"use client";

import { useState } from "react";

const servicesOptions = [
  "Website Design",
  "Logo Design",
  "Print Material",
  "SEO (Search Engine Optimization)",
  "Photography",
  "Videography",
  "ClientFlow CRM Integration",
];

const budgetOptions = [
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$5,000",
  "$5,000+",
];

const timelineOptions = [
  "ASAP (rush project)",
  "1–2 months",
  "3–4 months",
  "Flexible",
];

export default function LeadForm({ onLeadCreated }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    servicesInterested: [],
    estimatedBudget: "",
    timeline: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMultiSelect = (e) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setForm({ ...form, servicesInterested: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("✅ Lead Created!");
        setForm({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          servicesInterested: [],
          estimatedBudget: "",
          timeline: "",
          notes: "",
        });
        if (onLeadCreated) onLeadCreated(); // Refresh leads table if needed
      } else {
        alert("❌ Failed to create lead.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ An unexpected error occurred.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-10">
      <h2 className="text-2xl font-bold mb-6">Add New Lead</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            name="businessName"
            placeholder="Business Name"
            value={form.businessName}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        {/* Services Interested */}
        <div>
          <label className="block mb-2 font-semibold">
            Services Interested
          </label>
          <select
            multiple
            value={form.servicesInterested}
            onChange={handleMultiSelect}
            className="w-full p-2 border rounded h-40"
          >
            {servicesOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-400 mt-1">
            Hold Ctrl (or Cmd) to select multiple services.
          </p>
        </div>

        {/* Budget and Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Estimated Budget</label>
            <select
              name="estimatedBudget"
              value={form.estimatedBudget}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Budget Range</option>
              {budgetOptions.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Estimated Timeline
            </label>
            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Timeline</option>
              {timelineOptions.map((timeline) => (
                <option key={timeline} value={timeline}>
                  {timeline}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <textarea
            name="notes"
            placeholder="Project Notes / Special Requests"
            value={form.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className={`px-8 py-3 rounded text-white ${
              loading ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"
            } transition`}
            disabled={loading}
          >
            {loading ? "Saving Lead..." : "Save Lead"}
          </button>
        </div>
      </form>
    </div>
  );
}
