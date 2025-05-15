import { adminDb } from "@/lib/firebaseAdmin";

export async function PATCH(request, context) {
  const { id } = await context.params;
  const updates = await request.json();
  await adminDb
    .collection("leads")
    .doc(id)
    .update({
      ...updates,
      updatedAt: new Date(),
    });
  return new Response("Lead updated", { status: 200 });
}

export async function DELETE(request, context) {
  const { id } = await context.params;
  try {
    await adminDb.collection("leads").doc(id).delete();
    return new Response("Lead deleted", { status: 200 });
  } catch (err) {
    console.error("Error deleting lead:", err);
    return new Response("Failed to delete lead", { status: 500 });
  }
}
