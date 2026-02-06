import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'

/**
 * PORTFOLIO COMPONENT
 * Image gallery with editorial layout
 */
export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Atelier Montessori',
      category: 'Accompagnement individuel',
      year: '2024'
    },
    {
      title: 'Éveil sensoriel',
      category: 'Atelier collectif',
      year: '2024'
    },
    {
      title: 'Exploration nature',
      category: 'Sortie pédagogique',
      year: '2024'
    },
    {
      title: 'Art et expression',
      category: 'Atelier créatif',
      year: '2023'
    }
  ]

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#507061]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16"
      >
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <span 
            className="text-xs uppercase tracking-[0.3em] text-[#c2aa6a]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            03
          </span>
          <div className="flex-1 h-px bg-[#9eb08b]/40" />
          <span 
            className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Portfolio
          </span>
        </div>

        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-[#fffaea] leading-tight mb-16"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          Moments <em className="italic text-[#c2aa6a]">capturés</em>
        </h2>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[4/3] overflow-hidden bg-[#3d5a4c] cursor-pointer"
            >
              {/* Placeholder background */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#9eb08b]/30 to-[#c2aa6a]/30 
                           group-hover:scale-105 transition-transform duration-700"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#507061]/90 to-transparent">
                <span 
                  className="text-xs uppercase tracking-[0.2em] text-[#c2aa6a] mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.category}
                </span>
                <h3 
                  className="text-xl md:text-2xl text-white"
                  style={{ fontFamily: "'Bodoni Moda', serif" }}
                >
                  {project.title}
                </h3>
                <span 
                  className="text-sm text-[#6b6b6b] mt-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.year}
                </span>
              </div>

              {/* Hover indicator */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: hoveredIndex === i ? 1 : 0, 
                  opacity: hoveredIndex === i ? 1 : 0 
                }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/30 
                           flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
