import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Manifeste() {
  return (
    <section id="manifeste" style={{ padding: '8rem 3rem', background: tokens.colors.navy, color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>
                Mon manifeste
              </p>
              <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Pourquoi
                <br />
                <em style={{ fontStyle: 'italic', color: tokens.colors.goldLight }}>APRIORIS</em>
              </h2>
              <div style={{ width: '60px', height: '3px', background: tokens.colors.gold }} />
            </div>

            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', marginBottom: '2rem' }}>
                Depuis 16 ans, je travaille dans le domaine éducatif et inclusif. Mon parcours m'a conduite
                à être animatrice, éducatrice spécialisée, formatrice et référente à l'Aide Sociale à l'Enfance.
                Autant de postes qui m'ont permis de comprendre les réalités du terrain.
              </p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                J'ai observé un décalage entre les besoins de certains publics vulnérables et les réponses
                des dispositifs existants. Ces difficultés ne sont pas liées à un manque d'engagement des
                professionnels, mais à des limites structurelles : contraintes institutionnelles, manque de
                formation adaptée, absence d'outils opérationnels.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { num: '01', title: 'Co-construction', desc: 'Avec les acteurs de terrain' },
                  { num: '02', title: 'Opérationnalité', desc: 'Des dispositifs applicables' },
                  { num: '03', title: 'Durabilité', desc: 'Des pratiques qui perdurent' },
                ].map((value) => (
                  <div key={value.num}>
                    <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', color: tokens.colors.gold }}>{value.num}</span>
                    <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.25rem', fontWeight: 500, marginTop: '0.5rem', marginBottom: '0.25rem' }}>{value.title}</h3>
                    <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
      <style>{`
        @media (max-width: 968px) {
          #manifeste > div > div > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #manifeste > div > div > div > div:last-child > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
Manifeste.displayName = 'Manifeste'
