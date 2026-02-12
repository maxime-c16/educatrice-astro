import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const projects = [
    { title: 'Cross & Récolte de Fonds', category: 'Projet solidaire', year: '2010', description: 'Pilotage et coordination d\'un projet de Cross et Récolte de Fonds avec Action Contre la Faim au sein d\'un collège en Île-de-France.' },
    { title: 'Camp International', category: 'Patrimoine & Climat', year: '2016', description: 'Coordination de camp international autour du patrimoine et du changement climatique, reconnaissance européenne Youthpass. Savigny-le-Temple (77).' },
    { title: 'Projet Éducatif MECS', category: 'Protection de l\'enfance', year: '2014–2017', description: 'Conception et pilotage d\'un projet éducatif pour soutenir la construction identitaire d\'adolescents en Maison d\'Enfants. Association A.G.E DEFIS 77.' },
    { title: 'Prévention Décrochage', category: 'Éducation nationale', year: '2020', description: 'Conception et déploiement d\'outils pédagogiques pour prévenir le décrochage scolaire et assurer le suivi d\'élèves en difficulté.' },
    { title: 'Inclusion & Polyhandicap', category: 'Handicap', year: '2021', description: 'Coordination de la participation d\'adultes polyhandicapés à un projet inclusif mobilisant acteurs locaux et participants. Fondation Anne de Gaulle (78).' },
    { title: 'Arbres Fruitiers & Insertion', category: 'Projet transversal', year: '2025', description: 'Projet transversal multi-services : plantation d\'arbres fruitiers avec collégiens et bénéficiaires RSA. Maison du Département Centre Bretagne, Loudéac (22).' },
  ]

  return (
    <section id="portfolio" ref={ref} style={{ padding: '8rem 3rem', background: tokens.colors.olive }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
        >
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>03</span>
          <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Portfolio</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: tokens.colors.cream, lineHeight: 1.2, marginBottom: '4rem' }}
        >
          Projets <em style={{ fontStyle: 'italic', color: tokens.colors.gold }}>phares</em>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <motion.article key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
              }}
            >
              <div style={{
                aspectRatio: '16/8',
                background: `linear-gradient(135deg, ${tokens.colors.sage}40, ${tokens.colors.oliveDark})`,
                position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 300,
                  color: 'rgba(255,255,255,0.3)',
                }}>{project.year}</span>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.65rem', fontWeight: 500,
                  color: tokens.colors.gold, letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>{project.category}</span>
                <h3 style={{
                  fontFamily: tokens.fonts.display, fontSize: '1.15rem', fontWeight: 500,
                  color: tokens.colors.cream, margin: '0.5rem 0',
                }}>{project.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)', lineHeight: 1.6,
                }}>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #portfolio > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
Portfolio.displayName = 'Portfolio'
