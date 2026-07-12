import { subscriptions, whatsappLink } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الباقات — Home Spa | باقات اشتراك شهرية مميزة",
  description:
    "اختر الباقة المناسبة لك: الباقة الفضية، الذهبية، أو البلاتينية. جلسات مساج شهرية بأسعار مخفضة مع مزايا حصرية. اشترك الآن.",
};

/** أيقونات وألوان الباقات حسب المستوى */
const tierStyles = {
  silver: {
    bg: "from-gray-100 to-gray-50",
    border: "border-gray-300",
    badge: "bg-gray-400",
    text: "text-gray-600",
    icon: "🥈",
  },
  gold: {
    bg: "from-amber-50 to-yellow-50",
    border: "border-primary",
    badge: "bg-primary",
    text: "text-primary",
    icon: "🥇",
  },
  platinum: {
    bg: "from-indigo-50 to-sky-50",
    border: "border-indigo-300",
    badge: "bg-indigo-400",
    text: "text-indigo-500",
    icon: "💎",
  },
};

export default function SubscriptionsPage() {
  return (
    <div>
      {/* ================================================================
          رأس الصفحة
          ================================================================ */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            الباقات
          </span>
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            باقات اشتراك شهرية
          </h1>
          <div className="divider-gold mx-auto"></div>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-secondary">
            اختر الباقة التي تناسب احتياجاتك واستمتع بجلسات مساج منتظمة، أولوية في الحجز،
            وخصومات حصرية على جميع خدماتنا.
          </p>
        </div>
      </section>

      {/* ================================================================
          مقارنة الباقات
          ================================================================ */}
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-3">
          {subscriptions.map((pkg, idx) => {
            const style = tierStyles[pkg.color];
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`card relative flex flex-col overflow-hidden animate-fade-in-up ${
                  isPopular ? "scale-105 shadow-2xl z-10 border-primary border-2" : ""
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* شارة الأكثر شعبية */}
                {isPopular && (
                  <div className="bg-primary py-2 text-center text-sm font-bold text-white">
                    ⭐ الأكثر شعبية
                  </div>
                )}

                {/* محتوى الباقة */}
                <div className="flex flex-1 flex-col p-8">
                  {/* الأيقونة والاسم */}
                  <div className="mb-6 text-center">
                    <span className="mb-3 inline-block text-5xl">{style.icon}</span>
                    <h2 className="text-2xl font-extrabold text-dark">{pkg.name}</h2>
                    <p className="mt-1 text-sm text-dark-muted">
                      {pkg.sessionsPerMonth} جلسات شهرياً
                    </p>
                  </div>

                  {/* السعر */}
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-baseline gap-1">
                      <span className="text-sm text-dark-muted">ر.س</span>
                      <span className="text-5xl font-extrabold text-dark">
                        {pkg.monthlyPrice.toLocaleString("ar-SA")}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-dark-muted">شهرياً</p>
                  </div>

                  {/* المميزات */}
                  <ul className="mb-6 flex-1 space-y-4">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-dark-muted">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* التوفير */}
                  <div className="mb-6 rounded-xl bg-accent/10 py-3 text-center">
                    <p className="text-sm font-semibold text-accent">
                      💰 توفير{" "}
                      <span className="font-extrabold">
                        {pkg.savings.toLocaleString("ar-SA")}
                      </span>{" "}
                      ر.س شهرياً
                    </p>
                  </div>

                  {/* زر الاشتراك */}
                  <a
                    href={whatsappLink(
                      `مرحباً، أرغب في الاشتراك في ${pkg.name} من Home Spa`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-primary w-full text-center text-base ${
                      isPopular ? "py-4 text-lg" : ""
                    }`}
                  >
                    اشترك الآن
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================================================================
          مقارنة سريعة
          ================================================================ */}
      <section className="bg-spa-warm">
        <div className="section">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl">
              مقارنة سريعة بين الباقات
            </h2>
            <div className="divider-gold"></div>
          </div>

          {/* جدول المقارنة */}
          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse rounded-xl bg-white shadow-sm">
              <thead>
                <tr className="border-b border-secondary">
                  <th className="p-4 text-right text-sm font-bold text-dark">
                    الميزة
                  </th>
                  {subscriptions.map((pkg) => (
                    <th key={pkg.id} className="p-4 text-center text-sm font-bold text-dark">
                      <span className="mr-1">{pkg.icon}</span>
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-secondary">
                  <td className="p-4 text-sm text-dark-muted">الجلسات الشهرية</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-dark">
                      {pkg.sessionsPerMonth}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-secondary">
                  <td className="p-4 text-sm text-dark-muted">السعر الشهري</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-primary">
                      {pkg.monthlyPrice.toLocaleString("ar-SA")} ر.س
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-secondary">
                  <td className="p-4 text-sm text-dark-muted">
                    سعر الجلسة الواحدة
                  </td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-dark">
                      {Math.round(pkg.monthlyPrice / pkg.sessionsPerMonth).toLocaleString(
                        "ar-SA"
                      )}{" "}
                      ر.س
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-secondary">
                  <td className="p-4 text-sm text-dark-muted">أولوية الحجز</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center">
                      {pkg.color === "silver" && (
                        <span className="text-sm text-dark-muted">عادية</span>
                      )}
                      {pkg.color === "gold" && (
                        <span className="text-sm font-medium text-primary">
                          مضاعفة
                        </span>
                      )}
                      {pkg.color === "platinum" && (
                        <span className="text-sm font-bold text-indigo-500">
                          قصوى
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-secondary">
                  <td className="p-4 text-sm text-dark-muted">خصم الخدمات الإضافية</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm text-dark-muted">
                      {pkg.color === "gold"
                        ? "١٠٪"
                        : pkg.color === "platinum"
                          ? "١٥٪"
                          : "—"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-dark-muted">التوفير الشهري</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-accent">
                      {pkg.savings.toLocaleString("ar-SA")} ر.س
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================
          الدعوة الأخيرة
          ================================================================ */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <span className="mb-3 inline-block text-4xl">🌸</span>
          <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl">
            هل تحتاج مساعدة في الاختيار؟
          </h2>
          <p className="mb-8 leading-relaxed text-secondary">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار الباقة الأنسب لك.
            تواصل معنا الآن على واتساب.
          </p>
          <a
            href={whatsappLink("مرحباً، لدي سؤال حول باقات Home Spa")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-lg px-10 py-4"
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>
    </div>
  );
}
