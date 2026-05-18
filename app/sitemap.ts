import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants/site";

/**
 * URLs réellement servies aujourd’hui. Les futures routes services / zones sont listées dans
 * `lib/constants/seo-pages.ts` (`getFutureSeoPaths`) — à fusionner ici lors de la publication.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/politique-de-confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
