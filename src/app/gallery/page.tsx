import { siteContent } from "@/data/siteContent";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: siteContent.meta.gallery.title,
  description: siteContent.meta.gallery.description,
};

export default function GalleryPage() {
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    "Hello Paws & Claws, I want to send photos for the pet grooming website gallery."
  )}`;

  return (
    <div className="bg-[#FFF8F6] text-[#291817]">
      {/* Header Band */}
      <section className="bg-white border-b border-[#F2CECA] pt-12 pb-14">
        <div className="site-container text-center max-w-[800px] mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
            <span aria-hidden="true">✦</span>
            <span>Real Grooming Results</span>
          </span>
          <h1 className="heading-h1 mb-4">
            Our Gurugram <span className="text-[#DE1B54]">pet grooming showcase.</span>
          </h1>
          <p className="body-large">
            We showcase only real pets groomed inside our Gurugram studio. Filter below to explore dog styling and cat grooming sessions.
          </p>
        </div>
      </section>

      {/* Filterable Gallery Grid */}
      <section className="section-pad">
        <div className="site-container">
          <GalleryGrid />
        </div>
      </section>

      {/* Customer Wall of Fame Invitation */}
      <section className="bg-white border-t border-[#F2CECA] section-pad text-center">
        <div className="site-container max-w-[800px] mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DE1B54] mb-2.5">
            <span aria-hidden="true">✦</span>
            <span>Join Our Happy Pet Family</span>
          </span>
          <h2 className="heading-h2 mb-3">
            Want to see your pet featured in our <span className="text-[#DE1B54]">studio gallery?</span>
          </h2>
          <p className="body-large mb-8">
            Every guest at Paws &amp; Claws receives a gentle, cage-free grooming session and a post-groom studio portrait sent straight to your WhatsApp!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Book Your Session on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
