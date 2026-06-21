import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const TRAINERS = [
  {
    name: 'Rohan Sharma',
    role: 'Strength & Conditioning Coach',
    exp: '8+ Years Experience',
     
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Aisha Khan',
    role: 'Weight Loss & Nutrition Specialist',
    exp: '6+ Years Experience',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Vikram Singh',
    role: 'Functional Training Expert',
    exp: '10+ Years Experience',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Priya Verma',
    role: 'Personal Training & HIIT Coach',
    exp: '5+ Years Experience',
    img: 'https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative bg-mx-charcoal py-24 sm:py-32">
      <div className="container-mx">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">Meet The Team</span>
          <h2 className="heading-lg mt-4">
            Coaches Who <span className="text-mx-red">Train Champions</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-mx-black aspect-[3/4]"
            >
              <img
                src={t.img}
                alt={`${t.name}, ${t.role} at The Max Fitness`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mx-black via-mx-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-2xl text-mx-white uppercase">{t.name}</h3>
                <p className="font-body text-mx-red text-xs uppercase tracking-wide mt-1">{t.role}</p>
                <p className="font-body text-mx-smoke text-xs mt-1">{t.exp}</p>

                <div className="flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      aria-label="Trainer social link"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-mx-red transition-colors"
                    >
                      <Icon size={14} className="text-mx-white" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
