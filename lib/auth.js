import { adminAuth } from "@/lib/firebaseAdmin"; // ✅ import adminAuth
import { cookies } from "next/headers";

export async function getAuthSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  if (!token) return null;

  try {
    const decodedToken = await adminAuth.verifyIdToken(token); // ✅ use adminAuth
    return { user: decodedToken };
  } catch (error) {
    console.error("Auth Error:", error);
    return null;
  }
}
