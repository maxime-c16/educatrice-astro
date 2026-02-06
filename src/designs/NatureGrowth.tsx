/**
 * NATURE GROWTH - Homepage Design
 * 
 * Organic, botanical aesthetic with earth tones
 * Flowing layouts with natural shapes and soft curves
 * Emphasizes growth, nurturing, and natural development
 */

import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { useRef, useState } from 'react'

// Design Tokens - Earth & Nature palette
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

// Animated wrapper
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Organic blob shape (CSS)
const blobStyle = (color: string, size: number, top: string, left: string, rotation: number = 0) => ({
  position: 'absolute' as const,
  width: `${size}px`,
  height: `${size}px`,
  top,
  left,
  background: color,
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  transform: `rotate(${rotation}deg)`,
  opacity: 0.15,
  filter: 'blur(40px)',
  zIndex: 0,
})

// Navigation
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
        {/* Logo with leaf icon */}
        <a href="/4" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${tokens.colors.forest} 0%, ${tokens.colors.forestLight} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <span style={{ fontSize: '1.5rem' }}>🌱</span>
          </div>
          <div>
            <span style={{
              fontFamily: tokens.fonts.display,
              fontSize: '1.5rem',
              fontWeight: 500,
              color: tokens.colors.forest,
              display: 'block',
              lineHeight: 1.1,
            }}>
              Éducatrice
            </span>
            <span style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: tokens.colors.terracotta,
            }}>
              Accompagner · Grandir · S'épanouir
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {[
            { label: 'Accueil', href: '#hero' },
            { label: 'Philosophie', href: '#manifeste' },
            { label: 'Réalisations', href: '#portfolio' },
            { label: 'Témoignages', href: '#testimonials' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.9rem',
                fontWeight: 400,
                color: tokens.colors.charcoalLight,
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="/4/services" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
            padding: '0.75rem 1.75rem',
            background: tokens.colors.forest,
            borderRadius: '30px',
            transition: 'transform 0.3s ease',
          }}>
            Nos services
          </a>
        </nav>
      </div>
    </header>
  )
}

// Hero - Organic, flowing layout
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        background: tokens.colors.cream,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
      }}
    >
      {/* Organic background blobs */}
      <div style={blobStyle(tokens.colors.sage, 600, '10%', '-10%', 20)} />
      <div style={blobStyle(tokens.colors.terracotta, 400, '60%', '70%', -15)} />
      <div style={blobStyle(tokens.colors.moss, 300, '70%', '20%', 45)} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '4rem 3rem',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Left - Content */}
        <motion.div style={{ y, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.terracotta,
              marginBottom: '1.5rem',
            }}>
              ✦ Éducatrice spécialisée
            </p>
            
            <h1 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: tokens.colors.charcoal,
              marginBottom: '2rem',
            }}>
              Accompagner
              <br />
              <span style={{ color: tokens.colors.forest }}>chaque enfant</span>
              <br />
              <em style={{ 
                fontStyle: 'italic', 
                color: tokens.colors.forestLight,
                display: 'inline-block',
                marginTop: '0.25rem',
              }}>
                vers son épanouissement
              </em>
            </h1>

            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '1.15rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: tokens.colors.charcoalLight,
              maxWidth: '520px',
              marginBottom: '2.5rem',
            }}>
              Comme une plante qui grandit à son rythme, chaque enfant a besoin 
              d'un environnement adapté pour s'épanouir. Je vous accompagne avec 
              patience et bienveillance.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'white',
                textDecoration: 'none',
                padding: '1rem 2rem',
                background: tokens.colors.forest,
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                Prendre contact
                <span>→</span>
              </a>
              <a href="#manifeste" style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.95rem',
                fontWeight: 500,
                color: tokens.colors.forest,
                textDecoration: 'none',
                padding: '1rem 2rem',
                border: `2px solid ${tokens.colors.forest}`,
                borderRadius: '30px',
              }}>
                Ma philosophie
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Image with organic frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ position: 'relative' }}
        >
          {/* Main image container with organic shape */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
            marginLeft: 'auto',
          }}>
            {/* Decorative ring */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              right: '-20px',
              bottom: '-20px',
              border: `2px solid ${tokens.colors.sage}`,
              borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
            }} />
            
            {/* Image placeholder */}
            <div style={{
              aspectRatio: '4/5',
              background: `linear-gradient(160deg, ${tokens.colors.forestLight} 0%, ${tokens.colors.forest} 100%)`,
              borderRadius: '50% 50% 40% 60% / 45% 55% 45% 55%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}>
              <span style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌿</span>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.6)',
                textAlign: 'center',
              }}>
                Photo<br />professionnelle
              </p>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '-15%',
                background: 'white',
                padding: '1.25rem 1.5rem',
                borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
              }}
            >
              <p style={{
                fontFamily: tokens.fonts.display,
                fontSize: '2rem',
                fontWeight: 500,
                color: tokens.colors.forest,
                lineHeight: 1,
              }}>15+</p>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.75rem',
                color: tokens.colors.muted,
                marginTop: '0.25rem',
              }}>ans d'expérience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Manifeste - Nature metaphor
