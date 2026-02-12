import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: tokens.colors.cream,
      }}
    >
      {/* Grain texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Botanical element */}
      <motion.div style={{ y, opacity }} initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} transition={{ delay: 1, duration: 1 }}>
        <svg viewBox="0 0 200 400" style={{ position: 'absolute', right: '5%', top: '10%', height: '80vh', width: 'auto' }}>
          <path d="M100 0 Q120 100 100 200 Q80 300 100 400" fill="none" stroke={tokens.colors.olive} strokeWidth="0.5" />
          {[50, 100, 150, 200, 250, 300].map((cy, i) => (
            <ellipse key={i} cx={100 + (i % 2 === 0 ? 30 : -30)} cy={cy} rx="40" ry="20"
              fill="none" stroke={tokens.colors.olive} strokeWidth="0.3"
              transform={`rotate(${i % 2 === 0 ? 30 : -30} ${100 + (i % 2 === 0 ? 30 : -30)} ${cy})`}
            />
          ))}
        </svg>
      </motion.div>

      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        padding: '8rem 3rem 4rem',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem', alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500,
              color: tokens.colors.gold, letterSpacing: '0.2em', textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            APRIORIS · Ingénierie éducative et inclusive
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500, color: tokens.colors.charcoal,
              lineHeight: 1.15, marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            L'inclusion se prévoit{' '}
            <em style={{ fontStyle: 'italic', color: tokens.colors.olive, fontWeight: 400 }}>
              dès la conception
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: tokens.fonts.body, fontSize: '1.15rem', fontWeight: 300,
              color: tokens.colors.charcoalLight, lineHeight: 1.7,
              maxWidth: '540px', marginBottom: '2.5rem',
            }}
          >
            Conception et accompagnement de dispositifs éducatifs, inclusifs et de formation
            à destination des professionnels. Pour des pratiques durables, opérationnelles
            et intégrables au quotidien.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <motion.a href="/2/services" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}
              style={{
                fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
                color: tokens.colors.cream, background: tokens.colors.olive,
                padding: '1rem 2rem', textDecoration: 'none',
                letterSpacing: '0.05em', textTransform: 'uppercase',
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              }}
            >
              Découvrir les prestations
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" /></svg>
            </motion.a>
            <motion.a href="#portfolio" whileHover={{ scale: 1.03 }}
              style={{
                fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
                color: tokens.colors.olive, background: 'transparent',
                border: `1px solid ${tokens.colors.olive}`,
                padding: '1rem 2rem', textDecoration: 'none',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}
            >
              Voir le portfolio
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ position: 'relative', aspectRatio: '4/5' }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${tokens.colors.sage}30, ${tokens.colors.olive}20)`,
            border: `1px solid ${tokens.colors.border}`,
          }} />
          <div style={{
            position: 'absolute', top: '1.5rem', left: '1.5rem', right: '-1.5rem', bottom: '-1.5rem',
            border: `1px solid ${tokens.colors.gold}`, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '2rem', left: '2rem',
            fontFamily: tokens.fonts.display, fontSize: '0.85rem',
            fontStyle: 'italic', color: tokens.colors.muted,
          }}>
            Photo à venir
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '3rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}
      >
        <span style={{
          fontFamily: tokens.fonts.body, fontSize: '0.7rem',
          letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.muted,
        }}>Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: '1px', height: '40px', background: `linear-gradient(to bottom, ${tokens.colors.olive}, transparent)` }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 968px) {
          section > div > div:first-child { grid-column: 1 / -1; }
          section > div { grid-template-columns: 1fr !important; }
          section > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  )
}
Hero.displayName = 'Hero'
