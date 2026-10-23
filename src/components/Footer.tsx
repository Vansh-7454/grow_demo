import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const currentYear = 2026;
  const whatsappHref = `https://wa.me/${siteContent.business.whatsappRaw}?text=${encodeURIComponent(
    siteContent.business.whatsappPrefill
  )}`;

  return (
    <footer className="bg-[#142723] text-[#F2F4F0] border-t border-[#1E3A34]">
      <div className="site-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Studio Description (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-xs shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="Paws & Claws Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-tight">
                  {siteContent.business.name}
                </span>
                <span className="text-xs text-[#CBD3CC] font-medium">
                  {siteContent.business.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-[#CBD3CC] leading-relaxed max-w-[45ch]">
              {siteContent.business.shortDescription}
            </p>
            <div className="pt-2">
              <a
                href={siteContent.business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FEF3C7] bg-[#1E3A34] px-3 py-2 rounded-lg hover:bg-[#2A524A] transition-colors"
              >
                <span>Google Business Rating: ★ {siteContent.business.googleRating}</span>
                <span className="text-[10px] text-[#CBD3CC]">{siteContent.business.googleRatingNote}</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wide">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center min-h-[44px] text-sm text-[#CBD3CC] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact & Timings (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wide">
              Gurugram Studio & Hours
            </h3>
            <div className="space-y-3 text-sm text-[#CBD3CC]">
              <div>
                <p className="font-medium text-white">Studio Address:</p>
                <p className="leading-snug">{siteContent.business.address}</p>
                <p className="text-xs text-[#E2E6E2]/70 mt-0.5">
                  Note: {siteContent.business.addressPlaceholderNote}
                </p>
                <a
                  href={siteContent.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] text-xs font-semibold text-[#FEF3C7] hover:underline mt-1"
                >
                  Get directions on Google Maps →
                </a>
              </div>

              <div className="pt-2">
                <p className="font-medium text-white">Studio Contact:</p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${siteContent.business.phoneRaw}`}
                    className="hover:text-white underline"
                  >
                    {siteContent.business.phoneDisplay}
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    {siteContent.business.whatsappDisplay}
                  </a>
                </p>
              </div>

              <div className="pt-2">
                <p className="font-medium text-white">Operating Hours:</p>
                {siteContent.business.hours.map((h, i) => (
                  <p key={i} className="text-xs leading-relaxed">
                    <span className="text-white">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Privacy & Transparency */}
        <div className="mt-12 pt-8 border-t border-[#1E3A34] flex flex-col sm:flex-row items-center justify-between text-xs text-[#CBD3CC] gap-4">
          <p>
            © {currentYear} {siteContent.business.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right max-w-md">
            Calm, static website built strictly for verified local presence. No tracking cookies or storage used.
          </p>
        </div>
      </div>
    </footer>
  );
}
