"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<"ssr" | "hidden" | "shown">("ssr");

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        // sudah terlihat di layar: biarkan tampil, tanpa animasi
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

        setState("hidden");
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState("shown");
                    io.disconnect();
                }
            },
            { threshold: 0.12 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: state === "shown" ? `${delay}ms` : undefined }}
            className={`transition-all duration-700 ease-out ${state === "hidden" ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"} ${className}`}
        >
            {children}
        </div>
    );
}