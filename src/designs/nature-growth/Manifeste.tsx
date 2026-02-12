import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Manifeste() {
  return (
    <section id="manifeste" style={{
      padding: '8rem 3rem', background: tokens.colors.forest, color: 'white',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>🌳</span>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.sage, marginBottom: '1rem' }}>
              Ma philosophie
            </p>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.3 }}>
              Cultiver l'inclusion
              <br />
              <em style={{ fontStyle: 'italic', color: tokens.colors.terracottaLight }}>dès la racine</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.15rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(255,255,255,0.9)' }}>
                Je m'appelle <strong style={{ fontWeight: 500 }}>Danae Azorin</strong>. Depuis 16 ans, je travaille dans le
                domaine éducatif et inclusif. Mon parcours — animatrice, éducatrice spécialisée, formatrice,
                référente ASE — m'a permis de comprendre les réalités du terrain et les besoins de chacun.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.15rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(255,255,255,0.9)' }}>
                Certains publics sont exclus involontairement, non par choix, mais par défaut d'adaptation.
                C'est dans cette logique qu'est née APRIORIS : j'interviens dès la conception des dispositifs,
                pour que l'inclusion soit intégrée, appropriée et durable.
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { icon: '🌱', title: 'Co-construction', desc: 'Avec les acteurs de terrain' },
              { icon: '💧', title: 'Adaptation', desc: 'Aux contextes et contraintes' },
              { icon: '☀️', title: 'Opérationnalité', desc: 'Des outils applicables' },
              { icon: '🌸', title: 'Durabilité', desc: 'Des pratiques pérennes' },
            ].map((value) => (
              <div key={value.title} style={{ textAlign: 'center', padding: '2rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{value.icon}</span>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
Manifeste.displayName = 'Manifeste'
