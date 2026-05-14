import { useParams, Link } from 'react-router-dom';
import { ScrollReveal, BeforeAfterSlider, Accordion } from '../components/ui/SharedUI';
import { services } from '../data/siteData';
import { Clock, Repeat, Zap, Heart } from 'lucide-react';

export default function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = services.find(s => s.id === slug) || services[0];
  const related = services.filter(s => s.category === treatment.category && s.id !== treatment.id).slice(0, 3);

  const faqs = [
    { q: 'Does it hurt?', a: 'We use modern anesthesia and sedation techniques to ensure a completely pain-free experience. Our Pain-Free Promise guarantees your comfort throughout.' },
    { q: 'How long does it take?', a: `The typical duration for ${treatment.name} is ${treatment.duration}. However, exact times may vary based on individual cases.` },
    { q: 'How much does it cost?', a: `${treatment.name} starts from ${treatment.price}. We provide a detailed cost breakdown during your consultation with no hidden charges.` },
    { q: 'How long do results last?', a: 'Results depend on the specific treatment and individual maintenance. We provide detailed aftercare instructions and schedule follow-up appointments.' },
    { q: 'What should I do to prepare?', a: 'We will provide specific preparation instructions during your consultation. Generally, maintain good oral hygiene and arrive well-rested.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-deep to-navy-mid min-h-[60vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-[55%]">
              <p className="font-mono text-[12px] text-grey-text mb-6">
                <Link to="/" className="hover:text-gold-primary">Home</Link> &gt; <Link to="/services" className="hover:text-gold-primary">Services</Link> &gt; {treatment.name}
              </p>
              <h1 className="font-display text-5xl md:text-[80px] font-light text-white-soft leading-tight mb-4">{treatment.name}</h1>
              <p className="font-display italic text-xl text-gold-light mb-8">{treatment.desc}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[{ icon: <Clock size={16} />, label: treatment.duration }, { icon: <Repeat size={16} />, label: '1-3 Sessions' }, { icon: <Zap size={16} />, label: 'Minimal Pain' }, { icon: <Heart size={16} />, label: 'Fast Recovery' }].map((s, i) => (
                  <span key={i} className="flex items-center gap-2 bg-navy-card px-4 py-2 rounded-full font-mono text-[12px] text-white-muted border border-white/5">{s.icon} {s.label}</span>
                ))}
              </div>
              <Link to="/contact" className="gold-shimmer-btn font-heading font-bold px-8 py-3.5 rounded-full inline-block">Book This Treatment</Link>
            </div>
            <div className="lg:w-[45%]">
              <div className="rounded-[40px_12px_40px_12px] border-[1.5px] border-gold-primary/30 overflow-hidden aspect-[4/3] bg-gradient-to-br from-navy-card to-navy-mid flex items-center justify-center shadow-gold-glow">
                <p className="font-mono text-sm text-white/20">Treatment Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-20 bg-navy-deep">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-4xl text-white-soft mb-8">What Is {treatment.name}?</h2>
            <p className="font-body text-[17px] text-white-muted leading-[1.8] mb-6">{treatment.desc} Our team uses the latest technology and techniques to ensure the best possible outcome for every patient.</p>
            <blockquote className="border-l-4 border-gold-primary pl-6 py-2 my-8">
              <p className="font-display italic text-xl text-white-soft">"The {treatment.name.toLowerCase()} procedure was completely painless. I wish I had come here years ago!"</p>
              <cite className="font-mono text-[12px] text-gold-primary mt-2 block">— SmileAura Patient</cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-navy-mid">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12"><h2 className="font-display text-4xl text-white-soft">What to Expect</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Consultation', 'Preparation', 'Treatment', 'Aftercare'].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center p-6 bg-navy-card rounded-2xl border border-white/5">
                  <span className="font-mono text-gold-primary text-3xl block mb-3">0{i + 1}</span>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{step}</h3>
                  <p className="font-body text-sm text-white-muted">Professional care at every stage of your treatment journey.</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-navy-deep">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12"><h2 className="font-display text-4xl text-white-soft mb-4">Before & After</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal><BeforeAfterSlider treatment={treatment.name} timeframe={treatment.duration} /></ScrollReveal>
            <ScrollReveal delay={0.15}><BeforeAfterSlider treatment={treatment.name} timeframe="Real Patient Result" /></ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-mid">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12"><h2 className="font-display text-4xl text-white-soft">Frequently Asked Questions</h2></ScrollReveal>
          <ScrollReveal><Accordion items={faqs} /></ScrollReveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-navy-deep">
          <div className="max-w-[1400px] mx-auto px-6">
            <ScrollReveal className="text-center mb-12"><h2 className="font-display text-4xl text-white-soft">Related Treatments</h2></ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((s, i) => (
                <ScrollReveal key={s.id} delay={i * 0.1}>
                  <Link to={`/treatments/${s.id}`} className="block bg-navy-card rounded-2xl p-6 border border-white/5 hover:border-gold-primary/20 transition-all">
                    <span className="text-3xl block mb-3">{s.icon}</span>
                    <h3 className="font-heading font-semibold text-white mb-2">{s.name}</h3>
                    <p className="font-body text-sm text-white-muted">{s.desc}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-16 bg-navy-card border-y border-gold-border">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-white-soft mb-6">Ready to Get Your <span className="text-gold-light italic">{treatment.name}</span>?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="gold-shimmer-btn font-heading font-bold px-8 py-3.5 rounded-full">Book Appointment</Link>
            <a href="tel:+919876543210" className="gold-outline-btn font-heading font-semibold px-8 py-3.5 rounded-full">+91 98765 43210</a>
          </div>
        </div>
      </section>
    </>
  );
}
