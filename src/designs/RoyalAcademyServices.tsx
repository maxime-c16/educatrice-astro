/**
 * ROYAL ACADEMY - Services Page
 * Detailed service offerings with academic, structured presentation
 */

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const tokens = {
  colors: {
    royal: '#1e3a5f',
    royalLight: '#2d5a8f',
    navy: '#0f1f33',
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
      background: 'rgba(250, 249, 247, 0.97)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${tokens.colors.border}`,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.25rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/3" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${tokens.colors.royal} 0%, ${tokens.colors.royalLight} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'white',
              }}>É</span>
            </div>
            <div>
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.4rem',
                fontWeight: 600,
                color: tokens.colors.royal,
                display: 'block',
                lineHeight: 1.1,
              }}>
                Éducatrice
              </span>
              <span style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: tokens.colors.gold,
              }}>
                Spécialisée
              </span>
            </div>
          </div>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/3" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            color: tokens.colors.charcoalLight,
            textDecoration: 'none',
          }}>
            ← Retour à l'accueil
          </a>
          <a href="#contact" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
            padding: '0.75rem 1.5rem',
            background: tokens.colors.royal,
          }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

interface ServiceBlockProps {
  number: string
  title: string
  subtitle: string
  description: string
  details: string[]
  pricing: { label: string; price: string }[]
  reversed?: boolean
}

function ServiceBlock({ number, title, subtitle, description, details, pricing, reversed }: ServiceBlockProps) {
  return (
    <FadeInSection>
      <div style={{
        display: 'grid',
        gridTemplateColumns: reversed ? '1fr 2fr' : '2fr 1fr',
        gap: '4rem',
        padding: '4rem 0',
        borderBottom: `1px solid ${tokens.colors.border}`,
      }}>
        {/* Content */}
        <div style={{ order: reversed ? 2 : 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              fontFamily: tokens.fonts.display,
              fontSize: '3rem',
              fontWeight: 300,
              color: tokens.colors.royal,
              lineHeight: 1,
            }}>{number}</span>
            <div>
              <h2 style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.75rem',
                fontWeight: 500,
                color: tokens.colors.charcoal,
                lineHeight: 1.2,
              }}>{title}</h2>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: tokens.colors.gold,
              }}>{subtitle}</p>
            </div>
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
            background: tokens.colors.creamDark,
            padding: '1.5rem',
            marginBottom: '1.5rem',
          }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: tokens.colors.gold,
              marginBottom: '1rem',
            }}>Ce que comprend cette prestation</p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.5rem',
            }}>
              {details.map((detail) => (
                <li key={detail} style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.9rem',
                  color: tokens.colors.charcoalLight,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                }}>
                  <span style={{ color: tokens.colors.royal }}>◆</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <div style={{
          order: reversed ? 1 : 2,
          background: tokens.colors.navy,
          padding: '2rem',
          color: 'white',
          alignSelf: 'start',
        }}>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: tokens.colors.goldLight,
            marginBottom: '1.5rem',
          }}>Tarifs indicatifs</p>
          
          {pricing.map((item, i) => (
            <div key={i} style={{
              padding: '1rem 0',
              borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '0.25rem',
              }}>{item.label}</p>
              <p style={{
                fontFamily: tokens.fonts.display,
                fontSize: '1.5rem',
                fontWeight: 500,
              }}>{item.price}</p>
            </div>
          ))}

          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.4)',
            marginTop: '1.5rem',
            fontStyle: 'italic',
          }}>
            * Tarifs ajustables selon situation
          </p>
        </div>
      </div>
    </FadeInSection>
  )
}

