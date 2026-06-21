import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import PulseDivider from './PulseDivider';

const PLANS = [
  {
    name: 'Basic',
    tagline: 'For getting started',
    features: ['Full Gym Access', 'Standard Equipment', 'Locker Facility', 'Operating Hours Access'],
    highlight: false,
  },
  {
    name: 'Premium',
    tagline: 'Our most popular plan',
    features: ['Everything in Basic', 'Personal Guidance', 'Diet Support', 'Unlimited Group Classes'],
    highlight: true,
  },
  {
    name: 'Elite',
    tagline: 'For serious transformation',
    features: ['Everything in Premium', 'Dedicated Personal Trainer', 'Custom Workout Plan', 'Nutrition Consultation'],
    highlight: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="relative bg-mx-black py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-mx-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-mx relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow">Membership Plans</span>
          <h2 className="heading-lg mt-4">
            Pick The Plan That <span className="text-mx-red">Fits Your Goal</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-3xl p-8 sm:p-9 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-mx-red/15 to-mx-charcoal border-2 border-mx-red shadow-glow md:-translate-y-4'
                  : 'glass-card hover:border-mx-red/30'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-mx-red text-mx-white text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-glowSm">
                  <Sparkles size={12} /> Most Popular
                </span>
              )}

              <h3 className="font-display text-3xl text-mx-white uppercase">{plan.name}</h3>
              <p className="font-body text-mx-smoke text-sm mt-1">{plan.tagline}</p>

              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-mx-red' : 'text-mx-red/80'}`} />
                    <span className="font-body text-sm text-mx-white/85">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`mt-9 w-full text-center ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <PulseDivider />
      </div>
    </section>
  );
}
