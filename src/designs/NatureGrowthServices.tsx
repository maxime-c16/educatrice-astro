/**
 * NATURE GROWTH - Services Page — APRIORIS
 * Organic cards with emoji, rounded corners
 */

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const tokens = {
  colors: {
    forest: '#2d4a3e',
    forestLight: '#3d6b5a',
    moss: '#7a9a8a',
    sage: '#a8c4b8',
    terracotta: '#c4856a',
    sand: '#e8ddd4',
    cream: '#faf8f5',
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

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
  )
}

function Navigation() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(250, 248, 245, 0.92)', backdropFilter: 'blur(20px)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/4" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.75rem' }}>🌱</span>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 500, color: tokens.colors.forest }}>APRIORIS</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/4" style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.charcoalLight, textDecoration: 'none' }}>← Retour à l'accueil</a>
          <a href="#contact" style={{
            fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500, color: 'white',
            textDecoration: 'none', padding: '0.75rem 1.5rem', background: tokens.colors.forest, borderRadius: '25px',
          }}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

function ServiceCard({ emoji, title, description, details }: {
  emoji: string; title: string; description: string; details: string[]
}) {
  return (
    <FadeInSection>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', padding: '3rem', background: 'white', borderRadius: '30px', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2.5rem' }}>{emoji}</span>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 500, color: tokens.colors.charcoal }}>{title}</h2>
          </div>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: tokens.colors.charcoalLight, marginBottom: '2rem' }}>{description}</p>
          <div style={{ background: tokens.colors.sand, padding: '1.5rem', borderRadius: '20px' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.terracotta, marginBottom: '1rem' }}>Le processus</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {details.map((detail) => (
                <li key={detail} style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.charcoalLight, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: tokens.colors.forest }}>✓</span>{detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ background: tokens.colors.forest, padding: '2rem', borderRadius: '25px', color: 'white', alignSelf: 'start' }}>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.sage, marginBottom: '1.5rem' }}>Tarif</p>
          <p style={{ fontFamily: tokens.fonts.display, fontSize: '1.4rem', fontWeight: 500, marginBottom: '1rem' }}>Sur devis</p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Chaque dispositif est adapté à vos besoins et contextes.</p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '1.5rem', fontStyle: 'italic' }}>* Devis personnalisé sur demande</p>
        </div>
      </div>
    </FadeInSection>
  )
}

export function NatureGrowthServices() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.sand, color: tokens.colors.charcoal, minHeight: '100vh' }}>
      <Navigation />

      {/* Header */}
      <section style={{ paddingTop: '140px', paddingBottom: '4rem', paddingLeft: '3rem', paddingRight: '3rem', background: tokens.colors.forest, color: 'white', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>🌿</span>
          <h1 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Nos <em style={{ fontStyle: 'italic', color: tokens.colors.sage }}>prestations</em>
          </h1>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: 'rgba(255,255,255,0.8)', maxWidth: '550px', margin: '0 auto' }}>
            Deux leviers complémentaires pour cultiver des pratiques professionnelles inclusives et durables.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 3rem' }}>
        <ServiceCard
          emoji="🔧" title="Ingénierie éducative et inclusive"
          description="Comme un jardinier qui prépare le sol avant de semer, nous concevons les dispositifs inclusifs en amont, avec les professionnels de terrain. De l'analyse des besoins à l'évaluation, un accompagnement complet."
          details={[
            'Diagnostic partagé — analyse des besoins',
            'Co-conception — construction collaborative',
            'Pilotage — coordination et suivi',
            'Déploiement et mesure d\'impact',
            'Évaluation, suivi et ajustements',
          ]}
        />
        <ServiceCard
          emoji="📚" title="Formation et professionnalisation"
          description="Les meilleures graines sont celles que l'on fait pousser soi-même. Nos formations partent du vécu des participants pour ancrer des changements de pratiques concrets et durables."
          details={[
            'Mise en situation et jeux de rôle',
            'Expression du vécu et déconstruction',
            'Apport théorique progressif',
            'Appropriation et transfert au quotidien',
          ]}
        />
      </main>

      {/* Modalités */}
      <section style={{ padding: '4rem 3rem', background: tokens.colors.cream }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🌱</span>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 400, color: tokens.colors.charcoal }}>
              Comment nous <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>intervenons</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {[
              { emoji: '🤝', title: 'Co-construction et ancrage terrain', desc: 'Dispositifs construits avec les acteurs de terrain, prise en compte des pratiques et de l\'expertise locale.' },
              { emoji: '💡', title: 'Pédagogie active et expérientielle', desc: 'Mise en situation, analyse réflexive, conceptualisation progressive théorie/pratique.' },
              { emoji: '🔄', title: 'Adaptation et contextualisation', desc: 'Ajustement aux contextes, publics et contraintes. Formats et rythmes modulables.' },
              { emoji: '📊', title: 'Orientation impact et durabilité', desc: 'Suivi de l\'évolution des pratiques, analyse quali/quanti, capitalisation.' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '2rem', background: 'white', borderRadius: '25px' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.75rem' }}>{item.emoji}</span>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.15rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 300, color: tokens.colors.muted, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section style={{ padding: '4rem 3rem', background: tokens.colors.sand }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🌻</span>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 400, color: tokens.colors.charcoal }}>
              Notre <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>écosystème</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              'Professionnels de l\'éducation et de la formation',
              'Organismes de formation et structures éducatives',
              'Institutions, collectivités et acteurs publics',
              'Associations et acteurs de l\'inclusion',
              'Entreprises engagées dans la formation',
              'Partenariats pédagogiques et experts métiers',
            ].map((partner) => (
              <div key={partner} style={{ padding: '1.25rem', background: tokens.colors.cream, borderRadius: '15px', borderLeft: `4px solid ${tokens.colors.forest}` }}>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.charcoalLight }}>{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: '5rem 3rem', background: tokens.colors.cream, textAlign: 'center' }}>
        <FadeInSection>
          <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>💌</span>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '2rem', fontWeight: 400, color: tokens.colors.charcoal, marginBottom: '1rem' }}>Cultivons votre projet ?</h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: tokens.colors.muted, marginBottom: '2rem' }}>Échangeons sur vos besoins et votre contexte</p>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '1rem', fontWeight: 500, color: 'white',
            textDecoration: 'none', padding: '1rem 2.5rem', background: tokens.colors.forest, borderRadius: '30px',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>Me contacter <span>→</span></a>
        </FadeInSection>
      </section>

      <footer style={{ padding: '2rem 3rem', background: tokens.colors.forest, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>© 2025 APRIORIS — Danae Azorin</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/4/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/4/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Confidentialité</a>
        </div>
      </footer>
    </div>
  )
}

export default NatureGrowthServices
