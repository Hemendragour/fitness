import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Aditya Rajput',
    rating: 5,
    story: 'I lost 14kg in 5 months training at The Max Fitness. The coaches actually track your progress and adjust the plan — it never feels generic.',
  },
  {
    name: 'Sneha Tiwari',
    rating: 5,
    story: 'The personal training sessions completely changed how I approach fitness. Clean equipment, motivating energy, and trainers who genuinely care.',
  },
  {
    name: 'Karan Mehta',
    rating: 4,
    story: 'Best strength training setup in Bhopal, hands down. The group classes keep me consistent even on days I don\'t feel like training.',
  },
  {
    name: 'Pooja Malviya',
    rating: 5,
    story: 'From diet guidance to workout structure, everything at The Max Fitness felt personalized. I finally broke through a plateau I had for years.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative bg-mx-charcoal py-24 sm:py-32 overflow-hidden">
      <div className="container-mx">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow">Member Stories</span>
            <h2 className="heading-lg mt-4">
              Real Results, <span className="text-mx-red">Real Members</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 glass-card px-5 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-mx-red fill-mx-red" />
              ))}
            </div>
            <span className="font-display text-xl text-mx-white">4.8/5</span>
            <span className="font-body text-xs text-mx-smoke">based on member reviews</span>
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Quote size={64} className="absolute -top-6 -left-2 sm:-left-8 text-mx-red/15" />

          <div className="relative min-h-[260px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4 }}
                className="w-full text-center px-4"
              >
                <div className="flex justify-center mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < t.rating ? 'text-mx-red fill-mx-red' : 'text-mx-white/15'}
                    />
                  ))}
                </div>
                <p className="font-body text-lg sm:text-xl text-mx-white/90 leading-relaxed italic">
                  "{t.story}"
                </p>
                <p className="font-display text-xl text-mx-red uppercase mt-6">{t.name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-mx-white hover:bg-mx-red hover:border-mx-red transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-mx-red' : 'w-3 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-mx-white hover:bg-mx-red hover:border-mx-red transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
