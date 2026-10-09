import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { pageMetadata } from "@/lib/seo";
import { services, serviceHref, waLinkFor } from "@/data/content";
import { serviceDetails } from "@/data/serviceDetails";

// wajib untuk output: "export": hanya slug yang terdaftar yang dibuat
export const dynamicParams = false;

const entries = Object.entries(serviceDetails).map(([id, d]) => ({ id, ...d }));

export function generateStaticParams() {
    return entries.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const d = entries.find((e) => e.slug === slug);
    if (!d) return {};
    return pageMetadata({
        title: d.metaTitle,
        description: d.metaDescription,
        path: `/layanan/${d.slug}/`,
    });
}

const eyebrow = "inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#8A6D1A] uppercase mb-3";
const h2 = "font-display text-[clamp(28px,3.2vw,40px)] font-medium text-[#0D1B3E] leading-[1.15] mb-4";

// Warna jalur: selalu disertai teks "Jalur Hijau/Kuning/Merah", jadi tidak mengandalkan warna saja
const tones = {
    green: { card: "bg-[#EEF8F2] border-[#1F9D55]/40", dot: "bg-[#1F9D55]", title: "text-[#14693A]" },
    yellow: { card: "bg-[#FFF8E1] border-[#D9A300]/45", dot: "bg-[#D9A300]", title: "text-[#7A5600]" },
    red: { card: "bg-[#FDEEEE] border-[#D64545]/40", dot: "bg-[#D64545]", title: "text-[#9B2323]" },
} as const;

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const d = entries.find((e) => e.slug === slug);
    if (!d) notFound();

    const service = services.find((s) => s.id === d.id);
    if (!service) notFound();

    const related = d.related
        .map((id) => services.find((s) => s.id === id))
        .filter((s): s is (typeof services)[number] => Boolean(s));

    const wa = waLinkFor(`Halo Elkia, saya ingin konsultasi mengenai ${service.name}.`);
    const facts = [...d.facts, { label: "Konsultasi", value: "Gratis" }, { label: "Wilayah", value: "Jabodetabek" }];

    return (
        <>
            <PageHeader
                eyebrow="Layanan"
                title={d.h1}
                intro={d.intro}
                icon={<ServiceIcon name={d.icon} size={26} />}
                crumbs={[
                    { label: "Beranda", href: "/" },
                    { label: "Layanan", href: "/layanan/" },
                    { label: service.name },
                ]}
            >
                {/* Sekilas: hanya fakta yang benar */}
                <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                    {facts.map((f) => (
                        <li key={f.label} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[13px] text-white/85">
                            <span className="text-white/50">{f.label}:</span> <strong className="font-medium text-white">{f.value}</strong>
                        </li>
                    ))}
                </ul>
            </PageHeader>

            {/* Penjelasan: judul di kiri, isi di kanan */}
            <section className="py-20 px-[5%] bg-white">
                <Reveal className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14">
                    <h2 className={`${h2} md:mb-0`}>{d.about.heading}</h2>
                    <div className="space-y-5 text-[15px] leading-[1.85] text-[#4A4A4A] border-l-2 border-[#B8942A] pl-6">
                        {d.about.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Tahapan: timeline berikon */}
            {d.steps && (
                <section className="py-20 px-[5%] bg-[#0D1B3E]">
                    <div className="max-w-[1160px] mx-auto">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#D4AF5A] uppercase mb-3">
                                <span className="block w-5 h-px bg-[#D4AF5A]" />
                                Proses
                            </div>
                            <h2 className="font-display text-[clamp(28px,3.2vw,40px)] font-medium text-white leading-[1.15] mb-3">
                                {d.steps.heading}
                            </h2>
                            {d.steps.intro && <p className="text-[15px] text-white/65 mb-12 max-w-[560px]">{d.steps.intro}</p>}
                        </Reveal>

                        <Reveal delay={100}>
                            <ol
                                className={`grid grid-cols-1 gap-y-10 lg:gap-x-8 list-none p-0 m-0 ${d.steps.items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
                                    }`}
                            >
                                {d.steps.items.map((s, i, arr) => (
                                    <li key={s.title} className="relative pl-16 lg:pl-0 lg:pt-16">
                                        <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-[#B8942A]/50 bg-[#B8942A]/15 text-[#D4AF5A]">
                                            <ServiceIcon name={s.icon} size={20} />
                                        </span>
                                        {i < arr.length - 1 && (
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-[21px] top-12 -bottom-10 w-px bg-[#B8942A]/30 lg:left-14 lg:-right-8 lg:top-[21px] lg:bottom-auto lg:h-px lg:w-auto"
                                            />
                                        )}
                                        <div className="text-[12px] font-semibold tracking-[0.18em] text-[#B8942A] mb-1">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <h3 className="font-display text-[22px] font-medium text-white leading-[1.25] mb-2">{s.title}</h3>
                                        <p className="text-[13.5px] text-white/70 leading-[1.75] m-0">{s.desc}</p>
                                    </li>
                                ))}
                            </ol>
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Jalur Bea Cukai: lampu lalu lintas */}
            {d.lanes && (
                <section className="py-20 px-[5%] bg-[#F8F7F4]">
                    <div className="max-w-[1160px] mx-auto">
                        <Reveal>
                            <div className={eyebrow}>
                                <span className="block w-5 h-px bg-[#B8942A]" />
                                Pemeriksaan
                            </div>
                            <h2 className={h2}>{d.lanes.heading}</h2>
                            {d.lanes.intro && <p className="text-[15px] text-[#6B6B6B] mb-8 max-w-[560px]">{d.lanes.intro}</p>}
                        </Reveal>
                        <Reveal delay={100} className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                            {d.lanes.items.map((l) => {
                                const t = tones[l.tone];
                                return (
                                    <div key={l.title} className={`rounded-lg border p-7 ${t.card}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span aria-hidden="true" className={`h-4 w-4 rounded-full ${t.dot}`} />
                                            <h3 className={`font-display text-[24px] font-semibold leading-none ${t.title}`}>{l.title}</h3>
                                        </div>
                                        <p className="text-[14px] text-[#4A4A4A] leading-[1.75] m-0">{l.desc}</p>
                                    </div>
                                );
                            })}
                        </Reveal>
                    </div>
                </section>
            )}

            {/* Bagian kartu berikon */}
            {d.sections?.map((sec, idx) => (
                <section key={sec.heading} className={`py-20 px-[5%] ${idx % 2 === 0 ? "bg-white" : "bg-[#F8F7F4]"}`}>
                    <div className="max-w-[1160px] mx-auto">
                        <Reveal>
                            <div className={eyebrow}>
                                <span className="block w-5 h-px bg-[#B8942A]" />
                                Penjelasan
                            </div>
                            <h2 className={h2}>{sec.heading}</h2>
                            {sec.intro && <p className="text-[15px] text-[#6B6B6B] mb-8 max-w-[560px]">{sec.intro}</p>}
                        </Reveal>
                        <Reveal
                            delay={100}
                            className={`grid grid-cols-1 gap-5 mt-8 ${sec.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
                        >
                            {sec.items.map((it) => (
                                <div
                                    key={it.title}
                                    className="bg-white border border-[#ECECEC] border-t-2 border-t-[#B8942A] p-7 rounded-sm hover:shadow-[0_12px_32px_rgba(13,27,62,0.10)] transition-shadow duration-300"
                                >
                                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EDD6] text-[#8A6D1A]">
                                        <ServiceIcon name={it.icon} />
                                    </span>
                                    <h3 className="font-display text-[21px] font-medium text-[#0D1B3E] leading-[1.25] mb-2">{it.title}</h3>
                                    <p className="text-[13.5px] text-[#5E5E5E] leading-[1.75] m-0">{it.desc}</p>
                                </div>
                            ))}
                        </Reveal>
                    </div>
                </section>
            ))}

            {/* Dokumen */}
            {d.checklist && (
                <section className="py-20 px-[5%] bg-white">
                    <Reveal className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14">
                        <div>
                            <h2 className={h2}>{d.checklist.heading}</h2>
                            {d.checklist.intro && <p className="text-[15px] text-[#6B6B6B] leading-[1.75] m-0">{d.checklist.intro}</p>}
                        </div>
                        <ul className="list-none p-0 m-0 flex flex-col gap-3">
                            {d.checklist.items.map((it) => (
                                <li
                                    key={it}
                                    className="flex items-start gap-3 rounded-sm border border-[#ECECEC] bg-[#FBF9F3] px-5 py-4 text-[14.5px] text-[#3F3F3F] leading-[1.7]"
                                >
                                    <Check size={18} strokeWidth={2.4} className="text-[#B8942A] mt-[3px] shrink-0" aria-hidden="true" />
                                    {it}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </section>
            )}

            {/* Kenapa Elkia */}
            <section className="py-16 px-[5%] bg-[#F8F7F4]">
                <Reveal className="max-w-[1160px] mx-auto">
                    <h2 className={h2}>Kenapa memilih Elkia</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0 mt-6">
                        {d.whyUs.map((w) => (
                            <li
                                key={w.text}
                                className="flex items-center gap-4 bg-white border border-[#ECECEC] rounded-sm px-6 py-5 text-[15px] font-medium text-[#0D1B3E]"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5EDD6] text-[#8A6D1A]">
                                    <ServiceIcon name={w.icon} size={20} />
                                </span>
                                {w.text}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </section>

            {/* FAQ */}
            <section className="py-20 px-[5%] bg-white">
                <Reveal className="max-w-[760px] mx-auto">
                    <h2 className={h2}>Pertanyaan yang sering diajukan</h2>
                    <div className="mt-6">
                        <FaqAccordion items={d.faqs} />
                    </div>
                </Reveal>
            </section>

            {/* Layanan terkait: tautan internal */}
            {related.length > 0 && (
                <section className="py-16 px-[5%] bg-[#F8F7F4]">
                    <Reveal className="max-w-[1160px] mx-auto">
                        <h2 className={h2}>Layanan terkait</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                            {related.map((r) => (
                                <Link
                                    key={r.id}
                                    href={serviceHref(r)}
                                    className="group flex items-start justify-between gap-4 bg-white border border-[#ECECEC] rounded-sm p-7 no-underline hover:border-[#B8942A] transition-colors"
                                >
                                    <span>
                                        <span className="block font-display text-[22px] font-medium text-[#0D1B3E] mb-1">{r.name}</span>
                                        <span className="block text-[13.5px] text-[#5E5E5E] leading-[1.7] line-clamp-2">{r.desc}</span>
                                    </span>
                                    <ArrowRight size={18} className="text-[#B8942A] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </Reveal>
                </section>
            )}

            {/* CTA penutup */}
            <section className="relative overflow-hidden py-20 px-[5%] bg-[#0D1B3E] text-center">
                <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full border border-[#B8942A]/10 pointer-events-none" />
                <div className="absolute -top-32 -right-32 h-[340px] w-[340px] rounded-full border border-[#B8942A]/10 pointer-events-none" />
                <Reveal className="relative max-w-[640px] mx-auto">
                    <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-medium text-white leading-[1.15] mb-3">
                        Butuh bantuan <em className="italic text-[#D4AF5A]">{service.name}</em>?
                    </h2>
                    <p className="text-[15px] text-white/65 mb-8 leading-[1.7]">
                        Ceritakan kebutuhan Anda. Konsultasi pertama gratis, tanpa komitmen.
                    </p>
                    <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] px-7 py-[14px] bg-[#B8942A] text-[#0D1B3E] rounded-sm no-underline hover:bg-[#D4AF5A] transition-colors"
                    >
                        Konsultasi Gratis <ArrowRight size={14} strokeWidth={2.5} />
                    </a>
                    <p className="mt-8 text-[12px] text-white/45 leading-[1.7]">
                        Terakhir diperbarui: {d.updated}. Ketentuan perizinan dapat berubah; kami pastikan detail terbaru saat konsultasi.
                    </p>
                </Reveal>
            </section>
        </>
    );
}