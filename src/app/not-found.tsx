import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export default function NotFound() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <div className="min-h-[60vh] flex items-center justify-center section-pad bg-[#FFF8F6] text-[#291817]">
      <div className="site-container max-w-lg text-center">
        <div className="w-16 h-16 rounded-full bg-[#FCEAE7] text-[#FF3B40] mx-auto flex items-center justify-center font-extrabold text-xl mb-4 border border-[#F0C9C5] shadow-xs">
          404
        </div>
        <h1 className="heading-h2 mb-3">
          This page <span className="text-[#FF3B40]">wandered off.</span>
        </h1>
        <p className="body-large mb-8">
          The link you followed does not exist or may have been moved. Return to our homepage or reach out on WhatsApp if you need help finding grooming information.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary text-sm w-full sm:w-auto"
          >
            Return to Homepage
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm w-full sm:w-auto"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
