import { faqs } from "@/src/data/faq";

export default function FAQ() {
  return (
    <section className="py-section-gap px-container-padding-desktop max-w-4xl mx-auto" id="faq">
      <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700" data-reveal="">
        <h2 className="font-display-lg text-display-lg text-primary mb-4">Pertanyaan Umum</h2>
        <div className="batik-divider max-w-xs mx-auto mb-8"></div>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={faq.id}
            className="group glass-card rounded-xl overflow-hidden opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: `${i * 100}ms` }}
            data-reveal=""
          >
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
              <span className="font-title-md text-primary">{faq.question}</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-brand-gold">
                expand_more
              </span>
            </summary>
            <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
