import { motion } from 'framer-motion';

// Signature element: an ECG/heartbeat-style trace that runs through the page
// as section dividers — echoing training intensity & the hero's pulse animation.
export default function PulseDivider({ flip = false, className = '' }) {
  const path = flip
    ? 'M0,24 L140,24 L160,8 L180,40 L200,4 L220,24 L420,24 L440,12 L460,36 L480,24 L700,24 L720,6 L745,42 L765,24 L1000,24 L1020,14 L1040,30 L1060,24 L1320,24'
    : 'M0,24 L160,24 L180,40 L200,8 L220,24 L420,24 L440,36 L460,12 L480,24 L700,24 L720,42 L745,6 L765,24 L1000,24 L1020,30 L1040,14 L1060,24 L1320,24';

  return (
    <div className={`relative w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1320 48"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-12"
      >
        <line x1="0" y1="24" x2="1320" y2="24" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <motion.path
          d={path}
          fill="none"
          stroke="#FF3B30"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(255,59,48,0.6))' }}
        />
      </svg>
    </div>
  );
}
