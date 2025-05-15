import { adminAddOne, adminGetAll } from "@/lib/firestoreAdminHelpers";

export async function POST(request) {
  const body = await request.json();
  try {
    const id = await adminAddOne("leads", body);
    return new Response(JSON.stringify({ id }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const leads = await adminGetAll("leads");
    return new Response(JSON.stringify(leads), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(request) {
  try {
    const { ids } = await request.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return new Response("No IDs provided", { status: 400 });
    }
    // Delete each lead
    await Promise.all(
      ids.map((id) => adminDb.collection("leads").doc(id).delete())
    );
    return new Response("Leads deleted", { status: 200 });
  } catch (error) {
    console.error("Error bulk deleting leads:", error);
    return new Response("Failed to delete leads", { status: 500 });
  }
}