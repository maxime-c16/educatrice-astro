import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'

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
            className="text-xs uppercase tracking-[0.3em] text-[#c2aa6a]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            05
          </span>
          <div className="flex-1 h-px bg-[#e0ddd7]" />
          <span 
            className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-[#507061] leading-tight mb-8"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              Prenons <em className="italic text-[#9eb08b]">contact</em>
            </h2>
            <p 
              className="text-lg text-[#6b6b6b] leading-relaxed mb-12"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Vous souhaitez en savoir plus sur mes services ou prendre rendez-vous ? 
              N'hésitez pas à me contacter. Je vous répondrai dans les meilleurs délais.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <span 
                  className="text-xs uppercase tracking-[0.2em] text-[#c2aa6a] block mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Email
                </span>
                <a 
                  href="mailto:contact@educatrice.fr"
                  className="text-[#1a1a1a] hover:text-[#507061] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  contact@educatrice.fr
                </a>
              </div>
              <div>
                <span 
                  className="text-xs uppercase tracking-[0.2em] text-[#c2aa6a] block mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Téléphone
                </span>
                <a 
                  href="tel:+33612345678"
                  className="text-[#1a1a1a] hover:text-[#507061] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  +33 6 12 34 56 78
                </a>
              </div>
              <div>
                <span 
                  className="text-xs uppercase tracking-[0.2em] text-[#c2aa6a] block mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Localisation
                </span>
                <span 
                  className="text-[#1a1a1a]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
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
                    className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] block mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border-b border-[#9eb08b]/40 
                             focus:border-[#507061] outline-none transition-colors text-[#1a1410]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] block mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border-b border-[#9eb08b]/40 
                             focus:border-[#507061] outline-none transition-colors text-[#1a1410]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject"
                  className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] block mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Sujet
                </label>
                <select
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#9eb08b]/40 
                           focus:border-[#507061] outline-none transition-colors text-[#1a1410] cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
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
                  className="text-xs uppercase tracking-[0.2em] text-[#6b6b6b] block mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-[#9eb08b]/40 
                           focus:border-[#507061] outline-none transition-colors text-[#1a1410] resize-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#9eb08b] text-white text-sm uppercase tracking-[0.2em] 
                         hover:bg-[#507061] transition-colors shadow-md"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
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
