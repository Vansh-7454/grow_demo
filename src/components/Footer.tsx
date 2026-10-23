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
    <footer className="bg-[#291817] text-[#FCEAE7] border-t border-[#3D2524]">
      <div className="site-container py-14 sm:py-16 lg:py-20">
        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#FF3B40] rounded-xl"
            >
              <div className="w-10 h-10 rounded-2xl overflow-hidden shrink-0 bg-white p-1">
                <Image
                  src="/images/logo.svg"
                  alt="Paws & Claws Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white leading-tight">
                {siteContent.business.name}
              </span>
            </Link>

            <p className="text-sm text-[#C4B5B3] leading-relaxed">
              Thoughtful grooming, happier pets, and care in every little detail.
            </p>

            <p className="text-xs text-[#A89896] leading-relaxed">
              {siteContent.business.shortDescription}
            </p>

            <div className="pt-1">
              <a
                href={siteContent.business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#3D2524] border border-[#523332] px-3.5 py-1.5 rounded-full hover:border-[#FF3B40] transition-colors"
              >
                <span className="text-[#FF3B40]">★</span>
                <span>Google Business Rating: {siteContent.business.googleRating}</span>
              </a>
            </div>
          </div>

          {/* Column 2 — Explore */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dog-grooming"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors"
                >
                  Dog Grooming
                </Link>
              </li>
              <li>
                <Link
                  href="/cat-grooming"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors"
                >
                  Cat Grooming
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors"
                >
                  Verified Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors"
                >
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/dog-grooming#packages"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors block"
                >
                  Dog Bath &amp; Hygiene Care
                </Link>
              </li>
              <li>
                <Link
                  href="/dog-grooming#packages"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors block"
                >
                  Breed Scissor Haircuts &amp; Styling
                </Link>
              </li>
              <li>
                <Link
                  href="/dog-grooming#packages"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors block"
                >
                  Medicated &amp; Anti-Tick Baths
                </Link>
              </li>
              <li>
                <Link
                  href="/cat-grooming#packages"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors block"
                >
                  Quiet Feline Dry &amp; Wet Baths
                </Link>
              </li>
              <li>
                <Link
                  href="/cat-grooming#packages"
                  className="text-sm text-[#C4B5B3] hover:text-[#FF3B40] transition-colors block"
                >
                  Persian Cat De-Matting &amp; Lion Cut
                </Link>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FF3B40] hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>Book Grooming on WhatsApp</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#C4B5B3]">
              <div>
                <p className="font-semibold text-white">Studio Address:</p>
                <p className="leading-snug mt-0.5">{siteContent.business.address}</p>
                <a
                  href={siteContent.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#FF3B40] hover:underline inline-block mt-1"
                >
                  Get directions on Google Maps →
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Phone &amp; WhatsApp:</p>
                <p className="mt-0.5">
                  <a
                    href={`tel:${siteContent.business.phoneRaw}`}
                    className="hover:text-white underline text-white font-medium mr-2"
                  >
                    {siteContent.business.phoneDisplay}
                  </a>
                </p>
                <p className="mt-0.5">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF3B40] font-semibold hover:underline"
                  >
                    Chat on WhatsApp →
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Email Inquiries:</p>
                <a
                  href={`mailto:${siteContent.business.email}`}
                  className="hover:text-white underline text-[#C4B5B3] block mt-0.5"
                >
                  {siteContent.business.email}
                </a>
              </div>

              <div className="pt-1">
                <p className="font-semibold text-white mb-1">Hours:</p>
                {siteContent.business.hours.map((h, i) => (
                  <p key={i} className="text-xs leading-relaxed">
                    <span className="text-white font-medium">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3D2524] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A89896] gap-4">
          <p>
            © {currentYear} {siteContent.business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#FF3B40] transition-colors">
              Studio Location
            </Link>
            <Link href="/reviews" className="hover:text-[#FF3B40] transition-colors">
              Customer Feedback
            </Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3B40] transition-colors">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
