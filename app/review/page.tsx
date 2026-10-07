import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";
import { pageMetadata } from "@/lib/seo";

// noindex selama testimoni belum dipastikan asli dan seizin orangnya.
// Setelah dikonfirmasi client: hapus `noindex: true` dan tambahkan "/review/" di app/sitemap.ts.
export const metadata = pageMetadata({
    title: "Review & Testimoni Klien",
    description:
        "Pengalaman pelaku usaha yang menggunakan jasa perizinan PT. Elkia Jaya Trading untuk BPOM, Halal, Custom Clearance, Persetujuan Import, NIB, izin edar, dan HAKI.",
    path: "/review/",
    noindex: true,
});

export default function ReviewPage() {
    return (
        <>
            <PageHeader
                eyebrow="Review"
                title="Pengalaman Klien Kami"
                intro="Cerita pelaku usaha yang sudah kami dampingi dalam mengurus perizinan."
                crumbs={[{ label: "Beranda", href: "/" }, { label: "Review" }]}
            />
            <Testimonials />
            <CTA />
        </>
    );
}