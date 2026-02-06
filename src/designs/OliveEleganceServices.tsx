/**
 * OLIVE ELEGANCE - Services Page — APRIORIS
 * Editorial numbered list, 3-column grid
 */

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const tokens = {
  colors: {
    olive: '#5c6b4a',
    oliveLight: '#7a8a65',
    sage: '#8b9a6d',
    gold: '#c9a962',
    cream: '#f9f6f0',
    creamDark: '#f0ebe3',
    charcoal: '#2d2d2d',
    charcoalLight: '#4a4a4a',
    muted: '#7a7a7a',
    border: '#e5e0d8',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
}

function Navigation() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(249, 246, 240, 0.95)', backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${tokens.colors.border}`,
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 500, color: tokens.colors.olive }}>APRIORIS</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/2" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.charcoalLight, textDecoration: 'none' }}>← Retour à l'accueil</a>
        </nav>
      </div>
    </header>
  )
}

function ServiceDetail({ number, title, description, details }: {
  number: string; title: string; description: string; details: string[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.article ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ padding: '3rem 0', borderBottom: `1px solid ${tokens.colors.border}` }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 260px', gap: '3rem', alignItems: 'start' }}>
        <span style={{ fontFamily: tokens.fonts.display, fontSize: '4rem', fontWeight: 400, color: tokens.colors.border, lineHeight: 1 }}>{number}</span>
        <div>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '1rem' }}>{title}</h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.charcoalLight, lineHeight: 1.8, marginBottom: '1.5rem' }}>{description}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {details.map((detail, i) => (
              <li key={i} style={{ fontFamily: tokens.fonts.body, fontSize: '0.95rem', color: tokens.colors.muted, display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: tokens.colors.gold, marginTop: '0.25rem' }}>•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 500, color: tokens.colors.gold, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Tarif</span>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.25rem', color: tokens.colors.charcoal }}>Sur devis</span>
        </div>
      </div>
    </motion.article>
  )
}

export function OliveEleganceServices() {
  const services = [
    {
      number: '01',
      title: 'Ingénierie éducative et inclusive',
      description: 'Conception et accompagnement de dispositifs éducatifs inclusifs adaptés aux réalités de terrain. De l\'analyse des besoins à l\'évaluation, un processus rigoureux pour des solutions durables.',
      details: [
        'Diagnostic partagé — analyse des besoins et du contexte',
        'Co-conception — construction collaborative des dispositifs',
        'Pilotage — coordination et suivi opérationnel',
        'Déploiement et mesure d\'impact — mise en œuvre terrain',
        'Évaluation, suivi et ajustements — pérennisation des pratiques',
      ],
    },
    {
      number: '02',
      title: 'Formation et professionnalisation',
      description: 'Des formations expérientielles pour transformer les pratiques professionnelles. Une pédagogie active qui part du vécu des participants pour ancrer durablement les apprentissages.',
      details: [
        'Mise en situation et jeux de rôle — apprentissage par l\'expérience',
        'Expression du vécu — analyse et déconstruction des représentations',
        'Apport théorique progressif — lien théorie/pratique contextualisé',
        'Appropriation et transfert — engagement et intégration dans le quotidien',
      ],
    },
  ]

  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.cream, color: tokens.colors.charcoal, minHeight: '100vh' }}>
      <Navigation />
      <main style={{ paddingTop: '120px' }}>
        {/* Header */}
        <section style={{ padding: '4rem 3rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>Prestations</span>
            <div style={{ width: '60px', height: '1px', background: tokens.colors.border }} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, color: tokens.colors.charcoal, lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '700px' }}
          >
            Deux leviers pour <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>transformer</em> les pratiques
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: tokens.colors.muted, lineHeight: 1.8, maxWidth: '600px' }}
          >
            Chaque intervention est conçue sur mesure, en co-construction avec les professionnels, pour des résultats opérationnels et durables.
          </motion.p>
        </section>

        {/* Services */}
        <section style={{ padding: '0 3rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          {services.map((service) => (
            <ServiceDetail key={service.number} {...service} />
          ))}
        </section>

        {/* Modalités */}
        <section style={{ padding: '5rem 3rem', background: tokens.colors.creamDark }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>Modalités d'intervention</span>
              <div style={{ flex: 1, height: '1px', background: tokens.colors.border }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {[
                { title: 'Co-construction et ancrage terrain', desc: 'Dispositifs construits avec les acteurs de terrain, prise en compte des pratiques existantes et de l\'expertise locale.' },
                { title: 'Pédagogie active et expérientielle', desc: 'Mise en situation, analyse réflexive individuelle et collective, conceptualisation progressive théorie/pratique.' },
                { title: 'Adaptation et contextualisation', desc: 'Ajustement aux contextes, publics et contraintes. Formats et rythmes modulables, interventions ponctuelles ou dans la durée.' },
                { title: 'Orientation impact et durabilité', desc: 'Suivi de l\'évolution des pratiques, analyse quantitative et qualitative, capitalisation dans le quotidien.' },
              ].map((item) => (
                <div key={item.title} style={{ padding: '2rem', background: tokens.colors.cream, border: `1px solid ${tokens.colors.border}` }}>
                  <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.2rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 300, color: tokens.colors.muted, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section style={{ padding: '5rem 3rem', background: tokens.colors.cream }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.15em' }}>Écosystème professionnel</span>
              <div style={{ flex: 1, height: '1px', background: tokens.colors.border }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                'Professionnels de l\'éducation et de la formation',
                'Organismes de formation et structures éducatives',
                'Institutions, collectivités et acteurs publics',
                'Associations et acteurs de l\'inclusion',
                'Entreprises engagées dans la formation et l\'accessibilité',
                'Partenariats pédagogiques et experts métiers',
              ].map((partner) => (
                <div key={partner} style={{ padding: '1.5rem', borderLeft: `3px solid ${tokens.colors.olive}`, background: tokens.colors.creamDark }}>
                  <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 400, color: tokens.colors.charcoalLight }}>{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 3rem', background: tokens.colors.olive, textAlign: 'center' }}>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '2rem', fontWeight: 500, color: 'white', marginBottom: '1rem' }}>Un projet, une question ?</h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Échangeons pour co-construire votre dispositif.</p>
          <a href="mailto:contact@aprioris.fr" style={{
            display: 'inline-block', fontFamily: tokens.fonts.body, fontSize: '0.9rem', fontWeight: 500,
            color: tokens.colors.olive, background: 'white', padding: '1rem 2rem', textDecoration: 'none',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Prendre contact</a>
        </section>
      </main>

      <footer style={{ padding: '2rem 3rem', background: tokens.colors.charcoal, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>© 2025 APRIORIS — Danae Azorin</p>
        <a href="/2/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</a>
      </footer>
    </div>
  )
}

export default OliveEleganceServices
