import { adminDb } from "@/lib/firebaseAdmin";
import LeadDetails from "@/components/admin/LeadDetails";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

// Utility to safely parse createdAt/updatedAt
function parseDate(value) {
  if (!value) return null;
  if (typeof value.toDate === "function") {
    return value.toDate().toISOString();
  }
  if (typeof value === "string") {
    return new Date(value).toISOString();
  }
  return null;
}

export default async function LeadPage(props) {
  const { id } = await props.params;

  if (!id) {
    notFound();
  }

  try {
    const doc = await adminDb.collection("leads").doc(id).get();

    if (!doc.exists) {
      notFound();
    }

    const data = doc.data();

    const lead = {
      id: doc.id,
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || "",
      businessName: data.businessName || "",
      estimatedBudget: data.estimatedBudget || "",
      timeline: data.timeline || "",
      notes: data.notes || "",
      servicesInterested: Array.isArray(data.servicesInterested)
        ? data.servicesInterested
        : [],
      createdAt: parseDate(data.createdAt), // ✅ Safe
      updatedAt: parseDate(data.updatedAt), // ✅ Safe
    };

    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <LeadDetails lead={lead} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching lead:", error);
    notFound();
  }
}
