// app/api/questionnaire/route.js
import { NextResponse } from "next/server";

// Forward questionnaire payload to GoHighLevel webhook
const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/15I2ewCnlFWulLH0GRRM/webhook-trigger/fd4168bd-8db7-4803-b909-7f6f3347c880";

export async function POST(request) {
  try {
    const formData = await request.json();
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Webhook request failed", details: await response.text() },
        { status: response.status }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error forwarding to webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
