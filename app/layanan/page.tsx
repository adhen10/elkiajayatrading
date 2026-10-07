import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Layanan Perizinan BPOM, Halal, Import & Custom Clearance",
    description:
        "Layanan konsultan perizinan PT. Elkia Jaya Trading: BPOM, sertifikasi Halal, Persetujuan Import, Custom Clearance, NIB & OSS, PIRT, izin edar, dan HAKI untuk pelaku usaha di Jakarta, Bekasi, Tangerang, Depok & Bogor.",
    path: "/layanan/",
});

export default function LayananPage() {
    return (
        <>
            <PageHeader
                eyebrow="Layanan"
                title="Layanan Perizinan untuk Bisnis Anda"
                intro="Dari legalitas usaha sampai izin edar produk dan perlindungan merek, semua ditangani dalam satu koordinasi."
                crumbs={[{ label: "Beranda", href: "/" }, { label: "Layanan" }]}
            />
            <Services />
            <Process />
            <CTA />
        </>
    );
}