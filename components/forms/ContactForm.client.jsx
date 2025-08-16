// components/forms/ContactForm.client.jsx
"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
      company: form.company.value, // hidden honeypot
    };

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json", "x-source": "website" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      toast.success(json.message || "Thanks! We’ll be in touch.");
      form.reset();
    } catch (_) {
      // even offline, background sync will retry; give optimistic feedback
      toast("Message queued — we’ll send it when you’re back online.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required placeholder="Your name" className="input" />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="input"
      />
      <input name="phone" placeholder="Phone (optional)" className="input" />
      <input
        name="service"
        placeholder="Service (optional)"
        className="input"
      />
      <textarea
        name="message"
        required
        placeholder="How can we help?"
        className="textarea"
      />
      {/* Honeypot (hide with CSS) */}
      <input
        name="company"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
      />
      <button disabled={loading} className="btn-primary">
        {loading ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
