import Link from "next/link";

// Point 10: one layout for every page. Large white headline, smaller grey text, one button. No eyebrow.
export default function FinalCta({ headline, text, button, href }: { headline: string; text: string; button: string; href: string }) {
  return (
    <section className="wrap" style={{ padding: "0 20px 80px" }}>
      <div
        className="dark on-dark"
        style={{ padding: "72px 32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
      >
        <h2 className="hd tight" style={{ color: "#f6f6f4", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", maxWidth: 760 }}>{headline}</h2>
        <p style={{ color: "#cfcfc8", fontSize: 15, lineHeight: 1.6, maxWidth: 560 }}>{text}</p>
        <Link href={href} className="btn-filled" style={{ marginTop: 12 }}>{button}</Link>
      </div>
    </section>
  );
}
