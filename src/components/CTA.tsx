import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-gold z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/handmade-paper.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold/90 to-transparent"></div>
      </div>
      <div className="relative z-10 px-container-padding-desktop max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl opacity-0 -translate-x-12 transition-all duration-1000" data-reveal="">
          <h2 className="font-display-lg text-display-lg text-background mb-6 leading-tight">
            Yuk Rasakna Nikmate Bakso Jawa Sing Saktenane!
          </h2>
          <p className="text-xl text-background/80 mb-10 font-body-lg">
            Kunjungi outlet terdekat atau pesan sekarang melalui ponsel Anda. Kehangatan Javanese Hospitality menanti Anda.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link suppressHydrationWarning href="/reserve" className="bg-background text-brand-gold px-10 py-5 rounded-full font-label-caps text-label-caps transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] active:scale-95 flex items-center gap-2">
              RESERVASI SEKARANG <span className="material-symbols-outlined text-sm">event_seat</span>
            </Link>
            <button suppressHydrationWarning className="bg-background/5 backdrop-blur-md text-background border border-background/20 px-10 py-5 rounded-full font-label-caps text-label-caps transition-all duration-300 ease-out hover:bg-background/10 hover:-translate-y-1 hover:shadow-lg active:scale-95">
              CARI OUTLET
            </button>
          </div>
        </div>
        <div className="relative group opacity-0 translate-x-12 transition-all duration-1000" data-reveal="">
          <div className="absolute -inset-4 bg-background/10 rounded-full blur-3xl animate-pulse"></div>
          <img
            alt="BaksoJawa Gold"
            className="w-64 h-64 relative z-10 motion-safe:animate-[bounce_5s_infinite]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHkMNjY0HBQzdCTUpZwS667KLvFb8FUGBfXglS7xMctD4QrwB9YYjJTD2qFvcH5-5qDD6ZRTa7k_8ej0-SbWYvbzuwse6qAADteA0c0J3lmiG5l1w4NbqWPqaJ-YIdkbwxvpZcVDKM-bitWXd6dRcdMnQ-TB7v-MVzGHI8OEg0Oj2cOfhArbT3NSALvaVYqF5jo_qUZHCrKUysIcpDAZmWSqKptH6wt1fneZSvH6W57kRfyxgejeghL2QBfUNvcpsM728tcH7BYA"
          />
        </div>
      </div>
    </section>
  );
}
