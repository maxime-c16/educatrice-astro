import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '8rem 3rem', background: tokens.colors.sand }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.terracotta, marginBottom: '1rem' }}>Témoignages</p>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 400, color: tokens.colors.charcoal }}>
              Ils ont vu leurs pratiques <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>s\'épanouir</em>
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ textAlign: 'center', padding: '3rem', background: tokens.colors.cream, borderRadius: '25px' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>💬</span>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.05rem', color: tokens.colors.charcoalLight, marginBottom: '1.5rem' }}>
              Vous avez travaillé avec APRIORIS ? Partagez votre expérience !
            </p>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.muted, marginBottom: '2rem' }}>
              Scannez le QR code pour laisser un avis Google
            </p>
            <div style={{
              width: '120px', height: '120px', background: tokens.colors.warmWhite, borderRadius: '15px',
              margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            }}>
              <span style={{ fontSize: '0.65rem', color: tokens.colors.muted, textAlign: 'center' }}>QR Code<br />Google</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: tokens.colors.muted, marginTop: '1.5rem', fontStyle: 'italic' }}>
              Les témoignages seront affichés ici au fur et à mesure
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
Testimonials.displayName = 'Testimonials'
