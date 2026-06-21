import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=900&auto=format&fit=crop', alt: 'Gym interior with weight racks', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=900&auto=format&fit=crop', alt: 'Modern cardio equipment', span: '' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=900&auto=format&fit=crop', alt: 'Group training session', span: '' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=900&auto=format&fit=crop', alt: 'Personal training session', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=900&auto=format&fit=crop', alt: 'Strength training equipment', span: '' },
  { src: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=900&auto=format&fit=crop', alt: 'Free weights area', span: '' },
  { src: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=900&auto=format&fit=crop', alt: 'Group workout class', span: '' },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=900&auto=format&fit=crop', alt: 'Gym floor wide shot', span: 'row-span-2' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const showNext = (e) => { e?.stopPropagation(); setActiveIndex((i) => (i + 1) % GALLERY.length); };
  const showPrev = (e) => { e?.stopPropagation(); setActiveIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length); };

  return (
    <section id="gallery" className="relative bg-mx-black py-24 sm:py-32">
      <div className="container-mx">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">Inside The Club</span>
          <h2 className="heading-lg mt-4">
            A Look <span className="text-mx-red">Inside</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-4">
          {GALLERY.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              className={`group relative rounded-2xl overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-mx-black/0 group-hover:bg-mx-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn size={24} className="text-mx-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-mx-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
          >
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 text-mx-white/80 hover:text-mx-red transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-3 sm:left-8 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-mx-white hover:bg-mx-red transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              src={GALLERY[activeIndex].src}
              alt={GALLERY[activeIndex].alt}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-card"
            />

            <button
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-3 sm:right-8 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-mx-white hover:bg-mx-red transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
