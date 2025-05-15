"use client";

import { useState, useEffect } from "react";
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
  "1–2 months",
  "3–4 months",
  "Flexible",
];

export default function EditLeadModal({ lead, onLeadUpdated, onClose }) {
  const [form, setForm] = useState({ ...lead });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (lead) {
      setForm({ ...lead });
    }
  }, [lead]);

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
      const res = await fetch(`/api/admin/leads/${lead.id}/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setToast({ type: "success", message: "✅ Lead Updated!" });
        if (onLeadUpdated) onLeadUpdated();
        setTimeout(() => {
          if (onClose) onClose();
        }, 1200);
      } else {
        setToast({ type: "error", message: "❌ Failed to update lead." });
      }
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "❌ Unexpected error occurred." });
    }
    setLoading(false);
  };

  if (!lead) return null; // Don't render if no lead passed

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Lead</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name || ""}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            name="email"
            placeholder="Email Address"
            value={form.email || ""}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone || ""}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          <input
            name="businessName"
            placeholder="Business Name"
            value={form.businessName || ""}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Services Interested */}
        <div>
          <label className="block mb-2 font-semibold">
            Services Interested
          </label>
          <select
            multiple
            value={form.servicesInterested || []}
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

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Estimated Budget</label>
            <select
              name="estimatedBudget"
              value={form.estimatedBudget || ""}
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
              value={form.timeline || ""}
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
            value={form.notes || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded h-24"
          />
        </div>

        {/* Save Changes Button */}
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
              "Save Changes"
            )}
          </button>
        </div>
      </form>

      {/* Toast */}
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
