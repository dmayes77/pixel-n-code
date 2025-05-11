// components/questionnaire/Step4_BrandingStyle.jsx
"use client";

import React from "react";

export default function Step4_BrandingStyle({ data, setData }) {
  // Handle logo availability selection
  const handleLogoChange = (e) => {
    const value = e.target.value;
    setData((d) => ({
      ...d,
      logoAvailability: value,
      logoFile: value === "upload" ? d.logoFile : null,
    }));
  };

  // File input handlers
  const handleFileChange = (field) => (e) => {
    const file = e.target.files[0];
    setData((d) => ({ ...d, [field]: file }));
  };

  // Handle inspiration sites updates
  const handleSiteChange = (index, field) => (e) => {
    const sites = data.inspirationSites || [];
    const updated = [...sites];
    updated[index] = { ...updated[index], [field]: e.target.value };
    setData((d) => ({ ...d, inspirationSites: updated }));
  };

  return (
    <div className="space-y-6">
      {/* Logo Availability */}
      <div>
        <span className="block font-medium mb-2">
          Do you have an existing logo?
        </span>
        <div className="flex space-x-6">
          {[
            { label: "Yes, I'll upload it", value: "upload" },
            { label: "No, I need one", value: "none" },
            { label: "In progress", value: "inProgress" },
          ].map((opt) => (
            <label key={opt.value} className="inline-flex items-center">
              <input
                type="radio"
                name="logoAvailability"
                value={opt.value}
                checked={data.logoAvailability === opt.value}
                onChange={handleLogoChange}
                className="h-4 w-4 checkbox"
              />
              <span className="ml-2 text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
        {data.logoAvailability === "upload" && (
          <div className="mt-4">
            <label className="block">
              <span className="font-medium">Upload Your Logo</span>
              <input
                type="file"
                accept=".jpg,.png,.pdf"
                onChange={handleFileChange("logoFile")}
                className="mt-1 w-full border border-gray-300 rounded"
              />
            </label>
          </div>
        )}
      </div>

      {/* Brand Colors & Fonts */}
      <div>
        <label className="block">
          <span className="block font-medium">
            Do you have brand colors or fonts?
          </span>
          <input
            type="text"
            value={data.brandColorsFonts || ""}
            onChange={(e) =>
              setData((d) => ({ ...d, brandColorsFonts: e.target.value }))
            }
            placeholder="#FF6600, #333333; Roboto, Lora"
            className="mt-1 p-2 w-full border rounded"
          />
        </label>
        <label className="block mt-4">
          <span className="block font-medium">
            Upload brand guidelines (optional)
          </span>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange("brandGuidelinesFile")}
            className="mt-1 w-full border border-gray-300 rounded"
          />
        </label>
      </div>

      {/* Design Vibe */}
      <label className="block">
        <span className="block font-medium">
          What kind of design or “vibe” do you want?
        </span>
        <input
          type="text"
          value={data.designVibe || ""}
          onChange={(e) =>
            setData((d) => ({ ...d, designVibe: e.target.value }))
          }
          placeholder="e.g., Modern, luxury, clean, bold, fun"
          className="mt-1 p-2 w-full border rounded"
        />
      </label>

      {/* Inspiration Sites */}
      <div>
        <span className="block font-medium mb-2">
          List up to 3 websites you like and explain why:
        </span>
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-2 mb-4">
            <label className="block">
              <span className="text-sm font-medium">Website URL #{i + 1}</span>
              <input
                type="url"
                value={data.inspirationSites?.[i]?.url || ""}
                onChange={handleSiteChange(i, "url")}
                placeholder="https://example.com"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Why you like it</span>
              <input
                type="text"
                value={data.inspirationSites?.[i]?.reason || ""}
                onChange={handleSiteChange(i, "reason")}
                placeholder="Clean layout and bold typography"
                className="mt-1 p-2 w-full border rounded"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
