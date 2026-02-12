import { tokens } from './tokens'

export function Footer() {
  return (
    <footer style={{ padding: '3rem', background: tokens.colors.forest, color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🌱</span>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.1rem', fontWeight: 500 }}>APRIORIS</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/4/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/4/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Confidentialité</a>
        </div>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>© 2025 APRIORIS — Danae Azorin</p>
      </div>
    </footer>
  )
}
Footer.displayName = 'Footer'
