import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/SharedUI';
import { useStore } from '../../store/useStore';
import { quizQuestions } from '../../data/siteData';

const recommendations = {
  'Staining / Discoloration': { treatment: 'Professional Teeth Whitening', slug: 'teeth-whitening' },
  'Crooked Teeth': { treatment: 'Invisalign Clear Aligners', slug: 'invisalign' },
  'Missing Teeth': { treatment: 'Dental Implants', slug: 'dental-implants' },
  'Pain / Sensitivity': { treatment: 'Root Canal Treatment', slug: 'root-canal' },
};

export default function SmileQuiz() {
  const { quizStep, quizAnswers, quizComplete, setQuizAnswer, resetQuiz } = useStore();
  const currentQ = quizQuestions[quizStep];
  const rec = recommendations[quizAnswers[0]] || { treatment: 'Smile Design Consultation', slug: 'smile-design' };

  return (
    <section className="py-24 bg-navy-deep">
      <div className="max-w-[800px] mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[48px] font-light text-white-soft leading-tight">
            Not Sure Where to Start? Take Our Free <span className="text-gold-light italic">Smile Assessment.</span>
          </h2>
        </ScrollReveal>

        <div className="glass-card rounded-3xl p-8 md:p-12 border border-gold-border">
          {/* Progress Bar */}
          <div className="h-1 bg-navy-mid rounded-full mb-8 overflow-hidden">
            <motion.div animate={{ width: `${((quizComplete ? 5 : quizStep) / 5) * 100}%` }} className="h-full bg-teal-accent rounded-full" transition={{ duration: 0.4 }} />
          </div>

          <AnimatePresence mode="wait">
            {!quizComplete ? (
              <motion.div key={quizStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <p className="font-mono text-[11px] text-gold-primary mb-3">QUESTION {quizStep + 1} OF 5</p>
                <h3 className="font-heading font-bold text-xl text-white mb-8">{currentQ.q}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentQ.opts.map((opt) => (
                    <button key={opt.text} onClick={() => setQuizAnswer(quizStep, opt.text)}
                      className="flex items-center gap-4 p-5 bg-navy-mid rounded-xl border border-white/5 hover:border-gold-primary/40 hover:bg-navy-card transition-all text-left min-h-[60px]">
                      <span className="text-2xl">{opt.icon}</span>
                      <span className="font-heading font-medium text-white text-sm">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-accent/20 flex items-center justify-center">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">Your Personalized Recommendation</h3>
                <p className="font-body text-white-muted mb-6">Based on your answers, we recommend a</p>
                <p className="font-display text-3xl text-gold-light italic mb-8">{rec.treatment}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="gold-shimmer-btn font-heading font-bold px-8 py-3.5 rounded-full text-center">Book Your Free Assessment</a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-heading font-bold px-8 py-3.5 rounded-full text-center hover:bg-[#20b858] transition-colors">Chat with a Dentist</a>
                </div>
                <button onClick={resetQuiz} className="font-mono text-[12px] text-grey-text mt-6 hover:text-gold-primary transition-colors">Take Quiz Again</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
