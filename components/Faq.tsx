"use client";

import { useState } from "react";
import { FAQS } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ background: "var(--sand-soft)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "80px 20px" }}>
        <h2 className="hd tight" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", textAlign: "center", marginBottom: 56 }}>Questions?</h2>
        <div>
          {FAQS.map((f, i) => (
            <div key={f.q} style={{ borderTop: "1px solid var(--line)", ...(i === FAQS.length - 1 ? { borderBottom: "1px solid var(--line)" } : {}) }}>
              <button className="faq-btn" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ fontSize: 16, fontWeight: 500 }}>{f.q}</span>
                <span style={{ fontSize: 20, color: "var(--graphite)", transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s", flexShrink: 0 }}>+</span>
              </button>
              {open === i && (
                <p style={{ paddingBottom: 20, color: "var(--graphite)", fontSize: 15, lineHeight: 1.6, maxWidth: 680 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
