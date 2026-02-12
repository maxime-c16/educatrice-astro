import { motion } from 'motion/react'
import { tokens } from './tokens'

function Navigation() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(249, 246, 240, 0.95)', backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${tokens.colors.border}`,
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/2" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 500, color: tokens.colors.olive }}>APRIORIS</span>
        </a>
        <a href="/2" style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.charcoalLight, textDecoration: 'none' }}>← Retour à l'accueil</a>
      </div>
    </header>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: '4rem' }}>
      <h2 style={{ fontFamily: tokens.fonts.display, fontSize: '1.75rem', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: `1px solid ${tokens.colors.border}` }}>{title}</h2>
      <div style={{ fontFamily: tokens.fonts.body, fontSize: '1rem', fontWeight: 300, color: tokens.colors.charcoalLight, lineHeight: 1.8 }}>{children}</div>
    </section>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontFamily: tokens.fonts.display, fontSize: '1.2rem', fontWeight: 500, color: tokens.colors.charcoal, marginTop: '1.5rem', marginBottom: '0.75rem' }}>{children}</h3>
}

export function OliveEleganceLegal() {
  return (
    <div style={{ fontFamily: tokens.fonts.body, background: tokens.colors.cream, color: tokens.colors.charcoal, minHeight: '100vh' }}>
      <Navigation />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 3rem 4rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: tokens.colors.charcoal, marginBottom: '2rem' }}>
            Informations <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>légales</em>
          </h1>
          <nav style={{ background: tokens.colors.creamDark, padding: '1.5rem', marginBottom: '3rem', border: `1px solid ${tokens.colors.border}` }}>
            <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.75rem', fontWeight: 600, color: tokens.colors.gold, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Sommaire</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[{ label: 'Mentions légales', href: '#mentions' }, { label: 'Politique de confidentialité', href: '#privacy' }, { label: 'Cookies & RGPD', href: '#cookies' }].map((item) => (
                <li key={item.href}><a href={item.href} style={{ fontFamily: tokens.fonts.body, fontSize: '0.9rem', color: tokens.colors.olive, textDecoration: 'none' }}>→ {item.label}</a></li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <Section id="mentions" title="Mentions légales">
          <SubTitle>Éditeur du site</SubTitle>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Nom :</strong> Danae Azorin — APRIORIS<br />
            <strong>Statut :</strong> Micro-entreprise<br />
            <strong>SIRET :</strong> XXX XXX XXX XXXXX<br />
            <strong>Adresse :</strong> [Adresse professionnelle]<br />
            <strong>Email :</strong> contact@aprioris.fr<br />
            <strong>Téléphone :</strong> [Numéro de téléphone]
          </p>
          <SubTitle>Hébergement</SubTitle>
          <p style={{ marginBottom: '1rem' }}>Ce site est hébergé par [Nom de l'hébergeur]<br /><strong>Adresse :</strong> [Adresse de l'hébergeur]<br /><strong>Site web :</strong> [URL de l'hébergeur]</p>
          <SubTitle>Propriété intellectuelle</SubTitle>
          <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
        </Section>

        <Section id="privacy" title="Politique de confidentialité">
          <SubTitle>Collecte des données</SubTitle>
          <p style={{ marginBottom: '1rem' }}>Les données personnelles collectées sur ce site sont uniquement celles que vous nous transmettez volontairement via le formulaire de contact : nom, adresse email, numéro de téléphone (facultatif), et le contenu de votre message.</p>
          <SubTitle>Utilisation des données</SubTitle>
          <p style={{ marginBottom: '1rem' }}>Vos données sont utilisées exclusivement pour :<br />• Répondre à vos demandes de contact<br />• Vous fournir des informations sur nos prestations<br />• Gérer la relation professionnelle le cas échéant</p>
          <SubTitle>Conservation des données</SubTitle>
          <p style={{ marginBottom: '1rem' }}>Vos données personnelles sont conservées pendant une durée de 3 ans à compter de votre dernier contact avec nous, conformément à la réglementation en vigueur.</p>
          <SubTitle>Vos droits</SubTitle>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : contact@aprioris.fr</p>
        </Section>

        <Section id="cookies" title="Cookies & RGPD">
          <SubTitle>Définition</SubTitle>
          <p style={{ marginBottom: '1rem' }}>Un cookie est un petit fichier texte déposé sur votre terminal lors de la consultation de notre site. Il permet de mémoriser certaines informations relatives à votre navigation.</p>
          <SubTitle>Types de cookies utilisés</SubTitle>
          <p style={{ marginBottom: '1rem' }}><strong>Cookies strictement nécessaires</strong> — Indispensables au fonctionnement du site.<br /><strong>Cookies analytiques (si applicable)</strong> — Permettent de mesurer l'audience de manière anonyme.</p>
          <SubTitle>Gestion des cookies</SubTitle>
          <p>Vous pouvez configurer votre navigateur pour refuser les cookies. La désactivation peut toutefois affecter certaines fonctionnalités du site.</p>
        </Section>

        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.85rem', color: tokens.colors.muted, textAlign: 'center', marginTop: '2rem' }}>Dernière mise à jour : Juin 2025</p>
      </main>

      <footer style={{ padding: '2rem 3rem', background: tokens.colors.charcoal, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>© 2025 APRIORIS — Danae Azorin</p>
        <a href="/2" style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Retour à l'accueil</a>
      </footer>
    </div>
  )
}
OliveEleganceLegal.displayName = 'OliveEleganceLegal'

export default OliveEleganceLegal
