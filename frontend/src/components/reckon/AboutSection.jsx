import { motion } from "framer-motion";
import { Award, MapPin, Users } from "lucide-react";

const OFFICE_IMG =
  "https://images.unsplash.com/photo-1694702702714-a48c5fabdaf3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDB8fHx8MTc3NjUwMzc1OXww&ixlib=rb-4.1.0&q=85";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="rc-section bg-white text-[#0F172A]"
      data-testid="section-about"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-12 grid grid-cols-12 gap-8 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="col-span-12 lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[2px] bg-[#0055FF]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0055FF]">
              02 / About & Vision
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.02] tracking-tight">
            Two decades of powering
            <br />
            <span className="text-[#475569]">Marathwada's businesses.</span>
          </h2>
          <p className="mt-7 text-[#475569] text-base md:text-lg leading-relaxed max-w-2xl">
            Founded in <span className="text-[#0F172A] font-semibold">2005</span>,
            Reckon Computers started as a neighbourhood IT shop in Chh. Sambhaji
            Nagar and is today the leading IT products &amp; services company
            across the Marathwada region — trusted for quality, speed and
            rock-solid after-sales service.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-0 border-t border-[#E2E8F0]">
            {[
              {
                icon: Award,
                k: "HP Regional",
                v: "Distributor for Marathwada",
              },
              {
                icon: Users,
                k: "500+ Clients",
                v: "Govt, banks, colleges, SMBs",
              },
              {
                icon: MapPin,
                k: "Kalda Corner",
                v: "Dargah Road, Aurangabad",
              },
            ].map((c) => (
              <div
                key={c.k}
                className="p-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-[#E2E8F0]"
              >
                <c.icon className="w-5 h-5 text-[#0055FF] mb-3" />
                <div className="font-display font-semibold text-lg">{c.k}</div>
                <div className="text-sm text-[#475569] mt-1">{c.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-[#0055FF] pl-5 max-w-xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#0055FF] mb-2">
              Our Vision
            </div>
            <p className="font-display text-lg md:text-xl leading-snug text-[#0F172A]">
              “To be the most trusted IT partner for every business, institution
              and home in Marathwada — delivering world-class technology with
              local care.”
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="col-span-12 lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={OFFICE_IMG}
              alt="Modern office building"
              className="w-full h-full object-cover"
              data-testid="about-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
                Since 2005
              </div>
              <div className="font-display text-2xl font-semibold mt-1">
                Chh. Sambhaji Nagar HQ
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -left-5 hidden md:block bg-[#0055FF] text-white px-5 py-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-80">
              Established
            </div>
            <div className="font-display text-3xl font-bold">2005</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
