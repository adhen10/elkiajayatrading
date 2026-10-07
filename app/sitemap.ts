import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export const dynamic = "force-static";

// /review/ belum dimasukkan selama halamannya noindex.
const pages = [
    { path: "/", priority: 1 },
    { path: "/layanan/", priority: 0.9 },
    { path: "/tentang-kami/", priority: 0.7 },
    { path: "/kontak/", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return pages.map((p) => ({
        url: `${siteConfig.url}${p.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: p.priority,
    }));
}