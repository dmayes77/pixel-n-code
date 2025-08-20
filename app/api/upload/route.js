// app/api/upload/route.js
export const runtime = "nodejs";

import { supabaseAdmin } from "@/lib/supabase/server";

function randomName(orig = "file") {
  const slug = Math.random().toString(36).slice(2, 8);
  const ext = (
    orig.includes(".") ? orig.split(".").pop() : "bin"
  ).toLowerCase();
  return `${Date.now()}-${slug}.${ext}`;
}

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("file"); // expects <input name="file" type="file" />
    if (!file || typeof file.name !== "string")
      return Response.json({ ok: false, error: "No file" }, { status: 400 });

    const arrayBuf = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuf);
    const contentType = file.type || "application/octet-stream";
    const path = `orbisx/${randomName(file.name)}`;

    const supa = supabaseAdmin();
    const { error: upErr } = await supa.storage
      .from("assets")
      .upload(path, buffer, {
        contentType,
        cacheControl: "31536000, immutable", // long-term CDN cache
        upsert: false,
      });
    if (upErr) throw upErr;

    // If bucket is public, generate a fast CDN URL (with optional transforms)
    const { data } = supa.storage.from("assets").getPublicUrl(path, {
      transform: {
        width: 1600,
        quality: 80,
        format: "webp",
        resize: "contain",
      },
    });

    return Response.json({
      ok: true,
      path,
      url: data.publicUrl, // CDN URL (transform applied)
      rawUrl: supa.storage.from("assets").getPublicUrl(path).data.publicUrl, // original
    });
  } catch (e) {
    console.error("[upload]", e);
    return Response.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
