# Kali Construction website

Next.js 14, TypeScript. Run with `npm install` then `npm run dev`.

## Where things live
- `lib/content.ts` holds all copy, reviews, FAQs and company details. Edit wording here.
- `app/globals.css` holds the design system. The palette (charcoal, cream, off-white and lime yellow) is defined once in `:root`.
- `components/FinalCta.tsx` is the single CTA layout used on Services, Commercial, About Us and Testimonials.
- `components/Counter.tsx` is the homepage counting animation (GBP 200 down to 0, 24H up from 1, 50 down to 0).

## Checklist status (22 October 2026 master list)
1. Counter animation: done.
2. About Us: five sections built. Section 4 (Company Information) stays hidden in production until `COMPANY` in `lib/content.ts` is filled in. Confirm the Gas Safe wording before publishing.
3. Our Work: page removed.
4. Testimonials: homepage and Testimonials page share one card component and link through. All names, quotes and photos are sample content (one footnote on the Testimonials page, controlled by `SHOW_PLACEHOLDER_LABELS`). Replace with genuine testimonials and photos before launch, then set the flag to false. /reviews redirects to /testimonials.
5. Footer: single grid, consistent column gaps.
6. How It Works: one number pill top-right per card. Home uses its requested heading and contact links; Services keeps its existing wording.
7. Functionality: nav, mobile menu, forms and filters work. Run a full manual pass before launch.
9. Palette applied. Services and Commercial icons use one shared tile (`components/Icon.tsx`).
10. All four CTAs use the approved wording and layout.

## Forms
Set `NEXT_PUBLIC_FORM_WEBHOOK` to an n8n webhook URL to deliver quote and commercial enquiries. Without it the forms complete on screen but send nothing.
