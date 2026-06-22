"use client";

import { processSteps } from "@/data/content";
import { useEffect, useRef, useState } from "react";

function useReveal() {
    const ref = useRef<HTMLElement>(null);
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

export default function Process() {
    const head = useReveal();
    const steps = useReveal();

    return (
        <section id="proses" className="py-24 px-[5%] bg-[#0D1B3E]">
            <div className="max-w-[1160px] mx-auto">
                <div
                    ref={head.ref as React.RefObject<HTMLDivElement>}
                    className={`mb-16 transition-all duration-700 ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#D4AF5A] uppercase mb-3">
                        <span className="block w-5 h-px bg-[#D4AF5A]" />
                        Cara Kerja
                    </div>
                    <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-medium text-white leading-[1.15] mb-4">
                        Dari konsultasi
                        <br />
                        hingga izin terbit
                    </h2>
                    <p className="text-[15px] font-light text-white/55 leading-[1.75] max-w-[560px]">
                        Proses yang jelas dan terstruktur memastikan tidak ada langkah yang terlewat.
                    </p>
                </div>

                {/* ol — secara semantik ini memang urutan langkah, bukan grid biasa.
            Google bisa mengenali ini sebagai step-by-step process. */}
                <ol
                    ref={steps.ref as React.RefObject<HTMLOListElement>}
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0 transition-all duration-700 ${steps.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {processSteps.map((s) => (
                        <li key={s.num} className="p-8 border-t border-[#B8942A]/20">
                            <div className="font-display text-[48px] font-light text-[#B8942A]/20 leading-none mb-4">
                                {s.num}
                            </div>
                            <h3 className="text-[14px] font-medium text-[#D4AF5A] tracking-[0.04em] mb-2">
                                {s.name}
                            </h3>
                            <p className="text-[13px] text-white/50 leading-[1.7]">{s.desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}