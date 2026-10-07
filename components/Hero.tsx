"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { waLink, siteConfig } from "@/data/content";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

// Kata emas yang bergantian. Tambah/ubah isi daftar ini kalau ingin kata lain.
const rotating = ["BPOM", "Halal", "Custom Clearance"];

// Emas lebih terang + bayangan gelap berlapis, supaya terbaca di atas foto yang ramai.
// Ubah warna di sini (satu tempat) kalau ingin menyetel lagi.
const goldText =
    "italic text-[#F5D77A] [text-shadow:0_2px_4px_rgba(0,0,0,0.55),0_4px_24px_rgba(0,0,0,0.85)]";

function RotatingWord() {
    const [i, setI] = useState(0);
    const reduce = useReducedMotion();

    useEffect(() => {
        if (reduce) return;
        const t = setInterval(() => setI((n) => (n + 1) % rotating.length), 2800);
        return () => clearInterval(t);
    }, [reduce]);

    // pengunjung memilih reduce motion: tampilkan statis, tanpa gerak
    if (reduce) {
        return <em className={`block ${goldText}`}>BPOM, Halal &amp; Custom Clearance</em>;
    }

    // tinggi tetap + overflow-hidden: kata masuk/keluar seperti terpotong rapi, h1 tidak melompat
    return (
        <span className="block relative overflow-hidden h-[1.3em]">
            <AnimatePresence mode="wait" initial={false}>
                <motion.em
                    key={rotating[i]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className={`block ${goldText}`}
                >
                    {rotating[i]}
                </motion.em>
            </AnimatePresence>
        </span>
    );
}

export default function Hero() {
    const bgRef = useRef<HTMLDivElement>(null);

    // parallax ringan saat scroll (dimatikan kalau pengunjung memilih reduce motion)
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const handleScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
            <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
                {/* Gambar lokal -> public/images/hero.webp.
                    alt kosong karena dekoratif; makna halaman dibawa oleh teks h1. */}
                <Image
                    src="/images/hero.webp"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                {/* Tanpa gradasi: foto terlihat jelas. Lapisan rata 25% ini hanya menjaga teks putih tetap terbaca.
                    Ubah angka /25 (mis. /10 lebih terang, /40 lebih gelap) atau hapus baris ini untuk foto polos. */}
                <div className="absolute inset-0 bg-[#0D1B3E]/25" />
            </div>

            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full border border-[#B8942A]/8 pointer-events-none" />
            <div className="absolute top-[-80px] right-[-80px] w-[380px] h-[380px] rounded-full border border-[#B8942A]/5 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1160px] mx-auto px-[5%] pt-[120px] pb-[80px]">
                <div className="max-w-[820px]">
                    <motion.div {...fadeUp(0.1)} className="mb-6">
                        <span className="text-[11px] font-semibold tracking-[0.3em] text-white uppercase [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]">
                            {siteConfig.name}
                        </span>
                    </motion.div>

                    {/* h1 & paragraf pertama TANPA animasi opacity:
                        ini elemen LCP, harus terlihat begitu HTML tiba (skor kecepatan + SEO). */}
                    <h1 className="font-display text-[clamp(36px,4.8vw,60px)] font-medium text-white leading-[1.12] mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.75)]">
                        {/* Teks lengkap untuk Google & pembaca layar; bagian bergerak di bawah disembunyikan dari keduanya */}
                        <span className="sr-only">Jasa Perizinan BPOM, Halal &amp; Custom Clearance di Indonesia</span>
                        <span aria-hidden="true" className="block">
                            Jasa Perizinan
                            <RotatingWord />
                            di Indonesia
                        </span>
                    </h1>

                    <p className="text-[16px] font-normal text-white leading-[1.8] mb-10 max-w-[560px] border-l-2 border-[#B8942A] pl-4 [text-shadow:0_2px_14px_rgba(0,0,0,0.7)]">
                        Perizinan tepat, bisnis bergerak. Mitra terpercaya dalam pengurusan Izin Edar BPOM, Halal BPJPH, Custom Clearance, Persetujuan Import, PIRT, NIB.
                    </p>

                    <motion.div {...fadeUp(0.3)} className="flex gap-4 flex-wrap items-center">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] px-7 py-[14px] bg-[#B8942A] text-[#0D1B3E] rounded-sm no-underline hover:bg-[#D4AF5A] hover:-translate-y-[1px] transition-all duration-200"
                        >
                            Konsultasi Gratis <ArrowRight size={14} strokeWidth={2.5} />
                        </a>
                        <Link
                            href="/layanan/"
                            className="inline-flex items-center gap-2 text-[14px] font-medium text-white no-underline hover:text-[#D4AF5A] transition-colors duration-200 [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]"
                        >
                            Lihat layanan kami <ExternalLink size={12} strokeWidth={1.5} />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                aria-hidden="true"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-[9px] tracking-[0.2em] text-white/70 uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown size={16} className="text-[#D4AF5A]" />
                </motion.div>
            </motion.div>
        </section>
    );
}