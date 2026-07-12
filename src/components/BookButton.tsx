"use client";

import { useState } from "react";
import { BookingModal } from "./BookingModal";

/**
 * زر الحجز (BookButton)
 * مكون عميل (use client) يفتح نموذج الحجز المنبثق عند النقر
 * يستخدم في جميع الصفحات بدلاً من رابط واتساب المباشر
 */

interface BookButtonProps {
  /** اسم الخدمة أو الباقة */
  serviceName: string;
  /** نص الزر */
  label?: string;
  /** نوع الحجز */
  type?: "service" | "subscription";
  /** كلاسات Tailwind إضافية */
  className?: string;
}

export function BookButton({
  serviceName,
  label = "احجز الآن",
  type = "service",
  className = "",
}: BookButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {label}
      </button>

      <BookingModal
        serviceName={serviceName}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={type}
      />
    </>
  );
}
