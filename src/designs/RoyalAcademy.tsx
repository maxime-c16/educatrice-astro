/**
 * ROYAL ACADEMY - Homepage Design
 * 
 * Sophisticated academic aesthetic with Royal Blue palette
 * Classic institution feel with modern refinement
 * Structured grid layouts with elegant typography
 */

import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { useRef, useState } from 'react'

// Design Tokens
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

// Reusable animated wrapper
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  
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
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          {[
            { label: 'Accueil', href: '#hero' },
            { label: 'Manifeste', href: '#manifeste' },
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Témoignages', href: '#testimonials' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.85rem',
                fontWeight: 400,
                color: tokens.colors.charcoalLight,
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="/3/services" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
            padding: '0.75rem 1.5rem',
            background: tokens.colors.royal,
            transition: 'background 0.3s ease',
          }}>
            Prestations
          </a>
        </nav>
      </div>
    </header>
  )
}

// Hero Section - Academic Statement Style
function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: '100vh',
        background: tokens.colors.cream,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left - Text */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 3rem 4rem 6rem',
        maxWidth: '700px',
        marginLeft: 'auto',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: tokens.colors.gold,
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}>
            <span style={{ width: '40px', height: '1px', background: tokens.colors.gold }} />
            Accompagnement éducatif
          </p>
          
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: tokens.colors.charcoal,
            marginBottom: '2rem',
          }}>
            L'excellence au service
            <br />
            <span style={{ color: tokens.colors.royal }}>du développement</span>
            <br />
            <em style={{ fontStyle: 'italic' }}>de chaque enfant</em>
          </h1>

          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.1rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: tokens.colors.charcoalLight,
            maxWidth: '480px',
            marginBottom: '3rem',
          }}>
            Forte d'une expertise de plus de 15 ans, j'accompagne enfants, 
            familles et institutions avec une approche rigoureuse et bienveillante,
            fondée sur les valeurs d'écoute et de respect.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'white',
              textDecoration: 'none',
              padding: '1rem 2rem',
              background: tokens.colors.royal,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}>
              Prendre rendez-vous
              <span>→</span>
            </a>
            <a href="#manifeste" style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              fontWeight: 500,
              color: tokens.colors.royal,
              textDecoration: 'none',
              padding: '1rem 2rem',
              border: `2px solid ${tokens.colors.royal}`,
              transition: 'all 0.3s ease',
            }}>
              Découvrir ma démarche
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right - Image with geometric frame */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem',
      }}>
        <motion.div style={{ y }}>
          {/* Decorative frame */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: '80%',
            height: '75%',
            border: `2px solid ${tokens.colors.gold}`,
            zIndex: 1,
          }} />
          
          {/* Image placeholder */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '450px',
            aspectRatio: '3/4',
            background: `linear-gradient(135deg, ${tokens.colors.royalLight} 0%, ${tokens.colors.royal} 100%)`,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
            }}>
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '3rem',
                color: 'white',
              }}>É</span>
            </div>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
            }}>
              Photo professionnelle<br />à ajouter
            </p>
          </div>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            background: 'white',
            padding: '1.5rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            zIndex: 10,
          }}
        >
          <p style={{
            fontFamily: tokens.fonts.display,
            fontSize: '2.5rem',
            fontWeight: 600,
            color: tokens.colors.royal,
            lineHeight: 1,
          }}>15+</p>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.75rem',
            color: tokens.colors.muted,
            marginTop: '0.25rem',
          }}>années d'expérience</p>
        </motion.div>
      </div>
    </section>
  )
}

