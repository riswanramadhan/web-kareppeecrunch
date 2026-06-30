import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kareppecrunch.dekatlokal.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-06-30T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
