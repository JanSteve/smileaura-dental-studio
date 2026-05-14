import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  );
}

export function CountUp({ end, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const countRef = useRef(null);
  useEffect(() => {
    if (!isInView || !countRef.current) return;
    const endVal = parseFloat(String(end).replace(/,/g, ''));
    const increment = endVal / (duration * 60);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= endVal) { current = endVal; clearInterval(timer); }
      const display = current % 1 !== 0 ? current.toFixed(1) : Math.floor(current).toLocaleString();
      if (countRef.current) countRef.current.textContent = prefix + display + suffix;
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, suffix, prefix, duration]);
  return <span ref={(el) => { ref.current = el; countRef.current = el; }}>{prefix}0{suffix}</span>;
}

export function BeforeAfterSlider({ treatment = '', timeframe = '' }) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(5, Math.min(95, x));
    if (sliderRef.current) sliderRef.current.style.left = x + '%';
    const beforeEl = containerRef.current.querySelector('.before-clip');
    if (beforeEl) beforeEl.style.clipPath = `inset(0 ${100 - x}% 0 0)`;
  };
  useEffect(() => {
    const onUp = () => { isDragging.current = false; };
    const onMove = (e) => handleMove(e.touches ? e.touches[0].clientX : e.clientX);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchend', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    return () => { window.removeEventListener('mouseup', onUp); window.removeEventListener('mousemove', onMove); window.removeEventListener('touchend', onUp); window.removeEventListener('touchmove', onMove); };
  }, []);
  return (
    <div className="rounded-2xl overflow-hidden border border-overlay-10">
      <div ref={containerRef} className="before-after-slider relative w-full aspect-[4/3]" onMouseDown={() => { isDragging.current = true; }} onTouchStart={() => { isDragging.current = true; }}>
        {/* AFTER image */}
        <div className="absolute inset-0">
          <img src="/images/smile-after.png" alt="After treatment" className="w-full h-full object-cover" />
        </div>
        {/* BEFORE image */}
        <div className="before-clip absolute inset-0" style={{ clipPath: 'inset(0 50% 0 0)' }}>
          <img src="/images/smile-before.png" alt="Before treatment" className="w-full h-full object-cover" />
        </div>
        <div ref={sliderRef} className="absolute top-0 h-full w-0.5 bg-gold-primary z-10" style={{ left: '50%' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold-primary flex items-center justify-center shadow-gold-glow cursor-grab"><span className="text-navy-deep font-mono text-xs">↔</span></div>
        </div>
        <span className="absolute bottom-3 left-3 font-mono text-[11px] text-white/80 z-10 bg-black/40 px-2 py-0.5 rounded">BEFORE</span>
        <span className="absolute bottom-3 right-3 font-mono text-[11px] text-gold-primary z-10 bg-black/40 px-2 py-0.5 rounded">AFTER</span>
      </div>
      {treatment && (<div className="p-4 bg-navy-card"><p className="font-heading font-semibold text-white-soft text-sm">{treatment}</p>{timeframe && <span className="font-mono text-[11px] text-gold-primary">{timeframe}</span>}</div>)}
    </div>
  );
}

export function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-overlay rounded-xl overflow-hidden">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-overlay transition-colors">
            <span className="font-heading font-semibold text-white-soft text-[15px] pr-4">{item.q}</span>
            <motion.span animate={{ rotate: openIdx === i ? 45 : 0 }} className="text-gold-primary text-xl flex-shrink-0">+</motion.span>
          </button>
          <motion.div initial={false} animate={{ height: openIdx === i ? 'auto' : 0, opacity: openIdx === i ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 pb-4 font-body text-white-muted text-sm leading-relaxed">{item.a}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export function WhatsAppFloat() {
  return (
    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[9999] group" aria-label="Chat on WhatsApp">
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse-ring" />
        <div className="relative w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-navy-card rounded-lg font-mono text-[11px] text-white-soft opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-overlay-10">Chat with us</div>
    </a>
  );
}
