"use client";

import { STEPS } from "@/lib/content";
import { ARTS, useInView } from "@/components/StepArt";

// Services page: three cards. Number pill top-left, then heading, copy and the matching animation.
function StepCard({ i }: { i: number }) {
  const s = STEPS[i];
  const Art = ARTS[i];
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <article className="hiw-card">
      <span className="num-pill">{s.n}</span>
      <h3 className="hd tight hiw-card-title">{s.title}</h3>
      <p className="hiw-card-body">{s.body}</p>
      <div className="hiw-art hiw-card-art" ref={ref}>
        <Art play={seen} />
      </div>
    </article>
  );
}

export default function StepCards() {
  return (
    <div className="grid-3 hiw-cards">
      {[0, 1, 2].map((i) => <StepCard key={i} i={i} />)}
    </div>
  );
}
