"use client";

import { services } from "@/data/content";
import { useEffect, useRef, useState } from "react";

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

export default function Services() {
    const head = useReveal();
    const grid = useReveal();

    return (
        <section id="layanan" className="py-24 px-[5%]">
            <div className="max-w-[1160px] mx-auto">
                <div
                    ref={head.ref}
                    className={`mb-16 transition-all duration-700 ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#B8942A] uppercase mb-3">
                        <span className="block w-5 h-px bg-[#B8942A]" />
                        Layanan Kami
                    </div>
                    <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-medium text-[#0D1B3E] leading-[1.15]">
                        Mitra Terpercaya untuk Seluruh
                        <br />
                        Kebutuhan Regulasi dan Perizinan Anda
                    </h2>
                </div>

                <div
                    ref={grid.ref}
                    className={`flex flex-wrap justify-center gap-px bg-[#ECECEC] border border-[#ECECEC] transition-all duration-700 ${grid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {services.map((s) => (
                        // id di sini yang jadi target scroll dari pill di hero
                        <div
                            key={s.id}
                            id={s.id}
                            className="group bg-white p-9 flex flex-col transition-all duration-300 hover:bg-[#0D1B3E] w-full sm:w-[calc(50%-1px)] lg:w-[calc(33.333%-1px)] scroll-mt-24"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="font-display text-[13px] text-[#B8942A] tracking-[0.08em] shrink-0">
                                    {s.num}
                                </span>
                                <div className="flex-1 h-px bg-[#ECECEC] group-hover:bg-[#B8942A]/25 transition-colors" />
                            </div>

                            <div className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#B8942A] group-hover:text-[#D4AF5A] mb-2 transition-colors">
                                {s.tag}
                            </div>

                            {/* h3 — tiap layanan jadi sub-heading, bagus buat keyword spesifik */}
                            <h3 className="font-display text-[22px] font-medium text-[#0D1B3E] group-hover:text-white mb-3 leading-[1.25] transition-colors">
                                {s.name}
                            </h3>

                            <p className="text-[13px] text-[#6B6B6B] group-hover:text-white/55 leading-[1.75] flex-1 transition-colors">
                                {s.desc}
                            </p>

                            <div className="mt-6 text-[16px] text-[#ECECEC] group-hover:text-[#B8942A] group-hover:translate-x-1 transition-all duration-300">
                                →
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}