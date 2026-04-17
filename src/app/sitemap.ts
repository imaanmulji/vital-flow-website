import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vitalflowpt.com";
  const staticDate = "2026-04-17";

  return [
    {
      url: baseUrl,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insurance`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/medicare`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/telehealth`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Blog Posts
    {
      url: `${baseUrl}/blog/what-causes-vertigo-bppv-treatment`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/pelvic-floor-exercises-after-c-section`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/signs-you-need-vestibular-therapy`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Services
    {
      url: `${baseUrl}/services/pelvic-floor-therapy`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/orthopedic-sports`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/vestibular-rehabilitation`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/pain-management`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Conditions
    {
      url: `${baseUrl}/conditions/vertigo`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/conditions/back-pain`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/conditions/diastasis-recti`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Service Areas
    {
      url: `${baseUrl}/service-areas/warminster`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/doylestown`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/warwick`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas/newtown`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/chalfont`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas/horsham`,
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
