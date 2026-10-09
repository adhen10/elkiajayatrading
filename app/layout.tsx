import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteConfig } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import "./globals.css";

// Variabel diberi nama --font-cormorant / --font-inter, lalu dipetakan
// ke utility font-display / font-body di globals.css (@theme inline).
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Jasa Perizinan BPOM, Halal & Custom Clearance | Seluruh Indonesia";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Elkia",
  },
  description:
    "PT. Elkia Jaya Trading — konsultan Izin Edar BPOM, Halal BPJPH, Custom Clearance, Persetujuan Import, PIRT, NIB & HAKI. Melayani pelaku usaha di seluruh Indonesia. Konsultasi gratis.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description:
      "Konsultan Izin Edar BPOM, Halal BPJPH, Custom Clearance, Persetujuan Import, PIRT, NIB & HAKI. Melayani pelaku usaha di seluruh Indonesia. Konsultasi gratis.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT. Elkia Jaya Trading – Konsultan Perizinan Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Konsultan perizinan BPOM, Halal & Custom Clearance untuk seluruh Indonesia. Konsultasi gratis.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/*
  Schema bisnis. Hanya isi data yang BENAR dan sama persis dengan
  Google Business Profile. Yang belum pasti (alamat jalan, jam buka)
  sengaja belum dimasukkan — tambahkan setelah dikonfirmasi client:
    address.streetAddress, address.postalCode, openingHoursSpecification
*/
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description:
    "Konsultan perizinan untuk pelaku usaha di seluruh Indonesia: BPOM, Halal, Custom Clearance, Persetujuan Import, NIB, PIRT, Izin Edar, dan HAKI.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  image: `${siteConfig.url}/images/og-image.jpg`,
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  areaServed: { "@type": "Country", name: "Indonesia" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suropati Residence, Jl. Raflesia II Blok F10 No. 9, Srimukti",
    addressLocality: "Tambun Utara",
    addressRegion: "Jawa Barat",
    postalCode: "17510",
    addressCountry: "ID",
  },
  sameAs: [siteConfig.instagramUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // escape "<" supaya string apa pun di data tidak bisa menutup tag <script>
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#B8942A] focus:text-[#0D1B3E] focus:px-4 focus:py-2 focus:rounded"
        >
          Lewati ke konten
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}