import { motion, useScroll, useTransform } from 'framer-motion';
import bgImage from '../assets/Gemini_Generated_Image_sou14sou14sou14s.png';
import logoImage from '../assets/logo.png';
const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      <section id="home" className="relative h-screen min-h-[700px] flex px-6 items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />

        {/* Content */}
        <motion.div 
          style={{ opacity: opacityText }}
          className="relative z-20 max-w-5xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight flex flex-col items-center justify-center gap-4"
          >
            <span>Elevate Your Brand With</span>
            <img src={logoImage} alt="Sign Den" className="h-16 md:h-24 lg:h-32 inline-block brightness-0 invert" />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-3xl mx-auto"
          >
            Dubai's Premium Signage, LED Screens & Outdoor Media Solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="#services" className="px-8 py-4 bg-brand-orange text-white rounded-full uppercase tracking-widest font-semibold hover:bg-transparent border-2 border-brand-orange hover:text-brand-orange transition-all duration-300 shadow-[0_10px_30px_rgba(255,102,0,0.3)] hover:shadow-none">
              Explore Our Work
            </a>
            <a href="tel:800SIGNDEN" className="px-8 py-4 bg-transparent text-white rounded-full uppercase tracking-widest font-semibold border-2 border-white hover:bg-white hover:text-brand-dark transition-all duration-300">
              800 SIGNDEN
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* overlap info bar */}
      <div className="relative -mt-16 z-30 px-6 flex justify-center pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel w-full max-w-5xl py-8 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0"
        >
          <div className="flex flex-col text-center">
            <span className="text-sm text-brand-gray/60 uppercase tracking-widest font-bold mb-1">Call Us</span>
            <span className="font-heading text-2xl font-bold text-brand-dark">+971 50 786 4162</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-brand-gray/20"></div>
          <div className="flex flex-col text-center">
            <span className="text-sm text-brand-gray/60 uppercase tracking-widest font-bold mb-1">Email</span>
            <span className="font-heading text-2xl font-bold text-brand-dark">admin@signden.ae</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-brand-gray/20"></div>
          <div className="flex flex-col text-center">
            <span className="text-sm text-brand-gray/60 uppercase tracking-widest font-bold mb-1">Location</span>
            <span className="font-heading text-2xl font-bold text-brand-dark">Dubai, UAE</span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
