import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Portfolio() {
  const projects = [
    { title: 'Cross & Action Contre la Faim', category: 'Solidarité', desc: 'Pilotage au sein d\'un collège en Île-de-France — 2010.', emoji: '🏃' },
    { title: 'Camp International Patrimoine', category: 'Interculturel', desc: 'Patrimoine et changement climatique, Savigny-le-Temple — 2016.', emoji: '🏕️' },
    { title: 'Projet Éducatif MECS', category: 'Protection enfance', desc: 'Construction identitaire d\'adolescents, DEFIS 77 — 2014/2017.', emoji: '🏠' },
    { title: 'Prévention Décrochage Scolaire', category: 'Éducation', desc: 'Outils pédagogiques en collège, Île-de-France — 2020.', emoji: '📖' },
    { title: 'Inclusion & Polyhandicap', category: 'Handicap', desc: 'Projet inclusif, Fondation Anne de Gaulle — 2021.', emoji: '🤝' },
    { title: 'Arbres Fruitiers & Insertion', category: 'Transversal', desc: 'Projet multi-services, MDD Loudéac (22) — 2025.', emoji: '🌲' },
  ]

  return (
    <section id="portfolio" style={{ padding: '8rem 3rem', background: tokens.colors.cream }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.terracotta, marginBottom: '1rem' }}>Réalisations</p>
              <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 400, color: tokens.colors.charcoal }}>
                Projets qui ont <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>fleuri</em>
              </h2>
            </div>
            <span style={{ fontSize: '3rem' }}>🌼</span>
          </div>
        </FadeInSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.1}>
              <div style={{
                background: i === 1 || i === 4 ? tokens.colors.forest : 'white',
                color: (i === 1 || i === 4) ? 'white' : tokens.colors.charcoal,
                padding: '2rem', borderRadius: '25px', height: '100%',
                display: 'flex', flexDirection: 'column',
              }}>
                <span style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: (i === 1 || i === 4) ? tokens.colors.sage : tokens.colors.terracotta, marginBottom: '1rem',
                }}>{project.category}</span>
                <div style={{
                  aspectRatio: '16/10',
                  background: (i === 1 || i === 4) ? 'rgba(255,255,255,0.1)' : tokens.colors.sand,
                  borderRadius: '15px', marginBottom: '1.5rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '3rem' }}>{project.emoji}</span>
                </div>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.6,
                  color: (i === 1 || i === 4) ? 'rgba(255,255,255,0.7)' : tokens.colors.muted,
                }}>{project.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
