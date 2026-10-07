import { stats } from "@/data/content";

export default function TrustBar() {
    return (
        <section aria-label="Ringkasan layanan" className="bg-[#0D1B3E] border-t border-[#B8942A]/30 px-[5%]">
            <ul className="max-w-[1160px] mx-auto flex flex-col sm:flex-row sm:justify-center list-none m-0 p-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                {stats.map((s) => (
                    <li key={s.num} className="flex-1 py-6 px-4 text-center">
                        <div className="font-display text-[clamp(22px,3vw,30px)] font-medium text-[#D4AF5A] leading-tight">
                            {s.num}
                        </div>
                        <div className="text-[12px] tracking-[0.06em] text-white/75 mt-1">{s.label}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}