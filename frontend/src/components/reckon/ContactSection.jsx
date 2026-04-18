import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const WA_NUMBER = "919975030303";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildWhatsAppText = () =>
    `Hi Reckon Computers,%0A%0A` +
    `*Name:* ${form.name}%0A` +
    `*Email:* ${form.email}%0A` +
    `*Phone:* ${form.phone}%0A` +
    `*Subject:* ${form.subject || "General Enquiry"}%0A%0A` +
    `${form.message}`;

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill all required fields.");
      return;
    }
    setLoading(true);
    // Try to save to backend if available; fall back gracefully for static hosts (e.g. GitHub Pages).
    if (BACKEND_URL) {
      try {
        await axios.post(`${BACKEND_URL}/api/contact`, form, { timeout: 6000 });
      } catch (_) {
        /* silent fallback — the WhatsApp link still opens below */
      }
    }
    // Open WhatsApp with the message pre-filled — works on any host, including GitHub Pages
    const url = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppText()}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your message…");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "General Enquiry",
      message: "",
    });
    setLoading(false);
  };

  const waQuickLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hi Reckon Computers, I'd like to enquire about your products / services."
  )}`;

  return (
    <section
      id="contact"
      className="rc-section bg-[#F8FAFC] text-[#0F172A]"
      data-testid="section-contact"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-24 pb-16 grid grid-cols-12 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#0055FF]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0055FF]">
              06 / Contact
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.02] tracking-tight">
            Let's talk
            <br />
            <span className="text-[#475569]">technology.</span>
          </h2>
          <p className="mt-6 text-[#475569] leading-relaxed max-w-md">
            Drop us a message and our team will get back within 24 hours.
            Prefer WhatsApp or a quick call? We're right there too.
          </p>

          <div className="mt-8 space-y-0 border-t border-[#E2E8F0]">
            {[
              {
                icon: MapPin,
                label: "Visit us",
                value: "Kalda Corner, Dargah Road, Chh. Sambhaji Nagar (Aurangabad)",
              },
              {
                icon: Phone,
                label: "Call us",
                value: "+91-240-2332963  ·  +91-240-6620605",
                href: "tel:+912402332963",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@reckoncomputers.in",
                href: "mailto:info@reckoncomputers.in",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon – Sat · 10:00 AM – 8:30 PM",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href || "#contact"}
                className="group flex items-start gap-4 py-4 border-b border-[#E2E8F0] hover:bg-white -mx-4 px-4 transition-colors"
              >
                <c.icon className="w-4 h-4 text-[#0055FF] mt-1" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
                    {c.label}
                  </div>
                  <div className="mt-0.5 text-[#0F172A] font-medium text-sm md:text-[15px]">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <a
            href={waQuickLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-btn"
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-3 font-medium transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="col-span-12 lg:col-span-7 bg-white border border-[#E2E8F0] p-6 md:p-10"
          data-testid="contact-form"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="font-display text-xl font-semibold">
              Send an enquiry
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
              Required fields *
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Name *
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={onChange("name")}
                placeholder="Your full name"
                required
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF] h-12"
                data-testid="contact-name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                placeholder="you@company.com"
                required
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF] h-12"
                data-testid="contact-email"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Phone *
              </Label>
              <Input
                id="phone"
                value={form.phone}
                onChange={onChange("phone")}
                placeholder="+91 98765 43210"
                required
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF] h-12"
                data-testid="contact-phone"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Subject
              </Label>
              <Input
                id="subject"
                value={form.subject}
                onChange={onChange("subject")}
                placeholder="Bulk laptop quote, CCTV, AMC..."
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF] h-12"
                data-testid="contact-subject"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message" className="text-xs font-mono uppercase tracking-[0.2em] text-[#475569]">
                Message *
              </Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={onChange("message")}
                placeholder="Tell us what you need — quantity, timeline, any preferences..."
                required
                rows={5}
                className="mt-2 rounded-none border-[#E2E8F0] focus-visible:ring-0 focus-visible:border-[#0055FF]"
                data-testid="contact-message"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-[#475569] max-w-sm leading-relaxed">
              Submitting will open WhatsApp with your enquiry pre-filled, ready
              to send.
            </p>
            <Button
              type="submit"
              disabled={loading}
              data-testid="contact-submit"
              className="rounded-none bg-[#25D366] hover:bg-[#1ebe5d] text-white h-12 px-7"
            >
              {loading ? "Opening..." : "Send via WhatsApp"}
              <FaWhatsapp className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.form>
      </div>

      <footer className="absolute bottom-0 left-0 right-0 border-t border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex flex-col md:flex-row gap-1.5 md:items-center md:justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#475569]">
            © {new Date().getFullYear()} Reckon Computers · Chh. Sambhaji Nagar
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#475569]">
            HP Regional Distributor · Authorized Intel · Microsoft · Lenovo · Dell
          </div>
        </div>
      </footer>
    </section>
  );
}
