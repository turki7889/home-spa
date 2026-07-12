"use client";

import { BookButton } from "@/components/BookButton";
import { useState } from "react";
import { whatsappLink, getIcon, WHATSAPP_NUMBER } from "@/data/services";

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

  const ClockIcon = getIcon("clock");
  const MapIcon = getIcon("mapMarker");
  const PhoneIcon = getIcon("phone");
  const WhatsIcon = getIcon("whatsapp");
  const HomeIcon = getIcon("home");

  return (
    <div>
      {/* Page header */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            يسعدنا تواصلك معنا
          </h1>
          <div className="divider-gold mx-auto" />
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-bone">
            نحن هنا لخدمتك. تواصل معنا عبر واتساب أو املأ النموذج أدناه وسنعود إليك في أقرب وقت.
          </p>
        </div>
      </section>

      {/* Main content — two columns */}
      <section className="section">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: Contact info */}
          <div className="space-y-6">
            {/* WhatsApp card */}
            <div className="card overflow-hidden border-2 border-[#25D366]/20">
              <div className="bg-[#25D366] px-6 py-5 text-white">
                <div className="flex items-center gap-3">
                  <WhatsIcon className="h-8 w-8" />
                  <div>
                    <h3 className="text-lg font-bold">تواصل عبر واتساب</h3>
                    <p className="text-sm text-white/80">الطريقة الأسرع للحجز والاستفسار</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-muted">رقم الواتساب:</p>
                <p className="mb-4 text-lg font-bold text-espresso" dir="ltr">
                  +966 54 998 6148
                </p>
                <BookButton
                  serviceName="موعد في Home Spa"
                  label="افتح المحادثة في واتساب"
                  className="btn-primary w-full text-center"
                />
              </div>
            </div>

            {/* Info card */}
            <div className="card p-6">
              <h3 className="mb-5 text-lg font-bold text-espresso">معلومات التواصل</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-espresso">ساعات العمل</p>
                    <p className="text-sm text-muted">يومياً من 9 صباحاً حتى 10 مساءً</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-espresso">منطقة الخدمة</p>
                    <p className="text-sm text-muted">الرياض وجميع المدن الكبرى في المملكة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-espresso">رقم الجوال</p>
                    <p className="text-sm text-muted" dir="ltr">+966 54 998 6148</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="card p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-espresso">أرسل لنا رسالة</h3>
              <p className="text-sm text-muted">
                املأ النموذج أدناه وسيتم فتح محادثة واتساب مع تفاصيل رسالتك.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-espresso">
                  الاسم الكامل
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-bone-dark bg-offwhite px-4 py-3 text-sm text-espresso placeholder:text-muted-light/50 transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-espresso">
                  رقم الجوال
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-bone-dark bg-offwhite px-4 py-3 text-sm text-espresso placeholder:text-muted-light/50 transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-espresso">
                  الرسالة
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-bone-dark bg-offwhite px-4 py-3 text-sm text-espresso placeholder:text-muted-light/50 transition-colors focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-base">
                أرسل عبر واتساب
              </button>

              <p className="text-center text-xs text-muted">
                بالضغط على زر الإرسال، سيتم فتح تطبيق واتساب مع تفاصيل رسالتك.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Service area section */}
      <section className="bg-spa-warm py-16 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
            <HomeIcon className="h-7 w-7" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-espresso sm:text-3xl">
            نخدم جميع مناطق الرياض
          </h2>
          <p className="mb-8 leading-relaxed text-muted">
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
