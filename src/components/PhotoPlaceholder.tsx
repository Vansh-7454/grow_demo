import Image from "next/image";
import { PhotoPlaceholderItem } from "@/data/siteContent";

export default function PhotoPlaceholder({
  item,
}: {
  item: PhotoPlaceholderItem;
}) {
  return (
    <div className="group border border-[#F0C9C5] bg-white rounded-[24px] overflow-hidden shadow-[0_6px_24px_rgba(41,24,23,0.04)] hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* 4:3 Aspect Ratio Frame */}
      <div className="relative aspect-[4/3] bg-[#FFF8F6] overflow-hidden border-b border-[#F0C9C5]">
        {item.imageUrl ? (
          <>
            <Image
              src={item.imageUrl}
              alt={item.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-[#FF3B40] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
              {item.category} Care
            </div>
            <div className="absolute bottom-3 right-3 bg-[#291817]/70 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
              Studio Result
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white border border-[#F0C9C5] flex items-center justify-center text-[#FF3B40] mb-3 shadow-xs">
              <svg
                width={24}
                height={24}
                className="w-6 h-6 text-[#FF3B40] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[11px] font-mono font-bold text-[#FF3B40] border border-[#F0C9C5] mb-2">
              {item.recommendedSize} · {item.aspectRatio}
            </span>

            <p className="text-xs font-bold text-[#291817] max-w-[240px]">
              {item.filename}
            </p>
            <span className="text-[11px] text-[#796B69] mt-1">
              Awaiting Client Real Pet Photo
            </span>
          </div>
        )}
      </div>

      {/* Description metadata block */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF3B40]">
              {item.category} Grooming
            </span>
            <span className="text-[11px] text-[#9E8E8C]">Gurugram Studio</span>
          </div>
          <h4 className="text-base font-bold text-[#291817] tracking-tight mb-1">
            {item.title}
          </h4>
          <p className="text-xs text-[#796B69] leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#F0C9C5]/50 flex items-center justify-between text-[11px] text-[#9E8E8C]">
          <span>Alt: {item.altText.slice(0, 32)}...</span>
          <span className="font-mono text-[#FF3B40] font-bold">1-on-1 Care</span>
        </div>
      </div>
    </div>
  );
}
