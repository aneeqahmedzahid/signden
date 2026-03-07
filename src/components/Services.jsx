import { motion } from 'framer-motion';
import { Sparkles, MonitorPlay, Building2 } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange uppercase tracking-[3px] font-bold text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">Comprehensive Brand Solutions</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Service 1 */}
          <motion.div variants={itemVariants} className="glass-panel-dark p-10 group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
              <Sparkles size={32} />
            </div>
            <h3 className="text-2xl text-white mb-4">Design Services</h3>
            <p className="text-white/60 leading-relaxed mb-8">
              Our team of talented designers works closely with clients to conceptualize and create visually appealing signage that effectively communicates their brand message.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div variants={itemVariants} className="glass-panel-dark p-10 group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
              <MonitorPlay size={32} />
            </div>
            <h3 className="text-2xl text-white mb-4">Manufacturing</h3>
            <p className="text-white/60 leading-relaxed mb-8">
              Utilizing state-of-the-art technology and premium materials, we manufacture signage of the highest quality, ensuring durability and longevity.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div variants={itemVariants} className="glass-panel-dark p-10 group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
              <Building2 size={32} />
            </div>
            <h3 className="text-2xl text-white mb-4">Installation</h3>
            <p className="text-white/60 leading-relaxed mb-8">
              Our experienced installation team ensures seamless integration of signage into any environment, whether it be indoor, outdoor, or specialized locations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
