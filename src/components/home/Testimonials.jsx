import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/SharedUI';
import { testimonials } from '../../data/siteData';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [featured, setFeatured] = useState(0);
  const t = testimonials[featured];
  return (
    <section className="py-24 bg-navy-mid">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="section-eyebrow">PATIENT STORIES</span>
          <h2 className="font-display text-4xl md:text-[58px] font-light text-white-soft leading-tight">
            Hear From the Smiles We've <span className="text-gold-light italic">Changed</span>
          </h2>
        </ScrollReveal>
        <div className="flex flex-col lg:flex-row gap-12">
          <ScrollReveal className="lg:w-[60%]">
            <div className="relative bg-navy-card rounded-3xl p-10 border border-white/5">
              <span className="font-display text-[180px] text-navy-mid absolute top-4 left-8 leading-none select-none">"</span>
              <div className="relative z-10">
                <motion.p key={featured} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-display italic text-2xl text-white-soft leading-relaxed mb-8 mt-12">
                  "{t.quote}"
                </motion.p>
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-gold-primary fill-gold-primary" />)}</div>
                <p className="font-heading font-semibold text-white">{t.name}</p>
                <p className="font-mono text-[12px] text-gold-primary">{t.treatment} • {t.city}</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="lg:w-[40%] space-y-4">
            {testimonials.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <button onClick={() => setFeatured(i)}
                  className={`w-full text-left glass-card rounded-2xl p-5 transition-all duration-300 ${featured === i ? 'border-gold-primary/40 bg-gold-primary/5' : 'hover:border-white/10'}`}>
                  <p className="font-body text-sm text-white-muted line-clamp-2 mb-2">"{item.quote.substring(0, 80)}..."</p>
                  <p className="font-heading text-sm font-semibold text-white">{item.name}</p>
                  <p className="font-mono text-[10px] text-gold-primary">{item.treatment}</p>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
        {/* Google Reviews Marquee */}
        <ScrollReveal className="mt-16">
          <div className="overflow-hidden py-4 border-y border-white/5">
            <div className="flex gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 bg-navy-card rounded-full px-6 py-2 border border-white/5 flex-shrink-0">
                  <Star size={14} className="text-gold-primary fill-gold-primary" />
                  <span className="font-mono text-[12px] text-white-muted">Google Reviews ⭐ 4.9 | 847 Reviews</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
