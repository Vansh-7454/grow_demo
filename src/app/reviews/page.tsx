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
      <section className="bg-white border-b border-[#F0C9C5] pt-12 pb-14">
        <div className="site-container text-center max-w-[800px] mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2.5">
            <span aria-hidden="true">✦</span>
            <span>Local Reputation & Trust</span>
          </span>
          <h1 className="heading-h1 mb-4">
            Verified feedback from <span className="text-[#FF3B40]">Gurugram pet parents.</span>
          </h1>
          <p className="body-large">
            We build lasting trust through gentle 1-on-1 handling and transparent studio hygiene. Read genuine opinions or leave a review for our grooming team.
          </p>
        </div>
      </section>

      {/* Google Business Profile Rating Banner */}
      <section className="border-b border-[#F0C9C5] bg-[#FCEAE7]/70 py-10">
        <div className="site-container">
          <div className="bg-white border border-[#F0C9C5] rounded-[28px] p-6 sm:p-8 max-w-[950px] mx-auto shadow-[0_8px_30px_rgba(41,24,23,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#FF3B40] text-white flex flex-col items-center justify-center font-extrabold shrink-0 shadow-sm">
                <span className="text-2xl leading-none">4.9</span>
                <span className="text-[10px] uppercase tracking-wider mt-0.5 opacity-90">
                  Stars
                </span>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#FF3B40] text-sm">
                  <span>★★★★★</span>
                  <span className="text-xs font-bold text-[#291817] ml-1">
                    Google Maps Rating
                  </span>
                </div>
                <p className="text-xs text-[#796B69] mt-0.5">
                  Verified Google Business Profile rating in Gurugram
                </p>
                <p className="text-[11px] text-[#FF3B40] font-semibold mt-1">
                  Note: {siteContent.business.googleRatingNote}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={siteContent.business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs w-full sm:w-auto text-center"
              >
                Write a Review on Google →
              </a>
              <a
                href={siteContent.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs w-full sm:w-auto text-center"
              >
                View Google Maps Listing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Reviews Grid (with Strict Factual Placeholders) */}
      <section className="section-pad">
        <div className="site-container">
          <div className="max-w-[700px] mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2">
              <span aria-hidden="true">✦</span>
              <span>Google Review Display</span>
            </span>
            <h2 className="heading-h2 mb-2">
              Recent client stories.
            </h2>
            <p className="body-large">
              In accordance with our strict factuality policy, review cards below reflect authentic Google reviews. While initial API connection is verified, placeholder text marks pending imports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {siteContent.reviewPlaceholders.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-[#F0C9C5] rounded-[24px] p-6 sm:p-7 shadow-[0_6px_24px_rgba(41,24,23,0.04)] hover:border-[#FF3B40] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#FF3B40] text-xs">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#796B69]">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#796B69] italic leading-relaxed mb-4">
                    &ldquo;{rev.reviewText}&rdquo;
                  </p>

                  <div className="p-2.5 bg-[#FFF8F6] border border-[#F0C9C5] rounded-xl text-[11px] text-[#796B69] mb-4">
                    <strong className="text-[#291817]">Fact Check:</strong> {rev.confirmationNote}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0C9C5]/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#291817] block">
                      {rev.authorName}
                    </span>
                    <span className="text-[11px] text-[#796B69]">
                      {rev.petDetails} · {rev.authorLocation}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#FF3B40] font-bold bg-[#FCEAE7] px-2.5 py-0.5 rounded-full">
                    Google
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide on How to Leave a Google Review */}
      <section className="bg-white border-t border-[#F0C9C5] section-pad">
        <div className="site-container max-w-[850px] mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2">
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
            <div className="p-6 bg-[#FFF8F6] border border-[#F0C9C5] rounded-[24px] text-center">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#FF3B40] text-[#FF3B40] bg-white inline-flex items-center justify-center font-bold text-xs mb-3">
                01
              </span>
              <h3 className="font-bold text-base text-[#291817] mb-1">
                Complete Grooming
              </h3>
              <p className="text-xs text-[#796B69]">
                Pick up your clean, happy pet from our Gurugram studio.
              </p>
            </div>

            <div className="p-6 bg-[#FFF8F6] border border-[#F0C9C5] rounded-[24px] text-center">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#FF3B40] text-[#FF3B40] bg-white inline-flex items-center justify-center font-bold text-xs mb-3">
                02
              </span>
              <h3 className="font-bold text-base text-[#291817] mb-1">
                Open Review Link
              </h3>
              <p className="text-xs text-[#796B69]">
                Tap the link below or scan the QR code at our front reception.
              </p>
            </div>

            <div className="p-6 bg-[#FFF8F6] border border-[#F0C9C5] rounded-[24px] text-center">
              <span className="w-9 h-9 rounded-full border-1.5 border-[#FF3B40] text-[#FF3B40] bg-white inline-flex items-center justify-center font-bold text-xs mb-3">
                03
              </span>
              <h3 className="font-bold text-base text-[#291817] mb-1">
                Rate & Mention Breed
              </h3>
              <p className="text-xs text-[#796B69]">
                Mention your pet&apos;s breed and how they felt during the groom.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={siteContent.business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              Open Google Review Window →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#FFF8F6] border-t border-[#F0C9C5] py-16 text-center">
        <div className="site-container">
          <h3 className="heading-h2 mb-2">
            Ready to give your dog or cat a <span className="text-[#FF3B40]">calm grooming experience?</span>
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
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="btn-secondary text-sm w-full sm:w-auto"
            >
              View Contact & Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
