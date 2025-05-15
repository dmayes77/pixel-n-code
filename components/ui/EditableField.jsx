"use client";

import { useState } from "react";
import { Pencil, Check, X } from "lucide-react";

export default function EditableField({
  label,
  value,
  onSave,
  multiline = false,
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
          {multiline ? (
            <textarea
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 w-full rounded"
              rows={4}
            />
          ) : (
            <input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="border p-2 w-full rounded"
            />
          )}

          <button onClick={handleSave} className="text-green-600">
            <Check className="w-5 h-5" />
          </button>
          <button onClick={handleCancel} className="text-red-600">
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <p className="text-gray-700">{value || "No information"}</p>
      )}
    </div>
  );
}
