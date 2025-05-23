"use client";

import { useState } from "react";
import EditableField from "@/components/ui/EditableField";
import EditableSelectField from "@/components/ui/EditableSelectField";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Trash2 } from "lucide-react";

export default function LeadDetails({ lead }) {
  const router = useRouter();
  const [leadData, setLeadData] = useState(lead);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

useEffect(() => {
  if (leadData.updatedAt) {
    const date = new Date(leadData.updatedAt);
    setFormattedDate(date.toLocaleString());
  }
}, [leadData.updatedAt]);

  const updateField = async (field, value) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      if (!res.ok) throw new Error();
      setLeadData((p) => ({
        ...p,
        [field]: value,
        updatedAt: new Date().toISOString(),
      }));
      toast.success("Field updated");
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/leads/${lead.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      toast.success("Lead deleted");
      router.push("/admin/leads");
    } catch {
      toast.error("Delete failed");
      setDeleting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-6">
      {/* Back & Delete */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push("/admin/leads")}
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Leads
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="flex items-center gap-1 text-red-600 hover:text-red-800 disabled:opacity-50"
        >
          <Trash2 className="w-5 h-5" />
          {deleting ? "Deleting…" : "Delete Lead"}
        </button>
      </div>

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-4xl font-bold">
          {leadData.businessName || "No Business Name"}
        </h1>
        <p className="text-lg text-gray-600">
          {leadData.name || "No Contact Name"}
        </p>
        <p className="text-sm text-gray-400">
        Last Updated: {formattedDate || "Unknown"}
        </p>
      </div>

      {/* Sections */}
      <div className="grid gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-semibold mb-2">🏢 Business Info</h2>
          <EditableField
            label="Business Name"
            value={leadData.businessName}
            onSave={(v) => updateField("businessName", v)}
            autoFocusOnEdit
          />
          <EditableSelectField
            label="Estimated Budget"
            value={leadData.estimatedBudget}
            options={[
              "Under $1,000",
              "$1,000–$5,000",
              "$5,000–$10,000",
              "$10,000+",
            ]}
            onSave={(v) => updateField("estimatedBudget", v)}
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-semibold mb-2">📞 Contact Info</h2>
          <EditableField
            label="Contact Name"
            value={leadData.name}
            onSave={(v) => updateField("name", v)}
            autoFocusOnEdit
          />
          <EditableField
            label="Email"
            value={leadData.email}
            onSave={(v) => updateField("email", v)}
            autoFocusOnEdit
          />
          <EditableField
            label="Phone"
            value={leadData.phone}
            onSave={(v) => updateField("phone", v)}
            autoFocusOnEdit
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-semibold mb-2">📈 Project Details</h2>
          <EditableSelectField
            label="Timeline"
            value={leadData.timeline}
            options={[
              "ASAP (rush project)",
              "1-2 Weeks",
              "1 Month",
              "Flexible",
            ]}
            onSave={(v) => updateField("timeline", v)}
          />
          <EditableSelectField
            label="Services Interested"
            value={leadData.servicesInterested}
            options={[
              "Website Design",
              "SEO",
              "Photography",
              "Videography",
              "Logo Design",
              "Print Material",
            ]}
            onSave={(v) => updateField("servicesInterested", v)}
            multiple
          />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-semibold mb-2">📝 Notes</h2>
          <EditableField
            label="Notes"
            value={leadData.notes}
            onSave={(v) => updateField("notes", v)}
            multiline
            autoFocusOnEdit
          />
        </div>
      </div>

      {(saving || deleting) && (
        <div className="text-primary text-sm mt-4 animate-pulse">
          {deleting ? "Deleting lead…" : saving ? "Saving changes…" : null}
        </div>
      )}
    </div>
  );
}
