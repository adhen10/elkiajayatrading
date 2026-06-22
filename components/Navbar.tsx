"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, waLink } from "@/data/content";
// import { navLinks, waLink, siteConfig } from "@/data/Content";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`w-full max-w-[860px] flex items-center justify-between px-6 h-[52px] rounded-full border transition-all duration-300 ${scrolled
                        ? "bg-[#0D1B3E] border-[#B8942A]/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                        : "bg-[#0D1B3E]/70 border-[#B8942A]/15"
                    } backdrop-blur-md`}
            >
                {/* Logo */}
                <a
                    href="#beranda"
                    className="font-display text-[18px] font-semibold text-white tracking-[5px] no-underline shrink-0"
                >
                    EL<span className="text-[#D4AF5A]">KIA</span>
                </a>

                {/* Links desktop */}
                <ul className="hidden md:flex gap-7 list-none m-0 p-0">
                    {navLinks.map((l) => (
                        <li key={l.label}>
                            <a
                                href={l.href}
                                className="text-[12px] text-white/60 no-underline tracking-[0.04em] hover:text-[#D4AF5A] transition-colors duration-200"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA desktop */}
                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold px-4 py-[7px] bg-[#B8942A] text-[#0D1B3E] rounded-full no-underline hover:bg-[#D4AF5A] transition-colors duration-200 tracking-[0.05em] shrink-0"
                >
                    Konsultasi <ChevronRight size={12} strokeWidth={2.5} />
                </a>

                {/* Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex items-center justify-center bg-transparent border-none cursor-pointer text-white p-1"
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {open ? (
                            <motion.span
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={20} strokeWidth={1.5} />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={20} strokeWidth={1.5} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </motion.nav>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-[64px] left-6 right-6 bg-[#0D1B3E]/98 border border-[#B8942A]/20 rounded-2xl overflow-hidden backdrop-blur-md md:hidden"
                    >
                        {navLinks.map((l, i) => (
                            <motion.a
                                key={l.label}
                                href={l.href}
                                onClick={closeMenu}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-center justify-between px-6 py-4 text-[14px] text-white/70 no-underline border-b border-white/5 hover:text-[#D4AF5A] hover:bg-white/5 transition-all"
                            >
                                {l.label}
                                <ChevronRight size={14} className="text-white/20" />
                            </motion.a>
                        ))}
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="flex items-center justify-between px-6 py-4 text-[13px] font-semibold text-[#D4AF5A] no-underline hover:bg-[#B8942A]/10 transition-all"
                        >
                            Konsultasi Gratis
                            <ChevronRight size={14} className="text-[#B8942A]" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}