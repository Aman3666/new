import { motion } from "framer-motion";
import {
  SiHp,
  SiDell,
  SiLenovo,
  SiIntel,
  SiAmd,
  SiEpson,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { ShieldCheck, Video, Printer, Zap } from "lucide-react";

const PRIMARY_BRANDS = [
  { name: "HP", Icon: SiHp, badge: "Regional Distributor" },
  { name: "Lenovo", Icon: SiLenovo, badge: "Authorized Partner" },
  { name: "Dell", Icon: SiDell, badge: "Authorized Partner" },
  { name: "Intel", Icon: SiIntel, badge: "18+ yr Channel Partner" },
  { name: "Microsoft", Icon: FaMicrosoft, badge: "Authorized Dealer" },
  { name: "AMD", Icon: SiAmd, badge: "Authorized Dealer" },
];

const SURVEILLANCE = [
  { name: "CP Plus", tag: "Regional Distributor" },
  { name: "Hikvision", tag: "Regional Distributor" },
  { name: "Dahua", tag: "Regional Distributor" },
];

const OTHERS = ["Epson", "Numeric", "Artis", "Quick Heal"];

const DISTRIBUTORS = [
  "Savex Technologies",
  "Ingram Micro",
  "Redington India",
  "Rashi Peripherals (RP Tech)",
];

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="rc-section bg-[#F8FAFC] text-[#0F172A]"
      data-testid="section-partners"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#0055FF]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0055FF]">
                03 / Partnerships & Brands
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.02] tracking-tight max-w-3xl">
              Official partner to the world's biggest tech brands.
            </h2>
          </div>
          <p className="text-[#475569] max-w-sm text-sm md:text-base">
            Every product we sell is sourced directly through authorized
            channels — genuine warranty, verified inventory and OEM pricing.
          </p>
        </motion.div>

        {/* Primary Brands Bento */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-[#E2E8F0]"
          data-testid="partners-grid"
        >
          {PRIMARY_BRANDS.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative p-6 md:p-7 border-r border-b border-[#E2E8F0] bg-white hover:bg-[#0A0F1C] hover:text-white transition-all duration-300 ${
                b.name === "HP"
                  ? "md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#0055FF] text-white hover:bg-[#0044CC]"
                  : ""
              }`}
              data-testid={`brand-${b.name.toLowerCase()}`}
            >
              <b.Icon
                className={`transition-all duration-300 ${
                  b.name === "HP" ? "w-16 h-16 md:w-24 md:h-24" : "w-12 h-12"
                }`}
              />
              <div
                className={`mt-6 font-mono text-[10px] uppercase tracking-[0.22em] ${
                  b.name === "HP" ? "text-white/70" : "text-[#475569] group-hover:text-white/60"
                }`}
              >
                {b.badge}
              </div>
              <div
                className={`mt-1 font-display font-semibold ${
                  b.name === "HP" ? "text-2xl md:text-3xl" : "text-lg"
                }`}
              >
                {b.name}
              </div>
              {b.name === "HP" && (
                <div className="mt-6 md:mt-10 inline-flex items-center gap-2 bg-white text-[#0055FF] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em]">
                  <Zap className="w-3 h-3" /> Flagship partnership
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Surveillance + Others */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l border-r border-b border-[#E2E8F0]">
          <div className="p-6 md:p-7 bg-white border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-[#0055FF] mb-3">
              <Video className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                Surveillance — Regional Distributor
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {SURVEILLANCE.map((s) => (
                <span
                  key={s.name}
                  className="inline-flex items-center gap-2 border border-[#E2E8F0] px-3 py-2 font-display font-medium text-[#0F172A]"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0055FF]" />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 md:p-7 bg-white border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-[#0055FF] mb-3">
              <Printer className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                Other Brands
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {OTHERS.map((s) => (
                <span
                  key={s}
                  className="border border-[#E2E8F0] px-3 py-2 font-display font-medium text-[#0F172A] flex items-center gap-2"
                >
                  {s === "Epson" ? <SiEpson className="w-4 h-4" /> : null}
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 md:p-7 bg-[#0A0F1C] text-white">
            <div className="flex items-center gap-2 text-[#06B6D4] mb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                National Distributors
              </span>
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {DISTRIBUTORS.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-2 border-b border-white/10 pb-2 last:border-0"
                >
                  <span className="w-1 h-1 bg-[#06B6D4]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
