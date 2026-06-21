import { motion } from 'framer-motion';
import { Award, Cpu, Clock, ClipboardList, ShieldCheck, Apple } from 'lucide-react';
import PulseDivider from './PulseDivider';

const FEATURES = [
  { icon: Award, title: 'Certified Coaches', desc: 'Trainers certified in strength, conditioning, and rehab.' },
  { icon: Cpu, title: 'Latest Equipment', desc: 'Internationally sourced machines, free weights, and cardio tech.' },
  { icon: Clock, title: 'Flexible Timings', desc: 'Early mornings to late nights — train on your own schedule.' },
  { icon: ClipboardList, title: 'Customized Plans', desc: 'Programs built around your body, goals, and recovery capacity.' },
  { icon: ShieldCheck, title: 'Hygienic Environment', desc: 'Sanitized equipment and a clean, well-ventilated facility.' },
  { icon: Apple, title: 'Nutrition Guidance', desc: 'Diet plans that complement your training, not work against it.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-mx-black py-24 sm:py-32">
      <div className="container-mx">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">The Max Difference</span>
          <h2 className="heading-lg mt-4">
            Why Members <span className="text-mx-red">Choose Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative bg-mx-charcoal p-9 transition-colors duration-300 hover:bg-mx-ember"
              >
                <Icon size={28} className="text-mx-red mb-5 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display text-xl text-mx-white uppercase tracking-wide">{f.title}</h3>
                <p className="body-text text-sm mt-2">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <PulseDivider flip />
      </div>
    </section>
  );
}
