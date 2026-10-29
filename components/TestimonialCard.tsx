import { Testimonial } from "@/lib/content";

// One card for the homepage and the Testimonials page. Photo on top when one is supplied, then quote and attribution.
export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="t-card">
      {t.image && (
        <div className="t-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.image} alt={`${t.project} in ${t.place}`} loading="lazy" />
        </div>
      )}
      <div className="t-body">
        <span className="t-mark" aria-hidden="true">&ldquo;</span>
        <blockquote className="t-quote">{t.quote}</blockquote>
        <figcaption className="t-by">
          <span className="t-name">{t.name}</span>
          <span className="t-meta">{t.place} &middot; {t.project}</span>
        </figcaption>
      </div>
    </figure>
  );
}
