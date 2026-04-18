import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "@/components/reckon/Navbar";
import SideDots from "@/components/reckon/SideDots";
import WhatsAppFloat from "@/components/reckon/WhatsAppFloat";
import HeroSection from "@/components/reckon/HeroSection";
import AboutSection from "@/components/reckon/AboutSection";
import PartnersSection from "@/components/reckon/PartnersSection";
import ServicesSection from "@/components/reckon/ServicesSection";
import ClientsSection from "@/components/reckon/ClientsSection";
import ContactSection from "@/components/reckon/ContactSection";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "partners", label: "Partners" },
  { id: "services", label: "Services" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export default function ReckonSite() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState("home");

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el && scrollerRef.current) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            setActive(entry.target.id);
          }
        });
      },
      { root: container, threshold: [0.55, 0.75] }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative" data-testid="reckon-site-root">
      <Navbar active={active} onNav={scrollTo} sections={SECTIONS} />
      <SideDots active={active} onNav={scrollTo} sections={SECTIONS} />
      <WhatsAppFloat />

      <main ref={scrollerRef} className="rc-snap" data-testid="rc-scroller">
        <HeroSection onNav={scrollTo} />
        <AboutSection />
        <PartnersSection />
        <ServicesSection />
        <ClientsSection />
        <ContactSection />
      </main>
    </div>
  );
}
