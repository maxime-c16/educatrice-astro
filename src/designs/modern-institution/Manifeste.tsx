import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Manifeste() {
  return (
    <section id="manifeste" style={{ padding: '8rem 3rem', background: tokens.colors.offWhite }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent, marginBottom: '1.5rem' }}>
                À propos d'APRIORIS
              </div>
              <h2 style={{
                fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800, lineHeight: 1.15, color: tokens.colors.text, marginBottom: '2rem',
              }}>
                Agir en amont,
                <br />
                <span style={{ color: tokens.colors.electric }}>pas en réaction</span>
              </h2>
              <div style={{ width: '60px', height: '4px', background: tokens.colors.accent }} />
            </div>

            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9, color: tokens.colors.grayDark, marginBottom: '1.5rem' }}>
                Je suis <strong style={{ fontWeight: 600 }}>Danae Azorin</strong>, consultante en ingénierie éducative et inclusive. En 16 ans — animatrice, éducatrice spécialisée, formatrice, référente ASE — j'ai observé un décalage persistant entre les besoins des publics vulnérables et les réponses des dispositifs.
              </p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9, color: tokens.colors.grayDark, marginBottom: '2rem' }}>
                Ce n'est pas un manque d'engagement. Ce sont des limites structurelles. Certains publics sont exclus involontairement. APRIORIS agit en amont pour que l'inclusion soit intégrée, appropriée et durable.
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: tokens.colors.grayLight, marginTop: '5rem' }}>
            {[
              { label: 'Co-construction', desc: 'Dispositifs construits avec les acteurs de terrain et les pratiques existantes' },
              { label: 'Opérationnalité', desc: 'Des outils concrets, directement applicables dans les structures' },
              { label: 'Durabilité', desc: 'Appropriation par les professionnels pour une intégration pérenne' },
              { label: 'Impact', desc: 'Suivi quantitatif et qualitatif des évolutions de pratiques' },
            ].map((value) => (
              <div key={value.label} style={{ padding: '2.5rem 2rem', background: tokens.colors.offWhite }}>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.1rem', fontWeight: 700, color: tokens.colors.text, marginBottom: '0.75rem' }}>{value.label}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 300, color: tokens.colors.grayMid, lineHeight: 1.6 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #manifeste > div > div > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
Manifeste.displayName = 'Manifeste'
