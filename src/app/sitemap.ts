import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const routes = siteConfig.primaryNav.map((item) => item.href);

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
