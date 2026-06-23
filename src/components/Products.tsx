"use client";

import { useState, useEffect } from "react";
import { products, Product } from "@/src/data/products";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  return (
    <section className="py-section-gap px-container-padding-desktop max-w-screen-2xl mx-auto" id="menu">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="opacity-0 -translate-x-8 transition-all duration-700" data-reveal="">
          <span className="font-label-caps text-label-caps text-brand-gold mb-2 block uppercase">Daftar Rasa</span>
          <h2 className="font-display-lg text-display-lg text-primary">Menu Spesialis Kami</h2>
        </div>
        <div className="hidden md:block opacity-0 translate-x-8 transition-all duration-700" data-reveal="">
          <p className="text-on-surface-variant max-w-xs text-right">
            Setiap porsi disajikan dengan mie kuning, bihun, sayuran segar, dan bawang goreng gurih melimpah.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, i) => (
          <div
            key={product.id}
            className="group relative glass-card rounded-xl overflow-hidden opacity-0 translate-y-12 transition-all duration-700 cursor-pointer"
            style={{ transitionDelay: `${i * 100}ms` }}
            data-reveal=""
            onClick={() => setSelectedProduct(product)}
          >
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={product.alt}
                src={product.image}
              />
              {product.badge && (
                <div
                  className={`absolute top-4 right-4 text-white px-3 py-1 font-label-caps text-[10px] rounded ${
                    product.badge.type === 'gold' ? 'bg-brand-gold text-background' : 'bg-brand-red'
                  }`}
                >
                  {product.badge.text}
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display-lg text-title-md text-primary group-hover:text-brand-gold transition-colors">{product.name}</h3>
                <span className="text-brand-gold font-bold">{product.price}</span>
              </div>
              <p className="text-body-sm text-on-surface-variant line-clamp-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-surface-container border border-outline-variant/30 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-black transition-colors"
              onClick={() => setSelectedProduct(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center overflow-y-auto">
              {selectedProduct.badge && (
                <span className={`inline-block px-3 py-1 font-label-caps text-[10px] rounded mb-4 w-fit ${
                  selectedProduct.badge.type === 'gold' ? 'bg-brand-gold text-background' : 'bg-brand-red text-white'
                }`}>
                  {selectedProduct.badge.text}
                </span>
              )}
              <h3 className="font-display-lg text-headline-lg text-primary mb-2">{selectedProduct.name}</h3>
              <p className="text-brand-gold font-bold text-2xl mb-6">{selectedProduct.price}</p>
              <div className="w-16 h-[1px] bg-outline-variant/50 mb-6"></div>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
