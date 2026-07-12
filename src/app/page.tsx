import Link from "next/link";
import { services, subscriptions, formatPrice } from "@/data/services";
import { BookButton } from "@/components/BookButton";
import { FaSpa } from "react-icons/fa";

const features = [
  {
    icon: "🏠",
    title: "خدمة منزلية خاصة",
    description: "نصل إليك أينما كنت في منزلك لتستمتعي بتجربة سبا فاخرة دون عناء الخروج.",
  },
  {
    icon: "✨",
    title: "معالجات محترفات",
    description: "فريق من المعالجات المحترفات والمدربات على أحدث تقنيات المساج والعناية النسائية.",
  },
  {
    icon: "📅",
    title: "حجز سهل وسريع",
    description: "احجزي موعدك في دقائق عبر واتساب، واختاري الوقت والمكان المناسب لك.",
  },
];

export default function HomePage() {
  const featuredServices = services.slice(0, 4);

  return (
    <div>
      {/* ================================================================
          Hero — Soft muted dusty dark, luxury spa feel
          ================================================================ */}
      <section className="relative overflow-hidden bg-spa-dark text-white">
        {/* Ambient glow orbs — muted dusty rose + lavender */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute -bottom-60 left-0 h-[28rem] w-[28rem] rounded-full bg-dark/12 blur-[100px]" />
          <div className="absolute top-1/3 right-1/3 h-[16rem] w-[16rem] rounded-full bg-surface/8 blur-[80px]" />
        </div>

        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            {/* Brand mark */}
            <div className="mb-8 inline-flex items-center justify-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 ring-1 ring-accent/20">
                <FaSpa className="h-7 w-7 text-accent-light" />
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              دللي نفسك في{" "}
              <span className="text-accent-light">منزلك</span>
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-accent-light sm:text-xl">
              نقدم لك تجربة سبا أنثوية فاخرة ومتكاملة في راحة منزلك. جلسات مساج احترافية،
              عناية فائقة، وأجواء هادئة تصل إليك أينما كنتِ.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <BookButton
                serviceName="موعد في Home Spa"
                label="احجزي الآن"
                className="btn-primary text-base sm:text-lg px-8 py-3.5"
              />
              <Link
                href="/services"
                className="btn-outline border-white/15 text-accent-light hover:border-accent hover:bg-accent/10 hover:text-white text-base sm:text-lg px-8 py-3.5"
              >
                استكشفي خدماتنا
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" className="h-auto w-full text-bg" preserveAspectRatio="none">
            <path d="M0 25C240 0 480 50 720 25S1200 0 1440 25V50H0V25Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ================================================================
          Featured Services — 2×2 grid with dusty rose accents
          ================================================================ */}
      <section className="section">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl">
            خدمات سبا منزلي مميزة
          </h2>
          <div className="divider-accent mx-auto" />
          <p className="mx-auto mt-5 max-w-lg text-text-muted">
            مجموعة متنوعة من جلسات المساج والعناية الشخصية التي تلبي جميع احتياجاتك في منزلك.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, idx) => {
            // icon in template;
            return (
              <div
                key={service.id}
                className="card group flex flex-col p-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-pale text-accent ring-1 ring-accent/20">
                  <span className="h-6 w-6">{service.icon}</span>
                </div>
                <h3 className="mb-1.5 text-lg font-bold text-text">{service.name}</h3>
                <p className="mb-1 text-sm text-text-muted">{service.duration}</p>
                <p className="mb-4 font-bold text-accent">{formatPrice(service.price)}</p>
                <div className="mt-auto">
                  <BookButton
                    serviceName={service.name}
                    label="احجزي الآن"
                    className="btn-primary w-full text-sm"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            عرض جميع الخدمات
          </Link>
        </div>
      </section>

      {/* ================================================================
          Why Choose Us — muted accent cards
          ================================================================ */}
      <section className="bg-spa-warm">
        <div className="section">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl">
              لماذا تختارين Home Spa؟
            </h2>
            <div className="divider-accent mx-auto" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, idx) => {
                            return (
                <div
                  key={feat.title}
                  className="card flex flex-col items-center p-8 text-center animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-pale text-accent ring-1 ring-accent/15">
                    <span className="h-7 w-7">{feat.icon}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-text">{feat.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          Subscriptions Preview — muted tiered cards
          ================================================================ */}
      <section className="section">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl">
            باقات اشتراك شهرية مميزة
          </h2>
          <div className="divider-accent mx-auto" />
          <p className="mx-auto mt-5 max-w-lg text-text-muted">
            اختاري الباقة المناسبة لك واستمتعي بجلسات منتظمة وأسعار مخفضة على مدار الشهر.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((pkg, idx) => {
            const isPopular = pkg.popular;
                        return (
              <div
                key={pkg.id}
                className={`card relative flex flex-col p-8 animate-fade-in-up ${
                  isPopular
                    ? "ring-2 ring-accent scale-[1.03] shadow-xl z-10"
                    : ""
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-5 py-1.5 text-xs font-bold text-white shadow-md">
                    الأكثر طلباً
                  </span>
                )}

                <div className="mb-3 text-center">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    pkg.color === "platinum" ? "bg-accent-pale text-accent" :
                    pkg.color === "gold" ? "bg-accent-pale text-accent" :
                    "bg-text-muted/15 text-text-muted"
                  }`}>
                    <span className="h-6 w-6">{pkg.icon}</span>
                  </div>
                </div>
                <h3 className="mb-1 text-center text-xl font-bold text-text">{pkg.name}</h3>
                <p className="mb-4 text-center">
                  <span className="text-3xl font-extrabold text-accent">
                    {pkg.monthlyPrice.toLocaleString("ar-SA")}
                  </span>
                  <span className="text-sm text-text-muted"> ر.س/شهرياً</span>
                </p>

                <ul className="mb-5 flex-1 space-y-3">
                  {pkg.features.map((feat) => {
                                        return (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-text-muted">
                        <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent">✅</span>
                        {feat}
                      </li>
                    );
                  })}
                </ul>

                <p className="mb-4 text-center text-sm font-medium text-accent">
                  توفير {pkg.savings.toLocaleString("ar-SA")} ر.س
                </p>

                <BookButton
                  serviceName={pkg.name}
                  label="اشتركي الآن"
                  type="subscription"
                  className="btn-primary w-full text-sm"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/subscriptions" className="btn-outline">
            تفاصيل الباقات
          </Link>
        </div>
      </section>

      {/* ================================================================
          Final CTA — muted dark section
          ================================================================ */}
      <section className="relative overflow-hidden bg-spa-dark text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 h-[24rem] w-[24rem] rounded-full bg-accent/8 blur-[100px]" />
          <div className="absolute -bottom-20 left-1/4 h-[18rem] w-[18rem] rounded-full bg-dark/10 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <h2 className="mb-5 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            جاهزة لتجربة الاسترخاء؟
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-accent-light sm:text-xl">
            لا تترددي في التواصل معنا. احجزي جلستك الأولى اليوم واستمتعي بأفضل تجربة سبا منزلي في المملكة.
          </p>
          <BookButton
            serviceName="موعد في Home Spa"
            label="احجزي جلستك الآن"
            className="btn-primary inline-flex text-lg px-10 py-4"
          />
        </div>
      </section>
    </div>
  );
}
