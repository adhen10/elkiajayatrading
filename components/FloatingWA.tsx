"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { waLink } from "@/data/content";

// "use client" wajib di sini karena pakai framer-motion (animasi)
export default function FloatingWA() {
    return (
        <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat via WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-7 right-7 z-[999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] no-underline"
        >
            <MessageCircle size={26} strokeWidth={1.8} fill="white" />
        </motion.a>
    );
}