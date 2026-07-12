"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/services";

/**
 * المكوّن العلوي الثابت (Header)
 * يحتوي على الشعار وروابط التنقل وقائمة الجوال
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-secondary" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* الشعار */}
        <Link
          href="/"
          className="flex items-center gap-2 text-dark no-underline hover:opacity-90 transition-opacity"
          aria-label="الذهاب إلى الصفحة الرئيسية"
        >
          <span className="text-2xl">🌸</span>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-primary">Home</span>{" "}
            <span className="text-dark">Spa</span>
          </span>
        </Link>

        {/* روابط التنقل — سطح المكتب */}
        <nav className="hidden md:flex items-center gap-1" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-dark-muted no-underline transition-colors hover:bg-secondary hover:text-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* زر الحجز السريع — سطح المكتب */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/966549986148?text=مرحباً، أود حجز موعد في Home Spa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            احجز الآن
          </a>
        </div>

        {/* زر القائمة في الجوال */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-dark hover:bg-secondary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {menuOpen ? (
            /* أيقونة الإغلاق */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* أيقونة الهامبرغر */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* القائمة المنبثقة للجوال */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-secondary" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 bg-white" aria-label="التنقل في الجوال">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base font-medium text-dark-muted no-underline transition-colors hover:bg-secondary hover:text-dark"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/966549986148?text=مرحباً، أود حجز موعد في Home Spa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 text-center text-sm"
            onClick={() => setMenuOpen(false)}
          >
            احجز الآن
          </a>
        </nav>
      </div>
    </header>
  );
}
