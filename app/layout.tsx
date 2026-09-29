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

const title = "Elkia – Jasa Perizinan BPOM, Halal, NIB & HAKI Jakarta";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Elkia",
  },
  description:
    "PT. Elkia Jaya Trading — konsultan perizinan terpercaya di Jakarta. Urus BPOM, Halal MUI, NIB OSS, PIRT, Izin Edar & HAKI dengan cepat dan transparan. Konsultasi gratis.",
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description:
      "Konsultan perizinan terpercaya di Jakarta. Urus BPOM, Halal, NIB, PIRT, Izin Edar & HAKI dengan cepat. Konsultasi gratis.",
    images: [
      {
        url: "/images/og-image.jpg", // file 1200x630 harus ada di public/images/
        width: 1200,
        height: 630,
        alt: "PT. Elkia Jaya Trading – Konsultan Perizinan Jakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Konsultan perizinan terpercaya di Jakarta. Konsultasi gratis.",
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
  areaServed: { "@type": "City", name: "Jakarta" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
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