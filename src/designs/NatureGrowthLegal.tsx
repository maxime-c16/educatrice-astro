/**
 * NATURE GROWTH - Legal Page
 * Warm, accessible legal content
 */

import { motion } from 'motion/react'

const tokens = {
  colors: {
    forest: '#2d4a3e',
    forestLight: '#3d6b5a',
    terracotta: '#c4856a',
    sand: '#e8ddd4',
    cream: '#faf8f5',
    charcoal: '#2a2a2a',
    charcoalLight: '#4a4a4a',
    muted: '#7a7a7a',
    border: '#e5dfd8',
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
      background: 'rgba(250, 248, 245, 0.92)',
      backdropFilter: 'blur(20px)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/4" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.75rem' }}>🌱</span>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: '1.5rem',
            fontWeight: 500,
            color: tokens.colors.forest,
          }}>
            Éducatrice
          </span>
        </a>
        <a href="/4" style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.9rem',
          color: tokens.colors.charcoalLight,
          textDecoration: 'none',
        }}>
          ← Retour à l'accueil
        </a>
      </div>
    </header>
  )
}

function Section({ id, title, emoji, children }: { id: string, title: string, emoji: string, children: React.ReactNode }) {
  return (
    <section id={id} style={{
      marginBottom: '3rem',
      padding: '2rem',
      background: 'white',
      borderRadius: '25px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
        <h2 style={{
          fontFamily: tokens.fonts.display,
          fontSize: '1.5rem',
          fontWeight: 500,
          color: tokens.colors.forest,
        }}>
          {title}
        </h2>
      </div>
      <div style={{
        fontFamily: tokens.fonts.body,
        fontSize: '0.95rem',
        fontWeight: 300,
        color: tokens.colors.charcoalLight,
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
      fontFamily: tokens.fonts.display,
      fontSize: '1.1rem',
      fontWeight: 500,
      color: tokens.colors.charcoal,
      marginTop: '1.5rem',
      marginBottom: '0.75rem',
    }}>
      {children}
    </h3>
  )
}

export function NatureGrowthLegal() {
  return (
    <div style={{
      fontFamily: tokens.fonts.body,
      background: tokens.colors.sand,
      color: tokens.colors.charcoal,
      minHeight: '100vh',
    }}>
      <Navigation />
      
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '140px 3rem 4rem',
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>📋</span>
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 400,
            color: tokens.colors.charcoal,
            marginBottom: '1rem',
          }}>
            Informations <em style={{ fontStyle: 'italic', color: tokens.colors.forest }}>légales</em>
          </h1>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: '1rem',
            color: tokens.colors.muted,
          }}>
            Transparence et respect de vos droits
          </p>
        </motion.div>

        {/* Quick nav */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Mentions', href: '#mentions', emoji: '📄' },
            { label: 'Confidentialité', href: '#privacy', emoji: '🔒' },
            { label: 'Cookies', href: '#cookies', emoji: '🍪' },
          ].map((item) => (
            <a key={item.href} href={item.href} style={{
              padding: '0.75rem 1.25rem',
              background: tokens.colors.cream,
              borderRadius: '20px',
              textDecoration: 'none',
              fontFamily: tokens.fonts.body,
              fontSize: '0.9rem',
              color: tokens.colors.forest,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span>{item.emoji}</span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mentions légales */}
        <Section id="mentions" title="Mentions légales" emoji="📄">
          <SubTitle>Éditeur du site</SubTitle>
          <p>
            <strong>Nom :</strong> [Nom de l'éducatrice]<br />
            <strong>Statut :</strong> Micro-entreprise<br />
            <strong>SIRET :</strong> XXX XXX XXX XXXXX<br />
            <strong>Adresse :</strong> [Adresse professionnelle]<br />
            <strong>Email :</strong> contact@educatrice.fr<br />
            <strong>Téléphone :</strong> [Numéro]
          </p>

          <SubTitle>Hébergement</SubTitle>
          <p>
            Ce site est hébergé par [Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]
          </p>

          <SubTitle>Propriété intellectuelle</SubTitle>
          <p>
            L'ensemble du contenu de ce site est protégé par le droit d'auteur. 
            Toute reproduction sans autorisation est interdite.
          </p>
        </Section>

        {/* Confidentialité */}
        <Section id="privacy" title="Politique de confidentialité" emoji="🔒">
          <SubTitle>Données collectées</SubTitle>
          <p>
            Seules les données que vous nous transmettez volontairement sont 
            collectées : nom, email, téléphone via le formulaire de contact.
          </p>

          <SubTitle>Utilisation</SubTitle>
          <p>
            Vos données servent uniquement à :<br />
            • Répondre à vos demandes<br />
            • Vous informer sur nos services<br />
            • Gérer notre relation
          </p>

          <SubTitle>Conservation</SubTitle>
          <p>
            Vos données sont conservées 3 ans maximum après notre dernier contact.
          </p>

          <SubTitle>Vos droits</SubTitle>
          <p>
            Vous pouvez accéder, rectifier ou supprimer vos données à tout moment 
            en nous contactant à contact@educatrice.fr
          </p>
        </Section>

        {/* Cookies */}
        <Section id="cookies" title="Cookies & RGPD" emoji="🍪">
          <SubTitle>Qu'est-ce qu'un cookie ?</SubTitle>
          <p>
            Un cookie est un petit fichier déposé sur votre appareil lors de 
            votre visite. Il permet de mémoriser certaines informations.
          </p>

          <SubTitle>Cookies utilisés</SubTitle>
          <p>
            <strong>Cookies nécessaires :</strong> Essentiels au fonctionnement du site.<br />
            <strong>Cookies analytiques :</strong> Mesure d'audience anonymisée (si applicable).
          </p>

          <SubTitle>Gestion</SubTitle>
          <p>
            Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies.
          </p>
        </Section>

        {/* Update date */}
        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.85rem',
          color: tokens.colors.muted,
          textAlign: 'center',
          marginTop: '2rem',
        }}>
          Dernière mise à jour : Février 2025
        </p>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '2rem 3rem',
        background: tokens.colors.forest,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.6)',
        }}>
          © 2025 Éducatrice Spécialisée
        </p>
        <a href="/4" style={{
          fontFamily: tokens.fonts.body,
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.6)',
          textDecoration: 'none',
        }}>
          Retour à l'accueil
        </a>
      </footer>
    </div>
  )
}

export default NatureGrowthLegal
