import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ active, onNav, sections }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    onNav(id);
    setOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 rc-glass"
      data-testid="main-nav"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2.5 group"
          data-testid="nav-logo"
        >
          <span className="w-9 h-9 rounded-[8px] bg-[#E11D2A] text-white flex items-center justify-center">
            <Cpu className="w-5 h-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none text-left">
            <span className="font-display font-extrabold text-[16px] tracking-tight text-[#E11D2A]">
              RECKON
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E11D2A]/80">
              Computers
            </span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              data-testid={`nav-${s.id}`}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                active === s.id
                  ? "text-[#0055FF]"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[#0055FF]" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+912402332963"
            className="font-mono text-xs text-[#475569] hover:text-[#0055FF] transition-colors"
            data-testid="nav-phone"
          >
            +91-240-2332963
          </a>
          <Button
            onClick={() => handleNav("contact")}
            data-testid="nav-contact-btn"
            className="rounded-none bg-[#0055FF] hover:bg-[#0044CC] text-white px-5"
          >
            Get in touch
          </Button>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t border-[#E2E8F0] bg-white/95"
          data-testid="nav-mobile-panel"
        >
          <div className="px-5 py-4 flex flex-col">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                data-testid={`nav-mobile-${s.id}`}
                className={`text-left py-3 border-b border-[#E2E8F0] font-medium ${
                  active === s.id ? "text-[#0055FF]" : "text-[#0F172A]"
                }`}
              >
                {s.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("contact")}
              className="mt-4 rounded-none bg-[#0055FF] hover:bg-[#0044CC] text-white"
              data-testid="nav-mobile-contact-btn"
            >
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
