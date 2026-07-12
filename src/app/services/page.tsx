import { services, formatPrice, whatsappLink } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا — Home Spa | سبا منزلي فاخر",
  description:
    "اكتشف جميع خدمات Home Spa: مساج استرخائي، مساج تايلندي، أحجار ساخنة، كاسات الهواء، عناية الأظافر، والمزيد. احجز جلستك الآن.",
};

/**
 * صفحة الخدمات
 * عرض كامل لجميع خدمات Home Spa في بطاقات جميلة
 */
export default function ServicesPage() {
  /* خدمة المانيكير + الباديكير المجمعة */
  const comboPrice = 180;
  const comboSavings = 40;

  return (
    <div>
      {/* ================================================================
          رأس الصفحة
          ================================================================ */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            خدماتنا
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            خدمات سبا منزلي متكاملة
          </h1>
          <div className="divider-gold mx-auto"></div>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-secondary">
            اختر من بين مجموعة واسعة من خدمات المساج والعناية الشخصية. جميع الخدمات تقدم في منزلك
            براحة وخصوصية تامة على يد معالجات محترفات.
          </p>
        </div>
      </section>

      {/* ================================================================
          شبكة الخدمات
          ================================================================ */}
      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="card group flex flex-col p-6 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* أيقونة الخدمة */}
              <span className="mb-4 text-4xl">{service.icon}</span>

              {/* اسم الخدمة */}
              <h3 className="mb-1 text-xl font-bold text-dark">{service.name}</h3>

              {/* المدة */}
              <div className="mb-2 flex items-center gap-1.5 text-sm text-dark-muted">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{service.duration}</span>
              </div>

              {/* السعر */}
              <p className="mb-4 text-2xl font-extrabold text-primary">
                {formatPrice(service.price)}
              </p>

              {/* وصف مختصر */}
              {service.description && (
                <p className="mb-5 flex-1 text-sm leading-relaxed text-dark-muted">
                  {service.description}
                </p>
              )}

              {/* زر الحجز */}
              <a
                href={whatsappLink(`مرحباً، أود حجز ${service.name} من Home Spa`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto w-full text-sm"
              >
                احجز الآن
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================
          عرض الباقة المجمعة: مانيكير + باديكير
          ================================================================ */}
      <section className="bg-spa-warm">
        <div className="section">
          <div className="mx-auto max-w-md">
            <div className="card group relative overflow-hidden border-2 border-primary/40 p-8 text-center">
              {/* شارة التوفير */}
              <span className="absolute -top-3 right-1/2 translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white shadow-md">
                🎀 عرض خاص
              </span>

              <span className="mb-4 text-5xl">💅✨</span>
              <h3 className="mb-2 text-2xl font-bold text-dark">مانيكير + بديكير</h3>
              <p className="mb-1 text-sm text-dark-muted">المدة: ٦٠-٧٥ دقيقة</p>

              {/* السعر مع التوفير */}
              <div className="my-5">
                <p className="text-3xl font-extrabold text-primary">
                  {formatPrice(comboPrice)}
                </p>
                <p className="mt-1 text-sm text-accent font-medium">
                  وفر {formatPrice(comboSavings)}
                </p>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-dark-muted">
                اجمع بين العناية الكاملة باليدين والقدمين في جلسة واحدة واحصل على خصم خاص.
              </p>

              <a
                href={whatsappLink("مرحباً، أود حجز مانيكير + بديكير من Home Spa")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                احجز الباقة المجمعة
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
