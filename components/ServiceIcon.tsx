import {
    Ship, ClipboardCheck, FileCheck2, FileText, Calculator, ScanSearch, BadgeCheck, Globe,
    FlaskConical, ShieldCheck, Factory, FileSearch, ListChecks, CalendarClock, Zap, Wallet,
    SlidersHorizontal, Handshake, type LucideIcon,
} from "lucide-react";

// Daftar ikon yang boleh dipakai di data/serviceDetails.ts (hanya yang dipakai yang ikut terkemas)
const icons: Record<string, LucideIcon> = {
    ship: Ship,
    "clipboard-check": ClipboardCheck,
    "file-check": FileCheck2,
    "file-text": FileText,
    calculator: Calculator,
    "scan-search": ScanSearch,
    "badge-check": BadgeCheck,
    globe: Globe,
    flask: FlaskConical,
    "shield-check": ShieldCheck,
    factory: Factory,
    "file-search": FileSearch,
    "list-checks": ListChecks,
    "calendar-clock": CalendarClock,
    zap: Zap,
    wallet: Wallet,
    sliders: SlidersHorizontal,
    handshake: Handshake,
};

// Ikon dekoratif: disembunyikan dari pembaca layar
export default function ServiceIcon({ name, size = 22, className }: { name?: string; size?: number; className?: string }) {
    const Icon = (name && icons[name]) || FileText;
    return <Icon size={size} strokeWidth={1.7} className={className} aria-hidden="true" />;
}