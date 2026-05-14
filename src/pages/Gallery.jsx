import { Link } from 'react-router-dom';
import { ScrollReveal, BeforeAfterSlider } from '../components/ui/SharedUI';
import { useStore } from '../store/useStore';

const galleryTabs = ['Before & After', 'Clinic Interior', 'Treatment Process', 'Patient Moments'];
const baItems = [
  { t: 'Teeth Whitening', d: '6 shades brighter — 90 min' }, { t: 'Teeth Whitening', d: '4 shades brighter — 60 min' }, { t: 'Teeth Whitening', d: '8 shades brighter — 120 min' },
  { t: 'Porcelain Veneers', d: 'Full smile redesign — 5 days' }, { t: 'Porcelain Veneers', d: '4 veneers — 3 days' }, { t: 'Porcelain Veneers', d: '8 veneers — 7 days' },
  { t: 'Braces', d: '18-month transformation' }, { t: 'Invisalign', d: '14 months — clear aligners' }, { t: 'Braces', d: '12-month transformation' },
  { t: 'Dental Implants', d: 'Single implant — 3 months' }, { t: 'Dental Implants', d: 'Full arch — 6 months' }, { t: 'Dental Implants', d: 'All-on-4 — 4 months' },
];

export default function Gallery() {
  const { galleryTab, setGalleryTab } = useStore();
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-deep to-navy-mid min-h-[40vh] flex items-center text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="font-display text-4xl md:text-[72px] font-light text-white-soft leading-tight mb-6">Smiles We've <span className="text-gold-light italic">Transformed</span></h1>
          <p className="font-body text-lg text-white-muted">Every result you see here is a real SmileAura patient. Results may vary.</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-[72px] z-50 bg-navy-deep/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex gap-3 overflow-x-auto pb-1">
          {galleryTabs.map(tab => (
            <button key={tab} onClick={() => setGalleryTab(tab)}
              className={`font-heading text-sm font-medium px-5 py-2 rounded-full whitespace-nowrap transition-all ${galleryTab === tab ? 'bg-gold-primary text-navy-deep' : 'text-white hover:text-gold-light'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16 bg-navy-deep">
        <div className="max-w-[1400px] mx-auto px-6">
          {galleryTab === 'Before & After' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {baItems.map((item, i) => (
                <ScrollReveal key={i} delay={(i % 4) * 0.1}>
                  <BeforeAfterSlider treatment={item.t} timeframe={item.d} />
                </ScrollReveal>
              ))}
            </div>
          )}
          {galleryTab === 'Clinic Interior' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(8)].map((_, i) => (
                <ScrollReveal key={i} delay={(i % 3) * 0.1}>
                  <div className="group rounded-2xl overflow-hidden bg-navy-card aspect-[4/3] relative cursor-pointer border border-white/5 hover:border-gold-primary/20 transition-all">
                    <div className="w-full h-full flex items-center justify-center"><p className="font-mono text-sm text-white/20">Clinic Interior {i + 1}</p></div>
                    <div className="absolute inset-0 bg-gold-primary/0 group-hover:bg-gold-primary/10 transition-colors flex items-center justify-center">
                      <span className="font-mono text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity">View Full</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
          {(galleryTab === 'Treatment Process' || galleryTab === 'Patient Moments') && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <ScrollReveal key={i} delay={(i % 3) * 0.1}>
                  <div className="rounded-2xl overflow-hidden bg-navy-card aspect-[4/3] border border-white/5 flex items-center justify-center">
                    <p className="font-mono text-sm text-white/20">{galleryTab} {i + 1}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-card text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl text-white-soft mb-6">Love what you see? Book your consultation <span className="text-gold-light italic">today.</span></h2>
          <Link to="/contact" className="gold-shimmer-btn font-heading font-bold px-10 py-4 rounded-full inline-block text-lg">Book Consultation</Link>
        </ScrollReveal>
      </section>
    </>
  );
}
