"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_BASE_URL } from "@/data/services";

/**
 * نموذج الحجز المنبثق (BookingModal)
 * يظهر عندما ينقر العميل على زر "احجز الآن"
 * يجمع: التاريخ، الوقت، الملاحظات
 * ثم يرسل رسالة منسقة إلى الواتساب
 */

export interface BookingModalProps {
  /** اسم الخدمة أو الباقة المطلوب حجزها */
  serviceName: string;
  /** هل المودال مفتوح */
  isOpen: boolean;
  /** دالة لإغلاق المودال */
  onClose: () => void;
  /** نوع الحجز: "service" للخدمات، "subscription" للباقات */
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

    // بناء رسالة واتساب منسقة
    const lines: string[] = [];
    lines.push(`🌟 ${actionLabel}: ${serviceName}`);
    lines.push("");
    if (date) lines.push(`📅 التاريخ: ${date}`);
    if (time) lines.push(`⏰ الوقت: ${time}`);
    if (notes) lines.push(`📝 ملاحظات: ${notes}`);
    lines.push("");
    lines.push("شكراً لك — فريق Home Spa 💐");

    const message = lines.join("%0A");
    const url = `${WHATSAPP_BASE_URL}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
    onClose();

    // إعادة تعيين الحقول
    setDate("");
    setTime("");
    setNotes("");
  };

  // الحصول على تاريخ اليوم كحد أدنى
  const today = new Date().toISOString().split("T")[0];

  // إغلاق المودال عند النقر على الخلفية
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* المودال */}
      <div
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl animate-scale-in overflow-hidden"
        dir="rtl"
      >
        {/* رأس المودال */}
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
          <p className="mt-1 text-sm text-secondary">
            {serviceName}
          </p>
        </div>

        {/* نموذج الحجز */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          {/* حقل التاريخ */}
          <div>
            <label htmlFor="booking-date" className="mb-1.5 block text-sm font-semibold text-dark">
              📅 التاريخ المطلوب
            </label>
            <input
              id="booking-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={today}
              required
              className="w-full rounded-xl border border-secondary-dark bg-offwhite px-4 py-3 text-sm text-dark placeholder:text-dark-muted/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="اختر تاريخ الحجز"
            />
          </div>

          {/* حقل الوقت */}
          <div>
            <label htmlFor="booking-time" className="mb-1.5 block text-sm font-semibold text-dark">
              ⏰ الوقت المناسب
            </label>
            <select
              id="booking-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full rounded-xl border border-secondary-dark bg-offwhite px-4 py-3 text-sm text-dark transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="" disabled>
                اختر الوقت المناسب
              </option>
              <option value="٩:٠٠ صباحاً">٩:٠٠ صباحاً</option>
              <option value="١٠:٠٠ صباحاً">١٠:٠٠ صباحاً</option>
              <option value="١١:٠٠ صباحاً">١١:٠٠ صباحاً</option>
              <option value="١٢:٠٠ ظهراً">١٢:٠٠ ظهراً</option>
              <option value="١:٠٠ مساءً">١:٠٠ مساءً</option>
              <option value="٢:٠٠ مساءً">٢:٠٠ مساءً</option>
              <option value="٣:٠٠ مساءً">٣:٠٠ مساءً</option>
              <option value="٤:٠٠ مساءً">٤:٠٠ مساءً</option>
              <option value="٥:٠٠ مساءً">٥:٠٠ مساءً</option>
              <option value="٦:٠٠ مساءً">٦:٠٠ مساءً</option>
              <option value="٧:٠٠ مساءً">٧:٠٠ مساءً</option>
              <option value="٨:٠٠ مساءً">٨:٠٠ مساءً</option>
              <option value="٩:٠٠ مساءً">٩:٠٠ مساءً</option>
            </select>
          </div>

          {/* حقل الملاحظات */}
          <div>
            <label htmlFor="booking-notes" className="mb-1.5 block text-sm font-semibold text-dark">
              📝 ملاحظات إضافية <span className="font-normal text-dark-muted">(اختياري)</span>
            </label>
            <textarea
              id="booking-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-secondary-dark bg-offwhite px-4 py-3 text-sm text-dark placeholder:text-dark-muted/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              placeholder="أي تفاصيل إضافية تود ذكرها..."
            />
          </div>

          {/* أزرار الإجراء */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-secondary-dark px-4 py-3 text-sm font-semibold text-dark-muted transition-colors hover:bg-secondary hover:text-dark"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="flex-[2] rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-200 transition-all hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-green-300 flex items-center justify-center gap-2"
            >
              {/* أيقونة واتساب */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              إرسال عبر واتساب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
