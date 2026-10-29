import Link from "next/link";
import { CONTACT } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ color: "#f6f6f4" }}>KALI</div>
            <p>Property repairs, maintenance and construction for homes and businesses.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Repairs &amp; Maintenance</Link></li>
              <li><Link href="/services">Kitchens &amp; Bathrooms</Link></li>
              <li><Link href="/services">Renovations</Link></li>
              <li><Link href="/services">Extensions</Link></li>
              <li><Link href="/services">Plumbing &amp; Heating</Link></li>
              <li><Link href="/services" className="accent">View All →</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/our-work">Our Work</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/commercial">Commercial</Link></li>
            </ul>
          </div>
          <div>
            <h4>Pricing</h4>
            <ul>
              <li><Link href="/quote">Plans &amp; Rates</Link></li>
              <li><Link href="/quote">Request a Quote</Link></li>
              <li><Link href="/commercial">Business Plans</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={CONTACT.phoneHref}>Call {CONTACT.phoneDisplay}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={CONTACT.whatsappHref} className="accent">WhatsApp Us →</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          © 2026 Kali Construction Ltd. | Privacy Policy · Terms &amp; Conditions · Cookie Policy
        </div>
      </div>
    </footer>
  );
}
