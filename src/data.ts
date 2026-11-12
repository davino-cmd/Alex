export interface KaryaItem {
  id: string;
  judul: string;
  kategori: string;
  tahun: string;
  ringkasan: string;
  peran: string;
  filosofi: string;
  deskripsiLengkap: string;
  poinKunci: string[];
  kutipanKarya?: string;
}

export interface PrinsipSlowLiving {
  nomor: string;
  judul: string;
  keterangan: string;
  penerapanWeb: string;
}

export const DATA_DAVINO = {
  nama: 'Davino',
  namaLengkap: 'Davino Ervan',
  fokus: 'Membuat Website',
  fokusDeskripsi: 'Merancang website statis yang ringan, bernilai estetika tinggi, dan memberikan ruang bernapas bagi setiap pengunjung.',
  bio: 'Slow Living',
  bioDeskripsi: 'Menghidupi ritme hidup perlahan (slow living). Di tengah derasnya arus digital, saya memilih merawat fokus, menghargai ruang kosong, dan menciptakan karya web yang mindful, terstruktur, dan tahan lama.',
  email: 'davinoervan@gmail.com',
  instagram: 'https://instagram.com/davinoervan',
  instagramHandle: '@davinoervan',
  lokasi: 'Indonesia',
  status: 'Tersedia untuk proyek website berkarakter',
};

export const PRINSIP_SLOW_LIVING: PrinsipSlowLiving[] = [
  {
    nomor: '01',
    judul: 'Kesederhanaan yang Disengaja',
    keterangan: 'Tidak semua ruang harus diisi. Kekosongan bukan kehampaan, melainkan tempat bagi pikiran untuk beristirahat.',
    penerapanWeb: 'Menghindari animasi berlebih, pop-up agresif, dan elemen yang mengaburkan pesan inti.',
  },
  {
    nomor: '02',
    judul: 'Performa Tanpa Beban',
    keterangan: 'Kecepatan sejati lahir dari efisiensi yang tenang, bukan dari sistem yang rumit dan berat.',
    penerapanWeb: 'Arsitektur frontend statis murni yang memuat seketika, hemat baterai, dan ramah lingkungan digital.',
  },
  {
    nomor: '03',
    judul: 'Tipografi sebagai Jiwa',
    keterangan: 'Kata-kata yang dipilih dengan baik layak dibaca dengan tata letak yang penuh penghormatan.',
    penerapanWeb: 'Hierarki huruf yang terukur teliti, kontras tajam, serta kenyamanan membaca di layar kecil maupun besar.',
  },
  {
    nomor: '04',
    judul: 'Warna dengan Makna',
    keterangan: 'Merah untuk keberanian dan aksen, biru untuk kedalaman dan kepercayaan, putih sebagai kanvas kemurnian.',
    penerapanWeb: 'Disiplin proporsi 60-30-10: kanvas putih dominan, struktur biru tenang, dan sentuhan merah penegas.',
  },
];

