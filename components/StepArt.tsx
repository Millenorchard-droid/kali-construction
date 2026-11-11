"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   Animated illustrations for the three "How it works" steps.
   Each one plays once when it scrolls into view (step 3 loops).
   With reduced motion they show their finished state and nothing moves.
   Each animation is written to act out its caption:
   01 START HERE   a problem, a plan and a change request arrive, then "We can help"
   02 THE PLAN     the work, the costs and what happens next are ticked off in turn
   03 HANDLED      trades, coordination, progress and finishing touches lead to "Job done"
------------------------------------------------------------------- */

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useInView<T extends Element>(threshold = 0.35) {
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

const BOX = { transformBox: "fill-box", transformOrigin: "center" } as const;
const PANEL = "var(--sand-card)";

/* 01. A problem, a plan or a change arrives, and we say we can help. */
const ENQUIRIES = [
  { label: "A problem", cls: "r1" },
  { label: "A plan", cls: "r2" },
  { label: "Something to change", cls: "r3" },
] as const;

function EnquiryGlyph({ i }: { i: number }) {
  if (i === 0) {
    return (
      <g fill="none" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="0" cy="0" r="8" />
        <path d="M0 -3.5v4" />
        <path d="M0 4.6h.01" />
      </g>
    );
  }
  if (i === 1) {
    return (
      <g fill="none" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-6.5" y="-8" width="13" height="16" rx="2.5" />
        <path d="M-3 -2.5h6M-3 1.5h6M-3 5h3" />
      </g>
    );
  }
  return (
    <g fill="none" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" transform="translate(-8 -8) scale(.67)">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </g>
  );
}

export function ArtCall({ play }: { play: boolean }) {
  return (
    <svg viewBox="0 0 372 260" className={`art-svg${play ? " play" : ""}`} role="img" aria-label="A problem, a plan and something to change arriving as a new enquiry, answered with we can help">
      <rect width="372" height="260" rx="24" fill={PANEL} />
      <rect x="58" y="30" width="256" height="200" rx="16" fill="#f6f6f4" stroke="var(--sand)" strokeWidth="2" />
      <text x="78" y="56" fontSize="9" fontWeight="600" fill="var(--graphite)" letterSpacing=".9">NEW ENQUIRY</text>
      <circle cx="294" cy="52" r="4" fill="var(--lime)" stroke="var(--ink)" strokeWidth="1" className="a-live" style={BOX} />
      {ENQUIRIES.map((e, i) => {
        const y = 68 + i * 38;
        return (
          <g key={e.label} className={`a-row ${e.cls}`}>
            <rect x="74" y={y} width="224" height="30" rx="10" fill="var(--sand-card)" />
            <circle cx="92" cy={y + 15} r="11" fill="var(--lime)" />
            <g transform={`translate(92 ${y + 15}) scale(.78)`}><EnquiryGlyph i={i} /></g>
            <text x="112" y={y + 19} fontSize="11.5" fontWeight="600" fill="var(--ink)">{e.label}</text>
          </g>
        );
      })}
      <g className="a-pill" style={BOX}>
        <rect x="104" y="188" width="164" height="30" rx="15" fill="var(--ink)" />
        <text x="186" y="207" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#f6f6f4" letterSpacing="1.05">WE CAN HELP</text>
      </g>
    </svg>
  );
}

/* 02. The work, the costs and what happens next are confirmed. */
const PLAN_ROWS = [
  { title: "The work", sub: "Scope confirmed", cls: "r1" },
  { title: "The costs", sub: "Price agreed", cls: "r2" },
  { title: "What happens next", sub: "Start date set", cls: "r3" },
] as const;

export function ArtStatus({ play }: { play: boolean }) {
  return (
    <svg viewBox="0 0 372 260" className={`art-svg${play ? " play" : ""}`} role="img" aria-label="The work, the costs and what happens next each being confirmed before the job starts">
      <rect width="372" height="260" rx="24" fill={PANEL} />
      <rect x="58" y="30" width="256" height="200" rx="16" fill="#f6f6f4" stroke="var(--sand)" strokeWidth="2" />
      <text x="78" y="56" fontSize="9" fontWeight="600" fill="var(--graphite)" letterSpacing=".9">JOB PLAN</text>
      {PLAN_ROWS.map((r, i) => {
        const y = 68 + i * 38;
        return (
          <g key={r.title}>
            <rect x="74" y={y} width="224" height="30" rx="10" fill="var(--sand-card)" />
            <text x="90" y={y + 13} fontSize="11.5" fontWeight="600" fill="var(--ink)">{r.title}</text>
            <text x="90" y={y + 24} fontSize="8.5" fill="var(--graphite)">{r.sub}</text>
            <g className={`a-tickg ${r.cls}`} style={BOX}>
              <circle cx="276" cy={y + 15} r="11" fill="var(--lime)" />
              <path className="a-tickpath" d={`M270.5 ${y + 15.5}l4 4 7.5-8.5`} fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        );
      })}
      <g className="a-pill" style={BOX}>
        <rect x="104" y="188" width="164" height="30" rx="15" fill="var(--ink)" />
        <text x="186" y="207" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#f6f6f4" letterSpacing="1.05">READY TO START</text>
      </g>
    </svg>
  );
}

/* 03. Coordinated work moves through to completion. */
const TASKS = ["The right trades", "Work coordinated", "Progress checked", "Finishing touches", "Job complete"];

export function ArtCerts({ play }: { play: boolean }) {
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
  const complete = step >= TASKS.length;

  return (
    <svg viewBox="0 0 372 260" className={`art-svg${play ? " play" : ""}`} role="img" aria-label="A coordinated property job progressing from the right trades through to completion">
      <rect width="372" height="260" rx="24" fill={PANEL} />
      <rect x="58" y="30" width="256" height="200" rx="16" fill="#f6f6f4" stroke="var(--sand)" strokeWidth="2" />
      <text x="78" y="56" fontSize="9" fontWeight="600" fill="var(--graphite)" letterSpacing=".9">YOUR JOB</text>
      {TASKS.map((c, i) => {
        const y = 82 + i * 28;
        const done = i < step;
        return (
          <g key={c}>
            <circle cx="90" cy={y} r="9" fill={done ? "var(--ink)" : "var(--sand-card)"} stroke={done ? "var(--ink)" : "var(--sand)"} strokeWidth="1.2" style={{ transition: "fill .25s ease, stroke .25s ease" }} />
            <path d={`M85.5 ${y + .5} l3 3 l5.5 -6.5`} fill="none" stroke="#f6f6f4" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="14" strokeDashoffset={done ? 0 : 14} style={{ transition: "stroke-dashoffset .3s ease .1s" }} />
            <text x="108" y={y + 4} fontSize="11.5" fontWeight="600" fill="var(--ink)">{c}</text>
          </g>
        );
      })}
      <g key={complete ? "on" : "off"} className={complete ? "a-pop" : ""} style={{ ...BOX, opacity: complete ? 1 : 0, transition: "opacity .2s" }}>
        <rect x="236" y="190" width="68" height="30" rx="15" fill="var(--lime)" />
        <text x="270" y="209" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink)" letterSpacing="1">JOB DONE</text>
      </g>
    </svg>
  );
}

export const ARTS = [ArtCall, ArtStatus, ArtCerts];
