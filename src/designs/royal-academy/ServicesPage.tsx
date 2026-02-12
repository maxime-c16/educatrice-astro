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
      background: 'rgba(250, 249, 247, 0.97)', backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${tokens.colors.border}`,
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.25rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/3" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: `linear-gradient(135deg, ${tokens.colors.royal} 0%, ${tokens.colors.royalLight} 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>A</span>
          </div>
          <div>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.4rem', fontWeight: 600, color: tokens.colors.royal, display: 'block', lineHeight: 1.1 }}>APRIORIS</span>
            <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: tokens.colors.gold }}>Ingénierie éducative</span>
          </div>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/3" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.charcoalLight, textDecoration: 'none' }}>← Retour à l'accueil</a>
          <a href="#contact" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 500, color: 'white', textDecoration: 'none', padding: '0.75rem 1.5rem', background: tokens.colors.royal }}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

function ServiceBlock({ number, title, subtitle, description, details, reversed }: {
  number: string; title: string; subtitle: string; description: string; details: string[]; reversed?: boolean
}) {
  return (
    <FadeInSection>
      <div style={{
        display: 'grid', gridTemplateColumns: reversed ? '1fr 2fr' : '2fr 1fr',
        gap: '4rem', padding: '4rem 0', borderBottom: `1px solid ${tokens.colors.border}`,
      }}>
        <div style={{ order: reversed ? 2 : 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '3rem', fontWeight: 300, color: tokens.colors.royal, lineHeight: 1 }}>{number}</span>
            <div>
              <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 500, color: tokens.colors.charcoal, lineHeight: 1.2 }}>{title}</h2>
              <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.gold }}>{subtitle}</p>
            </div>
          </div>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: tokens.colors.charcoalLight, marginBottom: '2rem' }}>{description}</p>
          <div style={{ background: tokens.colors.creamDark, padding: '1.5rem', marginBottom: '1.5rem' }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>Processus</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {details.map((detail) => (
                <li key={detail} style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.charcoalLight, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: tokens.colors.royal }}>◆</span>{detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{
          order: reversed ? 1 : 2, background: tokens.colors.navy, padding: '2rem', color: 'white', alignSelf: 'start',
        }}>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: tokens.colors.goldLight, marginBottom: '1.5rem' }}>Tarification</p>
          <p style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Sur devis</p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
            Chaque dispositif est conçu sur mesure. Un devis détaillé est établi après analyse de vos besoins et de votre contexte.
          </p>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', fontStyle: 'italic' }}>
            * Interventions ponctuelles ou dans la durée
          </p>
        </div>
      </div>
    </FadeInSection>
  )
}

export function RoyalAcademyServices() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.cream, color: tokens.colors.charcoal, minHeight: '100vh' }}>
      <Navigation />

      {/* Header */}
      <section style={{ paddingTop: '140px', paddingBottom: '4rem', padding: '140px 3rem 4rem', background: tokens.colors.navy, color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '1rem' }}>Prestations</p>
            <h1 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 500, lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Deux leviers <em style={{ fontStyle: 'italic', color: tokens.colors.goldLight }}>complémentaires</em>
              <br />pour transformer les pratiques
            </h1>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '1.1rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)', maxWidth: '600px' }}>
              De l'ingénierie de dispositifs à la formation des équipes, une offre pensée pour l'opérationnalité et la durabilité des pratiques inclusives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 3rem 4rem' }}>
        <ServiceBlock
          number="01" title="Ingénierie éducative et inclusive" subtitle="Conception de dispositifs"
          description="De l'analyse des besoins à l'évaluation, un processus structuré pour concevoir des dispositifs éducatifs et inclusifs adaptés aux réalités de terrain. Co-construction avec les professionnels pour garantir l'appropriation."
          details={[
            'Diagnostic partagé — analyse des besoins et du contexte',
            'Co-conception — construction collaborative avec les acteurs',
            'Pilotage — coordination et suivi opérationnel',
            'Déploiement et mesure d\'impact — mise en œuvre terrain',
            'Évaluation, suivi et ajustements — pérennisation',
          ]}
        />
        <ServiceBlock
          number="02" title="Formation et professionnalisation" subtitle="Pédagogie expérientielle"
          description="Des formations qui partent du vécu des participants pour transformer durablement les pratiques. Une pédagogie active où l'on apprend en faisant, en réfléchissant, puis en conceptualisant."
          details={[
            'Mise en situation et jeux de rôle — apprentissage par l\'expérience',
            'Expression du vécu — analyse et déconstruction des représentations',
            'Apport théorique progressif — contextualisation théorie/pratique',
            'Appropriation et transfert — engagement et intégration au quotidien',
          ]}
          reversed
        />
      </main>

      {/* Modalités */}
      <section style={{ padding: '5rem 3rem', background: tokens.colors.creamDark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '2rem' }}>Modalités d'intervention</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: tokens.colors.border }}>
            {[
              { title: 'Co-construction', desc: 'Dispositifs construits avec les acteurs de terrain et les pratiques existantes.' },
              { title: 'Pédagogie active', desc: 'Mise en situation, analyse réflexive, conceptualisation progressive.' },
              { title: 'Adaptation', desc: 'Ajustement aux contextes, publics et contraintes. Formats modulables.' },
              { title: 'Impact & durabilité', desc: 'Suivi des pratiques, analyse quali/quanti, capitalisation.' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '2rem', background: tokens.colors.cream }}>
                <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.1rem', fontWeight: 500, color: tokens.colors.royal, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 300, color: tokens.colors.muted, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section style={{ padding: '5rem 3rem', background: tokens.colors.cream }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: tokens.colors.gold, marginBottom: '2rem' }}>Écosystème professionnel</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              'Professionnels de l\'éducation et de la formation',
              'Organismes de formation et structures éducatives',
              'Institutions, collectivités et acteurs publics',
              'Associations et acteurs de l\'inclusion',
              'Entreprises engagées dans la formation et l\'accessibilité',
              'Partenariats pédagogiques et experts métiers',
            ].map((partner) => (
              <div key={partner} style={{ padding: '1.25rem', background: tokens.colors.creamDark, border: `1px solid ${tokens.colors.border}` }}>
                <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.charcoalLight }}>{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: '5rem 3rem', background: tokens.colors.navy, textAlign: 'center', color: 'white' }}>
        <FadeInSection>
          <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '2rem', fontWeight: 500, marginBottom: '1rem' }}>Un projet à co-construire ?</h2>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Contactez-nous pour un échange personnalisé</p>
          <a href="mailto:contact@aprioris.fr" style={{
            fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 500, color: 'white',
            textDecoration: 'none', padding: '1rem 2.5rem', background: tokens.colors.royal,
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>Me contacter <span>→</span></a>
        </FadeInSection>
      </section>

      <footer style={{ padding: '2rem 3rem', background: tokens.colors.charcoal, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>© 2025 APRIORIS — Danae Azorin</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/3/legal" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/3/legal#privacy" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Confidentialité</a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 968px) {
          [style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          [style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default RoyalAcademyServices
