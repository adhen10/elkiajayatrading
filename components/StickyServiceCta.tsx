"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyServiceCta({ name, href }: { name: string; href: string }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const update = () => {
            const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 700;
            setShow(window.scrollY > 500 && !nearEnd);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    return (
        <div
            inert={!show}
            className={`fixed z-40 inset-x-0 bottom-0 lg:inset-x-auto lg:left-6 lg:bottom-6 lg:w-[340px] transition-all duration-300 motion-reduce:transition-none ${show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
                }`}
        >
            {/* pr-24 di HP: menyisakan ruang untuk tombol WhatsApp bulat yang sudah ada */}
            <div className="flex items-center justify-between gap-3 bg-[#0D1B3E] border-t border-[#B8942A]/40 lg:border lg:rounded-lg px-5 py-3 pr-24 lg:pr-5 shadow-[0_-8px_28px_rgba(0,0,0,0.25)] lg:shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
                <span className="text-[13px] text-white/85 leading-[1.4]">
                    Butuh bantuan <strong className="font-medium text-[#D4AF5A]">{name}</strong>?
                </span>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 shrink-0 text-[12px] font-semibold px-4 py-2 bg-[#B8942A] text-[#0D1B3E] rounded-sm no-underline hover:bg-[#D4AF5A] transition-colors"
                >
                    Konsultasi <ArrowRight size={13} strokeWidth={2.5} />
                </a>
            </div>
        </div>
    );
}