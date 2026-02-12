import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="temoignages" ref={ref} style={{ padding: '8rem 3rem', background: tokens.colors.creamDark }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
            >
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>05</span>
              <div style={{ width: '60px', height: '1px', background: tokens.colors.border }} />
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: tokens.colors.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Témoignages</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
              style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: tokens.colors.charcoal, lineHeight: 1.2 }}
            >
              Vos <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>retours</em>
            </motion.h2>
          </div>
        </div>

        {/* QR Code prominent card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            background: tokens.colors.cream, border: `1px solid ${tokens.colors.border}`,
            padding: '4rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto',
          }}
        >
          <div style={{
            width: '120px', height: '120px', background: tokens.colors.olive,
            margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" stroke={tokens.colors.cream} strokeWidth="1.5" />
              <rect x="14" y="3" width="7" height="7" stroke={tokens.colors.cream} strokeWidth="1.5" />
              <rect x="3" y="14" width="7" height="7" stroke={tokens.colors.cream} strokeWidth="1.5" />
              <rect x="14" y="14" width="3" height="3" fill={tokens.colors.cream} />
              <rect x="18" y="18" width="3" height="3" fill={tokens.colors.cream} />
            </svg>
          </div>
          <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '0.75rem' }}>
            Votre avis compte
          </h3>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', fontWeight: 300, color: tokens.colors.muted, lineHeight: 1.7, maxWidth: '450px', margin: '0 auto 1.5rem' }}>
            Vous avez travaillé avec APRIORIS ? Partagez votre expérience en scannant le QR code
            ci-dessus ou en laissant un avis Google.
          </p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: tokens.colors.muted, fontStyle: 'italic' }}>
            Les témoignages s'afficheront ici au fur et à mesure
          </p>
        </motion.div>
      </div>
    </section>
  )
}
