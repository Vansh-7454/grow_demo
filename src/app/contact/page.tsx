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
      {/* Header Band */}
      <section className="bg-white border-b border-[#F2CECA] pt-12 pb-14">
        <div className="site-container text-center max-w-[800px] mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2.5">
            <span aria-hidden="true">✦</span>
            <span>Visit or Book Online</span>
          </span>
          <h1 className="heading-h1 mb-4">
            Contact our Gurugram <span className="text-[#FF3B40]">grooming studio.</span>
          </h1>
          <p className="body-large">
            We operate strictly by appointment to ensure every dog and cat receives dedicated, unhurried attention. Get directions, call us directly, or book your slot on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Contact Grid: Studio Info + Contact Form */}
      <section className="section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Studio Info, Hours & Direct Conversion (Col 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Quick Action Buttons */}
              <div className="p-6 bg-white border border-[#F2CECA] rounded-[24px] shadow-[0_8px_30px_rgba(41,24,23,0.04)] space-y-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] block mb-1">
                  <span aria-hidden="true">✦</span>
                  <span>Instant Studio Contact</span>
                </span>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm gap-2"
                >
                  <span>Chat on WhatsApp</span>
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href={`tel:${siteContent.business.phoneRaw}`}
                  className="btn-secondary w-full text-sm gap-2"
                >
                  <svg
                    width={16}
                    height={16}
                    className="w-4 h-4 text-[#FF3B40] shrink-0"
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
                  <span>Call: {siteContent.business.phoneDisplay}</span>
                </a>

                <a
                  href={siteContent.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-sm gap-2"
                >
                  <svg
                    width={16}
                    height={16}
                    className="w-4 h-4 text-[#FF3B40] shrink-0"
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
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

              {/* Studio Details Card */}
              <div className="p-6 bg-white border border-[#F2CECA] rounded-[24px] shadow-[0_8px_30px_rgba(41,24,23,0.04)] space-y-4 text-sm text-[#291817]">
                <div>
                  <h3 className="font-extrabold text-[#291817] text-base mb-1">
                    Studio Location
                  </h3>
                  <p className="text-xs sm:text-sm text-[#806F6C] leading-relaxed">
                    {siteContent.business.address}
                  </p>
                  <p className="text-xs text-[#FF3B40] font-semibold bg-[#FFF8F6] border border-[#F2CECA] p-2.5 rounded-xl mt-2">
                    Note: {siteContent.business.addressPlaceholderNote}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2CECA]/50">
                  <h3 className="font-extrabold text-[#291817] text-base mb-1.5">
                    Operating Hours
                  </h3>
                  {siteContent.business.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-xs py-1 text-[#806F6C]"
                    >
                      <span className="font-bold text-[#291817]">
                        {h.days}:
                      </span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#F2CECA]/50">
                  <h3 className="font-extrabold text-[#291817] text-base mb-1">
                    Studio Policy
                  </h3>
                  <p className="text-xs text-[#806F6C] leading-relaxed">
                    Vaccination records (Rabies &amp; DHPPi/Tricat) must be presented or sent via WhatsApp before service. Appointments are allocated exclusively to your pet.
                  </p>
                </div>
              </div>

              {/* Studio Photography & Map Reference */}
              <div className="border border-[#F2CECA] rounded-[24px] overflow-hidden bg-white shadow-xs">
                <div className="relative aspect-[16/10] bg-[#FCEAE7]">
                  <Image
                    src="/images/studio-hero.jpg"
                    alt="Paws & Claws Pet Grooming Studio in Gurugram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF3B40] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    📍 Sector 54 Studio
                  </div>
                </div>
                <div className="p-5 bg-[#FFF8F6] text-center border-t border-[#F2CECA]/60">
                  <p className="text-xs font-bold text-[#291817]">
                    Dedicated 1-on-1 Grooming &amp; Reception
                  </p>
                  <p className="text-[11px] text-[#806F6C] mt-0.5">
                    Sector 54 · Golf Course Road · Gurugram
                  </p>
                  <a
                    href={siteContent.business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs mt-3 inline-flex"
                  >
                    Open Live Interactive Map →
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Strict Validation Form (Col 6-12) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
