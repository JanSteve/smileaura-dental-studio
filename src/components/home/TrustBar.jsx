import { ScrollReveal, CountUp } from '../ui/SharedUI';

const stats = [
  { num: 15000, suffix: '+', label: 'Smiles Transformed' },
  { num: 15, suffix: '+', label: 'Years of Excellence' },
  { num: 12, suffix: '', label: 'Expert Specialists' },
  { num: 98, suffix: '%', label: 'Pain-Free Procedures' },
  { num: 4.9, suffix: '★', label: 'Average Patient Rating' },
];

export default function TrustBar() {
  return (
    <section className="bg-navy-card py-16 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${i < stats.length - 1 ? 'md:border-r md:border-gold-primary/20' : ''}`}>
                <div className="font-display text-4xl md:text-5xl text-gold-light mb-2">
                  <CountUp end={s.num} suffix={s.suffix} />
                </div>
                <p className="font-mono text-[11px] text-white-muted tracking-[0.15em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
