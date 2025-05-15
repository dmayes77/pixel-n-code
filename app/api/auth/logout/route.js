import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies(); // ✅ await cookies()

  cookieStore.set("session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0), // expire immediately
  });

  return new Response("Logged out", { status: 200 });
}
