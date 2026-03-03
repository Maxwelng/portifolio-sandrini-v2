import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sandrinimaciel.design";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projetos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}