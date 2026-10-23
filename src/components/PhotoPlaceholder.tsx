import { PhotoPlaceholderItem } from "@/data/siteContent";

export default function PhotoPlaceholder({
  item,
}: {
  item: PhotoPlaceholderItem;
}) {
  return (
    <div className="group border border-[#CBD3CC] bg-[#F2F4F0] rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)] flex flex-col h-full">
      {/* 4:3 Aspect Ratio Frame */}
      <div className="relative aspect-[4/3] bg-[#EAF1ED] flex flex-col items-center justify-center p-6 text-center border-b border-[#CBD3CC]">
        <div className="w-12 h-12 rounded-full bg-white border border-[#CBD3CC] flex items-center justify-center text-[#1E3A34] mb-3 shadow-xs">
          <svg
            className="w-6 h-6"
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

        <span className="inline-block px-2.5 py-0.5 rounded bg-white text-[11px] font-mono font-medium text-[#1E3A34] border border-[#CBD3CC] mb-2">
          {item.recommendedSize} · {item.aspectRatio}
        </span>

        <p className="text-xs font-semibold text-[#1E3A34] max-w-[240px]">
          {item.filename}
        </p>
        <span className="text-[11px] text-[#57635E] mt-1">
          Awaiting Client Real Pet Photo
        </span>
      </div>

      {/* Description metadata block */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D97706]">
              {item.category} Grooming
            </span>
            <span className="text-[11px] text-[#7B8882]">Real Photo Slot</span>
          </div>
          <h4 className="text-base font-bold text-[#1A201E] tracking-tight mb-1">
            {item.title}
          </h4>
          <p className="text-xs text-[#57635E] leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#F2F4F0] flex items-center justify-between text-[11px] text-[#7B8882]">
          <span>Alt: {item.altText.slice(0, 32)}...</span>
          <span className="font-mono text-[#1E3A34]">JPG / WebP</span>
        </div>
      </div>
    </div>
  );
}
