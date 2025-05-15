"use client";

import { useEffect, useState } from "react";
import LeadForm from "@/components/admin/LeadForm";
import LeadsTable from "@/components/admin/LeadsTable";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Fetch leads
  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      } else {
        console.error("Failed to fetch leads");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch leads on page load + when refreshTrigger changes
  useEffect(() => {
    fetchLeads();
  }, [refreshTrigger]);

  // Helper function to trigger refresh
  const refreshLeads = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">Manage Leads</h1>

      {/* Lead Creation Form */}
      <LeadForm onLeadCreated={refreshLeads} />

      {/* Leads Table */}
      <LeadsTable leads={leads} onLeadsUpdated={refreshLeads} />
    </div>
  );
}
