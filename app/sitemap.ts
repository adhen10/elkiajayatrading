import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";
import { serviceDetails } from "@/data/serviceDetails";

// wajib untuk output: "export"
export const dynamic = "force-static";

// Alamat memakai garis miring di akhir (sesuai trailingSlash: true di next.config.ts).
// /review/ sengaja belum dimasukkan selama halamannya noindex.
// Halaman layanan ikut otomatis dari data/serviceDetails.ts.
const paths = [
    "/",
    "/layanan/",
    "/tentang-kami/",
    "/kontak/",
    ...Object.values(serviceDetails).map((d) => `/layanan/${d.slug}/`),
];

export default function sitemap(): MetadataRoute.Sitemap {
    return paths.map((path) => ({ url: `${siteConfig.url}${path}` }));
}