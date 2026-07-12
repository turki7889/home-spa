import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966549986148?text=مرحباً، أود حجز موعد في Home Spa"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-rose/25 hover:bg-[#20BD5A] sm:h-16 sm:w-16"
      aria-label="تواصلي معنا عبر واتساب"
      title="تواصلي معنا عبر واتساب"
    >
      <FaWhatsapp className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />

      {/* Pulse indicator — softened */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-light opacity-75" />
        <span className="relative inline-flex h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-rose" />
      </span>
    </a>
  );
}
