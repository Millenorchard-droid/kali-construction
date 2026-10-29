// All site copy lives here so Nelly can edit wording without touching components.

export const CONTACT = {
  phoneDisplay: "0330 380 0142",
  phoneHref: "tel:03303800142",
  whatsappHref: "https://wa.me/443303800142",
  email: "hello@kaliconstruction.co.uk",
};

// Point 2, Section 4. Leave as null until Nelly supplies the real details.
// While any value is null the Company Information section is hidden in production
// builds and shows a "pending" notice in development only.
export const COMPANY: {
  registeredOffice: string | null;
  registeredName: string | null;
  registrationNumber: string | null;
} = {
  registeredOffice: null,
  registeredName: null,
  registrationNumber: null,
};

// Points 4: placeholder labelling. Set to false only when genuine content replaces the samples.
export const SHOW_PLACEHOLDER_LABELS = true;

// Certifications (About page). Nothing is published as fact until `confirmed` is true.
// With SHOW_PLACEHOLDER_LABELS on (design preview) unconfirmed items show with an "Unverified" tag.
// With it off (production) unconfirmed items are removed. Set confirmed: true only against real documents.
export const CERTIFICATIONS: { label: string; confirmed: boolean }[] = [
  { label: "Gas Safe Registration", confirmed: false },
  { label: "NICEIC Approval", confirmed: false },
  { label: "Public Liability Insurance", confirmed: false },
  { label: "DBS Enhanced Checks", confirmed: false },
  { label: "NEBOSH Health & Safety", confirmed: false },
  { label: "SMSTS (CITB)", confirmed: false },
  { label: "CSCS Card Holders", confirmed: false },
  { label: "First Aid at Work (Level 3)", confirmed: false },
];

export const HOME_PICKER = {
  Homeowner: [
    { label: "Repairs & Maintenance", tag: "HASSLE-FREE", title: "Repairs, big or small", body: "Tell us what needs doing and we’ll get the right trade on the job. You’ll know the cost before work begins." },
    { label: "Kitchen or Bathroom", tag: "START TO FINISH", title: "Full project management", body: "From first fix to finishing touches, we’ll bring the whole project together and keep you clear on costs along the way." },
    { label: "Renovation or Extension", tag: "FULL SERVICE", title: "Managed from start to finish", body: "From plans to completion, we’ll coordinate the work, the trades and everything in between." },
    { label: "Plumbing & Heating", tag: "QUALIFIED TRADES", title: "Repairs & installations", body: "Whether it needs fixing, replacing or installing, we’ll get the right expertise on the job and agree the cost first." },
    { label: "Electrical", tag: "QUALIFIED TRADES", title: "Repairs, upgrades & installations", body: "From everyday electrical jobs to larger installations, we’ll get the right electrician on the job and make the costs clear upfront." },
    { label: "Other", tag: "NO PROBLEM", title: "Not on the list?", body: "Tell us what you need — chances are we can help. If we can, we’ll let you know exactly what happens next." },
  ],
  Business: [
    { label: "Repairs & Maintenance", tag: "RELIABLE SUPPORT", title: "Repairs when you need them", body: "The right trade on the job, with work and costs clear from the start." },
    { label: "Planned Works", tag: "PLANNED AROUND YOU", title: "Works scheduled around you", body: "We’ll plan the work, coordinate the trades and agree timings to keep disruption to a minimum." },
    { label: "Property Refurbishments", tag: "START TO FINISH", title: "Everything the property needs", body: "From decorating and flooring to kitchens and bathrooms, all coordinated from start to finish." },
    { label: "End of Tenancy Works", tag: "QUICK TURNAROUND", title: "Ready for re-letting", body: "Repairs and finishing works taken care of, getting the property ready for its next tenant." },
    { label: "Renovations & Building Works", tag: "FULL SERVICE", title: "Building works, fully managed", body: "The work and trades coordinated from start to finish, with everything managed in one place." },
    { label: "Ongoing Contractor Support", tag: "ONE POINT OF CONTACT", title: "One team across your properties", body: "One reliable team for repairs, maintenance and works whenever your properties need us." },
  ],
} as const;

