import { tokens } from './tokens'
import { FadeInSection } from './FadeInSection'

export function Portfolio() {
  const projects = [
    { year: '2010', title: 'Cross & Action Contre la Faim', location: 'Collège, Île-de-France', sector: 'Solidarité' },
    { year: '2016', title: 'Camp International Patrimoine & Climat', location: 'Savigny-le-Temple (77)', sector: 'Interculturel' },
    { year: '2014–2017', title: 'Projet Éducatif MECS Adolescents', location: 'Association DEFIS 77', sector: 'ASE' },
    { year: '2020', title: 'Prévention Décrochage Scolaire', location: 'Collège, Île-de-France', sector: 'Éducation' },
    { year: '2021', title: 'Inclusion & Polyhandicap', location: 'Fondation Anne de Gaulle (78)', sector: 'Handicap' },
    { year: '2025', title: 'Arbres Fruitiers & Insertion', location: 'MDD Loudéac (22)', sector: 'Transversal' },
  ]

  return (
    <section id="portfolio" style={{ padding: '8rem 3rem', background: tokens.colors.offWhite }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent, marginBottom: '1rem' }}>Réalisations</div>
              <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: tokens.colors.text }}>
                Projets <span style={{ color: tokens.colors.electric }}>structurants</span>
              </h2>
            </div>
          </div>
        </FadeInSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: tokens.colors.grayLight }}>
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.08}>
              <div style={{
                display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: '2rem',
                padding: '2rem', background: 'white', alignItems: 'center',
              }}>
                <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.1rem', fontWeight: 700, color: tokens.colors.electric }}>{project.year}</span>
                <div>
                  <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.15rem', fontWeight: 600, color: tokens.colors.text, marginBottom: '0.25rem' }}>{project.title}</h3>
                  <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.grayMid }}>{project.location}</p>
                </div>
                <span style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.accent,
                  padding: '0.4rem 0.75rem', background: 'rgba(237, 137, 54, 0.1)',
                }}>{project.sector}</span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #portfolio [style*="grid-template-columns: 120px 1fr auto"] {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
