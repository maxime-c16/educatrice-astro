import { motion } from 'motion/react'
import { tokens } from './tokens'

/**
 * FOOTER COMPONENT
 * Editorial-style footer with links and legal
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="py-16 md:py-20 border-t"
      style={{ 
        borderColor: `${tokens.colors.primaryLight}4d`,
        background: tokens.colors.primary
      }}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo and tagline */}
          <div>
            <a href="/" className="group inline-block mb-6">
              <span 
                className="text-3xl transition-colors"
                style={{ 
                  color: tokens.colors.background,
                  fontFamily: "'Bodoni Moda', serif" 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = tokens.colors.background)}
              >
                É<span className="italic">ducatrice</span>
              </span>
            </a>
            <p 
              className="leading-relaxed"
              style={{ 
                color: tokens.colors.whiteOpaque80,
                fontFamily: "'DM Sans', sans-serif" 
              }}
            >
              Accompagnement éducatif personnalisé pour révéler le potentiel de chaque enfant.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span 
              className="text-xs uppercase tracking-[0.2em] block mb-6"
              style={{ 
                color: tokens.colors.accent,
                fontFamily: "'DM Sans', sans-serif" 
              }}
            >
              Navigation
            </span>
            <nav className="space-y-3">
              {['Manifeste', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block transition-colors"
                  style={{ 
                    color: `${tokens.colors.background}b3`,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = `${tokens.colors.background}b3`)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <span 
              className="text-xs uppercase tracking-[0.2em] block mb-6"
              style={{ 
                color: tokens.colors.accent,
                fontFamily: "'DM Sans', sans-serif" 
              }}
            >
              Informations
            </span>
            <nav className="space-y-3">
              <a
                href="/mentions-legales"
                className="block transition-colors"
                style={{ 
                  color: `${tokens.colors.background}b3`,
                  fontFamily: "'DM Sans', sans-serif" 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = `${tokens.colors.background}b3`)}
              >
                Mentions légales
              </a>
              <a
                href="/confidentialite"
                className="block transition-colors"
                style={{ 
                  color: `${tokens.colors.background}b3`,
                  fontFamily: "'DM Sans', sans-serif" 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = `${tokens.colors.background}b3`)}
              >
                Politique de confidentialité
              </a>
              <a
                href="/cgv"
                className="block transition-colors"
                style={{ 
                  color: `${tokens.colors.background}b3`,
                  fontFamily: "'DM Sans', sans-serif" 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = `${tokens.colors.background}b3`)}
              >
                CGV
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: `${tokens.colors.background}33` }}
        >
          <p 
            className="text-sm"
            style={{ 
              color: `${tokens.colors.background}99`,
              fontFamily: "'DM Sans', sans-serif" 
            }}
          >
            © {currentYear} Éducatrice. Tous droits réservés.
          </p>
          <p 
            className="text-sm"
            style={{ 
              color: `${tokens.colors.background}99`,
              fontFamily: "'DM Sans', sans-serif" 
            }}
          >
            Micro-entreprise · SIRET: XXX XXX XXX XXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
