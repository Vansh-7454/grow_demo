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
    <div className="bg-[#FBFBF9]">
      <FaqSchema faqs={catFaqs} />

      {/* Header & Breadcrumb Band with Real Photography Showcase */}
      <section className="border-b border-[#E2E6E2] bg-white pt-6 pb-12">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Cat Grooming" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
                Quiet Feline Suite · Gurugram
              </span>
              <h1 className="heading-h1 text-[#1E3A34] mb-4">
                Calm, stress-free cat grooming in Gurugram.
              </h1>
              <p className="body-large text-[#57635E] max-readable mb-6">
                Cats require specialized gentle handling and silence. Our dedicated feline suite operates completely separated from canine areas, offering organic dry baths, Persian de-matting, and cool-blade lion trims.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 bg-[#EAF1ED] text-[#1E3A34] font-semibold rounded-lg border border-[#CBD3CC]">
                  ✓ Private Room · Zero Dogs
                </span>
                <span className="px-3 py-1.5 bg-[#EAF1ED] text-[#1E3A34] font-semibold rounded-lg border border-[#CBD3CC]">
                  ✓ Waterless Foam Bath Option
                </span>
                <span className="px-3 py-1.5 bg-[#EAF1ED] text-[#1E3A34] font-semibold rounded-lg border border-[#CBD3CC]">
                  ✓ Low-Noise Towel Drying Only
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#CBD3CC] shadow-md bg-[#EAF1ED]">
                <Image
                  src="/images/cat-grooming-hero.jpg"
                  alt="Gentle Persian cat grooming in private feline suite at Paws & Claws Gurugram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#1E3A34]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                  📍 Private Cat Suite · Gurugram
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  Quiet Room Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison Grid */}
      <section className="section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A34] block mb-2">
              Feline Packages
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-3">
              Compare our cat grooming options.
            </h2>
            <p className="body-large text-[#57635E]">
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
      <section className="bg-[#F2F4F0] border-y border-[#E2E6E2] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Pacing & Patience
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-3">
              How cat grooming works in our quiet room.
            </h2>
            <p className="body-large text-[#57635E]">
              We work at the feline&apos;s natural pace with frequent pauses. We strictly forbid harsh restraints and loud commercial blowers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
            <div className="p-6 bg-white border border-[#CBD3CC] rounded-2xl">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white flex items-center justify-center font-bold text-xs mb-4">
                1
              </span>
              <h3 className="text-lg font-bold text-[#1E3A34] mb-2">
                Quiet Room Acclimatization
              </h3>
              <p className="text-sm text-[#57635E] leading-relaxed">
                Your cat spends 10 quiet minutes in our cat-only suite exploring the room and relaxing without sensory shocks.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#CBD3CC] rounded-2xl">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white flex items-center justify-center font-bold text-xs mb-4">
                2
              </span>
              <h3 className="text-lg font-bold text-[#1E3A34] mb-2">
                Gentle Cleanse & Knot Release
              </h3>
              <p className="text-sm text-[#57635E] leading-relaxed">
                We use organic hypoallergenic dry foam or warm water, towel wrap drying, and careful undercoat raking.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#CBD3CC] rounded-2xl">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white flex items-center justify-center font-bold text-xs mb-4">
                3
              </span>
              <h3 className="text-lg font-bold text-[#1E3A34] mb-2">
                Nail Tip Clip & Quiet Rest
              </h3>
              <p className="text-sm text-[#57635E] leading-relaxed">
                Sharp nail tips are clipped safely, ears are cleaned, and your cat rests in their carrier until you arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant FAQs for Cats */}
      <section className="section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Feline Care Questions
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-3">
              Frequently asked cat grooming questions.
            </h2>
          </div>

          <FaqAccordion items={catFaqs} />
        </div>
      </section>

      {/* Cross-Link to Dog Services */}
      <section className="bg-white border-t border-[#E2E6E2] py-16">
        <div className="site-container">
          <div className="p-8 bg-[#FBFBF9] border border-[#CBD3CC] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-1">
                Also have a canine family member?
              </span>
              <h3 className="text-xl font-bold text-[#1E3A34]">
                Explore our full Dog Grooming & Breed Styling Services
              </h3>
              <p className="text-xs md:text-sm text-[#57635E] mt-1">
                Hydro-baths, full breed scissor haircuts, and medicated anti-tick treatments for all dog sizes.
              </p>
            </div>
            <Link
              href="/dog-grooming"
              className="min-h-[44px] px-6 py-2.5 bg-[#1E3A34] text-white text-sm font-semibold rounded-lg hover:bg-[#142723] transition-colors whitespace-nowrap"
            >
              View Dog Packages →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
