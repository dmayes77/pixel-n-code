import { getAll, addOne } from "@/lib/firestore";

export async function GET() {
  try {
    const leads = await getAll("leads");
    return new Response(JSON.stringify(leads), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  const data = await request.json();
  try {
    const id = await addOne("leads", data);
    return new Response(JSON.stringify({ id }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
