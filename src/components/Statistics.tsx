const stats = [
  { value: 10000, label: 'Porsi Terjual', delay: 0 },
  { value: 5000, label: 'Pelanggan Puas', delay: 100 },
  { value: 15, label: 'Tahun Pengalaman', delay: 200 },
  { value: 4.9, label: 'Rating Rata-rata', delay: 300 },
];

export default function Statistics() {
  return (
    <section className="py-24 bg-surface-container-highest relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 batik-pattern"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}
      ></div>
      <div className="px-container-padding-desktop max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="opacity-0 scale-90 transition-all duration-700"
            style={{ transitionDelay: `${stat.delay}ms` }}
            data-reveal=""
          >
            <div
              className="font-display-lg text-display-lg text-brand-gold mb-2 counter"
              data-target={stat.value}
            >
              0
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
