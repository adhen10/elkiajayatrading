"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, services, waLink } from "@/data/content";

// buang garis miring di akhir supaya "/layanan/" dan "/layanan" dianggap sama
const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

// "Beranda" tidak ditampilkan di menu: sudah diwakili logo Elkia (logo = tautan ke "/")
const menu = navLinks.filter((l) => l.href !== "/");

export default function Navbar() {
    const pathname = normalize(usePathname() ?? "/");
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setOpen(false);

    const isActive = (href: string) => {
        const h = normalize(href);
        return pathname === h || pathname.startsWith(h + "/");
    };

    const linkCls = (active: boolean) =>
        `inline-flex items-center gap-1 h-full border-b-2 text-[15px] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-[#D4AF5A] ${active ? "text-[#D4AF5A] border-[#D4AF5A]" : "text-white/85 border-transparent"
        }`;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-[#0D1B3E] border-b border-[#B8942A]/30 transition-shadow duration-300 ${scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,0.35)]" : ""
                }`}
        >
            <nav
                aria-label="Navigasi utama"
                className="max-w-[1280px] mx-auto px-[5%] h-[76px] flex items-center justify-between gap-6"
            >
                <Link
                    href="/"
                    aria-label="Elkia – ke beranda"
                    className="font-display text-[24px] font-semibold text-white tracking-[6px] no-underline shrink-0"
                >
                    EL<span className="text-[#D4AF5A]">KIA</span>
                </Link>

                {/* menu desktop */}
                <ul className="hidden lg:flex items-stretch gap-9 h-full list-none m-0 p-0 ml-auto mr-8">
                    {menu.map((l) => {
                        const active = isActive(l.href);

                        if (l.href === "/layanan/") {
                            return (
                                <li key={l.label} className="relative group h-full flex items-center">
                                    <Link
                                        href={l.href}
                                        aria-current={active ? "page" : undefined}
                                        className={linkCls(active)}
                                    >
                                        {l.label}
                                        <ChevronDown size={14} aria-hidden="true" />
                                    </Link>
                                    {/* dropdown: terbuka saat hover ATAU fokus keyboard */}
                                    <div className="absolute left-0 top-full w-[290px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                                        <ul className="list-none m-0 p-2 bg-[#0D1B3E] border border-[#B8942A]/30 border-t-0 rounded-b-md shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                                            <li>
                                                <Link
                                                    href="/layanan/"
                                                    className="block px-4 py-3 text-[14px] font-semibold text-[#D4AF5A] no-underline rounded hover:bg-white/5"
                                                >
                                                    Semua layanan
                                                </Link>
                                            </li>
                                            {services.map((s) => (
                                                <li key={s.id}>
                                                    <Link
                                                        href={`/layanan/#${s.id}`}
                                                        className="block px-4 py-3 text-[14px] text-white/80 no-underline rounded hover:bg-white/5 hover:text-[#D4AF5A]"
                                                    >
                                                        {s.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            );
                        }

                        return (
                            <li key={l.label} className="h-full flex items-center">
                                <Link
                                    href={l.href}
                                    aria-current={active ? "page" : undefined}
                                    className={linkCls(active)}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex items-center gap-1.5 text-[14px] font-semibold px-6 py-[11px] bg-[#B8942A] text-[#0D1B3E] rounded-sm no-underline hover:bg-[#D4AF5A] transition-colors duration-200 tracking-[0.03em] shrink-0"
                >
                    Konsultasi Gratis <ChevronRight size={14} strokeWidth={2.5} />
                </a>

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer text-white p-2 -mr-2"
                    aria-label={open ? "Tutup menu" : "Buka menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? <X size={26} strokeWidth={1.6} /> : <Menu size={26} strokeWidth={1.6} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="lg:hidden bg-[#0D1B3E] border-t border-white/10 max-h-[calc(100vh-76px)] overflow-y-auto"
                    >
                        {menu.map((l) => {
                            const active = isActive(l.href);
                            return (
                                <Link
                                    key={l.label}
                                    href={l.href}
                                    onClick={closeMenu}
                                    aria-current={active ? "page" : undefined}
                                    className={`flex items-center justify-between px-[5%] py-4 text-[16px] font-medium no-underline border-b border-white/5 hover:text-[#D4AF5A] hover:bg-white/5 transition-colors ${active ? "text-[#D4AF5A]" : "text-white/85"
                                        }`}
                                >
                                    {l.label}
                                    <ChevronRight size={16} className="text-white/30" aria-hidden="true" />
                                </Link>
                            );
                        })}
                        <div className="px-[5%] py-5">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="flex items-center justify-center gap-2 text-[15px] font-semibold px-6 py-3.5 bg-[#B8942A] text-[#0D1B3E] rounded-sm no-underline hover:bg-[#D4AF5A] transition-colors"
                            >
                                Konsultasi Gratis <ChevronRight size={16} strokeWidth={2.5} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}