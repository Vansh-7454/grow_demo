"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Esc key and focus trapping + Body attribute and event sync
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        openButtonRef.current?.focus();
      }

      // Trap focus inside modal
      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.setAttribute("data-mobile-menu-open", "true");
      window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: { isOpen: true } }));
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.removeAttribute("data-mobile-menu-open");
      window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: { isOpen: false } }));
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.removeAttribute("data-mobile-menu-open");
      window.dispatchEvent(new CustomEvent("mobile-menu-toggle", { detail: { isOpen: false } }));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F6]/95 backdrop-blur-md border-b border-[#F2CECA] transition-colors">
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Tagline */}
          <Link
            href="/"
            className="flex items-center gap-3 group min-h-[44px] focus-visible:outline-2 focus-visible:outline-[#DE1B54] rounded-xl py-1"
          >
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Paws & Claws Brand Logo"
                width={160}
                height={38}
                className="h-8 sm:h-9 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1"
          >
            {siteContent.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-h-[44px] flex items-center px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? "text-[#DE1B54] bg-[#FCEAE7]"
                      : "text-[#291817] hover:text-[#DE1B54] hover:bg-[#FCEAE7]/70"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href={`tel:${siteContent.business.phoneRaw}`}
              className="min-h-[44px] px-3.5 py-2 text-sm font-semibold text-[#291817] hover:text-[#DE1B54] transition-colors flex items-center gap-2 whitespace-nowrap"
              title="Call studio directly"
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
              <span>{siteContent.business.phoneDisplay}</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] px-6 py-2.5 text-sm font-bold text-white bg-[#DE1B54] hover:bg-[#E52E33] active:bg-[#CC2226] rounded-[14px] transition-all duration-150 flex items-center gap-2 shadow-[0_4px_16px_rgba(255,59,64,0.25)] hover:shadow-[0_6px_20px_rgba(255,59,64,0.35)] hover:-translate-y-0.5 whitespace-nowrap"
              title="Book grooming session on WhatsApp"
            >
              <span>Book a Grooming</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile Actions: Quick Call + Hamburger */}
          <div className="flex lg:hidden items-center space-x-2 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] px-3.5 py-1.5 text-xs font-bold text-white bg-[#DE1B54] rounded-[12px] shadow-xs flex items-center gap-1"
            >
              <span>Book</span>
              <span aria-hidden="true">→</span>
            </a>

            <button
              ref={openButtonRef}
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-[#291817] rounded-xl hover:bg-[#FCEAE7] focus-visible:outline-2 focus-visible:outline-[#DE1B54]"
            >
              <svg
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer portalled to document.body so backdrop-blur on header never traps position:fixed */}
      {mounted &&
        isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            className="fixed inset-0 z-[99999] lg:hidden flex flex-col bg-[#FFF8F6] w-full h-[100dvh] overflow-hidden"
          >
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between h-20 px-5 border-b border-[#F2CECA] shrink-0 bg-[#FFF8F6]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/images/logo.svg"
                  alt="Paws & Claws Brand Logo"
                  width={150}
                  height={34}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>

              <button
                ref={closeButtonRef}
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-[#291817] rounded-xl hover:bg-[#FCEAE7] focus-visible:outline-2 focus-visible:outline-[#DE1B54] cursor-pointer"
              >
                <svg
                  width={24}
                  height={24}
                  className="w-6 h-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div
              ref={drawerRef}
              className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between bg-[#FFF8F6]"
            >
              <nav className="flex flex-col space-y-2.5" aria-label="Mobile Navigation">
                {siteContent.navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`min-h-[50px] flex items-center justify-between px-4 py-3 text-base rounded-2xl transition-colors ${
                        isActive
                          ? "text-[#DE1B54] bg-[#FCEAE7] font-bold border border-[#DE1B54]/30"
                          : "text-[#291817] hover:bg-[#FCEAE7]/50 font-semibold"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      <span className="text-sm opacity-60">→</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Mobile Action Buttons inside drawer */}
              <div className="pt-6 border-t border-[#F2CECA] space-y-3 shrink-0 pb-6">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[50px] w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#DE1B54] text-white font-bold rounded-2xl text-base shadow-[0_4px_14px_rgba(222,27,84,0.28)] hover:bg-[#C21345]"
                >
                  <span>Book a Grooming on WhatsApp</span>
                  <span>→</span>
                </a>

                <a
                  href={`tel:${siteContent.business.phoneRaw}`}
                  className="min-h-[50px] w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#F2CECA] text-[#291817] font-semibold rounded-2xl text-base hover:bg-[#FCEAE7]"
                >
                  <svg
                    width={18}
                    height={18}
                    className="w-4 h-4 text-[#DE1B54] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Call {siteContent.business.phoneDisplay}</span>
                </a>

                <div className="pt-2 text-center text-xs text-[#806F6C]">
                  <span>📍 Sector 54 Studio · Golf Course Road, Gurugram</span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
