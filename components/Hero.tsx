"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { services, waLink } from "@/data/content";

const pills = services.map((s) => ({ label: s.tag, href: `#${s.id}` }));

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function Hero() {
    const bgRef = useRef<HTMLDivElement>(null);

    // parallax ringan saat scroll
    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handlePillClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        (target as HTMLElement).style.outline = "2px solid #B8942A";
        setTimeout(() => {
            (target as HTMLElement).style.outline = "";
        }, 1800);
    };

    return (
        <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
            <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
                <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
                    alt="Pelabuhan logistik untuk jasa perizinan ekspor impor Jakarta"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080F22]/95 via-[#0D1B3E]/85 to-[#0D1B3E]/50" />
            </div>

            <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full border border-[#B8942A]/8 pointer-events-none" />
            <div className="absolute top-[-80px] right-[-80px] w-[380px] h-[380px] rounded-full border border-[#B8942A]/5 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1160px] mx-auto px-[5%] pt-[120px] pb-[80px] grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16 items-center">
                <div>
                    <motion.div {...fadeUp(0.1)} className="mb-6">
                        <span className="text-[10px] font-semibold tracking-[0.3em] text-white/30 uppercase">
                            PT. ELKIA JAYA TRADING
                        </span>
                    </motion.div>

                    {/* h1 cuma satu di seluruh halaman — ini yang Google baca sebagai judul utama */}
                    <motion.h1
                        {...fadeUp(0.25)}
                        className="font-display text-[clamp(44px,6vw,70px)] font-medium text-white leading-[1.1] mb-5"
                    >
                        Perizinan <em className="italic text-[#D4AF5A]">tepat,</em>
                        <br />
                        bisnis bergerak.
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.4)}
                        className="text-[15px] font-light text-white/60 leading-[1.8] mb-10 max-w-[460px] border-l-2 border-[#B8942A] pl-4"
                    >
                        Mitra Terpercaya dalam Pengurusan Perizinan BPOM, Halal, NIB, PIRT, Izin Edar & HAKI untuk bisnis Anda.
                    </motion.p>

                    <motion.div {...fadeUp(0.55)} className="flex gap-4 flex-wrap items-center">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] px-7 py-[14px] bg-[#B8942A] text-[#0D1B3E] rounded-sm no-underline hover:bg-[#D4AF5A] hover:-translate-y-[1px] transition-all duration-200"
                        >
                            Konsultasi Gratis <ArrowRight size={14} strokeWidth={2.5} />
                        </a>
                        <a
                            href="#layanan"
                            className="inline-flex items-center gap-2 text-[13px] text-white/50 no-underline hover:text-[#D4AF5A] transition-colors duration-200"
                        >
                            Lihat layanan kami <ExternalLink size={12} strokeWidth={1.5} />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="flex flex-col gap-5"
                >
                    <div className="bg-white/5 border border-[#B8942A]/20 rounded-md p-8 text-center backdrop-blur-sm">
                        <div className="font-display text-[clamp(48px,10vw,64px)] font-semibold text-white tracking-[12px] leading-none mb-2">
                            EL<span className="text-[#D4AF5A]">KIA</span>
                        </div>
                        <div className="flex items-center gap-2 my-3">
                            <span className="flex-1 h-px bg-[#B8942A]/30" />
                            <span className="text-[#B8942A] text-[10px]">✦</span>
                            <span className="flex-1 h-px bg-[#B8942A]/30" />
                        </div>
                        <div className="text-[10px] tracking-[0.14em] text-[#D4AF5A] uppercase">
                            Your Trusted Regulatory Partner
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {pills.map((p, i) => (
                            <motion.a
                                key={p.label}
                                href={p.href}
                                onClick={(e) => handlePillClick(e, p.href)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.07 }}
                                className="text-[11px] font-medium tracking-[0.06em] py-2 px-3 text-center bg-white/4 border border-[#B8942A]/18 rounded-sm text-white/70 no-underline hover:bg-[#B8942A]/15 hover:border-[#D4AF5A]/50 hover:text-white transition-all duration-200 cursor-pointer"
                            >
                                {p.label}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-[9px] tracking-[0.2em] text-white/25 uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown size={16} className="text-[#B8942A]/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}