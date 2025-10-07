import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://likeflow.ai/",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily",
      priority: 1,
    }
  ];
}
