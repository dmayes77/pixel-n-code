import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebaseAdmin"; // Firebase Admin SDK

export async function POST(request) {
  const { idToken } = await request.json();

  if (!idToken) {
    return new Response("No ID token provided", { status: 400 });
  }

  const cookieStore = await cookies();
  cookieStore.set("session", idToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 5, // 5 days
  });

  return new Response("Session cookie set", { status: 200 });
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  if (!token) {
    return new Response("Not authenticated", { status: 401 });
  }

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    return Response.json({ user: decoded });
  } catch (error) {
    console.error(error);
    return new Response("Invalid token", { status: 401 });
  }
}