// Point 1: counters. `from` -> `to`, prefix/suffix wrap the number.
export const STATS = [
  { from: 200, to: 0, prefix: "£", suffix: "", label: "TO REQUEST A QUOTE" },
  { from: 1, to: 24, prefix: "", suffix: "H", label: "WE’LL GET BACK TO YOU" },
  { from: 50, to: 0, prefix: "", suffix: "", label: "JOBS TOO SMALL" },
  { from: null, to: null, prefix: "", suffix: "", text: "UK", label: "COVERAGE BEYOND LONDON" },
] as const;

// Point 6: single approved wording, used on Home and Services.
export const STEPS = [
  { n: "01", title: "START HERE", body: "Bring us what you’ve got — a problem, a plan or something you simply want changed.", cta: "Book a callout →", href: "/quote", icon: "phone" },
  { n: "02", title: "THE PLAN", body: "We’ll confirm the work, the costs and what happens next before anything gets started.", cta: "Request a quote →", href: "/quote", icon: "clipboard" },
  { n: "03", title: "CONSIDER IT HANDLED", body: "From the right trades to the finishing touches, we’ll coordinate the work through to completion.", cta: "See our services →", href: "/services", icon: "check" },
] as const;

export const SERVICES = [
  { tag: "ALL PROPERTY WORKS", title: "Repairs & Maintenance", body: "Everyday repairs, maintenance and smaller jobs that still need doing properly.", icon: "wrench" },
  { tag: "QUALIFIED TRADES", title: "Plumbing & Heating", body: "Plumbing repairs, leaks, installations, boilers, heating works and servicing.", icon: "droplet" },
  { tag: "QUALIFIED TRADES", title: "Electrical", body: "Electrical repairs, fault finding, rewiring, upgrades and installations.", icon: "zap" },
  { tag: "START TO FINISH", title: "Kitchen Fitting", body: "Complete kitchen installations, including units, worktops, plumbing, electrics and finishing.", icon: "home" },
  { tag: "START TO FINISH", title: "Bathroom Fitting", body: "Complete bathroom installations, including plumbing, tiling, electrics and finishing.", icon: "home" },
  { tag: "INTERIOR & EXTERIOR", title: "Painting & Decorating", body: "Painting, decorating and finishing works for interiors and exteriors.", icon: "paint" },
  { tag: "FLOOR FITTING", title: "Flooring", body: "Flooring installation and replacement, including laminate, vinyl, LVT and engineered wood.", icon: "layers" },
  { tag: "MADE & FITTED", title: "Carpentry & Joinery", body: "Doors, skirting, fitted storage and general carpentry and joinery works.", icon: "hammer" },
  { tag: "EXTERNAL WORKS", title: "Outdoor & Landscaping", body: "Patios, paving, fencing, decking and general outdoor improvements.", icon: "trees" },
  { tag: "FULL SERVICE", title: "Renovations & Refurbishments", body: "Property renovations and refurbishments, with the work and trades managed from start to finish.", icon: "home" },
  { tag: "FULL BUILD", title: "Extensions", body: "Single and double-storey extensions, kitchen extensions and wraparound projects.", icon: "home" },
  { tag: "FULL BUILD", title: "Loft Conversions", body: "Loft conversions designed to create more usable space within your home.", icon: "home" },
] as const;

export const FAQS = [
  { q: "What kind of work do you take on?", a: "From everyday repairs and maintenance to kitchens, bathrooms, renovations and extensions. Take a look at our Services page for everything we offer." },
  { q: "Do you take on small jobs?", a: "Absolutely. No job is too small — if it needs doing, tell us about it and we’ll let you know how we can help." },
  { q: "How does getting a quote work?", a: "Tell us about the job through our quote form and we’ll review the details and get in touch. If we need to see the job in person before quoting, we’ll arrange a visit with you." },
  { q: "Do you work with businesses and landlords?", a: "Yes. We work with landlords, property managers, estate agents and businesses on repairs, maintenance, planned works and larger property projects." },
  { q: "What areas do you cover?", a: "We cover London, Greater London and selected areas across the UK. If you’re unsure whether we cover your location, send us your postcode and we’ll let you know." },
];

