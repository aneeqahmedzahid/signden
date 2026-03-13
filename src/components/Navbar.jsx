import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Derive dynamic styles based on scroll
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );
  
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)']
  );

  const navShadow = useTransform(
    scrollY,
    [0, 50],
    ['0px 0px 0px rgba(0,0,0,0)', '0 8px 32px 0 rgba(0, 0, 0, 0.1)']
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const textColor = isScrolled ? 'text-brand-dark' : 'text-white drop-shadow-md';

  return (
    <motion.nav
      style={{
        background: navBackground,
        borderBottomColor: navBorder,
        borderBottomWidth: '1px',
        boxShadow: navShadow,
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none'
      }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex-shrink-0">
          <img 
            src={logoImage} 
            alt="Sign Den Logo" 
            className={`h-10 md:h-12 transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
            onError={(e) => {
              e.target.onerror = null; 
              // Fallback text if no logo image yet
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="hidden font-heading font-bold text-2xl tracking-wider uppercase" style={{color: isScrolled ? '#1a1a1a' : '#fff'}}>Sign Den</span>
        </a>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-8 font-semibold ${textColor}`}>
          <a href="#home" className="hover:text-brand-orange transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-brand-orange transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-brand-orange transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#gallery" className="hover:text-brand-orange transition-colors relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="px-6 py-2.5 bg-brand-orange text-white rounded-full uppercase tracking-wider text-sm hover:bg-transparent hover:text-brand-orange border-2 border-brand-orange transition-all duration-300 shadow-[0_10px_20px_rgba(255,102,0,0.2)] hover:shadow-none">
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`w-8 h-1 transition-all duration-300 ${isScrolled ? 'bg-brand-dark' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-8 h-1 transition-all duration-300 ${isScrolled ? 'bg-brand-dark' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-8 h-1 transition-all duration-300 ${isScrolled ? 'bg-brand-dark' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Content */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-brand-gray/10"
      >
        <div className="flex flex-col px-6 py-8 gap-6 text-brand-dark font-semibold text-lg items-center">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" className="text-brand-orange" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
