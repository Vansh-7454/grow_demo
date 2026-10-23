import Link from "next/link";
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
    <div className="bg-[#FBFBF9]">
      <FaqSchema faqs={dogFaqs} />

      {/* Header & Breadcrumb Band */}
      <section className="border-b border-[#E2E6E2] bg-white pt-6 pb-12">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Dog Grooming" }]} />

          <div className="max-w-[850px] mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Canine Grooming Studio · Gurugram
            </span>
            <h1 className="heading-h1 text-[#1E3A34] mb-4">
              Gentle, breed-specific dog grooming in Gurugram.
            </h1>
            <p className="body-large text-[#57635E] max-readable">
              From everyday warm hydro-baths to specialized breed styling and anti-tick treatments. Every dog receives 1-on-1 care with pet-friendly organic products and zero holding cages.
            </p>
          </div>
        </div>
      </section>

      {/* Package Comparison Grid */}
      <section className="section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A34] block mb-2">
              Transparent Packages
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-3">
              Compare our dog grooming packages.
            </h2>
            <p className="body-large text-[#57635E]">
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
      <section className="bg-[#F2F4F0] border-y border-[#E2E6E2] section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Our 3-Step Process
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-3">
              How dog grooming works at our studio.
            </h2>
            <p className="body-large text-[#57635E]">
              We adhere to strict hygiene and gentle pacing so your dog feels secure throughout their stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
            <div className="p-6 bg-white border border-[#CBD3CC] rounded-2xl">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white flex items-center justify-center font-bold text-xs mb-4">
                1
              </span>
              <h3 className="text-lg font-bold text-[#1E3A34] mb-2">
                Drop-off & Health Check
              </h3>
              <p className="text-sm text-[#57635E] leading-relaxed">
                We inspect coat condition, skin sensitivity, and check for ticks or ear irritation with you before beginning.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#CBD3CC] rounded-2xl">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white flex items-center justify-center font-bold text-xs mb-4">
                2
              </span>
              <h3 className="text-lg font-bold text-[#1E3A34] mb-2">
                1-on-1 Gentle Hydro-Bath & Groom
              </h3>
              <p className="text-sm text-[#57635E] leading-relaxed">
                Warm water hydro-bath, organic shampoo, quiet high-velocity drying, and careful breed scissor work without cage delays.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#CBD3CC] rounded-2xl">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white flex items-center justify-center font-bold text-xs mb-4">
                3
              </span>
              <h3 className="text-lg font-bold text-[#1E3A34] mb-2">
                Paw Balm & WhatsApp Pickup Alert
              </h3>
              <p className="text-sm text-[#57635E] leading-relaxed">
                Nails clipped, paw pads conditioned, and a WhatsApp message sent to you 15 minutes before the session wraps up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant FAQs for Dogs */}
      <section className="section-pad">
        <div className="site-container">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
              Dog Grooming FAQs
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-3">
              Frequently asked dog care questions.
            </h2>
          </div>

          <FaqAccordion items={dogFaqs} />
        </div>
      </section>

      {/* Related Services & Cross Links */}
      <section className="bg-white border-t border-[#E2E6E2] py-16">
        <div className="site-container">
          <div className="p-8 bg-[#FBFBF9] border border-[#CBD3CC] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-1">
                Also have a cat?
              </span>
              <h3 className="text-xl font-bold text-[#1E3A34]">
                Explore our dedicated quiet Cat Grooming Suite
              </h3>
              <p className="text-xs md:text-sm text-[#57635E] mt-1">
                Separate quiet room with zero dogs, specialized feline de-matting, and waterless comfort baths.
              </p>
            </div>
            <Link
              href="/cat-grooming"
              className="min-h-[44px] px-6 py-2.5 bg-[#1E3A34] text-white text-sm font-semibold rounded-lg hover:bg-[#142723] transition-colors whitespace-nowrap"
            >
              View Cat Packages →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
