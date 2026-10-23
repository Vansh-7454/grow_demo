"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <footer className="bg-[#FFF8F6] text-[#291817] border-t border-[#F2CECA] transition-colors relative overflow-hidden">
      {/* Decorative subtle background aura */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#FCEAE7] rounded-full blur-3xl opacity-60 -z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#FCEAE7] rounded-full blur-3xl opacity-60 -z-0"
        aria-hidden="true"
      />

      <div className="site-container py-14 sm:py-16 lg:py-20 relative z-10">
        {/* 1. Pre-Footer Studio Invitation Banner */}
        <div className="mb-14 sm:mb-16 p-7 sm:p-10 md:p-12 bg-white border border-[#F2CECA] rounded-[28px] shadow-[0_12px_36px_rgba(41,24,23,0.05)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-[620px] space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE1B54]">
                <span aria-hidden="true">✦</span>
                <span>Boutique Pet Grooming Studio · Gurugram</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#291817] tracking-tight">
                Ready for fresh paws &amp;{" "}
                <span className="text-[#DE1B54]">happier tails?</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                We operate strictly by appointment to guarantee individual, unhurried attention for your dog or cat in a tranquil, cage-free sanctuary.
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-1 text-xs font-semibold text-[#806F6C]">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </span>
                  <span>Zero Holding Cages</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </span>
                  <span>1-on-1 Dedicated Time</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </span>
                  <span>Quiet Cat Suites</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm gap-2 text-center"
              >
                <span>Book on WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={`tel:${siteContent.business.phoneRaw}`}
                className="btn-secondary text-sm gap-2 text-center"
              >
                <svg
                  width={16}
                  height={16}
                  className="w-4 h-4 text-[#DE1B54] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call: {siteContent.business.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main 4-Column Responsive Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4">
          {/* Column 1 — Brand & Story (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-2 focus-visible:outline-[#DE1B54] rounded-xl"
            >
              <Image
                src="/images/logo.svg"
                alt="Paws & Claws Logo"
                width={170}
                height={40}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-sm font-semibold text-[#291817] leading-relaxed">
              Thoughtful grooming, happier pets, and gentle care in every little detail.
            </p>

            <p className="text-xs text-[#806F6C] leading-relaxed">
              {siteContent.business.shortDescription}
            </p>

            <div className="pt-2">
              <a
                href={siteContent.business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#291817] bg-white border border-[#F2CECA] px-3.5 py-2 rounded-full hover:border-[#DE1B54] hover:bg-[#FCEAE7]/50 transition-colors shadow-2xs"
              >
                <span className="text-[#DE1B54] text-sm">★</span>
                <span>Google Verified: {siteContent.business.googleRating}</span>
                <span className="text-[11px] text-[#806F6C]">
                  ({siteContent.business.googleReviewCount})
                </span>
              </a>
            </div>
          </div>

          {/* Column 2 — Explore Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#291817]">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-[#806F6C] hover:text-[#DE1B54] transition-colors inline-block font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services & Treatments (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#291817]">
              Services &amp; Packages
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#806F6C]">
              <li>
                <Link
                  href="/dog-grooming#packages"
                  className="hover:text-[#DE1B54] transition-colors block font-medium"
                >
                  Dog Bath &amp; Hygiene Care
                </Link>
              </li>
              <li>
                <Link
                  href="/dog-grooming#packages"
                  className="hover:text-[#DE1B54] transition-colors block font-medium"
                >
                  Breed Scissor Haircuts &amp; Styling
                </Link>
              </li>
              <li>
                <Link
                  href="/dog-grooming#packages"
                  className="hover:text-[#DE1B54] transition-colors block font-medium"
                >
                  Medicated &amp; Anti-Tick Baths
                </Link>
              </li>
              <li>
                <Link
                  href="/cat-grooming#packages"
                  className="hover:text-[#DE1B54] transition-colors block font-medium"
                >
                  Quiet Feline Comfort Hydro-Bath
                </Link>
              </li>
              <li>
                <Link
                  href="/cat-grooming#packages"
                  className="hover:text-[#DE1B54] transition-colors block font-medium"
                >
                  Persian Cat De-Matting &amp; Lion Cut
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#DE1B54] hover:underline inline-flex items-center gap-1"
                >
                  <span>WhatsApp Concierge Chat</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Studio Location (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#291817]">
              Studio Location
            </h3>

            {/* Address */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p className="font-bold text-[#291817]">
                Gurugram Salon:
              </p>
              <p className="text-[#806F6C] leading-relaxed">
                Sector 54, Golf Course Road, Gurugram,
                <br className="hidden sm:inline" /> Haryana 122011
              </p>
              <div className="pt-0.5">
                <a
                  href={siteContent.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#DE1B54] hover:underline inline-flex items-center gap-1 group"
                >
                  <span>Open in Google Maps</span>
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-2 border-t border-[#F2CECA]/60 space-y-1.5 text-xs sm:text-sm">
              <p className="font-bold text-[#291817]">
                Hours (By Appointment):
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-center text-[#291817]">
                  <span className="text-[#806F6C]">Tuesday to Sunday:</span>
                  <span className="font-semibold text-[#291817]">10:00 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between items-center text-[#806F6C]">
                  <span>Monday:</span>
                  <span className="italic text-[11px]">Closed (Weekly studio sanitization day)</span>
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="pt-2 border-t border-[#F2CECA]/60 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-[#291817]">
                Direct Lines:
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={`tel:${siteContent.business.phoneRaw}`}
                    className="hover:text-[#DE1B54] text-[#291817] font-medium transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg
                      width={13}
                      height={13}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DE1B54] shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Call: {siteContent.business.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DE1B54] font-semibold hover:underline inline-flex items-center gap-2 group"
                  >
                    <svg
                      width={13}
                      height={13}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#DE1B54] shrink-0"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span>WhatsApp: {siteContent.business.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteContent.business.email}`}
                    className="hover:text-[#DE1B54] text-[#806F6C] transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg
                      width={13}
                      height={13}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#806F6C] group-hover:text-[#DE1B54] transition-colors shrink-0"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>{siteContent.business.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Trust Bar */}
        <div className="mt-14 pt-8 border-t border-[#F2CECA] flex flex-col md:flex-row items-center justify-between text-xs text-[#806F6C] gap-4">
          <p className="text-center md:text-left">
            © {currentYear} {siteContent.business.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-[#291817]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE1B54]" />
              <span>Strictly 1-on-1 Grooming</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#291817]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE1B54]" />
              <span>Zero Holding Cages</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#291817]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE1B54]" />
              <span>Observation Lounge</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="hover:text-[#DE1B54] transition-colors font-medium"
            >
              Location &amp; Visit
            </Link>
            <Link
              href="/reviews"
              className="hover:text-[#DE1B54] transition-colors font-medium"
            >
              Reviews
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DE1B54] hover:underline font-bold"
            >
              Book Now →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
