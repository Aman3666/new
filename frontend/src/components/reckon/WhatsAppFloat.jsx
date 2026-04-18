import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phone = "919975030303";
  const msg = encodeURIComponent(
    "Hi Reckon Computers, I'd like to enquire about your products / services."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl wa-pulse hover:bg-[#1ebe5d] transition-colors"
      data-testid="whatsapp-cta"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
