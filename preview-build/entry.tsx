import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Home from "@/app/page";
import Services from "@/app/services/page";
import OurWork from "@/app/our-work/page";
import Commercial from "@/app/commercial/page";
import About from "@/app/about/page";
import Testimonials from "@/app/testimonials/page";
import Quote from "@/app/quote/page";
import { currentRoute } from "next/navigation";

const ROUTES: Record<string, () => JSX.Element> = {
  home: Home, services: Services, "our-work": OurWork, commercial: Commercial,
  about: About, testimonials: Testimonials, quote: Quote,
};

function App() {
  const [route, setRoute] = useState(currentRoute());
  useEffect(() => {
    const on = () => { setRoute(currentRoute()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const Page = ROUTES[route] || Home;
  return (
    <>
      <Nav />
      <main className="page-enter" key={route}><Page /></main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
