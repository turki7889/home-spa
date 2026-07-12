import Link from "next/link";
import { navLinks } from "@/data/services";

/**
 * تذييل الموقع (Footer)
 * يحتوي على معلومات العلامة التجارية وروابط سريعة ودعوة للتواصل
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-secondary" role="contentinfo">
      {/* شبكة المحتوى الرئيسي */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* العلامة التجارية */}
          <div>
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-white no-underline"
              aria-label="Home Spa"
            >
              <span className="text-2xl">🌸</span>
              <span className="text-xl font-bold">
                <span className="text-primary">Home</span> Spa
              </span>
            </Link>
            <p className="text-dark-muted leading-relaxed text-sm">
              سبا منزلي فاخر — نقدم لك تجربة استرخاء استثنائية في راحة منزلك.
              <br />
              معالجات محترفات · خدمة منزلية خاصة · حجز سهل وسريع.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">روابط سريعة</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-muted no-underline text-sm transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-dark-muted">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:966549986148"
                  className="text-dark-muted no-underline transition-colors hover:text-primary ltr inline-block"
                  dir="ltr"
                >
                  +966 54 998 6148
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>يومياً من ٩ صباحاً حتى ١٠ مساءً</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>الرياض وجميع المدن الكبرى</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="border-t border-dark-light">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-dark-muted">
            © {currentYear} Home Spa. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-dark-muted">
            صُنع بكل 🤍 في المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  );
}
