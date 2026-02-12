export const tokens = {
  colors: {
    // Océan Palette - OKLCH
    // Primary brand color (Bleu Pétrole / Océan)
    forest: 'oklch(48% 0.10 245)',          // Primary ocean blue
    forestLight: 'oklch(62% 0.10 245)',     // Lighter for hover states
    royalDark: 'oklch(35% 0.08 245)',       // Darker variant
    moss: 'oklch(55% 0.08 245)',            // Medium tone
    sage: 'oklch(65% 0.06 245)',            // Sage variant

    // Accent color (Or Cuivré - Terre/Earth)
    terracotta: 'oklch(72% 0.12 65)',
    terracottaLight: 'oklch(80% 0.12 65)',  // Lighter for highlights
    terracottaDark: 'oklch(62% 0.12 65)',   // Darker for depth
    accent: 'oklch(72% 0.12 65)',           // Alias for accent

    // Backgrounds & Neutrals (sand/earth tones)
    sand: 'oklch(96% 0.02 95)',             // Sable très clair
    cream: 'oklch(97% 0.01 95)',            // Warm cream
    warmWhite: 'oklch(99% 0.005 95)',       // Off-white

    // Text & Borders (maintain hue harmony with ocean)
    charcoal: 'oklch(22% 0.02 245)',        // Dark text
    charcoalLight: 'oklch(42% 0.02 245)',   // Medium gray
    muted: 'oklch(60% 0.02 245)',           // Light gray
    border: 'oklch(88% 0.01 245)',          // Light border

    // Interactive states
    error: 'oklch(55% 0.20 30)',            // Red for errors
    success: 'oklch(60% 0.15 150)',         // Green for success
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
} as const

export const blobStyle = (color: string, size: number, top: string, left: string, rotation: number = 0) => ({
  position: 'absolute' as const, width: `${size}px`, height: `${size}px`, top, left,
  background: color, borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  transform: `rotate(${rotation}deg)`, opacity: 0.15, filter: 'blur(40px)', zIndex: 0,
})