export type Testimonial = { quote: string; name: string; place: string; project: string; category: string; image?: string };

// Sample content until Nelly supplies genuine testimonials and project photos. See SHOW_PLACEHOLDER_LABELS.
export const TESTIMONIAL_FILTERS = ["All", "Repairs & Maintenance", "Kitchens & Bathrooms", "Renovations", "Property Maintenance", "Commercial"];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Called about a persistent plumbing leak and sticking door. Fixed both cleanly in one visit.", name: "Sarah M.", place: "Beaconsfield", project: "Plumbing repair", category: "Repairs & Maintenance", image: "/reviews/plumbing.jpg" },
  { quote: "Full kitchen refurb completed on time and within budget. Excellent craftsmanship and communication.", name: "James T.", place: "Gerrards Cross", project: "Kitchen refurbishment", category: "Kitchens & Bathrooms", image: "/reviews/kitchen-before-after.jpg" },
  { quote: "Switched four contractors to one Kali Construction contract. The reporting alone was worth it.", name: "Chalfont Business Park", place: "Amersham", project: "Commercial maintenance", category: "Commercial" },
  { quote: "Transformed our master bathroom completely. Tiling, plumbing, and fittings finished to perfection.", name: "Priya K.", place: "Marlow", project: "Bathroom renovation", category: "Kitchens & Bathrooms", image: "/reviews/bathroom-1.jpg" },
  { quote: "Planned maintenance and routine safety certificates delivered without any disruption to residents.", name: "Riverside Care Home", place: "High Wycombe", project: "Planned maintenance", category: "Property Maintenance" },
  { quote: "Complete ground floor renovation. Managed seamlessly from structural work to final decorating.", name: "David R.", place: "Chalfont St Giles", project: "Renovation", category: "Renovations", image: "/reviews/extension.jpg" },
  { quote: "Prompt response for roof tile repairs and gutter clearing. Professional, polite, and very tidy.", name: "Emma L.", place: "Beaconsfield", project: "Roof repair", category: "Repairs & Maintenance" },
  { quote: "Single-storey rear extension built to immaculate standards. The team handled everything end-to-end.", name: "Tom W.", place: "Amersham", project: "Rear extension", category: "Renovations" },
  { quote: "Portfolio of 22 flats, one point of contact, zero missed certificates since we switched.", name: "Chandler Estates", place: "Marlow", project: "Portfolio maintenance", category: "Commercial" },
  { quote: "One team handled the tiling, plumbing and lighting, and kept us informed at every stage.", name: "Helen B.", place: "Gerrards Cross", project: "Bathroom renovation", category: "Kitchens & Bathrooms", image: "/reviews/bathroom-2.jpg" },
  { quote: "Clear quote up front, no surprises on the invoice, and the finish is exactly what we asked for.", name: "Mark & Anita S.", place: "Beaconsfield", project: "Bathroom renovation", category: "Kitchens & Bathrooms", image: "/reviews/bathroom-3.jpg" },
];

// Homepage shows a selection, linking through to /testimonials.
export const HOME_TESTIMONIAL_INDEXES = [0, 1, 3, 5];

export const COMMERCIAL_OPTIONS = {
  help: ["Repairs & Maintenance", "Planned Works", "Property Refurbishments", "End of Tenancy Works", "Renovations & Building Works", "Ongoing Contractor Support"],
  looking: ["One-off Job", "Ongoing Support", "Not Sure Yet"],
  sites: ["1", "2–5", "6–20", "21+"],
};

export const QUOTE_OPTIONS = ["Repairs & Maintenance", "Kitchen or Bathroom", "Renovation or Extension", "Plumbing & Heating", "Electrical", "Other"];
export const CALLBACK_TIMES = ["Morning", "Afternoon", "Evening"];
