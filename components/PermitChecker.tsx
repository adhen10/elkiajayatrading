"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { permitOptions, siteConfig } from "@/data/content";
import { useReveal } from "@/hooks/useReveal";

// Alat bantu sederhana, berjalan 100% di browser (tanpa server/database).
// Hasilnya hanya panduan awal; kepastian izin tetap lewat konsultasi.
export default function PermitChecker() {
    const head = useReveal();
    const [selected, setSelected] = useState<string | null>(null);
    const current = permitOptions.find((o) => o.id === selected);

    const message = current
        ? `Halo Elkia, usaha saya: ${current.label}. Saya ingin konsultasi soal izin yang perlu diurus (${current.permits.join(", ")}).`
        : "";
    const href = `https://wa.me/${siteConfig.phoneWA}?text=${encodeURIComponent(message)}`;

    return (
        <section id="cek-izin" className="py-24 px-[5%] bg-[#F8F7F4]">
            <div className="max-w-[1160px] mx-auto">
                <div
                    ref={head.ref}
                    className={`mb-10 transition-all duration-700 ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#8A6D1A] uppercase mb-3">
                        <span className="block w-5 h-px bg-[#B8942A]" />
                        Cek Kebutuhan Izin
                    </div>
                    <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-medium text-[#0D1B3E] leading-[1.15] mb-4">
                        Usaha Anda butuh izin apa?
                    </h2>
                    <p className="text-[15px] font-light text-[#6B6B6B] leading-[1.75] max-w-[560px]">
                        Pilih jenis usaha atau produk Anda untuk melihat gambaran izin yang umumnya diperlukan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 items-start">
                    <div role="radiogroup" aria-label="Jenis usaha atau produk" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {permitOptions.map((o) => {
                            const on = o.id === selected;
                            return (
                                <button
                                    key={o.id}
                                    type="button"
                                    role="radio"
                                    aria-checked={on}
                                    onClick={() => setSelected(o.id)}
                                    className={`text-left px-5 py-4 rounded-sm border text-[14px] font-medium cursor-pointer transition-all duration-200 ${on
                                        ? "bg-[#0D1B3E] text-white border-[#0D1B3E]"
                                        : "bg-white text-[#0D1B3E] border-[#ECECEC] hover:border-[#B8942A]"
                                        }`}
                                >
                                    {o.label}
                                </button>
                            );
                        })}
                    </div>

                    <div aria-live="polite" className="bg-[#0D1B3E] rounded-sm p-8 min-h-[260px]">
                        {current ? (
                            <>
                                <div className="text-[11px] font-medium tracking-[0.18em] text-[#D4AF5A] uppercase mb-4">
                                    Umumnya diperlukan
                                </div>
                                <ul className="list-none p-0 m-0 flex flex-col gap-3 mb-6">
                                    {current.permits.map((p) => (
                                        <li key={p} className="flex items-start gap-3 text-[15px] text-white">
                                            <Check size={18} strokeWidth={2.2} className="text-[#D4AF5A] mt-[2px] shrink-0" aria-hidden="true" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[12.5px] text-white/65 leading-[1.7] mb-6">
                                    Ini panduan awal. Kebutuhan pasti bergantung pada detail produk dan bidang usaha Anda, kami pastikan saat konsultasi.
                                </p>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] px-7 py-[14px] bg-[#B8942A] text-[#0D1B3E] rounded-sm no-underline hover:bg-[#D4AF5A] transition-colors duration-200"
                                >
                                    Konsultasikan via WhatsApp <ArrowRight size={14} strokeWidth={2.5} />
                                </a>
                            </>
                        ) : (
                            <p className="text-[14px] text-white/70 leading-[1.8] m-0">
                                Pilih salah satu jenis usaha di samping, hasilnya akan muncul di sini.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}