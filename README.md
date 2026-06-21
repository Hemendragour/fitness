# The Max Fitness — Website

A premium, fully responsive website for **The Max Fitness**, a gym & fitness club in Bhopal, India. Built with React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Design Notes

- **Palette:** Matte black (`#0F0F0F`), charcoal (`#1E1E1E`), electric red (`#FF3B30`), white, with a dim "ember" red-charcoal tone for subtle surface variation.
- **Type:** Bebas Neue for display/headings (condensed, athletic, stadium-signage energy), Inter for body copy.
- **Signature element:** an animated ECG/pulse-line trace appears in the hero and recurs as section dividers — a visual thread tying "training intensity" to the brand identity, instead of generic hairline dividers.
- **Motion:** scroll-reveal animations throughout (Framer Motion `whileInView`), a parallax image band before the contact section, hover micro-interactions on cards/trainers/buttons, and `prefers-reduced-motion` is respected globally.

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/
    Navbar.jsx        Sticky nav with mobile menu
    Hero.jsx           Full-screen hero, animated pulse waveform, stats
    About.jsx           Two-column about section
    Programs.jsx        6 program cards
    WhyChooseUs.jsx      6 feature cards
    Trainers.jsx        4 trainer profile cards
    Membership.jsx       3-tier pricing (Premium highlighted)
    Testimonials.jsx    Auto-rotating testimonial carousel
    Gallery.jsx          Masonry grid + lightbox
    CtaBanner.jsx        Parallax CTA band
    Contact.jsx          Contact info, map placeholder, form
    Footer.jsx           Quick links, contact, social, copyright
    PulseDivider.jsx     Signature animated section divider
  index.css            Tailwind layers + custom utility classes
  App.jsx              Section assembly
```

## Before Going Live

1. **Images:** All photography currently uses Unsplash placeholder URLs (royalty-free, but generic). Swap in real photos of the actual gym, equipment, trainers, and members — update `src` attributes in `Hero.jsx`, `About.jsx`, `Trainers.jsx`, `Gallery.jsx`, and `CtaBanner.jsx`.
2. **Map:** The Contact section currently shows a styled placeholder with a "Open in Google Maps" link. For a true embedded map, replace the placeholder `<div>` in `Contact.jsx` with an `<iframe>` using Google Maps Embed API (requires an API key or a shareable embed link from Google Maps for the exact address).
3. **Contact form:** The form currently only shows a success state client-side. Connect it to an email service (e.g., Formspree, EmailJS) or your own backend endpoint to actually receive submissions.
4. **Trainer details & social links:** Names, specializations, and Instagram/Facebook/LinkedIn links for trainers are placeholders — update with real trainer info and profile links.
5. **Domain/OG image:** Update `canonical` and Open Graph URLs in `index.html` once the site has a live domain, and add a real `og:image`.

## Tech

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion (animations, parallax, carousel transitions)
- Lucide React (icons)
