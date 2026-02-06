/**
 * MODERN INSTITUTION - Homepage Design
 * 
 * Contemporary, bold aesthetic with Royal Blue palette
 * Geometric patterns, clean grids, strong typography
 * Professional yet approachable modern feel
 */

import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { useRef, useState } from 'react'

// Design Tokens - Modern Royal Blue
const tokens = {
  colors: {
    royal: '#1a365d',
    royalLight: '#2c5282',
    electric: '#3182ce',
    sky: '#63b3ed',
    accent: '#ed8936', // Warm orange accent
    accentLight: '#f6ad55',
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

// Animated wrapper
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Navigation - Clean, minimal header
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
        {/* Logo - Modern minimal */}
        <a href="/5" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: tokens.colors.royal,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: tokens.fonts.display,
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'white',
            }}>É</span>
          </div>
          <div>
            <span style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.1rem',
              fontWeight: 600,
              color: tokens.colors.charcoal,
              display: 'block',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              Éducatrice Spécialisée
            </span>
            <span style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: tokens.colors.accent,
            }}>
              Excellence & Bienveillance
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {[
            { label: 'Accueil', href: '#hero' },
            { label: 'À propos', href: '#manifeste' },
            { label: 'Réalisations', href: '#portfolio' },
            { label: 'Avis', href: '#testimonials' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.85rem',
                fontWeight: 500,
                color: tokens.colors.gray700,
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="/5/services" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
            padding: '0.75rem 1.5rem',
            background: tokens.colors.royal,
            transition: 'all 0.2s ease',
          }}>
            Services →
          </a>
        </nav>
      </div>
    </header>
  )
}

// Hero - Bold, geometric split layout
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        paddingTop: '80px',
      }}
    >
      {/* Left - Content */}
      <div style={{
        background: tokens.colors.offWhite,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem 4rem 4rem 6rem',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: tokens.colors.gray100,
            marginBottom: '2rem',
          }}>
            <div style={{ width: '8px', height: '8px', background: tokens.colors.accent, borderRadius: '50%' }} />
            <span style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: tokens.colors.gray700,
            }}>
              15+ ans d'expertise
            </span>
          </div>

          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            color: tokens.colors.charcoal,
            marginBottom: '1.5rem',
          }}>
            Accompagnement
            <br />
            <span style={{ color: tokens.colors.royal }}>éducatif</span>
            <br />
            <em style={{ fontStyle: 'italic', color: tokens.colors.electric }}>d'excellence</em>
          </h1>

          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.1rem',
            fontWeight: 400,
            lineHeight: 1.7,
            color: tokens.colors.gray700,
            maxWidth: '450px',
            marginBottom: '2.5rem',
          }}>
            Une approche professionnelle et humaine pour accompagner 
            chaque enfant vers son plein potentiel. Rigueur, expertise 
            et bienveillance au service du développement.
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#contact" style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'white',
              textDecoration: 'none',
              padding: '1rem 2rem',
              background: tokens.colors.royal,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              Prendre RDV
              <span>→</span>
            </a>
            <a href="/5/services" style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: tokens.colors.royal,
              textDecoration: 'none',
              padding: '1rem 2rem',
              border: `2px solid ${tokens.colors.royal}`,
            }}>
              Voir les services
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: `1px solid ${tokens.colors.gray200}`,
            display: 'flex',
            gap: '3rem',
          }}>
            {[
              { num: '500+', label: 'Enfants accompagnés' },
              { num: '15', label: 'Ans d\'expérience' },
              { num: '98%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '2rem',
                  fontWeight: 500,
                  color: tokens.colors.royal,
                  lineHeight: 1,
                }}>{stat.num}</p>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.75rem',
                  color: tokens.colors.gray500,
                  marginTop: '0.25rem',
                }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right - Visual */}
      <motion.div style={{ y, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${tokens.colors.royal} 0%, ${tokens.colors.royalLight} 50%, ${tokens.colors.electric} 100%)`,
        }} />
        
        {/* Geometric pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: `
            linear-gradient(45deg, white 25%, transparent 25%),
            linear-gradient(-45deg, white 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, white 75%),
            linear-gradient(-45deg, transparent 75%, white 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
        }} />

        {/* Central content */}
        <div style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem',
        }}>
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              width: '280px',
              height: '350px',
              background: 'rgba(255,255,255,0.1)',
              border: '3px solid rgba(255,255,255,0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}>
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: '2rem',
                color: 'white',
              }}>É</span>
            </div>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.6)',
            }}>Photo professionnelle</p>
          </motion.div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              background: 'white',
              padding: '1.5rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{
              width: '40px',
              height: '4px',
              background: tokens.colors.accent,
              marginBottom: '1rem',
            }} />
            <p style={{
              fontFamily: tokens.fonts.display,
              fontSize: '1.25rem',
              fontWeight: 500,
              color: tokens.colors.charcoal,
            }}>Diplômée d'État</p>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.8rem',
              color: tokens.colors.gray500,
            }}>Certifiée DEES</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Manifeste - Modern grid layout
