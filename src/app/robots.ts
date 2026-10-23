import { MetadataRoute } from "next";
import { siteContent } from "@/data/siteContent";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteContent.business.domain}/sitemap.xml`,
  };
}
