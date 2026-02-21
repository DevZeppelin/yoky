import { site } from "@/lib/site";

export default function sitemap() {
    const now = new Date().toISOString();

    return [
        { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
        { url: `${site.url}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${site.url}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${site.url}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ];
}