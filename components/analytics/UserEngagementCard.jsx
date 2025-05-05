"use client";

export default function UserEngagementCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        User Engagement
      </h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Average Session Time</span>
          <span className="font-bold text-gray-900">--</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Bounce Rate</span>
          <span className="font-bold text-gray-900">--</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Average Scroll Depth</span>
          <span className="font-bold text-gray-900">--</span>
        </div>
      </div>
    </div>
  );
}
