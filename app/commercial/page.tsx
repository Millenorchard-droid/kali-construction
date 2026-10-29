import CommercialForm from "@/components/CommercialForm";
import IconTile from "@/components/Icon";
import FinalCta from "@/components/FinalCta";

export const metadata = { title: "Commercial | Kali Construction" };

const POINTS = [
  { icon: "building", title: "Repairs & Property Works", body: "Day-to-day repairs, maintenance and planned works across your properties, from smaller jobs to larger improvements." },
  { icon: "file", title: "Qualified & Compliant", body: "Gas and electrical work carried out by appropriately qualified trades, with the relevant certification provided where required." },
  { icon: "wrench", title: "Refurbishments & Projects", body: "From end-of-tenancy works and property refurbishments to renovations and larger building projects, managed from start to finish." },
] as const;

export default function Commercial() {
  return (
    <>
      <section id="enquiry" className="section" style={{ maxWidth: 840, paddingBottom: 48, scrollMarginTop: 100 }}>
        <p className="eyebrow" style={{ marginBottom: 14 }}>FOR PROPERTY PROFESSIONALS</p>
        <h1 className="hd tight" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", marginBottom: 20 }}>One contract. Every site.</h1>
        <p style={{ color: "var(--graphite)", fontSize: 16, lineHeight: 1.6, maxWidth: 520, marginBottom: 40 }}>
          Repairs, maintenance and property works across your portfolio, with one reliable point of contact.
        </p>
        <CommercialForm />
      </section>

      <section className="wrap" style={{ maxWidth: 840, paddingBottom: 80 }}>
        <div className="grid-3">
          {POINTS.map((p) => (
            <div key={p.title} className="card-white" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
              <IconTile name={p.icon} />
              <h3 className="hd tight" style={{ fontSize: 17 }}>{p.title}</h3>
              <p style={{ color: "var(--graphite)", fontSize: 13, lineHeight: 1.55 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCta headline="Ready When You Are" text="We’ll take it from here." button="Make an Enquiry →" href="/commercial#enquiry" />
    </>
  );
}
