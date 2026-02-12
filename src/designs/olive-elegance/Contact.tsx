import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} style={{ padding: '6rem 3rem', background: tokens.colors.cream, borderTop: `1px solid ${tokens.colors.border}` }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '1rem' }}
        >
          Construisons <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>ensemble</em>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.muted, marginBottom: '2rem' }}
        >
          Contactez-moi pour échanger sur vos besoins et co-construire un dispositif adapté à votre contexte.
        </motion.p>
        <motion.a href="mailto:contact@aprioris.fr"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
            color: tokens.colors.cream, background: tokens.colors.olive,
            padding: '1.25rem 2.5rem', textDecoration: 'none',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}
        >
          Prendre contact
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" /></svg>
        </motion.a>
      </div>
    </section>
  )
}
