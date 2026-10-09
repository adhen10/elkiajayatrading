"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="divide-y divide-[#ECECEC] border-y border-[#ECECEC]">
            {items.map((f, i) => {
                const isOpen = open === i;
                const id = `faq-${i}`;
                return (
                    <div key={f.q}>
                        <h3 className="m-0">
                            <button
                                type="button"
                                id={`${id}-btn`}
                                aria-expanded={isOpen}
                                aria-controls={`${id}-panel`}
                                onClick={() => setOpen(isOpen ? null : i)}
                                className="flex w-full items-center justify-between gap-4 py-5 text-left text-[16px] font-medium text-[#0D1B3E] bg-transparent border-none cursor-pointer"
                            >
                                {f.q}
                                <Plus
                                    size={20}
                                    className={`shrink-0 text-[#B8942A] transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-45" : ""}`}
                                    aria-hidden="true"
                                />
                            </button>
                        </h3>
                        <div
                            id={`${id}-panel`}
                            role="region"
                            aria-labelledby={`${id}-btn`}
                            className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                        >
                            <div className="overflow-hidden">
                                <p className="pb-5 text-[14.5px] text-[#5E5E5E] leading-[1.8] m-0">{f.a}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}