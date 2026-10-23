import { siteContent } from "@/data/siteContent";

export default function MobileCallBar() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <div
      role="region"
      aria-label="Quick Mobile Contact"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#FFF8F6]/95 backdrop-blur-md border-t border-[#F2CECA] px-4 py-2.5 shadow-[0_-4px_16px_rgba(41,24,23,0.06)]"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${siteContent.business.phoneRaw}`}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 bg-white border border-[#F2CECA] text-[#291817] text-sm font-semibold rounded-[14px] hover:bg-[#FCEAE7] active:bg-[#FCEAE7] transition-colors"
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
          <span>Call Studio</span>
        </a>

        {/* WhatsApp Booking Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 bg-[#DE1B54] text-white text-sm font-bold rounded-[14px] hover:bg-[#E52E33] active:bg-[#CC2226] transition-colors shadow-xs"
        >
          <span>Book Grooming</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
