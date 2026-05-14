import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/SharedUI';
import { doctors } from '../../data/siteData';

export default function DoctorsTeaser() {
  const featured = doctors.slice(0, 3);
  return (
    <section className="py-24 bg-navy-deep">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-[56px] font-light text-white-soft leading-tight">
            The Hands Behind Your <span className="text-gold-light italic">Smile</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((doc, i) => (
            <ScrollReveal key={doc.id} delay={i * 0.15}>
              <div className="group bg-navy-card rounded-2xl overflow-hidden border border-overlay hover:border-gold-primary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[3/4] bg-gradient-to-b from-navy-mid to-navy-card overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-[1.04] transition-transform duration-500">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gold-primary/10 flex items-center justify-center mb-3">
                        <span className="font-display text-3xl text-gold-primary">{doc.name.charAt(4)}</span>
                      </div>
                      <p className="font-mono text-[10px] text-white-soft/20">Portrait Photo</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-white-soft mb-1 group-hover:-translate-y-1 transition-transform">{doc.name}</h3>
                  <p className="font-mono text-[12px] text-gold-primary mb-2">{doc.designation}</p>
                  <p className="font-body text-sm text-white-muted mb-3">{doc.edu}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] text-gold-primary bg-navy-mid px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <span className="font-heading text-sm text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                    View Profile <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-12">
          <Link to="/team" className="gold-outline-btn font-heading font-semibold px-8 py-3.5 rounded-full inline-block">Meet Our Full Team →</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