function Manifeste() {
  return (
    <section id="manifeste" style={{
      padding: '8rem 3rem',
      background: tokens.colors.white,
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '6rem',
            alignItems: 'start',
          }}>
            {/* Left - Heading */}
            <div>
              <div style={{
                width: '60px',
                height: '4px',
                background: tokens.colors.accent,
                marginBottom: '2rem',
              }} />
              <h2 style={{
                fontFamily: tokens.fonts.display,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                color: tokens.colors.charcoal,
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}>
                Une approche
                <br />
                <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>professionnelle</em>
              </h2>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1rem',
                color: tokens.colors.gray500,
                lineHeight: 1.7,
              }}>
                Rigueur méthodologique et bienveillance 
                au service de chaque enfant.
              </p>
            </div>

            {/* Right - Content */}
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1.25rem',
                fontWeight: 400,
                lineHeight: 1.8,
                color: tokens.colors.gray700,
                marginBottom: '2rem',
              }}>
                Mon parcours professionnel m'a permis de développer une expertise 
                solide dans l'accompagnement d'enfants et adolescents présentant 
                des besoins éducatifs particuliers. J'allie méthodes éprouvées 
                et approche individualisée.
              </p>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.8,
                color: tokens.colors.gray500,
              }}>
                Chaque accompagnement est construit sur mesure, en collaboration 
                étroite avec les familles et les équipes éducatives, pour garantir 
                des résultats durables et mesurables.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Values grid */}
        <FadeInSection delay={0.2}>
          <div style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            border: `1px solid ${tokens.colors.gray200}`,
          }}>
            {[
              { num: '01', title: 'Expertise', desc: 'Méthodes validées scientifiquement' },
              { num: '02', title: 'Rigueur', desc: 'Suivi structuré et documenté' },
              { num: '03', title: 'Écoute', desc: 'Attention individualisée' },
              { num: '04', title: 'Résultats', desc: 'Objectifs mesurables' },
            ].map((value, i) => (
              <div key={value.num} style={{
                padding: '2.5rem',
                borderRight: i < 3 ? `1px solid ${tokens.colors.gray200}` : 'none',
              }}>
                <span style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: tokens.colors.accent,
                  letterSpacing: '0.1em',
                }}>{value.num}</span>
                <h3 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: tokens.colors.charcoal,
                  marginTop: '1rem',
                  marginBottom: '0.5rem',
                }}>{value.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.9rem',
                  color: tokens.colors.gray500,
                  lineHeight: 1.5,
                }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Services Preview - Card grid
