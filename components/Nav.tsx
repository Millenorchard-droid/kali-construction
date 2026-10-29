"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="perk-nav-wrap">
      <nav className="perk-nav" aria-label="Main">
        <Link href="/" className="nav-logo" aria-label="Kali Construction home">KALI</Link>
        <div className="perk-nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`navlink${pathname === l.href ? " active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="perk-nav-actions">
          <Link href="/quote" className="nav-cta">Get a Quote →</Link>
          <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/quote" className="accent">Get a Quote →</Link>
        </div>
      )}
    </div>
  );
}
