import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

/**
 * MARQUEE TEXT COMPONENT
 * Infinitely scrolling text effect
 */
export function MarqueeText({ text, reverse = false }: { text: string; reverse?: boolean }) {
	return (
		<div className="overflow-hidden whitespace-nowrap py-6 border-y border-[#e0ddd7]">
			<motion.div
				animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
				transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
				className="inline-block"
			>
				{[...Array(10)].map((_, i) => (
					<span
						key={i}
						className="text-6xl md:text-8xl text-[#e0ddd7] mx-8"
						style={{ fontFamily: "'Bodoni Moda', serif" }}
					>
						{text}
					</span>
				))}
			</motion.div>
		</div>
	)
}

/**
 * HERO COMPONENT
 * Editorial-style hero section with large typography
 */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  
  const words = 'Accompagnement éducatif personnalisé'.split(' ')

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Editorial side text */}
      <div 
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translateX(50%)' }}
      >
        <span 
          className="text-xs uppercase tracking-[0.3em] text-[#b8b5ae]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Éducatrice Montessori · Formatrice
        </span>
      </div>

      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 lg:px-16 text-center"
      >
        {/* Issue number - editorial style */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs uppercase tracking-[0.4em] text-[#c2aa6a] mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          N° 01 — Printemps 2025
        </motion.p>

        {/* Main headline with staggered words */}
        <h1 className="mb-12">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.3em] text-5xl md:text-7xl lg:text-8xl text-[#507061] leading-[1.1]"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              {i === 1 ? <em className="italic text-[#9eb08b]">{word}</em> : word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-[#6b6b6b] leading-relaxed mb-12"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Un accompagnement sur mesure pour révéler le potentiel unique de chaque enfant, 
          dans le respect de son rythme et de sa personnalité.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-4 px-10 py-4 bg-[#9eb08b] text-white text-sm uppercase tracking-[0.2em] hover:bg-[#507061] transition-colors shadow-md"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Prendre rendez-vous
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Decorative element */}
      <div className="absolute right-8 md:right-16 bottom-24 hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-24 h-24 border border-[#c2aa6a] rounded-full flex items-center justify-center"
        >
          <span 
            className="text-xs uppercase tracking-[0.2em] text-[#c2aa6a]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Scroll
          </span>
        </motion.div>
      </div>

      {/* Bottom issue line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-8 md:left-16"
      >
        <span 
          className="text-xs text-[#b8b5ae] tracking-wider"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Vol. I · Accompagnement
        </span>
      </motion.div>
    </section>
  )
}
