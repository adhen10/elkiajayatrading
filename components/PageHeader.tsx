import Link from "next/link";
import { siteConfig } from "@/data/content";

type Crumb = { label: string; href?: string };

// Banner judul untuk halaman dalam. Server Component.
// Memuat <h1> halaman, breadcrumb, dan data terstruktur BreadcrumbList untuk Google.
export default function PageHeader({
    eyebrow,
    title,
    intro,
    crumbs,
    icon,
    children,
}: {
    eyebrow: string;
    title: string;
    intro?: string;
    crumbs: Crumb[];
    icon?: React.ReactNode;
    children?: React.ReactNode;
}) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${siteConfig.url}${c.href}` } : {}),
        })),
    };

    return (
        <header className="relative overflow-hidden bg-[#0D1B3E] pt-[130px] pb-16 px-[5%]">
            <div className="absolute top-[-200px] right-[-200px] w-[560px] h-[560px] rounded-full border border-[#B8942A]/10 pointer-events-none" />
            <div className="absolute top-[-80px] right-[-80px] w-[340px] h-[340px] rounded-full border border-[#B8942A]/6 pointer-events-none" />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
                }}
            />

            <div className="relative max-w-[1160px] mx-auto">
                <nav aria-label="Breadcrumb" className="mb-6 text-[12px]">
                    <ol className="flex flex-wrap items-center gap-2 list-none m-0 p-0 text-white/60">
                        {crumbs.map((c, i) => (
                            <li key={c.label} className="flex items-center gap-2">
                                {c.href ? (
                                    <Link href={c.href} className="text-white/60 no-underline hover:text-[#D4AF5A] transition-colors">
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span aria-current="page" className="text-white/85">
                                        {c.label}
                                    </span>
                                )}
                                {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                            </li>
                        ))}
                    </ol>
                </nav>

                {icon && (
                    <div className="mb-5 w-14 h-14 rounded-full border border-[#B8942A]/40 bg-[#B8942A]/10 flex items-center justify-center text-[#D4AF5A]">
                        {icon}
                    </div>
                )}

                <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#D4AF5A] uppercase mb-4">
                    <span className="block w-5 h-px bg-[#B8942A]" />
                    {eyebrow}
                </div>

                <h1 className="font-display text-[clamp(34px,4.6vw,56px)] font-medium text-white leading-[1.12] mb-4 max-w-[820px]">
                    {title}
                </h1>

                {intro && (
                    <p className="text-[15px] font-light text-white/70 leading-[1.8] max-w-[620px] m-0">
                        {intro}
                    </p>
                )}

                {children && <div className="mt-8">{children}</div>}
            </div>
        </header>
    );
}