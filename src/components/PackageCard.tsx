import { ServicePackage, siteContent } from "@/data/siteContent";

export default function PackageCard({ pkg }: { pkg: ServicePackage }) {
  const whatsappUrl = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    pkg.whatsappMessage
  )}`;

  return (
    <div className="bg-white border border-[#F0C9C5] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(41,24,23,0.04)] hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300 relative">
      {pkg.badge && (
        <span className="absolute -top-3 left-6 bg-[#FF3B40] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
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

        <p className="text-sm text-[#796B69] mb-6 leading-relaxed">
          {pkg.shortDescription}
        </p>

        {/* Pricing & Size Breakdown */}
        <div className="bg-[#FFF8F6] p-4 rounded-2xl mb-6 space-y-2.5 border border-[#F0C9C5]/80">
          <span className="text-xs font-bold text-[#291817] uppercase tracking-wider block">
            Pricing by Pet Size / Coat
          </span>
          <div className="space-y-2">
            {pkg.tiers.map((tier, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs py-1.5 border-b border-[#F0C9C5]/50 last:border-none gap-1 sm:gap-2"
              >
                <div>
                  <span className="font-bold text-[#291817]">
                    {tier.category}
                  </span>
                  <span className="text-[#796B69] block text-[11px]">
                    {tier.description}
                  </span>
                </div>
                <div className="text-left sm:text-right pt-0.5 sm:pt-0">
                  <span className="inline-block px-2.5 py-0.5 bg-white border border-[#F0C9C5] rounded-full font-mono font-bold text-[#FF3B40] text-xs shadow-2xs">
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
        <div className="mb-8 pt-4 border-t border-[#F0C9C5]/80">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#291817] mb-1">
            Best Suited For
          </h4>
          <p className="text-xs text-[#796B69] leading-relaxed">
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
          <svg
            width={16}
            height={16}
            className="w-4 h-4 fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.151-1.27-.468-2.42-1.494-.894-.797-1.498-1.782-1.674-2.083-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.151-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.48 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.146 4.548.719.311 1.28.497 1.718.636.723.23 1.38.197 1.901.12.58-.088 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.352zM12 2C6.486 2 2 6.486 2 12c0 1.954.565 3.78 1.542 5.328L2 22l4.825-1.509A9.948 9.948 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.2c-1.688 0-3.26-.525-4.566-1.42l-.328-.225-3.327 1.04 1.066-3.208-.247-.358A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
          </svg>
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
