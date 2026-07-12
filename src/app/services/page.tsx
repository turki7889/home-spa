import { services, formatPrice, getIcon } from "@/data/services";
import { BookButton } from "@/components/BookButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا — Home Spa | سبا منزلي فاخر",
  description:
    "اكتشف جميع خدمات Home Spa: مساج استرخائي، مساج تايلندي، أحجار ساخنة، كاسات الهواء، عناية الأظافر، والمزيد. احجز جلستك الآن.",
};

export default function ServicesPage() {
  const comboPrice = 180;
  const comboSavings = 40;

  return (
    <div>
      {/* Page header — minimal dark banner */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            خدمات سبا منزلي متكاملة
          </h1>
          <div className="divider-gold mx-auto" />
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-bone">
            اختر من بين مجموعة واسعة من خدمات المساج والعناية الشخصية. جميع الخدمات تقدم في منزلك
            براحة وخصوصية تامة على يد معالجات محترفات.
          </p>
        </div>
      </section>

      {/* Services grid — 3-column */}
      <section className="section">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = getIcon(service.iconKey);
            const ClockIcon = getIcon("clock");
            return (
              <div
                key={service.id}
                className="card group flex flex-col p-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/8 text-emerald ring-1 ring-emerald/15">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-1 text-xl font-bold text-espresso">{service.name}</h3>

                <div className="mb-2 flex items-center gap-2 text-sm text-muted">
                  <ClockIcon className="h-4 w-4 text-primary" />
                  <span>{service.duration}</span>
                </div>

                <p className="mb-3 text-2xl font-extrabold text-primary">
                  {formatPrice(service.price)}
                </p>

                {service.description && (
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                )}

                <BookButton
                  serviceName={service.name}
                  label="احجز الآن"
                  className="btn-primary mt-auto w-full text-sm"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Combo offer — manicure + pedicure */}
      <section className="bg-spa-warm">
        <div className="section">
          <div className="mx-auto max-w-md">
            <div className="card group relative overflow-hidden border-2 border-emerald/20 p-8 text-center">
              <span className="absolute -top-3 right-1/2 translate-x-1/2 rounded-full bg-emerald px-5 py-1.5 text-xs font-bold text-white shadow-md">
                عرض خاص
              </span>

              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                {(() => { const I = getIcon("sparkles"); return <I className="h-7 w-7" />; })()}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-espresso">مانيكير + بديكير</h3>
              <p className="mb-1 text-sm text-muted">المدة: 60 - 75 دقيقة</p>

              <div className="my-5">
                <p className="text-3xl font-extrabold text-primary">
                  {formatPrice(comboPrice)}
                </p>
                <p className="mt-1 text-sm font-medium text-emerald">
                  وفر {formatPrice(comboSavings)}
                </p>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted">
                اجمع بين العناية الكاملة باليدين والقدمين في جلسة واحدة واحصل على خصم خاص.
              </p>

              <BookButton
                serviceName="مانيكير + بديكير"
                label="احجز الباقة المجمعة"
                className="btn-primary w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
