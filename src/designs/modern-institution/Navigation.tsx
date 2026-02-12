import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { tokens } from './tokens'

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: tokens.colors.darkOpaque97, backdropFilter: 'blur(12px)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/5" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '42px', height: '42px', background: tokens.colors.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>A</span>
            </div>
            <div>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.35rem', fontWeight: 700, color: 'white', letterSpacing: '0.05em', display: 'block', lineHeight: 1.1 }}>APRIORIS</span>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.55rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: tokens.colors.electricLight }}>Ingénierie éducative et inclusive</span>
            </div>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="mi-desktop-nav">
            {[
              { label: 'À propos', href: '#manifeste' },
              { label: 'Expertise', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Avis', href: '#testimonials' },
            ].map((item) => (
              <a key={item.href} href={item.href}
                style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 500, color: tokens.colors.whiteOpaque70, textDecoration: 'none' }}
              >{item.label}</a>
            ))}
            <a href="/5/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 600, color: tokens.colors.royalDark,
              textDecoration: 'none', padding: '0.7rem 1.5rem', background: tokens.colors.accent,
            }}>Nos prestations</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mi-mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Menu"
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.accent, top: menuOpen ? '8px' : 0, transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.accent, top: '8px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.accent, top: menuOpen ? '8px' : '16px', transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s ease' }} />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 90,
              background: tokens.colors.royal,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}
          >
            {[
              { label: 'À propos', href: '#manifeste' },
              { label: 'Expertise', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Avis', href: '#testimonials' },
              { label: 'Nos prestations', href: '/5/services' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: tokens.fonts.display, fontSize: '2rem',
                  color: 'white', textDecoration: 'none',
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mi-desktop-nav { display: none !important; }
          .mi-mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
Navigation.displayName = 'Navigation'
