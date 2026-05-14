import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Shield, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy-mid to-navy-deep">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-teal-accent/5 blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Block */}
          <div className="lg:w-[58%]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold-primary/10 border border-gold-border rounded-full px-4 py-1.5 mb-8">
              <span className="font-mono text-[11px] text-gold-primary tracking-wider">AWARD-WINNING DENTAL CARE ✦</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-[52px] md:text-[72px] lg:text-[90px] font-light text-white-soft leading-[1.0] mb-8">
              Your Perfect{' '}<br />
              <span className="text-gold-light italic font-normal">Smile</span> Starts<br />
              Here.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-lg text-white-muted max-w-[460px] mb-10 leading-relaxed">
              Expert dental care in a warm, modern environment. From routine checkups to full smile transformations — we treat every patient like family.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact" className="gold-shimmer-btn font-heading font-bold text-base px-8 py-3.5 rounded-full text-center">
                Book Free Consultation
              </Link>
              <Link to="/services" className="gold-outline-btn font-heading font-semibold text-base px-8 py-3.5 rounded-full text-center">
                Explore Treatments →
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-6 text-white-muted">
              <span className="flex items-center gap-2 font-mono text-[12px]"><Star size={14} className="text-gold-primary fill-gold-primary" /> 4.9/5 (847 Reviews)</span>
              <span className="flex items-center gap-2 font-mono text-[12px]"><Shield size={14} className="text-teal-accent" /> 15+ Years Experience</span>
              <span className="flex items-center gap-2 font-mono text-[12px]"><Heart size={14} className="text-gold-light" /> Pain-Free Guarantee</span>
            </motion.div>
          </div>

          {/* Right Block - REAL IMAGE */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-[42%] hidden lg:block relative">
            <div className="relative rounded-[40px_12px_40px_12px] border-[1.5px] border-gold-primary/40 overflow-hidden shadow-gold-glow aspect-[3/4] bg-gradient-to-br from-navy-card to-navy-mid">
              <img src="/images/happy-patient.png" alt="Happy SmileAura patient with a beautiful smile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-8 bg-white dark:bg-navy-card rounded-2xl px-5 py-3 shadow-lg border border-overlay-10">
              <p className="font-heading font-bold text-navy-deep dark:text-white-soft text-sm">⭐ 4.9 Rating</p>
              <p className="font-mono text-[10px] text-grey-text">847 Happy Patients</p>
            </motion.div>

            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -top-4 -right-6 bg-gold-primary rounded-2xl px-5 py-3 shadow-gold-glow">
              <p className="font-heading font-bold text-navy-deep text-sm">15+ Years</p>
              <p className="font-mono text-[10px] text-navy-deep/70">Expert Care</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
