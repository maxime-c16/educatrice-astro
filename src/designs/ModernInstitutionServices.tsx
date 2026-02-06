/**
 * MODERN INSTITUTION - Services Page
 * Clean, professional service presentation
 */

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const tokens = {
  colors: {
    royal: '#1a365d',
    royalLight: '#2c5282',
    electric: '#3182ce',
    accent: '#ed8936',
    white: '#ffffff',
    offWhite: '#f7fafc',
    gray100: '#edf2f7',
    gray200: '#e2e8f0',
    gray500: '#718096',
    gray700: '#4a5568',
    charcoal: '#1a202c',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Navigation() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${tokens.colors.gray200}`,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/5" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: tokens.colors.royal,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>É</span>
          </div>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            fontWeight: 600,
            color: tokens.colors.charcoal,
          }}>
            Éducatrice Spécialisée
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/5" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            color: tokens.colors.gray700,
            textDecoration: 'none',
          }}>← Retour</a>
          <a href="#contact" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
            padding: '0.75rem 1.5rem',
            background: tokens.colors.royal,
          }}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

interface ServiceRowProps {
  number: string
  title: string
  description: string
  features: string[]
  pricing: { label: string; price: string }[]
}

function ServiceRow({ number, title, description, features, pricing }: ServiceRowProps) {
  return (
    <FadeInSection>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gap: '3rem',
        padding: '3rem 0',
        borderBottom: `1px solid ${tokens.colors.gray200}`,
      }}>
        {/* Number */}
        <div>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '4rem',
            fontWeight: 300,
            color: tokens.colors.gray200,
            lineHeight: 1,
          }}>{number}</span>
        </div>

        {/* Content */}
        <div>
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.75rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>{title}</h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            color: tokens.colors.gray700,
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>{description}</p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem',
          }}>
            {features.map((feature) => (
              <div key={feature} style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.9rem',
                color: tokens.colors.gray500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{ color: tokens.colors.accent }}>✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div style={{
          background: tokens.colors.gray100,
          padding: '1.5rem',
          alignSelf: 'start',
        }}>
          {pricing.map((item, i) => (
            <div key={i} style={{
              padding: '0.75rem 0',
              borderTop: i > 0 ? `1px solid ${tokens.colors.gray200}` : 'none',
            }}>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.8rem',
                color: tokens.colors.gray500,
              }}>{item.label}</p>
              <p style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.25rem',
                fontWeight: 500,
                color: tokens.colors.charcoal,
              }}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  )
}

export function ModernInstitutionServices() {
  const services = [
    {
      number: '01',
      title: 'Accompagnement individuel',
      description: 'Un suivi personnalisé et structuré pour enfants et adolescents nécessitant un accompagnement éducatif spécifique. Évaluation initiale, plan d\'action et objectifs mesurables.',
      features: ['Bilan éducatif complet', 'Plan personnalisé', 'Séances hebdomadaires', 'Rapports de progression', 'Coordination école', 'Outils adaptés'],
      pricing: [{ label: 'Séance (1h)', price: '60 €' }, { label: 'Forfait 4 séances', price: '200 €' }],
    },
    {
      number: '02',
      title: 'Ateliers collectifs',
      description: 'Sessions en petits groupes axées sur le développement des compétences sociales et l\'apprentissage par les pairs. Cadre structuré et bienveillant.',
      features: ['Groupes 4-6 enfants', 'Thématiques ciblées', 'Activités structurées', 'Évaluation progression', 'Retour aux parents', 'Matériel fourni'],
      pricing: [{ label: 'Atelier (2h)', price: '35 € / enfant' }, { label: 'Cycle 8 séances', price: '240 €' }],
    },
    {
      number: '03',
      title: 'Conseil aux familles',
      description: 'Accompagnement parental pour développer des stratégies éducatives efficaces. Entretiens structurés et outils pratiques.',
      features: ['Analyse situation', 'Stratégies concrètes', 'Médiation si besoin', 'Suivi régulier', 'Documentation', 'Support téléphonique'],
      pricing: [{ label: 'Consultation (1h30)', price: '75 €' }, { label: 'Suivi 3 mois', price: '350 €' }],
    },
    {
      number: '04',
      title: 'Formation professionnelle',
      description: 'Formations pour équipes éducatives et médico-sociales. Transmission de méthodes et outils pratiques.',
      features: ['Modules sur mesure', 'Études de cas', 'Supports inclus', 'Attestation', 'Suivi post-formation', 'Max 12 participants'],
      pricing: [{ label: 'Demi-journée (4h)', price: '400 € HT' }, { label: 'Journée (7h)', price: '700 € HT' }],
    },
  ]

  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.white,
      color: tokens.colors.charcoal,
      minHeight: '100vh',
    }}>
      <Navigation />

      {/* Header */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '4rem',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        background: tokens.colors.royal,
        color: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ width: '60px', height: '4px', background: tokens.colors.accent, marginBottom: '2rem' }} />
            <h1 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 500,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}>
              Nos <em style={{ fontStyle: 'italic' }}>services</em>
            </h1>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '550px',
            }}>
              Des prestations professionnelles et structurées pour répondre 
              aux besoins des enfants, familles et institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 3rem 4rem' }}>
        {services.map((service) => (
          <ServiceRow key={service.number} {...service} />
        ))}
      </main>

      {/* CTA */}
      <section id="contact" style={{
        padding: '5rem 3rem',
        background: tokens.colors.gray100,
        textAlign: 'center',
      }}>
        <FadeInSection>
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>
            Besoin d'informations ?
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            color: tokens.colors.gray500,
            marginBottom: '2rem',
          }}>
            Contactez-moi pour un devis personnalisé
          </p>
          <a href="mailto:contact@educatrice.fr" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.95rem',
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
            padding: '1rem 2.5rem',
            background: tokens.colors.royal,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Me contacter →
          </a>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 3rem',
        background: tokens.colors.charcoal,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
          © 2025 Éducatrice Spécialisée
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/5/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/5/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Confidentialité</a>
        </div>
      </footer>
    </div>
  )
}

export default ModernInstitutionServices
