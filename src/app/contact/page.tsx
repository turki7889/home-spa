"use client";

import { BookButton } from "@/components/BookButton";
import { useState } from "react";
import { whatsappLink } from "@/data/services";
import type { Metadata } from "next";

/**
 * صفحة التواصل
 * نموذج اتصال للعرض + روابط واتساب ومعلومات الاتصال
 */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* نموذج للعرض فقط — يفتح واتساب مع تفاصيل الرسالة */
    const text = `مرحباً،\nالاسم: ${form.name}\nرقم الجوال: ${form.phone}\nالرسالة: ${form.message}`;
    window.open(whatsappLink(text), "_blank");
  };

  return (
    <div>
      {/* ================================================================
          رأس الصفحة
          ================================================================ */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            تواصل معنا
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            يسعدنا تواصلك معنا
          </h1>
          <div className="divider-gold mx-auto"></div>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-secondary">
            نحن هنا لخدمتك. تواصل معنا عبر واتساب أو املأ النموذج أدناه وسنعود إليك في أقرب وقت.
          </p>
        </div>
      </section>

      {/* ================================================================
          المحتوى الرئيسي
          ================================================================ */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* العمود الأيسر: معلومات الاتصال */}
          <div className="space-y-8">
            {/* بطاقة واتساب الأساسية */}
            <div className="card overflow-hidden border-2 border-[#25D366]/30">
              <div className="bg-[#25D366] px-6 py-5 text-white">
                <div className="flex items-center gap-3">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold">تواصل عبر واتساب</h3>
                    <p className="text-sm text-white/80">الطريقة الأسرع للحجز والاستفسار</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-dark-muted">رقم الواتساب:</p>
                <p className="mb-4 text-lg font-bold text-dark" dir="ltr">
                  +966 54 998 6148
                </p>
                <BookButton
                  serviceName="موعد في Home Spa"
                  label="افتح المحادثة في واتساب"
                  className="btn-primary w-full text-center"
                />
              </div>
            </div>

            {/* بطاقة معلومات إضافية */}
            <div className="card p-6">
              <h3 className="mb-4 text-lg font-bold text-dark">معلومات التواصل</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-dark">ساعات العمل</p>
                    <p className="text-sm text-dark-muted">
                      يومياً من ٩ صباحاً حتى ١٠ مساءً
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-dark">منطقة الخدمة</p>
                    <p className="text-sm text-dark-muted">
                      الرياض وجميع المدن الكبرى في المملكة
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-dark">رقم الجوال</p>
                    <p className="text-sm text-dark-muted" dir="ltr">
                      +966 54 998 6148
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* العمود الأيمن: نموذج الاتصال */}
          <div className="card p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-dark">أرسل لنا رسالة</h3>
              <p className="text-sm text-dark-muted">
                املأ النموذج أدناه وسيتم فتح محادثة واتساب مع تفاصيل رسالتك.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* حقل الاسم */}
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-dark">
                  الاسم الكامل
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-secondary bg-white px-4 py-3 text-sm text-dark placeholder:text-dark-muted/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* حقل الجوال */}
              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-dark">
                  رقم الجوال
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-secondary bg-white px-4 py-3 text-sm text-dark placeholder:text-dark-muted/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                />
              </div>

              {/* حقل الرسالة */}
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-dark">
                  الرسالة
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-secondary bg-white px-4 py-3 text-sm text-dark placeholder:text-dark-muted/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              {/* زر الإرسال */}
              <button type="submit" className="btn-primary w-full text-base">
                أرسل عبر واتساب
              </button>

              <p className="text-center text-xs text-dark-muted">
                بالضغط على &quot;أرسل عبر واتساب&quot;، سيتم فتح تطبيق واتساب مع تفاصيل رسالتك.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================================================================
          خريطة أو قسم إضافي
          ================================================================ */}
      <section className="bg-spa-warm py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <span className="mb-3 inline-block text-4xl">🌍</span>
          <h2 className="mb-4 text-2xl font-bold text-dark sm:text-3xl">
            نخدم جميع مناطق الرياض
          </h2>
          <p className="mb-8 leading-relaxed text-dark-muted">
            نغطي الرياض وجميع المدن الكبرى في المملكة العربية السعودية.
            أينما كنت، فريقنا جاهز للوصول إليك.
          </p>
          <BookButton
            serviceName="الاستفسار عن مناطق الخدمة"
            label="استفسر عن منطقتك"
            className="btn-primary inline-flex"
          />
        </div>
      </section>
    </div>
  );
}
