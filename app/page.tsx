import type { Metadata } from "next";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import PermitChecker from "@/components/PermitChecker";
import Process from "@/components/Process";
import ServiceCategories from "@/components/ServiceCards";
import TrustBar from "@/components/TrustBar";
import WhyElkia from "@/components/WhyElkia";
import ServiceCards from "@/components/ServiceCards";

// Beranda memakai judul & deskripsi dari layout; hanya canonical yang ditetapkan di sini.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Testimoni sengaja tidak ditampilkan di beranda sampai klien memastikan
// testimoni itu nyata & diizinkan (lihat app/review/). Setelah itu, tambahkan <Testimonials /> lagi di sini.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyElkia />
      <ServiceCards />
      <PermitChecker />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}