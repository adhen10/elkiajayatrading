import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

// wajib untuk output: "export"
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        // nanti tambahkan halaman layanan: `${siteConfig.url}/layanan/izin-bpom/`
    ];
}