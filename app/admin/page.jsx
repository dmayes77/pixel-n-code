import { adminDb } from "@/lib/firebaseAdmin";
import { startOfDay, startOfWeek, endOfDay, endOfWeek } from "date-fns";

export const dynamic = "force-dynamic"; // ⬅️ Important to make Firestore call work on server

export default async function AdminDashboardHome() {
  // --- 1. Total Leads ---
  const leadsSnapshot = await adminDb.collection("leads").get();
  const totalLeads = leadsSnapshot.size;

  // --- 2. Leads Added Today ---
  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());

  const leadsTodaySnapshot = await adminDb
    .collection("leads")
    .where("createdAt", ">=", todayStart)
    .where("createdAt", "<=", todayEnd)
    .get();
  const leadsToday = leadsTodaySnapshot.size;

  // --- 3. New Proposals This Week ---
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(new Date(), { weekStartsOn: 1 });

  const proposalsSnapshot = await adminDb
    .collection("proposals")
    .where("createdAt", ">=", weekStart)
    .where("createdAt", "<=", weekEnd)
    .get();
  const proposalsThisWeek = proposalsSnapshot.size;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6 mt-8">
        {/* Total Leads */}
        <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700">Total Leads</h2>
          <p className="text-3xl font-bold text-primary mt-2">{totalLeads}</p>
        </div>

        {/* Leads Added Today */}
        <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700">Leads Today</h2>
          <p className="text-3xl font-bold text-primary mt-2">{leadsToday}</p>
        </div>

        {/* Proposals This Week */}
        <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Proposals This Week
          </h2>
          <p className="text-3xl font-bold text-primary mt-2">
            {proposalsThisWeek}
          </p>
        </div>
      </div>
    </div>
  );
}
