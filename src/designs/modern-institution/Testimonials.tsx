import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '8rem 3rem', background: 'white' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent, marginBottom: '1rem' }}>Témoignages</div>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: tokens.colors.text, marginBottom: '3rem' }}>
            Retours <span style={{ color: tokens.colors.electric }}>professionnels</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ padding: '3rem', border: `1px solid ${tokens.colors.grayLight}` }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.05rem', color: tokens.colors.grayDark, marginBottom: '1.5rem' }}>
              Vous avez collaboré avec APRIORIS ? Partagez votre retour d'expérience.
            </p>
            <div style={{
              width: '100px', height: '100px', background: tokens.colors.offWhite,
              margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${tokens.colors.grayLight}`,
            }}>
              <span style={{ fontSize: '0.65rem', color: tokens.colors.grayMid, textAlign: 'center' }}>QR Code<br />Google</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: tokens.colors.grayMid, marginTop: '1.5rem' }}>
              Les avis professionnels seront affichés ici
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
