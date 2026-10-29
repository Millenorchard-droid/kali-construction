import Link from "next/link";
import IconTile from "@/components/Icon";
import StepCards from "@/components/StepCards";
import FinalCta from "@/components/FinalCta";
import { SERVICES } from "@/lib/content";

export const metadata = { title: "Services | Kali Construction" };

export default function Services() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 48 }}>
        <p className="eyebrow" style={{ marginBottom: 14 }}>WHAT WE DO</p>
        <h1 className="hd tight" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", marginBottom: 20 }}>Find the service you need.</h1>
        <p style={{ color: "var(--graphite)", fontSize: 16, lineHeight: 1.6, maxWidth: 520 }}>
          Big job, small job, somewhere in between? Find what you need below and click ‘Book’ to get a quote.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: 80 }}>
        <div className="grid-3">
          {SERVICES.map((s) => (
            <Link key={s.title} href="/quote" className="card-white lift service-card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16, minHeight: 228 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <IconTile name={s.icon} />
                <span className="badge-outline" style={{ fontSize: 10 }}>{s.tag}</span>
              </div>
              <h3 className="hd tight" style={{ fontSize: 19 }}>{s.title}</h3>
              <p style={{ color: "var(--graphite)", fontSize: 14, lineHeight: 1.55, flex: 1 }}>{s.body}</p>
              <span className="btn-ghost" style={{ alignSelf: "flex-end" }}>Book →</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--sand-soft)" }}>
        <div className="section">
          <p className="eyebrow" style={{ marginBottom: 12 }}>HOW IT WORKS</p>
          <h2 className="hd tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", maxWidth: 420, marginBottom: 48 }}>Simple from start to finish.</h2>
          <StepCards />
        </div>
      </section>

      <div style={{ height: 80 }} />
      <FinalCta
        headline="Not sure which service you need?"
        text="Tell us what you need, and we’ll help you find the right service."
        button="Start a booking →"
        href="/quote"
      />
    </>
  );
}
