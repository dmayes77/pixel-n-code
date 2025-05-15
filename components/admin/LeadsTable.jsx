"use client";

import EditLeadModal from "@/components/admin/EditLeadModal";
import PricingCalculator from "@/components/admin/PricingCalculator";
import Toast from "@/components/ui/Toast";
import { useState } from "react";

export default function LeadsTable({ leads = [], onLeadsUpdated }) {
  const [loadingId, setLoadingId] = useState(null);
  const [editingLead, setEditingLead] = useState(null);
  const [toast, setToast] = useState(null);
  const [pricingLead, setPricingLead] = useState(null);

  const deleteLead = async (id) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    setLoadingId(id);
    try {
      const res = await fetch(`/api/admin/leads/${id}/delete`, {
        method: "DELETE",
      });
      if (res.ok) {
        setToast({ type: "success", message: "✅ Lead Deleted!" });
        onLeadsUpdated();
      } else {
        setToast({ type: "error", message: "❌ Failed to delete lead." });
      }
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "❌ Unexpected error occurred." });
    }
    setLoadingId(null);
  };

  return (
    <>
      {/* Only render EditLeadModal if editing */}
      {editingLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setEditingLead(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>
            <EditLeadModal
              lead={editingLead}
              onLeadUpdated={() => {
                setEditingLead(null);
                onLeadsUpdated();
              }}
              onClose={() => setEditingLead(null)}
            />
          </div>
        </div>
      )}

      {pricingLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setPricingLead(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>
            <PricingCalculator
              leadId={pricingLead.id}
              onSaved={() => {
                setPricingLead(null);
                onLeadsUpdated();
              }}
            />
          </div>
        </div>
      )}

      {/* Leads Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-md text-[0.75rem]">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Business</th>
              <th className="p-4 text-left">Services</th>
              <th className="p-4 text-left">Budget</th>
              <th className="p-4 text-left">Timeline</th>
              <th className="p-4 text-left">Created</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.length > 0 ? (
              leads
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((lead) => (
                  <tr key={lead.id} className="border-t">
                    <td className="p-4">{lead.name}</td>
                    <td className="p-4">{lead.email}</td>
                    <td className="p-4">{lead.phone || "-"}</td>
                    <td className="p-4">{lead.businessName || "-"}</td>
                    <td className="p-4">
                      {lead.servicesInterested?.length
                        ? lead.servicesInterested.join(", ")
                        : "-"}
                    </td>
                    <td className="p-4">{lead.estimatedBudget || "-"}</td>
                    <td className="p-4">{lead.timeline || "-"}</td>
                    <td className="p-4 text-sm text-gray-500">
                      {lead.createdAt
                        ? new Date(
                            lead.createdAt.seconds * 1000
                          ).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="p-4 flex items-center gap-2">
                      <button
                        onClick={() => setPricingLead(lead)}
                        className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700 transition"
                      >
                        Pricing
                      </button>
                      {/* Edit Button */}
                      <button
                        onClick={() => setEditingLead(lead)}
                        className="px-3 py-1 text-xs rounded bg-secondary text-secondary-foreground hover:bg-secondary-dark transition"
                      >
                        Edit
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className={`px-3 py-1 text-xs rounded bg-red-600 text-white hover:bg-red-700 transition ${
                          loadingId === lead.id
                            ? "opacity-50 pointer-events-none"
                            : ""
                        }`}
                        disabled={loadingId === lead.id}
                      >
                        {loadingId === lead.id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center text-gray-500 p-6">
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Toast Notifications */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
