import { ServicePackage, siteContent } from "@/data/siteContent";

export default function PackageCard({ pkg }: { pkg: ServicePackage }) {
  const whatsappUrl = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    pkg.whatsappMessage
  )}`;

  return (
    <div className="bg-white border border-[#F2CECA] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(41,24,23,0.04)] hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300 relative">
      {pkg.badge && (
        <span className="absolute -top-3 left-6 bg-[#FF3B40] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
          {pkg.badge}
        </span>
      )}

      <div>
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#291817] tracking-tight">
            {pkg.name}
          </h3>
          <p className="text-xs font-semibold text-[#FF3B40] uppercase tracking-wide mt-1">
            For: {pkg.targetPet}s · {pkg.tagline}
          </p>
        </div>

        <p className="text-sm text-[#806F6C] mb-6 leading-relaxed">
          {pkg.shortDescription}
        </p>

        {/* Pricing & Size Breakdown */}
        <div className="bg-[#FFF8F6] p-4 rounded-2xl mb-6 space-y-2.5 border border-[#F2CECA]">
          <span className="text-xs font-bold text-[#291817] uppercase tracking-wider block">
            Pricing by Pet Size / Coat
          </span>
          <div className="space-y-2">
            {pkg.tiers.map((tier, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs py-1.5 border-b border-[#F2CECA]/70 last:border-none gap-1 sm:gap-2"
              >
                <div>
                  <span className="font-bold text-[#291817]">
                    {tier.category}
                  </span>
                  <span className="text-[#806F6C] block text-[11px]">
                    {tier.description}
                  </span>
                </div>
                <div className="text-left sm:text-right pt-0.5 sm:pt-0">
                  <span className="inline-block px-2.5 py-0.5 bg-white border border-[#F2CECA] rounded-full font-mono font-bold text-[#FF3B40] text-xs shadow-2xs">
                    {tier.pricePlaceholder}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#9E8E8C] italic pt-1">
            *Final quote confirmed on WhatsApp based on actual coat length and tangles.
          </p>
        </div>

        {/* What's Included */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#291817] mb-3">
            What is Included
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-[#291817]">
            {pkg.whatsIncluded.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <svg
                  width={16}
                  height={16}
                  className="w-4 h-4 text-[#FF3B40] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who it is for */}
        <div className="mb-8 pt-4 border-t border-[#F2CECA]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#291817] mb-1">
            Best Suited For
          </h4>
          <p className="text-xs text-[#806F6C] leading-relaxed">
            {pkg.targetAudience}
          </p>
        </div>
      </div>

      {/* Action CTA */}
      <div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-sm flex items-center justify-center gap-2"
        >
          <span>Book on WhatsApp</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
