"use client";

import { useState } from "react";
import { FaqItem } from "@/data/siteContent";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenFirst?: boolean;
}

export default function FaqAccordion({
  items,
  defaultOpenFirst = false,
}: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenFirst && items.length > 0 ? [items[0].id] : []
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4 max-w-[850px] mx-auto">
      {items.map((faq) => {
        const isOpen = openIds.includes(faq.id);
        const contentId = `faq-content-${faq.id}`;
        const buttonId = `faq-btn-${faq.id}`;

        return (
          <div
            key={faq.id}
            className="border border-[#CBD3CC] bg-white rounded-xl overflow-hidden transition-colors"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full min-h-[56px] px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-base md:text-lg text-[#1A201E] hover:text-[#1E3A34] focus-visible:outline-2 focus-visible:outline-[#1E3A34] transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#1E3A34]"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 pt-1 text-sm md:text-base text-[#57635E] leading-relaxed border-t border-[#F2F4F0]"
              >
                <p>{faq.answer}</p>
                {!faq.isConfirmed && (
                  <p className="mt-2 text-xs text-[#B45309] font-medium bg-[#FEF3C7] p-2 rounded">
                    Placeholder Note: {faq.confirmationNote || "Studio confirmation pending"}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
