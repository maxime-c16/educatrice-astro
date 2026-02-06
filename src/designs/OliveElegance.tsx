/**
 * VARIATION 2: OLIVE ELEGANCE
 * 
 * Design Philosophy: Refined editorial magazine aesthetic with organic warmth
 * - Asymmetric layouts with intentional tension
 * - Generous whitespace with strategic density
 * - Subtle texture overlays (grain, paper-like)
 * - Sophisticated micro-interactions
 * 
 * Color Palette:
 * - Primary: #5c6b4a (Olive)
 * - Secondary: #8b9a6d (Sage)
 * - Accent: #c9a962 (Warm Gold)
 * - Background: #f9f6f0 (Warm Cream)
 * - Text: #2d2d2d (Charcoal)
 */

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState, useEffect } from 'react'

// ============================================================================
// DESIGN TOKENS
// ============================================================================
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
          {/* Logo */}
          <a href="/2" style={{ textDecoration: 'none' }}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}
            >
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.75rem',
                fontWeight: 500,
                color: tokens.colors.olive,
                letterSpacing: '-0.02em',
              }}>
                Éducatrice
              </span>
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.75rem',
                fontStyle: 'italic',
                fontWeight: 400,
                color: tokens.colors.sage,
              }}>
                Spécialisée
              </span>
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
          }} className="desktop-nav">
            {[
              { label: 'Manifeste', href: '#manifeste' },
              { label: 'Services', href: '#services' },
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
                  position: 'relative',
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
              Contact
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
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
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: tokens.colors.olive,
                top: menuOpen ? '8px' : 0,
                transform: menuOpen ? 'rotate(45deg)' : 'none',
                transition: 'all 0.3s ease',
              }} />
              <span style={{
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: tokens.colors.olive,
                top: '8px',
                opacity: menuOpen ? 0 : 1,
                transition: 'all 0.3s ease',
              }} />
              <span style={{
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: tokens.colors.olive,
                top: menuOpen ? '8px' : '16px',
                transform: menuOpen ? 'rotate(-45deg)' : 'none',
                transition: 'all 0.3s ease',
              }} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90,
              background: tokens.colors.cream,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {['Manifeste', 'Services', 'Portfolio', 'Témoignages', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
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
// HERO SECTION
// ============================================================================
function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
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
      {/* Grain texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />

      {/* Decorative botanical element */}
      <motion.div
        style={{ y, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg 
          viewBox="0 0 200 400" 
          style={{
            position: 'absolute',
            right: '5%',
            top: '10%',
            height: '80vh',
            width: 'auto',
          }}
        >
          <path
            d="M100 0 Q120 100 100 200 Q80 300 100 400"
            fill="none"
            stroke={tokens.colors.olive}
            strokeWidth="0.5"
          />
          {[50, 100, 150, 200, 250, 300].map((y, i) => (
            <ellipse
              key={i}
              cx={100 + (i % 2 === 0 ? 30 : -30)}
              cy={y}
              rx="40"
              ry="20"
              fill="none"
              stroke={tokens.colors.olive}
              strokeWidth="0.3"
              transform={`rotate(${i % 2 === 0 ? 30 : -30} ${100 + (i % 2 === 0 ? 30 : -30)} ${y})`}
            />
          ))}
        </svg>
      </motion.div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '8rem 3rem 4rem',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Left: Content */}
        <div>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 500,
              color: tokens.colors.gold,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Éducatrice Spécialisée · Formatrice
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 500,
              color: tokens.colors.charcoal,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Révéler le{' '}
            <em style={{ 
              fontStyle: 'italic', 
              color: tokens.colors.olive,
              fontWeight: 400,
            }}>
              potentiel
            </em>
            <br />
            de chaque enfant
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.25rem',
              fontWeight: 300,
              color: tokens.colors.charcoalLight,
              lineHeight: 1.7,
              maxWidth: '500px',
              marginBottom: '2.5rem',
            }}
          >
            Un accompagnement éducatif sur mesure, ancré dans le respect 
            du rythme et de l'unicité de chaque parcours.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.9rem',
                fontWeight: 500,
                color: tokens.colors.cream,
                background: tokens.colors.olive,
                padding: '1rem 2rem',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              Découvrir les services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.9rem',
                fontWeight: 500,
                color: tokens.colors.olive,
                background: 'transparent',
                border: `1px solid ${tokens.colors.olive}`,
                padding: '1rem 2rem',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Voir le portfolio
            </motion.a>
          </motion.div>
        </div>

        {/* Right: Feature image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            position: 'relative',
            aspectRatio: '4/5',
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${tokens.colors.sage}30, ${tokens.colors.olive}20)`,
            border: `1px solid ${tokens.colors.border}`,
          }} />
          {/* Offset frame decoration */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            right: '-1.5rem',
            bottom: '-1.5rem',
            border: `1px solid ${tokens.colors.gold}`,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            fontFamily: tokens.fonts.display,
            fontSize: '0.85rem',
            fontStyle: 'italic',
            color: tokens.colors.muted,
          }}>
            Photo à venir
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: tokens.colors.muted,
        }}>
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '1px',
            height: '40px',
            background: `linear-gradient(to bottom, ${tokens.colors.olive}, transparent)`,
          }}
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
// MANIFESTE SECTION
// ============================================================================
function Manifeste() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      id="manifeste"
      ref={ref}
      style={{
        padding: '8rem 3rem',
        background: tokens.colors.cream,
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: tokens.colors.gold,
            letterSpacing: '0.15em',
          }}>
            01
          </span>
          <div style={{
            width: '60px',
            height: '1px',
            background: tokens.colors.border,
          }} />
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.75rem',
            fontWeight: 500,
            color: tokens.colors.muted,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Manifeste
          </span>
        </motion.div>

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '6rem',
          alignItems: 'start',
        }}>
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 500,
              color: tokens.colors.charcoal,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}>
              Une approche{' '}
              <em style={{ 
                fontStyle: 'italic', 
                color: tokens.colors.olive,
                display: 'block',
              }}>
                centrée sur l'enfant
              </em>
            </h2>
          </motion.div>

          {/* Right: Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.1rem',
              fontWeight: 300,
              color: tokens.colors.charcoalLight,
              lineHeight: 1.8,
            }}>
              Forte de plus de dix années d'expérience auprès d'enfants aux besoins variés, 
              je propose un accompagnement éducatif fondé sur l'observation, l'écoute et le respect 
              du rythme de chacun.
            </p>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.1rem',
              fontWeight: 300,
              color: tokens.colors.charcoalLight,
              lineHeight: 1.8,
            }}>
              Ma démarche s'inspire des pédagogies alternatives — Montessori, Reggio Emilia, 
              approche par la nature — pour créer un environnement propice à l'épanouissement 
              et à la découverte.
            </p>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.1rem',
              fontWeight: 300,
              color: tokens.colors.charcoalLight,
              lineHeight: 1.8,
            }}>
              Je crois profondément que chaque enfant porte en lui un potentiel extraordinaire. 
              Mon rôle est de l'accompagner dans sa révélation, en cultivant sa confiance, 
              sa curiosité et son autonomie.
            </p>
          </motion.div>
        </div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            marginTop: '5rem',
            padding: '3rem 0',
            borderTop: `1px solid ${tokens.colors.border}`,
            borderBottom: `1px solid ${tokens.colors.border}`,
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: tokens.colors.olive,
            lineHeight: 1.5,
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            « L'enfant n'est pas un vase que l'on remplit, mais une source que l'on laisse jaillir. »
          </p>
        </motion.blockquote>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #manifeste > div > div:nth-child(2) { 
            grid-template-columns: 1fr !important; 
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}

// ============================================================================
// SERVICES PREVIEW
// ============================================================================
function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      number: '01',
      title: 'Accompagnement individuel',
      description: 'Un suivi personnalisé adapté aux besoins spécifiques de votre enfant.',
      icon: '◯',
    },
    {
      number: '02',
      title: 'Ateliers collectifs',
      description: 'Des moments de partage favorisant la socialisation et la coopération.',
      icon: '△',
    },
    {
      number: '03',
      title: 'Conseil aux familles',
      description: 'Un accompagnement pour mieux comprendre et soutenir votre enfant.',
      icon: '□',
    },
    {
      number: '04',
      title: 'Formation professionnelle',
      description: 'Des formations pour enrichir vos pratiques pédagogiques.',
      icon: '◇',
    },
  ]

  return (
    <section 
      id="services"
      ref={ref}
      style={{
        padding: '8rem 3rem',
        background: tokens.colors.creamDark,
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Section header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: tokens.colors.gold,
                letterSpacing: '0.15em',
              }}>
                02
              </span>
              <div style={{ width: '60px', height: '1px', background: tokens.colors.border }} />
              <span style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.75rem',
                fontWeight: 500,
                color: tokens.colors.muted,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: tokens.fonts.display,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 500,
                color: tokens.colors.charcoal,
                lineHeight: 1.2,
              }}
            >
              Des services <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>adaptés</em>
            </motion.h2>
          </div>
          <motion.a
            href="/2/services"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ x: 5 }}
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.85rem',
              fontWeight: 500,
              color: tokens.colors.olive,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            Voir tous les services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.a>
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: tokens.colors.cream,
                padding: '2.5rem',
                border: `1px solid ${tokens.colors.border}`,
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(92, 107, 74, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '3rem',
                  color: tokens.colors.border,
                  lineHeight: 1,
                }}>
                  {service.icon}
                </span>
                <span style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: tokens.colors.gold,
                  letterSpacing: '0.1em',
                }}>
                  {service.number}
                </span>
              </div>
              <h3 style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.4rem',
                fontWeight: 500,
                color: tokens.colors.charcoal,
                marginBottom: '0.75rem',
              }}>
                {service.title}
              </h3>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.95rem',
                fontWeight: 300,
                color: tokens.colors.muted,
                lineHeight: 1.6,
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PORTFOLIO SECTION
// ============================================================================
function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'Course contre la Faim',
      category: 'Projet solidaire',
      year: '2024',
      description: 'Organisation et animation d\'un événement caritatif impliquant 200 enfants.',
    },
    {
      title: 'Camps Internationaux',
      category: 'Échange culturel',
      year: '2023',
      description: 'Accompagnement éducatif lors de séjours internationaux multiculturels.',
    },
    {
      title: 'Projet Revégétalisation',
      category: 'Éducation environnementale',
      year: '2024',
      description: 'Sensibilisation à l\'écologie à travers un projet de plantation participatif.',
    },
  ]

  return (
    <section 
      id="portfolio"
      ref={ref}
      style={{
        padding: '8rem 3rem',
        background: tokens.colors.olive,
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: tokens.colors.gold,
            letterSpacing: '0.15em',
          }}>
            03
          </span>
          <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Portfolio
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 500,
            color: tokens.colors.cream,
            lineHeight: 1.2,
            marginBottom: '4rem',
          }}
        >
          Projets <em style={{ fontStyle: 'italic', color: tokens.colors.gold }}>phares</em>
        </motion.h2>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              whileHover={{ y: -10 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Image placeholder */}
              <div style={{
                aspectRatio: '16/10',
                background: `linear-gradient(135deg, ${tokens.colors.sage}40, ${tokens.colors.oliveDark})`,
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: tokens.colors.gold,
                  letterSpacing: '0.1em',
                }}>
                  {project.year}
                </span>
              </div>
              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <span style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: tokens.colors.gold,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {project.category}
                </span>
                <h3 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: tokens.colors.cream,
                  margin: '0.5rem 0',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.6,
                }}>
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #portfolio > div > div:last-child { 
            grid-template-columns: 1fr !important; 
          }
        }
      `}</style>
    </section>
  )
}

// ============================================================================
// TESTIMONIALS SECTION
// ============================================================================
function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote: "Un accompagnement exceptionnel qui a transformé notre quotidien. Notre fils a retrouvé confiance en lui.",
      author: "Marie-Claire D.",
      role: "Maman de Lucas, 6 ans",
      rating: 5,
    },
    {
      quote: "Les ateliers ont été une révélation pour Emma. Elle y a trouvé un espace d'expression unique.",
      author: "Sophie B.",
      role: "Maman d'Emma, 4 ans",
      rating: 5,
    },
    {
      quote: "Le conseil aux familles nous a permis de mieux comprendre les besoins de notre enfant.",
      author: "Pierre M.",
      role: "Papa de Théo, 7 ans",
      rating: 5,
    },
  ]

  return (
    <section 
      id="temoignages"
      ref={ref}
      style={{
        padding: '8rem 3rem',
        background: tokens.colors.cream,
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Section header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: tokens.colors.gold,
                letterSpacing: '0.15em',
              }}>
                04
              </span>
              <div style={{ width: '60px', height: '1px', background: tokens.colors.border }} />
              <span style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.75rem',
                fontWeight: 500,
                color: tokens.colors.muted,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                Témoignages
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: tokens.fonts.display,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 500,
                color: tokens.colors.charcoal,
                lineHeight: 1.2,
              }}
            >
              Ce qu'ils <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>disent</em>
            </motion.h2>
          </div>

          {/* QR Code mention */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.5rem',
              background: tokens.colors.creamDark,
              border: `1px solid ${tokens.colors.border}`,
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              background: tokens.colors.olive,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" stroke={tokens.colors.cream} strokeWidth="1.5" />
                <rect x="14" y="3" width="7" height="7" stroke={tokens.colors.cream} strokeWidth="1.5" />
                <rect x="3" y="14" width="7" height="7" stroke={tokens.colors.cream} strokeWidth="1.5" />
                <rect x="14" y="14" width="3" height="3" fill={tokens.colors.cream} />
                <rect x="18" y="18" width="3" height="3" fill={tokens.colors.cream} />
              </svg>
            </div>
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.8rem',
                fontWeight: 500,
                color: tokens.colors.charcoal,
                marginBottom: '0.25rem',
              }}>
                Laissez votre avis
              </p>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.7rem',
                color: tokens.colors.muted,
              }}>
                Scannez le QR code
              </p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                background: tokens.colors.creamDark,
                padding: '2rem',
                border: `1px solid ${tokens.colors.border}`,
                position: 'relative',
              }}
            >
              {/* Stars */}
              <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.25rem' }}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill={tokens.colors.gold}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1rem',
                fontWeight: 300,
                color: tokens.colors.charcoalLight,
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}>
                "{testimonial.quote}"
              </p>
              <footer>
                <p style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: tokens.colors.charcoal,
                }}>
                  {testimonial.author}
                </p>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.8rem',
                  color: tokens.colors.muted,
                }}>
                  {testimonial.role}
                </p>
              </footer>
              {/* Google badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                opacity: 0.5,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill={tokens.colors.muted} d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill={tokens.colors.muted} d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill={tokens.colors.muted} d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill={tokens.colors.muted} d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #temoignages > div > div:last-child { 
            grid-template-columns: 1fr !important; 
          }
        }
      `}</style>
    </section>
  )
}

