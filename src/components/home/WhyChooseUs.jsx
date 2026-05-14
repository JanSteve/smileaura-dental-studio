import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/SharedUI';

const items = [
  { num: '01', title: 'Pain-Free Promise', body: 'We guarantee comfortable treatment. If you feel pain, we stop and reassess. No exceptions.' },
  { num: '02', title: 'Same-Day Emergency', body: 'Toothache at 7PM? We have same-day emergency slots so you\'re never left suffering.' },
  { num: '03', title: 'Transparent Pricing', body: 'No surprise bills. Every treatment cost is explained before we begin. Always.' },
  { num: '04', title: 'Child-Friendly Specialists', body: 'Dedicated pediatric dentists and a kid-friendly waiting area. No more dental fear for your children.' },
  { num: '05', title: 'Cutting-Edge Technology', body: 'Digital X-rays, 3D scanning, laser dentistry — the most advanced equipment available in the city.' },
];

export default function WhyChooseUs() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 bg-navy-mid">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-[58px] font-light text-white-soft leading-tight max-w-4xl mx-auto">
            Why Patients Choose <span className="text-gold-light italic">SmileAura</span> Over Every Other Clinic
          </h2>
        </ScrollReveal>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <ScrollReveal className="lg:w-[40%]">
            <div className="aspect-square rounded-3xl overflow-hidden border border-overlay">
              <img src="/images/dental-technology.png" alt="Advanced dental technology at SmileAura" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <div className="lg:w-[60%] space-y-4">
            {items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`border border-overlay rounded-xl overflow-hidden transition-colors ${open === i ? 'bg-overlay' : ''}`}>
                  <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center gap-4 px-6 py-5 text-left">
                    <span className="font-mono text-gold-primary text-sm">{item.num}</span>
                    <span className="font-heading font-semibold text-white-soft text-lg flex-1">{item.title}</span>
                    <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-gold-primary text-xl">+</motion.span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <p className="px-6 pb-5 pl-16 font-body text-white-muted text-[15px] leading-relaxed">{item.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
