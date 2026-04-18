import { motion } from "framer-motion";
import { GraduationCap, Landmark, Building2, Shield, Milk } from "lucide-react";

const CLIENTS = [
  {
    icon: Landmark,
    name: "Aurangabad District Central Co-op Bank",
    tag: "Banking",
  },
  { icon: GraduationCap, name: "Deogiri College", tag: "Education" },
  { icon: GraduationCap, name: "Vivekanand College", tag: "Education" },
  { icon: Milk, name: "District Milk Union", tag: "Cooperative" },
  { icon: Shield, name: "Police Department (AMC)", tag: "Government" },
  { icon: Building2, name: "500+ SMB & Enterprise", tag: "Business" },
];

const SERVER_IMG =
  "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjByb29tJTIwZGF0YWNlbnRlcnxlbnwwfHx8fDE3NzY1MDM3NTl8MA&ixlib=rb-4.1.0&q=85";

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="rc-section bg-white text-[#0F172A]"
      data-testid="section-clients"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-12 grid grid-cols-12 gap-8 md:gap-12">
        {/* Left: Jetking Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="col-span-12 lg:col-span-5 relative"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#0055FF]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0055FF]">
              05 / Training & Clients
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.02] tracking-tight">
            Building careers
            <br />
            <span className="text-[#475569]">since 2010.</span>
          </h2>

          <div className="mt-8 relative overflow-hidden border border-[#E2E8F0] bg-[#0A0F1C] text-white">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25"
              style={{ backgroundImage: `url(${SERVER_IMG})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/90 via-[#0A0F1C]/80 to-transparent" />
            <div className="relative p-7 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#06B6D4]">
                Partner since 2010
              </div>
              <div className="mt-2 font-display text-3xl font-bold">
                Jetking Institute
              </div>
              <div className="mt-6 flex items-end gap-4">
                <div className="font-display text-[72px] leading-none font-bold tracking-tight">
                  3500
                  <span className="text-[#06B6D4]">+</span>
                </div>
                <div className="pb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 max-w-[10ch]">
                  students placed in IT careers
                </div>
              </div>
              <p className="mt-6 text-sm text-white/70 max-w-sm leading-relaxed">
                Hands-on hardware, networking and cybersecurity programs — the
                only official Jetking centre in Chh. Sambhaji Nagar.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Client list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="col-span-12 lg:col-span-7"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold">
              Major Clients
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
              A partial list
            </span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-[#E2E8F0]"
            data-testid="clients-grid"
          >
            {CLIENTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-5 md:p-6 border-r border-b border-[#E2E8F0] flex items-start gap-4 hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="w-11 h-11 flex-shrink-0 bg-[#0F172A] text-white flex items-center justify-center group-hover:bg-[#0055FF] transition-colors">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#475569]">
                    {c.tag}
                  </div>
                  <div className="mt-1 font-display font-semibold text-[15px] md:text-base text-[#0F172A] leading-snug">
                    {c.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-[#F8FAFC] border-l-2 border-[#0055FF]">
            <p className="text-sm text-[#475569] leading-relaxed">
              From <span className="text-[#0F172A] font-semibold">District
              Central Co-op Bank</span> to the{" "}
              <span className="text-[#0F172A] font-semibold">Police
              Department</span>, institutions across Marathwada rely on Reckon
              Computers for critical IT infrastructure, procurement and AMC.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
