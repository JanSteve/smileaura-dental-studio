import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/SharedUI';
import { Phone, Calendar } from 'lucide-react';

export default function BookingTeaser() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-teal-accent/5 to-transparent" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gold-primary/5 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display italic text-4xl md:text-[68px] font-light text-white-soft leading-tight mb-6">
            Your Dream Smile Is One Click Away.
          </h2>
          <p className="font-body text-lg text-white-muted mb-12 max-w-xl mx-auto">
            Book your free consultation today. No obligations. No pressure. Just expert advice.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8 text-center hover:border-gold-primary/20 transition-all">
              <Phone size={32} className="text-gold-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-white text-lg mb-2">Call Us Now</h3>
              <a href="tel:+919876543210" className="font-mono text-2xl text-gold-primary hover:text-gold-light block mb-2">+91 98765 43210</a>
              <p className="font-body text-sm text-white-muted">Available 9AM–8PM, 7 days a week</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass-card rounded-2xl p-8 text-center hover:border-gold-primary/20 transition-all">
              <Calendar size={32} className="text-gold-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-white text-lg mb-4">Book Online</h3>
              <Link to="/contact" className="gold-shimmer-btn font-heading font-bold px-8 py-3.5 rounded-full inline-block">
                Book Free Consultation
              </Link>
              <p className="font-body text-sm text-white-muted mt-3">Instant confirmation via WhatsApp</p>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.3}>
          <p className="font-mono text-[12px] text-grey-text">We Accept: Cash | Card | UPI | Insurance | EMI</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
