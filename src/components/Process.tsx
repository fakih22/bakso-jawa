"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    num: 1,
    title: 'Milih Daging',
    desc: 'Seleksi daging sapi segar setiap subuh.',
  },
  {
    num: 2,
    title: 'Giling Halus',
    desc: 'Proses penggilingan dengan es agar tekstur tetap kenyal.',
  },
  {
    num: 3,
    title: 'Formasi Rasa',
    desc: 'Pencampuran 17 bumbu rempah rahasia.',
  },
  {
    num: 4,
    title: 'Masak Sabar',
    desc: 'Perebusan lambat untuk mengunci saripati daging.',
  },
  {
    num: 5,
    title: 'Siap Saji',
    desc: 'Dihidangkan panas dengan cinta dari dapur kami.',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-section-gap bg-surface-container-low relative">
      <div className="px-container-padding-desktop max-w-screen-2xl mx-auto">
        <div className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700" data-reveal="">
          <span className="font-label-caps text-label-caps text-brand-gold mb-2 block uppercase">Proses Kami</span>
          <h2 className="font-display-lg text-display-lg text-primary mb-6">Seni Membuat Kesempurnaan</h2>
          <p className="italic font-display-lg text-title-md text-on-surface-variant">&quot;Sing apik butuh proses, kaya rasa BaksoJawa.&quot;</p>
        </div>
        <div className="relative">
          {/* Progress Line Background */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-brand-gold/20 z-0">
            {/* Animated Flowing Line */}
            <div 
              className="absolute top-0 left-0 h-full bg-brand-gold transition-all duration-1000 ease-in-out"
              style={{ width: `${((activeStep - 1) / 4) * 100}%` }}
            ></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 z-10">
            {steps.map((step, i) => {
              const isActive = step.num === activeStep;
              const isPast = step.num < activeStep;
              
              return (
                <div
                  key={step.num}
                  className="flex-1 text-center opacity-0 translate-y-12 transition-all duration-700 w-full"
                  style={{ transitionDelay: `${i * 100}ms` }}
                  data-reveal=""
                >
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-display-lg text-headline-lg transition-colors duration-500 ${
                      isActive || isPast
                        ? 'bg-brand-gold text-background'
                        : 'bg-surface-container-low border-2 border-brand-gold/30 text-brand-gold/50'
                    }`}
                  >
                    {step.num}
                  </div>
                  <h4 className={`font-title-md transition-colors duration-500 mb-2 ${isActive ? 'text-brand-gold' : 'text-primary'}`}>{step.title}</h4>
                  <p className="text-body-sm text-on-surface-variant">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
