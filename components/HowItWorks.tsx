"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { STEPS } from "@/lib/content";

/* ------------------------------------------------------------------
   Animated illustrations for the three "How it works" rows.
   Each one starts when it scrolls into view. With reduced motion
   they show their finished state and nothing moves.
------------------------------------------------------------------- */

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useInView<T extends Element>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

// Counts from 0 up to `target` once `go` is true. Shows `target` until then, so the resting state is complete.
function useCountUp(target: number, go: boolean, duration = 1700) {
  const [v, setV] = useState(target);
  useEffect(() => {
    if (!go) return;
    let raf = 0;
    const start = performance.now();
    setV(0);
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setV(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [go, target, duration]);
  return v;
}

const HEAD = { fontFamily: "var(--font-head)" } as const;
const BOX = { transformBox: "fill-box", transformOrigin: "center" } as const;

const HOME_STEPS = STEPS.map((step, i) => i === 0
  ? { ...step, cta: "See our services →", href: "/services" }
  : i === 2
    ? { ...step, cta: "Get in touch →", href: "/#get-started" }
    : step);

/* 01. A job enquiry comes in and is passed to the right team. */
function ArtCall({ play }: { play: boolean }) {
  const enquiries = useCountUp(3, play);
  return (
    <svg viewBox="0 0 372 260" className={`art-svg${play ? " play" : ""}`} role="img" aria-label="A new property job enquiry being received">
      <rect width="372" height="260" rx="28" fill="#f6f6f4" />
      {/* phone */}
      <g className="a-phone">
        <rect x="144" y="46" width="84" height="150" rx="14" fill="#f6f6f4" stroke="var(--sand)" strokeWidth="2" />
        <rect x="154" y="58" width="64" height="100" rx="5" fill="var(--sand-card)" />
        <circle cx="186" cy="100" r="17" fill="var(--ink)" className="a-ring" style={BOX} opacity=".25" />
        <circle cx="186" cy="100" r="17" fill="var(--ink)" />
        <g transform="translate(176 90) scale(.83)" className="a-ring-tilt" style={BOX}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="#f6f6f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="186" y="133" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="var(--ink)">New job enquiry</text>
        <rect x="163" y="142" width="46" height="12" rx="6" fill="var(--ink)" />
        <text x="186" y="150.5" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#f6f6f4" letterSpacing=".4">WE CAN HELP</text>
      </g>
      {/* incoming job count */}
      <g className="a-badge" style={BOX}>
        <circle cx="296" cy="109" r="35" fill="var(--lime)" />
        <text x="296" y="111" textAnchor="middle" fontSize="21" fontWeight="800" fill="var(--ink)" style={HEAD} className="num">{enquiries}</text>
        <text x="296" y="124" textAnchor="middle" fontSize="6.5" fontWeight="600" fill="var(--ink)" letterSpacing=".3">JOB DETAILS</text>
      </g>
      {/* van */}
      <g className="a-van">
        <g className="a-van-bob">
          <rect x="37" y="176" width="82" height="36" rx="9" fill="var(--ink)" />
          <rect x="45" y="184" width="32" height="17" rx="4" fill="#e9e3d4" />
          <rect x="81" y="188" width="30" height="4" rx="2" fill="var(--ink-3)" />
          <circle cx="56" cy="214" r="8" fill="var(--ink)" stroke="#f6f6f4" strokeWidth="2" />
          <circle cx="102" cy="214" r="8" fill="var(--ink)" stroke="#f6f6f4" strokeWidth="2" />
          <circle cx="56" cy="214" r="2.5" fill="#f6f6f4" />
          <circle cx="102" cy="214" r="2.5" fill="#f6f6f4" />
        </g>
      </g>
      {/* trail */}
      <circle cx="279" cy="205" r="5" fill="var(--sand)" className="a-dot d1" />
      <circle cx="297" cy="215" r="5" fill="var(--sand)" className="a-dot d2" />
      <circle cx="314" cy="226" r="5" fill="var(--sand)" className="a-dot d3" />
    </svg>
  );
}

/* 02. The work, costs and next steps are confirmed. */
function ArtStatus({ play }: { play: boolean }) {
  return (
    <svg viewBox="0 0 372 260" className={`art-svg${play ? " play" : ""}`} role="img" aria-label="A job plan with the work, price and next steps confirmed">
      <rect width="372" height="260" rx="28" fill="var(--sand-card)" />
      {/* legs */}
      <rect x="152" y="180" width="9" height="30" rx="4.5" fill="var(--sand)" />
      <rect x="212" y="180" width="9" height="30" rx="4.5" fill="var(--sand)" />
      {/* job plan */}
      <rect x="110" y="34" width="150" height="150" rx="14" fill="#f6f6f4" stroke="var(--sand)" strokeWidth="2" />
      <rect x="124" y="58" width="122" height="58" rx="5" fill="var(--sand-soft)" />
      <circle cx="136" cy="72" r="3.2" fill="var(--lime)" stroke="var(--ink)" strokeWidth="1" className="a-live" style={BOX} />
      <text x="187" y="76" textAnchor="middle" fontSize="8" fontWeight="500" fill="var(--ink)" letterSpacing=".3">JOB PLAN</text>
      <text x="187" y="98" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink)">Work and costs agreed</text>
      <circle cx="185" cy="148" r="18" fill="var(--lime)" />
      <text x="185" y="155" textAnchor="middle" fontSize="19" fontWeight="700" fill="var(--ink)" style={HEAD}>£</text>
      {/* quote agreed tag */}
      <g className="a-float" style={BOX}>
        <rect x="260" y="54" width="70" height="38" rx="19" fill="var(--lime)" />
        <text x="295" y="70" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="var(--ink)">NEXT</text>
        <text x="295" y="80" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="var(--ink)">STEPS</text>
      </g>
      {/* calendar */}
      <g className="a-cal" style={BOX}>
        <rect x="40" y="148" width="66" height="56" rx="6" fill="#f6f6f4" stroke="var(--sand)" strokeWidth="1.5" />
        <path d="M40 154a6 6 0 0 1 6-6h54a6 6 0 0 1 6 6v8H40z" fill="var(--ink)" />
        <text x="73" y="159" textAnchor="middle" fontSize="7" fontWeight="700" fill="#f6f6f4" letterSpacing=".3">PLAN</text>
        <path className="a-tick" d="M64 178l6 6 11-12" fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="73" y="198" textAnchor="middle" fontSize="6.5" fill="var(--graphite)">Confirmed</text>
      </g>
    </svg>
  );
}

/* 03. Coordinated work moves through to completion. */
const TASKS = ["Work scheduled", "Right trades", "Progress checked", "Finishing touches", "Job complete"];

function Arttasks({ play }: { play: boolean }) {
  const [step, setStep] = useState(TASKS.length); // resting state: work is complete
  useEffect(() => {
    if (!play) return;
    let t: ReturnType<typeof setTimeout>;
    const run = (n: number) => {
      setStep(n);
      if (n < TASKS.length) t = setTimeout(() => run(n + 1), 620);
      else t = setTimeout(() => run(0), 3800);
    };
    run(0);
    return () => clearTimeout(t);
  }, [play]);

  return (
    <svg viewBox="0 0 372 260" className={`art-svg${play ? " play" : ""}`} role="img" aria-label="A coordinated property job progressing through to completion">
      <rect width="372" height="260" rx="28" fill="#eef3c4" />
      <rect x="118" y="38" width="136" height="176" rx="12" fill="#f6f6f4" stroke="var(--sand)" strokeWidth="2" />
      <rect x="150" y="30" width="72" height="17" rx="8.5" fill="var(--ink)" />
      {TASKS.map((c, i) => {
        const y = 80 + i * 25;
        const done = i < step;
        return (
          <g key={c}>
            <circle cx="138" cy={y} r="8" fill={done ? "var(--ink)" : "var(--sand-card)"} stroke={done ? "var(--ink)" : "var(--sand)"} strokeWidth="1.2" style={{ transition: "fill .25s ease, stroke .25s ease" }} />
            <path d={`M${134} ${y} l3 3 l5 -6`} fill="none" stroke="#f6f6f4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="14" strokeDashoffset={done ? 0 : 14} style={{ transition: "stroke-dashoffset .3s ease .1s" }} />
            <text x="154" y={y + 3} fontSize="7.8" fontWeight="500" fill="var(--ink)">{c}</text>
          </g>
        );
      })}
      <g key={step >= TASKS.length ? "on" : "off"} className={step >= TASKS.length ? "a-pop" : ""} style={{ ...BOX, opacity: step >= TASKS.length ? 1 : 0.0, transition: "opacity .2s" }}>
        <rect x="258" y="160" width="72" height="46" rx="10" fill="var(--lime)" />
        <text x="294" y="177" textAnchor="middle" fontSize="6.8" fontWeight="700" fill="var(--ink)" letterSpacing=".3">JOB DONE</text>
        <path d="M285 188l6 6 11-12" fill="none" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

const ARTS = [ArtCall, ArtStatus, Arttasks];

function Row({ i }: { i: number }) {
  const s = HOME_STEPS[i];
  const Art = ARTS[i];
  const { ref, seen } = useInView<HTMLDivElement>();
  const reverse = i === 1;
  return (
    <div className={`hiw-row${reverse ? " reverse" : ""}`}>
      <div className="hiw-text">
        <div className="hiw-head">
          <h3 className="hd tight hiw-title">{s.title}</h3>
          <span className="num-pill">{s.n}</span>
        </div>
        <p className="hiw-body">{s.body}</p>
        <Link href={s.href} className="btn-ghost">{s.cta}</Link>
      </div>
      <div className="hiw-art" ref={ref}>
        <Art play={seen} />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="hiw">
      {[0, 1, 2].map((i) => <Row key={i} i={i} />)}
    </div>
  );
}
