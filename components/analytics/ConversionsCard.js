"use client";

export default function ConversionsCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Conversions</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Form Submissions</span>
          <span className="font-bold text-gray-900">--</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Phone Clicks</span>
          <span className="font-bold text-gray-900">--</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Bookings Made</span>
          <span className="font-bold text-gray-900">--</span>
        </div>
      </div>
    </div>
  );
}
