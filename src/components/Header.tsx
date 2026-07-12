"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, getIcon } from "@/data/services";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const SpaIcon = getIcon("spa");

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-xl border-b border-bone" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-espresso no-underline hover:opacity-85 transition-opacity"
          aria-label="الذهاب إلى الصفحة الرئيسية"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
            <SpaIcon className="h-5 w-5 text-primary" />
          </span>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-primary">Home</span>{" "}
            <span className="text-espresso">Spa</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted no-underline transition-colors hover:bg-bone hover:text-espresso"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
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

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-espresso hover:bg-bone transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-bone" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 bg-white" aria-label="التنقل في الجوال">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base font-medium text-espresso no-underline transition-colors hover:bg-bone"
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
