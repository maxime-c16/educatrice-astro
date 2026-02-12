import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 3rem', background: tokens.colors.cream }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <span style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'block' }}>💌</span>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: tokens.colors.charcoal, marginBottom: '1rem' }}>
            Faisons <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>connaissance</em>
          </h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.muted, marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
            Chaque contexte est unique. Échangeons pour co-construire un dispositif adapté à vos réalités de terrain.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: tokens.colors.terracotta, marginBottom: '0.5rem' }}>Email</p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: tokens.colors.charcoal }}>contact@aprioris.fr</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '1rem', fontWeight: 500,
            color: 'white', textDecoration: 'none', padding: '1.25rem 3rem',
            background: tokens.colors.forest, borderRadius: '35px',
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          }}>M\'envoyer un message <span>→</span></a>
        </FadeInSection>
      </div>
    </section>
  )
}
