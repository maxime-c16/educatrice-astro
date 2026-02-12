import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={ref} style={{
      minHeight: '100vh', background: tokens.colors.royal,
      position: 'relative', display: 'flex', alignItems: 'center', paddingTop: '80px',
    }}>
      {/* Geometric background pattern */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.03) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.03) 75%)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
      }} />

      <div style={{
        maxWidth: '1400px', margin: '0 auto', padding: '4rem 3rem',
        display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '4rem',
        alignItems: 'center', position: 'relative', zIndex: 1,
      }}>
        <motion.div style={{ y, opacity }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div style={{
              fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent,
              padding: '0.5rem 1rem', background: 'rgba(237, 137, 54, 0.15)', display: 'inline-block', marginBottom: '2rem',
            }}>16+ ans d'expertise · Multi-secteurs</div>

            <h1 style={{
              fontFamily: tokens.fonts.display, fontSize: 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 800, lineHeight: 1.05, color: 'white', marginBottom: '2rem',
            }}>
              Ingénierie
              <br />
              <span style={{ color: tokens.colors.accent }}>éducative</span>
              <br />
              et inclusive
            </h1>

            <p style={{
              fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300,
              lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: '500px', marginBottom: '2.5rem',
            }}>
              Conception et accompagnement de dispositifs éducatifs et inclusifs
              à destination des professionnels. L'inclusion ne se fait pas à posteriori :
              elle se prévoit dès la conception.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#contact" style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 600,
                color: tokens.colors.royalDark, textDecoration: 'none', padding: '1rem 2rem',
                background: tokens.colors.accent, display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              }}>Nous contacter <span style={{ fontSize: '1.2rem' }}>→</span></a>
              <a href="#manifeste" style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
                color: 'white', textDecoration: 'none', padding: '1rem 2rem',
                border: '2px solid rgba(255,255,255,0.3)',
              }}>En savoir plus</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem',
          }}>
            {[
              { value: '16', unit: 'ans', label: 'Expérience terrain' },
              { value: '6+', unit: '', label: 'Projets structurants' },
              { value: '3', unit: '', label: 'Domaines d\'expertise' },
              { value: '3', unit: '', label: 'Langues parlées' },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                style={{
                  padding: '1.5rem', background: i === 0 ? tokens.colors.accent : 'rgba(255,255,255,0.08)',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontFamily: tokens.fonts.display, fontSize: '2.5rem', fontWeight: 800, color: i === 0 ? tokens.colors.royalDark : 'white', lineHeight: 1 }}>
                  {stat.value}<span style={{ fontSize: '1rem' }}>{stat.unit}</span>
                </p>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: i === 0 ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #hero > div { grid-template-columns: 1fr !important; }
          #hero [style*="grid-template-columns: repeat(2, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; max-width: 400px; }
        }
      `}</style>
    </section>
  )
}
Hero.displayName = 'Hero'
