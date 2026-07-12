import Link from "next/link";
import { navLinks, getIcon } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const PhoneIcon = getIcon("phone");
  const ClockIcon = getIcon("clock");
  const MapIcon = getIcon("mapMarker");
  const SpaIcon = getIcon("spa");

  return (
    <footer className="bg-dark text-accent-light" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2.5 text-white no-underline"
              aria-label="Home Spa"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20">
                <SpaIcon className="h-5 w-5 text-accent-light" />
              </span>
              <span className="text-xl font-bold">
                <span className="text-accent-light">Home</span> Spa
              </span>
            </Link>
            <p className="text-soft leading-relaxed text-sm">
              سبا منزلي فاخر للمرأة — نقدم لكِ تجربة استرخاء استثنائية في راحة منزلك.
              <br />
              معالجات محترفات · خدمة منزلية خاصة · حجز سهل وسريع.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">روابط سريعة</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-soft no-underline text-sm transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">تواصلي معنا</h3>
            <ul className="space-y-4 text-sm text-soft">
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-light" />
                <a
                  href="tel:966549986148"
                  className="text-soft no-underline transition-colors hover:text-accent-light"
                  dir="ltr"
                >
                  +966 54 998 6148
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-light" />
                <span>يومياً من 9 صباحاً حتى 10 مساءً</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-light" />
                <span>الرياض وجميع المدن الكبرى</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-soft">
            © {currentYear} Home Spa. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-soft">
            صُنع بكل فخر في المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  );
}
