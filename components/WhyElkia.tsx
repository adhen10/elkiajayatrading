"use client";

import { Zap, ShieldCheck, Layers, MapPin } from "lucide-react";
import { whyElkia } from "@/data/content";
import { useReveal } from "@/hooks/useReveal";

// urutan ikon mengikuti urutan item di whyElkia (data/content.ts)
const icons = [Zap, ShieldCheck, Layers, MapPin];

export default function WhyElkia() {
  const head = useReveal();
  const grid = useReveal();

  return (
    <section id="tentang" className="py-24 px-[5%] bg-[#F8F7F4]">
      <div className="max-w-[1160px] mx-auto">
        <div
          ref={head.ref}
          className={`mb-14 transition-all duration-700 ${head.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#8A6D1A] uppercase mb-3">
            <span className="block w-5 h-px bg-[#B8942A]" />
            Kenapa Elkia
          </div>

          <h2 className="font-display text-[clamp(30px,3.5vw,46px)] font-medium text-[#0D1B3E] leading-[1.15] mb-4">
            Perizinan Cepat.
            <br />
            Bisnis Melesat.
          </h2>
          <p className="text-[15px] font-light text-[#6B6B6B] leading-[1.75] max-w-[560px]">
            Kami membantu bisnis Anda memperoleh perizinan, memenuhi persyaratan regulasi, dan mempercepat akses pasar dengan proses yang lebih efisien dan terpercaya.
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ECECEC] border border-[#ECECEC] transition-all duration-700 ${grid.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {whyElkia.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={c.title}
                className="bg-white p-9 hover:bg-[#F0EDE6] transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5EDD6] flex items-center justify-center mb-5">
                  <Icon size={22} strokeWidth={1.7} className="text-[#8A6D1A]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-[20px] font-medium text-[#0D1B3E] mb-3 leading-[1.3]">
                  {c.title}
                </h3>
                <p className="text-[13.5px] text-[#6B6B6B] leading-[1.7]">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}