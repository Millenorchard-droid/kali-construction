import QuoteForm from "@/components/QuoteForm";
import { serviceFromSlug } from "@/lib/content";

export const metadata = { title: "Request a Quote | Kali Construction" };

// A service "Book" button links here with ?service=<slug>, which preselects that service.
// Any other route to this page leaves the service unselected.
export default function Quote({ searchParams }: { searchParams?: { service?: string | string[] } }) {
  const slug = Array.isArray(searchParams?.service) ? searchParams?.service[0] : searchParams?.service;
  return (
    <section className="section quote-page">
      <p className="eyebrow quote-eyebrow">REQUEST A QUOTE</p>
      <h1 className="hd tight quote-title">Let’s get your quote moving.</h1>
      <p className="quote-intro">
        Tell us what you need and we’ll take it from there. We’ll review the details and get back to you within 24 hours.
      </p>
      <div className="quote-layout">
        <QuoteForm initialService={serviceFromSlug(slug)} />
        <div className="card quote-next">
          <div className="quote-next-head">
            <p className="eyebrow">WHAT HAPPENS NEXT</p>
            <span className="badge-outline" style={{ fontSize: 10 }}>NEXT STEPS</span>
          </div>
          <h2 className="hd tight quote-next-title">We’ll review your request.</h2>
          <p className="quote-next-copy">
            Send us the details and we’ll get in touch during your preferred callback time to discuss the job and what happens next.
          </p>
        </div>
      </div>
    </section>
  );
}
