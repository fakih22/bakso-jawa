import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter px-container-padding-desktop max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              alt="Logo"
              className="h-12 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHkMNjY0HBQzdCTUpZwS667KLvFb8FUGBfXglS7xMctD4QrwB9YYjJTD2qFvcH5-5qDD6ZRTa7k_8ej0-SbWYvbzuwse6qAADteA0c0J3lmiG5l1w4NbqWPqaJ-YIdkbwxvpZcVDKM-bitWXd6dRcdMnQ-TB7v-MVzGHI8OEg0Oj2cOfhArbT3NSALvaVYqF5jo_qUZHCrKUysIcpDAZmWSqKptH6wt1fneZSvH6W57kRfyxgejeghL2QBfUNvcpsM728tcH7BYA"
            />
            <span className="font-display-lg text-headline-lg text-primary-container">BaksoJawa</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
            Menghidangkan kehangatan tradisi Jawa melalui semangkuk bakso premium sejak 2009. Kualitas tanpa kompromi, rasa tanpa tanding iki.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-brand-gold transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-brand-gold transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-brand-gold transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">chat</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-title-md text-primary mb-6">Navigasi</h4>
          <ul className="space-y-4 font-body-sm text-body-sm">
            <li><Link className="text-on-surface-variant hover:text-brand-gold transition-colors" href="#">Beranda</Link></li>
            <li><Link className="text-on-surface-variant hover:text-brand-gold transition-colors" href="#menu">Menu Favorit</Link></li>
            <li><Link className="text-on-surface-variant hover:text-brand-gold transition-colors" href="#about">Kisah Kami</Link></li>
            <li><Link className="text-on-surface-variant hover:text-brand-gold transition-colors" href="#gallery">Galeri Foto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-title-md text-primary mb-6">Hubungi Kami</h4>
          <ul className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-gold">location_on</span>
              Jl. Malioboro No. 456, Yogyakarta, Indonesia
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-gold">call</span>
              +62 274 1234 5678
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-gold">mail</span>
              baksojawa@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-title-md text-primary mb-6">Filosofi</h4>
          <div className="p-6 glass-card rounded-xl italic text-on-surface-variant border-l-2 border-brand-gold">
            &quot;Urip iku cekak, mangan bakso sing enak luwih becik.&quot;
          </div>
          <div className="mt-8">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Dapatkan info promo terbaru:</p>
            <div className="flex">
              <input
                suppressHydrationWarning
                className="bg-surface-variant border-none rounded-l-lg p-3 text-body-sm w-full focus:ring-1 focus:ring-brand-gold"
                placeholder="Email Anda"
                type="email"
              />
              <button suppressHydrationWarning className="bg-brand-gold text-background px-4 rounded-r-lg">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-container-padding-desktop mt-20 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm text-on-surface-variant/60">
        <p>© 2026 BaksoJawa. Mangan Ora Mangan Sing Penting Kumpul.</p>
        <div className="flex gap-8">
          <Link className="hover:text-brand-gold transition-colors" href="#">Privacy Policy</Link>
          <Link className="hover:text-brand-gold transition-colors" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
