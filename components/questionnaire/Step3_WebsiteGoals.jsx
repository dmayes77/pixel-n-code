// components/questionnaire/Step3_WebsiteGoals.jsx
"use client";

import React from "react";

/**
 * Step 3: Website Goals
 * Checkbox styling is centralized in globals.css via the `.checkbox` class.
 */
export default function Step3_WebsiteGoals({ data, setData }) {
  const purposeOptions = [
    "Lead generation",
    "Online booking",
    "Brand showcase",
    "E‑commerce",
    "Other",
  ];

  const togglePurpose = (option) => {
    const current = data.websitePurpose || [];
    if (current.includes(option)) {
      setData((d) => ({
        ...d,
        websitePurpose: current.filter((p) => p !== option),
        ...(option === "Other" ? { websitePurposeOther: "" } : {}),
      }));
    } else {
      setData((d) => ({ ...d, websitePurpose: [...current, option] }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Website Purpose */}
      <div>
        <span className="block font-medium mb-2">Website Purpose</span>
        <div className="grid grid-cols-2 gap-4">
          {purposeOptions.map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 checkbox"
                checked={(data.websitePurpose || []).includes(option)}
                onChange={() => togglePurpose(option)}
              />
              <span className="ml-2 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {data.websitePurpose && data.websitePurpose.includes("Other") && (
          <input
            type="text"
            value={data.websitePurposeOther || ""}
            onChange={(e) =>
              setData((d) => ({ ...d, websitePurposeOther: e.target.value }))
            }
            placeholder="Please specify"
            className="mt-2 p-2 w-full border rounded"
          />
        )}
      </div>

      {/* Primary CTA */}
      <label className="block">
        <span className="block font-medium">Primary Call-to-Action (CTA)</span>
        <input
          type="text"
          value={data.primaryCTA || ""}
          onChange={(e) =>
            setData((d) => ({ ...d, primaryCTA: e.target.value }))
          }
          required
          placeholder="e.g., 'Get a Free Quote'"
          className="mt-1 p-2 w-full border rounded"
        />
      </label>
    </div>
  );
}
