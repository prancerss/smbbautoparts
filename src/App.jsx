import { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import logohome from './assets/logohome.png'
import fotoPerusahaan from './assets/FotoPerusahaan.jpg'
import toyota from './assets/brands/toyota.png'
import honda from './assets/brands/honda.png'
import suzuki from './assets/brands/suzuki.png'
import daihatsu from './assets/brands/daihatsu.png'
import hyundai from './assets/brands/hyundai.png'
import wuling from './assets/brands/wuling.png'
import mitsubishi from './assets/brands/mitsubishi.png'
import mazda from './assets/brands/mazda.png'
import nissan from './assets/brands/nissan.png'
import lampuDepan from './assets/products/lampu-depan.jpg'
import kacaMobil from './assets/products/kaca-mobil.jpg'
import bumper from './assets/products/bumper.jpg'
import spionLampu from './assets/products/spion-lampu.jpg'
import pintuKap from './assets/products/pintu-kap.jpg'
import velgBan from './assets/products/velg-ban.jpg'
import enginePart from './assets/products/engine-part.jpg'
import perlengkapan from './assets/products/perlengkapan.jpg'
import sinarmas from './assets/partners/sinarmas.png'
import multiArthaGuna from './assets/partners/multi-artha-guna.png'
import sahabat from './assets/partners/sahabat.png'
import cakrawala from './assets/partners/cakrawala.png'
import aca from './assets/partners/aca.png'
import totalBersama from './assets/partners/total-bersama.png'
import etiqa from './assets/partners/etiqa.png'
import reliance from './assets/partners/reliance.png'
import mega from './assets/partners/mega.png'
import bosowa from './assets/partners/bosowa.png'
import mpm from './assets/partners/mpm.png'

const slides = [
  { grad: "from-[#0A0A0A] via-[#1a0a0a] to-[#3a0d0d]" },
  { grad: "from-[#120202] via-[#2a0808] to-[#0A0A0A]" },
  { grad: "from-[#1a0a0a] via-[#0A0A0A] to-[#2a0d0d]" },
]
const brandLogos = [
  { name: "Toyota", img: toyota },
  { name: "Honda", img: honda },
  { name: "Suzuki", img: suzuki },
  { name: "Daihatsu", img: daihatsu },
  { name: "Hyundai", img: hyundai },
  { name: "Wuling", img: wuling },
  { name: "Mitsubishi", img: mitsubishi },
  { name: "Mazda", img: mazda },
  { name: "Nissan", img: nissan },
]

const partners = [
  { name: "Asuransi Sinarmas", img: sinarmas },
  { name: "Multi Artha Guna", img: multiArthaGuna },
  { name: "Sahabat", img: sahabat },
  { name: "Cakrawala", img: cakrawala },
  { name: "ACA", img: aca },
  { name: "Total Bersama", img: totalBersama },
  { name: "Etiqa", img: etiqa },
  { name: "Reliance", img: reliance },
  { name: "Mega", img: mega },
  { name: "Bosowa", img: bosowa },
  { name: "MPM", img: mpm },
]

const products = [
  { t: "Lampu Depan Mobil", d: "Headlamp berbagai model dengan pencahayaan terang dan pemasangan presisi.", img: lampuDepan },
  { t: "Kaca Mobil", d: "Kaca depan, samping, dan belakang dengan kualitas tempered sesuai standar keamanan.", img: kacaMobil },
  { t: "Bumper Mobil", d: "Bumper depan dan belakang, material kuat dan tahan benturan ringan.", img: bumper },
  { t: "Spion & Lampu Stop", d: "Kaca spion dan lampu stop original maupun aftermarket berkualitas.", img: spionLampu },
  { t: "Pintu & Kap Mesin", d: "Panel pintu dan kap mesin dengan fitting yang presisi ke rangka kendaraan.", img: pintuKap },
  { t: "Velg & Ban", d: "Pilihan velg dan ban untuk berbagai ukuran dan tipe kendaraan.", img: velgBan },
  { t: "Engine Part", d: "Komponen mesin seperti gasket, timing belt, dan spare part penunjang lainnya.", img: enginePart },
  { t: "Perlengkapan Mobil", d: "Aksesoris dan perlengkapan tambahan untuk kenyamanan berkendara.", img: perlengkapan },
]
const testimonials = [
  { n: "Taurinus", r: "Untuk Suku Cadang Mobil pelayanan dan barang terbaik disini, rekomend banget!", stars: 5 },
  { n: "Roma Ryo", r: "Harganya lumayan bersaing dengan toko yg lain, tidak terlalu menguras kantong lahh Mantappp!!!", stars: 5 },
  { n: "EF", r: "Cari Sparepart Genuine Part terlengkap hanya di sini. Bukan kaleng-kaleng, Sparepart Genuine Part (berarti suku cadang asli yang diproduksi langsung oleh pabrikan resmi kendaraan atau mesin tersebut.)", stars: 5 },
]

const whatsappNumbers = [
  { label: "Sales - Suryadi", number: "6281268913376" },
  { label: "Sales - Taurinus", number: "6282268875179" },
  { label: "Sales - Juanda Prayoga", number: "6281365193617" },
]


function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const items = ["Home", "Tentang", "Brand", "Produk", "Mitra", "Testimoni", "Kontak"]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur border-b border-white/10" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 h-[68px] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="SMBB Autoparts" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex gap-7 text-sm font-semibold tracking-wide font-[Rajdhani] text-gray-300">
          {items.map(i => <a key={i} href={"#" + i.toLowerCase()} className="hover:text-[#D62828] transition-colors">{i.toUpperCase()}</a>)}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl leading-none">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-5 pb-4 flex flex-col gap-3 text-gray-300 font-[Rajdhani] font-semibold">
          {items.map(i => <a key={i} href={"#" + i.toLowerCase()} onClick={() => setOpen(false)} className="py-1">{i.toUpperCase()}</a>)}
        </div>
      )}
    </header>
  )
}

