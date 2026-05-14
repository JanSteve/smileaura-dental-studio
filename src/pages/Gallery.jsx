import { Link } from 'react-router-dom';
import { ScrollReveal, BeforeAfterSlider } from '../components/ui/SharedUI';
import { useStore } from '../store/useStore';

const galleryTabs = ['Before & After', 'Clinic Interior', 'Treatment Process', 'Patient Moments'];
const baItems = [
  { t: 'Teeth Whitening', d: '6 shades brighter — 90 min' }, { t: 'Porcelain Veneers', d: 'Full smile redesign — 5 days' },
  { t: 'Braces', d: '18-month transformation' }, { t: 'Dental Implants', d: 'Single implant — 3 months' },
  { t: 'Invisalign', d: '14 months — clear aligners' }, { t: 'Dental Implants', d: 'Full arch — 6 months' },
];

const clinicImages = ['/images/clinic-interior.png', '/images/clinic-waiting.png', '/images/treatment-room.png', '/images/dental-technology.png', '/images/clinic-exterior.png', '/images/clinic-interior.png', '/images/treatment-room.png', '/images/clinic-waiting.png'];
const treatmentImages = ['/images/dental-technology.png', '/images/treatment-room.png', '/images/clinic-interior.png', '/images/dental-technology.png', '/images/treatment-room.png', '/images/clinic-interior.png'];
const patientImages = ['/images/happy-patient.png', '/images/smile-after.png', '/images/happy-patient.png', '/images/smile-after.png', '/images/happy-patient.png', '/images/smile-after.png'];

export default function Gallery() {
  const { galleryTab, setGalleryTab } = useStore();
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-deep to-navy-mid min-h-[40vh] flex items-center text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="font-display text-4xl md:text-[72px] font-light text-white-soft leading-tight mb-6">Smiles We've <span className="text-gold-light italic">Transformed</span></h1>
          <p className="font-body text-lg text-white-muted">Every result you see here is a real SmileAura patient.</p>
        </div>
      </section>

      <div className="sticky top-[72px] z-50 bg-navy-deep/90 backdrop-blur-xl border-b border-overlay py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex gap-3 overflow-x-auto pb-1">
          {galleryTabs.map(tab => (
            <button key={tab} onClick={() => setGalleryTab(tab)} className={`font-heading text-sm font-medium px-5 py-2 rounded-full whitespace-nowrap transition-all ${galleryTab === tab ? 'bg-gold-primary text-navy-deep' : 'text-white-soft hover:text-gold-light'}`}>{tab}</button>
          ))}
        </div>
      </div>

      <section className="py-16 bg-navy-deep">
        <div className="max-w-[1400px] mx-auto px-6">
          {galleryTab === 'Before & After' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {baItems.map((item, i) => (<ScrollReveal key={i} delay={(i % 4) * 0.1}><BeforeAfterSlider treatment={item.t} timeframe={item.d} /></ScrollReveal>))}
            </div>
          )}
          {galleryTab === 'Clinic Interior' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clinicImages.map((img, i) => (
                <ScrollReveal key={i} delay={(i % 3) * 0.1}>
                  <div className="group rounded-2xl overflow-hidden bg-navy-card aspect-[4/3] relative cursor-pointer border border-overlay hover:border-gold-primary/20 transition-all">
                    <img src={img} alt={`Clinic view ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gold-primary/0 group-hover:bg-gold-primary/10 transition-colors flex items-center justify-center">
                      <span className="font-mono text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 px-3 py-1 rounded-full">View Full</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
          {galleryTab === 'Treatment Process' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {treatmentImages.map((img, i) => (
                <ScrollReveal key={i} delay={(i % 3) * 0.1}>
                  <div className="rounded-2xl overflow-hidden bg-navy-card aspect-[4/3] border border-overlay">
                    <img src={img} alt={`Treatment process ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
          {galleryTab === 'Patient Moments' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {patientImages.map((img, i) => (
                <ScrollReveal key={i} delay={(i % 3) * 0.1}>
                  <div className="rounded-2xl overflow-hidden bg-navy-card aspect-[4/3] border border-overlay">
                    <img src={img} alt={`Patient moment ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-navy-card text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl text-white-soft mb-6">Love what you see? Book your consultation <span className="text-gold-light italic">today.</span></h2>
          <Link to="/contact" className="gold-shimmer-btn font-heading font-bold px-10 py-4 rounded-full inline-block text-lg">Book Consultation</Link>
        </ScrollReveal>
      </section>
    </>
  );
}
