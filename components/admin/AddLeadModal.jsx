"use client";

import { useState } from "react";
import LeadForm from "@/components/admin/LeadForm";

export default function AddLeadModal({ onLeadCreated }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleLeadCreated = () => {
    if (onLeadCreated) onLeadCreated();
    closeModal(); // Close the modal after lead creation
  };

  return (
    <>
      {/* Button to Open Modal */}
      <div className="mb-8">
        <button
          onClick={openModal}
          className="px-6 py-3 rounded bg-primary text-primary-foreground hover:bg-primary-dark transition"
        >
          + Add New Lead
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl font-bold mb-6 text-center">
              Add New Lead
            </h2>

            {/* LeadForm Component */}
            <LeadForm onLeadCreated={handleLeadCreated} />
          </div>
        </div>
      )}
    </>
  );
}
