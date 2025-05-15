"use client";

import { useState } from "react";

const serviceOptions = [
  { label: "Website Design", basePrice: 500 },
  { label: "Logo Design", basePrice: 300 },
  { label: "Print Material", basePrice: 200 },
  { label: "SEO (Search Engine Optimization)", basePrice: 400 },
  { label: "Photography", basePrice: 350 },
  { label: "Videography", basePrice: 600 },
  { label: "ClientFlow CRM Integration", basePrice: 750 },
];

const complexityOptions = [
  { label: "Basic (simple pages)", multiplier: 1 },
  { label: "Standard (custom UI/UX)", multiplier: 1.25 },
  { label: "Advanced (animations, complex CRM integration)", multiplier: 1.5 },
];

export default function PricingCalculator({ leadId, onSaved }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [complexity, setComplexity] = useState(complexityOptions[0]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const calculateTotal = () => {
    const baseTotal = selectedServices.reduce((sum, service) => {
      const found = serviceOptions.find((s) => s.label === service);
      return sum + (found?.basePrice || 0);
    }, 0);
    return baseTotal * complexity.multiplier;
  };

  const savePricing = async () => {
    if (!leadId) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/leads/${leadId}/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pricingEstimate: {
            selectedServices,
            complexity: complexity.label,
            estimatedTotal: calculateTotal(),
          },
        }),
      });

      if (res.ok) {
        if (onSaved) onSaved();
        alert("✅ Pricing estimate saved!");
      } else {
        alert("❌ Failed to save pricing estimate.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Unexpected error.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">Pricing Calculator</h2>

      {/* Services Selection */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Select Services</h3>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => (
            <button
              key={service.label}
              type="button"
              onClick={() => toggleService(service.label)}
              className={`px-4 py-2 text-sm rounded border ${
                selectedServices.includes(service.label)
                  ? "bg-primary text-primary-foreground"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>
      </div>

      {/* Complexity Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Select Project Complexity
        </h3>
        <select
          value={complexity.label}
          onChange={(e) =>
            setComplexity(
              complexityOptions.find((opt) => opt.label === e.target.value)
            )
          }
          className="w-full p-2 border rounded"
        >
          {complexityOptions.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Estimate */}
      <div className="text-center text-xl font-bold mt-6">
        Estimated Total: ${calculateTotal().toFixed(2)}
      </div>

      {/* Save Button */}
      <div className="text-center pt-4">
        <button
          onClick={savePricing}
          className={`px-8 py-3 rounded text-white ${
            loading ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"
          } transition`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Estimate"}
        </button>
      </div>
    </div>
  );
}