function Manifeste() {
  return (
    <section id="manifeste" style={{
      padding: '8rem 3rem',
      background: tokens.colors.forest,
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>🌳</span>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.sage,
              marginBottom: '1rem',
            }}>
              Ma philosophie
            </p>
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.3,
            }}>
              Cultiver le potentiel
              <br />
              <em style={{ fontStyle: 'italic', color: tokens.colors.terracottaLight }}>de chaque enfant</em>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3rem',
          }}>
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1.15rem',
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.9)',
              }}>
                Comme un jardinier prend soin de ses plantes, je crois que chaque 
                enfant mérite une attention unique et adaptée à ses besoins. 
                Mon rôle est de créer les conditions favorables à son développement.
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '1.15rem',
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.9)',
              }}>
                Patience, observation et adaptation sont les clés d'un accompagnement 
                réussi. Ensemble, nous construisons un environnement où l'enfant 
                peut grandir en confiance et s'épanouir pleinement.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Values as growing steps */}
        <FadeInSection delay={0.2}>
          <div style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }}>
            {[
              { icon: '🌱', title: 'Écoute', desc: 'Comprendre les besoins' },
              { icon: '💧', title: 'Patience', desc: 'Respecter le rythme' },
              { icon: '☀️', title: 'Bienveillance', desc: 'Nourrir la confiance' },
              { icon: '🌸', title: 'Épanouissement', desc: 'Révéler le potentiel' },
            ].map((value, i) => (
              <div key={value.title} style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
              }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{value.icon}</span>
                <h3 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                }}>{value.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.6)',
                }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Services Preview - Organic cards
function ServicesPreview() {
  const services = [
    {
      icon: '🪴',
      title: 'Accompagnement individuel',
      desc: 'Un suivi personnalisé pour chaque enfant, adapté à son rythme et ses besoins spécifiques.',
    },
    {
      icon: '🌻',
      title: 'Ateliers en groupe',
      desc: 'Des séances collectives pour développer les compétences sociales dans un cadre bienveillant.',
    },
    {
      icon: '🏡',
      title: 'Soutien aux familles',
      desc: 'Accompagnement parental et conseils pour créer un environnement favorable à la maison.',
    },
  ]

  return (
    <section style={{
      padding: '8rem 3rem',
      background: tokens.colors.sand,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.terracotta,
              marginBottom: '1rem',
            }}>
              Mes services
            </p>
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 400,
              color: tokens.colors.charcoal,
            }}>
              Comment je peux <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>vous aider</em>
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
                background: tokens.colors.cream,
                padding: '2.5rem',
                borderRadius: '30px',
                height: '100%',
                transition: 'transform 0.3s ease',
              }}>
                <span style={{ 
                  fontSize: '3rem', 
                  display: 'block', 
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
                  fontWeight: 300,
                  color: tokens.colors.muted,
                  lineHeight: 1.7,
                }}>{service.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/4/services" style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.95rem',
              fontWeight: 500,
              color: tokens.colors.forest,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              border: `2px solid ${tokens.colors.forest}`,
              borderRadius: '30px',
            }}>
              Découvrir tous les services
              <span>→</span>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Portfolio - Flowing gallery