export const KARYA_TEKS: KaryaItem[] = [
  {
    id: 'nirmala-journal',
    judul: 'Nirmala Journal',
    kategori: 'Editorial & Esai',
    tahun: '2026',
    ringkasan: 'Ruang baca digital minimalis yang merangkum esai-esai kehidupan perlahan, mindfulness, dan hubungan manusia dengan alam.',
    peran: 'Konseptor & Pengembang Web',
    filosofi: 'Membaca tanpa interupsi. Menghadirkan kembali nuansa lembaran kertas bersih ke dalam peramban web modern.',
    deskripsiLengkap: 'Nirmala Journal dirancang khusus sebagai antitesis dari platform berita modern yang dipenuhi banner iklan dan umpan video otomatis. Menggunakan sistem tata letak satu kolom berbasis perbandingan emas (golden ratio), proyek teks ini berfokus pada pengalaman membaca yang mendalam. Tanpa basis data eksternal, halaman dimuat dalam waktu kurang dari 250 milidetik.',
    poinKunci: [
      'Ukuran berkas total di bawah 60KB untuk akses instan',
      'Kontras teks tinggi bersertifikasi WCAG AAA untuk kenyamanan mata',
      'Transisi halaman yang tenang tanpa efek kilat yang melelahkan',
      'Format teks terbuka yang ramah pembaca layar (screen reader)',
    ],
    kutipanKarya: '"Dalam keheningan, kita tidak kehilangan arah; kita justru menemukan apa yang selama ini tertutup oleh kebisingan dunia."',
  },
  {
    id: 'samudra-arsitektur',
    judul: 'Samudra Visual Studio',
    kategori: 'Portofolio Arsitektur',
    tahun: '2025',
    ringkasan: 'Dokumentasi naratif tentang karya studio arsitektur berkelanjutan dengan pendekatan tata ruang bernapas.',
    peran: 'Desainer Antarmuka & Frontend',
    filosofi: 'Ruang fisik yang hening membutuhkan ruang pameran digital yang seirama.',
    deskripsiLengkap: 'Proyek ini mengeksplorasi bagaimana karya arsitektur dapat dikomunikasikan secara murni melalui teks naratif, denah spasial terstruktur, dan catatan proses desain. Menghindari galeri gambar berat yang memperlambat koneksi pengguna, website ini mengutamakan cerita di balik setiap material bangunan, sirkulasi udara, dan cahaya alami.',
    poinKunci: [
      'Struktur tata letak grid asimetris yang dinamis namun rapi',
      'Aksen palet biru laut dalam dan merah bata sebagai identitas material',
      'Tanpa dependensi berat: 100% responsif di ponsel dan desktop',
      'Indeks proyek berbasis kronologi yang mudah ditelusuri',
    ],
    kutipanKarya: '"Sebuah bangunan baru benar-benar hidup ketika penghuninya dapat merasakan perpindahan bayangan matahari."',
  },
  {
    id: 'hening-living',
    judul: 'Hening Living Manifesto',
    kategori: 'Gerakan & Komunitas',
    tahun: '2025',
    ringkasan: 'Manifesto interaktif berisi panduan detoksifikasi digital, ritme pagi yang damai, dan seni berkarya tanpa tergesa-gesa.',
    peran: 'Penulis & Pengembang Mandiri',
    filosofi: 'Melambat bukan berarti tertinggal; melambat adalah cara agar kita tidak kehilangan esensi.',
    deskripsiLengkap: 'Hening Living merupakan karya personal Davino yang memetakan 10 kebiasaan harian untuk menjaga keseimbangan hidup di era hiperkoneksi. Karya ini disajikan dalam bentuk teks berurutan dengan penanda progres membaca yang halus, tipografi kontras tinggi, dan ruang jeda antar bab untuk refleksi pembaca.',
    poinKunci: [
      'Format dokumen berurutan yang dapat disimpan dan dibaca luring (offline)',
      'Pengingat jeda bernapas terintegrasi dalam antarmuka',
      'Palet visual murni: kanvas putih bersih dengan aksen biru dan merah tegas',
      'Struktur semantik HTML5 yang ramah mesin pencari dan arsip digital',
    ],
    kutipanKarya: '"Kualitas karya tidak ditentukan oleh seberapa cepat ia selesai, melainkan seberapa dalam ia dipikirkan."',
  },
  {
    id: 'antologi-sastra',
    judul: 'Arsip Sastra Merdeka',
    kategori: 'Koleksi Teks Budaya',
    tahun: '2024',
    ringkasan: 'Kompilasi kurasi teks sastra dan prosa reflektif kontemporer Indonesia yang dirancang untuk pelestarian literasi digital.',
    peran: 'Kurator Digital & Arsitek Web',
    filosofi: 'Bahasa adalah cermin jiwa suatu bangsa. Akses terhadap kata-kata bermakna harus bebas dari hambatan teknis.',
    deskripsiLengkap: 'Sebuah inisiatif independen yang menyusun arsip tulisan pendek, catatan harian, dan esai budaya. Setiap tulisan disajikan seperti buku berukuran saku di layar, memungkinkan pembaca berganti bab dengan sentuhan lembut atau tombol panah keyboard.',
    poinKunci: [
      'Pengaturan ukuran teks dinamis yang disukai pembaca',
      'Indeks karya yang dapat dicari secara instan di peramban',
      'Waktu respons nol milidetik berkat pemrosesan sisi klien murni',
      'Dukungan tipografi multi-bahasa dengan penekanan aksen Indonesia',
    ],
    kutipanKarya: '"Setiap huruf yang diketik dengan niat tulus akan menemukan pembaca yang tepat pada waktu yang pas."',
  },
  {
    id: 'tipografi-kontemplatif',
    judul: 'Laboratorium Tipografi Davino',
    kategori: 'Eksperimen Desain',
    tahun: '2024',
    ringkasan: 'Eksplorasi mikro-interaksi teks, ritme vertikal baris kata, dan kekuatan kombinasi tiga warna primer (biru, merah, putih).',
    peran: 'Riset Desain & Frontend',
    filosofi: 'Ketika elemen visual direduksi hingga batas minimal, tipografiah yang menjadi juru bicara utama.',
    deskripsiLengkap: 'Sebuah proyek riset pribadi yang menguji keterbacaan teks panjang di berbagai ukuran layar dan pencahayaan lingkungan. Eksperimen ini melahirkan standar desain yang digunakan Davino pada seluruh proyek web buatannya: kontras tinggi, tanpa pill badge buatan, dan penekanan ritme paragraf.',
    poinKunci: [
      'Penerapan skala modular tipografi 1.25 (Major Third)',
      'Uji coba keterbacaan pada 12 perangkat berbeda',
      'Integrasi palet warna merah-biru-putih dengan harmoni rasio 60:30:10',
      'Dokumentasi kode sumber terbuka yang ringkas dan mudah dipelajari',
    ],
    kutipanKarya: '"Desain yang baik adalah ketika tidak ada lagi yang bisa dikurangi tanpa merusak maknanya."',
  },
];
