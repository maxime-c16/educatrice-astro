export const tokens = {
  colors: {
    // Outremer Palette - OKLCH
    // Primary brand color (Bleu Cobalt institutionnel)
    royal: 'oklch(42% 0.16 272)',
    royalLight: 'oklch(58% 0.16 272)',      // Lighter for hover states
    navy: 'oklch(30% 0.12 272)',            // Dark navy
    sky: 'oklch(65% 0.12 272)',             // Sky/lighter variant
    royalMuted: 'oklch(42% 0.05 272)',      // Muted for backgrounds

    // Accent color (Bronze Doré - Impact)
    accent: 'oklch(70% 0.14 75)',
    accentLight: 'oklch(80% 0.14 75)',      // Lighter for highlights
    accentDark: 'oklch(60% 0.14 75)',       // Darker for depth
    gold: 'oklch(70% 0.14 75)',             // Alias for accent
    goldLight: 'oklch(80% 0.14 75)',        // Light gold variant

    // Backgrounds & Neutrals
    offWhite: 'oklch(97% 0.01 272)',        // Off-white with blue tint
    cream: 'oklch(98% 0.003 272)',          // Warm white
    creamDark: 'oklch(94% 0.002 272)',      // Slightly darker cream

    // Text & Borders (maintain hue harmony)
    charcoal: 'oklch(15% 0.02 272)',        // Very dark text
    charcoalLight: 'oklch(35% 0.02 272)',   // Medium gray
    muted: 'oklch(55% 0.02 272)',           // Light gray
    border: 'oklch(86% 0.01 272)',          // Light border

    // Backward compatibility aliases
    royalBase: 'oklch(42% 0.16 272)',       // Alias for primary

    // Interactive states
    error: 'oklch(55% 0.20 30)',            // Red for errors
    success: 'oklch(60% 0.15 150)',         // Green for success
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
} as const
