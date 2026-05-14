import { Link } from 'react-router-dom';
import { ScrollReveal, CountUp } from '../components/ui/SharedUI';
import { Check } from 'lucide-react';

const values = [
  { icon: '💎', title: 'Excellence Without Compromise', desc: 'We invest in the best technology, the best materials, and the most skilled specialists — so you get the best outcomes.' },
  { icon: '🤝', title: 'Compassionate Care', desc: 'Every patient who walks in is treated with dignity, patience, and genuine warmth — regardless of age or anxiety level.' },
  { icon: '🌱', title: 'Lifelong Partnership', desc: 'Our relationship doesn\'t end when you leave the chair. We track your oral health over years, not appointments.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy-mid min-h-[50vh] flex items-center text-center relative">
        <div className="absolute inset-0 overflow-hidden"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-accent/3 blur-[200px]" /></div>
        <div className="max-w-[900px] mx-auto px-6 relative z-10">
          <span className="section-eyebrow">OUR STORY</span>
          <h1 className="font-display text-4xl md:text-[72px] font-light text-white-soft leading-tight mb-6">Built on a Belief That Everyone Deserves a Beautiful <span className="text-gold-light italic">Smile.</span></h1>
          <p className="font-body text-lg text-white-muted max-w-xl mx-auto">Where state-of-the-art dentistry meets genuine human compassion.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-navy-deep">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <ScrollReveal className="lg:w-[45%]">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-gold-primary/40" />
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-navy-card to-navy-mid aspect-[4/3] border border-white/5 flex items-center justify-center">
                  <p className="font-mono text-sm text-white/20">Clinic Interior</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="lg:w-[55%]">
              <ScrollReveal><span className="font-mono text-gold-primary text-sm">Founded in 2009</span></ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="font-body text-[17px] text-white-muted leading-[1.85] mb-5 mt-4">I started SmileAura because I was tired of seeing patients walk into dental clinics looking terrified. Dentistry shouldn't feel like punishment — it should feel like self-care. That conviction has guided every decision we've made.</p>
                <p className="font-body text-[17px] text-white-muted leading-[1.85] mb-5">What makes us different is simple: we treat people, not teeth. Every patient gets a thorough consultation, a transparent treatment plan, and the assurance that they're in the hands of specialists who genuinely care about their comfort.</p>
                <p className="font-body text-[17px] text-white-muted leading-[1.85] mb-8">Our commitment to this community runs deep. From free dental camps to school education programs, we believe that great oral health should be accessible to everyone.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex gap-12">
                  <div><div className="font-display text-5xl text-gold-light"><CountUp end={15000} suffix="+" /></div><p className="font-mono text-[11px] text-white-muted mt-1">Patients Treated</p></div>
                  <div><div className="font-display text-5xl text-gold-light"><CountUp end={15} suffix="+" /></div><p className="font-mono text-[11px] text-white-muted mt-1">Years of Service</p></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-card">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16"><h2 className="font-display text-4xl md:text-5xl text-white-soft">Our Mission & Values</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-8 border-t-2 border-gold-primary h-full">
                  <div className="w-14 h-14 rounded-2xl bg-teal-accent/10 flex items-center justify-center text-2xl mb-6">{v.icon}</div>
                  <h3 className="font-heading font-bold text-white text-xl mb-3">{v.title}</h3>
                  <p className="font-body text-white-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Space */}
      <section className="py-24 bg-navy-deep">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16"><h2 className="font-display text-4xl md:text-[58px] text-white-soft">Step Inside <span className="text-gold-light italic">SmileAura</span></h2></ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-2xl overflow-hidden bg-navy-card aspect-[4/3] relative cursor-pointer">
                  <div className="w-full h-full flex items-center justify-center"><p className="font-mono text-[10px] text-white/20">Clinic Interior {i + 1}</p></div>
                  <div className="absolute inset-0 bg-gold-primary/0 group-hover:bg-gold-primary/10 transition-colors flex items-center justify-center">
                    <span className="font-mono text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity">SmileAura Interior</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-navy-card border-y border-white/5">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {['Indian Dental Association', 'ISO 9001:2015', 'Best Dental Clinic 2024'].map((badge) => (
              <div key={badge} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-navy-mid border border-white/10 flex items-center justify-center mb-2"><span className="text-gold-primary text-xl">✦</span></div>
                <p className="font-mono text-[11px] text-white-muted">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-deep text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl text-white-soft mb-6">Come <span className="text-gold-light italic">Visit Us</span></h2>
          <Link to="/contact" className="gold-shimmer-btn font-heading font-bold px-10 py-4 rounded-full inline-block text-lg">Get Directions</Link>
        </ScrollReveal>
      </section>
    </>
  );
}
