"use client";

export default function TopPagesCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Top Pages Visited
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between text-gray-700">
          <span>/home</span>
          <span className="font-semibold">120 visits</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>/services</span>
          <span className="font-semibold">85 visits</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>/contact</span>
          <span className="font-semibold">70 visits</span>
        </div>
      </div>
    </div>
  );
}
