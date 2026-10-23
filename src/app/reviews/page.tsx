import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export const metadata = {
  title: siteContent.meta.reviews.title,
  description: siteContent.meta.reviews.description,
};

export default function ReviewsPage() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <div className="bg-[#FFF8F6] text-[#291817]">
      {/* Header Band */}
      <section className="bg-white border-b border-[#F2CECA] pt-12 pb-14">
        <div className="site-container text-center max-w-[800px] mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
            <span aria-hidden="true">✦</span>
            <span>Local Reputation &amp; Trust</span>
          </span>
          <h1 className="heading-h1 mb-4">
            Verified feedback from <span className="text-[#DE1B54]">Gurugram pet parents.</span>
          </h1>
          <p className="body-large">
            We build lasting trust through gentle 1-on-1 handling and transparent studio hygiene. Read genuine opinions or leave a review for our grooming team.
          </p>
        </div>
      </section>

      {/* Google Business Profile Rating Banner */}
      <section className="border-b border-[#F2CECA] bg-[#FCEAE7]/50 py-6 sm:py-8">
        <div className="site-container">
          <div className="bg-white border border-[#F2CECA] rounded-[24px] p-5 sm:p-6 max-w-[850px] mx-auto shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#DE1B54] text-white flex flex-col items-center justify-center font-extrabold shrink-0 shadow-xs">
                <span className="text-xl sm:text-2xl leading-none">4.9</span>
                <span className="text-[9px] uppercase tracking-wider mt-0.5 opacity-90">
                  Stars
                </span>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#DE1B54] text-sm">
                  <span>★★★★★</span>
                  <span className="text-xs font-bold text-[#291817] ml-1">
                    Google Maps Rating
                  </span>
                </div>
                <p className="text-xs text-[#806F6C] mt-0.5">
                  Verified 4.9★ rating from pet parents in Gurugram
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto flex justify-center sm:justify-end shrink-0">
              <a
                href={siteContent.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs w-full sm:w-auto text-center inline-flex items-center justify-center gap-1.5 whitespace-nowrap shadow-2xs"
              >
                <span>View Google Maps Listing</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Reviews Grid */}
      <section className="section-pad">
        <div className="site-container">
          <div className="max-w-[700px] mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2">
              <span aria-hidden="true">✦</span>
              <span>Client Experiences</span>
            </span>
            <h2 className="heading-h2 mb-2">
              Recent stories from pet parents.
            </h2>
            <p className="body-large">
              Read how our 1-on-1 gentle handling and quiet suites create a calm, stress-free grooming visit for every dog and cat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {siteContent.reviewPlaceholders.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-[#F2CECA] rounded-[24px] p-6 sm:p-7 shadow-[0_6px_24px_rgba(41,24,23,0.04)] hover:border-[#DE1B54] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#DE1B54] text-xs">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#806F6C]">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#291817] italic leading-relaxed mb-6">
                    &ldquo;{rev.reviewText}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2CECA]/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#291817] block">
                      {rev.authorName}
                    </span>
                    <span className="text-[11px] text-[#806F6C]">
                      {rev.petDetails} · {rev.authorLocation}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#DE1B54] font-bold bg-[#FCEAE7] px-2.5 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide on How to Leave a Google Review */}
      <section className="bg-white border-t border-[#F2CECA] section-pad">
        <div className="site-container max-w-[850px] mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2">
              <span aria-hidden="true">✦</span>
              <span>Pet Parent Community</span>
            </span>
            <h2 className="heading-h2 mb-2">
              How to share your experience.
            </h2>
            <p className="body-large">
              Your reviews help other Gurugram pet owners find a calm, gentle grooming studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] text-center">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white inline-flex items-center justify-center font-bold text-xs mb-3">
                01
              </span>
              <h3 className="font-bold text-base text-[#291817] mb-1">
                Complete Grooming
              </h3>
              <p className="text-xs text-[#806F6C]">
                Pick up your clean, happy pet from our Gurugram studio.
              </p>
            </div>

            <div className="p-6 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] text-center">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white inline-flex items-center justify-center font-bold text-xs mb-3">
                02
              </span>
              <h3 className="font-bold text-base text-[#291817] mb-1">
                Open Review Link
              </h3>
              <p className="text-xs text-[#806F6C]">
                Tap the link below or scan the QR code at our front reception.
              </p>
            </div>

            <div className="p-6 bg-[#FFF8F6] border border-[#F2CECA] rounded-[24px] text-center">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#DE1B54] text-[#DE1B54] bg-white inline-flex items-center justify-center font-bold text-xs mb-3">
                03
              </span>
              <h3 className="font-bold text-base text-[#291817] mb-1">
                Rate &amp; Mention Breed
              </h3>
              <p className="text-xs text-[#806F6C]">
                Mention your pet&apos;s breed and how they felt during the groom.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={siteContent.business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap shadow-2xs"
            >
              <span>View on Google Maps →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#FFF8F6] border-t border-[#F2CECA] py-16 text-center">
        <div className="site-container">
          <h3 className="heading-h2 mb-2">
            Ready to give your dog or cat a <span className="text-[#DE1B54]">calm grooming experience?</span>
          </h3>
          <p className="body-large mb-6 max-readable mx-auto">
            Appointments booked exclusively on WhatsApp for zero waiting time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm w-full sm:w-auto"
            >
              <span>Chat on WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/contact"
              className="btn-secondary text-sm w-full sm:w-auto"
            >
              <span>View Contact &amp; Directions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
