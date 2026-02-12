import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { tokens, blobStyle } from './tokens'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={ref} style={{
      minHeight: '100vh', background: tokens.colors.cream, position: 'relative',
      overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: '80px',
    }}>
      <div style={blobStyle(tokens.colors.sage, 600, '10%', '-10%', 20)} />
      <div style={blobStyle(tokens.colors.terracotta, 400, '60%', '70%', -15)} />
      <div style={blobStyle(tokens.colors.moss, 300, '70%', '20%', 45)} />

      <div style={{
        maxWidth: '1400px', margin: '0 auto', padding: '4rem 3rem',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem',
        alignItems: 'center', position: 'relative', zIndex: 1,
      }}>
        <motion.div style={{ y, opacity }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <p style={{
              fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.terracotta, marginBottom: '1.5rem',
            }}>✦ APRIORIS — Ingénierie éducative et inclusive</p>

            <h1 style={{
              fontFamily: tokens.fonts.display, fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
              fontWeight: 400, lineHeight: 1.1, color: tokens.colors.charcoal, marginBottom: '2rem',
            }}>
              Changer de
              <br />
              <span style={{ color: tokens.colors.forest }}>regard</span>, accompagner
              <br />
              <em style={{ fontStyle: 'italic', color: tokens.colors.forestLight, display: 'inline-block', marginTop: '0.25rem' }}>
                des pratiques durables
              </em>
            </h1>

            <p style={{
              fontFamily: tokens.fonts.body, fontSize: '1.15rem', fontWeight: 300,
              lineHeight: 1.8, color: tokens.colors.charcoalLight, maxWidth: '520px', marginBottom: '2.5rem',
            }}>
              Comme une plante qui grandit avec les bonnes conditions, l'inclusion professionnelle
              se cultive dès la conception. APRIORIS accompagne les professionnels vers des
              pratiques inclusives et pérennes.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
                color: 'white', textDecoration: 'none', padding: '1rem 2rem',
                background: tokens.colors.forest, borderRadius: '30px',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              }}>Prendre contact <span>→</span></a>
              <a href="#manifeste" style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
                color: tokens.colors.forest, textDecoration: 'none', padding: '1rem 2rem',
                border: `2px solid ${tokens.colors.forest}`, borderRadius: '30px',
              }}>Ma philosophie</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }} style={{ position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', marginLeft: 'auto' }}>
            <div style={{
              position: 'absolute', top: '-20px', left: '-20px', right: '-20px', bottom: '-20px',
              border: `2px solid ${tokens.colors.sage}`, borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
            }} />
            <div style={{
              aspectRatio: '4/5',
              background: `linear-gradient(160deg, ${tokens.colors.forestLight} 0%, ${tokens.colors.forest} 100%)`,
              borderRadius: '50% 50% 40% 60% / 45% 55% 45% 55%',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem',
            }}>
              <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌿</span>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>Photo<br />professionnelle</p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              style={{
                position: 'absolute', bottom: '10%', left: '-15%',
                background: 'white', padding: '1.25rem 1.5rem', borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
              }}
            >
              <p style={{ fontFamily: tokens.fonts.display, fontSize: '2rem', fontWeight: 500, color: tokens.colors.forest, lineHeight: 1 }}>16</p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: tokens.colors.muted, marginTop: '0.25rem' }}>ans d'expérience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
