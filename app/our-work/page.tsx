import Link from "next/link";

export const metadata = { title: "Our Work | Kali Construction" };

// Point 3: page content, project photographs and layout are still to be supplied by Nelly.
// Do not add invented projects here. Keep the existing intro until approved content arrives.
export default function OurWork() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "120px 20px 160px" }}>
      <p className="eyebrow" style={{ marginBottom: 14 }}>OUR WORK</p>
      <h1 className="hd tight" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", marginBottom: 20 }}>Projects &amp; Portfolio</h1>
      <p style={{ color: "var(--graphite)", fontSize: 16, marginBottom: 32 }}>Explore our work across residential and commercial properties.</p>
      <Link href="/quote" className="btn-filled">Get a Quote →</Link>
    </section>
  );
}