// ============================================================================
// CONTACT / CTA SECTION
// ============================================================================
function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section 
      ref={ref}
      style={{
        padding: '6rem 3rem',
        background: tokens.colors.creamDark,
        borderTop: `1px solid ${tokens.colors.border}`,
      }}
    >
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}
        >
          Prêt à <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>commencer</em> ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.1rem',
            fontWeight: 300,
            color: tokens.colors.muted,
            marginBottom: '2rem',
          }}
        >
          Contactez-moi pour discuter de vos besoins et construire ensemble un accompagnement sur mesure.
        </motion.p>
        <motion.a
          href="mailto:contact@educatrice.fr"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: tokens.fonts.body,
            fontSize: '0.9rem',
            fontWeight: 500,
            color: tokens.colors.cream,
            background: tokens.colors.olive,
            padding: '1.25rem 2.5rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Prendre contact
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
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
    <footer style={{
      padding: '4rem 3rem 2rem',
      background: tokens.colors.charcoal,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.5rem',
                fontWeight: 500,
                color: tokens.colors.cream,
              }}>
                Éducatrice
              </span>
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.5rem',
                fontStyle: 'italic',
                color: tokens.colors.sage,
                marginLeft: '0.5rem',
              }}>
                Spécialisée
              </span>
            </div>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '300px',
            }}>
              Accompagnement éducatif personnalisé pour révéler le potentiel de chaque enfant.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: tokens.colors.gold,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              Navigation
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Manifeste', 'Services', 'Portfolio', 'Témoignages'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = tokens.colors.cream}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: tokens.colors.gold,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              Services
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="/2/services" style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
              }}>
                Tous les services
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: tokens.colors.gold,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              Légal
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Mentions légales', href: '/2/legal' },
                { label: 'Confidentialité', href: '/2/legal#privacy' },
                { label: 'Cookies', href: '/2/legal#cookies' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.4)',
          }}>
            © 2025 Éducatrice Spécialisée. Tous droits réservés.
          </p>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.4)',
          }}>
            Micro-entreprise · SIRET: XXX XXX XXX XXXXX
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          footer > div > div:first-child { 
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child { 
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function OliveElegance() {
  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.cream,
      color: tokens.colors.charcoal,
      minHeight: '100vh',
    }}>
      <Navigation />
      <main>
        <Hero />
        <Manifeste />
        <ServicesPreview />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default OliveElegance
