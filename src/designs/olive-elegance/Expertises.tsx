import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Expertises() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const domains = [
    { number: '01', title: 'Protection de l\'Enfance', description: 'Mineurs et jeunes majeurs accompagnés par l\'Aide Sociale à l\'Enfance.', icon: '◯' },
    { number: '02', title: 'Handicap', description: 'Accompagnement et inclusion des publics en situation de handicap.', icon: '△' },
    { number: '03', title: 'Diversité culturelle & linguistique', description: 'Pratiques interculturelles et adaptation aux contextes multilingues.', icon: '□' },
  ]

  const pillars = [
    {
      label: 'Ingénierie éducative et inclusive',
      desc: 'Concevoir des dispositifs intégrant dès leur création les besoins des publics vulnérables.',
      steps: ['Diagnostic partagé', 'Co-conception', 'Pilotage', 'Déploiement & mesure d\'impact', 'Évaluation & ajustements'],
    },
    {
      label: 'Formation & professionnalisation',
      desc: 'Accompagner les professionnels à développer des pratiques inclusives, transférables et durables.',
      steps: ['Mise en situation', 'Expression du vécu', 'Apport théorique progressif', 'Appropriation & transfert'],
    },
  ]

  return (
    <section id="expertises" ref={ref} style={{ padding: '8rem 3rem', background: tokens.colors.creamDark }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
            >
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>02</span>
              <div style={{ width: '60px', height: '1px', background: tokens.colors.border }} />
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: tokens.colors.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Expertises</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
              style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: tokens.colors.charcoal, lineHeight: 1.2 }}
            >
              Domaines d'<em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>action</em>
            </motion.h2>
          </div>
          <motion.a href="/2/services" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} whileHover={{ x: 5 }}
            style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 500, color: tokens.colors.olive, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Voir les prestations
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" /></svg>
          </motion.a>
        </div>

        {/* Expertise domains */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
          {domains.map((domain, i) => (
            <motion.div key={domain.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: tokens.colors.cream, padding: '2.5rem',
                border: `1px solid ${tokens.colors.border}`, cursor: 'pointer',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(92, 107, 74, 0.1)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: tokens.fonts.display, fontSize: '3rem', color: tokens.colors.border, lineHeight: 1 }}>{domain.icon}</span>
                <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.1em' }}>{domain.number}</span>
              </div>
              <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.4rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '0.75rem' }}>{domain.title}</h3>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 300, color: tokens.colors.muted, lineHeight: 1.6 }}>{domain.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Two pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {pillars.map((pillar, i) => (
            <motion.div key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15 }}
              style={{
                background: i === 0 ? tokens.colors.olive : tokens.colors.cream,
                padding: '2.5rem',
                border: i === 1 ? `1px solid ${tokens.colors.border}` : 'none',
              }}
            >
              <h3 style={{
                fontFamily: tokens.fonts.display, fontSize: '1.3rem', fontWeight: 500,
                color: i === 0 ? 'oklch(99% 0.003 260)' : tokens.colors.charcoal,
                marginBottom: '1rem',
              }}>{pillar.label}</h3>
              <p style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 300,
                color: i === 0 ? 'oklch(95% 0.002 260)' : tokens.colors.muted,
                lineHeight: 1.7, marginBottom: '1.5rem',
              }}>{pillar.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {pillar.steps.map((step) => (
                  <div key={step} style={{
                    fontFamily: tokens.fonts.body, fontSize: '0.85rem',
                    color: i === 0 ? 'oklch(92% 0.002 260)' : tokens.colors.charcoalLight,
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                  }}>
                    <span style={{ color: tokens.colors.accent }}>•</span>
                    {step}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #expertises > div > div:first-of-type { grid-template-columns: 1fr !important; }
          #expertises > div > div:last-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
Expertises.displayName = 'Expertises'
