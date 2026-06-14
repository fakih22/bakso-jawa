"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 bg-background ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      id="loader"
    >
      <div className="relative w-32 h-32 flex items-center justify-center mb-8">
        {/* Vintage double circle */}
        <div className="absolute inset-0 border-[3px] border-double border-outline/50 rounded-full"></div>
        
        {/* Center Logo with Sepia */}
        <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center bg-surface-container-low">
          <img
            alt="BaksoJawa"
            className="w-16 h-16 opacity-70 object-contain sepia-[.4] grayscale-[.2]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHkMNjY0HBQzdCTUpZwS667KLvFb8FUGBfXglS7xMctD4QrwB9YYjJTD2qFvcH5-5qDD6ZRTa7k_8ej0-SbWYvbzuwse6qAADteA0c0J3lmiG5l1w4NbqWPqaJ-YIdkbwxvpZcVDKM-bitWXd6dRcdMnQ-TB7v-MVzGHI8OEg0Oj2cOfhArbT3NSALvaVYqF5jo_qUZHCrKUysIcpDAZmWSqKptH6wt1fneZSvH6W57kRfyxgejeghL2QBfUNvcpsM728tcH7BYA"
          />
        </div>
      </div>
      
      {/* Text Container */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-display-lg text-4xl text-on-surface-variant tracking-widest">
          Sugeng Rawuh
        </h1>
        <p className="font-display-lg italic text-outline text-lg">
          ~ sejak 2009 ~
        </p>
      </div>
    </div>
  );
}