function Portfolio() {
  const projects = [
    {
      title: 'Course contre la faim',
      category: 'Solidarité',
      desc: '200 jeunes mobilisés pour une cause mondiale.',
      emoji: '🏃',
    },
    {
      title: 'Camps internationaux',
      category: 'Échanges',
      desc: 'Séjours éducatifs favorisant l\'ouverture culturelle.',
      emoji: '🏕️',
    },
    {
      title: 'Projet reforestation',
      category: 'Environnement',
      desc: 'Sensibilisation écologique par l\'action collective.',
      emoji: '🌲',
    },
  ]

  return (
    <section id="portfolio" style={{
      padding: '8rem 3rem',
      background: tokens.colors.cream,
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
              <p style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: tokens.colors.terracotta,
                marginBottom: '1rem',
              }}>
                Réalisations
              </p>
              <h2 style={{
                fontFamily: tokens.fonts.display,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 400,
                color: tokens.colors.charcoal,
              }}>
                Projets <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>qui ont fleuri</em>
              </h2>
            </div>
            <span style={{ fontSize: '3rem' }}>🌼</span>
          </div>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.15}>
              <div style={{
                background: i === 1 ? tokens.colors.forest : 'white',
                color: i === 1 ? 'white' : tokens.colors.charcoal,
                padding: '2rem',
                borderRadius: '25px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <span style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: i === 1 ? tokens.colors.sage : tokens.colors.terracotta,
                  marginBottom: '1rem',
                }}>
                  {project.category}
                </span>
                
                {/* Image placeholder */}
                <div style={{
                  aspectRatio: '16/10',
                  background: i === 1 ? 'rgba(255,255,255,0.1)' : tokens.colors.sand,
                  borderRadius: '15px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '3rem' }}>{project.emoji}</span>
                </div>

                <h3 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  marginBottom: '0.75rem',
                }}>{project.title}</h3>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: i === 1 ? 'rgba(255,255,255,0.7)' : tokens.colors.muted,
                }}>{project.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials - Warm, personal style
function Testimonials() {
  const testimonials = [
    {
      quote: "Une approche douce et efficace qui a permis à notre fils de retrouver confiance en lui. Merci infiniment.",
      author: "Famille Martin",
      rating: 5,
    },
    {
      quote: "Sa patience et sa bienveillance ont fait des miracles. Elle comprend vraiment les enfants.",
      author: "Sophie D.",
      rating: 5,
    },
    {
      quote: "Un accompagnement respectueux du rythme de chaque enfant. Professionnalisme et humanité.",
      author: "Centre éducatif Les Lilas",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" style={{
      padding: '8rem 3rem',
      background: tokens.colors.sand,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeInSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.colors.terracotta,
              marginBottom: '1rem',
            }}>
              Témoignages
            </p>
            <h2 style={{
              fontFamily: tokens.fonts.display,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 400,
              color: tokens.colors.charcoal,
            }}>
              Ils ont vu leurs enfants <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>s'épanouir</em>
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
                background: tokens.colors.cream,
                padding: '2rem',
                borderRadius: '25px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} style={{ color: tokens.colors.terracotta }}>★</span>
                  ))}
                </div>
                <blockquote style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: '1rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: tokens.colors.charcoalLight,
                  flex: 1,
                  margin: 0,
                }}>
                  "{t.quote}"
                </blockquote>
                <p style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: tokens.colors.forest,
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: `1px solid ${tokens.colors.border}`,
                }}>
                  {t.author}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* QR Code */}
        <FadeInSection delay={0.3}>
          <div style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2rem',
            background: tokens.colors.cream,
            borderRadius: '25px',
          }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.95rem',
              color: tokens.colors.charcoalLight,
              marginBottom: '1rem',
            }}>
              Partagez votre expérience ! Scannez pour laisser un avis Google
            </p>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'white',
              borderRadius: '15px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            }}>
              <span style={{ fontSize: '0.65rem', color: tokens.colors.muted, textAlign: 'center' }}>
                QR Code<br />Google
              </span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// Contact - Warm invitation
function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 3rem',
      background: tokens.colors.cream,
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <FadeInSection>
          <span style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'block' }}>💌</span>
          <h2 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>
            Faisons <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>connaissance</em>
          </h2>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1.1rem',
            fontWeight: 300,
            color: tokens.colors.muted,
            marginBottom: '3rem',
            maxWidth: '500px',
            margin: '0 auto 3rem',
          }}>
            Chaque parcours est unique. Échangeons pour découvrir 
            comment je peux accompagner votre enfant.
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
                fontSize: '0.75rem',
                fontWeight: 500,
                color: tokens.colors.terracotta,
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
                fontSize: '0.75rem',
                fontWeight: 500,
                color: tokens.colors.terracotta,
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
            fontSize: '1rem',
            fontWeight: 500,
            color: 'white',
            textDecoration: 'none',
            padding: '1.25rem 3rem',
            background: tokens.colors.forest,
            borderRadius: '35px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            M'envoyer un message
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
      background: tokens.colors.forest,
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
          <span style={{ fontSize: '1.5rem' }}>🌱</span>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.1rem',
            fontWeight: 500,
          }}>Éducatrice Spécialisée</span>
        </div>
        
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

        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.5)',
        }}>
          © 2025 — Grandir ensemble
        </p>
      </div>
    </footer>
  )
}

// Main Export
export function NatureGrowth() {
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

export default NatureGrowth
