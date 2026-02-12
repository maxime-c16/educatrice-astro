import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Expertises() {
  const services = [
    { icon: '🪴', title: 'Protection de l\'Enfance', desc: 'Dispositifs adaptés pour les mineurs et jeunes majeurs accompagnés par l\'ASE.' },
    { icon: '🌻', title: 'Handicap', desc: 'Inclusion des publics en situation de handicap dans les pratiques professionnelles.' },
    { icon: '🏡', title: 'Diversité culturelle & linguistique', desc: 'Pratiques interculturelles et adaptation aux contextes multilingues.' },
  ]

  return (
    <section id="expertises" style={{ padding: '8rem 3rem', background: tokens.colors.sand }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.terracotta, marginBottom: '1rem' }}>
              Domaines d'expertise
            </p>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 400, color: tokens.colors.charcoal }}>
              Faire <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>grandir</em> l'inclusion
            </h2>
          </div>
        </FadeInSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {services.map((service, i) => (
            <FadeInSection key={service.title} delay={i * 0.1}>
              <div style={{ background: tokens.colors.cream, padding: '2.5rem', borderRadius: '30px', height: '100%' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1.5rem' }}>{service.icon}</span>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.35rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 300, color: tokens.colors.muted, lineHeight: 1.7 }}>{service.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.3}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '3rem' }}>
            {[
              { icon: '🔧', label: 'Ingénierie éducative et inclusive', desc: 'Diagnostic partagé, co-conception, pilotage, déploiement et mesure d\'impact, évaluation et ajustements.' },
              { icon: '📚', label: 'Formation & professionnalisation', desc: 'Mise en situation, expression du vécu, apport théorique progressif, appropriation et transfert.' },
            ].map((pillar) => (
              <div key={pillar.label} style={{ background: tokens.colors.cream, padding: '2rem', borderRadius: '25px', border: `2px solid ${tokens.colors.forest}20` }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{pillar.icon}</span>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.2rem', fontWeight: 500, color: tokens.colors.forest, marginBottom: '0.75rem' }}>{pillar.label}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 300, color: tokens.colors.charcoalLight, lineHeight: 1.7 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/4/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
              color: tokens.colors.forest, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2rem', border: `2px solid ${tokens.colors.forest}`, borderRadius: '30px',
            }}>Découvrir toutes les prestations <span>→</span></a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
Expertises.displayName = 'Expertises'
