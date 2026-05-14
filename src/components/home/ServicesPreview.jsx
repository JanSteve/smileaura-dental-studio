import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/SharedUI';

const previewServices = [
  { icon: '🦷', name: 'General Dentistry', desc: 'Cleanings, fillings, checkups — your foundation of oral health' },
  { icon: '✨', name: 'Teeth Whitening', desc: 'Professional-grade whitening — up to 8 shades brighter' },
  { icon: '👑', name: 'Dental Implants', desc: 'Permanent, natural-feeling tooth replacement' },
  { icon: '😁', name: 'Braces & Aligners', desc: 'Traditional braces and invisible Invisalign options' },
  { icon: '🎭', name: 'Veneers & Smile Design', desc: 'Custom porcelain veneers for your dream smile' },
  { icon: '🚨', name: 'Emergency Dentistry', desc: 'Same-day emergency appointments available' },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-navy-mid">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="section-eyebrow">OUR TREATMENTS</span>
          <h2 className="font-display text-4xl md:text-[62px] font-light text-white-soft leading-tight max-w-3xl mx-auto">
            Every Smile Has a Story. We Help Write <span className="text-gold-light italic">Yours.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="tilt-card group bg-navy-card border border-overlay rounded-2xl p-8 h-full hover:border-gold-primary/30 hover:bg-navy-card/80 transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-navy-mid flex items-center justify-center text-3xl mb-6 group-hover:bg-teal-accent/10 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-white-soft mb-3">{s.name}</h3>
                <p className="font-body text-sm text-white-muted leading-relaxed mb-4">{s.desc}</p>
                <span className="font-heading text-sm text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link to="/services" className="gold-outline-btn font-heading font-semibold px-8 py-3.5 rounded-full inline-block">
            View All Treatments →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
