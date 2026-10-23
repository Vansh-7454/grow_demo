import { siteContent } from "@/data/siteContent";

export default function BookingProcessSection() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Explore our gentle canine hydro-baths, show breed scissor cuts, or feline quiet room treatments.",
    },
    {
      number: "02",
      title: "Share Your Pet's Details",
      description:
        "Provide your pet's breed, coat condition, and skin sensitivities so our groomer prepares the right organic botanicals.",
    },
    {
      number: "03",
      title: "Select a Convenient Time",
      description:
        "Reserve a dedicated 1-on-1 slot with zero overlapping dogs, zero waiting cages, and prompt WhatsApp pickup alerts.",
    },
    {
      number: "04",
      title: "Enjoy the Grooming Experience",
      description:
        "Drop off your companion at our Sector 54 studio, or relax in our waiting reception with a clear observation window.",
    },
  ];

  return (
    <section className="bg-[#FCEAE7]/70 border-y border-[#F2CECA] section-pad">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-[700px] mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2.5">
            <span aria-hidden="true">✦</span>
            <span>Simple 4-Step Booking</span>
          </span>
          <h2 className="heading-h2">
            From first click to <span className="text-[#FF3B40]">fresh paws.</span>
          </h2>
          <p className="body-large mt-3">
            Scheduling a calm, 1-on-1 session takes less than 60 seconds with our direct WhatsApp studio concierge.
          </p>
        </div>

        {/* 2-Column Layout matching Screenshot 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Interactive Visual App/Booking Mockup */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-[#FFF8F6] border border-[#F2CECA] rounded-[28px] p-5 sm:p-7 shadow-[0_16px_36px_rgba(41,24,23,0.06)] relative overflow-hidden">
              {/* Decorative mini starlet */}
              <div className="absolute top-4 right-5 text-[#FF3B40] text-sm select-none opacity-70" aria-hidden="true">
                ✦
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Screen Card 1: Address */}
                <div className="bg-white border border-[#F2CECA] rounded-2xl p-4 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-[#291817] mb-2">
                    <span>📍 Studio Location</span>
                    <span className="text-[#FF3B40]">Active</span>
                  </div>
                  <div className="bg-[#FFF8F6] p-2.5 rounded-xl border border-[#F2CECA]/60 text-xs">
                    <p className="font-bold text-[#291817]">Sector 54 Studio</p>
                    <p className="text-[11px] text-[#806F6C] mt-0.5">Golf Course Road, Gurugram</p>
                  </div>
                </div>

                {/* Screen Card 2: Package Preview */}
                <div className="bg-white border border-[#F2CECA] rounded-2xl p-4 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-[#291817] mb-1.5">
                    <span>Spa Bath Preview</span>
                    <span className="text-xs font-mono font-bold text-[#FF3B40]">₹1,499</span>
                  </div>
                  <p className="text-[11px] text-[#806F6C] mb-2.5">60 mins · Hydro-bath &amp; ears</p>
                  <div className="w-full py-1.5 bg-[#FF3B40] text-white text-[11px] font-bold rounded-lg text-center">
                    1-on-1 Reserved
                  </div>
                </div>

                {/* Screen Card 3: Pet Selection */}
                <div className="bg-white border border-[#F2CECA] rounded-2xl p-4 shadow-xs">
                  <p className="text-xs font-bold text-[#291817] mb-2">Who are we pampering?</p>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2 rounded-xl bg-[#FCEAE7] border border-[#FF3B40]/40 font-bold text-[#FF3B40]">
                      🐶 Dog
                    </div>
                    <div className="p-2 rounded-xl bg-[#FFF8F6] border border-[#F2CECA] text-[#806F6C] font-medium">
                      🐱 Cat
                    </div>
                  </div>
                </div>

                {/* Screen Card 4: Date & Time */}
                <div className="bg-white border border-[#F2CECA] rounded-2xl p-4 shadow-xs">
                  <p className="text-xs font-bold text-[#291817] mb-2">Selected Time Slot</p>
                  <div className="bg-[#FFF8F6] p-2 rounded-xl border border-[#F2CECA]/60 text-xs text-center font-bold text-[#291817]">
                    Tue – Sun · 10:00 AM – 7:30 PM
                  </div>
                </div>
              </div>

              {/* Bottom Notification Strip */}
              <div className="mt-4 pt-3 border-t border-[#F2CECA] flex items-center justify-between text-xs text-[#806F6C]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF3B40]" aria-hidden="true" />
                  <span className="font-semibold text-[#291817]">Zero Waiting Delays</span>
                </span>
                <span className="font-semibold text-[#FF3B40]">WhatsApp Confirmed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Steps matching Screenshot 1 */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2">
            {steps.map((step, idx) => (
              <div key={idx} className="pb-6 sm:pb-8 border-b border-[#F2CECA] last:border-b-0 last:pb-0">
                <div className="flex items-start gap-4">
                  {/* Circular step badge outline */}
                  <span className="w-9 h-9 rounded-full border-1.5 border-[#FF3B40] text-[#FF3B40] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 bg-white">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#291817] tracking-tight mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#806F6C] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Book a Grooming Session</span>
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
