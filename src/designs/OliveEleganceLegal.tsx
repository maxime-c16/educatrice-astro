/**
 * OLIVE ELEGANCE - Legal Page
 * Mentions légales, Politique de confidentialité, RGPD/Cookies
 */

import { motion } from 'motion/react'

const tokens = {
  colors: {
    olive: '#5c6b4a',
    sage: '#8b9a6d',
    gold: '#c9a962',
    cream: '#f9f6f0',
    creamDark: '#f0ebe3',
    charcoal: '#2d2d2d',
    charcoalLight: '#4a4a4a',
    muted: '#7a7a7a',
    border: '#e5e0d8',
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
      background: 'rgba(249, 246, 240, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${tokens.colors.border}`,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/2" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.75rem',
            fontWeight: 500,
            color: tokens.colors.olive,
          }}>
            Éducatrice
          </span>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.75rem',
            fontStyle: 'italic',
            color: tokens.colors.sage,
          }}>
            Spécialisée
          </span>
        </a>
        <nav>
          <a href="/2" style={{
            fontFamily: tokens.fonts.body,
            fontSize: '0.85rem',
            color: tokens.colors.charcoalLight,
            textDecoration: 'none',
          }}>
            ← Retour à l'accueil
          </a>
        </nav>
      </div>
    </header>
  )
}

function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: '4rem' }}>
      <h2 style={{
        fontFamily: tokens.fonts.display,
        fontSize: '1.75rem',
        fontWeight: 500,
        color: tokens.colors.charcoal,
        marginBottom: '1.5rem',
        paddingBottom: '0.75rem',
        borderBottom: `1px solid ${tokens.colors.border}`,
      }}>
        {title}
      </h2>
      <div style={{
        fontFamily: tokens.fonts.body,
        fontSize: '1rem',
        fontWeight: 300,
        color: tokens.colors.charcoalLight,
        lineHeight: 1.8,
      }}>
        {children}
      </div>
    </section>
  )
}

export function OliveEleganceLegal() {
  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.cream,
      color: tokens.colors.charcoal,
      minHeight: '100vh',
    }}>
      <Navigation />
      
      <main style={{
        paddingTop: '120px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '120px 3rem 4rem',
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginBottom: '2rem',
          }}>
            Informations <em style={{ fontStyle: 'italic', color: tokens.colors.olive }}>légales</em>
          </h1>

          {/* Table of contents */}
          <nav style={{
            background: tokens.colors.creamDark,
            padding: '1.5rem',
            marginBottom: '3rem',
            border: `1px solid ${tokens.colors.border}`,
          }}>
            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: tokens.colors.gold,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Sommaire
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {[
                { label: 'Mentions légales', href: '#mentions' },
                { label: 'Politique de confidentialité', href: '#privacy' },
                { label: 'Cookies & RGPD', href: '#cookies' },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: '0.9rem',
                    color: tokens.colors.olive,
                    textDecoration: 'none',
                  }}>
                    → {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Mentions légales */}
        <Section id="mentions" title="Mentions légales">
          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Éditeur du site
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Nom :</strong> [Nom de l'éducatrice]<br />
            <strong>Statut :</strong> Micro-entreprise<br />
            <strong>SIRET :</strong> XXX XXX XXX XXXXX<br />
            <strong>Adresse :</strong> [Adresse professionnelle]<br />
            <strong>Email :</strong> contact@educatrice.fr<br />
            <strong>Téléphone :</strong> [Numéro de téléphone]
          </p>

          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Hébergement
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Ce site est hébergé par [Nom de l'hébergeur]<br />
            <strong>Adresse :</strong> [Adresse de l'hébergeur]<br />
            <strong>Site web :</strong> [URL de l'hébergeur]
          </p>

          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Propriété intellectuelle
          </h3>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par 
            le droit d'auteur. Toute reproduction, même partielle, est interdite sans 
            autorisation préalable.
          </p>
        </Section>

        {/* Politique de confidentialité */}
        <Section id="privacy" title="Politique de confidentialité">
          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Collecte des données
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Les données personnelles collectées sur ce site sont uniquement celles que vous 
            nous transmettez volontairement via le formulaire de contact : nom, adresse email, 
            numéro de téléphone (facultatif), et le contenu de votre message.
          </p>

          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Utilisation des données
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Vos données sont utilisées exclusivement pour :<br />
            • Répondre à vos demandes de contact<br />
            • Vous fournir des informations sur nos services<br />
            • Gérer la relation commerciale le cas échéant
          </p>

          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Conservation des données
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Vos données personnelles sont conservées pendant une durée de 3 ans à compter 
            de votre dernier contact avec nous, conformément à la réglementation en vigueur.
          </p>

          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Vos droits
          </h3>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, 
            de suppression et de portabilité de vos données. Pour exercer ces droits, 
            contactez-nous à : contact@educatrice.fr
          </p>
        </Section>

        {/* Cookies */}
        <Section id="cookies" title="Cookies & RGPD">
          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Qu'est-ce qu'un cookie ?
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            Un cookie est un petit fichier texte déposé sur votre terminal lors de la 
            visite d'un site web. Il permet de mémoriser des informations relatives à 
            votre navigation.
          </p>

          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Cookies utilisés sur ce site
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Cookies strictement nécessaires :</strong> Ces cookies sont essentiels 
            au fonctionnement du site et ne peuvent pas être désactivés.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Cookies analytiques :</strong> Nous utilisons [Google Analytics / aucun outil] 
            pour mesurer l'audience du site. Ces données sont anonymisées.
          </p>

          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.2rem',
            fontWeight: 500,
            color: tokens.colors.charcoal,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
          }}>
            Gestion des cookies
          </h3>
          <p>
            Vous pouvez à tout moment modifier vos préférences en matière de cookies via 
            les paramètres de votre navigateur. La désactivation de certains cookies peut 
            toutefois affecter votre expérience de navigation.
          </p>
        </Section>

        {/* Last updated */}
        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.85rem',
          color: tokens.colors.muted,
          borderTop: `1px solid ${tokens.colors.border}`,
          paddingTop: '2rem',
          marginTop: '2rem',
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
        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.5)',
        }}>
          © 2025 Éducatrice Spécialisée
        </p>
        <a href="/2" style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.5)',
          textDecoration: 'none',
        }}>
          Retour à l'accueil
        </a>
      </footer>
    </div>
  )
}

export default OliveEleganceLegal
