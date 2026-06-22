import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

// Font diload via next/font supaya tidak nambah request ke Google saat runtime
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elkia – Jasa Perizinan BPOM, Halal, NIB & HAKI Jakarta",
    template: "%s | Elkia",
  },
  description:
    "PT. Elkia Jaya Trading — konsultan perizinan terpercaya di Jakarta. Urus BPOM, Halal MUI, NIB OSS, PIRT, Izin Edar & HAKI dengan cepat dan transparan. Konsultasi gratis.",
  keywords: [
    "jasa perizinan BPOM Jakarta",
    "konsultan halal MUI Jakarta",
    "pengurusan NIB OSS",
    "izin PIRT Jakarta",
    "izin edar alat kesehatan",
    "pendaftaran HAKI merek",
    "konsultan perizinan usaha Jakarta",
    "PT Elkia Jaya Trading",
  ],
  metadataBase: new URL("https://elkiajayatrading.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://elkiajayatrading.com",
    siteName: "PT. Elkia Jaya Trading",
    title: "Elkia – Jasa Perizinan BPOM, Halal, NIB & HAKI Jakarta",
    description:
      "Konsultan perizinan terpercaya di Jakarta. Urus BPOM, Halal, NIB, PIRT, Izin Edar & HAKI dengan cepat. Konsultasi gratis.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT. Elkia Jaya Trading – Konsultan Perizinan Jakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elkia – Jasa Perizinan BPOM, Halal, NIB & HAKI Jakarta",
    description: "Konsultan perizinan terpercaya di Jakarta. Konsultasi gratis.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// Schema markup untuk bisnis lokal — bantu Google Maps dan pencarian lokal Jakarta
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PT. Elkia Jaya Trading",
  description:
    "Konsultan perizinan terpercaya di Jakarta untuk kebutuhan BPOM, Halal, NIB, PIRT, Izin Edar, dan HAKI.",
  url: "https://elkiajayatrading.com",
  telephone: "+6285959303035",
  email: "elkiajayatrading@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  sameAs: ["https://instagram.com/elkiaofficial"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}