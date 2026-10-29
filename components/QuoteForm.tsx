"use client";

import { useState } from "react";
import { CALLBACK_TIMES, QUOTE_OPTIONS } from "@/lib/content";
import { submitForm } from "@/lib/submit";

type Errors = Partial<Record<"name" | "phone" | "email" | "postcode", string>>;

export default function QuoteForm() {
  const [need, setNeed] = useState(QUOTE_OPTIONS[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Errors = {};
    if (!String(fd.get("name") || "").trim()) errs.name = "Please enter your name.";
    if (!String(fd.get("phone") || "").trim()) errs.phone = "Please enter a phone number.";
    if (!/^\S+@\S+\.\S+$/.test(String(fd.get("email") || ""))) errs.email = "Please enter a valid email address.";
    if (!String(fd.get("postcode") || "").trim()) errs.postcode = "Please enter your postcode.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    fd.append("need", need);
    setState("sending");
    setState((await submitForm("quote", fd)) ? "done" : "error");
  }

  if (state === "done") {
    return (
      <div className="card-white" style={{ padding: 40, textAlign: "center" }}>
        <div className="check-pop" style={{ width: 56, height: 56, borderRadius: 9999, background: "var(--lime)", border: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>✓</div>
        <h3 className="hd tight" style={{ fontSize: 24, marginBottom: 8 }}>Thank you.</h3>
        <p style={{ color: "var(--graphite)", fontSize: 15 }}>We’ve got your request and will be in touch during your preferred callback time.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-white" style={{ padding: 28 }}>
      <p className="field-label">What do you need help with?</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
        {QUOTE_OPTIONS.map((o) => (
          <button type="button" key={o} className={`opt${need === o ? " active" : ""}`} onClick={() => setNeed(o)} style={{ textAlign: "left" }}>{o}</button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div><label className="field-label" htmlFor="q-name">Full name</label><input id="q-name" name="name" className="field" placeholder="Jane Smith" />{errors.name && <p className="field-error">{errors.name}</p>}</div>
        <div><label className="field-label" htmlFor="q-phone">Phone number</label><input id="q-phone" name="phone" className="field" placeholder="07700 900000" />{errors.phone && <p className="field-error">{errors.phone}</p>}</div>
        <div><label className="field-label" htmlFor="q-email">Email address</label><input id="q-email" name="email" type="email" className="field" placeholder="jane@example.com" />{errors.email && <p className="field-error">{errors.email}</p>}</div>
        <div><label className="field-label" htmlFor="q-post">Postcode</label><input id="q-post" name="postcode" className="field" placeholder="HP9 1AA" />{errors.postcode && <p className="field-error">{errors.postcode}</p>}</div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label className="field-label" htmlFor="q-cb">Preferred Callback Time</label>
        <select id="q-cb" name="callback" className="field">{CALLBACK_TIMES.map((t) => <option key={t}>{t}</option>)}</select>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label className="field-label" htmlFor="q-msg">Tell us about the job (optional)</label>
        <textarea id="q-msg" name="message" rows={4} className="field" placeholder="Tell us about the job..." style={{ resize: "vertical" }} />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label className="field-label" htmlFor="q-files">Upload photos (optional)</label>
        <input id="q-files" name="files" type="file" multiple accept="image/*" className="field" />
      </div>
      {state === "error" && <p className="field-error" style={{ marginBottom: 12 }}>Something went wrong sending that. Please try again or call us.</p>}
      <button type="submit" className="btn-filled full" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Request a Quote →"}</button>
    </form>
  );
}
