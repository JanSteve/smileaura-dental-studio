import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/SharedUI';
import { Check } from 'lucide-react';

const features = ['State-of-the-art digital X-rays', 'Sedation options for anxious patients', 'Child-friendly treatment rooms', 'EMI and insurance accepted'];

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-navy-deep">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal className="lg:w-[45%]">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-gold-primary/40" />
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-navy-card to-navy-mid aspect-[4/3] border border-white/5">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-mono text-sm text-white/20">Clinic Interior</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-accent/20 to-navy-card border border-white/10 rotate-3 flex items-center justify-center">
                <p className="font-mono text-[10px] text-white/20">Patient Smile</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:w-[55%]">
            <ScrollReveal><span className="section-eyebrow">ABOUT SMILEAURA</span></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-[58px] font-light text-white-soft leading-tight mb-6">
                More Than Just Dentistry — It's an <span className="text-gold-light italic">Experience.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-[17px] text-white-muted leading-[1.8] mb-4">
                At SmileAura, we believe dental care should feel like a wellness retreat, not a clinical ordeal. From the moment you walk in, you'll notice the difference — warm lighting, calming music, and a team that genuinely cares about your comfort.
              </p>
              <p className="font-body text-[17px] text-white-muted leading-[1.8] mb-8">
                With over 15 years of experience and 15,000+ smiles transformed, we combine cutting-edge technology with the human touch that makes all the difference.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="space-y-4 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-white/5 pb-3">
                    <Check size={16} className="text-gold-primary flex-shrink-0" />
                    <span className="font-body text-white-soft text-[15px]">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Link to="/about" className="inline-flex items-center gap-2 font-heading font-semibold text-gold-primary hover:text-gold-light transition-colors group">
                Discover Our Story <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
