import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Portfolio() {
  const projects = [
    { title: 'Cross & Action Contre la Faim', category: 'Projet solidaire', year: '2010', desc: 'Pilotage et coordination d\'un projet de Cross et Récolte de Fonds au sein d\'un collège en Île-de-France.' },
    { title: 'Camp International Patrimoine', category: 'Éducation interculturelle', year: '2016', desc: 'Coordination de camp autour du patrimoine et changement climatique, reconnaissance Youthpass. Savigny-le-Temple (77).' },
    { title: 'Projet Éducatif MECS', category: 'Protection de l\'enfance', year: '2014–2017', desc: 'Conception et pilotage d\'un projet éducatif pour la construction identitaire d\'adolescents. Association A.G.E DEFIS 77.' },
    { title: 'Prévention du Décrochage', category: 'Éducation nationale', year: '2020', desc: 'Conception et déploiement d\'outils pédagogiques pour prévenir le décrochage scolaire en collège.' },
    { title: 'Participation & Polyhandicap', category: 'Handicap', year: '2021', desc: 'Coordination d\'un projet inclusif avec adultes polyhandicapés. Fondation Anne de Gaulle (78).' },
    { title: 'Arbres Fruitiers & Insertion', category: 'Projet transversal', year: '2025', desc: 'Projet multi-services : plantation d\'arbres fruitiers avec collégiens et bénéficiaires RSA. MDD Centre Bretagne, Loudéac (22).' },
  ]

  return (
    <section id="portfolio" style={{ padding: '8rem 3rem', background: tokens.colors.cream }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>Portfolio</p>
              <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 500, color: tokens.colors.charcoal }}>
                Réalisations <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>emblématiques</em>
              </h2>
            </div>
            <div style={{ width: '80px', height: '3px', background: tokens.colors.gold }} />
          </div>
        </FadeInSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.1}>
              <div style={{
                background: i === 1 || i === 4 ? tokens.colors.royal : 'white',
                color: i === 1 || i === 4 ? 'white' : tokens.colors.charcoal,
                padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column',
                border: (i === 1 || i === 4) ? 'none' : `1px solid ${tokens.colors.border}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{
                    fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: (i === 1 || i === 4) ? tokens.colors.goldLight : tokens.colors.gold,
                  }}>{project.category}</span>
                  <span style={{
                    fontFamily: tokens.fonts.body, fontSize: '0.75rem',
                    color: (i === 1 || i === 4) ? 'rgba(255,255,255,0.6)' : tokens.colors.muted,
                  }}>{project.year}</span>
                </div>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.3rem', fontWeight: 500, marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.7,
                  color: (i === 1 || i === 4) ? 'rgba(255,255,255,0.8)' : tokens.colors.muted, flex: 1,
                }}>{project.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
