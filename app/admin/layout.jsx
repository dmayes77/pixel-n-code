import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";

export default async function AdminLayout({ children }) {
  const session = await getAuthSession();

  if (!session || session.user.role !== "admin") {
    redirect("/login"); // Protect /admin
  }

  return <>{children}</>; // ✅ Just render the page content normally
}
