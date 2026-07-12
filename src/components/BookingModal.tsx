"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_BASE_URL } from "@/data/services";
import { FaWhatsapp } from "react-icons/fa";

export interface BookingModalProps {
  serviceName: string;
  isOpen: boolean;
  onClose: () => void;
  type?: "service" | "subscription";
}

export function BookingModal({
  serviceName,
  isOpen,
  onClose,
  type = "service",
}: BookingModalProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const actionLabel = type === "subscription" ? "الاشتراك في" : "حجز";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines: string[] = [];
    lines.push(`${actionLabel}: ${serviceName}`);
    lines.push("");
    if (date) lines.push(`التاريخ: ${date}`);
    if (time) lines.push(`الوقت: ${time}`);
    if (notes) lines.push(`ملاحظات: ${notes}`);
    lines.push("");
    lines.push("شكراً لك - فريق Home Spa");

    const message = lines.join("%0A");
    const url = `${WHATSAPP_BASE_URL}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
    onClose();

    setDate("");
    setTime("");
    setNotes("");
  };

  const today = new Date().toISOString().split("T")[0];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl animate-scale-in overflow-hidden"
        dir="rtl"
      >
        {/* Modal header */}
        <div className="bg-spa-dark px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">
              {type === "subscription" ? "اشترك في الباقة" : "احجز خدمتك"}
            </h3>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="إغلاق"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="mt-1 text-sm text-bone">{serviceName}</p>
        </div>

        {/* Booking form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          <div>
            <label htmlFor="booking-date" className="mb-1.5 block text-sm font-semibold text-espresso">
              التاريخ المطلوب
            </label>
            <input
              id="booking-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={today}
              required
              className="w-full rounded-xl border border-bone-dark bg-offwhite px-4 py-3 text-sm text-espresso placeholder:text-muted-light/50 transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20"
            />
          </div>

          <div>
            <label htmlFor="booking-time" className="mb-1.5 block text-sm font-semibold text-espresso">
              الوقت المناسب
            </label>
            <select
              id="booking-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full rounded-xl border border-bone-dark bg-offwhite px-4 py-3 text-sm text-espresso transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20"
            >
              <option value="" disabled>اختر الوقت المناسب</option>
              <option value="9:00 صباحاً">9:00 صباحاً</option>
              <option value="10:00 صباحاً">10:00 صباحاً</option>
              <option value="11:00 صباحاً">11:00 صباحاً</option>
              <option value="12:00 ظهراً">12:00 ظهراً</option>
              <option value="1:00 مساءً">1:00 مساءً</option>
              <option value="2:00 مساءً">2:00 مساءً</option>
              <option value="3:00 مساءً">3:00 مساءً</option>
              <option value="4:00 مساءً">4:00 مساءً</option>
              <option value="5:00 مساءً">5:00 مساءً</option>
              <option value="6:00 مساءً">6:00 مساءً</option>
              <option value="7:00 مساءً">7:00 مساءً</option>
              <option value="8:00 مساءً">8:00 مساءً</option>
              <option value="9:00 مساءً">9:00 مساءً</option>
            </select>
          </div>

          <div>
            <label htmlFor="booking-notes" className="mb-1.5 block text-sm font-semibold text-espresso">
              ملاحظات إضافية <span className="font-normal text-muted">(اختياري)</span>
            </label>
            <textarea
              id="booking-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-bone-dark bg-offwhite px-4 py-3 text-sm text-espresso placeholder:text-muted-light/50 transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 resize-none"
              placeholder="أي تفاصيل إضافية تود ذكرها..."
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-bone-dark px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-bone hover:text-espresso"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="flex-[2] rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-200 transition-all hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-green-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="h-5 w-5" />
              إرسال عبر واتساب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
