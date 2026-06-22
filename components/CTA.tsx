import { siteConfig, waLink } from "@/data/content";
import { ArrowUpRight, Mail } from "lucide-react";
// import { waLink, siteConfig } from "@/data/Content";

// statis, tidak ada interaktivitas — Server Component
export default function CTA() {
    return (
        <section id="kontak" className="py-24 px-[5%] bg-[#0D1B3E] text-center">
            <div className="max-w-[1160px] mx-auto">
                <h2 className="font-display text-[clamp(32px,4vw,54px)] font-medium text-white leading-[1.15] mb-3">
                    Siap urus perizinan
                    <br />
                    <em className="italic text-[#D4AF5A]">bisnis Anda?</em>
                </h2>
                <p className="text-[15px] text-white/55 mb-10 max-w-[480px] mx-auto leading-[1.7]">
                    Ceritakan kebutuhan Anda kepada kami. Konsultasi pertama gratis, tanpa komitmen.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] px-7 py-[14px] bg-[#25D366] text-white rounded-sm no-underline hover:opacity-90 transition-opacity duration-200"
                    >
                        Chat via WhatsApp <ArrowUpRight size={14} strokeWidth={2.5} />
                    </a>
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="inline-flex items-center gap-2 text-[13px] font-normal tracking-[0.04em] px-7 py-[14px] border border-[#B8942A] text-[#D4AF5A] rounded-sm no-underline hover:bg-[#B8942A] hover:text-[#0D1B3E] transition-all duration-200"
                    >
                        Kirim Email <Mail size={14} strokeWidth={1.5} />
                    </a>
                </div>
            </div>
        </section>
    );
}