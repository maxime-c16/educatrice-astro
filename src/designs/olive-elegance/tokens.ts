export const tokens = {
  colors: {
    // Royal Serein Palette - OKLCH
    // Primary brand color (Bleu Serein)
    royal: 'oklch(52% 0.12 260)',
    royalLight: 'oklch(68% 0.12 260)',      // Lighter variant for hover states
    royalDark: 'oklch(40% 0.10 260)',       // Darker for shadows/borders
    royalMuted: 'oklch(52% 0.04 260)',      // Muted for subtle backgrounds

    // Accent color (Or mat - Sable)
    accent: 'oklch(75% 0.08 90)',
    accentLight: 'oklch(85% 0.08 90)',      // Lighter for highlights
    accentDark: 'oklch(65% 0.08 90)',       // Darker for depth
    gold: 'oklch(75% 0.08 90)',             // Alias for accent
    goldLight: 'oklch(85% 0.08 90)',        // Lighter gold

    // Backgrounds & Neutrals
    offWhite: 'oklch(99% 0.005 90)',        // Crème ultra-léger
    cream: 'oklch(98% 0.003 260)',          // Warm white with blue tint
    creamDark: 'oklch(95% 0.002 260)',      // Slightly darker cream

    // Text & Borders (maintain hue harmony)
    charcoal: 'oklch(25% 0.01 260)',        // Dark text
    charcoalLight: 'oklch(45% 0.02 260)',   // Medium gray
    muted: 'oklch(55% 0.02 260)',           // Light gray for secondary text
    border: 'oklch(88% 0.01 260)',          // Light border color

    // Backward compatibility aliases
    olive: 'oklch(52% 0.12 260)',           // Primary blue (was olive)
    oliveLight: 'oklch(68% 0.12 260)',      // Light variant
    oliveDark: 'oklch(40% 0.10 260)',       // Dark variant
    sage: 'oklch(62% 0.10 260)',            // Medium tone

    // White with transparency (for rgba fallback compatibility)
    whiteOpaque95: 'rgba(255,255,255,0.95)',
    whiteOpaque80: 'rgba(255,255,255,0.8)',
    whiteOpaque70: 'rgba(255,255,255,0.7)',
    whiteOpaque60: 'rgba(255,255,255,0.6)',
    whiteOpaque50: 'rgba(255,255,255,0.5)',
    whiteOpaque40: 'rgba(255,255,255,0.4)',
    whiteOpaque30: 'rgba(255,255,255,0.3)',
    whiteOpaque20: 'rgba(255,255,255,0.2)',
    whiteOpaque10: 'rgba(255,255,255,0.1)',
    whiteOpaque05: 'rgba(255,255,255,0.05)',

    // Interactive states
    error: 'oklch(55% 0.20 30)',            // Red for errors
    success: 'oklch(60% 0.15 150)',         // Green for success
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
} as const
