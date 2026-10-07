import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import WhyElkia from "@/components/WhyElkia";
import { siteConfig } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
    title: "Tentang Kami – PT. Elkia Jaya Trading",
    description:
        "PT. Elkia Jaya Trading adalah konsultan perizinan yang mendampingi pelaku usaha di Jakarta, Bogor, Depok, Tangerang & Bekasi mengurus BPOM, Halal, Custom Clearance, Persetujuan Import, NIB, PIRT, izin edar, dan HAKI.",
    path: "/tentang-kami/",
});

export default function TentangKamiPage() {
    return (
        <>
            <PageHeader
                eyebrow="Tentang Kami"
                title={siteConfig.name}
                intro={siteConfig.tagline}
                crumbs={[{ label: "Beranda", href: "/" }, { label: "Tentang Kami" }]}
            />

            <section className="py-20 px-[5%] bg-white">
                <div className="max-w-[760px] mx-auto space-y-5 text-[15px] leading-[1.85] text-[#4A4A4A]">
                    <p>
                        {siteConfig.name} adalah konsultan perizinan yang membantu pelaku usaha memenuhi
                        persyaratan legal untuk menjalankan dan mengembangkan bisnisnya. Kami menangani
                        pengurusan BPOM, sertifikasi Halal, NIB dan izin usaha melalui OSS, izin PIRT,
                        izin edar produk, persetujuan import dan custom clearance, serta pendaftaran HAKI.
                    </p>
                    <p>
                        Kami melayani pelaku usaha di {siteConfig.areaServed}. Kantor kami berada di{" "}
                        {siteConfig.location}.
                    </p>
                    {/* [CLIENT] Tambahkan di sini: tahun berdiri, cerita singkat PT, nilai/komitmen,
              profil tim, dan legalitas yang boleh ditampilkan. Isi hanya yang benar. */}
                </div>
            </section>

            <WhyElkia />
            <Stats />
            <CTA />
        </>
    );
}