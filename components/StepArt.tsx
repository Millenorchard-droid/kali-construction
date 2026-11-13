"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   "How it works" illustrations: one lime icon tile per step, one simple motion each.
   Plays when scrolled into view. With reduced motion the finished state shows and nothing moves.
   01 START HERE   phone with signal arcs pulsing (someone getting in touch)
   02 THE PLAN     clipboard with its tick drawn (the plan confirmed)
   03 HANDLED      circle and tick drawn (job complete)
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
const ICON = { fill: "none", stroke: "var(--ink)", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

// Shared frame: cream panel, soft ring behind a 112px lime tile, 52px icon centred on the tile.
function Frame({ play, label, children }: { play: boolean; label: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 372 260" className={`art-svg tile-art${play ? " play" : ""}`} role="img" aria-label={label}>
      <rect width="372" height="260" rx="24" fill="var(--sand-card)" />
      <rect x="130" y="74" width="112" height="112" rx="30" fill="none" stroke="var(--lime)" strokeWidth="2" className="t-ring" style={BOX} />
      <rect x="130" y="74" width="112" height="112" rx="30" fill="var(--lime)" className="t-tile" style={BOX} />
      <g transform="translate(160 104) scale(2.08)">{children}</g>
    </svg>
  );
}

/* 01. Someone gets in touch. */
export function ArtCall({ play }: { play: boolean }) {
  return (
    <Frame play={play} label="A phone receiving a call">
      <g {...ICON}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M15.05 5A5 5 0 0 1 19 8.95" className="t-wave w1" />
        <path d="M15.05 1A9 9 0 0 1 23 8.94" className="t-wave w2" />
      </g>
    </Frame>
  );
}

/* 02. The plan is confirmed. */
export function ArtStatus({ play }: { play: boolean }) {
  return (
    <Frame play={play} label="A clipboard with the plan ticked off">
      <g {...ICON}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" className="t-draw" style={{ "--len": 8 } as React.CSSProperties} />
      </g>
    </Frame>
  );
}

/* 03. The job is handled through to completion. */
export function ArtCerts({ play }: { play: boolean }) {
  return (
    <Frame play={play} label="A completed job ticked off">
      <g {...ICON}>
        <circle cx="12" cy="12" r="10" className="t-draw" style={{ "--len": 63 } as React.CSSProperties} />
        <path d="m9 12 2 2 4-4" className="t-draw t-draw-late" style={{ "--len": 8 } as React.CSSProperties} />
      </g>
    </Frame>
  );
}

export const ARTS = [ArtCall, ArtStatus, ArtCerts];
