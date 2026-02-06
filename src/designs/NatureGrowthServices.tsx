/**
 * NATURE GROWTH - Services Page
 * Organic, warm presentation of services
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

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
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
      background: 'rgba(250, 248, 245, 0.92)',
      backdropFilter: 'blur(20px)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/4" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.75rem' }}>🌱</span>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.5rem',
            fontWeight: 500,
            color: tokens.colors.forest,
          }}>
            Éducatrice
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/4" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.9rem',
            color: tokens.colors.charcoalLight,
            textDecoration: 'none',
          }}>
            ← Retour à l'accueil
          </a>
          <a href="#contact" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
            padding: '0.75rem 1.5rem',
            background: tokens.colors.forest,
            borderRadius: '25px',
          }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

interface ServiceCardProps {
  emoji: string
  title: string
  description: string
  details: string[]
  pricing: { label: string; price: string }[]
}

function ServiceCard({ emoji, title, description, details, pricing }: ServiceCardProps) {
  return (
    <FadeInSection>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '3rem',
        padding: '3rem',
        background: 'white',
        borderRadius: '30px',
        marginBottom: '2rem',
      }}>
        {/* Content */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2.5rem' }}>{emoji}</span>
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: '1.75rem',
              fontWeight: 500,
              color: tokens.colors.charcoal,
            }}>{title}</h2>
          </div>

          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.05rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: tokens.colors.charcoalLight,
            marginBottom: '2rem',
          }}>{description}</p>

          <div style={{
            background: tokens.colors.sand,
            padding: '1.5rem',
            borderRadius: '20px',
          }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: tokens.colors.terracotta,
              marginBottom: '1rem',
            }}>Ce qui est inclus</p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
            }}>
              {details.map((detail) => (
                <li key={detail} style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.9rem',
                  color: tokens.colors.charcoalLight,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{ color: tokens.colors.forest }}>✓</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <div style={{
          background: tokens.colors.forest,
          padding: '2rem',
          borderRadius: '25px',
          color: 'white',
          alignSelf: 'start',
        }}>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: tokens.colors.sage,
            marginBottom: '1.5rem',
          }}>Tarifs</p>
          
          {pricing.map((item, i) => (
            <div key={i} style={{
              padding: '1rem 0',
              borderTop: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
            }}>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '0.25rem',
              }}>{item.label}</p>
              <p style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.4rem',
                fontWeight: 500,
              }}>{item.price}</p>
            </div>
          ))}

          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '1.5rem',
            fontStyle: 'italic',
          }}>
            * Devis personnalisé sur demande
          </p>
        </div>
      </div>
    </FadeInSection>
  )
}

export function NatureGrowthServices() {
  const services = [
    {
      emoji: '🪴',
      title: 'Accompagnement individuel',
      description: 'Un suivi personnalisé où chaque enfant bénéficie d\'une attention adaptée à ses besoins spécifiques. Comme une plante qui a besoin de conditions particulières pour grandir, chaque enfant mérite un accompagnement sur mesure.',
      details: [
        'Bilan éducatif initial',
        'Projet personnalisé',
        'Séances hebdomadaires',
        'Suivi du progrès',
        'Communication parents',
        'Outils adaptés',
      ],
      pricing: [
        { label: 'Séance (1h)', price: '60 € / séance' },
        { label: 'Forfait 4 séances', price: '200 € / mois' },
      ],
    },
    {
      emoji: '🌻',
      title: 'Ateliers collectifs',
      description: 'Des séances en petits groupes où les enfants apprennent ensemble dans un cadre bienveillant. L\'entraide et le partage sont au cœur de ces moments, favorisant le développement des compétences sociales.',
      details: [
        'Groupes de 4-6 enfants',
        'Thèmes variés',
        'Activités créatives',
        'Jeux coopératifs',
        'Retour aux familles',
        'Matériel inclus',
      ],
      pricing: [
        { label: 'Atelier (2h)', price: '35 € / enfant' },
        { label: 'Cycle 8 ateliers', price: '240 € / enfant' },
      ],
    },
    {
      emoji: '🏡',
      title: 'Soutien aux familles',
      description: 'Un accompagnement pour les parents qui souhaitent créer un environnement favorable à l\'épanouissement de leur enfant. Conseils pratiques, écoute et stratégies éducatives adaptées à votre situation.',
      details: [
        'Entretiens familiaux',
        'Conseils pratiques',
        'Stratégies éducatives',
        'Soutien émotionnel',
        'Ressources',
        'Suivi disponible',
      ],
      pricing: [
        { label: 'Consultation (1h30)', price: '75 € / séance' },
        { label: 'Suivi 3 mois', price: '350 € forfait' },
      ],
    },
    {
      emoji: '📚',
      title: 'Formation professionnelle',
      description: 'Des formations pour les équipes éducatives souhaitant enrichir leurs pratiques. Partage d\'outils concrets et de méthodes éprouvées pour mieux accompagner les enfants en difficulté.',
      details: [
        'Sur mesure',
        'Cas pratiques',
        'Supports fournis',
        'Attestation',
        'Suivi post-formation',
        'Groupe 12 max',
      ],
      pricing: [
        { label: 'Demi-journée', price: '400 € HT' },
        { label: 'Journée complète', price: '700 € HT' },
      ],
    },
  ]

  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.sand,
      color: tokens.colors.charcoal,
      minHeight: '100vh',
    }}>
      <Navigation />

      {/* Header */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '4rem',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        background: tokens.colors.forest,
        color: 'white',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>🌿</span>
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}>
            Mes <em style={{ fontStyle: 'italic', color: tokens.colors.sage }}>services</em>
          </h1>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '550px',
            margin: '0 auto',
          }}>
            Des accompagnements pensés pour favoriser la croissance 
            et l'épanouissement de chaque enfant, à son rythme.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <main style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '4rem 3rem',
      }}>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </main>

      {/* CTA */}
      <section id="contact" style={{
        padding: '5rem 3rem',
        background: tokens.colors.cream,
        textAlign: 'center',
      }}>
        <FadeInSection>
          <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>💌</span>
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '2rem',
            fontWeight: 400,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>
            Prêt à commencer ?
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            color: tokens.colors.muted,
            marginBottom: '2rem',
          }}>
            Échangeons sur les besoins de votre enfant
          </p>
          <a href="mailto:contact@educatrice.fr" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
            padding: '1rem 2.5rem',
            background: tokens.colors.forest,
            borderRadius: '30px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Me contacter
            <span>→</span>
          </a>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 3rem',
        background: tokens.colors.forest,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.6)',
        }}>
          © 2025 Éducatrice Spécialisée
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/4/legal" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
          }}>Mentions légales</a>
          <a href="/4/legal#privacy" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
          }}>Confidentialité</a>
        </div>
      </footer>
    </div>
  )
}

export default NatureGrowthServices
