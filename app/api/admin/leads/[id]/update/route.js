import { adminUpdateOne } from "@/lib/firestoreAdminHelpers";

export async function PATCH(request, { params }) {
  const { id } = params;
  const body = await request.json();
  try {
    await adminUpdateOne("leads", id, body);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
