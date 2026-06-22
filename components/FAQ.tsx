"use client";

import { faqs } from "@/data/content";
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

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const head = useReveal();
    const list = useReveal();

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="py-24 px-[5%] bg-[#F8F7F4]">
            <div className="max-w-[1160px] mx-auto">
                <div
                    ref={head.ref}
                    className={`mb-14 transition-all duration-700 ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#B8942A] uppercase mb-3">
                        <span className="block w-5 h-px bg-[#B8942A]" />
                        FAQ
                    </div>
                    <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-medium text-[#0D1B3E] leading-[1.15] mb-4">
                        Pertanyaan yang sering ditanyakan
                    </h2>
                    <p className="text-[15px] font-light text-[#6B6B6B] leading-[1.75] max-w-[560px]">
                        Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung.
                    </p>
                </div>

                <div
                    ref={list.ref}
                    className={`border-t border-[#ECECEC] transition-all duration-700 ${list.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {faqs.map((f, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={f.q} className="border-b border-[#ECECEC]">
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    className="w-full flex justify-between items-center py-[22px] bg-transparent border-none cursor-pointer text-left gap-5 group"
                                >
                                    <span className="font-display text-[16px] md:text-[20px] font-medium text-[#0D1B3E] leading-[1.3] group-hover:text-[#B8942A] transition-colors">
                                        {f.q}
                                    </span>
                                    <span
                                        className={`text-[22px] font-light text-[#B8942A] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-[14px] text-[#6B6B6B] leading-[1.8] max-w-[680px]">{f.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}