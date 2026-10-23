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
    <div className="bg-[#FBFBF9]">
      {/* Header Band */}
      <section className="bg-white border-b border-[#E2E6E2] pt-12 pb-14">
        <div className="site-container text-center max-w-[800px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
            Visit or Book Online
          </span>
          <h1 className="heading-h1 text-[#1E3A34] mb-4">
            Contact our Gurugram grooming studio.
          </h1>
          <p className="body-large text-[#57635E]">
            We operate strictly by appointment to ensure every dog and cat receives dedicated, unhurried attention. Get directions, call us directly, or book your slot on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Contact Grid: Studio Info + Contact Form */}
      <section className="section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left: Studio Info, Hours & Direct Conversion (Col 1-5) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Quick Action Buttons */}
              <div className="p-4 sm:p-6 bg-white border border-[#CBD3CC] rounded-2xl shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A34] block">
                  Instant Contact
                </span>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 bg-[#1E3A34] text-white font-semibold rounded-lg text-sm hover:bg-[#142723] transition-colors shadow-sm"
                >
                  <svg
                    width={16}
                    height={16}
                    className="w-4 h-4 fill-current text-white shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.151-1.27-.468-2.42-1.494-.894-.797-1.498-1.782-1.674-2.083-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.151-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.48 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.146 4.548.719.311 1.28.497 1.718.636.723.23 1.38.197 1.901.12.58-.088 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.352zM12 2C6.486 2 2 6.486 2 12c0 1.954.565 3.78 1.542 5.328L2 22l4.825-1.509A9.948 9.948 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.2c-1.688 0-3.26-.525-4.566-1.42l-.328-.225-3.327 1.04 1.066-3.208-.247-.358A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteContent.business.phoneRaw}`}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#CBD3CC] text-[#1E3A34] font-semibold rounded-lg text-sm hover:bg-[#F2F4F0] transition-colors"
                >
                  <svg
                    width={16}
                    height={16}
                    className="w-4 h-4 text-[#1E3A34] shrink-0"
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
                  <span>Call {siteContent.business.phoneDisplay}</span>
                </a>

                <a
                  href={siteContent.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#CBD3CC] text-[#1E3A34] font-semibold rounded-lg text-sm hover:bg-[#F2F4F0] transition-colors"
                >
                  <svg
                    width={16}
                    height={16}
                    className="w-4 h-4 text-[#1E3A34] shrink-0"
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
              <div className="p-4 sm:p-6 bg-white border border-[#CBD3CC] rounded-2xl shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)] space-y-5 text-sm text-[#1A201E]">
                <div>
                  <h3 className="font-bold text-[#1E3A34] text-base mb-1">
                    Studio Location
                  </h3>
                  <p className="text-[#57635E] leading-relaxed">
                    {siteContent.business.address}
                  </p>
                  <p className="text-xs text-[#B45309] font-medium bg-[#FEF3C7] p-2 rounded mt-2">
                    Placeholder Note: {siteContent.business.addressPlaceholderNote}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E6E2]">
                  <h3 className="font-bold text-[#1E3A34] text-base mb-1">
                    Operating Hours
                  </h3>
                  {siteContent.business.hours.map((h, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-xs py-1 text-[#57635E]"
                    >
                      <span className="font-medium text-[#1A201E]">
                        {h.days}:
                      </span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#E2E6E2]">
                  <h3 className="font-bold text-[#1E3A34] text-base mb-1">
                    Studio Policy
                  </h3>
                  <p className="text-xs text-[#57635E] leading-relaxed">
                    Vaccination records (Rabies & DHPPi/Tricat) must be presented or sent via WhatsApp before service. Appointments are allocated exclusively to your pet.
                  </p>
                </div>
              </div>

              {/* Studio Photography & Map Reference */}
              <div className="border border-[#CBD3CC] rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="relative aspect-[16/10] bg-[#EAF1ED]">
                  <Image
                    src="/images/studio-hero.jpg"
                    alt="Paws & Claws Pet Grooming Studio in Gurugram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1E3A34]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    📍 Sector 54 Studio
                  </div>
                </div>
                <div className="p-4 bg-[#FBFBF9] text-center border-t border-[#E2E6E2]">
                  <p className="text-xs font-semibold text-[#1E3A34]">
                    Dedicated 1-on-1 Grooming & Reception
                  </p>
                  <p className="text-[11px] text-[#57635E] mt-0.5">
                    Sector 54 · Golf Course Road · Gurugram
                  </p>
                  <a
                    href={siteContent.business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-white border border-[#CBD3CC] rounded-lg text-xs font-semibold text-[#1E3A34] hover:bg-[#F2F4F0] shadow-xs"
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
