import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-mx-black/85 backdrop-blur-xl border-b border-white/[0.06] py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-mx flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-2 group"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-mx-red/15 border border-mx-red/40 group-hover:bg-mx-red/25 transition-colors">
            <Dumbbell size={16} className="text-mx-red" />
          </span>
          <span className="font-display text-xl sm:text-2xl tracking-wide text-mx-white leading-none">
            THE MAX <span className="text-mx-red">FITNESS</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative font-body text-sm font-medium text-mx-white/80 hover:text-mx-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:w-0 after:bg-mx-red after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#membership"
            onClick={(e) => { e.preventDefault(); handleNavClick('#membership'); }}
            className="btn-primary !py-3 !px-6 text-xs"
          >
            Join Now
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-mx-white p-2 -mr-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-mx-black/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <ul className="container-mx flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="block py-3 font-body text-base font-medium text-mx-white/85 border-b border-white/[0.05]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#membership"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#membership'); }}
                  className="btn-primary w-full text-xs"
                >
                  Join Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
