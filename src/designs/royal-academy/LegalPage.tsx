import { motion } from 'motion/react'
import { tokens } from './tokens'

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
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.4rem', fontWeight: 600, color: tokens.colors.royal }}>APRIORIS</span>
        </a>
        <a href="/3" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.charcoalLight, textDecoration: 'none' }}>← Retour à l'accueil</a>
      </div>
    </header>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: '4rem' }}>
      <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.5rem', fontWeight: 500, color: tokens.colors.royal, marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: `2px solid ${tokens.colors.gold}`, display: 'inline-block' }}>{title}</h2>
      <div style={{ fontFamily: tokens.fonts.body, fontSize: '0.95rem', fontWeight: 300, color: tokens.colors.charcoalLight, lineHeight: 1.8 }}>{children}</div>
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>
      <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.15rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '0.75rem' }}>{title}</h3>
      {children}
    </div>
  )
}

export function RoyalAcademyLegal() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.cream, color: tokens.colors.charcoal, minHeight: '100vh' }}>
      <Navigation />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '140px 3rem 4rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '1rem' }}>
            Informations <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>légales</em>
          </h1>
          <p style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', color: tokens.colors.muted, marginBottom: '3rem' }}>Transparence et conformité réglementaire</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '4rem' }}>
            {[{ label: 'Mentions légales', href: '#mentions' }, { label: 'Confidentialité', href: '#privacy' }, { label: 'Cookies & RGPD', href: '#cookies' }].map((item) => (
              <a key={item.href} href={item.href} style={{ padding: '1.25rem', background: tokens.colors.creamDark, textDecoration: 'none', textAlign: 'center', border: `1px solid ${tokens.colors.border}` }}>
                <span style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', fontWeight: 500, color: tokens.colors.royal }}>{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <Section id="mentions" title="Mentions légales">
          <SubSection title="Éditeur du site">
            <p><strong>Raison sociale :</strong> Danae Azorin — APRIORIS<br /><strong>Forme juridique :</strong> Micro-entreprise<br /><strong>SIRET :</strong> XXX XXX XXX XXXXX<br /><strong>Adresse professionnelle :</strong> [Adresse]<br /><strong>Email :</strong> contact@aprioris.fr<br /><strong>Téléphone :</strong> [Numéro]</p>
          </SubSection>
          <SubSection title="Hébergement">
            <p>Le site est hébergé par [Nom de l'hébergeur]<br />[Adresse de l'hébergeur]<br />[Site web de l'hébergeur]</p>
          </SubSection>
          <SubSection title="Propriété intellectuelle">
            <p>L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, logos, marques, base de données, etc.) sont la propriété exclusive de l'éditeur. Toute reproduction, représentation, modification, publication, adaptation est interdite sans autorisation écrite préalable.</p>
          </SubSection>
        </Section>

        <Section id="privacy" title="Politique de confidentialité">
          <SubSection title="Collecte des données">
            <p>Dans le cadre de l'utilisation de ce site, nous sommes susceptibles de collecter les données personnelles suivantes :<br /><br />• Données transmises volontairement via le formulaire de contact (nom, prénom, email, téléphone, message)<br />• Données de navigation (adresse IP, type de navigateur, pages consultées)</p>
          </SubSection>
          <SubSection title="Finalités du traitement">
            <p>Vos données sont collectées pour :<br /><br />• Répondre à vos demandes de contact et d'information<br />• Vous proposer nos prestations d'ingénierie éducative et de formation<br />• Améliorer l'expérience utilisateur sur notre site<br />• Respecter nos obligations légales</p>
          </SubSection>
          <SubSection title="Durée de conservation">
            <p>Les données personnelles sont conservées pour une durée de 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.</p>
          </SubSection>
          <SubSection title="Vos droits">
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :<br /><br />• <strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées<br />• <strong>Droit de rectification :</strong> corriger vos données inexactes<br />• <strong>Droit à l'effacement :</strong> demander la suppression de vos données<br />• <strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré<br />• <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données<br /><br />Pour exercer ces droits : contact@aprioris.fr</p>
          </SubSection>
        </Section>

        <Section id="cookies" title="Cookies & RGPD">
          <SubSection title="Définition">
            <p>Un cookie est un petit fichier texte déposé sur votre terminal lors de la consultation de notre site.</p>
          </SubSection>
          <SubSection title="Types de cookies utilisés">
            <p><strong>Cookies strictement nécessaires</strong> — Indispensables au fonctionnement du site, ils ne peuvent être désactivés.</p>
            <p style={{ marginTop: '1rem' }}><strong>Cookies analytiques (si applicable)</strong> — Permettent de mesurer l'audience de manière anonyme pour améliorer le site.</p>
          </SubSection>
          <SubSection title="Gestion des cookies">
            <p>Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. La désactivation peut toutefois affecter l'expérience de navigation.</p>
          </SubSection>
        </Section>

        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.muted, marginTop: '2rem', paddingTop: '2rem', borderTop: `1px solid ${tokens.colors.border}` }}>Dernière mise à jour : Juin 2025</p>
      </main>

      <footer style={{ padding: '2rem 3rem', background: tokens.colors.charcoal, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>© 2025 APRIORIS — Danae Azorin</p>
        <a href="/3" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Retour à l'accueil</a>
      </footer>
    </div>
  )
}

export default RoyalAcademyLegal
