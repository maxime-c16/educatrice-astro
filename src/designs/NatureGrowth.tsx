/**
 * NATURE GROWTH — APRIORIS
 *
 * Organic, botanical aesthetic with earth tones
 * Growth metaphors for professional development & inclusion
 */

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState } from 'react'

const tokens = {
  colors: {
    forest: '#2d4a3e',
    forestLight: '#3d6b5a',
    moss: '#7a9a8a',
    sage: '#a8c4b8',
    terracotta: '#c4856a',
    terracottaLight: '#d9a590',
    sand: '#e8ddd4',
    cream: '#faf8f5',
    warmWhite: '#fffcf8',
    charcoal: '#2a2a2a',
    charcoalLight: '#4a4a4a',
    muted: '#7a7a7a',
    border: '#e5dfd8',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  )
}

const blobStyle = (color: string, size: number, top: string, left: string, rotation: number = 0) => ({
  position: 'absolute' as const, width: `${size}px`, height: `${size}px`, top, left,
  background: color, borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  transform: `rotate(${rotation}deg)`, opacity: 0.15, filter: 'blur(40px)', zIndex: 0,
})

// Navigation
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(250, 248, 245, 0.92)', backdropFilter: 'blur(20px)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/4" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: `linear-gradient(135deg, ${tokens.colors.forest} 0%, ${tokens.colors.forestLight} 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🌱</span>
            </div>
            <div>
              <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 500, color: tokens.colors.forest, display: 'block', lineHeight: 1.1 }}>
                APRIORIS
              </span>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.terracotta }}>
                Cultiver l'inclusion · Dès la conception
              </span>
            </div>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="ng-desktop-nav">
            {[
              { label: 'Philosophie', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Témoignages', href: '#testimonials' },
            ].map((item) => (
              <a key={item.href} href={item.href}
                style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 400, color: tokens.colors.charcoalLight, textDecoration: 'none' }}
              >{item.label}</a>
            ))}
            <a href="/4/services" style={{
              fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500, color: 'white',
              textDecoration: 'none', padding: '0.75rem 1.75rem', background: tokens.colors.forest, borderRadius: '30px',
            }}>Nos prestations</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ng-mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Menu"
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.forest, top: menuOpen ? '8px' : 0, transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.forest, top: '8px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s ease' }} />
              <span style={{ position: 'absolute', width: '100%', height: '2px', background: tokens.colors.forest, top: menuOpen ? '8px' : '16px', transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s ease' }} />
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
              { label: 'Philosophie', href: '#manifeste' },
              { label: 'Expertises', href: '#expertises' },
              { label: 'Réalisations', href: '#portfolio' },
              { label: 'Témoignages', href: '#testimonials' },
              { label: 'Nos prestations', href: '/4/services' },
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
                  color: tokens.colors.forest, textDecoration: 'none',
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
          .ng-desktop-nav { display: none !important; }
          .ng-mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

// Hero
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={ref} style={{
      minHeight: '100vh', background: tokens.colors.cream, position: 'relative',
      overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: '80px',
    }}>
      <div style={blobStyle(tokens.colors.sage, 600, '10%', '-10%', 20)} />
      <div style={blobStyle(tokens.colors.terracotta, 400, '60%', '70%', -15)} />
      <div style={blobStyle(tokens.colors.moss, 300, '70%', '20%', 45)} />

      <div style={{
        maxWidth: '1400px', margin: '0 auto', padding: '4rem 3rem',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem',
        alignItems: 'center', position: 'relative', zIndex: 1,
      }}>
        <motion.div style={{ y, opacity }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <p style={{
              fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.terracotta, marginBottom: '1.5rem',
            }}>✦ APRIORIS — Ingénierie éducative et inclusive</p>

            <h1 style={{
              fontFamily: tokens.fonts.display, fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
              fontWeight: 400, lineHeight: 1.1, color: tokens.colors.charcoal, marginBottom: '2rem',
            }}>
              Changer de
              <br />
              <span style={{ color: tokens.colors.forest }}>regard</span>, accompagner
              <br />
              <em style={{ fontStyle: 'italic', color: tokens.colors.forestLight, display: 'inline-block', marginTop: '0.25rem' }}>
                des pratiques durables
              </em>
            </h1>

            <p style={{
              fontFamily: tokens.fonts.body, fontSize: '1.15rem', fontWeight: 300,
              lineHeight: 1.8, color: tokens.colors.charcoalLight, maxWidth: '520px', marginBottom: '2.5rem',
            }}>
              Comme une plante qui grandit avec les bonnes conditions, l'inclusion professionnelle
              se cultive dès la conception. APRIORIS accompagne les professionnels vers des
              pratiques inclusives et pérennes.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
                color: 'white', textDecoration: 'none', padding: '1rem 2rem',
                background: tokens.colors.forest, borderRadius: '30px',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              }}>Prendre contact <span>→</span></a>
              <a href="#manifeste" style={{
                fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500,
                color: tokens.colors.forest, textDecoration: 'none', padding: '1rem 2rem',
                border: `2px solid ${tokens.colors.forest}`, borderRadius: '30px',
              }}>Ma philosophie</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }} style={{ position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', marginLeft: 'auto' }}>
            <div style={{
              position: 'absolute', top: '-20px', left: '-20px', right: '-20px', bottom: '-20px',
              border: `2px solid ${tokens.colors.sage}`, borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
            }} />
            <div style={{
              aspectRatio: '4/5',
              background: `linear-gradient(160deg, ${tokens.colors.forestLight} 0%, ${tokens.colors.forest} 100%)`,
              borderRadius: '50% 50% 40% 60% / 45% 55% 45% 55%',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem',
            }}>
              <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌿</span>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>Photo<br />professionnelle</p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              style={{
                position: 'absolute', bottom: '10%', left: '-15%',
                background: 'white', padding: '1.25rem 1.5rem', borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
              }}
            >
              <p style={{ fontFamily: tokens.fonts.display, fontSize: '2rem', fontWeight: 500, color: tokens.colors.forest, lineHeight: 1 }}>16</p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: tokens.colors.muted, marginTop: '0.25rem' }}>ans d'expérience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Manifeste
