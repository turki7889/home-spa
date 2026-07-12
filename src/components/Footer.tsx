import Link from "next/link";
import { navLinks, getIcon } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const PhoneIcon = getIcon("phone");
  const ClockIcon = getIcon("clock");
  const MapIcon = getIcon("mapMarker");
  const SpaIcon = getIcon("spa");

  return (
    <footer className="bg-espresso-light text-bone" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2.5 text-white no-underline"
              aria-label="Home Spa"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
                <SpaIcon className="h-5 w-5 text-primary" />
              </span>
              <span className="text-xl font-bold">
                <span className="text-primary">Home</span> Spa
              </span>
            </Link>
            <p className="text-muted leading-relaxed text-sm">
              سبا منزلي فاخر - نقدم لك تجربة استرخاء استثنائية في راحة منزلك.
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
                    className="text-muted no-underline text-sm transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">تواصل معنا</h3>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="tel:966549986148"
                  className="text-muted no-underline transition-colors hover:text-primary"
                  dir="ltr"
                >
                  +966 54 998 6148
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>يومياً من 9 صباحاً حتى 10 مساءً</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>الرياض وجميع المدن الكبرى</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-espresso-light/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-muted">
            © {currentYear} Home Spa. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-muted">
            صُنع بكل فخر في المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  );
}
