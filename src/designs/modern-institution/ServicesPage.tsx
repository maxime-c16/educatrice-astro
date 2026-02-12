/**
 * MODERN INSTITUTION - Services Page — APRIORIS
 * Clean 3-column grid, geometric, professional
 */

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { tokens } from './tokens'

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
  )
}

function Navigation() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(26, 54, 93, 0.97)', backdropFilter: 'blur(12px)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/5" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '40px', background: tokens.colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>A</span>
          </div>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', fontWeight: 700, color: 'white' }}>APRIORIS</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/5" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>← Retour</a>
          <a href="#contact" style={{
            fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 600,
            color: tokens.colors.royal, textDecoration: 'none', padding: '0.75rem 1.5rem', background: tokens.colors.accent,
          }}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

function ServiceRow({ number, title, description, features }: {
  number: string; title: string; description: string; features: string[]
}) {
  return (
    <FadeInSection>
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 250px', gap: '3rem', padding: '3rem 0', borderBottom: `1px solid ${tokens.colors.grayLight}` }}>
        <span style={{ fontFamily: tokens.fonts.display, fontSize: '4rem', fontWeight: 300, color: tokens.colors.grayLight, lineHeight: 1 }}>{number}</span>
        <div>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 700, color: tokens.colors.charcoal, marginBottom: '1rem' }}>{title}</h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: tokens.colors.grayDark, lineHeight: 1.7, marginBottom: '2rem' }}>{description}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {features.map((feature) => (
              <div key={feature} style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.grayMid, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: tokens.colors.accent }}>✓</span>{feature}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: tokens.colors.gray100, padding: '1.5rem', alignSelf: 'start' }}>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: tokens.colors.grayMid, marginBottom: '0.5rem' }}>Tarification</p>
          <p style={{ fontFamily: tokens.fonts.display, fontSize: '1.25rem', fontWeight: 700, color: tokens.colors.charcoal, marginBottom: '0.5rem' }}>Sur devis</p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: tokens.colors.grayMid }}>Adapté à votre contexte</p>
        </div>
      </div>
    </FadeInSection>
  )
}

export function ModernInstitutionServices() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: 'white', color: tokens.colors.charcoal, minHeight: '100vh' }}>
      <Navigation />

      {/* Header */}
      <section style={{ padding: '120px 3rem 4rem', background: tokens.colors.royal, color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ width: '60px', height: '4px', background: tokens.colors.accent, marginBottom: '2rem' }} />
            <h1 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Nos <span style={{ color: tokens.colors.accent }}>prestations</span>
            </h1>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '550px' }}>
              Deux leviers structurants pour transformer les pratiques professionnelles inclusives — de la conception à l'évaluation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 3rem 4rem' }}>
        <ServiceRow number="01" title="Ingénierie éducative et inclusive"
          description="Conception et accompagnement structuré de dispositifs éducatifs inclusifs. Processus rigoureux allant du diagnostic à l'évaluation, en co-construction avec les acteurs de terrain."
          features={[
            'Diagnostic partagé — analyse besoins et contexte',
            'Co-conception collaborative des dispositifs',
            'Pilotage et coordination opérationnelle',
            'Déploiement terrain et mesure d\'impact',
            'Évaluation, suivi et ajustements continus',
          ]}
        />
        <ServiceRow number="02" title="Formation et professionnalisation"
          description="Formations expérientielles pour les professionnels. Pédagogie active qui part du vécu des participants pour transformer durablement les pratiques et les postures."
          features={[
            'Mise en situation et jeux de rôle',
            'Expression du vécu et déconstruction des représentations',
            'Apport théorique progressif et contextualisé',
            'Appropriation, engagement et transfert au quotidien',
          ]}
        />
      </main>

      {/* Modalités */}
      <section style={{ padding: '5rem 3rem', background: tokens.colors.gray100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ width: '40px', height: '3px', background: tokens.colors.accent, marginBottom: '1.5rem' }} />
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 700, color: tokens.colors.charcoal, marginBottom: '2.5rem' }}>Modalités d'intervention</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: tokens.colors.grayLight }}>
            {[
              { title: 'Co-construction', desc: 'Avec les acteurs de terrain et les pratiques existantes' },
              { title: 'Pédagogie active', desc: 'Mise en situation, analyse réflexive, conceptualisation' },
              { title: 'Adaptation', desc: 'Formats et rythmes modulables, ponctuels ou durables' },
              { title: 'Impact', desc: 'Suivi des pratiques, analyse quali/quanti, capitalisation' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '2rem', background: 'white' }}>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1rem', fontWeight: 700, color: tokens.colors.charcoal, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.grayMid, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section style={{ padding: '5rem 3rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ width: '40px', height: '3px', background: tokens.colors.accent, marginBottom: '1.5rem' }} />
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 700, color: tokens.colors.charcoal, marginBottom: '2.5rem' }}>Écosystème professionnel</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              'Professionnels de l\'éducation et de la formation',
              'Organismes de formation et structures éducatives',
              'Institutions, collectivités et acteurs publics',
              'Associations et acteurs de l\'inclusion',
              'Entreprises engagées dans la formation et l\'accessibilité',
              'Partenariats pédagogiques et experts métiers',
            ].map((partner) => (
              <div key={partner} style={{ padding: '1.25rem', background: tokens.colors.gray100, borderLeft: `3px solid ${tokens.colors.electric}` }}>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.grayDark }}>{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: '5rem 3rem', background: tokens.colors.royal, textAlign: 'center' }}>
        <FadeInSection>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Un projet à structurer ?</h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Contactez-nous pour un devis personnalisé</p>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 600,
            color: tokens.colors.royal, textDecoration: 'none', padding: '1rem 2.5rem', background: tokens.colors.accent,
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>contact@aprioris.fr →</a>
        </FadeInSection>
      </section>

      <footer style={{ padding: '2rem 3rem', background: tokens.colors.charcoal, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>© 2025 APRIORIS — Danae Azorin</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/5/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/5/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Confidentialité</a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 968px) {
          [style*="grid-template-columns: 80px 1fr 250px"] { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          [style*="grid-template-columns: 80px 1fr 250px"] > span:first-child { font-size: 2.5rem !important; }
          [style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          [style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default ModernInstitutionServices
