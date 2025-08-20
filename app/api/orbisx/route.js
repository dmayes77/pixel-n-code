// app/api/orbisx/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      businessName,
      email,
      website,
      orbisxUrl,
      serviceInterest,
      servicesOffered,
      hasOrbisX,
      goals,
    } = body;

    const content = `
📩 New OrbisX Discovery Submission

👤 Name: ${name}
🏢 Business Name: ${businessName}
📧 Email: ${email}
🌐 Website: ${website || "N/A"}
🔗 OrbisX Booking Page: ${orbisxUrl}
💼 Interested In: ${serviceInterest}
🛠 Services Offered: ${servicesOffered}
⚙️ Already Using OrbisX?: ${hasOrbisX}
🎯 Goals/Frustrations:
${goals}
    `;

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Discovery Form – ${businessName}`,
      text: content,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
