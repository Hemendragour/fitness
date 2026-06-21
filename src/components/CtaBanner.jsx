import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="relative h-[60vh] sm:h-[70vh] overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-mx-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-mx-black via-transparent to-mx-black" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="heading-lg max-w-2xl mx-auto">
          Your Transformation Starts With <span className="text-mx-red">One Decision</span>
        </h2>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="btn-primary mt-9 inline-flex"
        >
          Book a Free Trial <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
