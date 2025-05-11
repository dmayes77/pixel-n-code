// components/questionnaire/Step2_BusinessOverview.jsx
import React from "react";

export default function Step2_BusinessOverview({ data, setData }) {
  return (
    <div className="space-y-6">
      {/* Business Summary */}
      <label className="block">
        <span className="block font-medium">Business Summary</span>
        <input
          type="text"
          value={data.businessSummary || ""}
          onChange={(e) =>
            setData((d) => ({ ...d, businessSummary: e.target.value }))
          }
          required
          placeholder="We provide luxury auto detailing and ceramic coatings."
          className="mt-1 p-2 w-full border rounded"
        />
      </label>

      {/* Unique Value Proposition */}
      <label className="block">
        <span className="block font-medium">Unique Value Proposition</span>
        <input
          type="text"
          value={data.uniqueValueProp || ""}
          onChange={(e) =>
            setData((d) => ({ ...d, uniqueValueProp: e.target.value }))
          }
          required
          placeholder="Our ceramic finish lasts twice as long as competitors’."
          className="mt-1 p-2 w-full border rounded"
        />
      </label>

      {/* Ideal Client Profile */}
      <label className="block">
        <span className="block font-medium">Ideal Client Profile</span>
        <input
          type="text"
          value={data.idealClient || ""}
          onChange={(e) =>
            setData((d) => ({ ...d, idealClient: e.target.value }))
          }
          required
          placeholder="Car enthusiasts aged 30–55 in Chattanooga."
          className="mt-1 p-2 w-full border rounded"
        />
      </label>
    </div>
  );
}
