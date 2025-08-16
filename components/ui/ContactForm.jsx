// components/ui/ContactForm.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ── config ─────────────────────────────────────────────────────────────
const PROJECT_TYPES = [
  "Website",
  "Logo Design",
  "SEO",
  "Photography",
  "Videography",
  "Print Material",
  "E-commerce",
  "Ongoing Maintenance",
];

const BUDGETS = ["Undecided", "$1k–$3k", "$3k–$5k", "$5k–$10k", "$10k+"];
const TIMELINES = ["Flexible", "2–4 weeks", "4–8 weeks", "ASAP (<2 weeks)"];
const CONTACT_METHODS = ["Email", "Phone", "Text"];
const CONTACT_TIMES = ["Anytime", "Morning", "Afternoon", "Evening"];

// ── component ──────────────────────────────────────────────────────────
export default function ContactUsForm({ className = "" }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [utm, setUtm] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    landingPage: "",
    referrer: "",
  });

  // Capture UTM + landing + referrer
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const qs = url.searchParams;
      setUtm({
        utm_source: qs.get("utm_source") || "",
        utm_medium: qs.get("utm_medium") || "",
        utm_campaign: qs.get("utm_campaign") || "",
        utm_term: qs.get("utm_term") || "",
        utm_content: qs.get("utm_content") || "",
        landingPage: url.pathname + url.search,
        referrer: document.referrer || "",
      });
    } catch {}
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const f = formRef.current;

    const selectedTypes = Array.from(
      f.querySelectorAll("input[name='projectType']:checked")
    ).map((i) => i.value);

    const payload = {
      // required
      name: f.name.value,
      email: f.email.value,
      service: selectedTypes.join(", "),
      message: f.message.value,
      // optional
      phone: f.phone.value,
      companyName: f.companyName.value,
      website: f.website.value,
      budget: f.budget.value,
      timeline: f.timeline.value,
      heard: f.heard.value,
      preferredMethod: f.preferredMethod.value,
      preferredTime: f.preferredTime.value,
      smsConsent: f.smsConsent.checked,
      // anti-bot
      company: f.company.value, // honeypot
      // tracking
      ...utm,
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.message ||
      !payload.service
    ) {
      toast.error(
        "Please complete Name, Email, Project Type, and Project Summary."
      );
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-source": "website",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || json?.ok === false) {
        toast.error(json?.error || "Something went wrong.");
        return;
      }
      toast.success(json?.message || "Thanks! We’ll be in touch.");
      f.reset();
    } catch {
      toast("Message queued — we’ll send it when you’re back online.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className={["space-y-6", className].join(" ")}
    >
      {/* Row: name / email / phone (optional) */}
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
        <Field
          name="name"
          label="Your Name *"
          required
          placeholder="Full Name"
        />
        <Field
          name="email"
          type="email"
          label="Email *"
          required
          placeholder="Email"
        />
        <Field name="phone" label="Phone" placeholder="Phone" />
      </div>

      {/* Row: company / website / budget */}
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
        <Field name="companyName" label="Company / Organization" />
        <Field
          name="website"
          label="Current Website URL"
          placeholder="https://..."
          type="url"
        />
        <Select name="budget" label="What Is Your Budget?">
          {BUDGETS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </Select>
      </div>

      {/* Project type checkboxes */}
      <fieldset className="grid grid-cols-1 tablet:grid-cols-2 gap-3 border rounded-xl p-4">
        <legend className="px-1 text-sm text-slate-600">Project Type *</legend>
        {PROJECT_TYPES.map((pt) => (
          <label key={pt} className="flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              name="projectType"
              value={pt}
              className="h-4 w-4"
            />
            {pt}
          </label>
        ))}
      </fieldset>

      {/* Row: timeline / heard / preferred contact/time */}
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
        <Select name="timeline" label="What’s Your Desired Timeline?">
          {TIMELINES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </Select>
        <Field name="heard" label="How Did You Hear About Us?" />
        <div className="grid grid-cols-2 gap-3">
          <Select name="preferredMethod" label="Preferred Contact">
            {CONTACT_METHODS.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </Select>
          <Select name="preferredTime" label="Preferred Time">
            {CONTACT_TIMES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {/* Project summary */}
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Tell Us a Little Bit About Your Project *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-800/10"
        />
      </div>

      {/* SMS consent */}
      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" name="smsConsent" className="mt-1 h-4 w-4" />
        <span>
          By submitting this form, you consent to receive SMS appointment
          updates and promotional messages from Code Maze Web Design. Message
          and data rates may apply. Reply STOP to unsubscribe.
        </span>
      </label>

      {/* Honeypot (hidden to humans) */}
      <input
        type="text"
        name="company"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={loading}
        className={[
          "inline-flex w-full tablet:w-auto justify-center items-center rounded-xl px-6 py-3 text-white font-medium shadow-sm transition",
          "bg-primary hover:bg-primary/90",
          "disabled:opacity-60",
          "bg-[#F26A2E] hover:brightness-95", // fallback if no primary color
        ].join(" ")}
      >
        {loading ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}

// ── small inputs ─────────────────────────────────────────────────────────
function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder = "",
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-800/10"
      />
    </div>
  );
}

function Select({ name, label, children }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-800/10"
      >
        {children}
      </select>
    </div>
  );
}
