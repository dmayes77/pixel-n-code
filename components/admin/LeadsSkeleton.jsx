"use client";

export default function LeadsSkeleton() {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="min-w-full bg-white rounded-md shadow-md text-[0.75rem]">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-4">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </td>
              <td className="p-4">
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </td>
              <td className="p-4">
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </td>
              <td className="p-4 flex gap-2">
                <div className="h-8 bg-gray-300 rounded w-16"></div>
                <div className="h-8 bg-gray-300 rounded w-16"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
