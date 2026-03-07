import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-orange uppercase tracking-[3px] font-bold text-sm mb-4 block">Since 2010</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Crafting <br className="hidden md:block" />
            <span className="italic font-light">Eye-Catching</span> <br className="hidden md:block" />
            Solutions That Turn Heads.
          </h2>
          <p className="text-lg md:text-xl text-brand-gray/80 mb-6 font-light">
            SIGN DEN ADVERTISING LLC Signage Solutions is a leading provider of innovative signage solutions for businesses across various industries. With a commitment to quality, creativity, and customer satisfaction, we specialize in designing, manufacturing, and installing custom signage tailored to our clients' unique needs.
          </p>
          <p className="text-lg text-brand-gray/80 mb-10 font-light">
            From custom 3D signs to state-of-the-art LED displays, our team of experts delivers excellence at every step of the process.
          </p>

          <a href="#contact" className="group inline-flex items-center gap-4 text-brand-orange font-bold uppercase tracking-widest hover:gap-6 transition-all duration-300">
            Learn More About Us
            <ArrowRight size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Aesthetic image showcase wrapper */}
          <div className="glass-panel p-4 md:p-6 transform md:rotate-3 hover:rotate-0 transition-all duration-500">
            <div className="rounded-xl overflow-hidden shadow-xl relative aspect-[4/3]">
              <div className="absolute inset-0 bg-brand-dark/20 z-10 transition-opacity duration-300 hover:opacity-0" />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                alt="Sign Den Fabrication"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                <h3 className="text-white text-2xl font-heading mb-1">Precision Fabrication</h3>
                <p className="text-white/80 text-sm">Quality materials and expert craftsmanship.</p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
