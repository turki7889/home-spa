import { subscriptions, getIcon } from "@/data/services";
import { BookButton } from "@/components/BookButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الباقات — Home Spa | باقات اشتراك شهرية مميزة",
  description:
    "اختر الباقة المناسبة لك: الباقة الفضية، الذهبية، أو البلاتينية. جلسات مساج شهرية بأسعار مخفضة مع مزايا حصرية. اشترك الآن.",
};

const tierAccents = {
  silver: { iconBg: "bg-muted/15 text-muted", badge: "", highlight: "" },
  gold: { iconBg: "bg-emerald/10 text-emerald", badge: "bg-emerald text-white", highlight: "ring-2 ring-emerald scale-[1.02] shadow-xl z-10" },
  platinum: { iconBg: "bg-primary/10 text-primary", badge: "bg-primary text-white", highlight: "" },
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
          <div className="divider-gold mx-auto" />
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-bone">
            اختر الباقة التي تناسب احتياجاتك واستمتع بجلسات مساج منتظمة، أولوية في الحجز،
            وخصومات حصرية على جميع خدماتنا.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          {subscriptions.map((pkg, idx) => {
            const Icon = getIcon(pkg.iconKey);
            const CheckIcon = getIcon("checkCircle");
            const accent = tierAccents[pkg.color];
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`card relative flex flex-col overflow-hidden animate-fade-in-up ${accent.highlight}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {isPopular && (
                  <div className="bg-emerald py-2.5 text-center text-sm font-bold text-white">
                    الأكثر شعبية
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-6 text-center">
                    <div className={`mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent.iconBg}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-espresso">{pkg.name}</h2>
                    <p className="mt-1 text-sm text-muted">
                      {pkg.sessionsPerMonth} جلسات شهرياً
                    </p>
                  </div>

                  <div className="mb-6 text-center">
                    <div className="inline-flex items-baseline gap-1">
                      <span className="text-sm text-muted">ر.س</span>
                      <span className="text-5xl font-extrabold text-espresso">
                        {pkg.monthlyPrice.toLocaleString("ar-SA")}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">شهرياً</p>
                  </div>

                  <ul className="mb-6 flex-1 space-y-4">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-muted">
                        <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 rounded-xl bg-emerald/5 py-3 text-center">
                    <p className="text-sm font-semibold text-emerald">
                      توفير{" "}
                      <span className="font-extrabold">
                        {pkg.savings.toLocaleString("ar-SA")}
                      </span>{" "}
                      ر.س شهرياً
                    </p>
                  </div>

                  <BookButton
                    serviceName={pkg.name}
                    label="اشترك الآن"
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
            <h2 className="mb-4 text-3xl font-bold text-espresso sm:text-4xl">
              مقارنة سريعة بين الباقات
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse rounded-xl bg-white shadow-sm border border-bone">
              <thead>
                <tr className="border-b border-bone">
                  <th className="p-4 text-right text-sm font-bold text-espresso">الميزة</th>
                  {subscriptions.map((pkg) => {
                    const Icon = getIcon(pkg.iconKey);
                    return (
                      <th key={pkg.id} className="p-4 text-center text-sm font-bold text-espresso">
                        <Icon className="inline h-4 w-4 ml-1" />
                        {pkg.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-bone">
                  <td className="p-4 text-sm text-muted">الجلسات الشهرية</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-espresso">
                      {pkg.sessionsPerMonth}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-bone">
                  <td className="p-4 text-sm text-muted">السعر الشهري</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-primary">
                      {pkg.monthlyPrice.toLocaleString("ar-SA")} ر.س
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-bone">
                  <td className="p-4 text-sm text-muted">سعر الجلسة الواحدة</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-espresso">
                      {Math.round(pkg.monthlyPrice / pkg.sessionsPerMonth).toLocaleString("ar-SA")} ر.س
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-bone">
                  <td className="p-4 text-sm text-muted">أولوية الحجز</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center">
                      {pkg.color === "silver" && <span className="text-sm text-muted">عادية</span>}
                      {pkg.color === "gold" && <span className="text-sm font-medium text-emerald">مضاعفة</span>}
                      {pkg.color === "platinum" && <span className="text-sm font-bold text-primary">قصوى</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-bone">
                  <td className="p-4 text-sm text-muted">خصم الخدمات الإضافية</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm text-muted">
                      {pkg.color === "gold" ? "10%" : pkg.color === "platinum" ? "15%" : "-"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-muted">التوفير الشهري</td>
                  {subscriptions.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center text-sm font-bold text-emerald">
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
            هل تحتاج مساعدة في الاختيار؟
          </h2>
          <p className="mb-8 leading-relaxed text-bone">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار الباقة الأنسب لك.
            تواصل معنا الآن على واتساب.
          </p>
          <BookButton
            serviceName="باقات Home Spa"
            label="تواصل معنا الآن"
            type="subscription"
            className="btn-primary inline-flex text-lg px-10 py-4"
          />
        </div>
      </section>
    </div>
  );
}
