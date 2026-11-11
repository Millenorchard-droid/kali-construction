"use client";

import Link from "next/link";
import { STEPS } from "@/lib/content";
import { ARTS, useInView } from "@/components/StepArt";

// Homepage wording: same steps as Services, with its own calls to action.
const HOME_STEPS = STEPS.map((step, i) => i === 0
  ? { ...step, cta: "See our services →", href: "/services" }
  : i === 2
    ? { ...step, cta: "Get in touch →", href: "/#get-started" }
    : step);

// One step: text on the left (pill, heading, copy, link), animation on the right. Same layout for every step.
function Row({ i }: { i: number }) {
  const s = HOME_STEPS[i];
  const Art = ARTS[i];
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <article className="hiw-row">
      <div className="hiw-text">
        <span className="num-pill">{s.n}</span>
        <h3 className="hd tight hiw-title">{s.title}</h3>
        <p className="hiw-body">{s.body}</p>
        <Link href={s.href} className="btn-ghost">{s.cta}</Link>
      </div>
      <div className="hiw-art" ref={ref}>
        <Art play={seen} />
      </div>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <div className="hiw">
      {[0, 1, 2].map((i) => <Row key={i} i={i} />)}
    </div>
  );
}
