// app/api/contact/route.js
export const runtime = "nodejs";

// ── helpers ───────────────────────────────────────────────────────────────────
function sanitize(v = "") {
  return String(v).trim().slice(0, 10000);
}
function validate({ name, email, message, service }) {
  if (!name || name.length < 2) return "Please provide your name.";
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return "Please provide a valid email.";
  if (!service) return "Please choose at least one project type.";
  if (!message || message.length < 5) return "Please enter a brief message.";
  return null;
}
async function parseRequest(req) {
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    const d = await req.json();
    return {
      // required + optional
      name: sanitize(d.name),
      email: sanitize(d.email),
      phone: sanitize(d.phone),
      service: sanitize(d.service),
      message: sanitize(d.message),
      companyName: sanitize(d.companyName),
      website: sanitize(d.website),
      budget: sanitize(d.budget),
      timeline: sanitize(d.timeline),
      heard: sanitize(d.heard),
      preferredMethod: sanitize(d.preferredMethod),
      preferredTime: sanitize(d.preferredTime),
      smsConsent: d.smsConsent ? "Yes" : "No",
      // anti-bot honeypot
      company: sanitize(d.company),
      // tracking
      utm_source: sanitize(d.utm_source),
      utm_medium: sanitize(d.utm_medium),
      utm_campaign: sanitize(d.utm_campaign),
      utm_term: sanitize(d.utm_term),
      utm_content: sanitize(d.utm_content),
      landingPage: sanitize(d.landingPage),
      referrer: sanitize(d.referrer),
      // meta
      source: sanitize(req.headers.get("x-source") || "website"),
    };
  }
  // Support form posts too
  const fd = await req.formData();
  return {
    name: sanitize(fd.get("name")),
    email: sanitize(fd.get("email")),
    phone: sanitize(fd.get("phone")),
    service: sanitize(fd.get("service")),
    message: sanitize(fd.get("message")),
    companyName: sanitize(fd.get("companyName")),
    website: sanitize(fd.get("website")),
    budget: sanitize(fd.get("budget")),
    timeline: sanitize(fd.get("timeline")),
    heard: sanitize(fd.get("heard")),
    preferredMethod: sanitize(fd.get("preferredMethod")),
    preferredTime: sanitize(fd.get("preferredTime")),
    smsConsent: fd.get("smsConsent") ? "Yes" : "No",
    company: sanitize(fd.get("company")), // honeypot
    utm_source: sanitize(fd.get("utm_source")),
    utm_medium: sanitize(fd.get("utm_medium")),
    utm_campaign: sanitize(fd.get("utm_campaign")),
    utm_term: sanitize(fd.get("utm_term")),
    utm_content: sanitize(fd.get("utm_content")),
    landingPage: sanitize(fd.get("landingPage")),
    referrer: sanitize(fd.get("referrer")),
    source: sanitize(req.headers.get("x-source") || "website"),
  };
}
function escapeHtml(s = "") {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ])
  );
}
function row(label, val) {
  return `<tr><td style="padding:4px 12px 4px 0;color:#475569">${escapeHtml(
    label
  )}:</td><td style="padding:4px 0">${escapeHtml(val || "")}</td></tr>`;
}

