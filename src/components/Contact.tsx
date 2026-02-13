import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { tokens } from './tokens'

/**
 * CONTACT COMPONENT
 * Contact form with editorial styling
 */
export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formState)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
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
            className="text-xs uppercase tracking-[0.3em]"
            style={{ 
              color: tokens.colors.accent,
              fontFamily: "'DM Sans', sans-serif" 
            }}
          >
            05
          </span>
          <div className="flex-1 h-px" style={{ background: tokens.colors.backgroundAlt }} />
          <span 
            className="text-xs uppercase tracking-[0.3em]"
            style={{ 
              color: tokens.colors.textSecond,
              fontFamily: "'DM Sans', sans-serif" 
            }}
          >
            Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
              style={{ 
                color: tokens.colors.primary,
                fontFamily: "'Bodoni Moda', serif" 
              }}
            >
              Prenons <em className="italic" style={{ color: tokens.colors.primaryLight }}>contact</em>
            </h2>
            <p 
              className="text-lg leading-relaxed mb-12"
              style={{ 
                color: tokens.colors.textSecond,
                fontFamily: "'DM Sans', sans-serif" 
              }}
            >
              Vous souhaitez en savoir plus sur mes services ou prendre rendez-vous ? 
              N'hésitez pas à me contacter. Je vous répondrai dans les meilleurs délais.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <span 
                  className="text-xs uppercase tracking-[0.2em] block mb-2"
                  style={{ 
                    color: tokens.colors.accent,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                >
                  Email
                </span>
                <a 
                  href="mailto:contact@educatrice.fr"
                  className="transition-colors"
                  style={{ 
                    color: tokens.colors.text,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = tokens.colors.text)}
                >
                  contact@educatrice.fr
                </a>
              </div>
              <div>
                <span 
                  className="text-xs uppercase tracking-[0.2em] block mb-2"
                  style={{ 
                    color: tokens.colors.accent,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                >
                  Téléphone
                </span>
                <a 
                  href="tel:+33612345678"
                  className="transition-colors"
                  style={{ 
                    color: tokens.colors.text,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = tokens.colors.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = tokens.colors.text)}
                >
                  +33 6 12 34 56 78
                </a>
              </div>
              <div>
                <span 
                  className="text-xs uppercase tracking-[0.2em] block mb-2"
                  style={{ 
                    color: tokens.colors.accent,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                >
                  Localisation
                </span>
                <span 
                  style={{ 
                    color: tokens.colors.text,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                >
                  Région parisienne · Déplacements possibles
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="text-xs uppercase tracking-[0.2em] block mb-3"
                    style={{ 
                      color: tokens.colors.textSecond,
                      fontFamily: "'DM Sans', sans-serif" 
                    }}
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border-b outline-none transition-colors"
                    style={{ 
                      borderColor: `${tokens.colors.primaryLight}66`,
                      color: tokens.colors.text,
                      fontFamily: "'DM Sans', sans-serif" 
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = tokens.colors.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = `${tokens.colors.primaryLight}66`)}
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.2em] block mb-3"
                    style={{ 
                      color: tokens.colors.textSecond,
                      fontFamily: "'DM Sans', sans-serif" 
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border-b outline-none transition-colors"
                    style={{ 
                      borderColor: `${tokens.colors.primaryLight}66`,
                      color: tokens.colors.text,
                      fontFamily: "'DM Sans', sans-serif" 
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = tokens.colors.primary)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = `${tokens.colors.primaryLight}66`)}
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject"
                  className="text-xs uppercase tracking-[0.2em] block mb-3"
                  style={{ 
                    color: tokens.colors.textSecond,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                >
                  Sujet
                </label>
                <select
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border-b outline-none transition-colors cursor-pointer"
                  style={{ 
                    borderColor: `${tokens.colors.primaryLight}66`,
                    color: formState.subject ? tokens.colors.text : tokens.colors.textSecond,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = tokens.colors.primary)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = `${tokens.colors.primaryLight}66`)}
                  required
                >
                  <option value="">Choisir un sujet</option>
                  <option value="individual">Accompagnement individuel</option>
                  <option value="workshop">Ateliers en groupe</option>
                  <option value="family">Conseil aux familles</option>
                  <option value="training">Formation professionnelle</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.2em] block mb-3"
                  style={{ 
                    color: tokens.colors.textSecond,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border outline-none transition-colors resize-none"
                  style={{ 
                    borderColor: `${tokens.colors.primaryLight}66`,
                    color: tokens.colors.text,
                    fontFamily: "'DM Sans', sans-serif" 
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = tokens.colors.primary)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = `${tokens.colors.primaryLight}66`)}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-white text-sm uppercase tracking-[0.2em] transition-colors shadow-md"
                style={{ 
                  background: tokens.colors.primaryLight,
                  fontFamily: "'DM Sans', sans-serif" 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = tokens.colors.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.background = tokens.colors.primaryLight)}
              >
                Envoyer le message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
