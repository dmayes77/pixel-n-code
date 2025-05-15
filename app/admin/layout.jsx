import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">{children}</main>
    </div>
  );
}
