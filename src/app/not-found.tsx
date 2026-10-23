import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function NotFound() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <div className="min-h-[60vh] flex items-center justify-center section-pad bg-[#FBFBF9]">
      <div className="site-container max-w-lg text-center">
        <div className="w-16 h-16 rounded-full bg-[#EAF1ED] text-[#1E3A34] mx-auto flex items-center justify-center font-bold text-xl mb-4 border border-[#CBD3CC]">
          404
        </div>
        <h1 className="heading-h2 text-[#1E3A34] mb-3">
          This page wandered off.
        </h1>
        <p className="body-large text-[#57635E] mb-8">
          The link you followed does not exist or may have been moved. Return to our homepage or reach out on WhatsApp if you need help finding grooming information.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="min-h-[44px] px-6 py-2.5 bg-[#1E3A34] text-white text-sm font-semibold rounded-lg hover:bg-[#142723] transition-colors w-full sm:w-auto"
          >
            Return to Homepage
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-6 py-2.5 bg-white border border-[#CBD3CC] text-[#1E3A34] text-sm font-semibold rounded-lg hover:bg-[#F2F4F0] transition-colors w-full sm:w-auto"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
