import { Instagram, Facebook, Youtube, MapPin, Phone, Dumbbell } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-mx-black border-t border-white/[0.06] pt-16 pb-8">
      <div className="container-mx grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-mx-red/15 border border-mx-red/40">
              <Dumbbell size={16} className="text-mx-red" />
            </span>
            <span className="font-display text-xl tracking-wide text-mx-white">
              THE MAX <span className="text-mx-red">FITNESS</span>
            </span>
          </div>
          <p className="font-body text-sm text-mx-smoke leading-relaxed max-w-xs">
            Bhopal's premium fitness club — expert coaching, modern equipment,
            and a community built to push you further.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-mx-white uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="font-body text-sm text-mx-smoke hover:text-mx-red transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-mx-white uppercase mb-4">Contact</h4>
          <div className="flex items-start gap-2.5 mb-3">
            <MapPin size={16} className="text-mx-red mt-0.5 shrink-0" />
            <p className="font-body text-sm text-mx-smoke leading-relaxed">
              Third Floor, Gurukripa Arcade, HIG-1, Beside Parul Hospital,
              No. 6 Locality, Shivaji Nagar, Bhopal, MP 462016
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone size={16} className="text-mx-red shrink-0" />
            <a href="tel:+917987922293" className="font-body text-sm text-mx-smoke hover:text-mx-red transition-colors">
              +91 79879 22293
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-mx-white uppercase mb-4">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/themaxfitness_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] hover:bg-mx-red transition-colors"
            >
              <Instagram size={16} className="text-mx-white" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] hover:bg-mx-red transition-colors"
            >
              <Facebook size={16} className="text-mx-white" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] hover:bg-mx-red transition-colors"
            >
              <Youtube size={16} className="text-mx-white" />
            </a>
          </div>
          <p className="font-body text-xs text-mx-smoke mt-5">@themaxfitness_</p>
        </div>
      </div>

      <div className="container-mx mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-mx-smoke text-center sm:text-left">
          © 2026 The Max Fitness. All Rights Reserved.
        </p>
        <p className="font-body text-xs text-mx-smoke/70">
          Designed for those who refuse to settle.
        </p>
      </div>
    </footer>
  );
}
