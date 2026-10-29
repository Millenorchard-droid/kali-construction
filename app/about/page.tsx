import IconTile, { IconName } from "@/components/Icon";
import FinalCta from "@/components/FinalCta";
import Reveal from "@/components/Reveal";
import { CERTIFICATIONS, COMPANY, SHOW_PLACEHOLDER_LABELS } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "About Us | Kali Construction" };

// Four sections, in order: 1 Introduction, 2 Trust boxes, 3 Who we work with, 4 Company information.
// Edit copy here. Company details and certifications live in lib/content.ts and are never published unverified.

const INTRO = [
  "Kali Construction provides property repairs, maintenance and building services across London and the surrounding areas.",
  "We work with homeowners, landlords, letting agents and businesses to coordinate reliable property work, from everyday repairs and maintenance to larger improvements and renovations. By bringing multiple trades together under one roof, we aim to make the process straightforward, with one point of contact throughout.",
  "Our approach centres on clear communication, practical solutions and transparent pricing, so customers understand the work required and what happens next.",
];

type Item = { icon: IconName; title: string; body: string };

const TRUST: Item[] = [
  // Use only if it matches the confirmed insurance arrangements.
  { icon: "shield", title: "Fully Insured", body: "Public liability insurance on every job." },
  // TODO (Nelly): confirm this wording matches the registration status of the engineers or company doing gas work.
  { icon: "flame", title: "Gas Safe Registered", body: "Registered engineers for gas works." },
  { icon: "pound", title: "Clear Pricing", body: "Clear quotes, with costs agreed before work begins." },
];

const WHO: Item[] = [
  { icon: "home", title: "Homeowners", body: "Repairs, improvements and renovations for your home." },
  { icon: "key", title: "Landlords & Agents", body: "Property maintenance and refurbishment between tenancies." },
  { icon: "building2", title: "Businesses", body: "Commercial repairs and building works for offices, shops and other business premises." },
];

function InfoCard({ icon, title, body }: Item) {
  return (
    <article className="card-white lift about-card">
      <IconTile name={icon} />
      <h3 className="hd tight">{title}</h3>
      <p>{body}</p>
    </article>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="about-todo">{children}</span>;
}

export default function About() {
  const showPh = SHOW_PLACEHOLDER_LABELS;
  const certs = CERTIFICATIONS.filter((c) => c.confirmed || showPh);
  const officeLines = COMPANY.registeredOffice ? COMPANY.registeredOffice.split(/\n|,\s*/) : null;

  // In production (placeholder labels off) a company-information card only appears once its data is confirmed.
  const showOffice = Boolean(officeLines) || showPh;
  const showReg = Boolean(COMPANY.registeredName && COMPANY.registrationNumber) || showPh;
  const showCerts = certs.length > 0;
  const companyCards = [showOffice, showReg, showCerts].filter(Boolean).length;

  return (
    <>
      {/* SECTION 1: introduction, centred */}
      <section className="wrap about-sec" aria-labelledby="about-intro">
        <Reveal>
          <div className="about-intro">
            <p className="eyebrow">ABOUT US</p>
            <h1 id="about-intro" className="hd tight">Who We Are</h1>
            {INTRO.map((t) => <p key={t} className="about-intro-p">{t}</p>)}
          </div>
        </Reveal>
      </section>

      {/* SECTION 2: three trust boxes */}
      <section className="wrap about-sec" aria-labelledby="about-trust">
        <Reveal>
          <h2 id="about-trust" className="hd tight about-h2">Why Choose Kali Construction</h2>
          <div className="about-grid">
            {TRUST.map((t) => <InfoCard key={t.title} {...t} />)}
          </div>
        </Reveal>
      </section>

      {/* SECTION 3: who we work with */}
      <section className="wrap about-sec" aria-labelledby="about-who">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 12 }}>WHO WE WORK WITH</p>
          <h2 id="about-who" className="hd tight about-h2" style={{ marginBottom: 12 }}>One team, whatever the property.</h2>
          <p className="about-sub">Whether it&rsquo;s a single home or a property portfolio, we aim to make the process straightforward, with clear communication, coordinated trades and one point of contact.</p>
          <div className="about-grid">
            {WHO.map((t) => <InfoCard key={t.title} {...t} />)}
          </div>
        </Reveal>
      </section>

      {/* SECTION 4: company information */}
      {companyCards > 0 && (
        <section className="wrap about-sec" aria-labelledby="about-company">
          <Reveal>
            <div className="about-centre-head">
              <p className="eyebrow">COMPANY INFORMATION</p>
              <h2 id="about-company" className="hd tight about-h2">Company Details</h2>
            </div>
            <div className="about-company">
              {showOffice && (
                <article className="card-white about-card about-card-left">
                  <div className="about-card-head"><IconTile name="pin" /><h3 className="hd tight">Registered Office</h3></div>
                  <hr className="about-rule" />
                  {officeLines ? (
                    <address className="about-addr">{officeLines.map((l) => <span key={l}>{l}</span>)}</address>
                  ) : (
                    <address className="about-addr"><Placeholder>Registered office address to be supplied by Nelly</Placeholder></address>
                  )}
                </article>
              )}
              {showReg && (
                <article className="card-white about-card about-card-left">
                  <div className="about-card-head"><IconTile name="building" /><h3 className="hd tight">Company Registration</h3></div>
                  <hr className="about-rule" />
                  <dl className="about-dl">
                    <dt>Registered name</dt>
                    <dd>{COMPANY.registeredName ?? <Placeholder>Legal company name to be confirmed</Placeholder>}</dd>
                    <dt>Companies House number</dt>
                    <dd>{COMPANY.registrationNumber ?? <Placeholder>Registration number to be confirmed</Placeholder>}</dd>
                  </dl>
                </article>
              )}
              {showCerts && (
                <article className="card-white about-card about-card-left about-certs">
                  <div className="about-card-head"><IconTile name="shield" /><h3 className="hd tight">Certifications</h3></div>
                  <hr className="about-rule" />
                  <ul className="about-list">
                    {certs.map((c) => (
                      <li key={c.label}>
                        <CheckCircle2 size={18} strokeWidth={1.75} aria-hidden="true" />
                        <span>{c.label}</span>
                        {!c.confirmed && <span className="ph-tag about-unver">Unverified</span>}
                      </li>
                    ))}
                  </ul>
                </article>
              )}
            </div>
          </Reveal>
        </section>
      )}

      {/* Closing call to action */}
      <FinalCta
        headline="Have a project in mind?"
        text="Now you know a little more about us, we’d love to hear about your plans. Tell us what you need and we’ll take it from there."
        button="Get a Quote →"
        href="/quote"
      />
    </>
  );
}
