/**
 * VARIATION 2: OLIVE ELEGANCE — APRIORIS
 * 
 * Design Philosophy: Refined editorial magazine aesthetic with organic warmth
 * Brand: APRIORIS — Ingénierie éducative et inclusive
 * Owner: Danae Azorin
 */

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState, useEffect } from 'react'

const tokens = {
  colors: {
    olive: '#5c6b4a',
    oliveLight: '#7a8a65',
    oliveDark: '#4a5a3a',
    sage: '#8b9a6d',
    gold: '#c9a962',
    goldLight: '#d4bc7a',
    cream: '#f9f6f0',
    creamDark: '#f0ebe3',
    charcoal: '#2d2d2d',
    charcoalLight: '#4a4a4a',
    muted: '#7a7a7a',
    border: '#e5e0d8',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
}

// ============================================================================
// NAVIGATION
// ============================================================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(249, 246, 240, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${tokens.colors.border}` : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1.5rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <a href="/2" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}
            >
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.75rem',
                fontWeight: 600,
                color: tokens.colors.olive,
                letterSpacing: '0.04em',
              }}>
                APRIORIS
              </span>
            </motion.div>
          </a>

          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
          }} className="desktop-nav">
            {[
              { label: 'Manifeste', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Portfolio', href: '#portfolio' },
              { label: 'Témoignages', href: '#temoignages' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: tokens.colors.charcoalLight,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/2/services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.85rem',
                fontWeight: 500,
                color: tokens.colors.cream,
                background: tokens.colors.olive,
                padding: '0.75rem 1.5rem',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Prestations
            </motion.a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            aria-label="Menu"
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span style={{
                position: 'absolute', width: '100%', height: '2px',
                background: tokens.colors.olive,
                top: menuOpen ? '8px' : 0,
                transform: menuOpen ? 'rotate(45deg)' : 'none',
                transition: 'all 0.3s ease',
              }} />
              <span style={{
                position: 'absolute', width: '100%', height: '2px',
                background: tokens.colors.olive,
                top: '8px', opacity: menuOpen ? 0 : 1,
                transition: 'all 0.3s ease',
              }} />
              <span style={{
                position: 'absolute', width: '100%', height: '2px',
                background: tokens.colors.olive,
                top: menuOpen ? '8px' : '16px',
                transform: menuOpen ? 'rotate(-45deg)' : 'none',
                transition: 'all 0.3s ease',
              }} />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 90,
              background: tokens.colors.cream,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}
          >
            {['Manifeste', 'Expertises', 'Portfolio', 'Témoignages', 'Prestations'].map((item, i) => (
              <motion.a
                key={item}
                href={item === 'Prestations' ? '/2/services' : `#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '2rem',
                  color: tokens.colors.olive,
                  textDecoration: 'none',
                }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

// ============================================================================
// HERO
// ============================================================================
function Hero() {
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
        overflow: 'hidden',
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

// ============================================================================
// MANIFESTE — Qui suis-je + Démarche
// ============================================================================
function Manifeste() {
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

// ============================================================================
// EXPERTISES — Domaines d'expertise + Services Preview
// ============================================================================
function Expertises() {
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
                color: i === 0 ? tokens.colors.cream : tokens.colors.charcoal,
                marginBottom: '1rem',
              }}>{pillar.label}</h3>
              <p style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 300,
                color: i === 0 ? 'rgba(255,255,255,0.8)' : tokens.colors.muted,
                lineHeight: 1.7, marginBottom: '1.5rem',
              }}>{pillar.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {pillar.steps.map((step) => (
                  <div key={step} style={{
                    fontFamily: tokens.fonts.body, fontSize: '0.85rem',
                    color: i === 0 ? 'rgba(255,255,255,0.7)' : tokens.colors.charcoalLight,
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                  }}>
                    <span style={{ color: tokens.colors.gold }}>•</span>
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

// ============================================================================
// PORTFOLIO — Real projects
// ============================================================================
function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const projects = [
    { title: 'Cross & Récolte de Fonds', category: 'Projet solidaire', year: '2010', description: 'Pilotage et coordination d\'un projet de Cross et Récolte de Fonds avec Action Contre la Faim au sein d\'un collège en Île-de-France.' },
    { title: 'Camp International', category: 'Patrimoine & Climat', year: '2016', description: 'Coordination de camp international autour du patrimoine et du changement climatique, reconnaissance européenne Youthpass. Savigny-le-Temple (77).' },
    { title: 'Projet Éducatif MECS', category: 'Protection de l\'enfance', year: '2014–2017', description: 'Conception et pilotage d\'un projet éducatif pour soutenir la construction identitaire d\'adolescents en Maison d\'Enfants. Association A.G.E DEFIS 77.' },
    { title: 'Prévention Décrochage', category: 'Éducation nationale', year: '2020', description: 'Conception et déploiement d\'outils pédagogiques pour prévenir le décrochage scolaire et assurer le suivi d\'élèves en difficulté.' },
    { title: 'Inclusion & Polyhandicap', category: 'Handicap', year: '2021', description: 'Coordination de la participation d\'adultes polyhandicapés à un projet inclusif mobilisant acteurs locaux et participants. Fondation Anne de Gaulle (78).' },
    { title: 'Arbres Fruitiers & Insertion', category: 'Projet transversal', year: '2025', description: 'Projet transversal multi-services : plantation d\'arbres fruitiers avec collégiens et bénéficiaires RSA. Maison du Département Centre Bretagne, Loudéac (22).' },
  ]

  return (
    <section id="portfolio" ref={ref} style={{ padding: '8rem 3rem', background: tokens.colors.olive }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
        >
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>03</span>
          <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Portfolio</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: tokens.colors.cream, lineHeight: 1.2, marginBottom: '4rem' }}
        >
          Projets <em style={{ fontStyle: 'italic', color: tokens.colors.gold }}>phares</em>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <motion.article key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden', cursor: 'pointer',
              }}
            >
              <div style={{
                aspectRatio: '16/8',
                background: `linear-gradient(135deg, ${tokens.colors.sage}40, ${tokens.colors.oliveDark})`,
                position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 300,
                  color: 'rgba(255,255,255,0.3)',
                }}>{project.year}</span>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.65rem', fontWeight: 500,
                  color: tokens.colors.gold, letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>{project.category}</span>
                <h3 style={{
                  fontFamily: tokens.fonts.display, fontSize: '1.15rem', fontWeight: 500,
                  color: tokens.colors.cream, margin: '0.5rem 0',
                }}>{project.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)', lineHeight: 1.6,
                }}>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #portfolio > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ============================================================================
// ECOSYSTEM — Professional Partners
// ============================================================================
function Ecosystem() {
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

// ============================================================================
// TESTIMONIALS
// ============================================================================
function Testimonials() {
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

// ============================================================================
// CONTACT
// ============================================================================
function Contact() {
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

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer style={{ padding: '4rem 3rem 2rem', background: tokens.colors.charcoal }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 600, color: tokens.colors.cream, letterSpacing: '0.04em' }}>APRIORIS</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '300px' }}>
              Ingénierie éducative et inclusive. Conception et accompagnement de dispositifs à destination des professionnels.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Navigation</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Manifeste', 'Expertises', 'Portfolio', 'Témoignages'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = tokens.colors.cream}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >{item}</a>
              ))}
            </nav>
          </div>

          <div>
            <h4 style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Prestations</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="/2/services" style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Toutes les prestations</a>
            </nav>
          </div>

          <div>
            <h4 style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Légal</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Mentions légales', href: '/2/legal' },
                { label: 'Confidentialité', href: '/2/legal#privacy' },
                { label: 'Cookies', href: '/2/legal#cookies' },
              ].map((item) => (
                <a key={item.label} href={item.href}
                  style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                >{item.label}</a>
              ))}
            </nav>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>© 2025 APRIORIS — Danae Azorin. Tous droits réservés.</p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Micro-entreprise · SIRET: XXX XXX XXX XXXXX</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}

// ============================================================================
// MAIN
// ============================================================================
export function OliveElegance() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.cream, color: tokens.colors.charcoal, minHeight: '100vh' }}>
      <Navigation />
      <main>
        <Hero />
        <Manifeste />
        <Expertises />
        <Portfolio />
        <Ecosystem />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default OliveElegance
