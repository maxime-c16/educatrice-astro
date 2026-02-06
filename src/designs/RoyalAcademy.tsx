/**
 * ROYAL ACADEMY — APRIORIS
 * 
 * Sophisticated academic aesthetic with Royal Blue palette
 * Authoritative institutional voice for consulting expertise
 */

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState } from 'react'

const tokens = {
  colors: {
    royal: '#1e3a5f',
    royalLight: '#2d5a8f',
    navy: '#0f1f33',
    sky: '#4a7fb3',
    gold: '#d4a853',
    goldLight: '#e8c87a',
    cream: '#faf9f7',
    creamDark: '#f2f0ed',
    charcoal: '#1a1a1a',
    charcoalLight: '#3d3d3d',
    muted: '#6b6b6b',
    border: '#e0ddd8',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  )
}

// Navigation
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(250, 249, 247, 0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${tokens.colors.border}`,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.25rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/3" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${tokens.colors.royal} 0%, ${tokens.colors.royalLight} 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>A</span>
              </div>
              <div>
                <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.4rem', fontWeight: 600, color: tokens.colors.royal, display: 'block', lineHeight: 1.1, letterSpacing: '0.03em' }}>
                  APRIORIS
                </span>
                <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: tokens.colors.gold }}>
                  Ingénierie éducative
                </span>
              </div>
            </div>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '3rem' }} className="ra-desktop-nav">
            {[
              { label: 'À propos', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Témoignages', href: '#testimonials' },
            ].map((item) => (
              <a key={item.href} href={item.href}
                style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 400, color: tokens.colors.charcoalLight, textDecoration: 'none' }}
              >{item.label}</a>
            ))}
            <a href="/3/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 500,
              color: 'white', textDecoration: 'none', padding: '0.75rem 1.5rem',
              background: tokens.colors.royal,
            }}>Prestations</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ra-mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Menu"
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.royal, top: menuOpen ? '8px' : 0, transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.royal, top: '8px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.royal, top: menuOpen ? '8px' : '16px', transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s ease' }} />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 90,
              background: tokens.colors.cream,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}
          >
            {[
              { label: 'À propos', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Témoignages', href: '#testimonials' },
              { label: 'Prestations', href: '/3/services' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '2rem',
                  color: tokens.colors.royal,
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .ra-desktop-nav { display: none !important; }
          .ra-mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

// Hero
function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section id="hero" ref={containerRef} style={{
      minHeight: '100vh', background: tokens.colors.cream,
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      paddingTop: '80px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '4rem 3rem 4rem 6rem', maxWidth: '700px', marginLeft: 'auto',
      }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <p style={{
            fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold,
            marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
          }}>
            <span style={{ width: '40px', height: '1px', background: tokens.colors.gold }} />
            Consultante en ingénierie éducative
          </p>

          <h1 style={{
            fontFamily: tokens.fonts.display, fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 500, lineHeight: 1.15, color: tokens.colors.charcoal, marginBottom: '2rem',
          }}>
            Ingénierie éducative
            <br />
            <span style={{ color: tokens.colors.royal }}>et inclusive</span>
            <br />
            <em style={{ fontStyle: 'italic' }}>au service des professionnels</em>
          </h1>

          <p style={{
            fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300,
            lineHeight: 1.7, color: tokens.colors.charcoalLight, maxWidth: '480px', marginBottom: '3rem',
          }}>
            Avec 16 ans d'expertise, j'accompagne les professionnels et les institutions
            dans la conception de dispositifs éducatifs inclusifs, opérationnels et durables.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
              color: 'white', textDecoration: 'none', padding: '1rem 2rem',
              background: tokens.colors.royal, display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}>
              Prendre rendez-vous <span>→</span>
            </a>
            <a href="#manifeste" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
              color: tokens.colors.royal, textDecoration: 'none', padding: '1rem 2rem',
              border: `2px solid ${tokens.colors.royal}`,
            }}>
              Découvrir ma démarche
            </a>
          </div>
        </motion.div>
      </div>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem' }}>
        <motion.div style={{ y }}>
          <div style={{ position: 'absolute', top: '10%', right: '15%', width: '80%', height: '75%', border: `2px solid ${tokens.colors.gold}`, zIndex: 1 }} />
          <div style={{
            position: 'relative', width: '100%', maxWidth: '450px', aspectRatio: '3/4',
            background: `linear-gradient(135deg, ${tokens.colors.royalLight} 0%, ${tokens.colors.royal} 100%)`,
            zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem',
          }}>
            <div style={{
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
            }}>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '3rem', color: 'white' }}>A</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
              Photo professionnelle<br />à ajouter
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          style={{ position: 'absolute', bottom: '15%', left: '5%', background: 'white', padding: '1.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', zIndex: 10 }}
        >
          <p style={{ fontFamily: tokens.fonts.display, fontSize: '2.5rem', fontWeight: 600, color: tokens.colors.royal, lineHeight: 1 }}>16</p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: tokens.colors.muted, marginTop: '0.25rem' }}>années d'expérience</p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #hero { grid-template-columns: 1fr !important; }
          #hero > div:last-child { display: none !important; }
          #hero > div:first-child { padding: 2.5rem 1.25rem !important; max-width: 100% !important; margin-left: 0 !important; }
        }
      `}</style>
    </section>
  )
}

// Manifeste
function Manifeste() {
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
      `}</style>    </section>
  )
}

// Expertises + Services Preview
function ExpertisesPreview() {
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
              <div style={{ background: 'white', padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
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

// Portfolio
function Portfolio() {
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

// Testimonials
function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '8rem 3rem', background: tokens.colors.navy, color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>Témoignages</p>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 500 }}>
              Vos <em style={{ fontStyle: 'italic', color: tokens.colors.goldLight }}>retours</em>
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.05)' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              Vous avez collaboré avec APRIORIS ? Votre avis compte !
            </p>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
              Scannez le QR code pour laisser un témoignage sur Google
            </p>
            <div style={{
              width: '120px', height: '120px', background: 'white', margin: '0 auto',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.6rem', color: tokens.colors.charcoal, textAlign: 'center' }}>QR Code<br />Google Avis</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', fontStyle: 'italic' }}>
              Les témoignages reçus seront affichés ici progressivement
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Contact
function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 3rem', background: tokens.colors.cream }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>Contact</p>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '1.5rem' }}>
            Construisons <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>ensemble</em>
          </h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.muted, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Échangeons sur vos besoins pour co-construire un dispositif adapté à votre contexte et vos réalités de terrain.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '0.5rem' }}>Email</p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: tokens.colors.charcoal }}>contact@aprioris.fr</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
            color: 'white', textDecoration: 'none', padding: '1.25rem 3rem',
            background: tokens.colors.royal, display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          }}>
            Envoyer un message <span>→</span>
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer style={{ padding: '3rem', background: tokens.colors.charcoal, color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%', background: tokens.colors.royal,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', fontWeight: 600, color: 'white' }}>A</span>
          </div>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', fontWeight: 500 }}>APRIORIS</span>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/3/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/3/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Confidentialité</a>
          <a href="/3/legal#cookies" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Cookies</a>
        </div>

        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
          © 2025 APRIORIS — Danae Azorin
        </p>
      </div>
    </footer>
  )
}

// Main Export
export function RoyalAcademy() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.cream, color: tokens.colors.charcoal }}>
      <Navigation />
      <Hero />
      <Manifeste />
      <ExpertisesPreview />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default RoyalAcademy
