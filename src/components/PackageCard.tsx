import { ServicePackage, siteContent } from "@/data/siteContent";

export default function PackageCard({ pkg }: { pkg: ServicePackage }) {
  const whatsappUrl = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    pkg.whatsappMessage
  )}`;

  return (
    <div className="bg-white border border-[#F2CECA] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(41,24,23,0.04)] hover:border-[#DE1B54] hover:-translate-y-1 transition-all duration-300 relative">
      {pkg.badge && (
        <span className="absolute -top-3 left-6 bg-[#DE1B54] text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
          {pkg.badge}
        </span>
      )}

      <div>
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B54]">
              {pkg.targetPet} Grooming
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#291817] tracking-tight">
            {pkg.name}
          </h3>
          <p className="text-xs text-[#806F6C] mt-1 line-clamp-2">
            {pkg.shortDescription}
          </p>
        </div>

        {/* Prominent Starting Price Banner */}
        <div className="my-4 py-3.5 border-y border-[#F2CECA]/60 flex items-baseline justify-between">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-[#291817] tracking-tight">
              {pkg.startingPrice || pkg.tiers[0]?.price}
            </span>
            <span className="text-xs font-semibold text-[#806F6C] ml-1.5">starts from</span>
          </div>
          <span className="text-[11px] font-bold text-[#DE1B54] bg-[#FCEAE7] px-3 py-1 rounded-full uppercase tracking-wider">
            1-on-1 Care
          </span>
        </div>

        {/* Compact Pricing by Pet Size Strip */}
        <div className="bg-[#FFF8F6] border border-[#F2CECA] rounded-2xl p-3 mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#806F6C]">
              Price by Pet Size
            </span>
            <span className="text-[10px] text-[#DE1B54] font-semibold">Cage-Free</span>
          </div>
          <div
            className={`grid ${
              pkg.tiers.length === 2
                ? "grid-cols-2"
                : pkg.tiers.length === 1
                ? "grid-cols-1"
                : "grid-cols-3"
            } gap-2`}
          >
            {pkg.tiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#F2CECA]/70 rounded-xl p-2 text-center shadow-2xs"
              >
                <span className="text-[11px] font-semibold text-[#806F6C] block truncate">
                  {tier.category.split(" ")[0]}
                </span>
                <span className="text-xs font-mono font-bold text-[#DE1B54] block mt-0.5">
                  {tier.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core What's Included (Top 4 Highlights) */}
        <div className="mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#806F6C] block mb-2.5">
            Key Inclusions
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-[#291817]">
            {pkg.whatsIncluded.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="pt-2 mt-auto">
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
