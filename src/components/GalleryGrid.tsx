"use client";

import { useState } from "react";
import { siteContent } from "@/data/siteContent";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<"All" | "Dogs" | "Cats">("All");

  const filteredItems = siteContent.galleryPlaceholders.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });

  return (
    <div>
      {/* Filter Chips Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
        {(["All", "Dogs", "Cats"] as const).map((category) => {
          const isActive = filter === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`min-h-[44px] px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                isActive
                  ? "bg-[#FF3B40] text-white border-[#FF3B40] shadow-sm"
                  : "bg-white text-[#806F6C] border-[#F2CECA] hover:text-[#FF3B40] hover:border-[#FF3B40] hover:bg-[#FFF8F6]"
              }`}
            >
              {category === "All" ? "All Groomed Pets" : `${category} Only`}
            </button>
          );
        })}
      </div>

      {/* Grid of Photo Placeholders (Consistent 4:3 Frames) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <PhotoPlaceholder key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
