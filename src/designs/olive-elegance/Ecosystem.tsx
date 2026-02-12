import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const partners = [
    'Professionnels de l\'éducation et de la formation',
    'Organismes de formation et structures éducatives',
    'Institutions, collectivités et acteurs publics',
    'Associations et acteurs de l\'inclusion',
    'Entreprises engagées dans la formation et l\'accessibilité',
    'Partenariats pédagogiques et experts métiers',
  ]

  return (
    <section ref={ref} style={{ padding: '6rem 3rem', background: tokens.colors.cream, borderTop: `1px solid ${tokens.colors.border}` }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}
        >
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>04</span>
          <div style={{ width: '60px', height: '1px', background: tokens.colors.border }} />
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: tokens.colors.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Écosystème</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
            style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 500, color: tokens.colors.charcoal, lineHeight: 1.2 }}
          >
            Les acteurs de la transformation{' '}
            <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>éducative</em>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
          >
            {partners.map((partner, i) => (
              <div key={i} style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 300,
                color: tokens.colors.charcoalLight, display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                padding: '0.75rem 0', borderBottom: `1px solid ${tokens.colors.border}`,
              }}>
                <span style={{ color: tokens.colors.gold, marginTop: '0.15rem' }}>—</span>
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
