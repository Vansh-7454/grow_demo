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
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              isOpen
                ? "border-[#DE1B54]/50 bg-white shadow-[0_8px_24px_rgba(41,24,23,0.06)]"
                : "border-[#F2CECA] bg-white hover:border-[#DE1B54]/40 shadow-[0_4px_14px_rgba(41,24,23,0.03)]"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full min-h-[56px] px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#291817] hover:text-[#DE1B54] focus-visible:outline-2 focus-visible:outline-[#DE1B54] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-[#DE1B54] text-white" : "bg-[#FCEAE7] text-[#DE1B54]"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <svg
                      width={16}
                      height={16}
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      width={16}
                      height={16}
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
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
                className="px-6 pb-6 pt-1 text-sm md:text-base text-[#806F6C] leading-relaxed border-t border-[#FCEAE7]"
              >
                <p>{faq.answer}</p>
                {!faq.isConfirmed && (
                  <p className="mt-3 text-xs text-[#291817] font-semibold bg-[#FCEAE7] p-2.5 rounded-xl border border-[#F2CECA]">
                    Note: {faq.confirmationNote || "Studio confirmation pending"}
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
