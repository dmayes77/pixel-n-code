"use client";

import { useEffect, useState } from "react";
import LeadsTable from "@/components/admin/LeadsTable";
import AddLeadModal from "@/components/admin/AddLeadModal";
import LeadsSkeleton from "@/components/admin/LeadsSkeleton";

export default function AdminHomePage() {
  const [leads, setLeads] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/admin/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      } else {
        console.error("Failed to fetch leads");
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [refreshTrigger]);

  const refreshLeads = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10">Manage Leads</h1>

      {/* Add New Lead Modal */}
      <AddLeadModal onLeadCreated={refreshLeads} />

      {/* Leads Table */}
      {leads.length === 0 ? (
        <LeadsSkeleton />
      ) : (
        <LeadsTable leads={leads} onLeadsUpdated={refreshLeads} />
      )}
    </div>
  );
}
