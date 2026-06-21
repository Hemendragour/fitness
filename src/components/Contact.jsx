import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-mx-charcoal py-24 sm:py-32">
      <div className="container-mx">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="heading-lg mt-4">
            Start Training <span className="text-mx-red">Today</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: info + map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card p-7">
              <h3 className="font-display text-2xl text-mx-white uppercase mb-5">The Max Fitness</h3>

              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-mx-red mt-0.5 shrink-0" />
                <p className="font-body text-sm text-mx-white/85 leading-relaxed">
                  Third Floor, Gurukripa Arcade, HIG-1, Beside Parul Hospital,
                  No. 6 Locality, Shivaji Nagar, Bhopal, Madhya Pradesh 462016
                </p>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Phone size={20} className="text-mx-red shrink-0" />
                <a href="tel:+917987922293" className="font-body text-sm text-mx-white/85 hover:text-mx-red transition-colors">
                  +91 79879 22293
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram size={20} className="text-mx-red shrink-0" />
                <a
                  href="https://instagram.com/themaxfitness_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-mx-white/85 hover:text-mx-red transition-colors"
                >
                  @themaxfitness_
                </a>
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                <a href="tel:+917987922293" className="btn-primary !py-3 !px-6 text-xs flex-1 justify-center">
                  <Phone size={14} /> Call Now
                </a>
                <a
                  href="https://instagram.com/themaxfitness_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !py-3 !px-6 text-xs flex-1 justify-center"
                >
                  <Instagram size={14} /> Instagram
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative glass-card overflow-hidden h-64 sm:h-72">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#1E1E1E_0%,#0F0F0F_100%)] flex flex-col items-center justify-center gap-3">
                <MapPin size={32} className="text-mx-red" />
                <p className="font-body text-sm text-mx-smoke text-center px-6">
                  Google Map — Shivaji Nagar, Bhopal
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gurukripa+Arcade+HIG-1+Shivaji+Nagar+Bhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-mx-red uppercase tracking-wide hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-7 sm:p-9"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle size={48} className="text-mx-red" />
                <h3 className="font-display text-2xl text-mx-white uppercase">Message Sent</h3>
                <p className="font-body text-sm text-mx-smoke max-w-xs">
                  Thanks for reaching out — our team will contact you shortly to schedule your free trial.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline !py-3 !px-6 text-xs mt-2">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="font-body text-xs uppercase tracking-wide text-mx-smoke">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-mx-white placeholder:text-mx-smoke/60 focus:border-mx-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-body text-xs uppercase tracking-wide text-mx-smoke">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 00000 00000"
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-mx-white placeholder:text-mx-smoke/60 focus:border-mx-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-body text-xs uppercase tracking-wide text-mx-smoke">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your fitness goals..."
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-mx-white placeholder:text-mx-smoke/60 focus:border-mx-red focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary justify-center mt-2">
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
