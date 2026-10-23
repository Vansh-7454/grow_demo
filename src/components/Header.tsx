"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  // Esc key and focus trapping
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
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-sm border-b border-[#E2E6E2]">
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Tagline */}
          <Link
            href="/"
            className="flex flex-col group min-h-[44px] justify-center focus-visible:outline-2 focus-visible:outline-[#1E3A34] rounded"
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1E3A34] leading-tight">
              {siteContent.business.name}
            </span>
            <span className="text-xs text-[#57635E] font-medium tracking-wide">
              {siteContent.business.tagline}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {siteContent.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-h-[44px] flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? "text-[#1E3A34] bg-[#EAF1ED] font-semibold"
                      : "text-[#57635E] hover:text-[#1E3A34] hover:bg-[#F2F4F0]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${siteContent.business.phoneRaw}`}
              className="min-h-[44px] px-3.5 py-2.5 text-sm font-semibold text-[#1E3A34] border border-[#CBD3CC] rounded-lg hover:bg-[#EAF1ED] transition-colors duration-150 flex items-center gap-2"
              title="Call studio directly"
            >
              <svg
                width={16}
                height={16}
                className="w-4 h-4 text-[#1E3A34] shrink-0"
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
              <span>Call us now</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 py-2.5 text-sm font-semibold text-white bg-[#1E3A34] hover:bg-[#142723] rounded-lg transition-colors duration-150 flex items-center gap-2 shadow-sm"
              title="Chat on WhatsApp to book slot"
            >
              <svg
                width={16}
                height={16}
                className="w-4 h-4 fill-current text-white shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.151-1.27-.468-2.42-1.494-.894-.797-1.498-1.782-1.674-2.083-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.151-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.48 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.146 4.548.719.311 1.28.497 1.718.636.723.23 1.38.197 1.901.12.58-.088 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.352zM12 2C6.486 2 2 6.486 2 12c0 1.954.565 3.78 1.542 5.328L2 22l4.825-1.509A9.948 9.948 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.2c-1.688 0-3.26-.525-4.566-1.42l-.328-.225-3.327 1.04 1.066-3.208-.247-.358A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              ref={openButtonRef}
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-[#1E3A34] rounded-lg hover:bg-[#F2F4F0] focus-visible:outline-2 focus-visible:outline-[#1E3A34]"
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Instant/Subtle 150ms fade, no heavy animation) */}
      {isOpen && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FBFBF9]"
        >
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between h-20 px-5 border-b border-[#E2E6E2]">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1E3A34]">
                {siteContent.business.name}
              </span>
              <span className="text-xs text-[#57635E]">
                {siteContent.business.city} · Studio Menu
              </span>
            </div>

            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-[#1E3A34] rounded-lg hover:bg-[#F2F4F0] focus-visible:outline-2 focus-visible:outline-[#1E3A34]"
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div
            ref={drawerRef}
            className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between"
          >
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {siteContent.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`min-h-[44px] flex items-center px-4 py-3 text-base rounded-lg transition-colors ${
                      isActive
                        ? "text-[#1E3A34] bg-[#EAF1ED] font-semibold"
                        : "text-[#1A201E] hover:bg-[#F2F4F0] font-medium"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Mobile Action Buttons inside drawer */}
            <div className="pt-6 border-t border-[#E2E6E2] space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#1E3A34] text-white font-semibold rounded-lg text-base"
              >
                <svg
                  width={20}
                  height={20}
                  className="w-5 h-5 fill-current text-white shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.151-1.27-.468-2.42-1.494-.894-.797-1.498-1.782-1.674-2.083-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.151-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.48 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.146 4.548.719.311 1.28.497 1.718.636.723.23 1.38.197 1.901.12.58-.088 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.352zM12 2C6.486 2 2 6.486 2 12c0 1.954.565 3.78 1.542 5.328L2 22l4.825-1.509A9.948 9.948 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.2c-1.688 0-3.26-.525-4.566-1.42l-.328-.225-3.327 1.04 1.066-3.208-.247-.358A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteContent.business.phoneRaw}`}
                className="min-h-[48px] w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#CBD3CC] text-[#1E3A34] font-semibold rounded-lg text-base"
              >
                <svg
                  width={20}
                  height={20}
                  className="w-5 h-5 text-[#1E3A34] shrink-0"
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
                <span>Call us now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
