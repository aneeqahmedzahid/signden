import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImage from '../assets/logo.png';

const Footer = () => {
  return (
    <>
      {/* Pre-footer Call to Action */}
      <section
        className="py-24 relative overflow-hidden bg-center bg-cover bg-fixed"
        style={{ backgroundImage: `url('/assets/Gemini_Generated_Image_1s9hs71s9hs71s9h.png')` }}
      >
        {/* Darkening overlay that seamlessly blends into the solid dark footer below */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-dark/80 to-brand-dark" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel-dark p-12 md:p-16 rounded-[2rem] border-white/20"
          >
            <h2 className="text-3xl md:text-5xl mb-4 font-bold text-white">Ready to <span className="text-brand-orange">Elevate</span> Your Brand?</h2>
            <p className="text-white/80 text-lg mb-10">Let's craft eye-catching solutions together.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" className="px-8 py-4 bg-brand-orange text-white rounded-full uppercase tracking-widest font-semibold hover:bg-transparent border-2 border-brand-orange hover:text-brand-orange transition-all duration-300 shadow-[0_10px_30px_rgba(255,102,0,0.3)] hover:shadow-none">
                Start a Project
              </a>
              <a href="tel:+971507864162" className="px-8 py-4 bg-transparent text-white rounded-full uppercase tracking-widest font-semibold border-2 border-white hover:bg-white hover:text-brand-dark transition-all duration-300">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer id="contact" className="bg-brand-dark relative z-20">
        {/* Decorative graphic overlap matching standard footer png styling. We rely on the provided footer asset here. */}
        <div className="w-full relative -mt-1 overflow-hidden flex justify-center bg-brand-dark">
          {/* Top fade overlay to eliminate any hard white edges or gradients from the PNG itself */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-dark to-transparent z-10" />

          <img
            src="/assets/footer.png"
            alt="Sign Den Decal"
            className="w-full max-w-[2000px] h-auto object-cover opacity-50 mix-blend-screen"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.style.height = '100px';
              e.target.parentNode.style.background = '#1a1a1a';
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 text-white text-opacity-80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <img
                src={logoImage}
                alt="Sign Den Logo"
                className="h-12 mb-6 brightness-0 invert"
                onError={(e) => {
                  e.target.outerHTML = '<h2 class="font-heading text-3xl font-bold text-white mb-6 uppercase tracking-wider">Sign Den</h2>'
                }}
              />
              <p className="text-sm font-light leading-relaxed max-w-xs">
                Dubai's premier signage and outdoor media advertising company. We bring brands to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h3 className="text-white font-heading text-xl mb-6">Contact Info</h3>
              <ul className="space-y-4 font-light text-sm">
                <li className="flex flex-col">
                  <span className="text-brand-orange font-bold uppercase tracking-wider text-xs mb-1">Address</span>
                  P.O. Box: 553242 - Dubai, UAE
                </li>
                <li className="flex flex-col">
                  <span className="text-brand-orange font-bold uppercase tracking-wider text-xs mb-1">Phone</span>
                  <a href="tel:+971507864162" className="hover:text-white transition-colors">+971 50 786 4162</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-brand-orange font-bold uppercase tracking-wider text-xs mb-1">Email</span>
                  <a href="mailto:admin@signden.ae" className="hover:text-white transition-colors">admin@signden.ae</a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="col-span-1">
              <h3 className="text-white font-heading text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3 font-light text-sm">
                <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter/Social */}
            <div className="col-span-1">
              <h3 className="text-white font-heading text-xl mb-6">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide text-white/50">
            <p>&copy; {new Date().getFullYear()} SIGN DEN ADVERTISING L.L.C. All Rights Reserved. Developed by <a href="https://www.linkedin.com/in/aneeqahmedzahid/">Aneeq Ahmed Zahid</a> </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
