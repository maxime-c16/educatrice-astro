/**
 * MODERN INSTITUTION - Legal Page
 * Clean, minimal legal content
 */

import { motion } from 'motion/react'

const tokens = {
  colors: {
    royal: '#1a365d',
    accent: '#ed8936',
    white: '#ffffff',
    offWhite: '#f7fafc',
    gray100: '#edf2f7',
    gray200: '#e2e8f0',
    gray500: '#718096',
    gray700: '#4a5568',
    charcoal: '#1a202c',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
}

function Navigation() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${tokens.colors.gray200}`,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/5" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: tokens.colors.royal,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontFamily: tokens.fonts.display, fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>É</span>
          </div>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            fontWeight: 600,
            color: tokens.colors.charcoal,
          }}>
            Éducatrice Spécialisée
          </span>
        </a>
        <a href="/5" style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.85rem',
          color: tokens.colors.gray700,
          textDecoration: 'none',
        }}>← Retour à l'accueil</a>
      </div>
    </header>
  )
}

function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: '4rem' }}>
      <h2 style={{
        fontFamily: tokens.fonts.display,
        fontSize: '1.5rem',
        fontWeight: 500,
        color: tokens.colors.charcoal,
        marginBottom: '1.5rem',
        paddingBottom: '0.75rem',
        borderBottom: `2px solid ${tokens.colors.accent}`,
        display: 'inline-block',
      }}>
        {title}
      </h2>
      <div style={{
        fontFamily: tokens.fonts.body,
        fontSize: '0.95rem',
        color: tokens.colors.gray700,
        lineHeight: 1.8,
      }}>
        {children}
      </div>
    </section>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{
      fontFamily: tokens.fonts.body,
      fontSize: '1rem',
      fontWeight: 600,
      color: tokens.colors.charcoal,
      marginTop: '1.5rem',
      marginBottom: '0.75rem',
    }}>
      {children}
    </h3>
  )
}

export function ModernInstitutionLegal() {
  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.white,
      color: tokens.colors.charcoal,
      minHeight: '100vh',
    }}>
      <Navigation />
      
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '120px 3rem 4rem',
      }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ width: '60px', height: '4px', background: tokens.colors.accent, marginBottom: '2rem' }} />
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>
            Informations <em style={{ fontStyle: 'italic', color: tokens.colors.royal }}>légales</em>
          </h1>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            color: tokens.colors.gray500,
            marginBottom: '3rem',
          }}>
            Conformité et transparence
          </p>

          {/* Quick nav */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '4rem',
            padding: '1.5rem',
            background: tokens.colors.gray100,
          }}>
            {[
              { label: 'Mentions légales', href: '#mentions' },
              { label: 'Confidentialité', href: '#privacy' },
              { label: 'Cookies', href: '#cookies' },
            ].map((item, i) => (
              <a key={item.href} href={item.href} style={{
                fontFamily: tokens.fonts.body,
                fontSize: '0.85rem',
                fontWeight: 500,
                color: tokens.colors.royal,
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                background: tokens.colors.white,
              }}>
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Mentions */}
        <Section id="mentions" title="Mentions légales">
          <SubTitle>Éditeur</SubTitle>
          <p>
            <strong>Nom :</strong> [Nom de l'éducatrice]<br />
            <strong>Statut :</strong> Micro-entreprise<br />
            <strong>SIRET :</strong> XXX XXX XXX XXXXX<br />
            <strong>Adresse :</strong> [Adresse professionnelle]<br />
            <strong>Contact :</strong> contact@educatrice.fr
          </p>

          <SubTitle>Hébergement</SubTitle>
          <p>
            [Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]
          </p>

          <SubTitle>Propriété intellectuelle</SubTitle>
          <p>
            Tous les contenus sont protégés. Reproduction interdite sans autorisation.
          </p>
        </Section>

        {/* Privacy */}
        <Section id="privacy" title="Confidentialité">
          <SubTitle>Données collectées</SubTitle>
          <p>
            Données transmises via formulaire : nom, email, téléphone, message.
          </p>

          <SubTitle>Utilisation</SubTitle>
          <p>
            • Réponse à vos demandes<br />
            • Information sur nos services<br />
            • Gestion de la relation commerciale
          </p>

          <SubTitle>Conservation</SubTitle>
          <p>
            3 ans après le dernier contact, conformément à la réglementation.
          </p>

          <SubTitle>Vos droits</SubTitle>
          <p>
            Accès, rectification, suppression, portabilité. Contact : contact@educatrice.fr
          </p>
        </Section>

        {/* Cookies */}
        <Section id="cookies" title="Cookies & RGPD">
          <SubTitle>Définition</SubTitle>
          <p>
            Fichiers texte stockés sur votre appareil pour améliorer votre expérience.
          </p>

          <SubTitle>Types utilisés</SubTitle>
          <p>
            <strong>Nécessaires :</strong> Fonctionnement du site<br />
            <strong>Analytiques :</strong> Mesure d'audience anonyme (si applicable)
          </p>

          <SubTitle>Gestion</SubTitle>
          <p>
            Paramétrable via votre navigateur. La désactivation peut affecter l'expérience.
          </p>
        </Section>

        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.85rem',
          color: tokens.colors.gray500,
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: `1px solid ${tokens.colors.gray200}`,
        }}>
          Dernière mise à jour : Février 2025
        </p>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '2rem 3rem',
        background: tokens.colors.charcoal,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{ fontFamily: tokens.fonts.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
          © 2025 Éducatrice Spécialisée
        </p>
        <a href="/5" style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.5)',
          textDecoration: 'none',
        }}>Retour à l'accueil</a>
      </footer>
    </div>
  )
}

export default ModernInstitutionLegal