function ServicesPreview() {
  const services = [
    {
      icon: '◇',
      title: 'Accompagnement individuel',
      desc: 'Suivi personnalisé adapté aux besoins spécifiques de chaque enfant.',
    },
    {
      icon: '◆',
      title: 'Ateliers collectifs',
      desc: 'Séances de groupe pour développer les compétences sociales.',
    },
    {
      icon: '○',
      title: 'Conseil aux familles',
      desc: 'Accompagnement parental et stratégies éducatives.',
    },
  ]

  return (
    <section style={{
      padding: '8rem 3rem',
      background: tokens.colors.gray100,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            marginBottom: '4rem',
          }}>
            <div>
              <div style={{
                width: '60px',
                height: '4px',
                background: tokens.colors.accent,
                marginBottom: '1.5rem',
              }} />
              <h2 style={{
                fontFamily: tokens.fonts.display,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 500,
                color: tokens.colors.charcoal,
              }}>
                Nos <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>services</em>
              </h2>
            </div>
            <a href="/5/services" style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: tokens.colors.royal,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              Tous les services
              <span>→</span>
            </a>
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
                transition: 'box-shadow 0.3s ease',
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
                  marginBottom: '1rem',
                }}>{service.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.95rem',
                  color: tokens.colors.gray500,
                  lineHeight: 1.6,
                  flex: 1,
                }}>{service.desc}</p>
                <a href="/5/services" style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: tokens.colors.royal,
                  textDecoration: 'none',
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}>
                  En savoir plus →
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Portfolio - Modern grid
function Portfolio() {
  const projects = [
    {
      title: 'Course contre la faim',
      category: 'Événement solidaire',
      desc: 'Coordination de 200 jeunes pour une action caritative internationale.',
    },
    {
      title: 'Camps internationaux',
      category: 'Séjours éducatifs',
      desc: 'Animation de séjours en partenariat européen.',
    },
    {
      title: 'Projet reforestation',
      category: 'Éducation environnementale',
      desc: 'Initiative pédagogique liant écologie et travail d\'équipe.',
    },
  ]

  return (
    <section id="portfolio" style={{
      padding: '8rem 3rem',
      background: tokens.colors.white,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            marginBottom: '4rem',
          }}>
            <div>
              <div style={{
                width: '60px',
                height: '4px',
                background: tokens.colors.accent,
                marginBottom: '1.5rem',
              }} />
              <h2 style={{
                fontFamily: tokens.fonts.display,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 500,
                color: tokens.colors.charcoal,
              }}>
                Réalisations <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>récentes</em>
              </h2>
            </div>
          </div>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
          border: `1px solid ${tokens.colors.gray200}`,
        }}>
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.1}>
              <div style={{
                padding: '2rem',
                borderRight: i < 2 ? `1px solid ${tokens.colors.gray200}` : 'none',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <span style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: tokens.colors.accent,
                  marginBottom: '1rem',
                }}>
                  {project.category}
                </span>
                
                {/* Image placeholder */}
                <div style={{
                  aspectRatio: '16/10',
                  background: `linear-gradient(135deg, ${tokens.colors.gray100} 0%, ${tokens.colors.gray200} 100%)`,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.7rem',
                    color: tokens.colors.gray500,
                  }}>Photo du projet</span>
                </div>

                <h3 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: tokens.colors.charcoal,
                  marginBottom: '0.75rem',
                }}>{project.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.9rem',
                  color: tokens.colors.gray500,
                  lineHeight: 1.6,
                }}>{project.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials - Clean cards
function Testimonials() {
  const testimonials = [
    {
      quote: "Une professionnelle exceptionnelle. Sa rigueur et son humanité ont fait la différence pour notre famille.",
      author: "Marie L.",
      role: "Parent",
      rating: 5,
    },
    {
      quote: "Approche méthodique et résultats concrets. Je recommande vivement ses services.",
      author: "Dr. Philippe R.",
      role: "Pédopsychiatre",
      rating: 5,
    },
    {
      quote: "Une collaboration fructueuse avec notre établissement. Expertise reconnue.",
      author: "Sophie M.",
      role: "Directrice",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" style={{
      padding: '8rem 3rem',
      background: tokens.colors.royal,
      color: 'white',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              width: '60px',
              height: '4px',
              background: tokens.colors.accent,
              margin: '0 auto 1.5rem',
            }} />
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 500,
            }}>
              Témoignages <em style={{ fontStyle: 'italic', color: tokens.colors.sky }}>clients</em>
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
                borderTop: `3px solid ${tokens.colors.accent}`,
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} style={{ color: tokens.colors.accent }}>★</span>
                  ))}
                </div>
                <blockquote style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.9)',
                  flex: 1,
                  margin: 0,
                }}>
                  "{t.quote}"
                </blockquote>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  }}>{t.author}</p>
                  <p style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.6)',
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
            padding: '2rem',
            background: 'rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '0.6rem', color: tokens.colors.charcoal, textAlign: 'center' }}>
                QR Code<br />Google
              </span>
            </div>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.8)',
            }}>
              Scannez pour laisser votre avis sur Google
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Contact - Minimal CTA
function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 3rem',
      background: tokens.colors.offWhite,
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <div style={{
            width: '60px',
            height: '4px',
            background: tokens.colors.accent,
            margin: '0 auto 2rem',
          }} />
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>
            Travaillons <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>ensemble</em>
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.1rem',
            color: tokens.colors.gray500,
            marginBottom: '3rem',
          }}>
            Contactez-moi pour discuter de vos besoins
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            marginBottom: '3rem',
          }}>
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: tokens.colors.accent,
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
                color: tokens.colors.accent,
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
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
            padding: '1.25rem 3rem',
            background: tokens.colors.royal,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Envoyer un message
            <span>→</span>
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}

// Footer - Clean minimal
function Footer() {
  return (
    <footer style={{
      padding: '2rem 3rem',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: tokens.colors.royal,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', color: 'white' }}>É</span>
          </div>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.9rem',
            fontWeight: 500,
          }}>Éducatrice Spécialisée</span>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/5/legal" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
          }}>Mentions légales</a>
          <a href="/5/legal#privacy" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
          }}>Confidentialité</a>
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
export function ModernInstitution() {
  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.white,
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

export default ModernInstitution
