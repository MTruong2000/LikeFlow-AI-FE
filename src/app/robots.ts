import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/favicon.ico", "/favicon*", "/static/"]
    },
    sitemap: "https://likeflow.ai/sitemap.xml",
  };
}
