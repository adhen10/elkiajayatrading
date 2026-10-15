"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, services, waLink, serviceHref } from "@/data/content";
import { useWaLink } from "@/hooks/useWaLink";

// Buang garis miring di akhir agar "/layanan/" dan "/layanan" dianggap sama.
const normalize = (path: string) =>
    path.length > 1 ? path.replace(/\/+$/, "") : path;

// Beranda diwakili logo Elkia agar navigasi tetap ringkas.
const menu = navLinks.filter((link) => link.href !== "/");

export default function Navbar() {
    const pathname = normalize(usePathname() ?? "/");
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const wa = useWaLink();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href: string) => {
        const target = normalize(href);
        return pathname === target || pathname.startsWith(target + "/");
    };

    const isHome = pathname === "/";
    const isServicesRoute = isActive("/layanan/");

    const closeMenu = () => {
        setOpen(false);
        setServicesOpen(false);
    };

    const toggleMobileMenu = () => {
        const nextOpen = !open;
        setOpen(nextOpen);
        // Saat berada di halaman layanan, tampilkan submenu yang memuat halaman aktif.
        setServicesOpen(nextOpen && isServicesRoute);
    };

    const linkCls = (active: boolean) =>
        `inline-flex h-full items-center gap-1 border-b-2 text-[15px] font-medium tracking-[0.02em] no-underline transition-colors duration-200 hover:text-[#D4AF5A] ${
            active ? "border-[#D4AF5A] text-[#D4AF5A]" : "border-transparent text-white/85"
        }`;

    const mobileLinkCls = (active: boolean) =>
        `relative flex w-full items-center justify-between border-b border-white/5 px-6 py-4 text-left text-[15px] font-medium no-underline transition-colors hover:bg-white/5 hover:text-[#D4AF5A] ${
            active
                ? "bg-white/[0.06] text-[#D4AF5A] before:absolute before:inset-y-2 before:left-0 before:w-[3px] before:rounded-r before:bg-[#D4AF5A]"
                : "text-white/85"
        }`;

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeMenu();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
        // closeMenu changes with state; this effect only needs to follow drawer visibility.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 border-b border-[#B8942A]/30 bg-[#0D1B3E] transition-shadow duration-300 ${
                scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,0.35)]" : ""
            }`}
        >
            <nav
                aria-label="Navigasi utama"
                className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-6 px-[5%]"
            >
                <Link
                    href="/"
                    aria-label="Elkia – ke beranda"
                    aria-current={isHome ? "page" : undefined}
                    className="relative inline-flex shrink-0 items-center font-display text-[24px] font-semibold tracking-[6px] text-white no-underline"
                >
                    EL<span className="text-[#D4AF5A]">KIA</span>
                    {isHome && (
                        <span
                            aria-hidden="true"
                            className="absolute -bottom-[13px] left-0 right-0 h-[2px] rounded-full bg-[#D4AF5A]"
                        />
                    )}
                </Link>

                {/* Navigasi desktop */}
                <ul className="ml-auto mr-8 hidden h-full list-none items-stretch gap-9 p-0 lg:flex">
                    {menu.map((item) => {
                        const active = isActive(item.href);

                        if (item.href === "/layanan/") {
                            return (
                                <li key={item.label} className="group relative flex h-full items-center">
                                    <Link
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        aria-haspopup="true"
                                        className={linkCls(active)}
                                    >
                                        {item.label}
                                        <ChevronDown size={14} aria-hidden="true" />
                                    </Link>

                                    <div className="invisible absolute left-0 top-full w-[290px] translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                        <ul className="m-0 list-none rounded-b-md border border-t-0 border-[#B8942A]/30 bg-[#0D1B3E] p-2 shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                                            <li>
                                                <Link
                                                    href="/layanan/"
                                                    aria-current={pathname === "/layanan" ? "page" : undefined}
                                                    className={`block rounded px-4 py-3 text-[14px] font-semibold no-underline transition-colors hover:bg-white/5 ${
                                                        pathname === "/layanan"
                                                            ? "bg-white/[0.06] text-[#D4AF5A]"
                                                            : "text-white/85 hover:text-[#D4AF5A]"
                                                    }`}
                                                >
                                                    Semua layanan
                                                </Link>
                                            </li>
                                            {services.map((service) => {
                                                const serviceActive = isActive(serviceHref(service));
                                                return (
                                                    <li key={service.id}>
                                                        <Link
                                                            href={serviceHref(service)}
                                                            aria-current={serviceActive ? "page" : undefined}
                                                            className={`block rounded px-4 py-3 text-[14px] no-underline transition-colors hover:bg-white/5 hover:text-[#D4AF5A] ${
                                                                serviceActive
                                                                    ? "bg-white/[0.06] font-semibold text-[#D4AF5A]"
                                                                    : "text-white/80"
                                                            }`}
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        }

                        return (
                            <li key={item.label} className="flex h-full items-center">
                                <Link
                                    href={item.href}
                                    aria-current={active ? "page" : undefined}
                                    className={linkCls(active)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden shrink-0 items-center gap-1.5 rounded-sm bg-[#B8942A] px-6 py-[11px] text-[14px] font-semibold tracking-[0.03em] text-[#0D1B3E] no-underline transition-colors duration-200 hover:bg-[#D4AF5A] lg:inline-flex"
                >
                    Konsultasi Gratis <ChevronRight size={14} strokeWidth={2.5} />
                </a>

                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    className="ml-auto flex items-center justify-center border-none bg-transparent p-2 text-white transition-colors hover:text-[#D4AF5A] lg:hidden"
                    aria-label={open ? "Tutup menu" : "Buka menu"}
                    aria-expanded={open}
                    aria-controls="mobile-navigation-drawer"
                >
                    {open ? <X size={26} strokeWidth={1.6} /> : <Menu size={26} strokeWidth={1.6} />}
                </button>
            </nav>

            {/* Sidebar mobile: tombol hamburger membuka drawer dari sisi kanan. */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Tutup menu navigasi"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            onClick={closeMenu}
                            className="fixed inset-0 z-[60] border-none bg-black/60 p-0 lg:hidden"
                        />

                        <motion.aside
                            id="mobile-navigation-drawer"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menu navigasi"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.24, ease: "easeOut" }}
                            className="fixed right-0 top-0 z-[61] flex h-dvh max-h-dvh w-[88vw] max-w-[380px] flex-col overflow-y-auto border-l border-[#B8942A]/30 bg-[#0D1B3E] shadow-[-18px_0_45px_rgba(0,0,0,0.35)] lg:hidden"
                        >
                            <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-[#B8942A]/30 px-6">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF5A]">
                                    Menu navigasi
                                </span>
                                <button
                                    type="button"
                                    onClick={closeMenu}
                                    aria-label="Tutup menu navigasi"
                                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-white transition-colors hover:border-[#B8942A]/50 hover:text-[#D4AF5A]"
                                >
                                    <X size={22} strokeWidth={1.6} />
                                </button>
                            </div>

                            <nav aria-label="Navigasi mobile" className="flex-1 py-2">
                                {menu.map((item) => {
                                    const active = isActive(item.href);

                                    if (item.href === "/layanan/") {
                                        return (
                                            <div key={item.label} className="border-b border-white/5">
                                                <button
                                                    type="button"
                                                    onClick={() => setServicesOpen((value) => !value)}
                                                    aria-expanded={servicesOpen}
                                                    aria-controls="mobile-services-submenu"
                                                    className={mobileLinkCls(active)}
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        size={17}
                                                        className={`transition-transform duration-200 ${
                                                            servicesOpen ? "rotate-180" : ""
                                                        } ${active ? "text-[#D4AF5A]" : "text-white/50"}`}
                                                        aria-hidden="true"
                                                    />
                                                </button>

                                                <AnimatePresence initial={false}>
                                                    {servicesOpen && (
                                                        <motion.div
                                                            id="mobile-services-submenu"
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                                            className="overflow-hidden bg-black/10"
                                                        >
                                                            <Link
                                                                href="/layanan/"
                                                                onClick={closeMenu}
                                                                aria-current={pathname === "/layanan" ? "page" : undefined}
                                                                className={`block border-l-2 px-9 py-3 text-[14px] font-semibold no-underline transition-colors hover:bg-white/5 ${
                                                                    pathname === "/layanan"
                                                                        ? "border-[#D4AF5A] bg-white/[0.06] text-[#D4AF5A]"
                                                                        : "border-transparent text-white/75 hover:text-[#D4AF5A]"
                                                                }`}
                                                            >
                                                                Semua layanan
                                                            </Link>
                                                            {services.map((service) => {
                                                                const serviceActive = isActive(serviceHref(service));
                                                                return (
                                                                    <Link
                                                                        key={service.id}
                                                                        href={serviceHref(service)}
                                                                        onClick={closeMenu}
                                                                        aria-current={serviceActive ? "page" : undefined}
                                                                        className={`block border-l-2 px-9 py-3 text-[14px] no-underline transition-colors hover:bg-white/5 hover:text-[#D4AF5A] ${
                                                                            serviceActive
                                                                                ? "border-[#D4AF5A] bg-white/[0.06] font-semibold text-[#D4AF5A]"
                                                                                : "border-transparent text-white/75"
                                                                        }`}
                                                                    >
                                                                        {service.name}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={closeMenu}
                                            aria-current={active ? "page" : undefined}
                                            className={mobileLinkCls(active)}
                                        >
                                            <span>{item.label}</span>
                                            <ChevronRight
                                                size={17}
                                                className={active ? "text-[#D4AF5A]" : "text-white/35"}
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="shrink-0 border-t border-white/10 p-6">
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    className="flex items-center justify-center gap-2 rounded-sm bg-[#B8942A] px-6 py-3.5 text-[15px] font-semibold text-[#0D1B3E] no-underline transition-colors hover:bg-[#D4AF5A]"
                                >
                                    Konsultasi Gratis <ChevronRight size={16} strokeWidth={2.5} />
                                </a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
