import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/SharedUI';
import { doctors, teamCategories } from '../data/siteData';
import { useStore } from '../store/useStore';

const docImages = [
  '/images/doctor-male.png', 
  '/images/doctor-female.png', 
  '/images/doctor-male-2.png', 
  '/images/doctor-female-2.png',
  '/images/doctor-male-3.png',
  '/images/doctor-female-3.png'
];

export default function Team() {
  const { teamFilter, setTeamFilter } = useStore();
  const filtered = teamFilter === 'All' ? doctors : doctors.filter(d => d.spec === teamFilter);
  const founder = doctors[0];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-deep to-navy-mid min-h-[45vh] flex items-center text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="font-display text-4xl md:text-[72px] font-light text-white-soft leading-tight mb-6">The Specialists Behind Every <span className="text-gold-light italic">Smile</span></h1>
          <p className="font-body text-lg text-white-muted">A team of 12 dedicated dental professionals.</p>
        </div>
      </section>

      <div className="sticky top-[72px] z-50 bg-navy-deep/90 backdrop-blur-xl border-b border-overlay py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex gap-3 overflow-x-auto pb-1">
          {teamCategories.map(cat => (
            <button key={cat} onClick={() => setTeamFilter(cat)} className={`font-heading text-sm font-medium px-5 py-2 rounded-full whitespace-nowrap transition-all ${teamFilter === cat ? 'bg-gold-primary text-navy-deep' : 'text-white-soft hover:text-gold-light'}`}>{cat}</button>
          ))}
        </div>
      </div>

      <section className="py-16 bg-navy-deep">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((doc, i) => (
              <ScrollReveal key={doc.id} delay={i * 0.08}>
                <div className="group bg-navy-card rounded-2xl overflow-hidden border border-overlay hover:border-gold-primary/30 transition-all duration-500 hover:-translate-y-2.5">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img src={docImages[i % docImages.length]} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-white-soft mb-0.5">{doc.name}</h3>
                    <p className="font-heading text-[13px] font-semibold text-teal-accent mb-2">{doc.designation}</p>
                    <div className="flex gap-1.5 flex-wrap mb-2">{doc.tags.map(tag => <span key={tag} className="font-mono text-[9px] text-gold-primary bg-navy-mid px-2 py-0.5 rounded-full">{tag}</span>)}</div>
                    <p className="font-mono text-[11px] text-white-muted mb-1">{doc.exp} Experience</p>
                    <Link to="/contact" className="font-heading text-[12px] text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity">Book →</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-mid">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[50%] rounded-3xl overflow-hidden aspect-[3/4]">
              <img src="/images/doctor-male.png" alt={founder.name} className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-[50%] flex flex-col justify-center">
              <ScrollReveal>
                <span className="font-mono text-gold-primary text-[11px] tracking-wider">FOUNDER & CHIEF DENTAL SURGEON</span>
                <h2 className="font-display text-4xl md:text-[52px] font-light text-white-soft leading-tight mt-3 mb-2">{founder.name}</h2>
                <p className="font-heading font-semibold text-teal-accent mb-6">{founder.designation}</p>
                <p className="font-body text-[16px] text-white-muted leading-[1.8] mb-4">{founder.bio}</p>
                <p className="font-body text-[16px] text-white-muted leading-[1.8] mb-6">His philosophy is simple: treat every patient the way you would treat your own family.</p>
                <blockquote className="border-l-4 border-gold-primary pl-6 mb-8">
                  <p className="font-display italic text-xl text-white-soft">"A smile is the first thing people notice about you."</p>
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
