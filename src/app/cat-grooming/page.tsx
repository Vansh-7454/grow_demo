import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import PackageCard from "@/components/PackageCard";
import FaqAccordion from "@/components/FaqAccordion";
import { FaqSchema } from "@/components/SchemaOrg";

export const metadata = {
  title: siteContent.meta.catGrooming.title,
  description: siteContent.meta.catGrooming.description,
};

export default function CatGroomingPage() {
  const catFaqs = siteContent.faqs.filter(
    (f) => f.category === "Cats" || f.category === "Safety & Health" || f.category === "General"
  );

  return (
    <div className="bg-[#FFF8F6] text-[#291817]">
      <FaqSchema faqs={catFaqs} />

      {/* Header & Breadcrumb Band with Real Photography Showcase */}
      <section className="border-b border-[#F2CECA] bg-white pt-6 pb-12 sm:pb-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Cat Grooming" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54]">
                <span aria-hidden="true">✦</span>
                <span>Quiet Feline Suite · Gurugram</span>
              </span>
              <h1 className="heading-h1">
                Calm, stress-free <span className="text-[#DE1B54]">cat grooming</span> in Gurugram.
              </h1>
              <p className="body-large max-readable">
                Cats require specialized gentle handling and silence. Our dedicated feline suite operates completely separated from canine areas, offering organic dry baths, Persian de-matting, and cool-blade lion trims.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2 text-xs">
                <span className="px-3.5 py-1.5 bg-[#FFF8F6] text-[#291817] font-bold rounded-full border border-[#F2CECA]">
                  ✓ Private Room · Zero Dogs
                </span>
                <span className="px-3.5 py-1.5 bg-[#FFF8F6] text-[#291817] font-bold rounded-full border border-[#F2CECA]">
                  ✓ Waterless Foam Option
                </span>
                <span className="px-3.5 py-1.5 bg-[#FFF8F6] text-[#291817] font-bold rounded-full border border-[#F2CECA]">
                  ✓ Low-Noise Towel Drying Only
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-[#F2CECA] shadow-[0_12px_36px_rgba(41,24,23,0.08)] bg-[#FCEAE7]">
                <Image
                  src="/images/cat-grooming-hero.jpg"
                  alt="Gentle Persian cat grooming in private feline suite at Paws & Claws Gurugram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#DE1B54] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  📍 Private Cat Suite · Gurugram
                </div>
                <div className="absolute bottom-3 right-3 bg-[#291817]/70 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-0.5 rounded-full">
                  Quiet Room Care
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
              <span>Feline Packages</span>
            </span>
            <h2 className="heading-h2">
              Compare our <span className="text-[#DE1B54]">cat grooming options.</span>
            </h2>
            <p className="body-large mt-3">
              From low-stress routine baths to intensive long-coat knot removal for Persian and Himalayan cats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteContent.catPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section (Consistent 3-Step Structure) */}
      <section className="bg-white border-y border-[#F2CECA] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Pacing &amp; Patience</span>
            </span>
            <h2 className="heading-h2">
              How cat grooming works in our quiet room.
            </h2>
            <p className="body-large mt-3">
              We work at the feline&apos;s natural pace with frequent pauses. We strictly forbid harsh restraints and loud commercial blowers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] shadow-[0_4px_20px_rgba(41,24,23,0.03)]">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white flex items-center justify-center font-bold text-xs mb-4">
                01
              </span>
              <h3 className="text-lg font-extrabold text-[#291817] mb-2">
                Quiet Room Acclimatization
              </h3>
              <p className="text-sm text-[#806F6C] leading-relaxed">
                Your cat spends 10 quiet minutes in our cat-only suite exploring the room and relaxing without sensory shocks.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] shadow-[0_4px_20px_rgba(41,24,23,0.03)]">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white flex items-center justify-center font-bold text-xs mb-4">
                02
              </span>
              <h3 className="text-lg font-extrabold text-[#291817] mb-2">
                Gentle Cleanse &amp; Knot Release
              </h3>
              <p className="text-sm text-[#806F6C] leading-relaxed">
                We use organic hypoallergenic dry foam or warm water, towel wrap drying, and careful undercoat raking.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] shadow-[0_4px_20px_rgba(41,24,23,0.03)]">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white flex items-center justify-center font-bold text-xs mb-4">
                03
              </span>
              <h3 className="text-lg font-extrabold text-[#291817] mb-2">
                Nail Tip Clip &amp; Quiet Rest
              </h3>
              <p className="text-sm text-[#806F6C] leading-relaxed">
                Sharp nail tips are clipped safely, ears are cleaned, and your cat rests in their carrier until you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant FAQs for Cats */}
      <section className="section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
              <span aria-hidden="true">✦</span>
              <span>Feline Care Inquiries</span>
            </span>
            <h2 className="heading-h2">
              Frequently asked <span className="text-[#DE1B54]">cat care questions.</span>
            </h2>
          </div>

          <FaqAccordion items={catFaqs} />
        </div>
      </section>

      {/* Cross-Link to Dog Services */}
      <section className="bg-white border-t border-[#F2CECA] py-16">
        <div className="site-container">
          <div className="p-8 sm:p-10 bg-[#FCEAE7]/60 border border-[#F2CECA] rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#DE1B54] block mb-1">
                Also have a canine family member?
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#291817]">
                Explore our full Dog Grooming &amp; Breed Styling Services
              </h3>
              <p className="text-xs md:text-sm text-[#806F6C] mt-1.5 max-w-[50ch]">
                Hydro-baths, full breed scissor haircuts, and medicated anti-tick treatments for all dog sizes.
              </p>
            </div>
            <Link
              href="/dog-grooming"
              className="btn-primary text-sm whitespace-nowrap"
            >
              <span>View Dog Packages →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
