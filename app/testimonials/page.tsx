import TestimonialsClient from "@/components/TestimonialsClient";
import FinalCta from "@/components/FinalCta";

export const metadata = { title: "Testimonials | Kali Construction" };

export default function Testimonials() {
  return (
    <>
      <TestimonialsClient />
      <div style={{ height: 80 }} />
      <FinalCta headline="Add yours to the list." text="See what we can do for your property." button="Get a Quote →" href="/quote" />
    </>
  );
}
