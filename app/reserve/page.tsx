"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/src/components/Navbar";

export default function Reserve() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    capacity: "2",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `Halo BaksoJawa, saya ingin melakukan reservasi:
Nama: ${formData.name}
Tanggal: ${formData.date}
Jam: ${formData.time}
Jumlah Orang: ${formData.capacity}
Catatan Tambahan: ${formData.notes || "-"}
Mohon konfirmasinya. Terima kasih!`;

    // Phone number dummy (can be changed later)
    const phoneNumber = "6282336618275";
    
    // Create the WhatsApp URL
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in a new tab
    window.open(waUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-32 pb-20 px-container-padding-desktop">
        <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center text-brand-gold hover:text-primary transition-colors mb-6 font-label-caps text-label-caps">
            <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
            Kembali ke Beranda
          </Link>
          <span className="font-label-caps text-label-caps text-brand-gold mb-2 block uppercase">Booking Meja</span>
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Reservasi Tempat</h1>
          <p className="text-on-surface-variant font-body-lg">
            Pastikan momen spesial Anda tidak terganggu karena kehabisan tempat. Pesan meja sekarang dan nikmati sajian BaksoJawa tanpa antre.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block font-title-md text-primary mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                placeholder="Masukkan nama Anda"
              />
            </div>
            
            <div>
              <label htmlFor="date" className="block font-title-md text-primary mb-2">Tanggal Reservasi</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block font-title-md text-primary mb-2">Jam Reservasi</label>
              <input 
                type="time" 
                id="time" 
                name="time" 
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="capacity" className="block font-title-md text-primary mb-2">Jumlah Orang</label>
              <select 
                id="capacity" 
                name="capacity" 
                required
                value={formData.capacity}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
              >
                <option value="1-2">1 - 2 Orang</option>
                <option value="3-4">3 - 4 Orang</option>
                <option value="5-8">5 - 8 Orang</option>
                <option value="9-15">9 - 15 Orang (Rombongan)</option>
                <option value="15+">Lebih dari 15 Orang (Acara Besar)</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="notes" className="block font-title-md text-primary mb-2">Catatan Tambahan (Opsional)</label>
              <textarea 
                id="notes" 
                name="notes" 
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
                placeholder="Misal: Mohon sediakan kursi bayi, posisi di dekat jendela, dll."
              ></textarea>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-brand-gold text-background font-title-md py-4 rounded-xl hover:bg-brand-gold/90 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(244,196,48,0.3)] active:scale-95 flex justify-center items-center gap-2"
          >
            Konfirmasi Via WhatsApp
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