export function RoyalAcademyServices() {
  const services = [
    {
      number: '01',
      title: 'Accompagnement individuel',
      subtitle: 'Suivi personnalisé',
      description: 'Un accompagnement sur mesure pour enfants et adolescents présentant des troubles du comportement, des difficultés d\'apprentissage ou des besoins éducatifs particuliers. Chaque parcours est unique et mérite une attention individualisée.',
      details: [
        'Bilan éducatif initial',
        'Projet personnalisé',
        'Séances hebdomadaires',
        'Compte-rendus réguliers',
        'Coordination avec l\'école',
        'Outils adaptés',
      ],
      pricing: [
        { label: 'Séance individuelle (1h)', price: '60 € / séance' },
        { label: 'Forfait mensuel (4 séances)', price: '200 € / mois' },
      ],
    },
    {
      number: '02',
      title: 'Ateliers collectifs',
      subtitle: 'Dynamique de groupe',
      description: 'Des ateliers en petits groupes pour développer les compétences sociales, la confiance en soi et la coopération. L\'apprentissage par les pairs dans un cadre structuré et bienveillant favorise l\'épanouissement de chaque participant.',
      details: [
        'Groupes de 4-6 enfants',
        'Thématiques ciblées',
        'Activités ludiques',
        'Progression mesurée',
        'Retour aux parents',
        'Matériel fourni',
      ],
      pricing: [
        { label: 'Atelier ponctuel (2h)', price: '35 € / enfant' },
        { label: 'Cycle 8 ateliers', price: '240 € / enfant' },
      ],
    },
    {
      number: '03',
      title: 'Conseil aux familles',
      subtitle: 'Soutien parental',
      description: 'Un espace d\'écoute et de conseil pour les parents confrontés à des difficultés éducatives. Ensemble, nous construisons des stratégies adaptées à votre situation familiale et aux besoins spécifiques de votre enfant.',
      details: [
        'Entretiens famille',
        'Analyse des situations',
        'Stratégies concrètes',
        'Médiation si besoin',
        'Suivi téléphonique',
        'Ressources documentaires',
      ],
      pricing: [
        { label: 'Consultation (1h30)', price: '75 € / séance' },
        { label: 'Suivi familial (3 mois)', price: '350 € forfait' },
      ],
    },
    {
      number: '04',
      title: 'Formation professionnelle',
      subtitle: 'Pour les équipes',
      description: 'Formations destinées aux professionnels de l\'éducation, du médico-social et de la petite enfance. Partage d\'expertise et d\'outils pratiques pour améliorer l\'accompagnement des publics en difficulté.',
      details: [
        'Modules sur mesure',
        'Cas pratiques',
        'Supports pédagogiques',
        'Attestation de formation',
        'Suivi post-formation',
        'Groupe max. 12 personnes',
      ],
      pricing: [
        { label: 'Demi-journée (4h)', price: '400 € HT' },
        { label: 'Journée complète (7h)', price: '700 € HT' },
      ],
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

      {/* Header */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '4rem',
        paddingLeft: '3rem',
        paddingRight: '3rem',
        background: tokens.colors.navy,
        color: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: tokens.colors.gold,
              marginBottom: '1rem',
            }}>Prestations</p>
            <h1 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}>
              Une offre <em style={{ fontStyle: 'italic', color: tokens.colors.goldLight }}>complète</em>
              <br />d'accompagnement
            </h1>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.1rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
            }}>
              Des prestations adaptées à chaque situation, conçues avec rigueur 
              et bienveillance pour répondre aux besoins des enfants, des familles 
              et des professionnels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 3rem 4rem',
      }}>
        {services.map((service, i) => (
          <ServiceBlock key={service.number} {...service} reversed={i % 2 === 1} />
        ))}
      </main>

      {/* CTA */}
      <section id="contact" style={{
        padding: '5rem 3rem',
        background: tokens.colors.creamDark,
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
            Une question sur mes prestations ?
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            color: tokens.colors.muted,
            marginBottom: '2rem',
          }}>
            Contactez-moi pour un échange personnalisé
          </p>
          <a href="mailto:contact@educatrice.fr" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
            padding: '1rem 2.5rem',
            background: tokens.colors.royal,
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
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/3/legal" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
          }}>Mentions légales</a>
          <a href="/3/legal#privacy" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
          }}>Confidentialité</a>
        </div>
      </footer>
    </div>
  )
}

export default RoyalAcademyServices
