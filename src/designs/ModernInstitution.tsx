/**
 * MODERN INSTITUTION — APRIORIS
 *
 * Bold contemporary institutional design
 * Geometric patterns, strong typography, impact-driven
 */

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState } from 'react'

const tokens = {
  colors: {
    royal: '#1a365d',
    royalDark: '#0f1f33',
    electric: '#3182ce',
    electricLight: '#63b3ed',
    accent: '#ed8936',
    accentLight: '#fbd38d',
    offWhite: '#f7fafc',
    white: '#ffffff',
    grayLight: '#e2e8f0',
    grayMid: '#718096',
    grayDark: '#2d3748',
    text: '#1a202c',
  },
  fonts: {
    display: "'DM Sans', 'IBM Plex Sans', -apple-system, sans-serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
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
        background: 'rgba(26, 54, 93, 0.97)', backdropFilter: 'blur(12px)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/5" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '42px', height: '42px', background: tokens.colors.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>A</span>
            </div>
            <div>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.35rem', fontWeight: 700, color: 'white', letterSpacing: '0.05em', display: 'block', lineHeight: 1.1 }}>APRIORIS</span>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.55rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: tokens.colors.electricLight }}>Ingénierie éducative et inclusive</span>
            </div>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="mi-desktop-nav">
            {[
              { label: 'À propos', href: '#manifeste' },
              { label: 'Expertise', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Avis', href: '#testimonials' },
            ].map((item) => (
              <a key={item.href} href={item.href}
                style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
              >{item.label}</a>
            ))}
            <a href="/5/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 600, color: tokens.colors.royalDark,
              textDecoration: 'none', padding: '0.7rem 1.5rem', background: tokens.colors.accent,
            }}>Nos prestations</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mi-mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Menu"
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.accent, top: menuOpen ? '8px' : 0, transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.accent, top: '8px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.accent, top: menuOpen ? '8px' : '16px', transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s ease' }} />
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
              background: tokens.colors.royal,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}
          >
            {[
              { label: 'À propos', href: '#manifeste' },
              { label: 'Expertise', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Avis', href: '#testimonials' },
              { label: 'Nos prestations', href: '/5/services' },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: tokens.fonts.display, fontSize: '2rem',
                  color: 'white', textDecoration: 'none',
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
          .mi-desktop-nav { display: none !important; }
          .mi-mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

// Hero
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={ref} style={{
      minHeight: '100vh', background: tokens.colors.royal,
      position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: '80px',
    }}>
      {/* Geometric background pattern */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.03) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.03) 75%)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
      }} />

      <div style={{
        maxWidth: '1400px', margin: '0 auto', padding: '4rem 3rem',
        display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '4rem',
        alignItems: 'center', position: 'relative', zIndex: 1,
      }}>
        <motion.div style={{ y, opacity }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div style={{
              fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent,
              padding: '0.5rem 1rem', background: 'rgba(237, 137, 54, 0.15)', display: 'inline-block', marginBottom: '2rem',
            }}>16+ ans d'expertise · Multi-secteurs</div>

            <h1 style={{
              fontFamily: tokens.fonts.display, fontSize: 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 800, lineHeight: 1.05, color: 'white', marginBottom: '2rem',
            }}>
              Ingénierie
              <br />
              <span style={{ color: tokens.colors.accent }}>éducative</span>
              <br />
              et inclusive
            </h1>

            <p style={{
              fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300,
              lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: '500px', marginBottom: '2.5rem',
            }}>
              Conception et accompagnement de dispositifs éducatifs et inclusifs
              à destination des professionnels. L'inclusion ne se fait pas à posteriori :
              elle se prévoit dès la conception.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#contact" style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 600,
                color: tokens.colors.royalDark, textDecoration: 'none', padding: '1rem 2rem',
                background: tokens.colors.accent, display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              }}>Nous contacter <span style={{ fontSize: '1.2rem' }}>→</span></a>
              <a href="#manifeste" style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
                color: 'white', textDecoration: 'none', padding: '1rem 2rem',
                border: '2px solid rgba(255,255,255,0.3)',
              }}>En savoir plus</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem',
          }}>
            {[
              { value: '16', unit: 'ans', label: 'Expérience terrain' },
              { value: '6+', unit: '', label: 'Projets structurants' },
              { value: '3', unit: '', label: 'Domaines d\'expertise' },
              { value: '3', unit: '', label: 'Langues parlées' },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                style={{
                  padding: '1.5rem', background: i === 0 ? tokens.colors.accent : 'rgba(255,255,255,0.08)',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontFamily: tokens.fonts.display, fontSize: '2.5rem', fontWeight: 800, color: i === 0 ? tokens.colors.royalDark : 'white', lineHeight: 1 }}>
                  {stat.value}<span style={{ fontSize: '1rem' }}>{stat.unit}</span>
                </p>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: i === 0 ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #hero > div { grid-template-columns: 1fr !important; }
          #hero [style*="grid-template-columns: repeat(2, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; max-width: 400px; }
        }
      `}</style>
    </section>
  )
}

// Manifeste
function Manifeste() {
  return (
    <section id="manifeste" style={{ padding: '8rem 3rem', background: tokens.colors.offWhite }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent, marginBottom: '1.5rem' }}>
                À propos d'APRIORIS
              </div>
              <h2 style={{
                fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800, lineHeight: 1.15, color: tokens.colors.text, marginBottom: '2rem',
              }}>
                Agir en amont,
                <br />
                <span style={{ color: tokens.colors.electric }}>pas en réaction</span>
              </h2>
              <div style={{ width: '60px', height: '4px', background: tokens.colors.accent }} />
            </div>

            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9, color: tokens.colors.grayDark, marginBottom: '1.5rem' }}>
                Je suis <strong style={{ fontWeight: 600 }}>Danae Azorin</strong>, consultante en ingénierie éducative et inclusive. En 16 ans — animatrice, éducatrice spécialisée, formatrice, référente ASE — j'ai observé un décalage persistant entre les besoins des publics vulnérables et les réponses des dispositifs.
              </p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.9, color: tokens.colors.grayDark, marginBottom: '2rem' }}>
                Ce n'est pas un manque d'engagement. Ce sont des limites structurelles. Certains publics sont exclus involontairement. APRIORIS agit en amont pour que l'inclusion soit intégrée, appropriée et durable.
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: tokens.colors.grayLight, marginTop: '5rem' }}>
            {[
              { label: 'Co-construction', desc: 'Dispositifs construits avec les acteurs de terrain et les pratiques existantes' },
              { label: 'Opérationnalité', desc: 'Des outils concrets, directement applicables dans les structures' },
              { label: 'Durabilité', desc: 'Appropriation par les professionnels pour une intégration pérenne' },
              { label: 'Impact', desc: 'Suivi quantitatif et qualitatif des évolutions de pratiques' },
            ].map((value) => (
              <div key={value.label} style={{ padding: '2.5rem 2rem', background: tokens.colors.offWhite }}>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.1rem', fontWeight: 700, color: tokens.colors.text, marginBottom: '0.75rem' }}>{value.label}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 300, color: tokens.colors.grayMid, lineHeight: 1.6 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #manifeste > div > div > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}

// Expertises
function ExpertisesPreview() {
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
                color: i === 0 ? 'white' : tokens.colors.royalDark,
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
                        background: i === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
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

// Portfolio
function Portfolio() {
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
}// Testimonials
function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '8rem 3rem', background: 'white' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent, marginBottom: '1rem' }}>Témoignages</div>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: tokens.colors.text, marginBottom: '3rem' }}>
            Retours <span style={{ color: tokens.colors.electric }}>professionnels</span>
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ padding: '3rem', border: `1px solid ${tokens.colors.grayLight}` }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.05rem', color: tokens.colors.grayDark, marginBottom: '1.5rem' }}>
              Vous avez collaboré avec APRIORIS ? Partagez votre retour d'expérience.
            </p>
            <div style={{
              width: '100px', height: '100px', background: tokens.colors.offWhite,
              margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${tokens.colors.grayLight}`,
            }}>
              <span style={{ fontSize: '0.65rem', color: tokens.colors.grayMid, textAlign: 'center' }}>QR Code<br />Google</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: tokens.colors.grayMid, marginTop: '1.5rem' }}>
              Les avis professionnels seront affichés ici
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
    <section id="contact" style={{ padding: '8rem 3rem', background: tokens.colors.royal }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.accent, marginBottom: '1rem' }}>Contact</div>
          <h2 style={{
            fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 800, color: 'white', marginBottom: '1.5rem',
          }}>
            Parlons de votre <span style={{ color: tokens.colors.accent }}>projet</span>
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300,
            color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 3rem',
          }}>
            Chaque contexte est unique. Échangeons pour co-construire un dispositif adapté à vos besoins et contraintes.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '1rem', fontWeight: 600,
            color: tokens.colors.royalDark, textDecoration: 'none', padding: '1.25rem 3rem',
            background: tokens.colors.accent, display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          }}>contact@aprioris.fr →</a>
        </FadeInSection>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer style={{ padding: '2.5rem 3rem', background: tokens.colors.royalDark, color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '30px', height: '30px', background: tokens.colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', fontWeight: 800, color: 'white' }}>A</span>
          </div>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', fontWeight: 700 }}>APRIORIS</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/5/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/5/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Confidentialité</a>
        </div>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>© 2025 APRIORIS — Danae Azorin</p>
      </div>
    </footer>
  )
}

export function ModernInstitution() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.offWhite, color: tokens.colors.text }}>
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

export default ModernInstitution
