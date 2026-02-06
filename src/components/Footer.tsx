import { motion } from 'motion/react'

/**
 * FOOTER COMPONENT
 * Editorial-style footer with links and legal
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 md:py-20 border-t border-[#9eb08b]/30 bg-[#507061]">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo and tagline */}
          <div>
            <a href="/" className="group inline-block mb-6">
              <span 
                className="text-3xl text-[#fffaea] group-hover:text-[#c2aa6a] transition-colors"
                style={{ fontFamily: "'Bodoni Moda', serif" }}
              >
                É<span className="italic">ducatrice</span>
              </span>
            </a>
            <p 
              className="text-[#fffaea]/80 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Accompagnement éducatif personnalisé pour révéler le potentiel de chaque enfant.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span 
              className="text-xs uppercase tracking-[0.2em] text-[#c2aa6a] block mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Navigation
            </span>
            <nav className="space-y-3">
              {['Manifeste', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-[#fffaea]/70 hover:text-[#c2aa6a] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <span 
              className="text-xs uppercase tracking-[0.2em] text-[#c2aa6a] block mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Informations
            </span>
            <nav className="space-y-3">
              <a
                href="/mentions-legales"
                className="block text-[#fffaea]/70 hover:text-[#c2aa6a] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Mentions légales
              </a>
              <a
                href="/confidentialite"
                className="block text-[#fffaea]/70 hover:text-[#c2aa6a] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Politique de confidentialité
              </a>
              <a
                href="/cgv"
                className="block text-[#fffaea]/70 hover:text-[#c2aa6a] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                CGV
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#fffaea]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-sm text-[#fffaea]/60"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {currentYear} Éducatrice. Tous droits réservés.
          </p>
          <p 
            className="text-sm text-[#fffaea]/60"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Micro-entreprise · SIRET: XXX XXX XXX XXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
