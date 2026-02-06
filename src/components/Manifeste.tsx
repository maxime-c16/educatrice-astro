import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

/**
 * PULL QUOTE COMPONENT
 * Large editorial-style quote with decorative elements
 */
export function PullQuote({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative py-8 md:py-12 mt-12 md:mt-16"
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-[#c2aa6a]" />
      
      <blockquote className="max-w-3xl mx-auto px-8 md:px-12 lg:px-16 text-center">
        <span 
          className="text-3xl md:text-4xl text-[#9eb08b] leading-none inline mr-1"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          "
        </span>
        <p 
          className="text-lg md:text-xl lg:text-2xl text-[#507061] leading-relaxed italic inline"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          {text}
        </p>
        <span 
          className="text-3xl md:text-4xl text-[#9eb08b] leading-none inline ml-1"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          "
        </span>
      </blockquote>
    </motion.div>
  )
}

/**
 * MANIFESTE COMPONENT
 * Editorial-style manifesto section
 */
export function Manifeste() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="manifeste" className="py-24 md:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16"
      >
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <span 
            className="text-xs uppercase tracking-[0.3em] text-[#c2aa6a]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            01
          </span>
          <div className="flex-1 h-px bg-[#e0ddd7]" />
          <span 
            className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Manifeste
          </span>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-[#507061] leading-tight mb-8"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Chaque enfant est <em className="italic text-[#9eb08b]">unique</em>
            </h2>
          </div>
          <div className="space-y-6">
            <p 
              className="text-lg text-[#4a4a4a] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Forte de plus de dix années d'expérience auprès d'enfants aux besoins variés, 
              je propose un accompagnement éducatif fondé sur l'observation, l'écoute et le respect 
              du rythme de chacun.
            </p>
            <p 
              className="text-lg text-[#4a4a4a] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Ma démarche s'inspire des pédagogies alternatives — Montessori, Reggio Emilia, 
              approche par la nature — pour créer un environnement propice à l'épanouissement 
              et à la découverte.
            </p>
            <p 
              className="text-lg text-[#4a4a4a] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Je crois profondément que chaque enfant porte en lui un potentiel extraordinaire. 
              Mon rôle est de l'accompagner dans sa révélation, en cultivant sa confiance, 
              sa curiosité et son autonomie.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Pull quote */}
      <PullQuote text="L'enfant n'est pas un vase que l'on remplit, mais une source que l'on laisse jaillir." />
    </section>
  )
}
