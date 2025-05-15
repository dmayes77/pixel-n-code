import { deleteOne } from "@/lib/firestore";

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await deleteOne("leads", id);
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
