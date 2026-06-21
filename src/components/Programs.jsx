import { motion } from 'framer-motion';
import { Dumbbell, Flame, HeartPulse, Boxes, UserCheck, Users } from 'lucide-react';

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    desc: 'Build raw power and muscle with progressive overload programs guided by certified coaches.',
  },
  {
    icon: Flame,
    title: 'Weight Loss Programs',
    desc: 'Structured fat-loss plans combining training, nutrition, and accountability check-ins.',
  },
  {
    icon: HeartPulse,
    title: 'Cardio & Endurance',
    desc: 'Push your stamina and heart health with high-energy conditioning sessions.',
  },
  {
    icon: Boxes,
    title: 'Functional Training',
    desc: 'Improve real-world movement, mobility, and core strength with dynamic circuits.',
  },
  {
    icon: UserCheck,
    title: 'Personal Training',
    desc: 'One-on-one coaching tailored entirely to your body, goals, and schedule.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    desc: 'High-energy group sessions that bring community and competition to every workout.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-mx-charcoal py-24 sm:py-32">
      <div className="container-mx">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">What We Offer</span>
          <h2 className="heading-lg mt-4">
            Programs Designed To <span className="text-mx-red">Push Limits</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative glass-card p-8 overflow-hidden transition-all duration-300 hover:border-mx-red/40 hover:shadow-glowSm"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-mx-red/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-mx-red/10 border border-mx-red/20 mb-6 group-hover:bg-mx-red group-hover:border-mx-red transition-all duration-300">
                  <Icon size={24} className="text-mx-red group-hover:text-mx-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-2xl text-mx-white uppercase">{p.title}</h3>
                <p className="body-text text-sm mt-3">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