function Manifeste() {
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

// Expertises Preview
function ExpertisesPreview() {
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

        {/* Two pillars */}
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

// Portfolio
function Portfolio() {
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

// Testimonials
function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '8rem 3rem', background: tokens.colors.sand }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.terracotta, marginBottom: '1rem' }}>Témoignages</p>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 400, color: tokens.colors.charcoal }}>
              Ils ont vu leurs pratiques <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>s'épanouir</em>
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ textAlign: 'center', padding: '3rem', background: tokens.colors.cream, borderRadius: '25px' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>💬</span>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.05rem', color: tokens.colors.charcoalLight, marginBottom: '1.5rem' }}>
              Vous avez travaillé avec APRIORIS ? Partagez votre expérience !
            </p>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.muted, marginBottom: '2rem' }}>
              Scannez le QR code pour laisser un avis Google
            </p>
            <div style={{
              width: '120px', height: '120px', background: 'white', borderRadius: '15px',
              margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            }}>
              <span style={{ fontSize: '0.65rem', color: tokens.colors.muted, textAlign: 'center' }}>QR Code<br />Google</span>
            </div>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: tokens.colors.muted, marginTop: '1.5rem', fontStyle: 'italic' }}>
              Les témoignages seront affichés ici au fur et à mesure
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
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <span style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'block' }}>💌</span>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: tokens.colors.charcoal, marginBottom: '1rem' }}>
            Faisons <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>connaissance</em>
          </h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.muted, marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
            Chaque contexte est unique. Échangeons pour co-construire un dispositif adapté à vos réalités de terrain.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: tokens.colors.terracotta, marginBottom: '0.5rem' }}>Email</p>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: tokens.colors.charcoal }}>contact@aprioris.fr</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '1rem', fontWeight: 500,
            color: 'white', textDecoration: 'none', padding: '1.25rem 3rem',
            background: tokens.colors.forest, borderRadius: '35px',
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          }}>M'envoyer un message <span>→</span></a>
        </FadeInSection>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer style={{ padding: '3rem', background: tokens.colors.forest, color: 'white' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🌱</span>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.1rem', fontWeight: 500 }}>APRIORIS</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/4/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/4/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Confidentialité</a>
        </div>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>© 2025 APRIORIS — Danae Azorin</p>
      </div>
    </footer>
  )
}

export function NatureGrowth() {
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

export default NatureGrowth
