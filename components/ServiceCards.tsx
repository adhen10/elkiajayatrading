"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { services, serviceHref, serviceHighlights, featuredServiceIds } from "@/data/content";
import { useReveal } from "@/hooks/useReveal";

const FIRST = 4; // jumlah kartu yang tampil penuh saat tertutup
const PEEK = 170; // tinggi (px) bagian kartu berikutnya yang "mengintip" dan memudar

// unggulan dulu, sisanya mengikuti urutan asli
const ordered = [
    ...featuredServiceIds.map((id) => services.find((s) => s.id === id)).filter((s): s is (typeof services)[number] => Boolean(s)),
    ...services.filter((s) => !featuredServiceIds.includes(s.id)),
];

export default function ServiceCards() {
    const head = useReveal();
    const sectionRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [collapsedH, setCollapsedH] = useState<number | null>(null);
    const [fullH, setFullH] = useState<number | null>(null);
    const hasMore = ordered.length > FIRST;

    // ukur tinggi sebenarnya; ukur ulang otomatis kalau ukuran berubah (resize, font selesai dimuat)
    useEffect(() => {
        const ul = listRef.current;
        if (!ul) return;
        const measure = () => {
            const firstHidden = ul.children[FIRST] as HTMLElement | undefined;
            setFullH(ul.scrollHeight);
            setCollapsedH(firstHidden ? firstHidden.offsetTop + PEEK : ul.scrollHeight);
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(ul);
        return () => ro.disconnect();
    }, []);

    const toggle = () => {
        const next = !expanded;
        setExpanded(next);
        if (!next) {
            // saat menutup, bawa pengunjung kembali ke judul section agar tidak tersesat
            sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const maxHeight = !hasMore ? undefined : expanded ? fullH ?? undefined : collapsedH ?? undefined;

    return (
        <section ref={sectionRef} id="layanan" className="py-24 px-[5%] scroll-mt-20">
            <div className="max-w-[1160px] mx-auto">
                <div
                    ref={head.ref}
                    className={`mb-14 transition-all duration-700 ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#8A6D1A] uppercase mb-3">
                        <span className="block w-5 h-px bg-[#B8942A]" />
                        Layanan Kami
                    </div>
                    <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-medium text-[#0D1B3E] leading-[1.15] mb-4">
                        Layanan yang kami tawarkan
                    </h2>
                    <p className="text-[15px] font-light text-[#6B6B6B] leading-[1.75] max-w-[560px]">
                        Pilih layanan sesuai kebutuhan Anda. Tidak yakin harus mulai dari mana? Gunakan pengecek izin di bawah.
                    </p>
                </div>

                {/* Pembungkus: tinggi dianimasikan. Isi semua kartu tetap ada di HTML (baik untuk Google). */}
                <div className="relative">
                    <div
                        style={{ maxHeight }}
                        className={`-mx-3 px-3 -mt-2 pt-2 pb-2 overflow-hidden transition-[max-height] duration-[800ms] ease-in-out motion-reduce:transition-none ${hasMore && collapsedH === null ? "max-h-[720px]" : ""
                            }`}
                    >
                        <ul
                            id="daftar-layanan"
                            ref={listRef}
                            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0"
                        >
                            {ordered.map((s, i) => (
                                // inert: kartu yang masih tertutup tidak bisa diklik / di-Tab
                                <li key={s.id} className="flex" inert={i >= FIRST && !expanded}>
                                    <Link
                                        href={serviceHref(s)}
                                        className="group flex flex-col w-full rounded-xl border border-[#E8E0CC] bg-gradient-to-b from-[#F5EDD6] via-[#FBF8F0] to-white p-7 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#B8942A] hover:shadow-[0_14px_34px_rgba(13,27,62,0.12)]"
                                    >
                                        <h3 className="font-display text-[24px] font-semibold text-[#0D1B3E] leading-[1.2] mb-3">
                                            {s.name}
                                        </h3>
                                        <p className="text-[13.5px] text-[#5E5E5E] leading-[1.7] mb-5 line-clamp-3">{s.desc}</p>

                                        <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A6D1A] mb-3">
                                            Termasuk
                                        </div>
                                        <ul className="list-none p-0 m-0 flex flex-col gap-2 flex-1 mb-6">
                                            {(serviceHighlights[s.id] ?? []).map((h) => (
                                                <li key={h} className="flex items-start gap-2 text-[13px] text-[#3F3F3F] leading-[1.5]">
                                                    <Check size={15} strokeWidth={2.4} className="text-[#B8942A] mt-[2px] shrink-0" aria-hidden="true" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>

                                        <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0D1B3E] group-hover:text-[#8A6D1A] transition-colors">
                                            Lihat layanan
                                            <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Lapisan pudar + tombol: hanya saat tertutup, hilang halus saat dibuka */}
                    {hasMore && (
                        <div
                            inert={expanded}
                            style={{ height: PEEK + 10 }}
                            className={`absolute inset-x-0 bottom-0 flex items-end justify-center pb-4 bg-gradient-to-b from-transparent via-white/85 to-white transition-opacity duration-500 motion-reduce:transition-none ${expanded ? "opacity-0 pointer-events-none" : "opacity-100"
                                }`}
                        >
                            <button
                                type="button"
                                onClick={toggle}
                                aria-expanded={expanded}
                                aria-controls="daftar-layanan"
                                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0D1B3E] bg-white border border-[#B8942A] rounded-full px-7 py-3 shadow-[0_8px_24px_rgba(13,27,62,0.15)] cursor-pointer hover:bg-[#B8942A] transition-colors duration-200"
                            >
                                Tampilkan lebih banyak <ChevronDown size={16} aria-hidden="true" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Tombol tutup: muncul di bawah daftar setelah dibuka */}
                {hasMore && (
                    <div
                        inert={!expanded}
                        className={`text-center overflow-hidden transition-all duration-500 motion-reduce:transition-none ${expanded ? "mt-8 max-h-20 opacity-100" : "mt-0 max-h-0 opacity-0"
                            }`}
                    >
                        <button
                            type="button"
                            onClick={toggle}
                            aria-expanded={expanded}
                            aria-controls="daftar-layanan"
                            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0D1B3E] bg-white border border-[#B8942A] rounded-full px-7 py-3 cursor-pointer hover:bg-[#B8942A] transition-colors duration-200"
                        >
                            Tampilkan lebih sedikit <ChevronUp size={16} aria-hidden="true" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}