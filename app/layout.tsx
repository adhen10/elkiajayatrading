import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteConfig } from "@/data/content";
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

const title = "Jasa Perizinan BPOM, Halal & NIB | Jakarta, Bekasi, Tangerang";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Elkia",
  },
  description:
    "PT. Elkia Jaya Trading — konsultan perizinan BPOM, Halal MUI, NIB OSS, PIRT, Izin Edar & HAKI untuk pelaku usaha di Jakarta, Bekasi, Tangerang, Depok & Bogor. Konsultasi gratis.",
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description:
      "Konsultan perizinan BPOM, Halal, NIB, PIRT, Izin Edar & HAKI untuk pelaku usaha di Jakarta, Bekasi, Tangerang, Depok & Bogor. Konsultasi gratis.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT. Elkia Jaya Trading – Konsultan Perizinan Jabodetabek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Konsultan perizinan BPOM, Halal & NIB di Jakarta, Bekasi, Tangerang. Konsultasi gratis.",
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
    "Konsultan perizinan di Jakarta untuk kebutuhan BPOM, Halal, NIB, PIRT, Izin Edar, dan HAKI.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  image: `${siteConfig.url}/images/og-image.jpg`,
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  areaServed: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"].map((name) => ({
    "@type": "City",
    name,
  })),
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
    <html lang="id" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // escape "<" supaya string apa pun di data tidak bisa menutup tag <script>
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}