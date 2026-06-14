import { galleryImages } from "@/src/data/gallery";

export default function Gallery() {
  return (
    <section className="py-section-gap px-container-padding-desktop max-w-screen-2xl mx-auto" id="gallery">
      <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700" data-reveal="">
        <span className="font-label-caps text-label-caps text-brand-gold mb-2 block uppercase">Galeri</span>
        <h2 className="font-display-lg text-display-lg text-primary mb-4">Potret Nikmate BaksoJawa</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((img, i) => (
          <div
            key={img.id}
            className={`${img.span || ''} rounded-xl overflow-hidden glass-card group opacity-0 translate-y-12 transition-all duration-700`}
            style={{ transitionDelay: `${i * 100}ms` }}
            data-reveal=""
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              alt={img.alt}
              src={img.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
