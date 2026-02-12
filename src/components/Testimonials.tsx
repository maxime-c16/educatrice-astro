import { motion, useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'

/**
 * TESTIMONIALS COMPONENT
 * Client testimonials in editorial card layout
 */
export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null)

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

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return

    const autoScrollTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change testimonial every 4 seconds

    return () => clearInterval(autoScrollTimer)
  }, [isPaused, testimonials.length])

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
    setIsPaused(true)

    // Clear existing timer if any
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current)
    }

    // Resume auto-scroll after 5 seconds
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 5000)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current)
      }
    }
  }, [])

  return (
    <section className="py-16 md:py-20 bg-[#fffaea]">
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

        <div className="space-y-8 lg:space-y-10">
          {/* Title */}
          <div>
            <h2 
              className="text-3xl md:text-4xl text-[#507061] leading-tight mb-4"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Ce que disent les <em className="italic text-[#9eb08b]">familles</em>
            </h2>
            <p 
              className="text-base md:text-lg text-[#6b6b6b] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              La confiance que m'accordent les familles est ma plus grande récompense. 
              Voici quelques témoignages de parents qui ont fait appel à mes services.
            </p>
          </div>

          {/* Separator */}
          <div className="h-px bg-[#e0ddd7]" />

          {/* Testimonial cards */}
          <div className="space-y-4">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                onClick={() => handleCardClick(i)}
                className={`relative p-6 cursor-pointer transition-all overflow-visible ${
                  activeIndex === i 
                    ? 'bg-white shadow-lg' 
                    : 'bg-transparent hover:bg-white/50'
                }`}
              >
                {/* Active indicator */}
                {activeIndex === i && (
                  <motion.div
                    layoutId="activeIndicator"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#9eb08b]"
                  />
                )}

                <blockquote 
                  className="text-base md:text-lg text-[#4a4a4a] leading-relaxed mb-3"
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
