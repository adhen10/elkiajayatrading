import type { Metadata } from "next";
import { siteConfig } from "@/data/content";

const ogImage = {
    url: "/images/og-image.jpg",
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} – Konsultan Perizinan Jabodetabek`,
};

export function pageMetadata({
    title,
    description,
    path,
    noindex = false,
}: {
    title: string;
    description: string;
    path: string; // dengan garis miring di akhir, mis. "/layanan/"
    noindex?: boolean;
}): Metadata {
    const fullTitle = `${title} | Elkia`;
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            locale: "id_ID",
            url: path,
            siteName: siteConfig.name,
            title: fullTitle,
            description,
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [ogImage.url],
        },
        ...(noindex ? { robots: { index: false, follow: true } } : {}),
    };
}