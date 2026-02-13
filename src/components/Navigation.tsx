import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { tokens } from './tokens'

/**
 * NAVIGATION COMPONENT
 * Static header with smooth scroll links
 */
export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ background: tokens.colors.whiteOpaque90 }}
      >
        <div 
          className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-5 flex items-center justify-between border-b"
          style={{ borderColor: `${tokens.colors.primaryLight}4d` }}
        >
          <a href="/" className="group">
            <span 
              className="text-3xl transition-colors"
              style={{ 
                color: tokens.colors.primary,
                fontFamily: "'Bodoni Moda', serif" 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.primaryLight)}
              onMouseLeave={(e) => (e.currentTarget.style.color = tokens.colors.primary)}
            >
              É<span className="italic">ducatrice</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-12">
            {['Manifeste', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-xs uppercase tracking-[0.2em] transition-colors group"
                style={{ 
                  color: tokens.colors.textSecond,
                  fontFamily: "'DM Sans', sans-serif" 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = tokens.colors.textSecond)}
              >
                {item}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: tokens.colors.accent }}
                />
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-px transition-transform ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}
              style={{ background: tokens.colors.text }}
            />
            <span 
              className={`w-6 h-px transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
              style={{ background: tokens.colors.text }}
            />
            <span 
              className={`w-6 h-px transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              style={{ background: tokens.colors.text }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center"
        style={{ background: tokens.colors.background }}
      >
        <div className="space-y-8 text-center">
          {['Manifeste', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-2xl transition-colors"
              style={{ 
                color: tokens.colors.primary,
                fontFamily: "'Bodoni Moda', serif" 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.primaryLight)}
              onMouseLeave={(e) => (e.currentTarget.style.color = tokens.colors.primary)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  )
}

/**
 * PROGRESS BAR COMPONENT
 * Shows scroll progress at top of page
 */
export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left"
      style={{ 
        background: tokens.colors.accent,
        width 
      }}
    />
  )
}

/**
 * GRID OVERLAY COMPONENT
 * Subtle editorial grid effect
 */
export function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${tokens.colors.text} 1px, transparent 1px),
            linear-gradient(to bottom, ${tokens.colors.text} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  )
}
