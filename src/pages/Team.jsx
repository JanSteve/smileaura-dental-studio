import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/SharedUI';
import { doctors, teamCategories } from '../data/siteData';
import { useStore } from '../store/useStore';

export default function Team() {
  const { teamFilter, setTeamFilter } = useStore();
  const filtered = teamFilter === 'All' ? doctors : doctors.filter(d => d.spec === teamFilter);
  const founder = doctors[0];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-deep to-navy-mid min-h-[45vh] flex items-center text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="font-display text-4xl md:text-[72px] font-light text-white-soft leading-tight mb-6">The Specialists Behind Every <span className="text-gold-light italic">Smile</span></h1>
          <p className="font-body text-lg text-white-muted">A team of 12 dedicated dental professionals, each an expert in their specialty.</p>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-[72px] z-50 bg-navy-deep/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex gap-3 overflow-x-auto pb-1">
          {teamCategories.map(cat => (
            <button key={cat} onClick={() => setTeamFilter(cat)}
              className={`font-heading text-sm font-medium px-5 py-2 rounded-full whitespace-nowrap transition-all ${teamFilter === cat ? 'bg-gold-primary text-navy-deep' : 'text-white hover:text-gold-light'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Doctor Grid */}
      <section className="py-16 bg-navy-deep">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((doc, i) => (
              <ScrollReveal key={doc.id} delay={i * 0.08}>
                <div className="group bg-navy-card rounded-2xl overflow-hidden border border-white/5 hover:border-gold-primary/30 transition-all duration-500 hover:-translate-y-2.5">
                  <div className="aspect-[3/4] bg-gradient-to-b from-navy-mid to-navy-card overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-500">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gold-primary/10 flex items-center justify-center mb-2">
                          <span className="font-display text-2xl text-gold-primary">{doc.name.charAt(4)}</span>
                        </div>
                        <p className="font-mono text-[9px] text-white/15">Dr. Portrait</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gold-primary/0 group-hover:bg-gold-primary/[0.08] transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-white mb-0.5">{doc.name}</h3>
                    <p className="font-heading text-[13px] font-semibold text-teal-accent mb-2">{doc.designation}</p>
                    <div className="flex gap-1.5 flex-wrap mb-2">
                      {doc.tags.map(tag => <span key={tag} className="font-mono text-[9px] text-gold-primary bg-navy-mid px-2 py-0.5 rounded-full">{tag}</span>)}
                    </div>
                    <p className="font-mono text-[11px] text-white-muted mb-1">{doc.exp} Experience</p>
                    <p className="font-body text-[12px] text-white-muted mb-3">{doc.edu}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <a href="#" className="font-mono text-[10px] text-white-muted hover:text-gold-primary transition-colors">IN</a>
                        <a href="#" className="font-mono text-[10px] text-white-muted hover:text-gold-primary transition-colors">IG</a>
                      </div>
                      <Link to="/contact" className="font-heading text-[12px] text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity">Book with {doc.name.split(' ')[0]} →</Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctor */}
      <section className="py-24 bg-navy-mid">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[50%] rounded-3xl overflow-hidden bg-gradient-to-b from-navy-card to-navy-deep aspect-[3/4] flex items-center justify-center">
              <p className="font-mono text-sm text-white/20">Founder Portrait</p>
            </div>
            <div className="lg:w-[50%] flex flex-col justify-center">
              <ScrollReveal>
                <span className="font-mono text-gold-primary text-[11px] tracking-wider">FOUNDER & CHIEF DENTAL SURGEON</span>
                <h2 className="font-display text-4xl md:text-[52px] font-light text-white-soft leading-tight mt-3 mb-2">{founder.name}</h2>
                <p className="font-heading font-semibold text-teal-accent mb-6">{founder.designation}</p>
                <p className="font-body text-[16px] text-white-muted leading-[1.8] mb-4">{founder.bio}</p>
                <p className="font-body text-[16px] text-white-muted leading-[1.8] mb-4">Under his leadership, SmileAura has grown from a single-chair clinic to a 12-specialist, multi-specialty dental studio that serves thousands of patients every year.</p>
                <p className="font-body text-[16px] text-white-muted leading-[1.8] mb-6">His philosophy is simple: treat every patient the way you would treat your own family.</p>
                <div className="font-mono text-[12px] text-white-muted mb-6">{founder.edu} • {founder.exp} Experience</div>
                <blockquote className="border-l-4 border-gold-primary pl-6 mb-8">
                  <p className="font-display italic text-xl text-white-soft">"A smile is the first thing people notice about you. My job is to make sure it's the best version of yours."</p>
                </blockquote>
                <Link to="/contact" className="gold-shimmer-btn font-heading font-bold px-8 py-3.5 rounded-full inline-block">Book Consultation</Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
