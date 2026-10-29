"use client";

import Link from "next/link";
import { useState } from "react";
import { HOME_PICKER } from "@/lib/content";

export default function Picker() {
  const [mode, setMode] = useState<"Homeowner" | "Business">("Homeowner");
  const [idx, setIdx] = useState(0);
  const items = HOME_PICKER[mode];
  const active = items[idx];

  return (
    <div className="card" style={{ padding: 40, position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 32 }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: 8 }}>WHAT DO YOU NEED?</p>
          <p className="hd tight" style={{ fontSize: 20 }}>Choose what best describes your job and we’ll take it from there.</p>
        </div>
        <div className="toggle-track" role="tablist" aria-label="Customer type">
          {(["Homeowner", "Business"] as const).map((m) => (
            <button key={m} role="tab" aria-selected={mode === m} className={`toggle-btn${mode === m ? " active" : ""}`} onClick={() => { setMode(m); setIdx(0); }}>
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-2">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {items.map((it, i) => (
            <button key={it.label} className={`symptom-btn${i === idx ? " active" : ""}`} onClick={() => setIdx(i)}>
              {it.label}
            </button>
          ))}
        </div>
        <div className="card-white" style={{ padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <span className="badge-outline" style={{ marginBottom: 16, fontSize: 11 }}>{active.tag}</span>
            <h3 className="hd tight" style={{ fontSize: 24, margin: "16px 0 12px" }}>{active.title}</h3>
            <p style={{ fontSize: 15, color: "var(--graphite)", lineHeight: 1.55 }}>{active.body}</p>
          </div>
          <Link href="/quote" className="btn-filled full" style={{ marginTop: 24 }}>Get a Quote →</Link>
        </div>
      </div>
    </div>
  );
}
