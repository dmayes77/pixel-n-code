import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function POST(request) {
  const body = await request.json();
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      ...body,
      createdAt: new Date(),
    });
    return new Response(JSON.stringify({ id: docRef.id }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "leads"));
    const leads = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return new Response(JSON.stringify(leads), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
