"use client";

import { testimonials } from "@/data/content";
import { useEffect, useRef, useState } from "react";
// import { testimonials } from "@/data/Content";

function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return { ref, visible };
}

export default function Testimonials() {
    const head = useReveal();
    const grid = useReveal();

    return (
        <section className="py-24 px-[5%] bg-[#F8F7F4]">
            <div className="max-w-[1160px] mx-auto">
                <div
                    ref={head.ref}
                    className={`mb-14 transition-all duration-700 ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#B8942A] uppercase mb-3">
                        <span className="block w-5 h-px bg-[#B8942A]" />
                        Testimoni
                    </div>
                    <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-medium text-[#0D1B3E] leading-[1.15] mb-4">
                        Dipercaya pelaku usaha
                    </h2>
                    <p className="text-[15px] font-light text-[#6B6B6B] leading-[1.75] max-w-[560px]">
                        Apa kata mereka yang sudah bekerja sama dengan Elkia.
                    </p>
                </div>

                {/* figure/blockquote dipakai karena ini memang kutipan asli pelanggan,
            bukan sekadar teks biasa — secara semantik lebih tepat */}
                <div
                    ref={grid.ref}
                    className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${grid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {testimonials.map((t) => (
                        <figure
                            key={t.id}
                            className="bg-white border border-[#ECECEC] p-8 rounded-sm relative m-0"
                        >
                            <div className="font-display text-[64px] text-[#F5EDD6] absolute top-3 left-6 leading-none select-none">
                                "
                            </div>
                            <blockquote className="text-[14px] text-[#6B6B6B] leading-[1.75] italic mt-5 mb-5 m-0">
                                {t.text}
                            </blockquote>
                            <figcaption>
                                <div className="text-[13px] font-medium text-[#0D1B3E]">{t.author}</div>
                                <div className="text-[12px] text-[#B8942A] mt-1">{t.role}</div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}