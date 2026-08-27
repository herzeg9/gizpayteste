import type { MetadataRoute } from "next";
import { negocio } from "@/data/negocio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: negocio.baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
