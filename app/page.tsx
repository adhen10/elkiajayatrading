import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FloatingWA from "@/components/FloatingWA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyElkia from "@/components/WhyElkia";

// page.tsx ini server component by default di Next.js
// artinya semua konten dirender di server — Google baca langsung
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyElkia />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWA />
    </main>
  );
}