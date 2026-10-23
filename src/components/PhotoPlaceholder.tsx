import Image from "next/image";
import { PhotoPlaceholderItem } from "@/data/siteContent";

export default function PhotoPlaceholder({
  item,
}: {
  item: PhotoPlaceholderItem;
}) {
  return (
    <div className="group border border-[#F2CECA] bg-white rounded-[24px] overflow-hidden shadow-[0_6px_24px_rgba(41,24,23,0.04)] hover:border-[#DE1B54] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* 4:3 Aspect Ratio Frame */}
      <div className="relative aspect-[4/3] bg-[#FFF8F6] overflow-hidden border-b border-[#F2CECA]">
        {item.imageUrl ? (
          <>
            <Image
              src={item.imageUrl}
              alt={item.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-[#DE1B54] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
              {item.category} Care
            </div>
            <div className="absolute bottom-3 right-3 bg-[#291817]/75 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
              Studio Result
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <span className="text-2xl mb-2">🐾</span>
            <p className="text-xs font-bold text-[#291817] max-w-[240px]">
              {item.title}
            </p>
          </div>
        )}
      </div>

      {/* Description metadata block */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#DE1B54]">
              {item.category} Grooming
            </span>
            <span className="text-[11px] text-[#806F6C]">Gurugram Studio</span>
          </div>
          <h4 className="text-base font-bold text-[#291817] tracking-tight mb-1">
            {item.title}
          </h4>
          <p className="text-xs text-[#806F6C] leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#F2CECA]/50 flex items-center justify-between text-[11px] text-[#806F6C]">
          <span>Sector 54 Gurugram</span>
          <span className="text-[#DE1B54] font-bold">1-on-1 Gentle Groom</span>
        </div>
      </div>
    </div>
  );
}
