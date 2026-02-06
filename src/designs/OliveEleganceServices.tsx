/**
 * OLIVE ELEGANCE - Services Page
 * Sober, clear style with text priority
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
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(249, 246, 240, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${tokens.colors.border}`,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.75rem',
            fontWeight: 500,
            color: tokens.colors.olive,
          }}>
            Éducatrice
          </span>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.75rem',
            fontStyle: 'italic',
            color: tokens.colors.sage,
          }}>
            Spécialisée
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/2" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            color: tokens.colors.charcoalLight,
            textDecoration: 'none',
          }}>
            ← Retour à l'accueil
          </a>
        </nav>
      </div>
    </header>
  )
}

function ServiceDetail({ number, title, description, details, price }: {
  number: string
  title: string
  description: string
  details: string[]
  price?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        padding: '3rem 0',
        borderBottom: `1px solid ${tokens.colors.border}`,
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '100px 1fr 200px',
        gap: '3rem',
        alignItems: 'start',
      }}>
        {/* Number */}
        <span style={{
          fontFamily: tokens.fonts.display,
          fontSize: '4rem',
          fontWeight: 400,
          color: tokens.colors.border,
          lineHeight: 1,
        }}>
          {number}
        </span>

        {/* Content */}
        <div>
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.75rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>
            {title}
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.1rem',
            fontWeight: 300,
            color: tokens.colors.charcoalLight,
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            {description}
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}>
            {details.map((detail, i) => (
              <li key={i} style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.95rem',
                color: tokens.colors.muted,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}>
                <span style={{ color: tokens.colors.gold, marginTop: '0.25rem' }}>•</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        {price && (
          <div style={{ textAlign: 'right' }}>
            <span style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 500,
              color: tokens.colors.gold,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.5rem',
            }}>
              Tarif
            </span>
            <span style={{
              fontFamily: tokens.fonts.display,
              fontSize: '1.25rem',
              color: tokens.colors.charcoal,
            }}>
              {price}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  )
}

export function OliveEleganceServices() {
  const services = [
    {
      number: '01',
      title: 'Accompagnement individuel',
      description: 'Un suivi personnalisé adapté aux besoins spécifiques de votre enfant, pour l\'aider à développer son plein potentiel dans un cadre bienveillant et stimulant.',
      details: [
        'Bilan initial et définition des objectifs',
        'Séances hebdomadaires de 60 à 90 minutes',
        'Activités adaptées au profil de l\'enfant',
        'Suivi régulier avec les parents',
        'Rapport d\'évolution trimestriel',
      ],
      price: 'Sur devis',
    },
    {
      number: '02',
      title: 'Ateliers collectifs',
      description: 'Des moments de partage et d\'apprentissage collectif, favorisant la socialisation et la coopération entre enfants dans un environnement stimulant.',
      details: [
        'Groupes de 4 à 6 enfants maximum',
        'Activités artistiques et sensorielles',
        'Exploration de la nature',
        'Développement des compétences sociales',
        'Sessions de 2 heures',
      ],
      price: 'Sur devis',
    },
    {
      number: '03',
      title: 'Conseil aux familles',
      description: 'Un accompagnement pour les parents souhaitant mieux comprendre et soutenir le développement de leur enfant au quotidien.',
      details: [
        'Entretiens personnalisés',
        'Aménagement de l\'environnement familial',
        'Stratégies éducatives adaptées',
        'Gestion des situations difficiles',
        'Support téléphonique entre les séances',
      ],
      price: 'Sur devis',
    },
    {
      number: '04',
      title: 'Formation professionnelle',
      description: 'Des formations pour les professionnels de l\'éducation souhaitant enrichir leurs pratiques pédagogiques avec des approches alternatives.',
      details: [
        'Introduction aux pédagogies alternatives',
        'Observation et documentation',
        'Création d\'environnements préparés',
        'Accompagnement des enfants à besoins particuliers',
        'Certification à l\'issue de la formation',
      ],
      price: 'Sur devis',
    },
  ]

  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.cream,
      color: tokens.colors.charcoal,
      minHeight: '100vh',
    }}>
      <Navigation />
      
      <main style={{ paddingTop: '120px' }}>
        {/* Header */}
        <section style={{
          padding: '4rem 3rem 6rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <span style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: tokens.colors.gold,
              letterSpacing: '0.15em',
            }}>
              Services
            </span>
            <div style={{ width: '60px', height: '1px', background: tokens.colors.border }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500,
              color: tokens.colors.charcoal,
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              maxWidth: '700px',
            }}
          >
            Des services <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>adaptés</em> à chaque situation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.1rem',
              fontWeight: 300,
              color: tokens.colors.muted,
              lineHeight: 1.8,
              maxWidth: '600px',
            }}
          >
            Chaque accompagnement est pensé sur mesure, en fonction du profil et des besoins 
            spécifiques de l'enfant et de sa famille.
          </motion.p>
        </section>

        {/* Services list */}
        <section style={{
          padding: '0 3rem 6rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {services.map((service, i) => (
            <ServiceDetail key={service.number} {...service} />
          ))}
        </section>

        {/* Contact CTA */}
        <section style={{
          padding: '4rem 3rem',
          background: tokens.colors.creamDark,
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>
            Intéressé par un service ?
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            color: tokens.colors.muted,
            marginBottom: '2rem',
          }}>
            Contactez-moi pour discuter de vos besoins.
          </p>
          <a
            href="mailto:contact@educatrice.fr"
            style={{
              display: 'inline-block',
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              fontWeight: 500,
              color: tokens.colors.cream,
              background: tokens.colors.olive,
              padding: '1rem 2rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Prendre contact
          </a>
        </section>
      </main>

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
        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.5)',
        }}>
          © 2025 Éducatrice Spécialisée
        </p>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="/2/legal" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
          }}>
            Mentions légales
          </a>
        </nav>
      </footer>

      <style>{`
        @media (max-width: 968px) {
          article > div {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          article > div > span:first-child {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default OliveEleganceServices
