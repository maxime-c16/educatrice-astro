import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Expertises() {
  const domains = [
    { icon: '◈', title: 'Protection de l\'Enfance', desc: 'Mineurs et jeunes majeurs accompagnés par l\'ASE', features: ['Dispositifs adaptés', 'Formation des équipes', 'Suivi et évaluation'] },
    { icon: '◆', title: 'Handicap', desc: 'Inclusion des publics en situation de handicap', features: ['Diagnostic partagé', 'Co-conception', 'Mesure d\'impact'] },
    { icon: '◇', title: 'Diversité culturelle', desc: 'Pratiques interculturelles et multilinguisme', features: ['Analyse systémique', 'Outils opérationnels', 'Accompagnement durable'] },
  ]

  return (
    <section id="expertises" style={{ padding: '8rem 3rem', background: tokens.colors.creamDark }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>
              Domaines d'expertise
            </p>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 500, color: tokens.colors.charcoal }}>
              Un accompagnement <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>ciblé</em>
            </h2>
          </div>
        </FadeInSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {domains.map((domain, i) => (
            <FadeInSection key={domain.title} delay={i * 0.1}>
              <div style={{ background: tokens.colors.cream, padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: tokens.fonts.display, fontSize: '2rem', color: tokens.colors.royal, marginBottom: '1.5rem' }}>{domain.icon}</span>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.35rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '0.75rem' }}>{domain.title}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 300, color: tokens.colors.muted, lineHeight: 1.6, marginBottom: '1.5rem' }}>{domain.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', flex: 1 }}>
                  {domain.features.map((feature) => (
                    <li key={feature} style={{
                      fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.charcoalLight,
                      padding: '0.5rem 0', borderBottom: `1px solid ${tokens.colors.border}`,
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                    }}>
                      <span style={{ color: tokens.colors.gold }}>—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/3/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
              color: tokens.colors.royal, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2rem', border: `2px solid ${tokens.colors.royal}`,
            }}>
              Voir toutes les prestations <span>→</span>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
Expertises.displayName = 'Expertises'
