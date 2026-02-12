import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Expertises() {
  const domains = [
    { number: '01', title: 'Protection de l\'Enfance', desc: 'Dispositifs adaptés pour les publics accompagnés par l\'ASE — mineurs et jeunes majeurs.' },
    { number: '02', title: 'Handicap', desc: 'Projets inclusifs pour les personnes en situation de handicap dans les pratiques professionnelles.' },
    { number: '03', title: 'Diversité culturelle & linguistique', desc: 'Approches interculturelles et adaptation aux réalités plurilingues et multiculturelles.' },
  ]

  const pillars = [
    { title: 'Ingénierie éducative et inclusive', steps: ['Diagnostic partagé', 'Co-conception', 'Pilotage', 'Déploiement & mesure d\'impact', 'Évaluation & ajustements'] },
    { title: 'Formation & professionnalisation', steps: ['Mise en situation', 'Expression du vécu', 'Apport théorique progressif', 'Appropriation & transfert'] },
  ]

  return (
    <section id="expertises" style={{ padding: '8rem 3rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent, marginBottom: '1rem' }}>Expertise</div>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: tokens.colors.text }}>
              Trois domaines, <span style={{ color: tokens.colors.electric }}>deux leviers</span>
            </h2>
          </div>
        </FadeInSection>

        {/* Domains */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '4rem' }}>
          {domains.map((domain, i) => (
            <FadeInSection key={domain.title} delay={i * 0.1}>
              <div style={{
                padding: '2.5rem', border: `1px solid ${tokens.colors.grayLight}`,
                position: 'relative', overflow: 'hidden', height: '100%',
              }}>
                <span style={{
                  position: 'absolute', top: '1rem', right: '1.5rem',
                  fontFamily: tokens.fonts.display, fontSize: '4rem', fontWeight: 900,
                  color: tokens.colors.grayLight, lineHeight: 1,
                }}>{domain.number}</span>
                <h3 style={{
                  fontFamily: tokens.fonts.display, fontSize: '1.25rem', fontWeight: 700,
                  color: tokens.colors.text, marginBottom: '1rem', position: 'relative', zIndex: 1,
                }}>{domain.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 300,
                  color: tokens.colors.grayMid, lineHeight: 1.7, position: 'relative', zIndex: 1,
                }}>{domain.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {pillars.map((pillar, i) => (
            <FadeInSection key={pillar.title} delay={0.3 + i * 0.1}>
              <div style={{
                padding: '2.5rem', background: i === 0 ? tokens.colors.royal : tokens.colors.accent,
                color: i === 0 ? 'oklch(99% 0.002 285)' : tokens.colors.royalDark,
              }}>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  {pillar.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {pillar.steps.map((step, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{
                        fontFamily: tokens.fonts.display, fontSize: '0.75rem', fontWeight: 700,
                        width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: i === 0 ? 'oklch(99% 0.002 285)' : tokens.colors.royalDark,
                        background: i === 0 ? 'oklch(40% 0.10 285)' : 'oklch(88% 0.02 88)',
                        borderRadius: '4px',
                      }}>{j + 1}</span>
                      <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 400 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.5}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/5/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 600,
              color: tokens.colors.royalDark, textDecoration: 'none',
              padding: '1rem 2rem', background: tokens.colors.accent,
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            }}>Voir toutes les prestations →</a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
Expertises.displayName = 'Expertises'
