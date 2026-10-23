import { siteContent } from "@/data/siteContent";

export default function MobileCallBar() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <div
      role="region"
      aria-label="Quick Mobile Contact"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#FBFBF9] border-t border-[#CBD3CC] px-4 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${siteContent.business.phoneRaw}`}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 bg-white border border-[#CBD3CC] text-[#1E3A34] text-sm font-semibold rounded-lg hover:bg-[#F2F4F0] active:bg-[#EAF1ED] transition-colors"
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
          <span>Call Studio</span>
        </a>

        {/* WhatsApp Booking Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 bg-[#1E3A34] text-white text-sm font-semibold rounded-lg hover:bg-[#142723] active:bg-[#142723] transition-colors"
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
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
