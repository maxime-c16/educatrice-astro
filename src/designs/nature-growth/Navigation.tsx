import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { tokens } from './tokens'

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(250, 248, 245, 0.92)', backdropFilter: 'blur(20px)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/4" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: `linear-gradient(135deg, ${tokens.colors.forest} 0%, ${tokens.colors.forestLight} 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🌱</span>
            </div>
            <div>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 500, color: tokens.colors.forest, display: 'block', lineHeight: 1.1 }}>
                APRIORIS
              </span>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.terracotta }}>
                Cultiver l'inclusion · Dès la conception
              </span>
            </div>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="ng-desktop-nav">
            {[
              { label: 'Philosophie', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Témoignages', href: '#testimonials' },
            ].map((item) => (
              <a key={item.href} href={item.href}
                style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 400, color: tokens.colors.charcoalLight, textDecoration: 'none' }}
              >{item.label}</a>
            ))}
            <a href="/4/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500, color: tokens.colors.warmWhite,
              textDecoration: 'none', padding: '0.75rem 1.75rem', background: tokens.colors.forest, borderRadius: '30px',
            }}>Nos prestations</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ng-mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Menu"
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.forest, top: menuOpen ? '8px' : 0, transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.forest, top: '8px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.forest, top: menuOpen ? '8px' : '16px', transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s ease' }} />
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
              background: tokens.colors.cream,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}
          >
            {[
              { label: 'Philosophie', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Témoignages', href: '#testimonials' },
              { label: 'Nos prestations', href: '/4/services' },
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
                  color: tokens.colors.forest, textDecoration: 'none',
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
          .ng-desktop-nav { display: none !important; }
          .ng-mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
Navigation.displayName = 'Navigation'