function Home() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])
  return (
    <section id="home" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-black">
      {slides.map((s, idx) => (
        <div key={idx} className={`absolute inset-0 bg-gradient-to-br ${s.grad} fade`} style={{ opacity: idx === i ? 1 : 0 }} />
      ))}
      <div className="absolute -right-24 top-0 bottom-0 w-[60%] skew-x-[-12deg] bg-gradient-to-b from-[#D62828]/25 to-transparent" />
      <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <img src={logohome} alt="SMBB Autoparts" className="w-[420px] sm:w-[500px] mb-6" />
        <h1 className="chrome-text font-[Rajdhani] font-bold uppercase leading-[0.95] text-[clamp(1rem,4.2vw,3.2rem)] tracking-wide whitespace-nowrap">PT Selalu Maju Bersama Batam</h1>
        <p className="text-[#D62828] text-xl md:text-4xl mt-3 font-[Rajdhani] font-bold uppercase tracking-[0.15em]">Your Best Partner</p>
        <a href="#kontak" className="mt-8 inline-block bg-[#D62828] text-white font-[Rajdhani] font-bold uppercase tracking-wide px-7 py-3 w-fit hover:bg-[#b81f1f] transition">Hubungi Kami</a>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => <span key={idx} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-[#D62828]" : "w-1.5 bg-white/30"}`} />)}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="tentang" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="border-l-4 border-[#D62828] rounded-2xl overflow-hidden">
        <img src={fotoPerusahaan} alt="Kantor SMBB Autoparts" className="aspect-[4/3] w-full object-cover pl-4 rounded-2xl" />
      </div>
      <div>
        <p className="text-[#D62828] font-[Rajdhani] font-bold uppercase tracking-widest mb-2">Tentang Kami</p>
        <h2 className="text-3xl font-[Rajdhani] font-bold uppercase mb-4">Your Best Partner</h2>
        <p className="text-[15px] leading-relaxed text-gray-400 mb-4 max-w-[62ch]">SMBB Autoparts hadir sebagai penyedia suku cadang berkualitas di Kota Batam, melayani bengkel dan pelanggan perorangan dengan stok lengkap dan original.</p>
        <p className="text-[15px] leading-relaxed text-gray-400 mb-6 max-w-[62ch]">Kami memilih setiap produk yang sudah sesuai dengan peraturan dan ketentuan yang berlaku.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-[Rajdhani] font-bold uppercase text-white mb-1">Visi</h3>
            <p className="text-sm text-gray-400">Menjadikan perusahaan SMBB AutoParts sebagai perusahaan berkelas di tingkat nasional dengan layanan service terbaik dan bersahabat.</p>
          </div>
          <div>
            <h3 className="font-[Rajdhani] font-bold uppercase text-white mb-1">Misi</h3>
              <p className="text-sm text-gray-400">Memberikan layanan prima dan solusi bernilai tinggi kepada customer kami, sehingga tercipta hubungan yang sangat baik dan berkesinambungan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Brand() {
  const loop = [...brandLogos, ...brandLogos]
  return (
    <section id="brand" className="bg-black border-y border-white/10 py-16 overflow-hidden">
      <p className="text-center text-[#D62828] text-xl font-[Rajdhani] font-semibold uppercase tracking-widest mb-8">Brand yang kami sediakan</p>
      <div className="flex w-max marquee">
        {loop.map((b, idx) => (
          <div key={idx} className="w-[180px] mx-4 h-24 border border-white/10 flex items-center justify-center shrink-0 px-4">
            <img src={b.img} alt={b.name} className="max-h-24 w-auto object-contain opacity-80 hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  )
}

function Product() {
  return (
    <section id="produk" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-[#D62828] font-[Rajdhani] font-bold uppercase tracking-widest mb-2">Katalog</p>
      <h2 className="text-3xl font-[Rajdhani] font-bold uppercase mb-10">Produk Suku Cadang</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, idx) => (
          <div key={idx} className="border border-white/10 overflow-hidden hover:border-[#D62828] transition group">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.t} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <div className="p-5">
              <h3 className="font-[Rajdhani] font-bold uppercase text-lg mb-2">{p.t}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Partner() {
  return (
    <section id="mitra" className="bg-[#0D0D0D] border-y border-white/10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#D62828] font-[Rajdhani] font-bold uppercase tracking-widest mb-2">Kolaborasi</p>
        <h2 className="text-3xl font-[Rajdhani] font-bold uppercase mb-10">Mitra Asuransi</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden border border-white/20 hover:border-[#D62828] rounded-lg px-4 py-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#f5f5f5",
                backgroundImage: `
                  repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 8px),
                  linear-gradient(160deg, #D62828 10%, #e8e8e8 60%)
                `,
              }}
            >
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#D62828]/10 rounded-full blur-2xl group-hover:bg-[#D62828]/20 transition-colors" />
              <img
                src={p.img}
                alt={p.name}
                className="relative h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="relative font-[Rajdhani] font-semibold text-gray-700 group-hover:text-black text-xs text-center tracking-wide transition-colors">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stars({ n }) {
  return <div className="text-[#D62828] text-sm mb-3">{"★".repeat(n)}{"☆".repeat(5 - n)}</div>
}

function Testimoni() {
  return (
    <section id="testimoni" className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-[#D62828] font-[Rajdhani] font-bold uppercase tracking-widest mb-2">Ulasan</p>
      <h2 className="text-3xl font-[Rajdhani] font-bold uppercase mb-3">Kata Klien Kami</h2>
      <p className="text-sm text-gray-500 mb-10 max-w-[62ch]">Berikut adalah beberapa ulasan dari klien kami.</p>
      <div className="grid sm:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#0D0D0D] border border-white/10 p-6">
            <Stars n={t.stars} />
            <p className="text-sm text-gray-400 leading-relaxed mb-4">"{t.r}"</p>
            <p className="font-[Rajdhani] font-bold text-sm text-white">{t.n}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 shrink-0">
      <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V12H8v3h2.5v6h3v-6H16l.5-3h-3v-2c0-.5.5-1 1-1z" />
    </svg>
  )
}
function IconTiktok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M16.5 3c.4 2 1.8 3.6 4 3.9v3c-1.5 0-2.9-.5-4-1.3v6.2c0 3.4-2.8 6.2-6.2 6.2S4.1 18.2 4.1 14.8c0-3.3 2.6-6 5.9-6.2v3.1a3.1 3.1 0 1 0 3.2 3.1V3h3.3z" />
    </svg>
  )
}
function IconShop() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 shrink-0">
      <path d="M6 8h12l1 12H5L6 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  )
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 shrink-0">
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4s0-.3 0-.4c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a3 3 0 0 0-1 2.2c0 1.3.9 2.6 1.1 2.8.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1 .1-1.2-.1-.1-.3-.2-.5-.3z"/>
    </svg>
  )
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0">
      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}
function IconNote() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 shrink-0">
      <path d="M4 4h16v16H4z" /><path d="M8 9h8M8 13h8M8 17h4" />
    </svg>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ nama: "", telepon: "", keperluan: "" })
  const [status, setStatus] = useState("")

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("https://formsubmit.co/ajax/smbbgroup@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Pertanyaan dari ${form.nama}`,
          Nama: form.nama,
          Telepon: form.telepon,
          Keperluan: form.keperluan,
        }),
      })

      if (!response.ok) throw new Error("Pengiriman gagal")

      setForm({ nama: "", telepon: "", keperluan: "" })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const fieldClass =
    "min-w-0 flex-1 bg-black border border-white/15 rounded-lg px-3 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#D62828] focus:ring-1 focus:ring-[#D62828]/40 outline-none transition-colors"

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xl flex-col gap-4 bg-[#0D0D0D] border border-white/10 rounded-xl p-5 sm:p-6">
      <div>
        <h3 className="font-[Rajdhani] font-bold uppercase text-lg mb-1">Kirim Pesan</h3>
        <p className="text-xs text-gray-500">Isi form di bawah, kami akan segera merespons.</p>
      </div>

      <div>
        <label className="text-xs font-[Rajdhani] font-bold uppercase tracking-wide text-gray-400 mb-1.5 block">Nama</label>
        <div className="flex items-center gap-3">
          <IconUser className="text-gray-500" />
          <input name="nama" required placeholder="Nama lengkap" value={form.nama} onChange={handleChange} className={fieldClass} />
        </div>
      </div>

      <div>
        <label className="text-xs font-[Rajdhani] font-bold uppercase tracking-wide text-gray-400 mb-1.5 block">Nomor Telepon</label>
        <div className="flex items-center gap-3">
          <IconPhone className="text-gray-500" />
          <input name="telepon" required placeholder="08xx xxxx xxxx" value={form.telepon} onChange={handleChange} className={fieldClass} />
        </div>
      </div>

      <div>
        <label className="text-xs font-[Rajdhani] font-bold uppercase tracking-wide text-gray-400 mb-1.5 block">Keperluan</label>
        <div className="flex items-start gap-3">
          <IconNote className="mt-3 text-gray-500" />
          <textarea name="keperluan" required rows={4} placeholder="Tulis kebutuhan Anda..." value={form.keperluan} onChange={handleChange} className={`${fieldClass} resize-y`} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 bg-[#D62828] hover:bg-[#b81f1f] disabled:cursor-wait disabled:opacity-60 active:scale-[0.98] text-white font-[Rajdhani] font-bold uppercase tracking-wide py-3.5 rounded-lg transition-all"
      >
        {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
      </button>
      {status === "success" && <p className="text-sm text-green-400" role="status">Pesan berhasil dikirim ke SMBB Autoparts.</p>}
      {status === "error" && <p className="text-sm text-red-400" role="alert">Pesan belum terkirim. Silakan coba lagi.</p>}
    </form>
  )
}

function Contact() {
  return (
    <section id="kontak" className="bg-black border-t border-white/10 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#D62828] font-[Rajdhani] font-bold uppercase tracking-widest mb-2">Hubungi Kami</p>
        <h2 className="text-3xl font-[Rajdhani] font-bold uppercase mb-10">Kontak</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-[Rajdhani] font-bold uppercase text-gray-400 text-sm tracking-widest mb-3">WhatsApp</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {whatsappNumbers.map((w) => (
                  <a
                    key={w.label}
                    href={`https://wa.me/${w.number}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0D0D0D] border border-white/10 hover:border-[#25D366]/60 rounded-lg px-4 py-3 transition-colors group"
                  >
                    <IconWhatsapp className="text-[#25D366]" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 group-hover:text-gray-400">{w.label}</span>
                      <span className="text-sm font-semibold">{w.number.replace(/^62/, "0")}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 min-h-[420px] lg:min-h-0">
            <iframe
              title="Lokasi SMBB Autoparts"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0706747746094!2d104.07405779999999!3d1.1092149999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98967fd7afab1%3A0x9ed8e86a795f2931!2sPT%20Selalu%20Maju%20Bersama%20Batam!5e0!3m2!1sen!2sid!4v1790436057644!5m2!1sen!2sid"
              width="100%" height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <section id="kontak" className="bg-black border-t border-white/10 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Email */}
        <div>
          <h3 className="font-[Rajdhani] font-bold uppercase text-[#D62828] mb-4">
            Email
          </h3>

          <a
            href="mailto:smbbgroup@gmail.com"
            className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
          >
            <IconMail />
            <span>smbbgroup@gmail.com</span>
          </a>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="font-[Rajdhani] font-bold uppercase text-[#D62828] mb-4">
            Sosial Media
          </h3>

          <div className="space-y-2 text-gray-400 text-sm">

            <a
              href="https://www.instagram.com/smbautopart"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IconInstagram />
              <span>smbautopart</span>
            </a>

            <a
              href="https://www.facebook.com/smb.autoparts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IconFacebook />
              <span>Smb Autoparts Batam</span>
            </a>

            <a
              href="https://www.tiktok.com/@smb.autoparts.batam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IconTiktok />
              <span>smb.autoparts.batam</span>
            </a>

          </div>
        </div>

        {/* E-commerce */}
        <div>
          <h3 className="font-[Rajdhani] font-bold uppercase text-[#D62828] mb-4">
            E-commerce
          </h3>

          <a
            href="https://www.tokopedia.com/smbgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
          >
            <IconShop />
            <span>Tokopedia — SMB-AUTOPARTS</span>
          </a>
        </div>

        {/* Alamat */}
        <div>
          <h3 className="font-[Rajdhani] font-bold uppercase text-[#D62828] mb-4">
            Alamat
          </h3>

          <div className="flex items-start gap-2 text-gray-400 text-sm">
            <IconPin />
            <span>
              Kw. Industri Tunas Bizpark, Gedung Blok 11-U, Belian,
              Batam Kota, Batam City, Riau Islands 29464
            </span>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 pt-6 border-t border-white/10 text-gray-600 text-xs">
        © 2020 SMBB Autoparts — PT Selalu Maju Bersama Batam. All rights reserved.
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Brand />
      <Product />
      <Partner />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  )
}
