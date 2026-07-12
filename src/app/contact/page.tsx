"use client";

import { BookButton } from "@/components/BookButton";
import { useState } from "react";
import { whatsappLink, WHATSAPP_NUMBER } from "@/data/services";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `مرحباً،\nالاسم: ${form.name}\nرقم الجوال: ${form.phone}\nالرسالة: ${form.message}`;
    window.open(whatsappLink(text), "_blank");
  };

            return (
    <div>
      {/* Page header */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            يسعدنا تواصلك معنا
          </h1>
          <div className="divider-accent mx-auto" />
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-accent-light">
            نحن هنا لخدمتك. تواصلي معنا عبر واتساب أو املئي النموذج أدناه وسنعود إليك في أقرب وقت.
          </p>
        </div>
      </section>

      {/* Main content — two columns */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: Contact info */}
          <div className="space-y-6">
            {/* WhatsApp card */}
            <div className="card overflow-hidden border-2 border-accent/20">
              <div className="bg-accent px-6 py-5 text-white">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8">✅</span>
                  <div>
                    <h3 className="text-lg font-bold">تواصلي عبر واتساب</h3>
                    <p className="text-sm text-white/80">الطريقة الأسرع للحجز والاستفسار</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-text-muted">رقم الواتساب:</p>
                <p className="mb-4 text-lg font-bold text-text" dir="ltr">
                  +966 54 998 6148
                </p>
                <BookButton
                  serviceName="موعد في Home Spa"
                  label="افتحي المحادثة في واتساب"
                  className="btn-primary w-full text-center"
                />
              </div>
            </div>

            {/* Info card */}
            <div className="card p-6">
              <h3 className="mb-5 text-lg font-bold text-text">معلومات التواصل</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent">✅</span>
                  <div>
                    <p className="text-sm font-bold text-text">ساعات العمل</p>
                    <p className="text-sm text-text-muted">يومياً من 9 صباحاً حتى 10 مساءً</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent">✅</span>
                  <div>
                    <p className="text-sm font-bold text-text">منطقة الخدمة</p>
                    <p className="text-sm text-text-muted">الرياض وجميع المدن الكبرى في المملكة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent">✅</span>
                  <div>
                    <p className="text-sm font-bold text-text">رقم الجوال</p>
                    <p className="text-sm text-text-muted" dir="ltr">+966 54 998 6148</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="card p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-text">أرسلي لنا رسالة</h3>
              <p className="text-sm text-text-muted">
                املئي النموذج أدناه وسيتم فتح محادثة واتساب مع تفاصيل رسالتك.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-text">
                  الاسم الكامل
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-soft bg-bg px-4 py-3 text-sm text-text placeholder:text-text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="أدخلي اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-text">
                  رقم الجوال
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-soft bg-bg px-4 py-3 text-sm text-text placeholder:text-text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text">
                  الرسالة
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-soft bg-bg px-4 py-3 text-sm text-text placeholder:text-text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="اكتبي رسالتك هنا..."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-base">
                أرسلي عبر واتساب
              </button>

              <p className="text-center text-xs text-text-muted">
                بالضغط على زر الإرسال، سيتم فتح تطبيق واتساب مع تفاصيل رسالتك.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Service area section */}
      <section className="bg-spa-warm py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-pale text-accent">
            <span className="h-7 w-7">✅</span>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-text sm:text-3xl">
            نخدم جميع مناطق الرياض
          </h2>
          <p className="mb-8 leading-relaxed text-text-muted">
            نغطي الرياض وجميع المدن الكبرى في المملكة العربية السعودية.
            أينما كنتِ، فريقنا جاهز للوصول إليك.
          </p>
          <BookButton
            serviceName="الاستفسار عن مناطق الخدمة"
            label="استفسري عن منطقتك"
            className="btn-primary inline-flex"
          />
        </div>
      </section>
    </div>
  );
}
