import Link from "next/link";
import { services, subscriptions, formatPrice } from "@/data/services";
import { BookButton } from "@/components/BookButton";

/**
 * الصفحة الرئيسية — Landing Page
 * تحتوي على: القسم الترحيبي، معاينة الخدمات، لماذا تختارنا، معاينة الباقات، دعوة أخيرة
 */
export default function HomePage() {
  /* أول ٤ خدمات للمعاينة */
  const featuredServices = services.slice(0, 4);
  /* أول ٣ خدمات بعد الـ٤ الأولى — أي خدمات 5,6,7 أو نأخذ 4 الأولى */
  const features = [
    {
      icon: "🏠",
      title: "خدمة منزلية خاصة",
      description: "نصل إليك أينما كنت في منزلك لتستمتع بتجربة سبا فاخرة دون عناء الخروج.",
    },
    {
      icon: "👩‍⚕️",
      title: "معالجات محترفات",
      description: "فريق من المعالجات المحترفات والمدربات على أحدث تقنيات المساج والعناية.",
    },
    {
      icon: "📱",
      title: "حجز سهل وسريع",
      description: "احجز موعدك في دقائق عبر واتساب، واختر الوقت والمكان المناسب لك.",
    },
  ];

  return (
    <div>
      {/* ================================================================
          القسم الترحيبي (Hero)
          ================================================================ */}
      <section className="relative overflow-hidden bg-spa-dark text-white">
        {/* خلفية زخرفية */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-2xl text-center">
            {/* شارة صغيرة */}
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              ✨ سبا منزلي فاخر
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              استرخِ في{" "}
              <span className="bg-gradient-to-l from-primary via-primary-light to-accent-light bg-clip-text text-transparent">
                منزلك
              </span>
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-secondary sm:text-xl">
              نقدم لك تجربة سبا فاخرة ومتكاملة في راحة منزلك. جلسات مساج احترافية،
              عناية فائقة، وأجواء هادئة تصل إليك أينما كنت.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <BookButton
                serviceName="موعد في Home Spa"
                label="احجز الآن"
                className="btn-primary text-base sm:text-lg px-8 py-3"
              />
              <Link
                href="/services"
                className="btn-outline border-white/30 text-white hover:border-primary hover:bg-primary hover:text-white text-base sm:text-lg px-8 py-3"
              >
                استكشف خدماتنا
              </Link>
            </div>
          </div>
        </div>

        {/* موجة سفلية زخرفية */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="h-auto w-full text-offwhite" preserveAspectRatio="none">
            <path d="M0 30C240 0 480 60 720 30S1200 0 1440 30V60H0V30Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ================================================================
          معاينة الخدمات المميزة
          ================================================================ */}
      <section className="section bg-offwhite">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            خدماتنا
          </span>
          <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
            خدمات سبا منزلي مميزة
          </h2>
          <div className="divider-gold"></div>
          <p className="mx-auto mt-6 max-w-lg text-dark-muted">
            مجموعة متنوعة من جلسات المساج والعناية الشخصية التي تلبي جميع احتياجاتك في منزلك.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, idx) => (
            <div
              key={service.id}
              className="card group flex flex-col p-6 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="mb-4 text-4xl">{service.icon}</span>
              <h3 className="mb-2 text-lg font-bold text-dark">{service.name}</h3>
              <p className="mb-1 text-sm text-dark-muted">{service.duration}</p>
              <p className="mb-4 font-bold text-primary">{formatPrice(service.price)}</p>
              <div className="mt-auto">
                <BookButton
                  serviceName={service.name}
                  label="احجز الآن"
                  className="btn-primary w-full text-sm"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            عرض جميع الخدمات ←
          </Link>
        </div>
      </section>

      {/* ================================================================
          لماذا تختار Home Spa
          ================================================================ */}
      <section className="bg-spa-warm">
        <div className="section">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              لماذا نحن
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
              لماذا تختار Home Spa؟
            </h2>
            <div className="divider-gold"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, idx) => (
              <div
                key={feat.title}
                className="card flex flex-col items-center p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <span className="mb-5 text-5xl">{feat.icon}</span>
                <h3 className="mb-3 text-xl font-bold text-dark">{feat.title}</h3>
                <p className="text-dark-muted leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          معاينة الباقات
          ================================================================ */}
      <section className="section bg-offwhite">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            الباقات
          </span>
          <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
            باقات اشتراك شهرية مميزة
          </h2>
          <div className="divider-gold"></div>
          <p className="mx-auto mt-6 max-w-lg text-dark-muted">
            اختر الباقة المناسبة لك واستمتع بجلسات منتظمة وأسعار مخفضة على مدار الشهر.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((pkg, idx) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`card relative flex flex-col p-8 animate-fade-in-up ${
                  isPopular
                    ? "ring-2 ring-primary scale-105 sm:scale-110 shadow-xl z-10"
                    : ""
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* شارة الأكثر شعبية */}
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white shadow-md">
                    ⭐ الأكثر شعبية
                  </span>
                )}

                <span className="mb-3 text-center text-3xl">{pkg.icon}</span>
                <h3 className="mb-1 text-center text-xl font-bold text-dark">{pkg.name}</h3>
                <p className="mb-5 text-center">
                  <span className="text-3xl font-extrabold text-primary">
                    {pkg.monthlyPrice.toLocaleString("ar-SA")}
                  </span>
                  <span className="text-sm text-dark-muted"> ر.س/شهرياً</span>
                </p>

                <ul className="mb-6 flex-1 space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-dark-muted">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <p className="mb-4 text-center text-sm font-medium text-accent">
                  توفير {pkg.savings.toLocaleString("ar-SA")} ر.س
                </p>

                <BookButton
                  serviceName={pkg.name}
                  label="اشترك الآن"
                  type="subscription"
                  className={`btn-primary w-full text-sm ${isPopular ? "from-primary to-primary-dark" : ""}`}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/subscriptions" className="btn-outline">
            تفاصيل الباقات ←
          </Link>
        </div>
      </section>

      {/* ================================================================
          الدعوة الأخيرة (CTA)
          ================================================================ */}
      <section className="relative overflow-hidden bg-spa-dark text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <span className="mb-4 inline-block text-4xl sm:text-5xl">🌸</span>
          <h2 className="mb-5 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            جاهز لتجربة الاسترخاء؟
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-secondary sm:text-xl">
            لا تتردد في التواصل معنا. احجز جلستك الأولى اليوم واستمتع بأفضل تجربة سبا منزلي في المملكة.
          </p>
          <BookButton
            serviceName="موعد في Home Spa"
            label="احجز جلستك الآن"
            className="btn-primary inline-flex text-lg px-10 py-4"
          />
        </div>
      </section>
    </div>
  );
}
