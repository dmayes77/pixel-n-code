"use client";

export default function LiveVisitorsCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Live Visitors Online
      </h2>

      {/* Active Visitor Count */}
      <div className="flex items-center space-x-2 mb-4">
        {/* Green Pulse Dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-gray-700 font-semibold">2 visitors active</span>
      </div>

      {/* List of Pages */}
      <div className="space-y-2">
        <div className="flex justify-between text-gray-700">
          <span>/services</span>
          <span className="text-sm text-gray-500">Browsing</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>/contact</span>
          <span className="text-sm text-gray-500">Browsing</span>
        </div>
      </div>
    </div>
  );
}
