"use client";

import { useState } from "react";
import { CALLBACK_TIMES, CONTACT, QUOTE_OPTIONS } from "@/lib/content";
import { submitForm } from "@/lib/submit";

type Errors = Partial<Record<"name" | "phone" | "email" | "postcode", string>>;

export default function QuoteForm() {
  const [need, setNeed] = useState(QUOTE_OPTIONS[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "email" | "error">("idle");
  const [emailDraft, setEmailDraft] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Errors = {};
    if (!String(fd.get("name") || "").trim()) errs.name = "Please enter your name.";
    if (!String(fd.get("phone") || "").trim()) errs.phone = "Please enter a phone number.";
    if (!/^\S+@\S+\.\S+$/.test(String(fd.get("email") || "").trim())) errs.email = "Please enter a valid email address.";
    if (!String(fd.get("postcode") || "").trim()) errs.postcode = "Please enter your postcode.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    fd.append("need", need);
    setState("sending");
    if (!process.env.NEXT_PUBLIC_FORM_WEBHOOK) {
      const body = [
        `Name: ${String(fd.get("name") || "").trim()}`,
        `Phone: ${String(fd.get("phone") || "").trim()}`,
        `Email: ${String(fd.get("email") || "").trim()}`,
        `Postcode: ${String(fd.get("postcode") || "").trim()}`,
        `Work needed: ${need}`,
        `Preferred callback: ${String(fd.get("callback") || "")}`,
        `Job details: ${String(fd.get("message") || "").trim() || "Not provided"}`,
      ].join("\n");
      setEmailDraft(`mailto:${CONTACT.email}?subject=${encodeURIComponent("Kali Construction quote request")}&body=${encodeURIComponent(body)}`);
      setState("email");
      return;
    }
    setState((await submitForm("quote", fd)) ? "done" : "error");
  }

  if (state === "done") {
    return (
      <div className="card-white quote-success" role="status">
        <div className="check-pop" style={{ width: 56, height: 56, borderRadius: 9999, background: "var(--lime)", border: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>✓</div>
        <h3 className="hd tight" style={{ fontSize: 24, marginBottom: 8 }}>Thank you.</h3>
        <p style={{ color: "var(--graphite)", fontSize: 15 }}>We’ve got your request and will be in touch during your preferred callback time.</p>
      </div>
    );
  }

  if (state === "email") {
    return (
      <div className="card-white quote-success" role="status">
        <h3 className="hd tight quote-email-title">Your email draft is ready.</h3>
        <p className="quote-email-copy">Open the draft, check the details and press send to request your quote. If you want to include photos, attach them in your email app.</p>
        <a href={emailDraft} className="btn-filled full quote-submit">Open email draft →</a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-white quote-form">
      <fieldset className="quote-choice-group">
        <legend className="field-label">What do you need help with?</legend>
        <div className="quote-options">
        {QUOTE_OPTIONS.map((o) => (
          <button type="button" key={o} className={`opt${need === o ? " active" : ""}`} onClick={() => setNeed(o)} aria-pressed={need === o}>{o}</button>
        ))}
        </div>
      </fieldset>

      <div className="quote-fields">
        <div><label className="field-label" htmlFor="q-name">Full name</label><input id="q-name" name="name" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "q-name-error" : undefined} className="field" placeholder="Jane Smith" />{errors.name && <p id="q-name-error" className="field-error">{errors.name}</p>}</div>
        <div><label className="field-label" htmlFor="q-phone">Phone number</label><input id="q-phone" name="phone" type="tel" autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "q-phone-error" : undefined} className="field" placeholder="07700 900000" />{errors.phone && <p id="q-phone-error" className="field-error">{errors.phone}</p>}</div>
        <div><label className="field-label" htmlFor="q-email">Email address</label><input id="q-email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "q-email-error" : undefined} className="field" placeholder="jane@example.com" />{errors.email && <p id="q-email-error" className="field-error">{errors.email}</p>}</div>
        <div><label className="field-label" htmlFor="q-post">Postcode</label><input id="q-post" name="postcode" autoComplete="postal-code" required aria-invalid={Boolean(errors.postcode)} aria-describedby={errors.postcode ? "q-post-error" : undefined} className="field" placeholder="HP9 1AA" />{errors.postcode && <p id="q-post-error" className="field-error">{errors.postcode}</p>}</div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label className="field-label" htmlFor="q-cb">Preferred Callback Time</label>
        <select id="q-cb" name="callback" className="field">{CALLBACK_TIMES.map((t) => <option key={t}>{t}</option>)}</select>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label className="field-label" htmlFor="q-msg">Tell us about the job (optional)</label>
        <textarea id="q-msg" name="message" rows={4} className="field quote-message" placeholder="Tell us about the job..." />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label className="field-label" htmlFor="q-files">Upload photos (optional)</label>
        <input id="q-files" name="files" type="file" multiple accept="image/*" className="field quote-file" />
      </div>
      {state === "error" && <p className="field-error quote-submit-error" role="alert">Something went wrong sending that. Please try again or call us.</p>}
      <button type="submit" className="btn-filled full quote-submit" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Request a Quote →"}</button>
    </form>
  );
}
