import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-gold-primary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(201,150,58,0.1) 20px, rgba(201,150,58,0.1) 21px)' }} />
      <div className="max-w-[1400px] mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 - Logo */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 2C12.5 2 10 4 9 6C8 8 7 9 5 9C3 9 2 11 2 13C2 15 3 17 5 17C6 17 7 17.5 7.5 19C8 20.5 8.5 23 9 25C9.5 27 10 30 12 30C14 30 14.5 27 15 25C15.5 23 16 21 16 21C16 21 16.5 23 17 25C17.5 27 18 30 20 30C22 30 22.5 27 23 25C23.5 23 24 20.5 24.5 19C25 17.5 26 17 27 17C29 17 30 15 30 13C30 11 29 9 27 9C25 9 24 8 23 6C22 4 19.5 2 16 2Z" stroke="#C9963A" strokeWidth="1.5" fill="none"/></svg>
              <div><span className="font-display text-xl font-semibold text-white">SmileAura</span><br/><span className="font-mono text-[8px] text-gold-primary tracking-[0.25em]">DENTAL STUDIO</span></div>
            </Link>
            <p className="font-display text-white-muted italic text-lg mb-6">"Where Confidence Begins"</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-mid border border-white/5 flex items-center justify-center text-white-muted hover:text-gold-primary hover:border-gold-primary/30 transition-all font-mono text-[10px]">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-mid border border-white/5 flex items-center justify-center text-white-muted hover:text-gold-primary hover:border-gold-primary/30 transition-all font-mono text-[10px]">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-mid border border-white/5 flex items-center justify-center text-white-muted hover:text-gold-primary hover:border-gold-primary/30 transition-all font-mono text-[10px]">YT</a>
            </div>
            <p className="font-mono text-[11px] text-grey-text mt-4">Follow Our Journey</p>
          </div>
          {/* Col 2 - Treatments */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Treatments</h4>
            {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Surgical', 'Pediatric', 'Emergency'].map((t) => (
              <Link key={t} to="/services" className="block font-body text-white-muted text-sm mb-3 hover:text-gold-primary transition-colors">{t}</Link>
            ))}
          </div>
          {/* Col 3 - Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Quick Links</h4>
            {[{ l: 'About Us', p: '/about' }, { l: 'Our Team', p: '/team' }, { l: 'Gallery', p: '/gallery' }, { l: 'Contact', p: '/contact' }, { l: 'Book Appointment', p: '/contact' }].map((t) => (
              <Link key={t.l} to={t.p} className="block font-body text-white-muted text-sm mb-3 hover:text-gold-primary transition-colors">{t.l}</Link>
            ))}
          </div>
          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Contact</h4>
            <p className="font-body text-white-muted text-sm mb-2">404, Dental Plaza, MG Road</p>
            <p className="font-body text-white-muted text-sm mb-4">Bangalore — 560001</p>
            <a href="tel:+919876543210" className="block font-mono text-gold-primary text-lg mb-2 hover:text-gold-light">+91 98765 43210</a>
            <a href="mailto:hello@smileaura.in" className="block font-body text-white-muted text-sm mb-4 hover:text-gold-primary">hello@smileaura.in</a>
            <p className="font-mono text-[12px] text-grey-text">Mon–Sat: 9AM–8PM</p>
            <p className="font-mono text-[12px] text-grey-text">Sun: 10AM–6PM</p>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-grey-text">© 2025 SmileAura Dental Studio. All Rights Reserved.</p>
          <p className="font-mono text-[11px] text-grey-text">Designed by <a href="#" className="text-gold-primary hover:text-gold-light transition-colors">PrimeLink Studio</a></p>
          <div className="flex gap-4 font-mono text-[11px] text-grey-text">
            <a href="#" className="hover:text-gold-primary">Privacy Policy</a>
            <a href="#" className="hover:text-gold-primary">Terms</a>
            <a href="#" className="hover:text-gold-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
