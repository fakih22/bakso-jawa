"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal Image with 3D Rotation
    gsap.fromTo(
      imageRef.current,
      {
        x: -100,
        opacity: 0,
        rotationY: -30,
        z: -100,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        z: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    // Parallax inside the image
    gsap.to(imageInnerRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal Text Content with 3D Rotation
    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });

    tlText.fromTo(
      textRef.current?.children ? gsap.utils.toArray(textRef.current.children) : [],
      {
        x: 100,
        opacity: 0,
        rotationY: 30,
        z: -50,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        z: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      }
    );

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-section-gap px-container-padding-desktop max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center overflow-hidden"
      id="about"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={imageRef}
        className="relative group overflow-hidden rounded-xl shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute -inset-4 border border-brand-gold/20 rounded-xl group-hover:-inset-6 transition-all z-20 pointer-events-none"></div>
        <img
          ref={imageInnerRef}
          className="w-full h-[600px] object-cover relative z-10 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-110"
          alt="A vintage-style high-end photograph of a traditional Javanese artisan preparing meatballs"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi8NJFt9_5pgjfaEmtbTyIYf32rYVh2F90Jg6_bByN7j7zFA8gTPOvka5gNqGgqoQwTplnBSjO8cL9DkjBsihMhoJyUs5jA68XUFS9RNHdZ4z-bAfi3SVbXZXAkCtO24sh8DWwAATsuX3Rt-NtVj9e06xpzkyPyq9zWC0cAAmN9HBOhFUcXW2C6yFgwcmkxQoEN3SO2qbHB-hB6c49aGKxNCPiAWKrrg_Z8_R2-lP9LOxPYRuLAQQGb3NKIxXngpLw77uO5U4xFA"
        />
      </div>
      <div ref={textRef} style={{ transformStyle: "preserve-3d" }}>
        <span className="font-label-caps text-label-caps text-brand-gold mb-4 block">
          WARISAN LELUHUR
        </span>
        <h2 className="font-display-lg text-display-lg text-primary mb-8 leading-tight">
          Dedikasi Rasa <br />
          Saking Manah
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
          BaksoJawa lahir dari kerinduan akan kehangatan dapur nenek di pinggiran Jogja. Setiap butir bakso kami adalah manifestasi dari ketelitian, pemilihan bahan terbaik, dan kesabaran dalam mengolah kaldu selama lebih dari 12 jam.
        </p>
        <div className="p-8 glass-card border-l-4 border-l-brand-gold italic font-display-lg text-headline-lg text-brand-gold">
          &quot;Roso iku ora mung soal panganan, nanging uga kenangan.&quot;
        </div>
      </div>
    </section>
  );
}
