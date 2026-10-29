import Link from "next/link";
import { STEPS } from "@/lib/content";
import IconTile from "@/components/Icon";

// Point 6: one number pill per card, top-right. Large bold heading and grey paragraph beneath.
// No intermediate headings, no extra sentences. Home shows the small related icon; Services does not.
export default function StepCards({ withIcons = false }: { withIcons?: boolean }) {
  return (
    <div className="grid-3">
      {STEPS.map((s) => (
        <div key={s.n} className="card-white" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: withIcons ? "space-between" : "flex-end", minHeight: 28 }}>
            {withIcons && <IconTile name={s.icon} />}
            <span className="num-pill">{s.n}</span>
          </div>
          <h3 className="hd tight" style={{ fontSize: 22, textTransform: "uppercase" }}>{s.title}</h3>
          <p style={{ color: "var(--graphite)", fontSize: 15, lineHeight: 1.55 }}>{s.body}</p>
          {withIcons && (
            <Link href={s.href} className="btn-ghost" style={{ alignSelf: "flex-start", marginTop: 6 }}>{s.cta}</Link>
          )}
        </div>
      ))}
    </div>
  );
}
