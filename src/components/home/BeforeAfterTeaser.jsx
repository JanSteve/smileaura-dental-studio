import { Link } from 'react-router-dom';
import { ScrollReveal, BeforeAfterSlider } from '../ui/SharedUI';

export default function BeforeAfterTeaser() {
  return (
    <section className="py-24 bg-navy-deep">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-[58px] font-light text-white-soft leading-tight mb-4">
            Real Results. Real <span className="text-gold-light italic">Patients.</span>
          </h2>
          <p className="font-body text-white-muted max-w-xl mx-auto">Every transformation you see here is a real SmileAura patient.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: 'Teeth Whitening', d: '6 shades brighter in 90 minutes' },
            { t: 'Dental Veneers', d: 'Complete smile redesign — 5 days' },
            { t: 'Braces', d: '18-month transformation' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <BeforeAfterSlider treatment={item.t} timeframe={item.d} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-12">
          <Link to="/gallery" className="gold-outline-btn font-heading font-semibold px-8 py-3.5 rounded-full inline-block">See Full Gallery →</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
