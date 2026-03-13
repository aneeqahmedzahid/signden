import { motion } from 'framer-motion'

const FOUNDER_IMG = 'https://fejaqzptiklpnlmapbub.supabase.co/storage/v1/object/public/gallery/515754098_24448386111432786_5455982351287843315_n.jpg'

const FounderMessage = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/3 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-orange bg-brand-orange/10 border border-brand-orange/25 px-4 py-1.5 rounded-full mb-4">
            Message from the Founder
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            A Word from <span className="text-brand-orange italic font-light">Our Leader</span>
          </h2>
        </motion.div>

        {/* Content card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-brand-gray/10">

          {/* Photo column */}
          <motion.div
            className="lg:col-span-2 relative min-h-[400px] lg:min-h-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={FOUNDER_IMG}
              alt="Raja Shakeel Mukhtar — Founder & CEO, Sign Den Advertising LLC"
              className="w-full h-full object-cover object-top"
              style={{ minHeight: '480px' }}
            />
            {/* Gradient overlay at bottom for name badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8">
              <p className="text-white font-bold text-xl leading-tight">Raja Shakeel Mukhtar</p>
              <p className="text-brand-orange text-sm font-semibold tracking-wider uppercase mt-1">
                Founder SignDen
              </p>
              <p className="text-white/60 text-xs mt-0.5">Sign Den Advertising LLC · Est. 2010</p>
            </div>
          </motion.div>

          {/* Message column */}
          <motion.div
            className="lg:col-span-3 bg-brand-dark p-10 md:p-14 flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Opening quote mark */}
            <svg className="w-14 h-14 text-brand-orange/30 mb-6 flex-shrink-0" viewBox="0 0 48 48" fill="currentColor">
              <path d="M12 30c0-7.18 4.83-13.37 11.5-15.64L25 17c-4.5 1.73-7.5 6.05-7.5 10.5 0 .28.02.55.04.82A5 5 0 0 1 22 33a5 5 0 0 1-5 5 5 5 0 0 1-5-5v-3zm22 0c0-7.18 4.83-13.37 11.5-15.64L47 17c-4.5 1.73-7.5 6.05-7.5 10.5 0 .28.02.55.04.82A5 5 0 0 1 44 33a5 5 0 0 1-5 5 5 5 0 0 1-5-5v-3z" />
            </svg>

            <div className="space-y-5 text-white/80 font-light leading-relaxed text-[1.05rem]">
              <p>
                When I founded <strong className="text-white font-semibold">Sign Den Advertising LLC</strong> in 2010, I had a single vision to create signage that doesn't just display a name, but tells a brand's story. Every sign we make is a promise: a promise of quality, of craftsmanship, and of lasting impact.
              </p>
              <p>
                Over the past 15 years, we have had the privilege of partnering with businesses across the UAE from ambitious startups putting up their first shopfront, to global enterprises trusting us with landmark installations across Dubai and beyond.
              </p>
              <p>
                What drives us every single day is the moment a client sees their vision come to life when an idea on paper becomes a bold, illuminated reality. That moment of pride is why we do what we do.
              </p>
              <p>
                We don't just manufacture signs. We build <em className="text-brand-orange not-italic font-medium">identities</em>.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
              <div>
                <p className="text-white font-bold text-lg">Raja Shakeel Mukhtar</p>
                <p className="text-brand-orange text-sm tracking-widest uppercase font-semibold mt-0.5">
                  Founder SignDen
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FounderMessage
