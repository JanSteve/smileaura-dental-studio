import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/SharedUI';
import { services, serviceCategories } from '../data/siteData';
import { useStore } from '../store/useStore';
import { Check, Phone } from 'lucide-react';

export default function Services() {
  const { serviceFilter, setServiceFilter } = useStore();
  const filtered = serviceFilter === 'All' ? services : services.filter(s => s.category === serviceFilter);
  const grouped = {};
  filtered.forEach(s => { if (!grouped[s.category]) grouped[s.category] = []; grouped[s.category].push(s); });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-deep to-navy-mid relative min-h-[55vh] flex items-center">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-accent/5 blur-[150px]" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <span className="section-eyebrow">OUR TREATMENTS</span>
          <h1 className="font-display text-5xl md:text-[78px] font-light text-white-soft leading-tight mb-6">
            Complete Dental Care<br />Under One <span className="text-gold-light italic">Roof</span>
          </h1>
          <p className="font-body text-lg text-white-muted max-w-xl mb-4">From your child's first checkup to a full smile makeover — every service you need.</p>
          <p className="font-mono text-[12px] text-grey-text"><Link to="/" className="hover:text-gold-primary">Home</Link> &gt; Services</p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-50 bg-navy-deep/90 backdrop-blur-xl border-b border-overlay py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {serviceCategories.map(cat => (
            <button key={cat} onClick={() => setServiceFilter(cat)}
              className={`font-heading text-sm font-medium px-5 py-2 rounded-full whitespace-nowrap transition-all ${serviceFilter === cat ? 'bg-gold-primary text-navy-deep' : 'text-white-soft hover:text-gold-light'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Service Groups */}
      <section className="py-16 bg-navy-deep">
        <div className="max-w-[1400px] mx-auto px-6">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="mb-16">
              {category === 'Emergency' ? (
                <ScrollReveal>
                  <div className="rounded-3xl border-2 border-gold-primary/40 bg-navy-card p-10 text-center">
                    <h2 className="font-display text-3xl md:text-5xl text-white-soft mb-4">Dental Emergency? We're Here <span className="text-gold-light italic">Right Now.</span></h2>
                    <p className="font-body text-white-muted mb-6 max-w-lg mx-auto">Same-day emergency appointments. Call us and we'll fit you in within the hour.</p>
                    <a href="tel:+919876543210" className="font-mono text-3xl text-gold-primary block mb-6">+91 98765 43210</a>
                    <a href="tel:+919876543210" className="gold-shimmer-btn font-heading font-bold px-10 py-4 rounded-full inline-block text-lg">Call Now</a>
                  </div>
                </ScrollReveal>
              ) : (
                <>
                  <ScrollReveal><h2 className="font-heading font-bold text-3xl text-white-soft mb-8">{category}</h2></ScrollReveal>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((s, i) => (
                      <ScrollReveal key={s.id} delay={i * 0.1}>
                        <div className="tilt-card bg-navy-card rounded-2xl p-7 border border-overlay hover:border-gold-primary/20 transition-all h-full">
                          <div className="flex items-start gap-4 mb-4">
                            <span className="text-3xl">{s.icon}</span>
                            <div className="flex-1">
                              <h3 className="font-heading font-semibold text-xl text-white-soft mb-2">{s.name}</h3>
                              <p className="font-body text-sm text-white-muted leading-relaxed">{s.desc}</p>
                            </div>
                          </div>
                          <div className="space-y-2 mb-4">
                            {s.includes.map((inc, j) => (
                              <div key={j} className="flex items-center gap-2"><Check size={14} className="text-teal-accent flex-shrink-0" /><span className="font-body text-[13px] text-white-muted">{inc}</span></div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-overlay">
                            <div className="flex gap-4">
                              <span className="font-mono text-[11px] text-white-muted bg-navy-mid px-3 py-1 rounded-full">{s.duration}</span>
                              <span className="font-mono text-[11px] text-gold-primary">From {s.price}</span>
                            </div>
                            <Link to={`/treatments/${s.id}`} className="font-heading text-sm text-gold-primary hover:text-gold-light transition-colors">Book →</Link>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
