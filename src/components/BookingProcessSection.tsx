import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function BookingProcessSection() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  const featuredPacks = [
    {
      id: "dog-bath",
      title: "Bath & Hygiene Spa",
      targetPet: "Dog Suite",
      petIcon: "🐶",
      badge: "Essential Care",
      price: "From ₹999",
      duration: "45–60 mins",
      image: "/images/indie-dog-bath.jpg",
      alt: "Dog gentle hydro-bath at Paws & Claws Gurugram",
      highlights: [
        "Warm organic hydro-bath",
        "Gentle blow dry & fluff",
        "Nail trim & paw balm",
        "Ear hygiene & sanitary trim",
      ],
      whatsappPrefill:
        "Hello Paws & Claws, I want to book the 'Bath & Hygiene Spa' (From ₹999) for my dog in Gurugram.",
    },
    {
      id: "dog-groom",
      title: "Breed Scissor Styling",
      targetPet: "Dog Suite",
      petIcon: "🐶",
      badge: "Most Popular",
      price: "From ₹1,599",
      duration: "75–90 mins",
      image: "/images/shih-tzu-cut.jpg",
      alt: "Shih Tzu breed scissor cut at Paws & Claws Gurugram",
      highlights: [
        "Custom scissor haircut",
        "Hydro-bath & conditioning",
        "Teddy bear face shaping",
        "Sanitary clearing & nail filing",
      ],
      whatsappPrefill:
        "Hello Paws & Claws, I want to book the 'Breed Scissor Styling' (From ₹1,599) for my dog in Gurugram.",
    },
    {
      id: "cat-bath",
      title: "Feline Comfort Bath",
      targetPet: "Cat Suite",
      petIcon: "🐱",
      badge: "Quiet Suite",
      price: "From ₹1,499",
      duration: "45–60 mins",
      image: "/images/cat-calm-dry-bath.jpg",
      alt: "Cat quiet room soothing bath at Paws & Claws Gurugram",
      highlights: [
        "Waterless or warm hydro-wash",
        "Gentle face & ear cleanse",
        "Feline nail tip clip",
        "Warm towel de-stress wrap",
      ],
      whatsappPrefill:
        "Hello Paws & Claws, I want to book the 'Feline Comfort Bath' (From ₹1,499) for my cat in Gurugram.",
    },
    {
      id: "cat-deshed",
      title: "Persian De-Shedding",
      targetPet: "Cat Suite",
      petIcon: "🐱",
      badge: "Specialized",
      price: "From ₹2,199",
      duration: "60–90 mins",
      image: "/images/cat-grooming-hero.jpg",
      alt: "Persian cat de-matting and styling at Paws & Claws Gurugram",
      highlights: [
        "Deep tangle & mat removal",
        "Undercoat thinning & brush",
        "Summer trim / Lion cut option",
        "Chamomile soothing mist",
      ],
      whatsappPrefill:
        "Hello Paws & Claws, I want to book the 'Persian De-Shedding' (From ₹2,199) for my cat in Gurugram.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Service Pack",
      description:
        "Select your companion's ideal pack—from warm canine hydro-baths to specialized feline de-shedding.",
    },
    {
      number: "02",
      title: "Share Your Pet's Details",
      description:
        "Tell us your pet's breed, coat condition, and skin sensitivities so our groomer prepares the right organic botanicals.",
    },
    {
      number: "03",
      title: "Reserve a 1-on-1 Slot",
      description:
        "Lock in an individual time slot with zero overlapping dogs, zero waiting cages, and prompt WhatsApp pickup alerts.",
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
          {/* Left Column: 4 Premium Service Pack Cards (2x2 Grid) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Soft decorative background ambient aura */}
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-[#FCEAE7] via-[#FFF8F6] to-[#FCEAE7] rounded-[36px] blur-lg -z-10 opacity-70"
                aria-hidden="true"
              />

              {/* 4 Premium Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {featuredPacks.map((pack) => {
                  const packWaUrl = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
                    pack.whatsappPrefill
                  )}`;
                  return (
                    <div
                      key={pack.id}
                      className="bg-white border border-[#F2CECA] rounded-[24px] overflow-hidden p-4 sm:p-4.5 flex flex-col justify-between shadow-[0_8px_24px_rgba(41,24,23,0.04)] hover:border-[#DE1B54] hover:shadow-[0_12px_32px_rgba(41,24,23,0.08)] transition-all duration-300 group"
                    >
                      <div>
                        {/* Photo Banner with Badges */}
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-3 border border-[#F2CECA] bg-[#FCEAE7]">
                          <Image
                            src={pack.image}
                            alt={pack.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 240px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                          {/* Top Badges */}
                          <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#291817] text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-white/60 shadow-xs flex items-center gap-1">
                            <span>{pack.petIcon}</span>
                            <span>{pack.targetPet}</span>
                          </div>

                          <div className="absolute top-2.5 right-2.5 bg-[#DE1B54] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                            {pack.badge}
                          </div>

                          {/* Duration Badge on Photo */}
                          <div className="absolute bottom-2 left-2.5 text-white text-[10px] font-semibold drop-shadow-sm flex items-center gap-1">
                            <span>⏱️</span>
                            <span>{pack.duration}</span>
                          </div>
                        </div>

                        {/* Title & Starting Price */}
                        <div className="flex items-baseline justify-between mb-2">
                          <h3 className="font-extrabold text-[#291817] text-sm tracking-tight group-hover:text-[#DE1B54] transition-colors">
                            {pack.title}
                          </h3>
                          <span className="text-xs font-mono font-black text-[#DE1B54] shrink-0 ml-2">
                            {pack.price}
                          </span>
                        </div>

                        {/* Inclusions List */}
                        <ul className="space-y-1 mb-3.5 text-[11px] text-[#806F6C]">
                          {pack.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="text-[#DE1B54] font-bold text-[10px]">✓</span>
                              <span className="truncate">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <a
                        href={packWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 text-xs font-bold bg-[#FFF8F6] text-[#291817] border border-[#F2CECA] group-hover:bg-[#DE1B54] group-hover:text-white group-hover:border-[#DE1B54] rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-1.5 shadow-2xs min-h-[38px]"
                      >
                        <span>Book on WhatsApp</span>
                        <span aria-hidden="true" className="text-xs">→</span>
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Trust Ribbon */}
              <div className="mt-4 p-3.5 bg-white border border-[#F2CECA] rounded-2xl shadow-xs flex items-center justify-between text-xs">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DE1B54] animate-pulse" aria-hidden="true" />
                  <span className="font-bold text-[#291817]">100% Gentle &amp; Cage-Free Promise</span>
                </span>
                <span className="font-bold text-[#DE1B54]">1-on-1 Sanctuary</span>
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
