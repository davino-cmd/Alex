import React, { useState, useEffect } from 'react';
import {
  DATA_DAVINO,
  PRINSIP_SLOW_LIVING,
  KARYA_TEKS,
  KaryaItem,
} from './data';
import {
  ArrowRight,
  ArrowUpRight,
  Copy,
  Check,
  Instagram,
  Mail,
  X,
  Compass,
  Feather,
  Clock,
  Sparkles,
  ChevronUp,
} from 'lucide-react';

export default function App() {
  const [selectedKarya, setSelectedKarya] = useState<KaryaItem | null>(null);
  const [activeKategori, setActiveKategori] = useState<string>('Semua');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [pesanTamu, setPesanTamu] = useState('');
  const [namaTamu, setNamaTamu] = useState('');
  const [statusTerkirim, setStatusTerkirim] = useState(false);
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'Tarik Napas' | 'Tahan' | 'Hembuskan'>('Tarik Napas');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedKarya(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Breathing timer for slow living exercise
  useEffect(() => {
    if (!breathingActive) return;
    const interval = setInterval(() => {
      setBreathingPhase((prev) => {
        if (prev === 'Tarik Napas') return 'Tahan';
        if (prev === 'Tahan') return 'Hembuskan';
        return 'Tarik Napas';
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [breathingActive]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(DATA_DAVINO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleKirimPesan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pesanTamu.trim()) return;
    
    // Direct link to mailto client without server
    const subject = encodeURIComponent(`Pesan dari Website Personal Davino - ${namaTamu || 'Pengunjung'}`);
    const body = encodeURIComponent(
      `Halo Davino,\n\nNama: ${namaTamu || 'Anonim'}\n\nPesan:\n${pesanTamu}\n\n---\nDikirim melalui website personal davino.`
    );
    window.location.href = `mailto:${DATA_DAVINO.email}?subject=${subject}&body=${body}`;
    setStatusTerkirim(true);
    setTimeout(() => {
      setStatusTerkirim(false);
      setPesanTamu('');
      setNamaTamu('');
    }, 4000);
  };

  // Filter karya
  const kategoriList = ['Semua', 'Editorial & Esai', 'Portofolio Arsitektur', 'Gerakan & Komunitas', 'Koleksi Teks Budaya', 'Eksperimen Desain'];
  const filteredKarya = activeKategori === 'Semua' 
    ? KARYA_TEKS 
    : KARYA_TEKS.filter((k) => k.kategori === activeKategori);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* ============================================================== */}
      {/* 1. TOP BAR (3-Zone Contract: Brand — 4-5 Nav Links — 1 Action)  */}
      {/* ============================================================== */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element wordmark, 1 line) */}
          <a
            href="#beranda"
            className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5 whitespace-nowrap shrink-0 group"
          >
            <span className="text-blue-700">DAVINO</span>
            <span className="w-2 h-2 rounded-full bg-red-600 transition-transform group-hover:scale-125" />
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#beranda" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Pembuka
            </a>
            <a href="#tentang" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Tentang Saya
            </a>
            <a href="#karya" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Karya Teks
            </a>
            <a href="#filosofi" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Slow Living
            </a>
            <a href="#tautan" className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0">
              Tautan Publik
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={DATA_DAVINO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <Instagram className="w-3.5 h-3.5 text-white" />
              <span>Instagram Davino</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* ============================================================== */}
        {/* 2. BAGIAN PEMBUKA (HERO SECTION)                                */}
        {/* ============================================================== */}
        <section id="beranda" className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-100 overflow-hidden">
          {/* Subtle architectural background accents with Blue, Red & White */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
                <span className="text-red-600 font-bold">Davino</span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span className="text-blue-700">Fokus: {DATA_DAVINO.fokus}</span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span>Bio: {DATA_DAVINO.bio}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance mb-6">
                Merancang website dengan <span className="text-blue-700">ketenangan</span>, presisi, dan{' '}
                <span className="text-red-600">tujuan yang jelas</span>.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal mb-8 max-w-2xl">
                Halo, saya <strong className="font-semibold text-slate-900">Davino</strong>. Saya mendedikasikan waktu untuk
                membuat website yang memuat seketika, bebas distraksi, dan menghidupi filosofi{' '}
                <em className="not-italic font-medium text-blue-900 bg-blue-50 px-1 py-0.5 rounded-sm">slow living</em>. 
                Sebuah ruang digital yang memberi kenyamanan bernapas bagi pengunjungnya.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#karya"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all hover:translate-y-[-1px] whitespace-nowrap"
                >
                  <span>Jelajahi Karya Teks</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={DATA_DAVINO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-red-50 hover:text-red-700 border border-slate-200 hover:border-red-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  <Instagram className="w-4 h-4 text-red-600" />
                  <span>Instagram @davinoervan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors whitespace-nowrap"
                  title="Salin alamat email Davino"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Email Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Editorial 4-Column Attribute Strip below Hero */}
            <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="space-y-1">
                <span className="text-xs font-mono text-red-600 font-semibold">01. FOKUS UTAMA</span>
                <p className="text-sm font-bold text-slate-900">Pembuatan Website</p>
                <p className="text-xs text-slate-600 leading-snug">Statis, cepat, dan terukur rapi tanpa bloatware.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-blue-700 font-semibold">02. PRINSIP HIDUP</span>
                <p className="text-sm font-bold text-slate-900">Slow Living</p>
                <p className="text-xs text-slate-600 leading-snug">Berkarya dengan kesadaran dan kedalaman makna.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-900 font-semibold">03. IDENTITAS VISUAL</span>
                <p className="text-sm font-bold text-slate-900">Biru, Merah & Putih</p>
                <p className="text-xs text-slate-600 leading-snug">Kontras tegas, tipografi proporsional, tanpa silau.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-red-600 font-semibold">04. KONEKSI PUBLIK</span>
                <p className="text-sm font-bold text-slate-900">Instagram Resmi</p>
                <p className="text-xs text-slate-600 leading-snug">Terbuka untuk diskusi dan kolaborasi web.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. BAGIAN TENTANG SAYA & SLOW LIVING                            */}
        {/* ============================================================== */}
        <section id="tentang" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Story of Davino & Slow Living */}
              <div className="lg:col-span-7 space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest">
                    <span>Tentang Saya</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-red-600">Davino</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                    Mengapa membuat website dengan semangat slow living?
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Dunia internet seringkali dipenuhi desakan untuk selalu serba cepat, riuh, dan dipenuhi notifikasi
                    tanpa henti. Sebagai pembuat website yang menghidupi prinsip <strong className="text-slate-900 font-semibold">slow living</strong>,
                    saya memilih jalan yang berbeda.
                  </p>
                  <p>
                    Bagi saya, sebuah website bukanlah papan reklame yang berteriak meminta perhatian, melainkan sebuah
                    ruang temu yang tenang. Website yang dirancang dengan baik tidak membebani memori peramban, tidak
                    menguras baterai ponsel pembaca, dan menyampaikan gagasan dengan bahasa visual yang bersahaja.
                  </p>
                  <p>
                    Setiap baris kode dan pilihan tipografi saya susun sendiri secara teliti. Tanpa basis data yang rumit,
                    tanpa variabel lingkungan yang rentan, dan dengan arsitektur frontend statis yang mandiri, karya-karya ini
                    dapat diakses kapan saja dengan kepastian performa optimal.
                  </p>
                </div>

                {/* Quote Box with Red & Blue Hairline Border (Anti thick accent bar rule) */}
                <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                  <p className="text-sm sm:text-base font-serif italic text-slate-800 leading-relaxed">
                    &ldquo;Kualitas sebuah karya tidak ditentukan oleh seberapa bising ia dipromosikan, melainkan oleh
                    seberapa tulus ia menjawab kebutuhan manusia yang menggunakannya.&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span className="font-semibold text-slate-800">Davino</span>
                    <span className="text-red-600">Catatan Slow Living</span>
                  </div>
                </div>

                {/* Personal Status Banner */}
                <div className="flex items-center justify-between p-4 bg-blue-50/80 border border-blue-200/60 rounded-lg text-sm text-blue-900">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                    <span><strong>Status Saat Ini:</strong> {DATA_DAVINO.status}</span>
                  </div>
                  <a
                    href="#tautan"
                    className="text-xs font-bold text-red-600 hover:text-red-700 underline underline-offset-4 shrink-0"
                  >
                    Kirim Pesan
                  </a>
                </div>
              </div>

              {/* Right Column: Slow Living Interactive Corner & Profile Card */}
              <div className="lg:col-span-5 space-y-6">
                {/* Profile Identity Card (Blue, Red, White) */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{DATA_DAVINO.nama}</h3>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">Pembuat Website · Kreator Mandiri</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-md border border-red-100">
                      Indonesia
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Fokus Keahlian</span>
                      <span className="font-semibold text-slate-900">{DATA_DAVINO.fokus}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Gaya Hidup</span>
                      <span className="font-semibold text-blue-700">{DATA_DAVINO.bio}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Kanal Publik</span>
                      <a
                        href={DATA_DAVINO.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-red-600 hover:underline flex items-center gap-1"
                      >
                        <span>{DATA_DAVINO.instagramHandle}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-500">Surel</span>
                      <span className="font-mono text-xs text-slate-800">{DATA_DAVINO.email}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive 'Ruang Bernapas' (Breathing Room Exercise for Slow Living) */}
                <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-xs text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-red-600" />
                    <span>Ruang Bernapas Sejenak</span>
                  </div>

                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Luangkan 12 detik untuk melambatkan detak jantung sebelum melanjutkan membaca karya.
                  </p>

                  <div className="py-4 flex flex-col items-center justify-center">
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-1000 border-2 ${
                        breathingActive
                          ? breathingPhase === 'Tarik Napas'
                            ? 'scale-125 bg-blue-100 border-blue-600 text-blue-900'
                            : breathingPhase === 'Tahan'
                            ? 'scale-125 bg-red-100 border-red-600 text-red-900'
                            : 'scale-90 bg-slate-100 border-slate-400 text-slate-700'
                          : 'bg-slate-50 border-slate-300 text-slate-600'
                      }`}
                    >
                      <span className="text-xs font-bold text-center px-1">
                        {breathingActive ? breathingPhase : 'Mulai'}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setBreathingActive(!breathingActive)}
                    className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors ${
                      breathingActive
                        ? 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                        : 'bg-blue-700 text-white hover:bg-blue-800'
                    }`}
                  >
                    {breathingActive ? 'Hentikan Latihan Napas' : 'Mulai Latihan Napas Slow Living'}
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Pilar Prinsip Slow Living Davino */}
            <div id="filosofi" className="mt-20 pt-16 border-t border-slate-200">
              <div className="max-w-2xl mb-10 space-y-2">
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                  Pedoman Berkarya
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Empat Pilar Pembuatan Website Davino
                </h3>
                <p className="text-sm text-slate-600">
                  Bagaimana nilai-nilai slow living diterjemahkan secara nyata ke dalam setiap proyek website.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRINSIP_SLOW_LIVING.map((prinsip) => (
                  <div
                    key={prinsip.nomor}
                    className="bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-sm"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-red-600 px-2 py-0.5 bg-red-50 rounded">
                          {prinsip.nomor}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900">{prinsip.judul}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{prinsip.keterangan}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-blue-700 block mb-1 uppercase tracking-wider">
                        Aplikasi Nyata:
                      </span>
                      <p className="text-xs text-slate-700 leading-snug">{prinsip.penerapanWeb}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. BAGIAN KARYA (TEKS TERKURASI)                                */}
        {/* ============================================================== */}
        <section id="karya" className="py-20 md:py-28 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Karya */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-xl space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest">
                  <span>Katalog Karya</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-red-600">Representasi Teks</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Karya & Konsep Website
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Sebagaimana diminta, karya-karya ini disajikan murni melalui teks yang terstruktur, menonjolkan
                  kedalaman konsep, arsitektur informasi, dan esensi desain tanpa beban berkas media berat.
                </p>
              </div>

              {/* Counter Indicator */}
              <div className="text-right shrink-0">
                <span className="text-2xl font-extrabold text-blue-700">{filteredKarya.length}</span>
                <span className="text-slate-400 text-sm"> / {KARYA_TEKS.length} Karya Teks</span>
              </div>
            </div>

            {/* Interactive Filter Tabs (Segmented Controls - compliant with rule) */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-xl mb-10 w-fit">
              {kategoriList.map((kat) => (
                <button
                  key={kat}
                  type="button"
                  onClick={() => setActiveKategori(kat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    activeKategori === kat
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  {kat}
                </button>
              ))}
            </div>

            {/* Curated Works List / Text Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredKarya.map((karya, index) => (
                <article
                  key={karya.id}
                  onClick={() => setSelectedKarya(karya)}
                  className="group relative bg-white border border-slate-200 hover:border-blue-600 rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Header Row: Category & Year (Anti-Pill: Clean unboxed metadata with separator) */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-700 font-semibold">{karya.kategori}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-500 font-mono">{karya.tahun}</span>
                      </div>
                      <span className="text-red-600 font-mono text-xs font-bold">
                        [0{index + 1}]
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-3">
                      {karya.judul}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {karya.ringkasan}
                    </p>

                    {/* Key points preview */}
                    <div className="space-y-2 mb-6">
                      {karya.poinKunci.slice(0, 2).map((poin, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="text-blue-600 font-bold mt-0.5">—</span>
                          <span>{poin}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Role & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Peran: {karya.peran}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-700 group-hover:text-red-600 transition-colors">
                      <span>Baca Catatan Karya</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Text Note on Karya Representation */}
            <div className="mt-12 p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between flex-wrap gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-blue-700 shrink-0" />
                <span>
                  Setiap karya teks di atas merefleksikan prinsip desain Davino: <strong>statis, nol dependensi server, dan ramah pembaca</strong>.
                </span>
              </div>
              <a
                href={DATA_DAVINO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-600 hover:underline flex items-center gap-1"
              >
                <span>Lihat proses di Instagram</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. BAGIAN TAUTAN PUBLIK & KONTAK                                */}
        {/* ============================================================== */}
        <section id="tautan" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Public Links Highlights */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest">
                    <span>Tautan Publik</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-700">Terhubung</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Mari Berbincang & Terhubung
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Sesuai instruksi, Instagram adalah tautan publik utama saya. Di sana saya membagikan catatan
                    harian mengenai pembuatan website, estetika visual tenang, dan buku-buku slow living yang sedang dibaca.
                  </p>
                </div>

                {/* Primary Instagram Card */}
                <a
                  href={DATA_DAVINO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 sm:p-8 bg-white border-2 border-red-200 hover:border-red-600 rounded-2xl shadow-xs transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Instagram className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider block">
                          Tautan Publik Utama
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                          Instagram Davino
                        </h3>
                        <p className="text-xs text-slate-500 font-mono mt-0.5">{DATA_DAVINO.instagramHandle}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="mt-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    Buka profil Instagram Davino untuk melihat cuplikan kode, pemikiran slow living, dan kirim pesan langsung (DM).
                  </p>
                </a>

                {/* Secondary Contact: Email Card */}
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Surel Langsung</h4>
                        <p className="text-xs font-mono text-slate-500">{DATA_DAVINO.email}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={copyEmailToClipboard}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 hover:border-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Static Client-Side Message Composer */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Kirim Catatan ke Davino</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Website ini 100% statis. Formulir ini secara otomatis akan menyusun surel ke aplikasi email Anda tanpa perantara server.
                    </p>
                  </div>

                  {statusTerkirim && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Aplikasi surel Anda telah dibuka dengan draf pesan ini. Terima kasih!</span>
                    </div>
                  )}

                  <form onSubmit={handleKirimPesan} className="space-y-4">
                    <div>
                      <label htmlFor="nama" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Nama Anda
                      </label>
                      <input
                        id="nama"
                        type="text"
                        value={namaTamu}
                        onChange={(e) => setNamaTamu(e.target.value)}
                        placeholder="Misal: Budi Santoso"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="pesan" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                        Pesan atau Ide Proyek Website
                      </label>
                      <textarea
                        id="pesan"
                        rows={4}
                        value={pesanTamu}
                        onChange={(e) => setPesanTamu(e.target.value)}
                        placeholder="Tuliskan gagasan, pertanyaan tentang slow living, atau ajakan kolaborasi pembuatan website..."
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                        required
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3 px-5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Buka Draf Surel</span>
                      </button>

                      <a
                        href={DATA_DAVINO.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-5 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors flex items-center justify-center gap-2 border border-red-200"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>Kirim via Instagram DM</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================== */}
      {/* 6. MODAL DETAIL KARYA TEKS (Full Reader View)                  */}
      {/* ============================================================== */}
      {selectedKarya && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedKarya(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedKarya(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Tutup jendela karya"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="space-y-2 border-b border-slate-100 pb-4 pr-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-blue-700">{selectedKarya.kategori}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{selectedKarya.tahun}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-red-600">Oleh Davino</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {selectedKarya.judul}
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  Peran: {selectedKarya.peran}
                </p>
              </div>

              {/* Filosofi Dasar */}
              <div className="p-4 bg-blue-50/70 border border-blue-200/60 rounded-xl space-y-1">
                <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block">
                  Filosofi Karya
                </span>
                <p className="text-sm italic font-serif text-slate-800">
                  &ldquo;{selectedKarya.filosofi}&rdquo;
                </p>
              </div>

              {/* Deskripsi Lengkap */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Ulasan Konseptual & Teknis
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedKarya.deskripsiLengkap}
                </p>
              </div>

              {/* Kutipan Karya */}
              {selectedKarya.kutipanKarya && (
                <div className="p-4 bg-slate-50 border-l-2 border-red-600 rounded-r-lg">
                  <p className="text-xs sm:text-sm font-serif italic text-slate-800">
                    {selectedKarya.kutipanKarya}
                  </p>
                </div>
              )}

              {/* Poin Kunci */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Ciri Khas & Keunggulan
                </h4>
                <ul className="space-y-2">
                  {selectedKarya.poinKunci.map((poin, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                      <span>{poin}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Tekan <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] font-mono">ESC</kbd> untuk kembali
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedKarya(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Tutup Tampilan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 7. FOOTER (Clean & Minimalist)                                  */}
      {/* ============================================================== */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-slate-900">
              <span className="text-blue-700">DAVINO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span className="font-normal text-slate-500">·</span>
              <span className="font-normal text-slate-600">Pembuat Website</span>
            </div>
            <p className="text-xs text-slate-500">
              Menghidupi slow living. Dibangun dengan palet biru, merah, dan putih murni.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#beranda" className="hover:text-blue-700 transition-colors">
              Kembali ke Atas
            </a>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <a
              href={DATA_DAVINO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              type="button"
              onClick={copyEmailToClipboard}
              className="hover:text-blue-700 transition-colors"
            >
              Salin Email
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
