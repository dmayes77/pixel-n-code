"use client";

import { useState } from "react";
import Toast from "@/components/ui/Toast";

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
  "1-2 Weeks",
  "1 Month",
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
  const [toast, setToast] = useState(null);

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
      const response = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setToast({ type: "success", message: "✅ Lead Created!" });
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
        if (onLeadCreated) onLeadCreated();
      } else {
        setToast({ type: "error", message: "❌ Failed to create lead." });
      }
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "❌ Unexpected error occurred." });
    }
    setLoading(false);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info div */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
            <input
              name="businessName"
              placeholder="Business Name"
              value={form.businessName}
              onChange={handleChange}
              className="p-2 border rounded w-full"
            />
          </div>
        </div>

        {/* Services Interested */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services Interested</h3>
          <select
            multiple
            value={form.servicesInterested}
            onChange={handleMultiSelect}
            className="w-full p-2 border rounded h-32"
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

        {/* Budget & Timeline div */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Project Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Estimated Budget
              </label>
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
              <label className="block mb-2 text-sm font-medium">
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
        </div>

        {/* Notes div */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Additional Notes</h3>
          <textarea
            name="notes"
            placeholder="Project Notes / Special Requests"
            value={form.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded h-24"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className={`flex items-center justify-center gap-2 px-8 py-3 rounded text-white ${
              loading ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"
            } transition`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                Saving...
              </>
            ) : (
              "Save Lead"
            )}
          </button>
        </div>
      </form>

      {/* Toast Notifications */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
