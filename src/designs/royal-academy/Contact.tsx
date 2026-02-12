import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 3rem', background: tokens.colors.cream }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>Contact</p>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '1.5rem' }}>
            Construisons <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>ensemble</em>
          </h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.muted, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Échangeons sur vos besoins pour co-construire un dispositif adapté à votre contexte et vos réalités de terrain.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '0.5rem' }}>Email</p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: tokens.colors.charcoal }}>contact@aprioris.fr</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
            color: 'white', textDecoration: 'none', padding: '1.25rem 3rem',
            background: tokens.colors.royal, display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          }}>
            Envoyer un message <span>→</span>
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
Contact.displayName = 'Contact'
