import { stats } from "@/data/content";

export default function Stats() {
  return (
    <div className="py-16 px-[5%] bg-[#F5EDD6]">
      <div className="max-w-[1160px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-[48px] font-medium text-[#0D1B3E] leading-none mb-2">
              {s.num}
            </div>
            <div className="text-[12px] font-medium tracking-[0.1em] uppercase text-[#B8942A]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}