// Manifeste Section - Academic style with structured layout
function Manifeste() {
  return (
    <section id="manifeste" style={{
      padding: '8rem 3rem',
      background: tokens.colors.navy,
      color: 'white',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <FadeInSection>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Left - Section header */}
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: tokens.colors.gold,
                marginBottom: '1rem',
              }}>
                Mon manifeste
              </p>
              <h2 style={{
                fontFamily: tokens.fonts.display,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}>
                Une vision
                <br />
                <em style={{ fontStyle: 'italic', color: tokens.colors.goldLight }}>engagée</em>
              </h2>
              <div style={{
                width: '60px',
                height: '3px',
                background: tokens.colors.gold,
              }} />
            </div>

            {/* Right - Content */}
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1.25rem',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '2rem',
              }}>
                Mon parcours m'a conduite à développer une expertise unique, 
                au croisement de la rigueur institutionnelle et de l'approche 
                individualisée. Chaque enfant est un univers singulier.
              </p>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '2rem',
              }}>
                Diplômée d'État et formée aux méthodes les plus avancées, 
                je crois profondément que l'éducation spécialisée est un art 
                qui allie connaissance, patience et créativité.
              </p>
              
              {/* Values grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}>
                {[
                  { num: '01', title: 'Écoute', desc: 'Comprendre avant d\'agir' },
                  { num: '02', title: 'Rigueur', desc: 'Méthodes éprouvées' },
                  { num: '03', title: 'Bienveillance', desc: 'Au cœur de l\'approche' },
                ].map((value) => (
                  <div key={value.num}>
                    <span style={{
                      fontFamily: tokens.fonts.body,
                      fontSize: '0.7rem',
                      color: tokens.colors.gold,
                    }}>{value.num}</span>
                    <h3 style={{
                      fontFamily: tokens.fonts.display,
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      marginTop: '0.5rem',
                      marginBottom: '0.25rem',
                    }}>{value.title}</h3>
                    <p style={{
                      fontFamily: tokens.fonts.body,
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.5)',
                    }}>{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Services Preview - Card-based layout
function ServicesPreview() {
  const services = [
    {
      icon: '◈',
      title: 'Accompagnement individuel',
      desc: 'Suivi personnalisé pour enfants et adolescents en difficulté',
      features: ['Bilan initial approfondi', 'Plan éducatif sur mesure', 'Suivi régulier'],
    },
    {
      icon: '◆',
      title: 'Ateliers collectifs',
      desc: 'Séances de groupe favorisant le développement social',
      features: ['Groupes restreints', 'Activités structurées', 'Progression mesurée'],
    },
    {
      icon: '◇',
      title: 'Conseil aux familles',
      desc: 'Accompagnement et soutien à la parentalité',
      features: ['Entretiens familiaux', 'Stratégies éducatives', 'Médiation'],
    },
  ]

  return (
    <section style={{
      padding: '8rem 3rem',
      background: tokens.colors.creamDark,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <FadeInSection>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: tokens.colors.gold,
              marginBottom: '1rem',
            }}>
              Mes prestations
            </p>
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 500,
              color: tokens.colors.charcoal,
            }}>
              Un accompagnement <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>complet</em>
            </h2>
          </div>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {services.map((service, i) => (
            <FadeInSection key={service.title} delay={i * 0.1}>
              <div style={{
                background: 'white',
                padding: '2.5rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <span style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '2rem',
                  color: tokens.colors.royal,
                  marginBottom: '1.5rem',
                }}>{service.icon}</span>
                <h3 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: tokens.colors.charcoal,
                  marginBottom: '0.75rem',
                }}>{service.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: tokens.colors.muted,
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}>{service.desc}</p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.5rem 0',
                  flex: 1,
                }}>
                  {service.features.map((feature) => (
                    <li key={feature} style={{
                      fontFamily: tokens.fonts.body,
                      fontSize: '0.85rem',
                      color: tokens.colors.charcoalLight,
                      padding: '0.5rem 0',
                      borderBottom: `1px solid ${tokens.colors.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
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
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              fontWeight: 500,
              color: tokens.colors.royal,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              border: `2px solid ${tokens.colors.royal}`,
              transition: 'all 0.3s ease',
            }}>
              Voir toutes les prestations
              <span>→</span>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Portfolio Section - Gallery with structured grid
function Portfolio() {
  const projects = [
    {
      title: 'Course contre la faim',
      category: 'Événement solidaire',
      year: '2024',
      desc: 'Organisation et accompagnement de 200 jeunes lors de cette course caritative internationale.',
    },
    {
      title: 'Camps internationaux',
      category: 'Séjours éducatifs',
      year: '2023',
      desc: 'Animation de camps d\'été en collaboration avec des partenaires européens.',
    },
    {
      title: 'Projet reforestation',
      category: 'Éducation environnementale',
      year: '2024',
      desc: 'Initiative pédagogique alliant sensibilisation écologique et travail collectif.',
    },
  ]

  return (
    <section id="portfolio" style={{
      padding: '8rem 3rem',
      background: tokens.colors.cream,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <FadeInSection>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            marginBottom: '4rem',
          }}>
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: tokens.colors.gold,
                marginBottom: '1rem',
              }}>
                Portfolio
              </p>
              <h2 style={{
                fontFamily: tokens.fonts.display,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 500,
                color: tokens.colors.charcoal,
              }}>
                Projets <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>emblématiques</em>
              </h2>
            </div>
            <div style={{
              width: '80px',
              height: '3px',
              background: tokens.colors.gold,
            }} />
          </div>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
        }}>
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.15}>
              <div style={{
                background: i === 1 ? tokens.colors.royal : 'white',
                color: i === 1 ? 'white' : tokens.colors.charcoal,
                padding: '3rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: i === 1 ? 'none' : `1px solid ${tokens.colors.border}`,
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                }}>
                  <span style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: i === 1 ? tokens.colors.goldLight : tokens.colors.gold,
                  }}>
                    {project.category}
                  </span>
                  <span style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.75rem',
                    color: i === 1 ? 'rgba(255,255,255,0.6)' : tokens.colors.muted,
                  }}>
                    {project.year}
                  </span>
                </div>

                {/* Image placeholder */}
                <div style={{
                  aspectRatio: '16/10',
                  background: i === 1 
                    ? 'rgba(255,255,255,0.1)' 
                    : `linear-gradient(135deg, ${tokens.colors.creamDark} 0%, ${tokens.colors.border} 100%)`,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.7rem',
                    color: i === 1 ? 'rgba(255,255,255,0.4)' : tokens.colors.muted,
                  }}>
                    Photo du projet
                  </span>
                </div>

                <h3 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  marginBottom: '0.75rem',
                }}>{project.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: i === 1 ? 'rgba(255,255,255,0.8)' : tokens.colors.muted,
                  flex: 1,
                }}>{project.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "Un accompagnement exceptionnel qui a transformé notre quotidien familial. Professionnalisme et humanité.",
      author: "Marie L.",
      role: "Parent",
      rating: 5,
    },
    {
      quote: "Sa rigueur méthodologique alliée à une vraie bienveillance font d'elle une professionnelle remarquable.",
      author: "Dr. Philippe R.",
      role: "Pédopsychiatre",
      rating: 5,
    },
    {
      quote: "Une collaboration enrichissante qui a apporté de nouveaux outils à notre équipe éducative.",
      author: "Sophie M.",
      role: "Directrice d'établissement",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" style={{
      padding: '8rem 3rem',
      background: tokens.colors.navy,
      color: 'white',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: tokens.colors.gold,
              marginBottom: '1rem',
            }}>
              Témoignages
            </p>
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 500,
            }}>
              Ce qu'ils <em style={{ fontStyle: 'italic', color: tokens.colors.goldLight }}>disent</em>
            </h2>
          </div>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {testimonials.map((t, i) => (
            <FadeInSection key={t.author} delay={i * 0.1}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Stars */}
                <div style={{ marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} style={{ color: tokens.colors.gold, marginRight: '0.25rem' }}>★</span>
                  ))}
                </div>
                <blockquote style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '1rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.85)',
                  flex: 1,
                  margin: 0,
                }}>
                  "{t.quote}"
                </blockquote>
                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <p style={{
                    fontFamily: tokens.fonts.display,
                    fontSize: '1rem',
                    fontWeight: 500,
                    marginBottom: '0.25rem',
                  }}>{t.author}</p>
                  <p style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                  }}>{t.role}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* QR Code section */}
        <FadeInSection delay={0.3}>
          <div style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255,255,255,0.05)',
          }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '1rem',
            }}>
              Votre avis compte ! Scannez le QR code pour laisser un témoignage sur Google
            </p>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'white',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.6rem',
                color: tokens.colors.charcoal,
                textAlign: 'center',
              }}>QR Code<br/>Google Avis</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 3rem',
      background: tokens.colors.cream,
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <FadeInSection>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: tokens.colors.gold,
            marginBottom: '1rem',
          }}>
            Contact
          </p>
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '1.5rem',
          }}>
            Prenons <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>rendez-vous</em>
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.1rem',
            fontWeight: 300,
            color: tokens.colors.muted,
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
          }}>
            Je suis à votre écoute pour échanger sur vos besoins 
            et construire ensemble un accompagnement adapté.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '3rem',
          }}>
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: tokens.colors.gold,
                marginBottom: '0.5rem',
              }}>Email</p>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1rem',
                color: tokens.colors.charcoal,
              }}>contact@educatrice.fr</p>
            </div>
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: tokens.colors.gold,
                marginBottom: '0.5rem',
              }}>Téléphone</p>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1rem',
                color: tokens.colors.charcoal,
              }}>06 XX XX XX XX</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <a href="mailto:contact@educatrice.fr" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
            padding: '1.25rem 3rem',
            background: tokens.colors.royal,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            transition: 'all 0.3s ease',
          }}>
            Envoyer un message
            <span>→</span>
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer style={{
      padding: '3rem',
      background: tokens.colors.charcoal,
      color: 'white',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: tokens.colors.royal,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: tokens.fonts.display,
              fontSize: '1rem',
              fontWeight: 600,
              color: 'white',
            }}>É</span>
          </div>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1rem',
            fontWeight: 500,
          }}>Éducatrice Spécialisée</span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
        }}>
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
          <a href="/3/legal#cookies" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
          }}>Cookies</a>
        </div>

        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.4)',
        }}>
          © 2025 — Tous droits réservés
        </p>
      </div>
    </footer>
  )
}

// Main Export
export function RoyalAcademy() {
  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.cream,
      color: tokens.colors.charcoal,
    }}>
      <Navigation />
      <Hero />
      <Manifeste />
      <ServicesPreview />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default RoyalAcademy
