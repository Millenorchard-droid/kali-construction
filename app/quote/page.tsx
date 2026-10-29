import QuoteForm from "@/components/QuoteForm";

export const metadata = { title: "Request a Quote | Kali Construction" };

export default function Quote() {
  return (
    <section className="section" style={{ paddingBottom: 100 }}>
      <p className="eyebrow" style={{ marginBottom: 14 }}>REQUEST A QUOTE</p>
      <h1 className="hd tight" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", marginBottom: 20 }}>Let’s get your quote moving.</h1>
      <p style={{ color: "var(--graphite)", fontSize: 16, lineHeight: 1.6, maxWidth: 520, marginBottom: 48 }}>
        Tell us what you need and we’ll take it from there. We’ll review the details and get back to you within 24 hours.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 1fr)", gap: 20, alignItems: "start" }} className="grid-2">
        <QuoteForm />
        <div className="card" style={{ padding: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <p className="eyebrow">WHAT HAPPENS NEXT</p>
            <span className="badge-outline" style={{ fontSize: 10 }}>NEXT STEPS</span>
          </div>
          <h2 className="hd tight" style={{ fontSize: 24, marginBottom: 12 }}>We’ll review your request.</h2>
          <p style={{ color: "var(--graphite)", fontSize: 14, lineHeight: 1.6 }}>
            Send us the details and we’ll get in touch during your preferred callback time to discuss the job and what happens next.
          </p>
        </div>
      </div>
    </section>
  );
}
