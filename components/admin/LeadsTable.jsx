"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown, Trash2, GitMerge } from "lucide-react";
import { toast } from "sonner";

export default function LeadsTable({ leads, onLeadsUpdated }) {
  const router = useRouter();

  // UI state
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("businessName");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selected, setSelected] = useState([]);

  // 1) Filter by search
  const filtered = useMemo(() => {
    return (
      leads
        .filter((l) => {
          const hay =
            `${l.businessName} ${l.name} ${l.email} ${l.phone}`.toLowerCase();
          return hay.includes(search.toLowerCase());
        })
        // 2) Sort by sortField & sortDirection
        .sort((a, b) => {
          const A = (a[sortField] || "").toLowerCase();
          const B = (b[sortField] || "").toLowerCase();
          if (A < B) return sortDirection === "asc" ? -1 : 1;
          if (A > B) return sortDirection === "asc" ? 1 : -1;
          return 0;
        })
    );
  }, [leads, search, sortField, sortDirection]);

  // 3) Select‑all checkbox logic
  const allIds = filtered.map((l) => l.id);
  const allSelected = allIds.length > 0 && selected.length === allIds.length;
  const partiallySelected =
    selected.length > 0 && selected.length < allIds.length;
  const selectAllRef = useRef(null);
  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = partiallySelected;
    }
  }, [partiallySelected]);

  const toggleAll = () =>
    setSelected((s) =>
      s.length === allIds.length ? [] : [...new Set([...s, ...allIds])]
    );
  const toggleOne = (id) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );

  // 4) Toolbar actions
  const isActive = selected.length > 0;

  const handleDelete = async () => {
    if (!isActive) return;
    if (!confirm(`Delete ${selected.length} lead(s)?`)) return;
    try {
      const res = await fetch("/api/admin/leads", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selected }),
      });
      if (res.ok) {
        toast.success("Leads deleted!");
        setSelected([]);
        onLeadsUpdated();
      } else {
        throw new Error(await res.text());
      }
    } catch (e) {
      console.error(e);
      toast.error("Failed to delete leads");
    }
  };

  const handleMerge = () => {
    if (selected.length < 2) {
      toast.error("Select at least two to merge");
      return;
    }
    toast(`Merge not implemented yet: ${selected.join(", ")}`);
  };

  // 5) Sorting headers
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-4">
      {/* Action toolbar + search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={handleDelete}
            disabled={!isActive}
            className={`flex items-center cursor-pointer gap-1 ${
              isActive ? "text-red-600" : "text-gray-400"
            }`}
            title="Delete"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            onClick={handleMerge}
            disabled={!isActive}
            className={`flex items-center cursor-pointer gap-1 ${
              isActive ? "text-blue-600" : "text-gray-400"
            }`}
            title="Merge"
          >
            <GitMerge className="w-5 h-5" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Search leads..."
          className="border rounded px-3 py-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Leads table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold">
              <th className="p-2">
                <input
                  type="checkbox"
                  ref={selectAllRef}
                  checked={allSelected}
                  onChange={toggleAll}
                />
              </th>
              {[
                { key: "businessName", label: "Business Name" },
                { key: "name", label: "Contact Name" },
                { key: "email", label: "Email" },
                { key: "phone", label: "Phone" },
              ].map((col) => (
                <th
                  key={col.key}
                  className="p-2 cursor-pointer select-none"
                  onClick={() => handleSort(col.key)}
                >
                  {col.label}{" "}
                  {sortField === col.key &&
                    (sortDirection === "asc" ? (
                      <ChevronUp className="inline w-4 h-4" />
                    ) : (
                      <ChevronDown className="inline w-4 h-4" />
                    ))}
                </th>
              ))}
              <th className="p-2">Services</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((lead) => (
              <tr
                key={lead.id}
                onClick={() => router.push(`/admin/leads/${lead.id}`)}
                className={`
                    cursor-pointer border-t
                     ${
                       selected.includes(lead.id)
                         ? "bg-accent/10" /* selected → 10% accent bg */
                         : "hover:bg-gray-50" /* otherwise hover state */
                     }
                   `}
              >
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(lead.id)}
                    onChange={() => toggleOne(lead.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                <td className="p-2">{lead.businessName || "—"}</td>
                <td className="p-2">{lead.name || "—"}</td>
                <td className="p-2">{lead.email || "—"}</td>
                <td className="p-2">{lead.phone || "—"}</td>
                <td className="p-2">
                  {lead.servicesInterested?.length > 0
                    ? `${lead.servicesInterested.length} ✔`
                    : "None"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
