import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { tokens } from './tokens'

/**
 * SERVICE BLOCK COMPONENT
 * Individual service card with editorial styling
 */
interface ServiceBlockProps {
  number: string
  title: string
  description: string
  details: string[]
}

function ServiceBlock({ number, title, description, details }: ServiceBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative py-16 md:py-20 border-t transition-colors"
      style={{ 
        borderColor: `${tokens.colors.primaryLight}4d`,
        '--hover-bg': tokens.colors.background
      } as React.CSSProperties & { '--hover-bg'?: string }}
      onMouseEnter={(e) => (e.currentTarget.style.background = tokens.colors.background)}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-start">
		  {/* Number */}
		  <div className="md:col-span-2">
			<span 
			  className="text-6xl md:text-7xl font-bold transition-colors"
			  style={{ 
			    color: tokens.colors.primaryLight,
			    fontFamily: "'Bodoni Moda', serif" 
			  }}
			  onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.primary)}
			  onMouseLeave={(e) => (e.currentTarget.style.color = tokens.colors.primaryLight)}
			>
			  {number}
			</span>
		  </div>
          
          {/* Title and description */}
          <div className="md:col-span-5 py-4 md:py-6">
            <h3 
              className="text-2xl md:text-3xl mb-4"
              style={{ 
                color: tokens.colors.primary,
                fontFamily: "'Bodoni Moda', serif" 
              }}
            >
              {title}
            </h3>
            <p 
              className="leading-relaxed"
              style={{ 
                color: tokens.colors.textSecond,
                fontFamily: "'DM Sans', sans-serif" 
              }}
            >
              {description}
            </p>
          </div>
          
          {/* Details */}
          <div className="md:col-span-5 py-4 md:py-6">
            <ul className="space-y-3">
              {details.map((detail, i) => (
                <li 
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ 
                    color: tokens.colors.textSecond,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                >
                  <span 
                    className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0"
                    style={{ background: tokens.colors.primaryLight }}
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * SERVICES COMPONENT
 * Full services section with editorial layout
 */
export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services: ServiceBlockProps[] = [
    {
      number: '01',
      title: 'Accompagnement individuel',
      description: 'Un suivi personnalisé adapté aux besoins spécifiques de votre enfant, pour l\'aider à développer son plein potentiel.',
      details: [
        'Bilan initial et définition des objectifs',
        'Séances hebdomadaires de 60 à 90 minutes',
        'Activités adaptées au profil de l\'enfant',
        'Suivi régulier avec les parents'
      ]
    },
    {
      number: '02',
      title: 'Ateliers en petit groupe',
      description: 'Des moments de partage et d\'apprentissage collectif, favorisant la socialisation et la coopération entre enfants.',
      details: [
        'Groupes de 4 à 6 enfants maximum',
        'Activités artistiques et sensorielles',
        'Exploration de la nature',
        'Développement des compétences sociales'
      ]
    },
    {
      number: '03',
      title: 'Conseil aux familles',
      description: 'Un accompagnement pour les parents souhaitant mieux comprendre et soutenir le développement de leur enfant.',
      details: [
        'Entretiens personnalisés',
        'Aménagement de l\'environnement familial',
        'Stratégies éducatives adaptées',
        'Gestion des situations difficiles'
      ]
    },
    {
      number: '04',
      title: 'Formation professionnelle',
      description: 'Des formations pour les professionnels de l\'éducation souhaitant enrichir leurs pratiques pédagogiques.',
      details: [
        'Introduction aux pédagogies alternatives',
        'Observation et documentation',
        'Création d\'environnements préparés',
        'Accompagnement des enfants à besoins particuliers'
      ]
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section header */}
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 mb-16">
          <div className="flex items-center gap-6 mb-12">
            <span 
              className="text-xs uppercase tracking-[0.3em]"
              style={{ 
                color: tokens.colors.accent,
                fontFamily: "'DM Sans', sans-serif" 
              }}
            >
              02
            </span>
            <div className="flex-1 h-px" style={{ background: tokens.colors.backgroundAlt }} />
            <span 
              className="text-xs uppercase tracking-[0.3em]"
              style={{ 
                color: tokens.colors.textSecond,
                fontFamily: "'DM Sans', sans-serif" 
              }}
            >
              Services
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{ 
                color: tokens.colors.primary,
                fontFamily: "'Bodoni Moda', serif" 
              }}
            >
              Des services <em className="italic" style={{ color: tokens.colors.primaryLight }}>adaptés</em> à vos besoins
            </h2>
            <div className="flex items-end">
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: tokens.colors.textSecond,
                  fontFamily: "'DM Sans', sans-serif" 
                }}
              >
                Chaque accompagnement est pensé sur mesure, 
                en fonction du profil et des besoins de l'enfant.
              </p>
            </div>
          </div>
        </div>

        {/* Service blocks */}
        <div>
          {services.map((service, i) => (
            <ServiceBlock key={i} {...service} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
