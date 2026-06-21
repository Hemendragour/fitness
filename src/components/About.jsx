import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import PulseDivider from './PulseDivider';

const POINTS = [
  'Premium workout environment designed for focus and performance',
  'Certified trainers with proven track records',
  'Modern, internationally-standard equipment',
  'Personalized fitness plans built around your goals',
  'A supportive community that keeps you accountable',
];

export default function About() {
  return (
    <section id="about" className="relative bg-mx-black py-24 sm:py-32">
      <div className="container-mx grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=1200&auto=format&fit=crop"
              alt="Member training with free weights at The Max Fitness"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mx-black/70 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -right-4 sm:-right-8 glass-card px-6 py-5 shadow-glowSm"
          >
            <p className="font-display text-4xl text-mx-red leading-none">4.8★</p>
            <p className="font-body text-xs text-mx-smoke uppercase tracking-wide mt-1">Member Rating</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">About The Max Fitness</span>
          <h2 className="heading-lg mt-4">
            Built For Those Who <span className="text-mx-red">Refuse</span> To Settle
          </h2>
          <p className="body-text mt-6 text-base sm:text-lg">
            The Max Fitness brings an international fitness-club experience to
            Shivaji Nagar, Bhopal. Every detail — from our equipment to our
            coaching philosophy — is built to help you train harder, recover
            smarter, and see real results.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={20} className="text-mx-red mt-0.5 shrink-0" />
                <span className="font-body text-mx-white/85 text-sm sm:text-base">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="mt-20">
        <PulseDivider />
      </div>
    </section>
  );
}
