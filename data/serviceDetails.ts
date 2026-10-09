type Item = { title: string; desc: string; icon?: string };

export type ServiceDetail = {
    slug: string;
    icon: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    intro: string;
    facts: { label: string; value: string }[]; // chip "Sekilas" khusus layanan ini
    about: { heading: string; paragraphs: string[] };
    steps?: { heading: string; intro?: string; items: Item[] };
    lanes?: { heading: string; intro?: string; items: { tone: "green" | "yellow" | "red"; title: string; desc: string }[] };
    sections?: { heading: string; intro?: string; items: Item[] }[];
    checklist?: { heading: string; intro?: string; items: string[] };
    whyUs: { icon: string; text: string }[];
    faqs: { q: string; a: string }[];
    related: string[]; // id layanan lain
    updated: string;
};

/*
  Isi halaman layanan. Kuncinya adalah id layanan di data/content.ts.
  Layanan yang BELUM ada di sini tidak punya halaman sendiri (tautan tetap ke /layanan/#id).
  [CLIENT] Isi disusun dari penjelasan klien. Aturan impor (Lartas) sering berubah:
  minta klien memastikan isinya sesuai ketentuan terbaru, lalu perbarui `updated`.
  Nama ikon (icon) mengacu ke daftar di components/ServiceIcon.tsx.
*/
export const serviceDetails: Record<string, ServiceDetail> = {
    "svc-customs": {
        slug: "custom-clearance",
        icon: "ship",
        metaTitle: "Jasa Custom Clearance Impor & Ekspor",
        metaDescription:
            "Jasa custom clearance impor & ekspor: dokumen, bea masuk & pajak, jalur pemeriksaan hingga SPPB. Cepat, biaya terjangkau. Konsultasi gratis.",
        h1: "Jasa Custom Clearance Impor & Ekspor",
        intro:
            "Barang impor atau ekspor perlu melewati pemenuhan kewajiban kepabeanan sebelum resmi masuk atau keluar Indonesia. Elkia membantu prosesnya dengan cepat dan biaya yang terjangkau.",
        facts: [{ label: "Untuk", value: "Importir & eksportir" }],
        about: {
            heading: "Apa itu custom clearance?",
            paragraphs: [
                "Custom clearance (kepabeanan atau Bea & Cukai) adalah proses pemenuhan kewajiban administrasi dan regulasi hukum atas barang impor maupun ekspor, agar barang mendapat izin resmi masuk atau keluar dari suatu negara.",
                "Di Indonesia, proses ini dilakukan melalui Direktorat Jenderal Bea dan Cukai. Kesalahan dokumen atau perhitungan bisa membuat barang tertahan, sehingga pendampingan yang tepat membantu menghemat waktu dan biaya.",
            ],
        },
        steps: {
            heading: "Tahapan custom clearance",
            intro: "Secara umum, prosesnya mencakup empat tahap berikut.",
            items: [
                {
                    icon: "file-text",
                    title: "Pemeriksaan dokumen",
                    desc: "Dokumen administrasi seperti Invoice, Packing List, serta Bill of Lading (B/L) atau Air Waybill (AWB) diperiksa kelengkapannya, lalu disiapkan dokumen kepabeanan: Pemberitahuan Impor Barang (PIB) untuk impor atau Pemberitahuan Ekspor Barang (PEB) untuk ekspor. Bila barang termasuk Lartas, dokumen perizinan khusus juga disiapkan.",
                },
                {
                    icon: "calculator",
                    title: "Pembayaran bea dan pajak",
                    desc: "Perhitungan dan pelunasan kewajiban finansial seperti Bea Masuk, PPN, PPh Pasal 22, atau tarif bea keluar sesuai ketentuan yang berlaku.",
                },
                {
                    icon: "scan-search",
                    title: "Pemeriksaan sesuai jalur",
                    desc: "Barang diarahkan ke salah satu jalur pemeriksaan: hijau, kuning, atau merah. Penjelasan tiap jalur ada di bagian berikutnya.",
                },
                {
                    icon: "badge-check",
                    title: "Penerbitan SPPB",
                    desc: "Setelah dokumen valid, pajak dilunasi, dan pemeriksaan selesai, Bea Cukai menerbitkan Surat Persetujuan Pengeluaran Barang (SPPB) sehingga barang resmi dapat diambil dan didistribusikan.",
                },
            ],
        },
        lanes: {
            heading: "Jalur pemeriksaan Bea Cukai",
            intro: "Setiap pengajuan diarahkan ke salah satu dari tiga jalur berikut.",
            items: [
                { tone: "green", title: "Jalur Hijau", desc: "Barang langsung dapat dikeluarkan tanpa pemeriksaan fisik." },
                { tone: "yellow", title: "Jalur Kuning", desc: "Perlu penelitian dokumen yang lebih mendalam sebelum barang dirilis." },
                { tone: "red", title: "Jalur Merah", desc: "Barang diperiksa langsung secara fisik oleh petugas Bea Cukai." },
            ],
        },
        checklist: {
            heading: "Dokumen yang umumnya diperlukan",
            intro: "Kebutuhan pasti bergantung pada jenis barang. Kami cek bersama Anda saat konsultasi.",
            items: [
                "Invoice",
                "Packing List",
                "Bill of Lading (B/L) atau Air Waybill (AWB)",
                "PIB (impor) atau PEB (ekspor)",
                "Dokumen perizinan khusus bila barang termasuk Lartas (misalnya Persetujuan Import atau Laporan Surveyor)",
            ],
        },
        whyUs: [
            { icon: "zap", text: "Proses cepat" },
            { icon: "wallet", text: "Biaya terjangkau" },
            { icon: "handshake", text: "Pendampingan dari dokumen hingga SPPB terbit" },
        ],
        faqs: [
            {
                q: "Apa bedanya jalur hijau, kuning, dan merah?",
                a: "Jalur Hijau berarti barang dapat langsung dikeluarkan tanpa pemeriksaan fisik. Jalur Kuning memerlukan penelitian dokumen yang lebih mendalam. Jalur Merah berarti barang diperiksa fisik oleh petugas Bea Cukai.",
            },
            {
                q: "Apa itu SPPB?",
                a: "SPPB (Surat Persetujuan Pengeluaran Barang) adalah izin dari Bea Cukai yang menyatakan barang boleh dikeluarkan dan didistribusikan, diterbitkan setelah dokumen valid, pajak dilunasi, dan pemeriksaan selesai.",
            },
            {
                q: "Pajak apa saja yang dibayar saat impor?",
                a: "Umumnya Bea Masuk, PPN, dan PPh Pasal 22, sesuai ketentuan yang berlaku untuk jenis barang Anda. Untuk ekspor, dapat dikenakan bea keluar pada komoditas tertentu.",
            },
            {
                q: "Berapa biaya jasa custom clearance?",
                a: "Biaya bergantung pada jenis barang, volume, dan jalur pemeriksaannya. Hubungi kami untuk estimasi yang transparan setelah konsultasi awal.",
            },
        ],
        related: ["svc-import", "svc-ls"],
        updated: "Oktober 2026",
    },

    "svc-ls": {
        slug: "laporan-surveyor",
        icon: "clipboard-check",
        metaTitle: "Jasa Pengurusan Laporan Surveyor (LS) Impor",
        metaDescription:
            "Pengurusan Laporan Surveyor (LS) untuk impor barang Lartas: verifikasi teknis, HS Code, negara asal, hingga syarat SPPB. Cepat, fleksibel, terjangkau.",
        h1: "Jasa Pengurusan Laporan Surveyor (LS)",
        intro:
            "Untuk banyak barang impor yang diatur Lartas, Laporan Surveyor menjadi syarat agar barang bisa keluar dari kepabeanan. Elkia membantu prosesnya dengan cepat, fleksibel, dan biaya yang terjangkau.",
        facts: [{ label: "Untuk", value: "Importir barang Lartas" }],
        about: {
            heading: "Apa itu Laporan Surveyor (LS)?",
            paragraphs: [
                "Laporan Surveyor (LS) adalah dokumen resmi yang diterbitkan oleh surveyor independen, seperti Sucofindo atau Surveyor Indonesia, yang menyatakan bahwa barang yang diimpor atau diekspor telah diperiksa dan diverifikasi secara teknis di negara asal sebelum dikirim.",
                "LS berfungsi sebagai syarat kepabeanan untuk membuktikan bahwa komoditas impor memenuhi ketentuan regulasi perdagangan, khususnya terkait aturan Lartas (Larangan dan Pembatasan).",
            ],
        },
        sections: [
            {
                heading: "Unsur penting dalam Laporan Surveyor",
                items: [
                    {
                        icon: "clipboard-check",
                        title: "Uji kesesuaian dan spesifikasi",
                        desc: "Memuat jumlah, spesifikasi teknis, tipe, HS Code, hingga status kondisi barang (baru atau bekas).",
                    },
                    {
                        icon: "globe",
                        title: "Negara asal (Country of Origin)",
                        desc: "Memverifikasi bahwa barang benar-benar dimuat dan dikirim dari negara asal yang terdaftar.",
                    },
                    {
                        icon: "flask",
                        title: "Pemeriksaan teknis (VPTI)",
                        desc: "Hasil pemeriksaan fisik, pengemasan, serta pengujian laboratorium jika dipersyaratkan.",
                    },
                ],
            },
            {
                heading: "Mengapa LS diperlukan dalam impor?",
                items: [
                    {
                        icon: "shield-check",
                        title: "Kepatuhan regulasi (Lartas)",
                        desc: "Banyak kategori barang impor mensyaratkan LS agar perizinan impor dapat diterbitkan dan barang dapat memperoleh SPPB dari Bea Cukai.",
                    },
                    {
                        icon: "factory",
                        title: "Perlindungan industri dalam negeri",
                        desc: "Membantu mencegah masuknya barang ilegal, barang sub-standar, atau komoditas yang membahayakan pasar lokal.",
                    },
                    {
                        icon: "file-search",
                        title: "Validasi data pabean",
                        desc: "Membantu Bea Cukai memastikan kecocokan data dokumen (Invoice dan Packing List) dengan fisik barang.",
                    },
                ],
            },
        ],
        whyUs: [
            { icon: "zap", text: "Proses cepat" },
            { icon: "sliders", text: "Fleksibel mengikuti kebutuhan Anda" },
            { icon: "wallet", text: "Biaya terjangkau" },
        ],
        faqs: [
            {
                q: "Apakah semua barang impor wajib memiliki LS?",
                a: "Tidak. LS diwajibkan untuk kelompok barang tertentu yang diatur ketentuan Lartas, dan aturannya dapat berubah. Kami bantu mengecek apakah barang Anda termasuk, saat konsultasi.",
            },
            {
                q: "Siapa yang menerbitkan Laporan Surveyor?",
                a: "Surveyor independen, misalnya Sucofindo atau Surveyor Indonesia, setelah memeriksa dan memverifikasi barang secara teknis.",
            },
            {
                q: "Apa hubungan LS dengan Persetujuan Import (PI)?",
                a: "Untuk sejumlah komoditas, pengajuan Persetujuan Import memerlukan LS atau rekomendasi teknis dari kementerian terkait.",
            },
        ],
        related: ["svc-import", "svc-customs"],
        updated: "Oktober 2026",
    },

    "svc-import": {
        slug: "persetujuan-import",
        icon: "file-check",
        metaTitle: "Jasa Pengurusan Persetujuan Import (PI)",
        metaDescription:
            "Pengurusan Persetujuan Import (PI) Kemendag untuk barang Lartas: NIB/API, LS atau rekomendasi teknis, RIB, via INSW. Cepat, fleksibel, terjangkau.",
        h1: "Jasa Pengurusan Persetujuan Import (PI)",
        intro:
            "Persetujuan Import adalah izin resmi untuk memasukkan barang tertentu ke Indonesia. Elkia membantu pengurusannya dengan cepat, fleksibel, dan biaya yang terjangkau.",
        facts: [{ label: "Diajukan melalui", value: "INSW" }],
        about: {
            heading: "Apa itu Persetujuan Import (PI)?",
            paragraphs: [
                "Persetujuan Import (PI) adalah izin resmi yang diterbitkan oleh Kementerian Perdagangan Republik Indonesia, yang memberikan hak kepada perusahaan (importir) untuk memasukkan barang-barang tertentu ke dalam wilayah pabean Indonesia.",
                "PI merupakan bagian dari instrumen Lartas (Larangan dan Pembatasan) impor untuk mengendalikan arus masuk barang, melindungi industri dalam negeri, serta menjaga kestabilan ekonomi nasional.",
            ],
        },
        sections: [
            {
                heading: "Karakteristik utama Persetujuan Import",
                items: [
                    {
                        icon: "list-checks",
                        title: "Wajib untuk barang tertentu (Lartas)",
                        desc: "Tidak semua barang impor memerlukan PI. Dokumen ini hanya diwajibkan untuk kelompok komoditas yang diatur khusus oleh Peraturan Menteri Perdagangan, misalnya besi/baja, produk tekstil, elektronik, dan bahan pangan tertentu.",
                    },
                    {
                        icon: "calendar-clock",
                        title: "Memiliki masa berlaku dan kuota",
                        desc: "PI diterbitkan dengan batas kuota atau volume barang tertentu dan masa berlaku terbatas, biasanya 6 bulan hingga 1 tahun tergantung komoditas.",
                    },
                ],
            },
        ],
        checklist: {
            heading: "Dokumen persyaratan utama",
            intro: "Pengajuan dilakukan melalui sistem INSW (Indonesia National Single Window). Importir umumnya perlu melengkapi:",
            items: [
                "NIB yang berlaku sebagai Angka Pengenal Importir (API-U untuk umum atau API-P untuk produsen)",
                "Laporan Surveyor (LS) atau rekomendasi teknis dari kementerian terkait (misalnya Kementerian Perindustrian atau Kementerian Pertanian)",
                "Rencana Impor Barang (RIB)",
            ],
        },
        whyUs: [
            { icon: "zap", text: "Proses cepat" },
            { icon: "sliders", text: "Fleksibel mengikuti kebutuhan Anda" },
            { icon: "wallet", text: "Biaya terjangkau" },
        ],
        faqs: [
            {
                q: "Apakah semua barang impor memerlukan Persetujuan Import?",
                a: "Tidak. PI hanya diwajibkan untuk kelompok komoditas tertentu yang diatur dalam Peraturan Menteri Perdagangan. Aturannya dapat berubah, jadi kami bantu mengecek barang Anda saat konsultasi.",
            },
            {
                q: "Berapa lama Persetujuan Import berlaku?",
                a: "PI memiliki masa berlaku terbatas, biasanya 6 bulan hingga 1 tahun tergantung komoditas, dan mencantumkan batas kuota atau volume barang.",
            },
            {
                q: "Apa itu API-U dan API-P?",
                a: "Keduanya adalah Angka Pengenal Importir yang melekat pada NIB: API-U untuk importir umum dan API-P untuk importir produsen.",
            },
            {
                q: "Di mana Persetujuan Import diajukan?",
                a: "Pengajuan dilakukan melalui sistem INSW (Indonesia National Single Window).",
            },
        ],
        related: ["svc-ls", "svc-customs"],
        updated: "Oktober 2026",
    },
};