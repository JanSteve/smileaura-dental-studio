import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { useStore } from '../../store/useStore';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Our Team', path: '/team' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useStore();
  const location = useLocation();

  useEffect(() => {
    // Initial theme setup
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => { closeMobileMenu(); }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'bg-navy-deep/90 backdrop-blur-[24px] border-b border-[rgba(201,150,58,0.22)]' : 'bg-transparent'}`} style={{ height: '72px' }}>
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C12.5 2 10 4 9 6C8 8 7 9 5 9C3 9 2 11 2 13C2 15 3 17 5 17C6 17 7 17.5 7.5 19C8 20.5 8.5 23 9 25C9.5 27 10 30 12 30C14 30 14.5 27 15 25C15.5 23 16 21 16 21C16 21 16.5 23 17 25C17.5 27 18 30 20 30C22 30 22.5 27 23 25C23.5 23 24 20.5 24.5 19C25 17.5 26 17 27 17C29 17 30 15 30 13C30 11 29 9 27 9C25 9 24 8 23 6C22 4 19.5 2 16 2Z" stroke="#C9963A" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-display text-[22px] font-semibold text-white-soft leading-none">SmileAura</span>
              <span className="font-mono text-[9px] text-gold-primary tracking-[0.25em]">DENTAL STUDIO</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="relative font-heading text-[14px] font-medium text-white-muted hover:text-gold-primary transition-colors duration-200">
                {link.label}
                {location.pathname === link.path && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gold-primary" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-5">
            <button onClick={toggleTheme} className="text-white-muted hover:text-gold-primary transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="tel:+919876543210" className="flex items-center gap-2 font-mono text-[13px] text-gold-primary hover:text-gold-light transition-colors">
              <Phone size={14} /> +91 98765 43210
            </a>
            <Link to="/contact" className="gold-shimmer-btn font-heading font-semibold text-[14px] px-5 py-2.5 rounded-full">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMobileMenu} className="lg:hidden text-gold-primary p-2 z-[1002]" aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-navy-deep flex flex-col items-center justify-center gap-6">
            {navLinks.map((link, i) => (
              <motion.div key={link.path} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                <Link to={link.path} onClick={closeMobileMenu} className="font-display text-[42px] text-white-soft hover:text-gold-primary transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col items-center gap-6 mt-4">
              <button onClick={toggleTheme} className="flex items-center gap-3 text-white-muted hover:text-gold-primary transition-colors text-lg" aria-label="Toggle theme">
                {isDark ? <><Sun size={24} /> Light Mode</> : <><Moon size={24} /> Dark Mode</>}
              </button>
              <Link to="/contact" onClick={closeMobileMenu} className="gold-shimmer-btn font-heading font-bold text-[18px] px-10 py-4 rounded-full inline-block">
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
