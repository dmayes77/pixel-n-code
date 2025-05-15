"use client";

import { useState } from "react";
import { Pencil, Check, X } from "lucide-react";

export default function EditableSelectField({
  label,
  value,
  options,
  onSave,
  multiple = false,
}) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onSave(tempValue);
    setEditing(false);
  };

  const handleCancel = () => {
    setTempValue(value);
    setEditing(false);
  };

  const handleChange = (e) => {
    if (multiple) {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      setTempValue(selectedOptions);
    } else {
      setTempValue(e.target.value);
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <h2 className="mb-1! text-lg font-semibold">{label}</h2>
        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="text-primary hover:underline"
          >
            <Pencil className="w-4 h-4" />
          </button>
        )}
      </div>

      {editing ? (
        <div className="flex items-center gap-4 mt-2">
          <select
            multiple={multiple}
            value={tempValue}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={handleSave} className="text-green-600">
            <Check className="w-5 h-5" />
          </button>
          <button onClick={handleCancel} className="text-red-600">
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <p className="text-gray-700">
          {Array.isArray(value) ? value.join(", ") : value || "No information"}
        </p>
      )}
    </div>
  );
}
