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
    <div className="bg-[#FBFBF9]">
      {/* Header Band */}
      <section className="bg-white border-b border-[#E2E6E2] pt-12 pb-14">
        <div className="site-container text-center max-w-[800px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-2">
            Real Grooming Results
          </span>
          <h1 className="heading-h1 text-[#1E3A34] mb-4">
            Our Gurugram pet grooming showcase.
          </h1>
          <p className="body-large text-[#57635E]">
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

      {/* Photo Submission Guide for Client (Per Rule 2: "list exactly which photos to send (shot description and size)") */}
      <section className="bg-[#F2F4F0] border-t border-[#E2E6E2] section-pad">
        <div className="site-container max-w-[950px] mx-auto">
          <div className="bg-white border border-[#CBD3CC] rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_20px_-2px_rgba(30,58,52,0.05)]">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block mb-1">
                Client Content Checklist
              </span>
              <h2 className="heading-h2 text-[#1E3A34] mb-2">
                Photos to submit for your live gallery.
              </h2>
              <p className="text-xs sm:text-sm text-[#57635E] leading-relaxed">
                As per our studio transparency policy, we do not use artificial stock imagery or pretend another groomer&apos;s work is ours. Please provide high-resolution photos of pets groomed at your studio following the checklist below.
              </p>
            </div>

            <div className="overflow-x-auto -mx-1 sm:mx-0">
              <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-[#CBD3CC] bg-[#FBFBF9] text-[#1E3A34]">
                    <th className="py-3 px-3 font-semibold">Slot #</th>
                    <th className="py-3 px-3 font-semibold">Filename</th>
                    <th className="py-3 px-3 font-semibold">Size & Ratio</th>
                    <th className="py-3 px-3 font-semibold">Subject & Shot Guidelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E6E2] text-[#1A201E]">
                  {siteContent.galleryPlaceholders.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-[#FBFBF9]/80">
                      <td className="py-3 px-3 font-mono font-bold text-[#1E3A34]">
                        0{idx + 1}
                      </td>
                      <td className="py-3 px-3 font-mono text-xs text-[#57635E]">
                        {item.filename}
                      </td>
                      <td className="py-3 px-3 font-mono whitespace-nowrap">
                        {item.recommendedSize} (4:3)
                      </td>
                      <td className="py-3 px-3 text-xs text-[#57635E]">
                        <span className="font-semibold text-[#1A201E] block">
                          {item.title}
                        </span>
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E2E6E2] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#57635E]">
                Once photos are ready, drop them directly into your GitHub <code className="bg-[#F2F4F0] px-1 py-0.5 rounded font-mono">/public/gallery/</code> folder or send via WhatsApp.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-2.5 bg-[#1E3A34] text-white text-xs font-semibold rounded-lg hover:bg-[#142723] transition-colors whitespace-nowrap"
              >
                Send Photos on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
