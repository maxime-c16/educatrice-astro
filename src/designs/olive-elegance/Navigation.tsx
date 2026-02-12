import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { tokens } from './tokens'

export function Navigation() {
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
