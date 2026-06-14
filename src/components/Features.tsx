"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const features = [
  {
    icon: 'restaurant',
    title: 'Daging Segar',
    desc: 'Dipilih setiap subuh langsung dari peternak lokal terbaik untuk tekstur kenyal alami.',
  },
  {
    icon: 'potted_plant',
    title: 'Kaldu Berjam-jam',
    desc: 'Proses perebusan tulang sumsum selama 15 jam menghasilkan kaldu yang gurih dan kental.',
  },
  {
    icon: 'history_edu',
    title: 'Resep Turun-Temurun',
    desc: 'Rahasia bumbu rempah asli Javanese yang diwariskan dari tiga generasi keluarga kami.',
  },
  {
    icon: 'eco',
    title: 'Tanpa Pengawet',
    desc: 'Komitmen kami menyajikan hidangan sehat tanpa tambahan bahan kimia berbahaya.',
  },
  {
    icon: 'verified',
    title: 'Sertifikasi Halal',
    desc: 'Menjamin ketenangan dalam setiap santapan dengan standar kebersihan tertinggi.',
  },
  {
    icon: 'favorite',
    title: 'Layanan Ramah',
    desc: 'Keramahan khas Jawa yang membuat Anda merasa seperti makan di rumah sendiri.',
  },
];

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Animation
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    // 3D Cards Stagger Animation
    const cards = gsap.utils.toArray(".feature-card");
    gsap.fromTo(
      cards,
      {
        y: 100,
        opacity: 0,
        rotationX: 45, // 3D flip effect
        scale: 0.8,
        z: -100
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        z: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)", // bouncy effect
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
        clearProps: "all"
      }
    );

    // Footer Animation
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-section-gap bg-surface-container-low" style={{ perspective: "1500px" }}>
      <div className="px-container-padding-desktop max-w-screen-2xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-brand-gold mb-2 block uppercase">
            Keunggulan
          </span>
          <h2 className="font-display-lg text-display-lg text-primary mb-4">
            Kenapa BaksoJawa?
          </h2>
          <div className="batik-divider max-w-xs mx-auto"></div>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter" style={{ transformStyle: "preserve-3d" }}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card p-8 glass-card hover:border-brand-gold/40 transition-colors group"
            >
              <span className="material-symbols-outlined text-brand-gold text-4xl mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                {feature.icon}
              </span>
              <h3 className="font-title-md text-primary mb-3">{feature.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div ref={footerRef} className="text-center mt-12 font-display-lg text-title-md text-on-surface-variant italic">
          &quot;Sing Penting Dudu Larang, Nanging Enak Lan Marem.&quot;
        </div>
      </div>
    </section>
  );
}
