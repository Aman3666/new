import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/cfadf56b-cd05-4ed8-b011-684ac1316725/images/36a10a2d3679414bfc7835d8faa1b0230437aaa653ba86d11af63df4608ba03f.png";

export default function HeroSection({ onNav }) {
  return (
    <section
      id="home"
      className="rc-section bg-[#0A0F1C] text-white"
      data-testid="section-home"
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-55"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/55 via-[#0A0F1C]/75 to-[#0A0F1C]" />
      <div className="absolute inset-0 rc-grid-overlay opacity-60" />
      <div className="absolute inset-0 rc-noise opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 md:pt-28 pb-10">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[2px] bg-[#06B6D4]" />
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#06B6D4]">
                Est. 2005 · Chh. Sambhaji Nagar
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-bold leading-[0.95] tracking-tight"
              data-testid="hero-title"
            >
              Marathwada's biggest
              <br />
              <span className="text-white/55">authorized</span>{" "}
              <span className="relative inline-block">
                HP distributor
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] bg-[#0055FF]" />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed"
            >
              Two decades of trust delivering computers, laptops, printers,
              CCTV surveillance and end-to-end IT solutions to banks, colleges,
              government bodies and enterprises across the Marathwada region.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button
                onClick={() => onNav("contact")}
                data-testid="hero-cta-contact"
                className="rounded-none bg-[#0055FF] hover:bg-[#0044CC] text-white h-12 px-7 text-[15px] group"
              >
                Request a quote
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                onClick={() => onNav("services")}
                data-testid="hero-cta-services"
                variant="outline"
                className="rounded-none h-12 px-7 text-[15px] border-white/30 bg-transparent text-white hover:bg-white hover:text-[#0A0F1C]"
              >
                Explore services
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="col-span-12 lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-5 lg:gap-0 lg:divide-y divide-white/10 lg:border-l lg:border-white/10 lg:pl-8"
          >
            {[
              { k: "20+", v: "Years delivering IT" },
              { k: "3500+", v: "Jetking placements" },
              { k: "18+", v: "Years as Intel partner" },
            ].map((s) => (
              <div key={s.v} className="py-4">
                <div className="font-display text-4xl lg:text-5xl font-bold text-white">
                  {s.k}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mt-2">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16 flex items-center gap-3 text-white/40">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em]">
            Scroll · 01 of 06
          </span>
        </div>
      </div>
    </section>
  );
}
