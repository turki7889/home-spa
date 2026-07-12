import { subscriptions } from "@/data/services";
import { BookButton } from "@/components/BookButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الباقات — Home Spa | باقات اشتراك شهرية مميزة للمرأة",
  description:
    "اختاري الباقة المناسبة لك: الباقة الفضية، الذهبية، أو البلاتينية. جلسات مساج شهرية بأسعار مخفضة مع مزايا حصرية. اشتركي الآن.",
};

const tierAccents = {
  silver: { iconBg: "bg-text-muted/15 text-text-muted", badge: "", highlight: "" },
  gold: { iconBg: "bg-accent-pale text-accent", badge: "bg-accent text-white", highlight: "ring-2 ring-accent scale-[1.02] shadow-xl z-10" },
  platinum: { iconBg: "bg-accent-pale text-accent", badge: "bg-accent text-white", highlight: "" },
};

export default function SubscriptionsPage() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            باقات اشتراك شهرية
          </h1>
          <div className="divider-accent mx-auto" />
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-accent-light">
            اختاري الباقة التي تناسب احتياجاتك واستمتعي بجلسات مساج منتظمة، أولوية في الحجز،
            وخصومات حصرية على جميع خدماتنا.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          {subscriptions.map((pkg, idx) => {
                                    const accent = tierAccents[pkg.color];
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`card relative flex flex-col overflow-hidden animate-fade-in-up ${accent.highlight}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {isPopular && (
                  <div className="bg-accent py-2.5 text-center text-sm font-bold text-white">
                    الأكثر طلباً
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <div className={`mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent.iconBg}`}>
                      <span className="h-7 w-7">{pkg.icon}</span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-text">{pkg.name}</h2>
                    <p className="mt-1 text-sm text-text-muted">
                      {pkg.sessionsPerMonth} جلسات شهرياً
                    </p>
                  </div>

                  <div className="mb-6 text-center">
                    <div className="inline-flex items-baseline gap-1">
                      <span className="text-sm text-text-muted">ر.س</span>
                      <span className="text-5xl font-extrabold text-text">
                        {pkg.monthlyPrice.toLocaleString("ar-SA")}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-text-muted">شهرياً</p>
                  </div>

                  <ul className="mb-6 flex-1 space-y-4">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-text-muted">
                        <span className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent">✅</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 rounded-xl bg-accent-pale py-3 text-center">
                    <p className="text-sm font-semibold text-accent">
                      توفير{" "}
                      <span className="font-extrabold">
                        {pkg.savings.toLocaleString("ar-SA")}
                      </span>{" "}
                      ر.س شهرياً
                    </p>
                  </div>

                  <BookButton
                    serviceName={pkg.name}
                    label="اشتركي الآن"
                    type="subscription"
                    className={`btn-primary w-full text-center text-base ${isPopular ? "py-4 text-lg" : ""}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="bg-spa-warm">
        <div className="section">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl">
              مقارنة سريعة بين الباقات
            </h2>
            <div className="divider-accent mx-auto" />
          </div>

          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse rounded-xl bg-card shadow-sm border border-soft">
              <thead>
                <tr className="border-b border-soft">
                  <th className="p-4 text-right text-sm font-bold text-text">الميزة</th>
                  {subscriptions.map((pkg) => {
                                        return (
                      <th key={pkg.id} className="p-4 text-center text-sm font-bold text-text">
                        <span className="inline h-4 w-4 ml-1">{pkg.icon}</span>
                        {pkg.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-soft">
                  <td className="p-4 text-sm text-text-muted">الجلسات الشهرية</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-text">
                      {pkg.sessionsPerMonth}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-soft">
                  <td className="p-4 text-sm text-text-muted">السعر الشهري</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-accent">
                      {pkg.monthlyPrice.toLocaleString("ar-SA")} ر.س
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-soft">
                  <td className="p-4 text-sm text-text-muted">سعر الجلسة الواحدة</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-text">
                      {Math.round(pkg.monthlyPrice / pkg.sessionsPerMonth).toLocaleString("ar-SA")} ر.س
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-soft">
                  <td className="p-4 text-sm text-text-muted">أولوية الحجز</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center">
                      {pkg.color === "silver" && <span className="text-sm text-text-muted">عادية</span>}
                      {pkg.color === "gold" && <span className="text-sm font-medium text-accent">مضاعفة</span>}
                      {pkg.color === "platinum" && <span className="text-sm font-bold text-accent">قصوى</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-soft">
                  <td className="p-4 text-sm text-text-muted">خصم الخدمات الإضافية</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm text-text-muted">
                      {pkg.color === "gold" ? "10%" : pkg.color === "platinum" ? "15%" : "-"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-text-muted">التوفير الشهري</td>
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

      {/* Help CTA */}
      <section className="bg-spa-dark py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="mb-4 text-2xl font-extrabold text-white sm:text-3xl">
            هل تحتاجين مساعدة في الاختيار؟
          </h2>
          <p className="mb-8 leading-relaxed text-accent-light">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار الباقة الأنسب لك.
            تواصلي معنا الآن على واتساب.
          </p>
          <BookButton
            serviceName="باقات Home Spa"
            label="تواصلي معنا الآن"
            type="subscription"
            className="btn-primary inline-flex text-lg px-10 py-4"
          />
        </div>
      </section>
    </div>
  );
}
