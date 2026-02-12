import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { tokens } from './tokens'

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(250, 249, 247, 0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${tokens.colors.border}`,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.25rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/3" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${tokens.colors.royal} 0%, ${tokens.colors.royalLight} 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>A</span>
              </div>
              <div>
                <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.4rem', fontWeight: 600, color: tokens.colors.royal, display: 'block', lineHeight: 1.1, letterSpacing: '0.03em' }}>
                  APRIORIS
                </span>
                <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: tokens.colors.gold }}>
                  Ingénierie éducative
                </span>
              </div>
            </div>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '3rem' }} className="ra-desktop-nav">
            {[
              { label: 'À propos', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Témoignages', href: '#testimonials' },
            ].map((item) => (
              <a key={item.href} href={item.href}
                style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 400, color: tokens.colors.charcoalLight, textDecoration: 'none' }}
              >{item.label}</a>
            ))}
            <a href="/3/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 500,
              color: 'white', textDecoration: 'none', padding: '0.75rem 1.5rem',
              background: tokens.colors.royal,
            }}>Prestations</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ra-mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Menu"
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.royal, top: menuOpen ? '8px' : 0, transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.royal, top: '8px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.royal, top: menuOpen ? '8px' : '16px', transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s ease' }} />
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
              { label: 'À propos', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Témoignages', href: '#testimonials' },
              { label: 'Prestations', href: '/3/services' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '2rem',
                  color: tokens.colors.royal,
                  textDecoration: 'none',
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
          .ra-desktop-nav { display: none !important; }
          .ra-mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
Navigation.displayName = 'Navigation'
