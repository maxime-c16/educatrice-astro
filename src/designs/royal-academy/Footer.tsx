import { tokens } from './tokens'

export function Footer() {
  return (
    <footer style={{ padding: '3rem', background: tokens.colors.charcoal, color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%', background: tokens.colors.royal,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', fontWeight: 600, color: 'white' }}>A</span>
          </div>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', fontWeight: 500 }}>APRIORIS</span>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/3/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/3/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Confidentialité</a>
          <a href="/3/legal#cookies" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Cookies</a>
        </div>

        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
          © 2025 APRIORIS — Danae Azorin
        </p>
      </div>
    </footer>
  )
}
