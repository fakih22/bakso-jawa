"use client";

import { useEffect } from "react";
import Loader from "@/src/components/Loader";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Features from "@/src/components/Features";
import Products from "@/src/components/Products";
import Statistics from "@/src/components/Statistics";
import Gallery from "@/src/components/Gallery";
import Process from "@/src/components/Process";
import FAQ from "@/src/components/FAQ";
import CTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";

export default function Home() {
  useEffect(() => {
    // Reveal on Scroll
    const startScrollReveal = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8",
              "translate-y-12",
              "-translate-x-12",
              "translate-x-12",
              "scale-90"
            );
            entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0", "scale-100");

            // Handle counter animation
            if (entry.target.classList.contains("counter")) {
              animateCounter(entry.target as HTMLElement);
            }
          }
        });
      }, observerOptions);

      document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
      document.querySelectorAll(".counter").forEach((el) => observer.observe(el));
    };

    // Counter Animation
    const animateCounter = (el: HTMLElement) => {
      const targetStr = el.getAttribute("data-target");
      if (!targetStr) return;
      
      const target = parseFloat(targetStr);
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target % 1 === 0 ? target.toLocaleString("en-US") : target.toFixed(1);
          clearInterval(timer);
        } else {
          el.textContent = target % 1 === 0 ? Math.floor(current).toLocaleString("en-US") : current.toFixed(1);
        }
      }, stepTime);
    };

    // Wait for loader to finish then start observing
    const timer = setTimeout(() => {
      startScrollReveal();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Features />
        <Products />
        <Statistics />
        <Gallery />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
