"use client";

import { useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS, TESTIMONIAL_FILTERS } from "@/lib/content";

export default function TestimonialsClient() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.category === filter);

  return (
    <section className="section" style={{ maxWidth: 1100 }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <p className="eyebrow" style={{ marginBottom: 14 }}>TESTIMONIALS</p>
        <h1 className="hd tight" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", marginBottom: 16 }}>What our customers say.</h1>
        <p style={{ color: "var(--graphite)", fontSize: 15 }}>Homeowners, landlords and businesses on working with Kali Construction.</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
        {TESTIMONIAL_FILTERS.map((f) => (
          <button key={f} className={`chip${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      <div className="t-grid">
        {list.map((t) => <TestimonialCard key={t.name + t.place} t={t} />)}
      </div>
    </section>
  );
}
