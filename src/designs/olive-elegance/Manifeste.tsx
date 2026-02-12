import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Manifeste() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="manifeste" ref={ref} style={{ padding: '8rem 3rem', background: tokens.colors.cream }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}
        >
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>01</span>
          <div style={{ width: '60px', height: '1px', background: tokens.colors.border }} />
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: tokens.colors.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Manifeste</span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 style={{
              fontFamily: tokens.fonts.display, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 500, color: tokens.colors.charcoal, lineHeight: 1.15, letterSpacing: '-0.02em',
            }}>
              Changer de{' '}
              <em style={{ fontStyle: 'italic', color: tokens.colors.olive, display: 'block' }}>regard</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.charcoalLight, lineHeight: 1.8 }}>
              Je m'appelle <strong style={{ fontWeight: 500 }}>Danae Azorin</strong>, consultante en ingénierie éducative et inclusive
              avec 16 ans d'expérience auprès de publics variés et vulnérables. Animatrice, éducatrice spécialisée,
              formatrice, référente à l'Aide Sociale à l'Enfance — autant de postes qui m'ont permis de comprendre
              les réalités du terrain et les besoins de chacun.
            </p>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.charcoalLight, lineHeight: 1.8 }}>
              J'ai observé à plusieurs reprises un décalage entre les besoins spécifiques de certains publics
              vulnérables et les réponses proposées par les dispositifs existants. Ces difficultés ne sont pas liées
              à un manque d'engagement des professionnels, mais à des limites structurelles.
            </p>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.charcoalLight, lineHeight: 1.8 }}>
              Ma posture repose sur la <strong style={{ fontWeight: 500 }}>co-construction</strong> et le lien, en mobilisant les compétences
              de chacun et en articulant théorie et pratique, pour que les dispositifs soient opérationnels et durables.
            </p>
          </motion.div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            marginTop: '5rem', padding: '3rem 0',
            borderTop: `1px solid ${tokens.colors.border}`,
            borderBottom: `1px solid ${tokens.colors.border}`,
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: tokens.fonts.display, fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)',
            fontStyle: 'italic', fontWeight: 400, color: tokens.colors.olive,
            lineHeight: 1.5, maxWidth: '900px', margin: '0 auto',
          }}>
            « L'inclusion ne peut pas être une réponse ponctuelle. Pour être réelle,
            elle doit être intégrée, appropriée et durable — s'inscrire dans le quotidien
            professionnel et être mobilisable en continu. »
          </p>
        </motion.blockquote>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #manifeste > div > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
Manifeste.displayName = 'Manifeste'
