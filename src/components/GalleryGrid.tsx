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
      <div className="flex items-center justify-center gap-2 mb-10">
        {(["All", "Dogs", "Cats"] as const).map((category) => {
          const isActive = filter === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-150 border ${
                isActive
                  ? "bg-[#1E3A34] text-white border-[#1E3A34]"
                  : "bg-white text-[#57635E] border-[#CBD3CC] hover:text-[#1E3A34] hover:bg-[#F2F4F0]"
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
