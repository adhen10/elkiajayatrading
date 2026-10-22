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
            "Jasa custom clearance impor dan ekspor. Pendampingan dokumen kepabeanan, bea masuk, pajak, dan proses hingga SPPB sesuai jenis barang.",
        h1: "Jasa Custom Clearance Impor & Ekspor",
        intro:
            "Elkia membantu importir dan eksportir meninjau kebutuhan dokumen kepabeanan, bea masuk, pajak, serta tahapan pemeriksaan. Persyaratan dan proses bergantung pada jenis barang dan ketentuan yang berlaku.",
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
            "Jasa pengurusan Laporan Surveyor (LS) impor untuk barang yang dipersyaratkan. Peninjauan HS Code, spesifikasi, negara asal, dan dokumen pendukung.",
        h1: "Jasa Pengurusan Laporan Surveyor (LS)",
        intro:
            "Elkia membantu importir meninjau apakah komoditasnya memerlukan Laporan Surveyor (LS), lalu memetakan informasi teknis dan dokumen awal seperti spesifikasi, HS Code, serta negara asal. Persyaratan bergantung pada jenis barang dan ketentuan yang berlaku.",
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
            },,
            { q: "Berapa biaya jasa pengurusan Laporan Surveyor (LS)?", a: "Biaya bergantung pada jenis komoditas, ruang lingkup pemeriksaan, lokasi, dan persyaratan surveyor yang berlaku. Informasi barang dan dokumen awal perlu ditinjau sebelum estimasi diberikan." }
        ],
        related: ["svc-import", "svc-customs"],
        updated: "Oktober 2026",
    },

    "svc-import": {
        slug: "persetujuan-import",
        icon: "file-check",
        metaTitle: "Jasa Pengurusan Persetujuan Impor (PI)",
        metaDescription:
            "Jasa pengurusan Persetujuan Impor (PI) untuk barang yang diwajibkan. Peninjauan NIB, LS atau rekomendasi teknis, RIB, dan dokumen pendukung.",
        h1: "Jasa Pengurusan Persetujuan Impor (PI)",
        intro:
            "Elkia mendampingi peninjauan kebutuhan Persetujuan Impor (PI) untuk komoditas yang diwajibkan memenuhi ketentuan impor. Kebutuhan NIB, dokumen teknis, LS, RIB, serta jalur pengajuan bergantung pada jenis barang dan aturan yang berlaku.",
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
            },,
            { q: "Berapa biaya jasa pengurusan Persetujuan Impor (PI)?", a: "Biaya bergantung pada jenis komoditas, dokumen teknis, kebutuhan rekomendasi atau Laporan Surveyor, serta ruang lingkup pendampingan. Estimasi diberikan setelah kebutuhan impor ditinjau." }
        ],
        related: ["svc-ls", "svc-customs"],
        updated: "Oktober 2026",
    },

    "svc-nib": {
        slug: "nib-izin-usaha",
        icon: "file-check",
        metaTitle: "Jasa Pengurusan NIB & Izin Usaha melalui OSS",
        metaDescription: "Jasa pengurusan NIB dan izin usaha melalui OSS. Pendampingan KBLI, tingkat risiko, Sertifikat Standar, dan izin tambahan sesuai kegiatan usaha.",
        h1: "Jasa Pengurusan NIB & Izin Usaha",
        intro: "Butuh jasa pengurusan NIB atau izin usaha? Elkia membantu meninjau data pelaku usaha, kesesuaian KBLI, dan kebutuhan perizinan melalui OSS berdasarkan kegiatan serta tingkat risiko usaha.",
        facts: [{ label: "Sistem", value: "OSS Berbasis Risiko" }],
        about: {
            heading: "Apa itu NIB dan perizinan usaha?",
            paragraphs: [
                "Nomor Induk Berusaha (NIB) merupakan identitas pelaku usaha yang diterbitkan melalui sistem Online Single Submission (OSS). NIB menjadi salah satu dasar penting dalam proses perizinan berusaha di Indonesia.",
                "Jenis izin lanjutan bergantung pada kegiatan usaha, tingkat risiko, lokasi, dan ketentuan yang berlaku. Karena itu, data usaha dan Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) perlu ditinjau dengan cermat sebelum pengajuan."
            ]
        },
        steps: {
            heading: "Tahapan pengurusan NIB",
            intro: "Kami membantu memetakan kebutuhan dan mendampingi persiapan pengajuan.",
            items: [
                { icon: "messages-square", title: "Konsultasi usaha", desc: "Mengenali bentuk usaha, kegiatan utama, lokasi, dan kebutuhan legalitas yang ingin dipenuhi." },
                { icon: "clipboard-list", title: "Pemeriksaan data dan KBLI", desc: "Meninjau data pelaku usaha serta kecocokan KBLI dengan kegiatan yang benar-benar dijalankan." },
                { icon: "file-check", title: "Pengajuan melalui OSS", desc: "Mendampingi pengisian data dan proses penerbitan NIB serta perizinan lanjutan yang dipersyaratkan." },
                { icon: "badge-check", title: "Pemeriksaan hasil", desc: "Memeriksa dokumen yang terbit dan menjelaskan langkah berikutnya jika ada kewajiban tambahan." }
            ]
        },
        sections: [
            {
                heading: "Hal yang perlu diperiksa",
                items: [
                    { icon: "list-checks", title: "Kesesuaian KBLI", desc: "Kode bidang usaha harus menggambarkan kegiatan yang dijalankan dan dapat memengaruhi perizinan yang dibutuhkan." },
                    { icon: "shield-check", title: "Tingkat risiko usaha", desc: "Kegiatan dengan tingkat risiko berbeda dapat memerlukan persyaratan seperti Sertifikat Standar atau izin tambahan." },
                    { icon: "map-pin", title: "Lokasi dan data usaha", desc: "Alamat, skala usaha, serta informasi pendukung perlu sesuai dengan kondisi dan dokumen usaha." }
                ]
            }
        ],
        checklist: {
            heading: "Data yang umumnya diperlukan",
            intro: "Daftar akhir bergantung pada bentuk usaha dan kegiatan yang didaftarkan.",
            items: [
                "Data identitas pemilik atau penanggung jawab",
                "Nama, alamat, dan kontak usaha",
                "Informasi kegiatan usaha yang dijalankan",
                "Pilihan KBLI yang sesuai dengan kegiatan usaha",
                "Data pendukung perusahaan atau badan usaha, jika relevan"
            ]
        },
        whyUs: [
            { icon: "messages-square", text: "Pendampingan sesuai kebutuhan usaha" },
            { icon: "clipboard-check", text: "Pemeriksaan data sebelum pengajuan" },
            { icon: "route", text: "Penjelasan langkah legalitas berikutnya" }
        ],
        faqs: [
            { q: "Apakah semua usaha membutuhkan NIB?", a: "NIB merupakan identitas pelaku usaha dalam sistem OSS. Kewajiban dan tahapan perizinan yang perlu dipenuhi mengikuti bentuk usaha, kegiatan, serta ketentuan yang berlaku." },
            { q: "Apakah NIB sudah cukup untuk menjalankan semua usaha?", a: "Belum tentu. Berdasarkan kegiatan dan tingkat risikonya, usaha dapat memerlukan Sertifikat Standar, izin, atau persyaratan tambahan." },
            { q: "Apa itu KBLI?", a: "KBLI adalah klasifikasi kegiatan ekonomi yang digunakan untuk mengidentifikasi bidang usaha. Pemilihannya perlu sesuai dengan aktivitas usaha yang sebenarnya." },
            { q: "Bisakah Elkia membantu mengecek izin yang dibutuhkan?", a: "Ya. Kami dapat membantu meninjau informasi awal usaha dan memetakan kebutuhan perizinan untuk dikonfirmasi berdasarkan ketentuan yang berlaku." },
            { q: "Berapa biaya jasa pengurusan NIB dan izin usaha?", a: "Biaya pendampingan bergantung pada bentuk usaha, jumlah dan jenis kegiatan, kondisi data OSS, serta izin tambahan yang diperlukan. Kebutuhan akan ditinjau terlebih dahulu sebelum estimasi diberikan." }
        ],
        related: ["svc-pirt", "svc-halal", "svc-bpom"],
        updated: "Oktober 2026"
    },

    "svc-pirt": {
        slug: "izin-pirt",
        icon: "clipboard-check",
        metaTitle: "Jasa Pengurusan Izin PIRT (SPP-IRT) untuk Produk Pangan",
        metaDescription: "Jasa pengurusan izin PIRT (SPP-IRT) untuk pangan rumahan yang memenuhi kriteria. Bantuan meninjau produk, label, data, dan persyaratan.",
        h1: "Jasa Pengurusan Izin PIRT",
        intro: "Elkia membantu pelaku usaha pangan rumahan meninjau apakah produknya sesuai kriteria SPP-IRT (izin PIRT), menyiapkan data dan label awal, serta memahami tahapan pengajuan. Jalur perizinan ditentukan berdasarkan karakteristik produk dan ketentuan yang berlaku.",
        facts: [{ label: "Untuk", value: "Pangan olahan yang memenuhi kriteria SPP-IRT" }],
        about: {
            heading: "Apa itu PIRT?",
            paragraphs: [
                "Istilah PIRT umum digunakan untuk perizinan pangan industri rumah tangga. Dalam sistem perizinan pangan, Sertifikat Produksi Pangan Industri Rumah Tangga (SPP-IRT) ditujukan bagi jenis pangan olahan tertentu yang memenuhi kriteria yang ditetapkan.",
                "Tidak semua produk pangan dapat menggunakan jalur SPP-IRT. Jenis produk, cara pengolahan, masa simpan, kemasan, dan ketentuan instansi berwenang perlu diperiksa untuk menentukan apakah jalur ini sesuai atau produk perlu didaftarkan melalui BPOM."
            ]
        },
        steps: {
            heading: "Tahapan pendampingan PIRT",
            intro: "Kebutuhan setiap produk akan ditinjau sebelum proses pengajuan.",
            items: [
                { icon: "messages-square", title: "Identifikasi produk", desc: "Mendata jenis pangan, proses produksi, kemasan, dan informasi label yang tersedia." },
                { icon: "search-check", title: "Pemeriksaan jalur izin", desc: "Meninjau apakah produk termasuk kategori yang dapat mengajukan SPP-IRT atau perlu jalur perizinan lain." },
                { icon: "clipboard-list", title: "Persiapan persyaratan", desc: "Membantu menyusun data dan dokumen pendukung serta mengidentifikasi pelatihan atau komitmen yang mungkin diwajibkan." },
                { icon: "file-check", title: "Pendampingan pengajuan", desc: "Mendampingi proses sesuai mekanisme instansi berwenang dan membantu meninjau hasil pengajuan." }
            ]
        },
        sections: [
            {
                heading: "Hal penting sebelum mengajukan",
                items: [
                    { icon: "package-check", title: "Kategori produk", desc: "Pastikan jenis pangan dan proses produksinya sesuai dengan kriteria jalur SPP-IRT." },
                    { icon: "tag", title: "Label dan informasi produk", desc: "Nama produk, komposisi, berat bersih, produsen, dan informasi lain perlu ditinjau sesuai ketentuan yang berlaku." },
                    { icon: "shield-check", title: "Keamanan pangan", desc: "Pelaku usaha perlu memahami persyaratan higiene, sanitasi, dan komitmen keamanan pangan yang relevan." }
                ]
            }
        ],
        checklist: {
            heading: "Data yang umumnya diperlukan",
            intro: "Persyaratan akhir mengikuti jenis produk dan mekanisme pengajuan di daerah masing-masing.",
            items: [
                "Identitas pemilik atau penanggung jawab usaha",
                "NIB dan data usaha yang relevan",
                "Informasi jenis, komposisi, dan proses produksi pangan",
                "Rancangan label atau kemasan produk",
                "Data lokasi produksi dan dokumen pendukung yang dipersyaratkan"
            ]
        },
        whyUs: [
            { icon: "search-check", text: "Pengecekan awal kategori produk" },
            { icon: "clipboard-list", text: "Pendampingan persiapan dokumen" },
            { icon: "messages-square", text: "Penjelasan jalur izin yang sesuai" }
        ],
        faqs: [
            { q: "Apakah semua makanan rumahan bisa mendapatkan PIRT?", a: "Tidak. SPP-IRT hanya berlaku untuk jenis pangan olahan yang memenuhi kriteria. Kategori produk dan cara produksinya perlu diperiksa terlebih dahulu." },
            { q: "Apakah produk yang tidak memenuhi kriteria PIRT bisa didaftarkan ke BPOM?", a: "Sebagian produk memang perlu mengikuti jalur perizinan BPOM atau ketentuan lain yang berlaku. Penentuan jalurnya bergantung pada karakteristik produk." },
            { q: "Apakah label produk perlu disiapkan?", a: "Informasi label merupakan bagian penting yang perlu ditinjau. Rincian yang wajib dicantumkan bergantung pada jenis pangan dan aturan yang berlaku." },
            { q: "Berapa lama pengurusan PIRT?", a: "Waktu proses bergantung pada kelengkapan data, pemenuhan persyaratan, dan proses instansi berwenang. Estimasi lebih tepat diberikan setelah produk ditinjau." },
            { q: "Berapa biaya jasa pengurusan PIRT atau SPP-IRT?", a: "Biaya bergantung pada kondisi produk, kelengkapan dokumen, dan ruang lingkup pendampingan. Kelayakan produk terhadap kriteria SPP-IRT perlu ditinjau terlebih dahulu." }
        ],
        related: ["svc-nib", "svc-halal", "svc-bpom"],
        updated: "Oktober 2026"
    },

    "svc-halal": {
        slug: "sertifikasi-halal",
        icon: "shield-check",
        metaTitle: "Jasa Pendampingan Sertifikasi Halal BPJPH",
        metaDescription: "Jasa pendampingan sertifikasi halal. Peninjauan bahan, proses produk halal, dan dokumen sesuai jalur serta kriteria yang berlaku.",
        h1: "Jasa Pendampingan Sertifikasi Halal",
        intro: "Elkia mendampingi persiapan sertifikasi halal dengan meninjau bahan, proses produk halal, dan dokumen usaha. Jalur pengajuan serta persyaratan bergantung pada jenis produk, skema yang memenuhi kriteria, dan ketentuan yang berlaku.",
        facts: [{ label: "Fokus", value: "Bahan dan proses produk halal" }],
        about: {
            heading: "Apa itu sertifikasi halal?",
            paragraphs: [
                "Sertifikat halal merupakan pengakuan resmi bahwa suatu produk telah memenuhi ketentuan kehalalan sesuai proses pemeriksaan dan penetapan yang berlaku. Di Indonesia, penyelenggaraan sertifikasi halal melibatkan BPJPH serta pihak pemeriksa dan penetapan halal sesuai jalur yang digunakan.",
                "Persyaratan dan jalur pengajuan dapat berbeda menurut jenis produk, skala usaha, bahan, serta proses produksinya. Pendampingan membantu pelaku usaha menyiapkan informasi dengan lebih rapi, tetapi penerbitan sertifikat tetap mengikuti evaluasi pihak berwenang."
            ]
        },
        steps: {
            heading: "Tahapan pendampingan sertifikasi halal",
            intro: "Tahap awal berfokus pada pemetaan produk, bahan, dan proses usaha.",
            items: [
                { icon: "messages-square", title: "Konsultasi dan pemetaan", desc: "Mengidentifikasi produk, skala usaha, bahan, pemasok, dan proses produksi." },
                { icon: "clipboard-list", title: "Pemeriksaan bahan dan dokumen", desc: "Menyusun daftar bahan, bukti pendukung, serta informasi proses produk halal yang diperlukan." },
                { icon: "file-check", title: "Persiapan pengajuan", desc: "Mendampingi persiapan data dan pengajuan melalui jalur yang sesuai, termasuk memeriksa apakah skema pernyataan pelaku usaha dapat digunakan." },
                { icon: "badge-check", title: "Tindak lanjut pemeriksaan", desc: "Membantu menindaklanjuti permintaan perbaikan atau informasi tambahan hingga proses selesai sesuai keputusan pihak berwenang." }
            ]
        },
        sections: [
            {
                heading: "Komponen penting dalam persiapan",
                items: [
                    { icon: "flask-conical", title: "Bahan dan pemasok", desc: "Data bahan baku, bahan tambahan, serta dokumen pendukungnya perlu dicatat dan ditinjau." },
                    { icon: "factory", title: "Proses produksi", desc: "Alur penerimaan, penyimpanan, pengolahan, dan penanganan produk perlu dijelaskan sesuai kondisi nyata." },
                    { icon: "file-text", title: "Dokumen usaha dan produk", desc: "Informasi pelaku usaha, daftar produk, serta dokumen lain disiapkan berdasarkan skema yang berlaku." }
                ]
            }
        ],
        checklist: {
            heading: "Data awal yang perlu disiapkan",
            intro: "Dokumen final ditentukan setelah kategori usaha dan jalur sertifikasi diperiksa.",
            items: [
                "Data pelaku usaha dan NIB",
                "Daftar produk yang akan diajukan",
                "Daftar bahan baku dan bahan tambahan",
                "Informasi pemasok serta dokumen pendukung bahan yang tersedia",
                "Ringkasan proses produksi dan fasilitas yang digunakan"
            ]
        },
        whyUs: [
            { icon: "clipboard-check", text: "Bantuan merapikan dokumen awal" },
            { icon: "messages-square", text: "Penjelasan pilihan jalur pengajuan" },
            { icon: "route", text: "Pendampingan tindak lanjut proses" }
        ],
        faqs: [
            { q: "Apakah semua usaha dapat menggunakan jalur self-declare?", a: "Tidak. Skema pernyataan pelaku usaha hanya dapat digunakan apabila usaha dan produknya memenuhi kriteria serta persyaratan yang berlaku. Kelayakan perlu diperiksa terlebih dahulu." },
            { q: "Apakah sertifikat halal pasti terbit setelah mengajukan?", a: "Tidak otomatis. Penerbitan mengikuti pemeriksaan, pemenuhan persyaratan, dan keputusan pihak berwenang sesuai jalur sertifikasi." },
            { q: "Apakah daftar bahan perlu disiapkan?", a: "Ya, informasi bahan dan dokumen pendukungnya merupakan bagian penting dalam penilaian. Kebutuhan rinci bergantung pada produk dan bahan yang digunakan." },
            { q: "Berapa lama proses sertifikasi halal?", a: "Waktunya bergantung pada jalur pengajuan, kelengkapan dokumen, proses pemeriksaan, dan tindak lanjut yang diperlukan. Estimasi diberikan setelah peninjauan awal." },
            { q: "Berapa biaya pendampingan sertifikasi halal?", a: "Biaya dan kebutuhan proses bergantung pada jenis usaha, kategori produk, jalur sertifikasi yang memenuhi kriteria, serta ruang lingkup pendampingan. Estimasi diberikan setelah peninjauan awal." }
        ],
        related: ["svc-nib", "svc-pirt", "svc-bpom"],
        updated: "Oktober 2026"
    },

    "svc-bpom": {
        slug: "izin-bpom",
        icon: "shield-check",
        metaTitle: "Jasa Pengurusan Izin BPOM & Registrasi Produk",
        metaDescription: "Jasa pengurusan izin BPOM untuk pangan olahan, kosmetik, suplemen, dan obat tradisional. Elkia membantu meninjau kategori produk, label, komposisi, dan dokumen awal.",
        h1: "Jasa Pengurusan Izin BPOM",
        intro: "Elkia mendampingi persiapan pengurusan izin dan registrasi BPOM untuk pangan olahan, kosmetik, suplemen, dan obat tradisional. Kami membantu meninjau kategori produk, komposisi, label, serta dokumen awal. Jalur dan persyaratan ditentukan berdasarkan karakteristik produk dan ketentuan yang berlaku.",
        facts: [{ label: "Untuk", value: "Produk yang wajib terdaftar di BPOM" }],
        about: {
            heading: "Kapan produk membutuhkan izin BPOM?",
            paragraphs: [
                "BPOM mengawasi berbagai kategori produk, termasuk pangan olahan tertentu, kosmetik, obat tradisional, dan suplemen kesehatan. Bentuk persetujuan atau registrasi yang diperlukan tidak sama untuk setiap kategori.",
                "Kebutuhan izin ditentukan oleh jenis produk, komposisi, klaim, bentuk sediaan, proses produksi, dan status produk dalam negeri atau impor. Peninjauan awal membantu menentukan jalur registrasi serta dokumen teknis yang perlu disiapkan."
            ]
        },
        steps: {
            heading: "Tahapan pendampingan registrasi BPOM",
            intro: "Alur dan persyaratan rinci akan disesuaikan dengan kategori produk.",
            items: [
                { icon: "search-check", title: "Identifikasi kategori produk", desc: "Meninjau jenis, komposisi, bentuk produk, klaim, produsen, dan status produk." },
                { icon: "clipboard-list", title: "Audit data dan dokumen", desc: "Memeriksa data perusahaan, formula atau komposisi, spesifikasi, label, dan dokumen pendukung yang tersedia." },
                { icon: "file-check", title: "Persiapan pengajuan", desc: "Mendampingi penyusunan data untuk jalur registrasi yang relevan dan proses pengajuan sesuai ketentuan." },
                { icon: "messages-square", title: "Tindak lanjut evaluasi", desc: "Membantu mengorganisasi tanggapan atau perbaikan data apabila diminta selama evaluasi." }
            ]
        },
        sections: [
            {
                heading: "Kategori produk yang dapat ditinjau",
                items: [
                    { icon: "package", title: "Pangan olahan", desc: "Menentukan apakah produk memerlukan registrasi BPOM atau dapat mengikuti jalur perizinan pangan lain berdasarkan kriterianya." },
                    { icon: "sparkles", title: "Kosmetik", desc: "Meninjau kebutuhan notifikasi kosmetik, data produk, penanggung jawab, dan informasi label." },
                    { icon: "pill", title: "Suplemen dan obat tradisional", desc: "Memetakan persyaratan registrasi berdasarkan kategori, komposisi, klaim, dan bentuk produk." }
                ]
            }
        ],
        checklist: {
            heading: "Dokumen awal yang umumnya ditinjau",
            intro: "Daftar pasti tidak sama untuk setiap kategori dan jalur registrasi.",
            items: [
                "Data perusahaan dan legalitas usaha yang relevan",
                "Identitas produsen serta status produk dalam negeri atau impor",
                "Komposisi, spesifikasi, dan informasi teknis produk",
                "Rancangan label serta klaim yang digunakan",
                "Dokumen pendukung lain sesuai kategori produk"
            ]
        },
        whyUs: [
            { icon: "search-check", text: "Pemetaan jalur berdasarkan kategori produk" },
            { icon: "clipboard-check", text: "Pemeriksaan kelengkapan data awal" },
            { icon: "messages-square", text: "Pendampingan tindak lanjut evaluasi" }
        ],
        faqs: [
            { q: "Apakah semua produk pangan wajib terdaftar di BPOM?", a: "Tidak selalu melalui jalur yang sama. Sebagian produk dapat masuk kategori SPP-IRT jika memenuhi kriteria, sedangkan produk lain memerlukan registrasi BPOM atau izin yang relevan." },
            { q: "Apakah izin BPOM sama untuk kosmetik dan pangan?", a: "Tidak. Kategori produk memiliki mekanisme, data teknis, dan persyaratan yang berbeda. Jalur harus ditentukan berdasarkan karakteristik produk." },
            { q: "Berapa lama registrasi BPOM?", a: "Durasi bergantung pada kategori produk, jenis pengajuan, kelengkapan dokumen, dan evaluasi. Estimasi sebaiknya diberikan setelah data produk ditinjau." },
            { q: "Apakah label dan klaim produk ikut diperiksa?", a: "Informasi label dan klaim merupakan bagian yang perlu ditinjau karena harus sesuai dengan kategori dan ketentuan yang berlaku." },
            { q: "Berapa biaya jasa pengurusan izin BPOM?", a: "Biaya bergantung pada kategori produk, jalur registrasi, kelengkapan dokumen, dan ruang lingkup pendampingan yang diperlukan. Hubungi Elkia untuk meninjau kebutuhan produk dan memperoleh estimasi yang sesuai." },
            { q: "Apakah Elkia melayani jasa urus BPOM untuk produk impor?", a: "Elkia dapat membantu meninjau kebutuhan registrasi untuk produk dalam negeri maupun impor. Jalur pengajuan serta dokumen yang diperlukan bergantung pada kategori produk, status produk, dan ketentuan yang berlaku." }
        ],
        related: ["svc-pirt", "svc-halal", "svc-izinedar"],
        updated: "Oktober 2026"
    },

    "svc-izinedar": {
        slug: "izin-edar-produk",
        icon: "badge-check",
        metaTitle: "Jasa Pengurusan Izin Edar Produk Alkes & PKRT",
        metaDescription: "Jasa pengurusan izin edar alat kesehatan dan PKRT. Bantuan memetakan instansi, jalur perizinan, dan dokumen sesuai kategori produk.",
        h1: "Jasa Pengurusan Izin Edar Produk",
        intro: "Elkia membantu pelaku usaha mengidentifikasi kebutuhan izin edar berdasarkan fungsi dan kategori produk, termasuk alat kesehatan, PKRT, serta dokumen impor terkait. Instansi, jalur, dan persyaratan disesuaikan dengan ketentuan yang berlaku.",
        facts: [{ label: "Fokus", value: "Identifikasi jalur izin edar" }],
        about: {
            heading: "Apa yang dimaksud izin edar produk?",
            paragraphs: [
                "Izin edar adalah persetujuan atau registrasi yang diwajibkan bagi kategori produk tertentu sebelum dapat diedarkan. Instansi dan jenis dokumennya bergantung pada kategori produk, misalnya alat kesehatan dan PKRT yang berada dalam ranah Kementerian Kesehatan, atau produk tertentu yang terkait dengan BPOM.",
                "Produk impor juga dapat membutuhkan dokumen tambahan, seperti persetujuan impor atau surat keterangan impor sesuai kategori dan ketentuan yang berlaku. Karena itu, identifikasi kategori produk menjadi langkah awal yang penting."
            ]
        },
        steps: {
            heading: "Tahapan pendampingan izin edar",
            intro: "Proses disusun berdasarkan kategori dan status produk.",
            items: [
                { icon: "package-search", title: "Identifikasi produk", desc: "Meninjau fungsi, penggunaan, spesifikasi, produsen, dan status produk dalam negeri atau impor." },
                { icon: "route", title: "Pemetaan instansi dan jalur", desc: "Menentukan instansi dan jenis perizinan yang relevan berdasarkan kategori produk." },
                { icon: "clipboard-list", title: "Persiapan dokumen", desc: "Membantu memeriksa data teknis, dokumen produsen, label, dan dokumen legalitas yang dipersyaratkan." },
                { icon: "file-check", title: "Pengajuan dan tindak lanjut", desc: "Mendampingi persiapan pengajuan dan pengorganisasian tindak lanjut jika terdapat permintaan tambahan." }
            ]
        },
        sections: [
            {
                heading: "Kategori yang perlu ditinjau",
                items: [
                    { icon: "heart-pulse", title: "Alat kesehatan", desc: "Kebutuhan izin ditentukan oleh klasifikasi, tujuan penggunaan, produsen, dan status produk." },
                    { icon: "spray-can", title: "PKRT", desc: "Produk Perbekalan Kesehatan Rumah Tangga perlu diperiksa berdasarkan jenis dan penggunaan yang dimaksud." },
                    { icon: "ship", title: "Produk impor tertentu", desc: "Produk impor dapat memerlukan dokumen tambahan, termasuk dokumen impor atau persyaratan dari instansi pengawas terkait." }
                ]
            }
        ],
        checklist: {
            heading: "Informasi awal yang perlu disiapkan",
            intro: "Persyaratan final akan disesuaikan dengan klasifikasi dan jalur perizinan produk.",
            items: [
                "Nama produk, fungsi, dan tujuan penggunaan",
                "Identitas produsen dan negara asal, jika produk impor",
                "Spesifikasi teknis, katalog, atau petunjuk penggunaan",
                "Label dan dokumen pendukung produk",
                "Data importir atau distributor serta legalitas usaha yang relevan"
            ]
        },
        whyUs: [
            { icon: "route", text: "Pemetaan jalur izin sesuai kategori" },
            { icon: "clipboard-check", text: "Pemeriksaan dokumen awal" },
            { icon: "messages-square", text: "Pendampingan proses secara terkoordinasi" }
        ],
        faqs: [
            { q: "Apakah semua produk memerlukan izin edar?", a: "Tidak semua produk mengikuti kewajiban yang sama. Kebutuhan izin ditentukan oleh kategori, tujuan penggunaan, dan peraturan yang berlaku." },
            { q: "Apakah izin edar alat kesehatan sama dengan izin PKRT?", a: "Tidak. Keduanya memiliki klasifikasi dan persyaratan yang berbeda sehingga perlu diidentifikasi terlebih dahulu." },
            { q: "Apa itu SKI BPOM?", a: "SKI merupakan dokumen keterangan impor BPOM untuk kategori produk yang berada dalam kewenangannya dan memenuhi ketentuan terkait. Kebutuhannya bergantung pada kategori serta status produk." },
            { q: "Bisakah pengurusan dimulai sebelum semua dokumen lengkap?", a: "Konsultasi dan pemetaan kebutuhan dapat dimulai dengan informasi awal. Pengajuan resmi baru dapat dipersiapkan setelah persyaratan yang diwajibkan dipenuhi." },
            { q: "Berapa biaya pengurusan izin edar produk?", a: "Biaya bergantung pada kategori produk, instansi yang berwenang, jenis pengajuan, dan kelengkapan dokumen. Kebutuhan produk perlu diidentifikasi sebelum estimasi diberikan." }
        ],
        related: ["svc-bpom", "svc-import", "svc-customs"],
        updated: "Oktober 2026"
    },

    "svc-haki": {
        slug: "hak-kekayaan-intelektual",
        icon: "copyright",
        metaTitle: "Jasa Pendaftaran Merek & Pendampingan HAKI",
        metaDescription: "Jasa pendaftaran merek dan pendampingan HAKI. Pemetaan kebutuhan hak cipta atau paten serta persiapan dokumen sesuai jenis perlindungan.",
        h1: "Jasa Pendampingan Hak Kekayaan Intelektual",
        intro: "Elkia menyediakan pendampingan awal untuk pendaftaran merek serta pemetaan kebutuhan perlindungan HAKI, termasuk hak cipta atau paten. Jenis perlindungan, pemeriksaan, dan dokumen disesuaikan dengan objek yang ingin dilindungi.",
        facts: [{ label: "Fokus", value: "Merek, hak cipta, dan paten" }],
        about: {
            heading: "Apa itu Hak Kekayaan Intelektual?",
            paragraphs: [
                "Hak Kekayaan Intelektual (HKI atau HAKI) mencakup beberapa jenis perlindungan hukum, antara lain merek untuk membedakan barang atau jasa, hak cipta untuk karya yang dilindungi, serta paten untuk invensi yang memenuhi persyaratan.",
                "Setiap jenis perlindungan memiliki kriteria, prosedur, dan dokumen yang berbeda. Peninjauan awal membantu menentukan jenis permohonan yang relevan dan mengurangi risiko memilih jalur yang tidak sesuai."
            ]
        },
        steps: {
            heading: "Tahapan pendampingan HAKI",
            intro: "Jenis perlindungan dipilih berdasarkan objek yang ingin dilindungi.",
            items: [
                { icon: "messages-square", title: "Konsultasi objek perlindungan", desc: "Mengidentifikasi apakah kebutuhan berkaitan dengan nama atau logo merek, karya, atau invensi." },
                { icon: "search-check", title: "Pemeriksaan awal data", desc: "Meninjau informasi pemilik, contoh objek, kategori barang atau jasa, serta dokumen pendukung." },
                { icon: "clipboard-list", title: "Persiapan permohonan", desc: "Membantu menyiapkan data dan dokumen sesuai jenis perlindungan serta mekanisme yang berlaku." },
                { icon: "file-check", title: "Pengajuan dan pemantauan", desc: "Mendampingi proses administrasi dan membantu menindaklanjuti pemberitahuan dari instansi terkait." }
            ]
        },
        sections: [
            {
                heading: "Jenis perlindungan yang perlu dibedakan",
                items: [
                    { icon: "badge-check", title: "Merek", desc: "Melindungi tanda pembeda barang atau jasa. Pemeriksaan awal nama dan kelas barang atau jasa dapat membantu menyiapkan permohonan." },
                    { icon: "copyright", title: "Hak cipta", desc: "Berkaitan dengan karya di bidang ilmu pengetahuan, seni, dan sastra. Jenis karya dan kepemilikan perlu dijelaskan." },
                    { icon: "lightbulb", title: "Paten", desc: "Berkaitan dengan invensi yang memenuhi persyaratan paten. Informasi teknis dan status pengungkapan invensi perlu ditinjau secara cermat." }
                ]
            }
        ],
        checklist: {
            heading: "Informasi awal yang umumnya diperlukan",
            intro: "Dokumen berbeda untuk merek, hak cipta, dan paten; daftar berikut merupakan titik awal konsultasi.",
            items: [
                "Identitas pemohon atau badan usaha",
                "Nama, logo, atau contoh objek yang akan dilindungi",
                "Kategori barang atau jasa untuk permohonan merek, jika relevan",
                "Bukti kepemilikan atau dokumen pendukung objek",
                "Uraian karya atau invensi untuk jenis perlindungan yang sesuai"
            ]
        },
        whyUs: [
            { icon: "search-check", text: "Pemetaan jenis perlindungan yang tepat" },
            { icon: "clipboard-check", text: "Pendampingan persiapan dokumen" },
            { icon: "messages-square", text: "Penjelasan tahapan administrasi" }
        ],
        faqs: [
            { q: "Apakah merek, hak cipta, dan paten itu sama?", a: "Tidak. Merek melindungi tanda pembeda barang atau jasa, hak cipta melindungi karya yang termasuk cakupannya, sedangkan paten berkaitan dengan invensi yang memenuhi persyaratan." },
            { q: "Apakah pendaftaran merek pasti diterima?", a: "Tidak. Permohonan dapat melalui pemeriksaan dan dapat menghadapi keberatan atau penolakan berdasarkan ketentuan yang berlaku. Pemeriksaan awal bukan jaminan penerimaan." },
            { q: "Apakah saya perlu mengecek merek sebelum mendaftar?", a: "Pemeriksaan awal terhadap merek yang sudah terdaftar atau permohonan terkait merupakan langkah yang berguna, meskipun hasil pemeriksaan awal bukan jaminan merek akan diterima." },
            { q: "Apakah Elkia dapat membantu semua jenis HAKI?", a: "Kami dapat membantu memetakan kebutuhan awal dan persiapan administrasi. Kelayakan, ruang lingkup pendampingan, serta kebutuhan ahli khusus akan dikonfirmasi saat konsultasi." },
            { q: "Berapa biaya jasa pendaftaran merek atau HAKI?", a: "Biaya bergantung pada jenis perlindungan yang diperlukan, jumlah permohonan atau kelas merek, serta ruang lingkup pendampingan. Rincian estimasi diberikan setelah kebutuhan ditinjau." }
        ],
        related: ["svc-nib", "svc-bpom", "svc-halal"],
        updated: "Oktober 2026"
    }
};