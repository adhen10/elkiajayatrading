"use client";

import { waLinkForPath } from "@/data/content";
import { usePathname } from "next/navigation";

export function useWaLink() {
    return waLinkForPath(usePathname());
}