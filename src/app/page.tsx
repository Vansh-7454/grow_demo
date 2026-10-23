import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import FaqAccordion from "@/components/FaqAccordion";
import BookingProcessSection from "@/components/BookingProcessSection";
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
    <div className="bg-[#FFF8F6] text-[#291817]">
      <FaqSchema faqs={siteContent.faqs.slice(0, 3)} />

      {/* 1. Hero Section (Inspired by Screenshot 2) */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-28 border-b border-[#F0C9C5]">
        {/* Subtle decorative background stars */}
        <div className="absolute top-12 left-8 text-[#FF3B40] text-lg select-none opacity-40 hidden sm:block" aria-hidden="true">
          ✦
        </div>
        <div className="absolute top-28 right-16 text-[#FF3B40] text-2xl select-none opacity-30 hidden lg:block" aria-hidden="true">
          ✦
        </div>

        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Direct Actions (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Eyebrow badge matching Screenshot 2 */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF3B40]">
                <span className="text-sm" aria-hidden="true">✦</span>
                <span>FOR HAPPY PETS. FOR THEIR PEOPLE.</span>
              </div>

              {/* Large, bold headline */}
              <h1 className="heading-hero">
                Happy Pets. <br />
                Healthy Coats. <br />
                <span className="text-[#FF3B40]">Happier Tails.</span>
              </h1>

              {/* Concise, readable description */}
              <p className="body-large max-readable">
                Dedicated 1-on-1 pet care studio in Gurugram. From soothing hydro-baths to breed styling, we treat every pet with gentle hands, zero cages, and hospital-grade hygiene.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base gap-2.5"
                >
                  <svg
                    width={20}
                    height={20}
                    className="w-5 h-5 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.151-1.27-.468-2.42-1.494-.894-.797-1.498-1.782-1.674-2.083-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.151-.678-1.632-.929-2.235-.245-.588-.493-.508-.678-.518l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.48 1.079 2.91 1.23 3.111.15.201 2.124 3.243 5.146 4.548.719.311 1.28.497 1.718.636.723.23 1.38.197 1.901.12.58-.088 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.431-.075-.126-.276-.201-.577-.352zM12 2C6.486 2 2 6.486 2 12c0 1.954.565 3.78 1.542 5.328L2 22l4.825-1.509A9.948 9.948 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.2c-1.688 0-3.26-.525-4.566-1.42l-.328-.225-3.327 1.04 1.066-3.208-.247-.358A8.17 8.17 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.522 0 8.2 3.679 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
                  </svg>
                  <span>Book a Grooming</span>
                </a>

                <Link
                  href="/dog-grooming"
                  className="btn-secondary text-sm sm:text-base"
                >
                  <span>Explore Dog Packages</span>
                </Link>

                <Link
                  href="/cat-grooming"
                  className="btn-secondary text-sm sm:text-base"
                >
                  <span>Explore Cat Packages</span>
                </Link>
              </div>

              {/* Key Studio Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3.5 bg-white border border-[#F0C9C5] rounded-2xl shadow-2xs">
                  <span className="font-extrabold text-[#291817] text-xs block mb-0.5">
                    Zero Cages
                  </span>
                  <span className="text-[11px] text-[#796B69]">
                    Strict 1-on-1 personalized sessions
                  </span>
                </div>
                <div className="p-3.5 bg-white border border-[#F0C9C5] rounded-2xl shadow-2xs">
                  <span className="font-extrabold text-[#291817] text-xs block mb-0.5">
                    Quiet Cat Suite
                  </span>
                  <span className="text-[11px] text-[#796B69]">
                    Separated feline-only space
                  </span>
                </div>
                <div className="p-3.5 bg-white border border-[#F0C9C5] rounded-2xl shadow-2xs">
                  <span className="font-extrabold text-[#291817] text-xs block mb-0.5">
                    Observation Window
                  </span>
                  <span className="text-[11px] text-[#796B69]">
                    Watch your pet comfortably
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Organic Circle Backdrop & Floating Cards (Col 8-12) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Organic Soft Pink Circular Background Shape */}
              <div
                className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-[#FCEAE7] -z-0"
                aria-hidden="true"
              />

              {/* Main Pet Image Frame */}
              <div className="relative z-10 w-full max-w-[440px] aspect-[4/5] rounded-[36px] overflow-hidden border-2 border-white shadow-[0_20px_50px_rgba(41,24,23,0.12)] bg-[#FCEAE7]">
                <Image
                  src="/images/hero-dog-parent.jpg"
                  alt="Happy pet parent with smiling dog after gentle grooming session at Paws & Claws"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating Decorative Card 1: Top Right (Matches Screenshot 2) */}
              <div className="absolute top-4 right-0 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-[#F0C9C5] rounded-2xl px-4 py-2.5 shadow-[0_10px_25px_rgba(41,24,23,0.08)] flex items-center gap-2">
                <span className="text-xs font-bold text-[#291817]">A little care, a lot of love</span>
                <span className="text-sm text-[#FF3B40]">❤️</span>
              </div>

              {/* Floating Decorative Card 2: Bottom Left */}
              <div className="absolute bottom-4 left-0 sm:-left-4 z-20 bg-white/95 backdrop-blur-md border border-[#F0C9C5] rounded-2xl px-4 py-2.5 shadow-[0_10px_25px_rgba(41,24,23,0.08)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF3B40]" aria-hidden="true" />
                <span className="text-xs font-bold text-[#291817]">1-on-1 Gentle Paws</span>
                <span className="text-sm">🐾</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Section: "Everything Your Pet Needs." */}
      <section className="bg-white border-b border-[#F0C9C5] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Our Grooming Services</span>
            </span>
            <h2 className="heading-h2">
              Everything Your Pet <span className="text-[#FF3B40]">Needs.</span>
            </h2>
            <p className="body-large mt-3">
              We operate distinct grooming protocols tailored to canine energy and feline sensitivity, ensuring calm, soothing visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1: Dog Grooming & Breed Styling */}
            <div className="bg-[#FFF8F6] border border-[#F0C9C5] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(41,24,23,0.04)] hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-6 border border-[#F0C9C5] bg-[#FCEAE7]">
                  <Image
                    src="/images/shih-tzu-cut.jpg"
                    alt="Shih Tzu teddy bear scissor haircut at Paws & Claws Gurugram"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF3B40] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Canine Suite
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B40]">
                    Dog Grooming
                  </span>
                  <span className="text-xs font-bold text-[#796B69]">From ₹999</span>
                </div>

                <h3 className="heading-h3 mb-2.5">
                  Dog Grooming & Breed Styling
                </h3>
                <p className="text-sm text-[#796B69] leading-relaxed mb-6">
                  Warm hydro-baths, breed scissor haircuts for Shih Tzus and Golden Retrievers, gentle nail grinding, and ear hygiene.
                </p>

                <ul className="space-y-2 text-xs md:text-sm text-[#291817] mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Basic Bath & Hygiene Care
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Full Breed Styling & Scissor Cuts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Medicated Tick & Flea Baths
                  </li>
                </ul>
              </div>

              <Link
                href="/dog-grooming"
                className="btn-primary w-full text-sm"
              >
                <span>Explore Dog Packages →</span>
              </Link>
            </div>

            {/* Service Card 2: Cat Grooming & Undercoat Care */}
            <div className="bg-[#FFF8F6] border border-[#F0C9C5] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(41,24,23,0.04)] hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-6 border border-[#F0C9C5] bg-[#FCEAE7]">
                  <Image
                    src="/images/cat-grooming-hero.jpg"
                    alt="Gentle Persian cat grooming in private quiet feline suite at Paws & Claws Gurugram"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF3B40] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Private Cat Room
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B40]">
                    Cat Grooming
                  </span>
                  <span className="text-xs font-bold text-[#796B69]">From ₹1,299</span>
                </div>

                <h3 className="heading-h3 mb-2.5">
                  Cat Grooming & Undercoat Care
                </h3>
                <p className="text-sm text-[#796B69] leading-relaxed mb-6">
                  Specially created for sensitive feline temperament. Waterless foaming baths, Persian de-matting, nail tip clips, and lion cuts.
                </p>

                <ul className="space-y-2 text-xs md:text-sm text-[#291817] mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Quiet Suite with Zero Dogs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Persian De-Matting & Sanitary Care
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Low-Noise Towel Drying Only
                  </li>
                </ul>
              </div>

              <Link
                href="/cat-grooming"
                className="btn-primary w-full text-sm"
              >
                <span>Explore Cat Packages →</span>
              </Link>
            </div>

            {/* Service Card 3: Spa Baths & Hygiene Care */}
            <div className="bg-[#FFF8F6] border border-[#F0C9C5] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(41,24,23,0.04)] hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-6 border border-[#F0C9C5] bg-[#FCEAE7]">
                  <Image
                    src="/images/indie-dog-bath.jpg"
                    alt="Indie rescue dog enjoying a warm soothing hydro-bath at Paws & Claws Gurugram"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF3B40] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    Organic Hydro-Spa
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF3B40]">
                    Hygiene & Bath
                  </span>
                  <span className="text-xs font-bold text-[#796B69]">From ₹799</span>
                </div>

                <h3 className="heading-h3 mb-2.5">
                  Hydro-Bath & Hygiene Spa
                </h3>
                <p className="text-sm text-[#796B69] leading-relaxed mb-6">
                  Deep cleansing wash with hypoallergenic shampoos, paw pad balm, ear flush, and gentle blow-drying for all breeds.
                </p>

                <ul className="space-y-2 text-xs md:text-sm text-[#291817] mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Hypoallergenic Herbal Wash
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Gentle Nail Grinding & Paw Balm
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF3B40] font-bold">✓</span> Ear Cleaning & Sanitary Trim
                  </li>
                </ul>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-sm"
              >
                <span>Book Bath on WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Booking Process Section (Inspired by Screenshot 1) */}
      <BookingProcessSection />

      {/* 4. Editorial About Us Section (Inspired by Screenshot 3) */}
      <section className="bg-[#FFF8F6] border-b border-[#F0C9C5] section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Editorial Story & Values (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40]">
                <span aria-hidden="true">✦</span>
                <span>Our Philosophy</span>
              </span>

              <h2 className="heading-h2">
                Care that feels like <span className="text-[#FF3B40]">home.</span>
              </h2>

              <p className="body-large">
                At Paws & Claws, we believe pet grooming should never be loud, rushed, or intimidating. That is why our Gurugram salon operates strictly on a 1-on-1 appointment model.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#FCEAE7] text-[#FF3B40] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#291817] text-base mb-1">
                      Zero Holding Cages
                    </h4>
                    <p className="text-sm text-[#796B69] leading-relaxed">
                      Your pet never sits alone in a cold holding crate. They are greeted by name, groomed with patience, and ready for pickup the moment they finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#FCEAE7] text-[#FF3B40] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#291817] text-base mb-1">
                      Separate Feline Suite
                    </h4>
                    <p className="text-sm text-[#796B69] leading-relaxed">
                      Cats are frightened by dog barking and heavy vibrations. Our dedicated feline room is sound-isolated, with calm towel wraps and waterless wash options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#FCEAE7] text-[#FF3B40] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#291817] text-base mb-1">
                      Transparent Studio Viewing
                    </h4>
                    <p className="text-sm text-[#796B69] leading-relaxed">
                      Pet parents are always welcome to observe through our glass reception partition to see the patient hands and organic products we use firsthand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-secondary text-sm"
                >
                  <span>Visit Our Gurugram Studio →</span>
                </Link>
              </div>
            </div>

            {/* Right: Editorial Photography Frame (Col 8-12) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-[#F0C9C5] shadow-[0_16px_40px_rgba(41,24,23,0.08)] bg-[#FCEAE7]">
                <Image
                  src="/images/about-pet-story.jpg"
                  alt="Loving pet owner with dog and cat in a calm, caring environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#291817] text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
                  📍 Sector 54, Gurugram
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="bg-white border-b border-[#F0C9C5] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Our Core Standards</span>
            </span>
            <h2 className="heading-h2">
              Why pet parents choose <span className="text-[#FF3B40]">Paws & Claws.</span>
            </h2>
            <p className="body-large mt-3">
              We built our studio around honest, stress-reducing practices that put animal comfort before speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.valuePoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F0C9C5] rounded-[24px] shadow-[0_4px_20px_rgba(41,24,23,0.03)] hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-[#FF3B40] text-[#FF3B40] bg-white flex items-center justify-center font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-extrabold text-[#291817] mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#796B69] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Real Results Gallery Strip */}
      <section className="bg-[#FFF8F6] border-b border-[#F0C9C5] section-pad">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2">
                <span aria-hidden="true">✦</span>
                <span>Authentic Studio Results</span>
              </span>
              <h2 className="heading-h2">
                Real grooming results from our <span className="text-[#FF3B40]">Gurugram salon.</span>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-bold text-[#FF3B40] hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Explore full 6-photo gallery</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo 1: Indie Dog Bath */}
            <div className="border border-[#F0C9C5] rounded-[24px] overflow-hidden bg-white shadow-xs group hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] bg-[#FCEAE7] overflow-hidden border-b border-[#F0C9C5]">
                <Image
                  src="/images/indie-dog-bath.jpg"
                  alt="Indie dog enjoying a warm hydro-bath and de-shedding cleanse in Gurugram"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FF3B40] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  Dog Bath & Hygiene
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-base text-[#291817] mb-1">Indie Dog Gentle Hydro-Bath</h3>
                <p className="text-xs text-[#796B69] leading-relaxed">Deep cleansing wash, de-shedding, and ear hygiene for an Indian native rescue dog.</p>
              </div>
            </div>

            {/* Photo 2: Shih Tzu Scissor Cut */}
            <div className="border border-[#F0C9C5] rounded-[24px] overflow-hidden bg-white shadow-xs group hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] bg-[#FCEAE7] overflow-hidden border-b border-[#F0C9C5]">
                <Image
                  src="/images/shih-tzu-cut.jpg"
                  alt="Shih Tzu puppy with clean teddy bear scissor haircut at Gurugram salon"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FF3B40] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  Breed Scissor Styling
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-base text-[#291817] mb-1">Shih Tzu Teddy Bear Haircut</h3>
                <p className="text-xs text-[#796B69] leading-relaxed">Rounded scissor facial shaping, hygienic sanitary contouring, and paw pad balm.</p>
              </div>
            </div>

            {/* Photo 3: Calm Cat Towel Rest */}
            <div className="border border-[#F0C9C5] rounded-[24px] overflow-hidden bg-white shadow-xs group hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] bg-[#FCEAE7] overflow-hidden border-b border-[#F0C9C5]">
                <Image
                  src="/images/cat-calm-dry-bath.jpg"
                  alt="Domestic cat resting in soft warm towel after quiet grooming in Gurugram"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FF3B40] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  Quiet Cat Suite
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-base text-[#291817] mb-1">Domestic Cat Towel Wrap & Rest</h3>
                <p className="text-xs text-[#796B69] leading-relaxed">Gentle dry foam bath, nail tip clipping, and patient towel-wrap relaxation with zero loud dryers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Google Reviews Band */}
      <section className="bg-white border-b border-[#F0C9C5] py-16">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40]">
                <span>★★★★★</span>
                <span>Google Business Reviews</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#291817]">
                Kind words from Gurugram pet parents.
              </h2>
              <p className="text-sm text-[#796B69] max-w-[55ch]">
                Read genuine customer feedback directly on Google Maps, or explore our verified review page before booking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <Link
                href="/reviews"
                className="btn-primary text-sm"
              >
                Read Reviews & Feedback
              </Link>
              <a
                href={siteContent.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview Section */}
      <section className="bg-[#FFF8F6] border-b border-[#F0C9C5] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Common Inquiries</span>
            </span>
            <h2 className="heading-h2 mb-3">
              Helpful answers before your visit.
            </h2>
            <p className="body-large">
              Clear information about vaccinations, appointments, and what to expect during grooming.
            </p>
          </div>

          <FaqAccordion items={siteContent.faqs.slice(0, 4)} defaultOpenFirst={true} />

          <div className="text-center mt-8">
            <p className="text-xs text-[#796B69]">
              Have a specific question about your pet breed?{" "}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF3B40] font-bold underline"
              >
                Ask our groomer on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 9. Primary Call-to-Action Section: "Ready for a Happier, Healthier Coat?" */}
      <section className="bg-[#FFF8F6] section-pad">
        <div className="site-container">
          <div className="bg-[#FCEAE7] border border-[#F0C9C5] rounded-[36px] p-8 sm:p-12 lg:p-16 text-center max-w-[950px] mx-auto shadow-[0_16px_40px_rgba(255,59,64,0.06)] relative overflow-hidden">
            {/* Decorative background star */}
            <div className="absolute top-6 right-8 text-[#FF3B40] text-xl select-none opacity-40" aria-hidden="true">
              ✦
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-3">
              <span aria-hidden="true">✦</span>
              <span>RESERVE YOUR 1-ON-1 APPOINTMENT</span>
            </span>

            <h2 className="heading-h1 mb-4 text-[#291817]">
              Ready for a Happier, <br className="hidden sm:inline" />
              <span className="text-[#FF3B40]">Healthier Coat?</span>
            </h2>

            <p className="body-large max-readable mx-auto mb-8 sm:mb-10 text-[#796B69]">
              We operate strictly by appointment to ensure zero waiting time and zero stress for your pet. Send us a message on WhatsApp with your pet&apos;s breed and desired service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base gap-2 w-full sm:w-auto"
              >
                <span>Book a Grooming</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={`tel:${siteContent.business.phoneRaw}`}
                className="btn-secondary text-sm sm:text-base w-full sm:w-auto"
              >
                <span>Call Studio: {siteContent.business.phoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-bold text-[#796B69] hover:text-[#FF3B40] transition-colors w-full sm:w-auto"
              >
                <span>Studio Address & Hours →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
