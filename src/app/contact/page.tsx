import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: siteContent.meta.contact.title,
  description: siteContent.meta.contact.description,
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <div className="bg-[#FFF8F6] text-[#291817]">
      {/* 1. Header Band with Woofly-Style Warm Aesthetics */}
      <section className="relative overflow-hidden bg-white border-b border-[#F2CECA] pt-12 pb-14 sm:pt-16 sm:pb-16">
        {/* Subtle decorative background stars */}
        <div
          className="absolute top-8 left-8 text-[#DE1B54] text-lg select-none opacity-30 hidden sm:block"
          aria-hidden="true"
        >
          ✦
        </div>
        <div
          className="absolute bottom-8 right-12 text-[#DE1B54] text-2xl select-none opacity-20 hidden lg:block"
          aria-hidden="true"
        >
          ✦
        </div>

        <div className="site-container text-center max-w-[840px] mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-3">
            <span aria-hidden="true">✦</span>
            <span>Sector 54 · Golf Course Road · Gurugram</span>
          </div>

          {/* Headline */}
          <h1 className="heading-h1 mb-4">
            Visit our studio or{" "}
            <span className="text-[#DE1B54]">reserve 1-on-1 care.</span>
          </h1>

          {/* Subtitle */}
          <p className="body-large text-[#806F6C] max-w-[680px] mx-auto mb-6">
            We operate strictly by appointment to give every dog and cat dedicated, unhurried attention in a calm, cage-free sanctuary. Call us, get directions, or request your slot below.
          </p>

          {/* Restrained Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-bold text-[#806F6C]">
            <span className="inline-flex items-center gap-1.5 bg-[#FFF8F6] border border-[#F2CECA] px-3.5 py-1.5 rounded-full">
              <span className="text-[#DE1B54]">★</span> 4.9 Rating (140+ Google Reviews)
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FFF8F6] border border-[#F2CECA] px-3.5 py-1.5 rounded-full">
              <span className="text-[#DE1B54]">🐾</span> 1-on-1 Dedicated Groomer
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FFF8F6] border border-[#F2CECA] px-3.5 py-1.5 rounded-full">
              <span className="text-[#DE1B54]">🚫</span> Zero Holding Cages
            </span>
          </div>
        </div>
      </section>

      {/* 2. Main Studio Guide + Interactive Booking Form Grid */}
      <section className="section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Consolidated Boutique Studio Visit Card (Col 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#F2CECA] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_12px_36px_rgba(41,24,23,0.05)]">
                {/* Studio Showcase Photography */}
                <div className="relative aspect-[16/10] bg-[#FCEAE7]">
                  <Image
                    src="/images/studio-hero.jpg"
                    alt="Paws & Claws Pet Grooming Studio in Gurugram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

                  {/* Responsive Badges on image */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-xs text-[#291817] text-[10px] sm:text-[11px] font-extrabold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/60 shadow-xs flex items-center gap-1.5 shrink-0 pointer-events-auto">
                      <span className="text-[#DE1B54]">📍</span>
                      <span>Sector 54 Studio</span>
                    </div>

                    <div className="bg-[#291817]/90 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20 shadow-xs flex items-center gap-1.5 shrink-0 pointer-events-auto">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Open Tue – Sun</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 text-white">
                    <p className="text-xs font-bold drop-shadow-sm">
                      Paws &amp; Claws Boutique Studio
                    </p>
                    <p className="text-[11px] text-white/90 drop-shadow-xs">
                      Golf Course Road · Sector 54 · Gurugram
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-7 space-y-5 sm:space-y-6">
                  {/* Location & Directions */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-1.5">
                      <span>✦</span>
                      <span>Studio Location</span>
                    </div>
                    <p className="text-base font-extrabold text-[#291817]">
                      {siteContent.business.address}
                    </p>
                    <p className="text-xs text-[#806F6C] mt-1 leading-relaxed">
                      Conveniently located near Sector 54 Rapid Metro Station. Dedicated parking available right in front of the studio for pet parents.
                    </p>

                    {/* Quick Direction & Call Buttons */}
                    <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-2.5 mt-3.5">
                      <a
                        href={siteContent.business.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs py-2.5 px-3 min-h-[44px] flex items-center justify-center gap-1.5 text-center font-bold"
                      >
                        <svg
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5 text-[#DE1B54] shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>Google Maps</span>
                      </a>

                      <a
                        href={`tel:${siteContent.business.phoneRaw}`}
                        className="btn-secondary text-xs py-2.5 px-3 min-h-[44px] flex items-center justify-center gap-1.5 text-center font-bold"
                      >
                        <svg
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5 text-[#DE1B54] shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span>Call Studio</span>
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours Table */}
                  <div className="bg-[#FFF8F6] p-4 sm:p-4.5 rounded-2xl border border-[#F2CECA]/70">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#291817]">
                        Operating Hours
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        By Appointment Only
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      {siteContent.business.hours.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-[#806F6C] py-1 border-b border-[#F2CECA]/30 last:border-b-0"
                        >
                          <span className="font-bold text-[#291817]">
                            {h.days}
                          </span>
                          <span className={h.days.includes("Monday") ? "text-[#806F6C] italic" : "text-[#291817] font-semibold"}>
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct WhatsApp Concierge Strip */}
                  <div className="p-4 bg-[#FCEAE7] rounded-2xl border border-[#DE1B54]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#291817]">
                        Prefer to chat immediately?
                      </p>
                      <p className="text-[11px] text-[#806F6C]">
                        Direct WhatsApp line: {siteContent.business.phoneDisplay}
                      </p>
                    </div>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2.5 px-4 font-bold shrink-0 text-center gap-1.5 min-h-[44px]"
                    >
                      <span>Chat on WhatsApp</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>

                  {/* Studio Hygiene & Safety Guarantees */}
                  <div className="pt-2 border-t border-[#F2CECA]/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#291817] mb-3">
                      Our Studio Standards
                    </p>
                    <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-2 text-xs text-[#806F6C]">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </span>
                        <span>1-on-1 Dedicated Room</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </span>
                        <span>Zero Holding Cages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </span>
                        <span>Quiet Cat Groom Suite</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </span>
                        <span>Glass Observation Lounge</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Refined Interactive Booking Form (Col 6-12) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Preparing for Your Studio Visit (What to Bring & What to Expect) */}
      <section className="bg-white border-y border-[#F2CECA] section-pad">
        <div className="site-container">
          <div className="max-w-[720px] mx-auto text-center mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Smooth &amp; Calm Experience</span>
            </span>
            <h2 className="heading-h2">
              Preparing for your <span className="text-[#DE1B54]">studio visit.</span>
            </h2>
            <p className="body-large mt-2.5 text-[#806F6C]">
              We have designed every step of our boutique salon to keep pets calm and pet parents completely at ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] hover:border-[#DE1B54]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center text-xl font-bold mb-5 shadow-xs">
                💉
              </div>
              <h3 className="font-extrabold text-[#291817] text-lg mb-2">
                Vaccination Records
              </h3>
              <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                To protect all guests, pets must have active Rabies and DHPPi (for dogs) or Tricat (for cats) vaccinations. A quick WhatsApp photo before your visit works perfectly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] hover:border-[#DE1B54]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center text-xl font-bold mb-5 shadow-xs">
                🕒
              </div>
              <h3 className="font-extrabold text-[#291817] text-lg mb-2">
                Arrive 5 Mins Early
              </h3>
              <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                A 5-minute pre-session sniff in our calm reception helps pets decompress, adjust to the boutique scents, and greet their groomer before water or scissors come out.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] hover:border-[#DE1B54]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#FCEAE7] text-[#DE1B54] flex items-center justify-center text-xl font-bold mb-5 shadow-xs">
                ☕
              </div>
              <h3 className="font-extrabold text-[#291817] text-lg mb-2">
                Glass Parent Lounge
              </h3>
              <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                You are welcome to relax in our air-conditioned reception with complimentary refreshments and watch your pet through the clear glass observation window.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Visit FAQ Section */}
      <section className="section-pad">
        <div className="site-container">
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Visit Queries</span>
            </span>
            <h2 className="heading-h2">
              Frequently asked <span className="text-[#DE1B54]">visit questions.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
            <div className="p-6 bg-white border border-[#F2CECA] rounded-[24px] shadow-xs">
              <h3 className="font-extrabold text-[#291817] text-base mb-2">
                Do you accept walk-in appointments?
              </h3>
              <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                To guarantee zero waiting cages and dedicated 1-on-1 attention for every pet, we operate strictly by scheduled appointments. Please submit the form or WhatsApp us before coming.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#F2CECA] rounded-[24px] shadow-xs">
              <h3 className="font-extrabold text-[#291817] text-base mb-2">
                Can I stay with my dog or cat during grooming?
              </h3>
              <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                Yes! Our studio features a clear glass observation window facing our parent lounge. You can comfortably relax with tea or coffee and watch your companion throughout the session.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#F2CECA] rounded-[24px] shadow-xs">
              <h3 className="font-extrabold text-[#291817] text-base mb-2">
                What if my pet is nervous or has special needs?
              </h3>
              <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                Our groomers are certified in low-stress handling. We take extra time, incorporate treat breaks, and never force an anxious pet. Mention any sensitivities in the booking form notes!
              </p>
            </div>

            <div className="p-6 bg-white border border-[#F2CECA] rounded-[24px] shadow-xs">
              <h3 className="font-extrabold text-[#291817] text-base mb-2">
                How long does a grooming session take?
              </h3>
              <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                Bath &amp; hygiene sessions usually take 60 to 90 minutes. Full breed haircuts and de-shedding treatments take 90 to 120 minutes. We send a WhatsApp notification 15 minutes before completion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
