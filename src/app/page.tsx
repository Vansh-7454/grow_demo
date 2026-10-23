import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import FaqAccordion from "@/components/FaqAccordion";
import { FaqSchema } from "@/components/SchemaOrg";

export const metadata = {
  title: siteContent.meta.home.title,
  description: siteContent.meta.home.description,
};

export default function HomePage() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <div>
      <FaqSchema faqs={siteContent.faqs.slice(0, 3)} />

      {/* 1. Hero Section (Fully Static, Zero Animation) */}
      <section className="bg-[#FBFBF9] border-b border-[#E2E6E2] section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Headlines & Direct Actions (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1ED] border border-[#CBD3CC] text-xs font-semibold text-[#1E3A34]">
                <span className="w-2 h-2 rounded-full bg-[#1E3A34]" aria-hidden="true" />
                <span>Gurugram Pet Grooming Studio · Sector 54</span>
              </div>

              {/* Headline: 8 words stating customer benefit */}
              <h1 className="heading-h1 text-[#1E3A34]">
                Gentle, stress-free grooming for dogs and cats.
              </h1>

              {/* Intro: 2 sentences */}
              <p className="body-large text-[#57635E] max-readable">
                Dedicated 1-on-1 pet care studio in Gurugram. From soothing hydro-baths to breed styling, we treat every pet with patient hands and hospital-grade hygiene.
              </p>

              {/* Key Trust Signals (Real Studio Policies) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#F2F4F0] border border-[#E2E6E2] rounded-xl text-xs">
                  <span className="font-bold text-[#1E3A34] block">Zero Caging</span>
                  <span className="text-[#57635E]">Individual 1-on-1 grooming</span>
                </div>
                <div className="p-3 bg-[#F2F4F0] border border-[#E2E6E2] rounded-xl text-xs">
                  <span className="font-bold text-[#1E3A34] block">Separate Cat Suite</span>
                  <span className="text-[#57635E]">Quiet, stress-free space</span>
                </div>
                <div className="p-3 bg-[#F2F4F0] border border-[#E2E6E2] rounded-xl text-xs">
                  <span className="font-bold text-[#1E3A34] block">Viewing Window</span>
                  <span className="text-[#57635E]">Watch your pet comfortably</span>
                </div>
              </div>

              {/* Primary & Secondary Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-6 py-3.5 text-base font-semibold text-white bg-[#1E3A34] hover:bg-[#142723] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg
                    width={20}
                    height={20}
                    className="w-5 h-5 fill-current text-white shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.151-1.27-.468-2.42-1.494-.894-.797-1.498-1.782-1.674-2.083-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.151-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.48 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.146 4.548.719.311 1.28.497 1.718.636.723.23 1.38.197 1.901.12.58-.088 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.352zM12 2C6.486 2 2 6.486 2 12c0 1.954.565 3.78 1.542 5.328L2 22l4.825-1.509A9.948 9.948 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.2c-1.688 0-3.26-.525-4.566-1.42l-.328-.225-3.327 1.04 1.066-3.208-.247-.358A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/dog-grooming"
                  className="min-h-[48px] px-6 py-3.5 text-base font-semibold text-[#1E3A34] bg-white border border-[#CBD3CC] hover:bg-[#F2F4F0] rounded-lg transition-colors flex items-center justify-center"
                >
                  <span>View Dog Packages</span>
                </Link>

                <Link
                  href="/cat-grooming"
                  className="min-h-[48px] px-6 py-3.5 text-base font-semibold text-[#1E3A34] bg-white border border-[#CBD3CC] hover:bg-[#F2F4F0] rounded-lg transition-colors flex items-center justify-center"
                >
                  <span>View Cat Packages</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Frame (Static Neutral Studio Showcase) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#CBD3CC] rounded-2xl p-4 sm:p-6 shadow-[0_4px_24px_-2px_rgba(30,58,52,0.06)] space-y-4">
                <div className="relative aspect-[4/3] bg-[#EAF1ED] rounded-xl border border-[#CBD3CC] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#CBD3CC] flex items-center justify-center text-[#1E3A34] mb-3 shadow-xs">
                    <svg
                      width={28}
                      height={28}
                      className="w-7 h-7 text-[#1E3A34] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
                  <span className="px-2.5 py-1 bg-white text-xs font-mono font-medium text-[#1E3A34] border border-[#CBD3CC] rounded">
                    Studio Photo Slot · 1200 x 900 px (4:3)
                  </span>
                  <p className="text-xs font-semibold text-[#1E3A34] mt-2">
                    hero-studio-grooming.jpg
                  </p>
                  <p className="text-[11px] text-[#57635E] mt-0.5 max-w-[260px]">
                    Awaiting client photograph of the Gurugram grooming room and bathing station.
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-[#57635E] pt-2 px-1">
                  <span>📍 Sector 54, Golf Course Rd</span>
                  <span className="font-semibold text-[#1E3A34]">Tue – Sun: 10AM – 7:30PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Overview Section (Alternating Soft Surface Background) */}
      <section className="bg-[#F2F4F0] border-b border-[#E2E6E2] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Our Grooming Suites
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-4">
              Tailored grooming for both dogs and cats.
            </h2>
            <p className="body-large text-[#57635E]">
              We operate distinct grooming protocols tailored to canine energy and feline sensitivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {/* Dog Grooming Card */}
            <div className="bg-white border border-[#CBD3CC] rounded-2xl p-8 flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)] hover:border-[#1E3A34] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A34] bg-[#EAF1ED] px-3 py-1 rounded-full">
                    Canine Care
                  </span>
                  <span className="text-xs font-medium text-[#57635E]">3 Packages</span>
                </div>
                <h3 className="heading-h3 text-[#1E3A34] mb-3">
                  Dog Grooming & Breed Styling
                </h3>
                <p className="text-sm text-[#57635E] leading-relaxed mb-6">
                  From hydro-baths for muddy Indie pups to show-standard scissor cuts for Shih Tzus and Golden Retrievers. Warm baths, gentle nail grinding, and veterinary tick care.
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-[#1A201E] mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1E3A34] font-bold">✓</span> Basic Bath & Hygiene Care
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1E3A34] font-bold">✓</span> Full Breed Styling & Haircuts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1E3A34] font-bold">✓</span> Medicated Tick & Flea Baths
                  </li>
                </ul>
              </div>

              <Link
                href="/dog-grooming"
                className="w-full min-h-[48px] flex items-center justify-center px-4 py-3 bg-[#1E3A34] text-white text-sm font-semibold rounded-lg hover:bg-[#142723] transition-colors"
              >
                <span>Explore Dog Grooming Packages →</span>
              </Link>
            </div>

            {/* Cat Grooming Card */}
            <div className="bg-white border border-[#CBD3CC] rounded-2xl p-8 flex flex-col justify-between shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)] hover:border-[#1E3A34] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A34] bg-[#EAF1ED] px-3 py-1 rounded-full">
                    Feline Care
                  </span>
                  <span className="text-xs font-medium text-[#57635E]">Private Quiet Room</span>
                </div>
                <h3 className="heading-h3 text-[#1E3A34] mb-3">
                  Cat Grooming & Undercoat Care
                </h3>
                <p className="text-sm text-[#57635E] leading-relaxed mb-6">
                  Specially designed for feline temperament. Waterless foaming baths or calm hydro-soaks, knot de-matting for Persians, nail tip clips, and safe summer lion trims.
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-[#1A201E] mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#1E3A34] font-bold">✓</span> Quiet Suite with Zero Dogs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1E3A34] font-bold">✓</span> Persian De-Matting & Sanitary Care
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#1E3A34] font-bold">✓</span> Feline Lion Cut & Nail Trimming
                  </li>
                </ul>
              </div>

              <Link
                href="/cat-grooming"
                className="w-full min-h-[48px] flex items-center justify-center px-4 py-3 bg-[#1E3A34] text-white text-sm font-semibold rounded-lg hover:bg-[#142723] transition-colors"
              >
                <span>Explore Cat Grooming Packages →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Real Facts Only - No Invented Claims) */}
      <section className="bg-[#FBFBF9] border-b border-[#E2E6E2] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Our Studio Standards
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-4">
              Why pet owners choose Paws & Claws.
            </h2>
            <p className="body-large text-[#57635E]">
              We built our studio around honest, stress-reducing practices that put animal comfort before speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.valuePoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#CBD3CC] rounded-2xl shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EAF1ED] flex items-center justify-center text-[#1E3A34] font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#1E3A34] mb-2">
                  {point.title}
                </h3>
                <p className="text-xs md:text-sm text-[#57635E] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Google Reviews & Local Presence Band */}
      <section className="bg-[#142723] text-white border-b border-[#1E3A34] py-16">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-[#FEF3C7] font-semibold">
                Google Business Profile
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Verified reviews from Gurugram pet parents.
              </h2>
              <p className="text-sm text-[#CBD3CC] max-w-[55ch]">
                Read genuine customer feedback directly on Google Maps, or view our curated review section before scheduling your visit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/reviews"
                className="min-h-[48px] px-6 py-3 bg-white text-[#1E3A34] font-semibold text-sm rounded-lg hover:bg-[#F2F4F0] transition-colors"
              >
                Read Reviews & Feedback
              </Link>
              <a
                href={siteContent.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 border border-[#CBD3CC] text-white font-semibold text-sm rounded-lg hover:bg-[#1E3A34] transition-colors"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Preview Section */}
      <section className="bg-[#F2F4F0] border-b border-[#E2E6E2] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Common Questions
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-3">
              Helpful answers before your visit.
            </h2>
            <p className="body-large text-[#57635E]">
              Clear information about vaccinations, appointments, and what to expect during grooming.
            </p>
          </div>

          <FaqAccordion items={siteContent.faqs.slice(0, 4)} defaultOpenFirst={true} />

          <div className="text-center mt-8">
            <p className="text-xs text-[#57635E]">
              Have a specific question about your pet breed?{" "}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3A34] font-semibold underline"
              >
                Ask our groomer on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Closing Contact Call-to-Action Band */}
      <section className="bg-[#FBFBF9] section-pad">
        <div className="site-container">
          <div className="bg-[#EAF1ED] border border-[#CBD3CC] rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-[900px] mx-auto shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Book Today in Gurugram
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-4">
              Schedule your pet&apos;s 1-on-1 grooming session.
            </h2>
            <p className="body-large text-[#57635E] max-readable mx-auto mb-8">
              We operate strictly by appointment to ensure zero waiting time and zero stress for your pet. Send us a message on WhatsApp with your pet&apos;s breed and desired service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-8 py-3.5 text-base font-semibold text-white bg-[#1E3A34] hover:bg-[#142723] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
              >
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteContent.business.phoneRaw}`}
                className="min-h-[48px] px-8 py-3.5 text-base font-semibold text-[#1E3A34] bg-white border border-[#CBD3CC] hover:bg-[#F2F4F0] rounded-lg transition-colors flex items-center justify-center w-full sm:w-auto"
              >
                <span>Call Studio: {siteContent.business.phoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                className="min-h-[48px] px-6 py-3.5 text-base font-semibold text-[#57635E] hover:text-[#1E3A34] transition-colors flex items-center justify-center w-full sm:w-auto"
              >
                <span>View Studio Address & Hours →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
