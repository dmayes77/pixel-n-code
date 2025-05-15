import { updateOne } from "@/lib/firestore";

export async function PATCH(request) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").at(-2); // Get ID from URL path
  const data = await request.json();
  try {
    await updateOne("leads", id, data);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

