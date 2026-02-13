import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

/**
 * MARQUEE TEXT COMPONENT
 * Infinitely scrolling text effect
 */
export function MarqueeText({ text, reverse = false }: { text: string; reverse?: boolean }) {
	return (
		<div 
			className="overflow-hidden whitespace-nowrap py-6 border-y"
			style={{ borderColor: tokens.colors.backgroundAlt }}
		>
			<motion.div
				animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
				transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
				className="inline-block"
			>
				{[...Array(10)].map((_, i) => (
					<span
						key={i}
						className="text-6xl md:text-8xl mx-8"
						style={{ 
							color: tokens.colors.backgroundAlt,
							fontFamily: "'Bodoni Moda', serif" 
						}}
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
          className="text-xs uppercase tracking-[0.3em]"
          style={{ 
            color: tokens.colors.textSecond,
            fontFamily: "'DM Sans', sans-serif" 
          }}
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
          className="text-xs uppercase tracking-[0.4em] mb-8"
          style={{ 
            color: tokens.colors.accent,
            fontFamily: "'DM Sans', sans-serif" 
          }}
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
              className="inline-block mr-[0.3em] text-5xl md:text-7xl lg:text-8xl leading-[1.1]"
              style={{ 
                color: tokens.colors.primary,
                fontFamily: "'Bodoni Moda', serif" 
              }}
            >
              {i === 1 ? <em className="italic" style={{ color: tokens.colors.primaryLight }}>{word}</em> : word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl mx-auto text-lg md:text-xl leading-relaxed mb-12"
          style={{ 
            color: tokens.colors.textSecond,
            fontFamily: "'DM Sans', sans-serif" 
          }}
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
          className="inline-flex items-center gap-4 px-10 py-4 text-white text-sm uppercase tracking-[0.2em] transition-colors shadow-md"
          style={{ 
            background: tokens.colors.primaryLight,
            fontFamily: "'DM Sans', sans-serif" 
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = tokens.colors.primary)}
          onMouseLeave={(e) => (e.currentTarget.style.background = tokens.colors.primaryLight)}
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
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{ border: `1px solid ${tokens.colors.accent}` }}
        >
          <span 
            className="text-xs uppercase tracking-[0.2em]"
            style={{ 
              color: tokens.colors.accent,
              fontFamily: "'DM Sans', sans-serif" 
            }}
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
          className="text-xs tracking-wider"
          style={{ 
            color: tokens.colors.textSecond,
            fontFamily: "'DM Sans', sans-serif" 
          }}
        >
          Vol. I · Accompagnement
        </span>
      </motion.div>
    </section>
  )
}
