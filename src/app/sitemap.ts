import { MetadataRoute } from "next";
import { siteContent } from "@/data/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteContent.business.domain;
  const lastModified = new Date();

  const routes = [
    "",
    "/dog-grooming",
    "/cat-grooming",
    "/gallery",
    "/reviews",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
