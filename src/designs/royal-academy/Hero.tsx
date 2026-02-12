import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section id="hero" ref={containerRef} style={{
      minHeight: '100vh', background: tokens.colors.cream,
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      paddingTop: '80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '4rem 3rem 4rem 6rem', maxWidth: '700px', marginLeft: 'auto',
      }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <p style={{
            fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold,
            marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
          }}>
            <span style={{ width: '40px', height: '1px', background: tokens.colors.gold }} />
            Consultante en ingénierie éducative
          </p>

          <h1 style={{
            fontFamily: tokens.fonts.display, fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 500, lineHeight: 1.15, color: tokens.colors.charcoal, marginBottom: '2rem',
          }}>
            Ingénierie éducative
            <br />
            <span style={{ color: tokens.colors.royal }}>et inclusive</span>
            <br />
            <em style={{ fontStyle: 'italic' }}>au service des professionnels</em>
          </h1>

          <p style={{
            fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300,
            lineHeight: 1.7, color: tokens.colors.charcoalLight, maxWidth: '480px', marginBottom: '3rem',
          }}>
            Avec 16 ans d'expertise, j'accompagne les professionnels et les institutions
            dans la conception de dispositifs éducatifs inclusifs, opérationnels et durables.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
              color: 'white', textDecoration: 'none', padding: '1rem 2rem',
              background: tokens.colors.royal, display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}>
              Prendre rendez-vous <span>→</span>
            </a>
            <a href="#manifeste" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
              color: tokens.colors.royal, textDecoration: 'none', padding: '1rem 2rem',
              border: `2px solid ${tokens.colors.royal}`,
            }}>
              Découvrir ma démarche
            </a>
          </div>
        </motion.div>
      </div>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem' }}>
        <motion.div style={{ y }}>
          <div style={{ position: 'absolute', top: '10%', right: '15%', width: '80%', height: '75%', border: `2px solid ${tokens.colors.gold}`, zIndex: 1 }} />
          <div style={{
            position: 'relative', width: '100%', maxWidth: '450px', aspectRatio: '3/4',
            background: `linear-gradient(135deg, ${tokens.colors.royalLight} 0%, ${tokens.colors.royal} 100%)`,
            zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem',
          }}>
            <div style={{
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
            }}>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '3rem', color: 'white' }}>A</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
              Photo professionnelle<br />à ajouter
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          style={{ position: 'absolute', bottom: '15%', left: '5%', background: 'white', padding: '1.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', zIndex: 10 }}
        >
          <p style={{ fontFamily: tokens.fonts.display, fontSize: '2.5rem', fontWeight: 600, color: tokens.colors.royal, lineHeight: 1 }}>16</p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: tokens.colors.muted, marginTop: '0.25rem' }}>années d'expérience</p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #hero { grid-template-columns: 1fr !important; }
          #hero > div:last-child { display: none !important; }
          #hero > div:first-child { padding: 2.5rem 1.25rem !important; max-width: 100% !important; margin-left: 0 !important; }
        }
      `}</style>
    </section>
  )
}
