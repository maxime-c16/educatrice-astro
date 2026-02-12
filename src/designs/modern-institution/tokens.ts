export const tokens = {
  colors: {
    // Saphir Palette - OKLCH
    // Primary brand color (Saphir Indigo)
    royal: 'oklch(40% 0.19 285)',           // Primary saphir
    royalLight: 'oklch(56% 0.19 285)',      // Lighter for hover states
    royalDark: 'oklch(28% 0.15 285)',       // Darker for depth
    electric: 'oklch(56% 0.15 285)',        // Electric variant
    electricLight: 'oklch(68% 0.15 285)',   // Light electric
    royalMuted: 'oklch(40% 0.06 285)',      // Muted for backgrounds

    // Accent color (Champagne - Léger)
    accent: 'oklch(82% 0.10 88)',
    accentLight: 'oklch(88% 0.10 88)',      // Lighter for highlights
    accentDark: 'oklch(72% 0.10 88)',       // Darker for depth

    // Backgrounds & Neutrals
    offWhite: 'oklch(98% 0.005 285)',       // Off-white with indigo tint
    white: 'oklch(99% 0.002 285)',          // Pure white
    grayLight: 'oklch(92% 0.01 285)',       // Light gray
    grayMid: 'oklch(60% 0.02 285)',         // Medium gray
    grayDark: 'oklch(30% 0.02 285)',        // Dark gray

    // Text
    text: 'oklch(18% 0.03 285)',            // Primary text

    // White with opacity variants (for transparent overlays)
    whiteOpaque95: 'rgba(255,255,255,0.95)',
    whiteOpaque70: 'rgba(255,255,255,0.7)',
    whiteOpaque50: 'rgba(255,255,255,0.5)',
    whiteOpaque40: 'rgba(255,255,255,0.4)',
    whiteOpaque30: 'rgba(255,255,255,0.3)',
    whiteOpaque08: 'rgba(255,255,255,0.08)',
    whiteOpaque03: 'rgba(255,255,255,0.03)',

    // Accent with opacity variants
    accentWithOpacity15: 'rgba(237, 137, 54, 0.15)',
    accentWithOpacity10: 'rgba(237, 137, 54, 0.1)',

    // Dark overlay variants
    darkOpaque97: 'rgba(26, 54, 93, 0.97)',
    darkOpaque60: 'rgba(0,0,0,0.6)',

    // Interactive states
    error: 'oklch(55% 0.20 30)',            // Red for errors
    success: 'oklch(60% 0.15 150)',         // Green for success
  },
  fonts: {
    display: "'DM Sans', 'IBM Plex Sans', -apple-system, sans-serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
} as const
