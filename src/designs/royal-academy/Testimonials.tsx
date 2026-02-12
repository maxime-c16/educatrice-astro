import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '8rem 3rem', background: tokens.colors.navy, color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>Témoignages</p>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 500 }}>
              Vos <em style={{ fontStyle: 'italic', color: tokens.colors.goldLight }}>retours</em>
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.05)' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              Vous avez collaboré avec APRIORIS ? Votre avis compte !
            </p>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
              Scannez le QR code pour laisser un témoignage sur Google
            </p>
            <div style={{
              width: '120px', height: '120px', background: 'white', margin: '0 auto',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.6rem', color: tokens.colors.charcoal, textAlign: 'center' }}>QR Code<br />Google Avis</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', fontStyle: 'italic' }}>
              Les témoignages reçus seront affichés ici progressivement
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
Testimonials.displayName = 'Testimonials'
