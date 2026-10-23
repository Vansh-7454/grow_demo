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
    <div className="bg-[#FBFBF9]">
      {/* Header Band */}
      <section className="bg-white border-b border-[#E2E6E2] pt-12 pb-14">
        <div className="site-container text-center max-w-[800px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
            Local Reputation & Trust
          </span>
          <h1 className="heading-h1 text-[#1E3A34] mb-4">
            Verified feedback from Gurugram pet parents.
          </h1>
          <p className="body-large text-[#57635E]">
            We build lasting trust through gentle 1-on-1 handling and transparent studio hygiene. Read genuine opinions or leave a review for our grooming team.
          </p>
        </div>
      </section>

      {/* Google Business Profile Rating Banner */}
      <section className="border-b border-[#CBD3CC] bg-[#EAF1ED] py-10">
        <div className="site-container">
          <div className="bg-white border border-[#CBD3CC] rounded-2xl p-6 sm:p-8 max-w-[950px] mx-auto shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-xl bg-[#1E3A34] text-white flex flex-col items-center justify-center font-bold">
                <span className="text-xl leading-none">4.9</span>
                <span className="text-[10px] uppercase text-[#FEF3C7] tracking-wider mt-0.5">
                  Stars
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#D97706] text-sm">
                  <span>★★★★★</span>
                  <span className="text-xs font-semibold text-[#1E3A34] ml-1">
                    Google Maps Rating
                  </span>
                </div>
                <p className="text-xs text-[#57635E] mt-0.5">
                  Verified Google Business Profile rating in Gurugram
                </p>
                <p className="text-[11px] text-[#B45309] font-medium mt-1">
                  Note: {siteContent.business.googleRatingNote}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={siteContent.business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-[#1E3A34] text-white text-xs font-semibold rounded-lg hover:bg-[#142723] transition-colors text-center"
              >
                Write a Review on Google →
              </a>
              <a
                href={siteContent.business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-white border border-[#CBD3CC] text-[#1E3A34] text-xs font-semibold rounded-lg hover:bg-[#F2F4F0] transition-colors text-center"
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
          <div className="max-w-[700px] mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-1">
              Google Review Display
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-2">
              Recent client stories.
            </h2>
            <p className="text-sm text-[#57635E] leading-relaxed">
              In accordance with our strict factuality policy, review cards below reflect authentic Google reviews. While initial API connection is verified, placeholder text marks pending imports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {siteContent.reviewPlaceholders.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-[#CBD3CC] rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#D97706] text-xs">
                      <span>★★★★★</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#57635E]">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs text-[#57635E] italic leading-relaxed mb-4">
                    &ldquo;{rev.reviewText}&rdquo;
                  </p>

                  <div className="p-2.5 bg-[#FEF3C7]/60 border border-[#FEF3C7] rounded-lg text-[11px] text-[#B45309] mb-4">
                    <strong>Fact Check:</strong> {rev.confirmationNote}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E6E2] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#1A201E] block">
                      {rev.authorName}
                    </span>
                    <span className="text-[11px] text-[#57635E]">
                      {rev.petDetails} · {rev.authorLocation}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#1E3A34] font-medium bg-[#EAF1ED] px-2 py-0.5 rounded">
                    Google
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide on How to Leave a Google Review */}
      <section className="bg-[#F2F4F0] border-t border-[#E2E6E2] section-pad">
        <div className="site-container max-w-[850px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-1">
              Pet Parent Community
            </span>
            <h2 className="heading-h2 text-[#1E3A34] mb-2">
              How to share your experience.
            </h2>
            <p className="text-sm text-[#57635E]">
              Your reviews help other Gurugram pet owners find a calm, gentle grooming studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white border border-[#CBD3CC] rounded-xl text-center">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white inline-flex items-center justify-center font-bold text-xs mb-3">
                1
              </span>
              <h3 className="font-bold text-sm text-[#1E3A34] mb-1">
                Complete Grooming
              </h3>
              <p className="text-xs text-[#57635E]">
                Pick up your clean, happy pet from our Gurugram studio.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#CBD3CC] rounded-xl text-center">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white inline-flex items-center justify-center font-bold text-xs mb-3">
                2
              </span>
              <h3 className="font-bold text-sm text-[#1E3A34] mb-1">
                Open Review Link
              </h3>
              <p className="text-xs text-[#57635E]">
                Tap the link below or scan the QR code at our front reception.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#CBD3CC] rounded-xl text-center">
              <span className="w-8 h-8 rounded-full bg-[#1E3A34] text-white inline-flex items-center justify-center font-bold text-xs mb-3">
                3
              </span>
              <h3 className="font-bold text-sm text-[#1E3A34] mb-1">
                Rate & Mention Breed
              </h3>
              <p className="text-xs text-[#57635E]">
                Mention your pet&apos;s breed and how they felt during the groom.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={siteContent.business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-6 py-2.5 bg-[#1E3A34] text-white text-xs font-semibold rounded-lg hover:bg-[#142723] transition-colors"
            >
              Open Google Review Window →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-[#E2E6E2] py-14 text-center">
        <div className="site-container">
          <h3 className="text-xl font-bold text-[#1E3A34] mb-2">
            Ready to give your dog or cat a calm grooming experience?
          </h3>
          <p className="text-xs md:text-sm text-[#57635E] mb-6">
            Appointments booked exclusively on WhatsApp for zero waiting time.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-6 py-2.5 bg-[#1E3A34] text-white text-xs font-semibold rounded-lg hover:bg-[#142723] transition-colors"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="min-h-[44px] px-6 py-2.5 bg-white border border-[#CBD3CC] text-[#1E3A34] text-xs font-semibold rounded-lg hover:bg-[#F2F4F0] transition-colors"
            >
              View Contact & Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