// ── delivery (email via Resend) ───────────────────────────────────────────────
async function maybeSendEmail(p) {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    (process.env.NODE_ENV === "production"
      ? "Code Maze <hello@getcodemaze.com>"
      : "Code Maze <onboarding@resend.dev>");
  const to = (process.env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!apiKey || !to.length) return false;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const subject = `New contact: ${p.name} <${p.email}>`;
    const text =
      `Name: ${p.name}\n` +
      `Email: ${p.email}\n` +
      (p.phone ? `Phone: ${p.phone}\n` : "") +
      (p.companyName ? `Company: ${p.companyName}\n` : "") +
      (p.website ? `Website: ${p.website}\n` : "") +
      (p.service ? `Service: ${p.service}\n` : "") +
      (p.budget ? `Budget: ${p.budget}\n` : "") +
      (p.timeline ? `Timeline: ${p.timeline}\n` : "") +
      (p.heard ? `Heard: ${p.heard}\n` : "") +
      (p.preferredMethod ? `Preferred: ${p.preferredMethod}\n` : "") +
      (p.preferredTime ? `Best Time: ${p.preferredTime}\n` : "") +
      `SMS Consent: ${p.smsConsent}\n` +
      `Source: ${p.source}\n` +
      (p.utm_source
        ? `UTM: ${p.utm_source}/${p.utm_medium}/${p.utm_campaign}\n`
        : "") +
      (p.utm_term ? `UTM Term: ${p.utm_term}\n` : "") +
      (p.utm_content ? `UTM Content: ${p.utm_content}\n` : "") +
      (p.landingPage ? `Landing: ${p.landingPage}\n` : "") +
      (p.referrer ? `Referrer: ${p.referrer}\n` : "") +
      `\nMessage:\n${p.message}\n`;

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
        <h2 style="margin:0 0 12px">New Contact Form</h2>
        <table style="border-collapse:collapse">
          ${row("Name", p.name)}
          ${row("Email", p.email)}
          ${p.phone ? row("Phone", p.phone) : ""}
          ${p.companyName ? row("Company", p.companyName) : ""}
          ${p.website ? row("Website", p.website) : ""}
          ${p.service ? row("Service", p.service) : ""}
          ${p.budget ? row("Budget", p.budget) : ""}
          ${p.timeline ? row("Timeline", p.timeline) : ""}
          ${p.heard ? row("Heard", p.heard) : ""}
          ${
            p.preferredMethod ? row("Preferred Contact", p.preferredMethod) : ""
          }
          ${p.preferredTime ? row("Preferred Time", p.preferredTime) : ""}
          ${row("SMS Consent", p.smsConsent)}
          ${row("Source", p.source)}
          ${
            p.utm_source
              ? row("UTM", `${p.utm_source}/${p.utm_medium}/${p.utm_campaign}`)
              : ""
          }
          ${p.utm_term ? row("UTM Term", p.utm_term) : ""}
          ${p.utm_content ? row("UTM Content", p.utm_content) : ""}
          ${p.landingPage ? row("Landing", p.landingPage) : ""}
          ${p.referrer ? row("Referrer", p.referrer) : ""}
        </table>
        <p style="margin:16px 0 6px;font-weight:600">Message</p>
        <pre style="white-space:pre-wrap;margin:0">${escapeHtml(
          p.message
        )}</pre>
        <hr style="margin:20px 0;border:none;border-top:1px solid #e5e7eb"/>
        <p style="margin:0;color:#64748b;font-size:12px">
          Code Maze Web Design · Chattanooga, TN · getcodemaze.com · (423) 381-8264
        </p>
      </div>
    `;

    const tags = [{ name: "source", value: p.source || "website" }];
    if (p.utm_source) tags.push({ name: "utm_source", value: p.utm_source });
    if (p.utm_campaign)
      tags.push({ name: "utm_campaign", value: p.utm_campaign });

    await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      reply_to: p.email,
      headers: { "List-Unsubscribe": "<mailto:hello@getcodemaze.com>" },
      tags,
    });

    return true;
  } catch (err) {
    console.error("[contact] email failed:", err);
    return false;
  }
}

// ── Slack (optional) ──────────────────────────────────────────────────────────
async function maybeSendSlack(p) {
  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) return false;

  // helpers
  const esc = (s = "") =>
    String(s).replace(
      /[&<>]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])
    );
  const fld = (label, val) => ({
    type: "mrkdwn",
    text: `*${esc(label)}:*\n${esc(val)}`,
  });
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  const addGroup = (title, pairs, blocks) => {
    const fields = pairs.filter(([_, v]) => v).map(([k, v]) => fld(k, v));
    if (!fields.length) return;
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: `*${esc(title)}*` },
    });
    for (const part of chunk(fields, 10)) {
      blocks.push({ type: "section", fields: part });
    }
  };

  // normalize a couple values
  const website = p.website
    ? p.website.startsWith("http")
      ? p.website
      : `https://${p.website}`
    : "";
  const message = (p.message || "").slice(0, 3000); // keep it readable

  const blocks = [];

  // Header
  blocks.push({
    type: "header",
    text: { type: "plain_text", text: "New Contact Form" },
  });

  // Groups
  addGroup(
    "Contact",
    [
      ["Name", p.name],
      ["Email", p.email],
      ["Phone", p.phone],
      ["Company", p.companyName],
      ["Website", website],
      ["Source", p.source],
    ],
    blocks
  );

  addGroup(
    "Project",
    [
      ["Type", p.service],
      ["Budget", p.budget],
      ["Timeline", p.timeline],
      ["Heard", p.heard],
    ],
    blocks
  );

  addGroup(
    "Preferences",
    [
      ["Preferred Contact", p.preferredMethod],
      ["Preferred Time", p.preferredTime],
      ["SMS Consent", p.smsConsent],
    ],
    blocks
  );

  addGroup(
    "Tracking",
    [
      ["UTM Source", p.utm_source],
      ["UTM Medium", p.utm_medium],
      ["UTM Campaign", p.utm_campaign],
      ["UTM Term", p.utm_term],
      ["UTM Content", p.utm_content],
      ["Landing", p.landingPage],
      ["Referrer", p.referrer],
    ],
    blocks
  );

  // Message
  if (message) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Message*\n\`\`\`\n${esc(message)}\n\`\`\``,
      },
    });
  }

  // Footer divider
  blocks.push({ type: "divider" });

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        text: `New contact: ${p.name} <${p.email}>`, // fallback for notifications
        blocks,
      }),
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      console.error("[contact] slack non-200:", res.status, txt);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[contact] slack failed:", err);
    return false;
  }
}



// ── CORS preflight (no captcha headers) ───────────────────────────────────────
export async function OPTIONS(req) {
  const origin = req.headers.get("origin") || "*";
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "POST,OPTIONS",
      "Access-Control-Allow-Origin": origin,
      Vary: "Origin",
      "Access-Control-Allow-Headers": "content-type,x-source",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
    },
  });
}

// ── main handler ──────────────────────────────────────────────────────────────
export async function POST(req) {
  try {
    const payload = await parseRequest(req);

    // Honeypot: if filled by bots, pretend success
    if (payload.company) return Response.json({ ok: true });

    const error = validate(payload);
    if (error) return Response.json({ ok: false, error }, { status: 400 });

    const [emailSent, slackSent] = await Promise.all([
      maybeSendEmail(payload),
      maybeSendSlack(payload),
    ]);

    return Response.json({
      ok: true,
      delivered: { email: emailSent, slack: slackSent },
      message: "Thanks! We received your message and will reply shortly.",
    });
  } catch (err) {
    console.error("[contact] fatal:", err);
    // Return 200 so background sync jobs don't loop forever
    return Response.json({ ok: true, queued: true }, { status: 200 });
  }
}
