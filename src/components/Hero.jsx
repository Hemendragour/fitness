import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';

const STATS = [
  { value: '4.8★', label: 'Member Rating' },
  { value: '12+', label: 'Expert Trainers' },
  { value: '40+', label: 'Modern Equipment' },
  { value: '1:1', label: 'Personalized Coaching' },
];

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-mx-black">
      {/* Background image with dark cinematic overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mx-black/80 via-mx-black/70 to-mx-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-mx-black/90 via-mx-black/40 to-mx-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,59,48,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 container-mx pt-32 pb-16 flex-1 flex flex-col justify-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-mx-red animate-flicker" />
          Bhopal's Premium Fitness Club
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-xl max-w-4xl"
        >
          Transform Your Body.
          <br />
          <span className="text-mx-red">Elevate</span> Your Life.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="body-text text-base sm:text-lg max-w-xl mt-6"
        >
          Train with expert coaches, world-class equipment, and a motivating
          fitness community in the heart of Bhopal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <button onClick={() => scrollTo('#membership')} className="btn-primary group">
            Start Your Journey
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button onClick={() => scrollTo('#contact')} className="btn-outline group">
            <PlayCircle size={16} />
            Book a Free Trial
          </button>
        </motion.div>

        {/* Signature waveform — live "pulse" reading that ties the hero to the brand's energy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 max-w-2xl"
        >
          <svg viewBox="0 0 600 60" preserveAspectRatio="none" className="w-full h-12 sm:h-14">
            <motion.path
              d="M0,30 L70,30 L85,8 L100,52 L115,30 L180,30 L195,18 L210,42 L225,30 L300,30 L318,4 L338,56 L358,30 L430,30 L445,16 L460,44 L475,30 L600,30"
              fill="none"
              stroke="#FF3B30"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, delay: 0.6, ease: 'easeInOut' }}
              style={{ filter: 'drop-shadow(0 0 8px rgba(255,59,48,0.7))' }}
            />
          </svg>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-6 max-w-2xl border-t border-white/10 pt-8"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label}>
              <p className="font-display text-3xl sm:text-4xl text-mx-white flex items-center gap-1">
                {stat.value}
                {i === 0 && <Star size={18} className="text-mx-red fill-mx-red mb-1" />}
              </p>
              <p className="font-body text-xs sm:text-sm text-mx-smoke uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-mx-smoke z-10"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="w-[1px] h-10 bg-gradient-to-b from-mx-red to-transparent" />
      </motion.div>
    </section>
  );
}
