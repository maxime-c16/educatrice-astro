import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Design {
  number: number;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  accent2: string;
  font: string;
  href: string;
}

const designs: Design[] = [
  {
    number: 1,
    name: 'Édition Base',
    tagline: 'Editorial classic',
    description: 'Timeless modular design with refined typography and elegant proportions',
    accent: '#c2aa6a',
    accent2: '#c2aa6a',
    font: "'Bodoni Moda', serif",
    href: '/1'
  },
  {
    number: 2,
    name: 'APRIORIS · Olive Elegance',
    tagline: 'Ingénierie éducative et inclusive',
    description: 'Refined editorial aesthetic with organic warmth and sophisticated palette',
    accent: 'oklch(52% 0.12 260)',        // Royal Serein - Bleu Serein
    accent2: 'oklch(75% 0.08 90)',        // Or mat - Sable
    font: "'Playfair Display', serif",
    href: '/2'
  },
  {
    number: 3,
    name: 'APRIORIS · Royal Academy',
    tagline: 'Institutional authority',
    description: 'Sophisticated academic aesthetic with prestigious heritage',
    accent: 'oklch(42% 0.16 272)',        // Outremer - Bleu Cobalt
    accent2: 'oklch(70% 0.14 75)',        // Bronze Doré - Impact
    font: "'Playfair Display', serif",
    href: '/3'
  },
  {
    number: 4,
    name: 'APRIORIS · Nature Growth',
    tagline: 'Growth metaphors',
    description: 'Organic botanical aesthetic with natural harmony',
    accent: 'oklch(48% 0.10 245)',        // Océan - Bleu Pétrole
    accent2: 'oklch(72% 0.12 65)',        // Or Cuivré - Terre
    font: "'Playfair Display', serif",
    href: '/4'
  },
  {
    number: 5,
    name: 'APRIORIS · Modern Institution',
    tagline: 'Impact-driven design',
    description: 'Bold contemporary institutional style with vibrant energy',
    accent: 'oklch(40% 0.19 285)',        // Saphir - Saphir Indigo
    accent2: 'oklch(82% 0.10 88)',        // Champagne - Léger
    font: "'DM Sans', sans-serif",
    href: '/5'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function DesignShowcase() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="showcase-container">
      <motion.header
        className="showcase-header"
        style={{ y: scrollY * 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>APRIORIS</h1>
          <p className="subtitle">Explorez nos cinq expressions du design éducatif</p>
        </motion.div>
      </motion.header>

      <main className="showcase-main">
        <motion.div
          className="showcase-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {designs.map((design) => (
            <DesignCard key={design.number} design={design} />
          ))}
        </motion.div>
      </main>

      <footer className="showcase-footer">
        <p>&copy; 2024 APRIORIS. Ingénierie éducative et inclusive.</p>
      </footer>

      <style>{`
        .showcase-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .showcase-header {
          text-align: center;
          padding: 80px 20px 60px;
          margin-bottom: 60px;
        }

        .showcase-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #f5f5f5 0%, #c9a962 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: clamp(1rem, 3vw, 1.3rem);
          color: #a0a0a0;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .showcase-main {
          margin-bottom: 100px;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-bottom: 60px;
        }

        @media (max-width: 768px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .showcase-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        @media (min-width: 1025px) {
          .showcase-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .showcase-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px 20px;
          text-align: center;
          color: #808080;
          font-size: 0.95rem;
          margin-top: 60px;
        }

        .showcase-footer p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

function DesignCard({ design }: { design: Design }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="design-card-wrapper"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={design.href} className="design-card-link">
        <div className="design-card">
          <div className="design-card-number">{design.number}</div>

          <div className="design-card-header">
            <h2 className="design-card-title">{design.name}</h2>
            <p className="design-card-tagline">{design.tagline}</p>
          </div>

          <div className="design-card-accent">
            <motion.div
              className="accent-primary"
              style={{ backgroundColor: design.accent }}
              animate={isHovered ? { scaleX: 1 } : { scaleX: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="accent-secondary"
              style={{ backgroundColor: design.accent2 }}
              animate={isHovered ? { scaleX: 1 } : { scaleX: 0.6 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            />
          </div>

          <p className="design-card-description">{design.description}</p>

          <motion.div
            className="design-card-cta"
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            Découvrir →
          </motion.div>
        </div>

        <motion.div
          className="design-card-border"
          style={{ borderColor: design.accent }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </a>

      <style>{`
        .design-card-wrapper {
          position: relative;
          height: 100%;
        }

        .design-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }

        .design-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 32px 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .design-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%);
          pointer-events: none;
        }

        .design-card-link:hover .design-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .design-card-number {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.1);
          line-height: 1;
          margin-bottom: -10px;
        }

        .design-card-header {
          flex: 0 0 auto;
        }

        .design-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.1rem, 3vw, 1.3rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .design-card-tagline {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .design-card-accent {
          display: flex;
          gap: 8px;
          height: 48px;
          border-radius: 8px;
          overflow: hidden;
          opacity: 0.9;
        }

        .accent-primary {
          flex: 1;
          border-radius: 6px;
          transform-origin: left;
        }

        .accent-secondary {
          flex: 0.6;
          border-radius: 6px;
          transform-origin: left;
        }

        .design-card-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }

        .design-card-cta {
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .design-card-link:hover .design-card-cta {
          color: rgba(255, 255, 255, 1);
        }

        .design-card-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid;
          border-radius: 12px;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        @media (max-width: 640px) {
          .design-card {
            padding: 24px 20px;
            gap: 16px;
          }

          .design-card-number {
            font-size: 3rem;
          }

          .design-card-accent {
            height: 40px;
          }
        }
      `}</style>
    </motion.div>
  );
}
