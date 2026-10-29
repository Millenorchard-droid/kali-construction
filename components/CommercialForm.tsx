"use client";

import { useState } from "react";
import { CALLBACK_TIMES, COMMERCIAL_OPTIONS } from "@/lib/content";
import { submitForm } from "@/lib/submit";

export default function CommercialForm() {
  const [help, setHelp] = useState(COMMERCIAL_OPTIONS.help[0]);
  const [looking, setLooking] = useState(COMMERCIAL_OPTIONS.looking[0]);
  const [sites, setSites] = useState(COMMERCIAL_OPTIONS.sites[0]);
  const [error, setError] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!String(fd.get("name") || "").trim() || !/^\S+@\S+\.\S+$/.test(String(fd.get("email") || ""))) {
      setError("Please add your name and a valid email address.");
      return;
    }
    setError("");
    fd.append("help", help); fd.append("looking", looking); fd.append("sites", sites);
    setState("sending");
    setState((await submitForm("commercial", fd)) ? "done" : "error");
  }

  if (state === "done") {
    return (
      <div className="card-white" style={{ padding: 40, textAlign: "center" }}>
        <div className="check-pop" style={{ width: 56, height: 56, borderRadius: 9999, background: "var(--lime)", border: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>✓</div>
        <h3 className="hd tight" style={{ fontSize: 24, marginBottom: 8 }}>Enquiry received.</h3>
        <p style={{ color: "var(--graphite)", fontSize: 15 }}>We’ll be in touch during your preferred callback time.</p>
      </div>
    );
  }

  const group = (label: string, opts: readonly string[], val: string, set: (v: string) => void, cols: number) => (
    <div style={{ marginBottom: 24 }}>
      <p className="field-label">{label}</p>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: 10 }}>
        {opts.map((o) => <button type="button" key={o} className={`opt${val === o ? " active" : ""}`} onClick={() => set(o)}>{o}</button>)}
      </div>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="card-white" style={{ padding: 28 }}>
      {group("What can we help you with?", COMMERCIAL_OPTIONS.help, help, setHelp, 4)}
      {group("What are you looking for?", COMMERCIAL_OPTIONS.looking, looking, setLooking, 3)}
      {group("How many properties or sites is this for?", COMMERCIAL_OPTIONS.sites, sites, setSites, 4)}
      <div style={{ marginBottom: 16 }}>
        <label className="field-label" htmlFor="c-where">Where is the work needed?</label>
        <input id="c-where" name="where" className="field" placeholder="e.g. London, M40 corridor, or postcodes..." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div><label className="field-label" htmlFor="c-name">Full name</label><input id="c-name" name="name" className="field" placeholder="Jane Smith" /></div>
        <div><label className="field-label" htmlFor="c-co">Company name</label><input id="c-co" name="company" className="field" placeholder="Acme Properties Ltd" /></div>
        <div><label className="field-label" htmlFor="c-ph">Phone number</label><input id="c-ph" name="phone" className="field" placeholder="07700 900000" /></div>
        <div><label className="field-label" htmlFor="c-em">Email address</label><input id="c-em" name="email" type="email" className="field" placeholder="jane@company.com" /></div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label className="field-label" htmlFor="c-cb">Preferred Callback Time</label>
        <select id="c-cb" name="callback" className="field">{CALLBACK_TIMES.map((t) => <option key={t}>{t}</option>)}</select>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label className="field-label" htmlFor="c-msg">Tell us what you need</label>
        <textarea id="c-msg" name="message" rows={4} className="field" placeholder="Tell us what you need..." style={{ resize: "vertical" }} />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label className="field-label" htmlFor="c-files">Upload photos or documents (optional)</label>
        <input id="c-files" name="files" type="file" multiple className="field" />
      </div>
      {(error || state === "error") && <p className="field-error" style={{ marginBottom: 12 }}>{error || "Something went wrong sending that. Please try again or call us."}</p>}
      <button type="submit" className="btn-filled full" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send Enquiry →"}</button>
    </form>
  );
}
