"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "gallery", "faq"];
      
      // If at the very top, set to home
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        if (section === "home") continue;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is currently in the viewport
          // Offset by 200px to trigger when the section comes near the top
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section;
    return `font-label-caps text-label-caps transition-all duration-300 ${
      isActive
        ? "text-brand-gold border-b-2 border-brand-gold pb-1"
        : "text-on-surface-variant hover:text-brand-gold pb-1 border-b-2 border-transparent"
    }`;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm h-20 transition-all duration-300">
      <nav className="flex justify-between items-center px-container-padding-desktop max-w-screen-2xl mx-auto h-full">
        <div className="flex items-center gap-4">
          <img
            alt="BaksoJawa Logo"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHkMNjY0HBQzdCTUpZwS667KLvFb8FUGBfXglS7xMctD4QrwB9YYjJTD2qFvcH5-5qDD6ZRTa7k_8ej0-SbWYvbzuwse6qAADteA0c0J3lmiG5l1w4NbqWPqaJ-YIdkbwxvpZcVDKM-bitWXd6dRcdMnQ-TB7v-MVzGHI8OEg0Oj2cOfhArbT3NSALvaVYqF5jo_qUZHCrKUysIcpDAZmWSqKptH6wt1fneZSvH6W57kRfyxgejeghL2QBfUNvcpsM728tcH7BYA"
          />
          <span className="font-display-lg text-title-md text-primary-container tracking-wider">
            BaksoJawa
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className={getLinkClass("home")} href="/">
            Home
          </Link>
          <Link className={getLinkClass("about")} href="/#about">
            About
          </Link>
          <Link className={getLinkClass("menu")} href="/#menu">
            Menu
          </Link>
          <Link className={getLinkClass("gallery")} href="/#gallery">
            Gallery
          </Link>
          <Link className={getLinkClass("faq")} href="/#faq">
            FAQ
          </Link>
        </div>
        <Link suppressHydrationWarning href="/reserve" className="bg-primary-container text-on-primary font-label-caps text-label-caps px-6 py-3 rounded-full hover:bg-brand-gold/90 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(244,196,48,0.3)] active:scale-95">
          Reserve Now
        </Link>
      </nav>
    </header>
  );
}
