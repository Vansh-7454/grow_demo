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
      <section className="bg-white border-b border-[#F0C9C5] pt-12 pb-14">
        <div className="site-container text-center max-w-[800px] mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-2.5">
            <span aria-hidden="true">✦</span>
            <span>Real Grooming Results</span>
          </span>
          <h1 className="heading-h1 mb-4">
            Our Gurugram <span className="text-[#FF3B40]">pet grooming showcase.</span>
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

      {/* Photo Submission Guide for Client (Per Rule 2: "list exactly which photos to send (shot description and size)") */}
      <section className="bg-[#FFF8F6] border-t border-[#F0C9C5] section-pad">
        <div className="site-container max-w-[950px] mx-auto">
          <div className="bg-white border border-[#F0C9C5] rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(41,24,23,0.04)]">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF3B40] mb-1.5">
                <span aria-hidden="true">✦</span>
                <span>Client Content Checklist</span>
              </span>
              <h2 className="heading-h2 mb-2">
                Photos to submit for your live gallery.
              </h2>
              <p className="text-xs sm:text-sm text-[#796B69] leading-relaxed">
                As per our studio transparency policy, we do not use artificial stock imagery or pretend another groomer&apos;s work is ours. Please provide high-resolution photos of pets groomed at your studio following the checklist below.
              </p>
            </div>

            <div className="overflow-x-auto -mx-1 sm:mx-0">
              <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-[#F0C9C5] bg-[#FFF8F6] text-[#291817]">
                    <th className="py-3.5 px-3.5 font-bold">Slot #</th>
                    <th className="py-3.5 px-3.5 font-bold">Filename</th>
                    <th className="py-3.5 px-3.5 font-bold">Size & Ratio</th>
                    <th className="py-3.5 px-3.5 font-bold">Subject & Shot Guidelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0C9C5]/50 text-[#291817]">
                  {siteContent.galleryPlaceholders.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-[#FFF8F6]/60">
                      <td className="py-3 px-3.5 font-mono font-bold text-[#FF3B40]">
                        0{idx + 1}
                      </td>
                      <td className="py-3 px-3.5 font-mono text-xs text-[#796B69]">
                        {item.filename}
                      </td>
                      <td className="py-3 px-3.5 font-mono whitespace-nowrap text-xs text-[#291817]">
                        {item.recommendedSize} (4:3)
                      </td>
                      <td className="py-3 px-3.5 text-xs text-[#796B69]">
                        <span className="font-bold text-[#291817] block">
                          {item.title}
                        </span>
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-[#F0C9C5]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#796B69]">
                Once photos are ready, drop them directly into your GitHub <code className="bg-[#FFF8F6] border border-[#F0C9C5] px-1.5 py-0.5 rounded font-mono text-[#291817]">/public/gallery/</code> folder or send via WhatsApp.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs whitespace-nowrap"
              >
                <span>Send Photos on WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
