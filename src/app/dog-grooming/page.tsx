import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import PackageCard from "@/components/PackageCard";
import FaqAccordion from "@/components/FaqAccordion";
import { FaqSchema } from "@/components/SchemaOrg";

export const metadata = {
  title: siteContent.meta.dogGrooming.title,
  description: siteContent.meta.dogGrooming.description,
};

export default function DogGroomingPage() {
  const dogFaqs = siteContent.faqs.filter(
    (f) => f.category === "Dogs" || f.category === "Safety & Health" || f.category === "General"
  );

  return (
    <div className="bg-[#FFF8F6] text-[#291817]">
      <FaqSchema faqs={dogFaqs} />

      {/* Header & Breadcrumb Band with Real Photography Showcase */}
      <section className="border-b border-[#F2CECA] bg-white pt-6 pb-12 sm:pb-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Dog Grooming" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54]">
                <span aria-hidden="true">✦</span>
                <span>Canine Grooming Studio · Gurugram</span>
              </span>
              <h1 className="heading-h1">
                Gentle, breed-specific <span className="text-[#DE1B54]">dog grooming</span> in Gurugram.
              </h1>
              <p className="body-large max-readable">
                From everyday warm hydro-baths to specialized breed styling and anti-tick treatments. Every dog receives 1-on-1 care with pet-friendly organic products and zero holding cages.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2 text-xs">
                <span className="px-3.5 py-1.5 bg-[#FFF8F6] text-[#291817] font-bold rounded-full border border-[#F2CECA]">
                  ✓ Zero Holding Cages
                </span>
                <span className="px-3.5 py-1.5 bg-[#FFF8F6] text-[#291817] font-bold rounded-full border border-[#F2CECA]">
                  ✓ Organic Herbal Shampoos
                </span>
                <span className="px-3.5 py-1.5 bg-[#FFF8F6] text-[#291817] font-bold rounded-full border border-[#F2CECA]">
                  ✓ Observation Window
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-[#F2CECA] shadow-[0_12px_36px_rgba(41,24,23,0.08)] bg-[#FCEAE7]">
                <Image
                  src="/images/shih-tzu-cut.jpg"
                  alt="Shih Tzu teddy bear scissor haircut at Paws & Claws Gurugram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#DE1B54] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  📍 Gurugram Canine Suite
                </div>
                <div className="absolute bottom-3 right-3 bg-[#291817]/70 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-0.5 rounded-full">
                  Breed Scissor Cut
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison Grid */}
      <section id="packages" className="section-pad scroll-mt-20">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Transparent Packages</span>
            </span>
            <h2 className="heading-h2">
              Compare our <span className="text-[#DE1B54]">dog grooming packages.</span>
            </h2>
            <p className="body-large mt-3">
              Prices vary strictly by coat length and breed size. Choose the package that matches your dog&apos;s current needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteContent.dogPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section (Uniform Service Structure) */}
      <section className="bg-white border-y border-[#F2CECA] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Our 3-Step Process</span>
            </span>
            <h2 className="heading-h2">
              How dog grooming works at our studio.
            </h2>
            <p className="body-large mt-3">
              We adhere to strict hygiene and gentle pacing so your dog feels secure throughout their stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] shadow-[0_4px_20px_rgba(41,24,23,0.03)]">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white flex items-center justify-center font-bold text-xs mb-4">
                01
              </span>
              <h3 className="text-lg font-extrabold text-[#291817] mb-2">
                Drop-off &amp; Health Check
              </h3>
              <p className="text-sm text-[#806F6C] leading-relaxed">
                We inspect coat condition, skin sensitivity, and check for ticks or ear irritation with you before beginning.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] shadow-[0_4px_20px_rgba(41,24,23,0.03)]">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white flex items-center justify-center font-bold text-xs mb-4">
                02
              </span>
              <h3 className="text-lg font-extrabold text-[#291817] mb-2">
                1-on-1 Gentle Hydro-Bath &amp; Groom
              </h3>
              <p className="text-sm text-[#806F6C] leading-relaxed">
                Warm water hydro-bath, organic shampoo, quiet high-velocity drying, and careful breed scissor work without cage delays.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] shadow-[0_4px_20px_rgba(41,24,23,0.03)]">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white flex items-center justify-center font-bold text-xs mb-4">
                03
              </span>
              <h3 className="text-lg font-extrabold text-[#291817] mb-2">
                Paw Balm &amp; WhatsApp Alert
              </h3>
              <p className="text-sm text-[#806F6C] leading-relaxed">
                Nails clipped, paw pads conditioned, and a WhatsApp message sent to you 15 minutes before the session wraps up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant FAQs for Dogs */}
      <section className="section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Dog Care Inquiries</span>
            </span>
            <h2 className="heading-h2">
              Frequently asked <span className="text-[#DE1B54]">dog care questions.</span>
            </h2>
          </div>

          <FaqAccordion items={dogFaqs} />
        </div>
      </section>

      {/* Related Services & Cross Links */}
      <section className="bg-white border-t border-[#F2CECA] py-16">
        <div className="site-container">
          <div className="p-8 sm:p-10 bg-[#FCEAE7]/60 border border-[#F2CECA] rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#DE1B54] block mb-1">
                Also have a cat?
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#291817]">
                Explore our dedicated quiet Cat Grooming Suite
              </h3>
              <p className="text-xs md:text-sm text-[#806F6C] mt-1.5 max-w-[50ch]">
                Separate quiet room with zero dogs, specialized feline de-matting, and waterless comfort baths.
              </p>
            </div>
            <Link
              href="/cat-grooming"
              className="btn-primary text-sm whitespace-nowrap"
            >
              <span>View Cat Packages →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
