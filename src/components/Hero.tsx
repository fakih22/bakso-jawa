"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax background (Scroll)
    gsap.to(bgRef.current, {
      yPercent: 30, // Move background down 30% as we scroll
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 3D Entrance Animation for content
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1.5 },
      delay: 1.5 // Wait for the Loader to finish (1.5s)
    });

    // Select children for staggering
    const children = gsap.utils.toArray(".hero-anim");

    // Hide initially using GSAP set so it doesn't rely on Tailwind classes that might get cleared
    gsap.set(children, { visibility: "hidden" });

    tl.fromTo(
      children,
      {
        y: 100,
        opacity: 0,
        rotationX: -45, // 3D effect
        z: -100,
        visibility: "visible", // Make it visible when animation starts
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        z: 0,
        stagger: 0.2,
        clearProps: "all" // Clear GSAP properties after animation to allow hover effects
      }
    );

    // Subtle floating animation for the content block (3D perspective)
    gsap.to(contentRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

  }, { scope: containerRef });

  // Interactive 3D Parallax on Mouse Move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!contentRef.current || !bgRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position from center (-1 to 1)
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      // Rotate and move content in 3D space
      gsap.to(contentRef.current, {
        rotationY: xPos * 15,
        rotationX: -yPos * 15,
        x: xPos * 20,
        y: yPos * 20,
        ease: "power2.out",
        duration: 1
      });

      // Move background slightly in opposite direction
      gsap.to(bgRef.current, {
        x: -xPos * 30,
        y: -yPos * 30,
        ease: "power2.out",
        duration: 1.5
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }} // Required for 3D transforms
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10 pointer-events-none"></div>
        <img
          ref={bgRef}
          alt="Hero Background"
          className="w-[110%] h-[130%] object-cover absolute top-[-15%] left-[-5%]" // Make image larger for parallax room (X and Y)
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEKWlSTwSDKwcJvJtL5hxTyBSWTV20Iiyp4e49hqRFYIVz3qxHlqnLTCdY5t46p599yVY6XkCpAJ8mWUKgt6nWZrI6NzUkS70pb9oF8p6AyrZ7dn5aWdFsldIO8vfl2Jy-XzTORLlLPKmKFrgI5zOXGIU3qUj5x3H-ztTEXxPdCpw2wrl2ytNh2RJzKUtDwbPAy_tnivkdWBcuvkImobpbiZoALirQG6J4YZf7oPqsBxI6jMFN3bOAkaePEN8eCBDI2u92xxMhfw"
          style={{ transformOrigin: "center" }}
        />
      </div>

      <div 
        ref={contentRef}
        className="relative z-20 text-center px-container-padding-mobile max-w-4xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mb-6 flex justify-center hero-anim" style={{ visibility: "hidden" }}>
          <div className="relative">
            <span className="material-symbols-outlined text-brand-gold text-6xl animate-bounce">
              soup_kitchen
            </span>
            {/* Steam effect */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-full flex justify-center gap-1">
              <div
                className="w-1 h-8 bg-on-surface/20 blur-sm rounded-full steam-particle"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-1 h-12 bg-on-surface/20 blur-sm rounded-full steam-particle"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-1 h-10 bg-on-surface/20 blur-sm rounded-full steam-particle"
                style={{ animationDelay: "1.2s" }}
              ></div>
            </div>
          </div>
        </div>
        <h1 className="hero-anim font-display-lg text-display-lg md:text-6xl text-primary mb-6 leading-tight" style={{ visibility: "hidden" }}>
          Bakso Jawa Asli, <span className="italic text-brand-gold font-medium">Rasane Nendang</span> Gawe Kangen
        </h1>
        <p className="hero-anim font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto" style={{ visibility: "hidden" }}>
          Nikmati sensasi bakso khas Jawa dengan kaldu gurih yang meresap sempurna. Diracik dengan bumbu rahasia warisan leluhur.
        </p>
        <div className="hero-anim flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ visibility: "hidden" }}>
          <Link
            className="bg-brand-gold text-background px-8 py-4 font-label-caps text-label-caps rounded-full hover:scale-105 transition-transform"
            href="#menu"
          >
            Jelajahi Menu
          </Link>
          <Link
            className="border border-brand-gold text-brand-gold px-8 py-4 font-label-caps text-label-caps rounded-full hover:bg-brand-gold/10 transition-colors"
            href="#about"
          >
            Cerita Kami
          </Link>
        </div>
        <div className="hero-anim mt-16 italic font-display-lg text-title-md text-on-surface-variant opacity-60" style={{ visibility: "hidden" }}>
          &quot;Mangan ora mangan sing penting kumpul...&quot;
        </div>
      </div>
    </section>
  );
}
