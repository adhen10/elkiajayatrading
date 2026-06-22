import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { services, navLinks, waLink, siteConfig } from "@/data/content";

// statis, Server Component — footer tidak butuh interaktivitas apapun
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080F22] pt-14 px-[5%] pb-8 text-white/45">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/7 mb-7">
        <div>
          <div className="font-display text-[28px] font-semibold text-white tracking-[6px] mb-1.5">
            EL<span className="text-[#D4AF5A]">KIA</span>
          </div>
          <div className="text-[11px] tracking-[0.12em] uppercase text-[#B8942A] mb-4">
            {siteConfig.tagline}
          </div>
          <p className="text-[13px] leading-[1.75] max-w-[300px]">
            {siteConfig.name} — konsultan perizinan terpercaya di Jakarta untuk kebutuhan
            BPOM, Halal, NIB, PIRT, Izin Edar, dan HAKI.
          </p>

          <address className="mt-5 not-italic space-y-2">
            <p className="flex items-center gap-2 text-[13px]">
              <MapPin size={14} className="text-[#D4AF5A] shrink-0" />
              {siteConfig.location}
            </p>
            <p className="flex items-center gap-2 text-[13px]">
              <Phone size={14} className="text-[#D4AF5A] shrink-0" />
              {siteConfig.phone}
            </p>
            <p className="flex items-center gap-2 text-[13px]">
              <Mail size={14} className="text-[#D4AF5A] shrink-0" />
              {siteConfig.email}
            </p>
            <p className="flex items-center gap-2 text-[13px]">
              <AtSign size={14} className="text-[#D4AF5A] shrink-0" />
              {siteConfig.instagram}
            </p>
          </address>
        </div>

        <nav aria-label="Layanan">
          <h4 className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#D4AF5A] mb-4">
            Layanan
          </h4>
          <ul className="list-none p-0 m-0 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[13px] text-white/45 no-underline hover:text-[#D4AF5A] transition-colors"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Perusahaan">
          <h4 className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#D4AF5A] mb-4">
            Perusahaan
          </h4>
          <ul className="list-none p-0 m-0 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[13px] text-white/45 no-underline hover:text-[#D4AF5A] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/45 no-underline hover:text-[#D4AF5A] transition-colors"
              >
                Konsultasi Gratis
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/45 no-underline hover:text-[#D4AF5A] transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-[1160px] mx-auto flex justify-between items-center flex-wrap gap-2 text-[12px]">
        <span>© {year} {siteConfig.name}. Hak cipta dilindungi.</span>
        <span>{siteConfig.location}</span>
      </div>
    </footer>
  );
}