import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'

/**
 * TESTIMONIALS COMPONENT
 * Client testimonials in editorial card layout
 */
export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote: "Un accompagnement exceptionnel qui a transformé notre quotidien. Notre fils a retrouvé confiance en lui et le plaisir d'apprendre.",
      author: "Marie-Claire D.",
      role: "Maman de Lucas, 6 ans"
    },
    {
      quote: "Les ateliers en petit groupe ont été une révélation pour Emma. Elle y a trouvé un espace d'expression et de créativité unique.",
      author: "Sophie B.",
      role: "Maman d'Emma, 4 ans"
    },
    {
      quote: "Le conseil aux familles nous a permis de mieux comprendre les besoins de notre enfant et d'adapter notre approche éducative.",
      author: "Pierre M.",
      role: "Papa de Théo, 7 ans"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-[#fffaea]">
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
            04
          </span>
          <div className="flex-1 h-px bg-[#e0ddd7]" />
          <span 
            className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Témoignages
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Title */}
          <div>
            <h2 
              className="text-4xl md:text-5xl text-[#507061] leading-tight mb-8"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Ce que disent les <em className="italic text-[#9eb08b]">familles</em>
            </h2>
            <p 
              className="text-lg text-[#6b6b6b] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              La confiance que m'accordent les familles est ma plus grande récompense. 
              Voici quelques témoignages de parents qui ont fait appel à mes services.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="space-y-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                onClick={() => setActiveIndex(i)}
                className={`relative p-8 cursor-pointer transition-all ${
                  activeIndex === i 
                    ? 'bg-white shadow-lg' 
                    : 'bg-transparent hover:bg-white/50'
                }`}
              >
                {/* Active indicator */}
                {activeIndex === i && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#9eb08b]"
                  />
                )}

                <blockquote 
                  className="text-lg text-[#4a4a4a] leading-relaxed mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <cite 
                    className="not-italic text-[#507061] font-medium block"
                    style={{ fontFamily: "'Bodoni Moda', serif" }}
                  >
                    {testimonial.author}
                  </cite>
                  <span 
                    className="text-sm text-[#6b6b6b]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.role}
                  </span>
                </footer>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
