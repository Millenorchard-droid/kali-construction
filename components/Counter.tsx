"use client";

import { useEffect, useRef, useState } from "react";

// Point 1: restores the counting animation.
// GBP 200 counts down 200, 199, 198 ... to 0. 24H counts up 1, 2, 3 ... to 24.
export default function Counter({
  from, to, prefix = "", suffix = "", duration = 1800,
}: { from: number; to: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const steps = Math.abs(to - from);
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // whole-number steps so it visibly "flicks" through each value
          const n = Math.round(t * steps);
          setValue(from < to ? from + n : from - n);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [from, to, duration]);

  return (
    <p
      ref={ref}
      className="hd tight"
      style={{ fontSize: 48, lineHeight: 1, margin: 0, fontVariantNumeric: "tabular-nums" }}
      aria-label={`${prefix}${to}${suffix}`}
    >
      {prefix}{value}{suffix}
    </p>
  );
}
