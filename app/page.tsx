import Link from "next/link";
import Picker from "@/components/Picker";
import Counter from "@/components/Counter";
import HowItWorks from "@/components/HowItWorks";
import TestimonialCard from "@/components/TestimonialCard";
import Faq from "@/components/Faq";
import { CONTACT, HOME_TESTIMONIAL_INDEXES, TESTIMONIALS, STATS } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow hero-eyebrow">ALL TRADES • LONDON &amp; SURROUNDING</p>
          <h1>We get to the bottom of it.</h1>
          <p className="lead">Fix what isn’t working. From everyday repairs to larger renovations and building work, we manage the job from start to finish.</p>
          <div className="hero-actions on-dark">
            <Link href="/quote" className="btn-filled">Request a Quote →</Link>
            <Link href="/services" className="btn-outline">What We Offer</Link>
          </div>
          <Picker />
        </div>
      </section>

      {/* Numbers */}
      <section className="section">
        <h2 className="hd tight" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", textAlign: "center", marginBottom: 48 }}>Numbers that don&apos;t lie.</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: "var(--sand-soft)", borderRadius: 24, padding: "40px 24px", flex: "1 1 0", minWidth: 200, textAlign: "center" }}>
              {"text" in s && s.text ? (
                <p className="hd tight" style={{ fontSize: 48, lineHeight: 1, margin: 0 }}>{s.text}</p>
              ) : (
                <Counter from={s.from as number} to={s.to as number} prefix={s.prefix} suffix={s.suffix} />
              )}
              <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--graphite)", marginTop: 16, marginBottom: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works (Point 6: approved card layout, same wording as Services) */}
      <section style={{ background: "var(--sand-soft)" }}>
        <div className="section">
          <p className="eyebrow" style={{ marginBottom: 12 }}>How it works</p>
          <h2 className="hd tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", maxWidth: 520, marginBottom: 56 }}>One call, every trade.</h2>
          <HowItWorks />
        </div>
      </section>

      {/* Testimonials (same cards as the Testimonials page, links through to it) */}
      <section className="section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>TESTIMONIALS</p>
            <h2 className="hd tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>What our customers say.</h2>
          </div>
        </div>
        <div className="t-grid t-grid-4">
          {HOME_TESTIMONIAL_INDEXES.map((i) => (
            <TestimonialCard key={i} t={TESTIMONIALS[i]} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/testimonials" className="btn-ghost">Read all testimonials →</Link>
        </div>
      </section>

      {/* Get started */}
      <section className="wrap" style={{ paddingBottom: 80 }}>
        <div className="dark" style={{ padding: 40 }}>
          <h2 className="hd tight" style={{ color: "#f6f6f4", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", textTransform: "uppercase", marginBottom: 32 }}>Get started</h2>
          <div className="grid-3">
            <div style={{ background: "var(--ink-2)", borderRadius: 18, padding: 24 }}>
              <p className="eyebrow" style={{ color: "var(--stone)", marginBottom: 12 }}>CALL US</p>
              <p style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.35, marginBottom: 20 }}>Speak directly to our dispatch team.</p>
              <a href={CONTACT.phoneHref} className="btn-outline" style={{ fontSize: 13, padding: "10px 16px" }}>Call {CONTACT.phoneDisplay}</a>
            </div>
            <div style={{ background: "#41443a", border: "1px solid #5d6247", borderRadius: 18, padding: 24 }}>
              <p className="eyebrow" style={{ color: "var(--lime)", marginBottom: 12 }}>WHATSAPP</p>
              <p style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.35, marginBottom: 20 }}>Send us pictures of the issue for a fast response.</p>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-filled" style={{ fontSize: 13, padding: "10px 16px", borderColor: "var(--lime)" }}>Message on WhatsApp →</a>
            </div>
            <div style={{ background: "var(--ink-2)", borderRadius: 18, padding: 24 }}>
              <p className="eyebrow" style={{ color: "var(--stone)", marginBottom: 12 }}>EMAIL US</p>
              <p style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.35, marginBottom: 20 }}>Prefer to write? Drop us an email with the details.</p>
              <a href={`mailto:${CONTACT.email}`} className="btn-outline" style={{ fontSize: 13, padding: "10px 16px" }}>Email our team</a>
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
