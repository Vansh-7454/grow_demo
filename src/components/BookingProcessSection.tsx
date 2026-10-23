import Image from "next/image";
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
        "Explore our gentle canine hydro-baths, breed scissor haircuts, or feline quiet room treatments.",
    },
    {
      number: "02",
      title: "Share Your Pet's Details",
      description:
        "Tell us your pet's breed, coat condition, and skin sensitivities so our groomer prepares the right organic botanicals.",
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
    <section className="bg-[#FFF8F6] border-y border-[#F2CECA] section-pad">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-[720px] mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
            <span aria-hidden="true">✦</span>
            <span>Simple 4-Step Booking</span>
          </span>
          <h2 className="heading-h2">
            From first click to <span className="text-[#DE1B54]">fresh paws.</span>
          </h2>
          <p className="body-large mt-3">
            Scheduling a calm, 1-on-1 session takes less than 60 seconds with our direct WhatsApp studio concierge.
          </p>
        </div>

        {/* 2-Column Layout matching Woofly Aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Ultra-Premium App Preview Cards Deck */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Soft decorative background ambient aura */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-[#FCEAE7] via-[#FFF8F6] to-[#FCEAE7] rounded-[36px] blur-lg -z-10 opacity-70"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Mobile Screen Card 1: Address & Location */}
                <div className="bg-white border border-[#F2CECA] rounded-[24px] p-4 sm:p-5 shadow-[0_10px_28px_rgba(41,24,23,0.05)] flex flex-col justify-between hover:border-[#DE1B54]/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#291817] pb-3 mb-3 border-b border-[#F2CECA]/50">
                      <span className="flex items-center gap-1.5 text-[#291817]">
                        <span className="text-xs text-[#806F6C]">←</span>
                        <span>Studio Address</span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DE1B54] bg-[#FCEAE7] px-2 py-0.5 rounded-full">
                        Open
                      </span>
                    </div>

                    <div className="bg-[#FFF8F6] p-3 rounded-2xl border border-[#F2CECA]/70 mb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-bold text-[#291817]">📍 Sector 54 Studio</p>
                          <p className="text-[11px] text-[#806F6C] mt-0.5 leading-snug">
                            Golf Course Road, Gurugram
                          </p>
                        </div>
                        <span className="text-[11px] text-[#DE1B54] font-bold">✓</span>
                      </div>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-[#F2CECA]/50 text-[11px] text-[#806F6C] flex items-center justify-between">
                      <span>Near Sector 54 Metro</span>
                      <span className="text-[#DE1B54] font-semibold text-[10px]">Parking Avail.</span>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#F2CECA]/50 flex items-center justify-between text-[10px] text-[#806F6C]">
                    <span className="font-semibold text-[#291817]">1-on-1 Studio</span>
                    <span className="text-[#DE1B54] font-bold">Zero Cage Stays</span>
                  </div>
                </div>

                {/* Mobile Screen Card 2: Package Preview with Photo */}
                <div className="bg-white border border-[#F2CECA] rounded-[24px] p-4 sm:p-5 shadow-[0_10px_28px_rgba(41,24,23,0.05)] flex flex-col justify-between hover:border-[#DE1B54]/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#291817] pb-3 mb-3 border-b border-[#F2CECA]/50">
                      <span className="flex items-center gap-1.5 text-[#291817]">
                        <span className="text-xs text-[#806F6C]">←</span>
                        <span>Package Preview</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-[#DE1B54]">₹999</span>
                    </div>

                    {/* Mini Pet Photo preview */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-[#F2CECA] bg-[#FCEAE7]">
                      <Image
                        src="/images/shih-tzu-cut.jpg"
                        alt="Signature Grooming Preview"
                        fill
                        sizes="(max-width: 640px) 100vw, 220px"
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-[#291817]/75 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                        Spa Hydro-Bath
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#806F6C] mb-2.5">
                      <span className="font-semibold text-[#291817]">60 mins · Individual Care</span>
                      <span className="text-[#DE1B54] font-bold">Organic Wash</span>
                    </div>
                  </div>

                  <div className="w-full py-2 bg-[#DE1B54] text-white text-xs font-bold rounded-xl text-center shadow-xs">
                    Reserved 1-on-1 Slot ✓
                  </div>
                </div>

                {/* Mobile Screen Card 3: Who are we pampering? */}
                <div className="bg-white border border-[#F2CECA] rounded-[24px] p-4 sm:p-5 shadow-[0_10px_28px_rgba(41,24,23,0.05)] flex flex-col justify-between hover:border-[#DE1B54]/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#291817] pb-3 mb-3 border-b border-[#F2CECA]/50">
                      <span className="flex items-center gap-1.5 text-[#291817]">
                        <span className="text-xs text-[#806F6C]">←</span>
                        <span>Who are we pampering?</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 mb-3">
                      <div className="p-3 rounded-2xl bg-[#FCEAE7] border-2 border-[#DE1B54] text-center shadow-2xs">
                        <span className="text-xl block mb-1">🐶</span>
                        <p className="text-xs font-extrabold text-[#291817]">Dog</p>
                        <p className="text-[10px] text-[#DE1B54] font-semibold">Active Select</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FFF8F6] border border-[#F2CECA] text-center hover:border-[#DE1B54]/40 transition-colors">
                        <span className="text-xl block mb-1">🐱</span>
                        <p className="text-xs font-bold text-[#806F6C]">Cat</p>
                        <p className="text-[10px] text-[#806F6C]">Quiet Suite</p>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#806F6C] leading-snug">
                      Breed, size &amp; sensitivities confirmed directly on WhatsApp before appointment.
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#F2CECA]/50 flex items-center justify-between text-[10px] text-[#806F6C]">
                    <span>Temperament First</span>
                    <span className="font-bold text-[#DE1B54]">No Overlapping Pets</span>
                  </div>
                </div>

                {/* Mobile Screen Card 4: Date & Time Picker */}
                <div className="bg-white border border-[#F2CECA] rounded-[24px] p-4 sm:p-5 shadow-[0_10px_28px_rgba(41,24,23,0.05)] flex flex-col justify-between hover:border-[#DE1B54]/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#291817] pb-3 mb-3 border-b border-[#F2CECA]/50">
                      <span className="flex items-center gap-1.5 text-[#291817]">
                        <span className="text-xs text-[#806F6C]">←</span>
                        <span>Choose Date &amp; Time</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#806F6C]">Step 3/4</span>
                    </div>

                    {/* Date Pills */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="flex-1 py-1.5 text-center text-[11px] font-bold rounded-xl bg-[#DE1B54] text-white shadow-2xs">
                        Today
                      </span>
                      <span className="flex-1 py-1.5 text-center text-[11px] font-semibold rounded-xl bg-[#FFF8F6] border border-[#F2CECA] text-[#291817]">
                        Tomorrow
                      </span>
                      <span className="flex-1 py-1.5 text-center text-[11px] font-semibold rounded-xl bg-[#FFF8F6] border border-[#F2CECA] text-[#806F6C]">
                        Weekend
                      </span>
                    </div>

                    {/* Time chips */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="p-2 bg-[#FCEAE7] border border-[#DE1B54]/50 rounded-xl text-center text-xs font-bold text-[#291817]">
                        10:30 AM
                      </div>
                      <div className="p-2 bg-[#FFF8F6] border border-[#F2CECA] rounded-xl text-center text-xs font-medium text-[#806F6C]">
                        03:00 PM
                      </div>
                    </div>

                    <p className="text-[11px] text-[#806F6C] leading-snug">
                      Tue – Sun: 10:00 AM – 7:30 PM
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#F2CECA]/50 flex items-center justify-between text-[10px]">
                    <span className="text-[#806F6C]">Fast WhatsApp Sync</span>
                    <span className="font-bold text-[#DE1B54]">Instant Confirm</span>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Ribbon */}
              <div className="mt-4 p-3.5 bg-white border border-[#F2CECA] rounded-2xl shadow-xs flex items-center justify-between text-xs">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DE1B54] animate-pulse" aria-hidden="true" />
                  <span className="font-bold text-[#291817]">100% Gentle &amp; Cage-Free Promise</span>
                </span>
                <span className="font-bold text-[#DE1B54]">Gurugram Studio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Steps matching Woofly */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2">
            {steps.map((step, idx) => (
              <div key={idx} className="pb-6 sm:pb-8 border-b border-[#F2CECA] last:border-b-0 last:pb-0">
                <div className="flex items-start gap-4">
                  {/* Circular step badge outline in dark pink */}
                  <span className="w-10 h-10 rounded-full border-2 border-[#DE1B54] text-[#DE1B54] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 bg-white shadow-2xs">
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

