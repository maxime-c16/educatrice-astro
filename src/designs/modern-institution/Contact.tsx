import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 3rem', background: tokens.colors.royal }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent, marginBottom: '1rem' }}>Contact</div>
          <h2 style={{
            fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 800, color: tokens.colors.white, marginBottom: '1.5rem',
          }}>
            Parlons de votre <span style={{ color: tokens.colors.accent }}>projet</span>
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300,
            color: tokens.colors.whiteOpaque70, maxWidth: '500px', margin: '0 auto 3rem',
          }}>
            Chaque contexte est unique. Échangeons pour co-construire un dispositif adapté à vos besoins et contraintes.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '1rem', fontWeight: 600,
            color: tokens.colors.royalDark, textDecoration: 'none', padding: '1.25rem 3rem',
            background: tokens.colors.accent, display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          }}>contact@aprioris.fr →</a>
        </FadeInSection>
      </div>
    </section>
  )
}
Contact.displayName = 'Contact'
