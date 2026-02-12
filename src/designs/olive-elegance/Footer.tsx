import { tokens } from './tokens'

export function Footer() {
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
