import Link from "next/link";
import { services, subscriptions, formatPrice, getIcon } from "@/data/services";
import { BookButton } from "@/components/BookButton";
import { FaSpa } from "react-icons/fa";

const features = [
  {
    iconKey: "home",
    title: "خدمة منزلية خاصة",
    description: "نصل إليك أينما كنت في منزلك لتستمتع بتجربة سبا فاخرة دون عناء الخروج.",
  },
  {
    iconKey: "sparkles",
    title: "معالجات محترفات",
    description: "فريق من المعالجات المحترفات والمدربات على أحدث تقنيات المساج والعناية.",
  },
  {
    iconKey: "calendar",
    title: "حجز سهل وسريع",
    description: "احجز موعدك في دقائق عبر واتساب، واختر الوقت والمكان المناسب لك.",
  },
];

export default function HomePage() {
  const featuredServices = services.slice(0, 4);

  return (
    <div>
      {/* ================================================================
          Hero — Immersive dark section
          ================================================================ */}
      <section className="relative overflow-hidden bg-spa-dark text-white">
        {/* Ambient glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-emerald/8 blur-[120px]" />
          <div className="absolute -bottom-60 left-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[100px]" />
        </div>

        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            {/* Brand mark */}
            <div className="mb-8 inline-flex items-center justify-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/20">
                <FaSpa className="h-7 w-7 text-primary" />
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              استرخِ في{" "}
              <span className="text-primary-light">منزلك</span>
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-bone sm:text-xl">
              نقدم لك تجربة سبا فاخرة ومتكاملة في راحة منزلك. جلسات مساج احترافية،
              عناية فائقة، وأجواء هادئة تصل إليك أينما كنت.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <BookButton
                serviceName="موعد في Home Spa"
                label="احجز الآن"
                className="btn-primary text-base sm:text-lg px-8 py-3.5"
              />
              <Link
                href="/services"
                className="btn-outline border-white/20 text-bone hover:border-primary hover:bg-primary/10 hover:text-white text-base sm:text-lg px-8 py-3.5"
              >
                استكشف خدماتنا
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" className="h-auto w-full text-offwhite" preserveAspectRatio="none">
            <path d="M0 25C240 0 480 50 720 25S1200 0 1440 25V50H0V25Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ================================================================
          Featured Services — 2×2 asymmetric grid
          ================================================================ */}
      <section className="section">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-espresso sm:text-4xl">
            خدمات سبا منزلي مميزة
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="mx-auto mt-5 max-w-lg text-muted">
            مجموعة متنوعة من جلسات المساج والعناية الشخصية التي تلبي جميع احتياجاتك في منزلك.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, idx) => {
            const Icon = getIcon(service.iconKey);
            return (
              <div
                key={service.id}
                className="card group flex flex-col p-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/8 text-emerald ring-1 ring-emerald/15">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1.5 text-lg font-bold text-espresso">{service.name}</h3>
                <p className="mb-1 text-sm text-muted">{service.duration}</p>
                <p className="mb-4 font-bold text-primary">{formatPrice(service.price)}</p>
                <div className="mt-auto">
                  <BookButton
                    serviceName={service.name}
                    label="احجز الآن"
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
          Why Choose Us — 3-feature row with emerald accents
          ================================================================ */}
      <section className="bg-spa-warm">
        <div className="section">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-espresso sm:text-4xl">
              لماذا تختار Home Spa؟
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, idx) => {
              const Icon = getIcon(feat.iconKey);
              return (
                <div
                  key={feat.title}
                  className="card flex flex-col items-center p-8 text-center animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald ring-1 ring-emerald/10">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-espresso">{feat.title}</h3>
                  <p className="text-muted leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          Subscriptions Preview — tiered pricing cards
          ================================================================ */}
      <section className="section">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-espresso sm:text-4xl">
            باقات اشتراك شهرية مميزة
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="mx-auto mt-5 max-w-lg text-muted">
            اختر الباقة المناسبة لك واستمتع بجلسات منتظمة وأسعار مخفضة على مدار الشهر.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((pkg, idx) => {
            const isPopular = pkg.popular;
            const Icon = getIcon(pkg.iconKey);
            return (
              <div
                key={pkg.id}
                className={`card relative flex flex-col p-8 animate-fade-in-up ${
                  isPopular
                    ? "ring-2 ring-emerald scale-[1.03] shadow-xl z-10"
                    : ""
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald px-5 py-1.5 text-xs font-bold text-white shadow-md">
                    الأكثر شعبية
                  </span>
                )}

                <div className="mb-3 text-center">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    pkg.color === "platinum" ? "bg-primary/15 text-primary" :
                    pkg.color === "gold" ? "bg-emerald/15 text-emerald" :
                    "bg-muted/20 text-muted"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-1 text-center text-xl font-bold text-espresso">{pkg.name}</h3>
                <p className="mb-4 text-center">
                  <span className="text-3xl font-extrabold text-primary">
                    {pkg.monthlyPrice.toLocaleString("ar-SA")}
                  </span>
                  <span className="text-sm text-muted"> ر.س/شهرياً</span>
                </p>

                <ul className="mb-5 flex-1 space-y-3">
                  {pkg.features.map((feat) => {
                    const CheckIcon = getIcon("checkCircle");
                    return (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-muted">
                        <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald" />
                        {feat}
                      </li>
                    );
                  })}
                </ul>

                <p className="mb-4 text-center text-sm font-medium text-emerald">
                  توفير {pkg.savings.toLocaleString("ar-SA")} ر.س
                </p>

                <BookButton
                  serviceName={pkg.name}
                  label="اشترك الآن"
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
          Final CTA — dark section, single focus
          ================================================================ */}
      <section className="relative overflow-hidden bg-spa-dark text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 h-[24rem] w-[24rem] rounded-full bg-emerald/8 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <h2 className="mb-5 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            جاهز لتجربة الاسترخاء؟
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-bone sm:text-xl">
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
