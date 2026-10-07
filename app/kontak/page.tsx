import type { ReactNode } from "react";
import { AtSign, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { siteConfig, waLink } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Kontak & Konsultasi Gratis",
    description:
        "Hubungi PT. Elkia Jaya Trading via WhatsApp, telepon, atau email untuk konsultasi perizinan BPOM, Halal, Custom Clearance, Persetujuan Import, NIB, izin edar, dan HAKI.",
    path: "/kontak/",
});

type Item = { icon: ReactNode; label: string; content: ReactNode };

const linkCls = "text-[#0D1B3E] underline decoration-[#B8942A] underline-offset-4 hover:text-[#8A6D1A]";

export default function KontakPage() {
    const items: Item[] = [
        {
            icon: <MessageCircle size={20} aria-hidden="true" />,
            label: "WhatsApp",
            content: (
                <a href={waLink} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    {siteConfig.phone} – chat sekarang
                </a>
            ),
        },
        {
            icon: <Phone size={20} aria-hidden="true" />,
            label: "Telepon",
            content: (
                <a href={`tel:${siteConfig.phoneTel}`} className={linkCls}>
                    {siteConfig.phone}
                </a>
            ),
        },
        {
            icon: <Mail size={20} aria-hidden="true" />,
            label: "Email",
            content: (
                <a href={`mailto:${siteConfig.email}`} className={linkCls}>
                    {siteConfig.email}
                </a>
            ),
        },
        {
            icon: <AtSign size={20} aria-hidden="true" />,
            label: "Instagram",
            content: (
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    {siteConfig.instagram}
                </a>
            ),
        },
        {
            icon: <MapPin size={20} aria-hidden="true" />,
            label: "Alamat",
            content: <address className="not-italic">{siteConfig.address}</address>,
        },
        {
            icon: <MapPin size={20} aria-hidden="true" />,
            label: "Wilayah layanan",
            content: <span>{siteConfig.areaServed}</span>,
        },
    ];

    return (
        <>
            <PageHeader
                eyebrow="Kontak"
                title="Hubungi Kami"
                intro="Ceritakan kebutuhan perizinan Anda. Konsultasi pertama gratis, tanpa komitmen."
                crumbs={[{ label: "Beranda", href: "/" }, { label: "Kontak" }]}
            />

            <section className="py-20 px-[5%] bg-[#F8F7F4]">
                <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((it) => (
                        <div key={it.label} className="bg-white border border-[#ECECEC] rounded-sm p-8">
                            <div className="flex items-center gap-3 mb-3 text-[#8A6D1A]">
                                {it.icon}
                                <h2 className="text-[11px] font-medium tracking-[0.14em] uppercase m-0">{it.label}</h2>
                            </div>
                            <div className="text-[15px] leading-[1.7] text-[#4A4A4A]">{it.content}</div>
                        </div>
                    ))}
                </div>
                {/* [CLIENT] Tambahkan jam layanan bila sudah dikonfirmasi. */}
            </section>

            <CTA />
        </>
    );
}