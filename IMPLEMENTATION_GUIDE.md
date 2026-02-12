# OKLCH Color Implementation Guide
## Educatrice Astro Website

---

## QUICK START

This guide provides step-by-step instructions for implementing the OKLCH blue-themed color palettes across all 5 design versions.

---

## PART 1: BASE DESIGN (Shared Components)

### Step 1: Create Base Tokens File

**File:** `/src/components/tokens.ts` (NEW FILE)

```typescript
export const tokens = {
  colors: {
    // Primary Blue (Hue: 250° - Warm Professional Blue)
    primary:       'oklch(45% 0.14 250)',       // Deep professional blue
    primaryLight:  'oklch(62% 0.14 250)',       // Medium blue for hover
    primaryVLight: 'oklch(75% 0.12 250)',       // Light blue for highlights
    primaryDark:   'oklch(32% 0.12 250)',       // Deep blue for shadows

    // Accent Colors (Warm Gold - Hue: 65°)
    accent:        'oklch(76% 0.12 65)',        // Warm gold/terracotta
    accentLight:   'oklch(85% 0.10 65)',        // Light gold highlights
    accentDark:    'oklch(65% 0.12 65)',        // Deep gold for depth

    // Neutral Colors (Blue-tinted whites)
    text:          'oklch(20% 0.02 250)',       // Very dark blue-tinted black
    textSecond:    'oklch(45% 0.03 250)',       // Medium gray
    background:    'oklch(98% 0.003 250)',      // Off-white with blue tint
    backgroundAlt: 'oklch(95% 0.003 250)',      // Slightly warmer off-white

    // Borders & Dividers
    border:        'oklch(85% 0.02 250)',       // Light border
    borderMuted:   'oklch(92% 0.01 250)',       // Very subtle border

    // White Opacity Series
    whiteOpaque95: 'rgba(255,255,255,0.95)',
    whiteOpaque90: 'rgba(255,255,255,0.90)',
    whiteOpaque80: 'rgba(255,255,255,0.80)',
    whiteOpaque70: 'rgba(255,255,255,0.70)',
    whiteOpaque60: 'rgba(255,255,255,0.60)',
    whiteOpaque50: 'rgba(255,255,255,0.50)',
    whiteOpaque40: 'rgba(255,255,255,0.40)',
    whiteOpaque30: 'rgba(255,255,255,0.30)',
    whiteOpaque20: 'rgba(255,255,255,0.20)',
    whiteOpaque10: 'rgba(255,255,255,0.10)',

    // Semantic Colors
    success:       'oklch(62% 0.18 150)',       // Green for success
    warning:       'oklch(65% 0.16 85)',        // Orange for warnings
    error:         'oklch(55% 0.20 30)',        // Red for errors
    info:          'oklch(65% 0.14 270)',       // Blue for info

    // Accessibility Variants
    textHighContrast: 'oklch(15% 0.02 250)',    // Maximum contrast
    disabled:         'oklch(70% 0.02 250)',    // Reduced saturation
    loading:          'oklch(52% 0.12 250)',    // Animation color
  },
  fonts: {
    display: "'Bodoni Moda', serif",
    body:    "'DM Sans', sans-serif",
  },
} as const
```

### Step 2: Update Hero Component

**File:** `/src/components/Hero.tsx`

Replace the hardcoded colors with token references:

```typescript
import { tokens } from './tokens'  // ADD THIS IMPORT

// In the styles, replace:
// OLD: className="text-6xl md:text-8xl text-[#e0ddd7]"
// NEW: style={{ color: tokens.colors.backgroundAlt }}

// OLD: className="text-xs uppercase tracking-[0.3em] text-[#b8b5ae]"
// NEW: style={{ color: tokens.colors.textSecond }}

// OLD: className="text-xs uppercase tracking-[0.4em] text-[#c2aa6a]"
// NEW: style={{ color: tokens.colors.accent }}

// OLD: className="inline-block mr-[0.3em] text-5xl md:text-7xl lg:text-8xl text-[#507061]"
// NEW: style={{ color: tokens.colors.primary }}

// OLD: className="italic text-[#9eb08b]"
// NEW: style={{ color: tokens.colors.primaryLight }}

// OLD: className="max-w-xl mx-auto text-lg md:text-xl text-[#6b6b6b]"
// NEW: style={{ color: tokens.colors.textSecond }}

// OLD: className="w-24 h-24 border border-[#c2aa6a]"
// NEW: style={{ borderColor: tokens.colors.accent }}

// OLD: className="inline-flex items-center gap-4 px-10 py-4 bg-[#9eb08b] text-white"
// NEW: style={{ background: tokens.colors.primaryLight, color: 'white' }}
// AND add: style={{ background: tokens.colors.primary }} for hover
```

### Step 3: Update Footer Component

**File:** `/src/components/Footer.tsx`

Replace hardcoded colors:

```typescript
import { tokens } from './tokens'  // ADD THIS IMPORT

// OLD: className="py-16 md:py-20 border-t border-[#9eb08b]/30 bg-[#507061]"
// NEW: style={{ borderColor: tokens.colors.primaryLight + '4d', background: tokens.colors.primary }}

// OLD: className="text-3xl text-[#fffaea] group-hover:text-[#c2aa6a]"
// NEW: style={{ color: tokens.colors.background }} // with hover: tokens.colors.accent

// OLD: className="text-[#fffaea]/80"
// NEW: style={{ color: tokens.colors.whiteOpaque80 }}

// OLD: className="text-xs uppercase tracking-[0.2em] text-[#c2aa6a]"
// NEW: style={{ color: tokens.colors.accent }}

// Continue replacing all hardcoded hex values with token references
```

### Step 4: Update Navigation Component

**File:** `/src/components/Navigation.tsx`

```typescript
import { tokens } from './tokens'  // ADD THIS IMPORT

// OLD: className="fixed top-0 left-0 right-0 z-50 bg-[#fffaea]/90"
// NEW: style={{ background: tokens.colors.whiteOpaque90 }}

// OLD: className="border-b border-[#9eb08b]/30"
// NEW: style={{ borderColor: tokens.colors.primaryLight + '4d' }}

// OLD: className="text-3xl text-[#507061] group-hover:text-[#9eb08b]"
// NEW: style={{ color: tokens.colors.primary }} // hover: primaryLight

// OLD: className="relative text-xs uppercase tracking-[0.2em] text-[#6b6b6b] hover:text-[#1a1a1a]"
// NEW: style={{ color: tokens.colors.textSecond }} // hover: text

// OLD: className="absolute -bottom-1 left-0 w-0 h-px bg-[#c2aa6a]"
// NEW: style={{ background: tokens.colors.accent }}

// OLD: className="w-6 h-px bg-[#1a1a1a]"
// NEW: style={{ background: tokens.colors.text }}

// OLD: className="fixed inset-0 z-40 bg-[#fffaea]"
// NEW: style={{ background: tokens.colors.background }}

// OLD: className="fixed top-0 left-0 right-0 h-0.5 bg-[#c2aa6a]"
// NEW: style={{ background: tokens.colors.accent }}

// OLD: linear-gradient(to right, #1a1a1a 1px, transparent 1px)
// NEW: linear-gradient(to right, ${tokens.colors.text} 1px, transparent 1px)
```

### Step 5: Update Contact Component

**File:** `/src/components/Contact.tsx`

Replace form input colors:

```typescript
import { tokens } from './tokens'  // ADD THIS IMPORT

// OLD: className="text-xs uppercase tracking-[0.3em] text-[#c2aa6a]"
// NEW: style={{ color: tokens.colors.accent }}

// OLD: className="text-xs uppercase tracking-[0.3em] text-[#6b6b6b]"
// NEW: style={{ color: tokens.colors.textSecond }}

// OLD: className="text-4xl md:text-5xl lg:text-6xl text-[#507061]"
// NEW: style={{ color: tokens.colors.primary }}

// OLD: className="italic text-[#9eb08b]"
// NEW: style={{ color: tokens.colors.primaryLight }}

// OLD: className="text-lg text-[#6b6b6b]"
// NEW: style={{ color: tokens.colors.textSecond }}

// OLD: focus:border-[#507061]
// NEW: style={{ borderColor: tokens.colors.primary }} (on focus)

// OLD: text-[#1a1a1a]
// NEW: style={{ color: tokens.colors.text }}
```

### Step 6: Update Services Component

**File:** `/src/components/Services.tsx`

```typescript
import { tokens } from './tokens'  // ADD THIS IMPORT

// OLD: className="text-6xl md:text-7xl text-[#9eb08b] group-hover:text-[#507061]"
// NEW: style={{ color: tokens.colors.primaryLight }} // hover: primary

// OLD: className="text-2xl md:text-3xl text-[#507061]"
// NEW: style={{ color: tokens.colors.primary }}

// OLD: className="text-[#6b6b6b]"
// NEW: style={{ color: tokens.colors.textSecond }}
```

### Step 7: Update Portfolio Component

**File:** `/src/components/Portfolio.tsx`

```typescript
import { tokens } from './tokens'  // ADD THIS IMPORT

// OLD: className="text-4xl md:text-5xl lg:text-6xl text-[#507061]"
// NEW: style={{ color: tokens.colors.primary }}

// OLD: className="text-[#6b6b6b]"
// NEW: style={{ color: tokens.colors.textSecond }}

// OLD: background: `linear-gradient(to bottom, #507061/90 to-transparent)`
// NEW: background: `linear-gradient(to bottom, ${tokens.colors.primary}e6 to-transparent)`

// OLD: border: `1px solid ${#9eb08b}/40`
// NEW: border: `1px solid ${tokens.colors.primaryLight}66`
```

### Step 8: Update Testimonials Component

**File:** `/src/components/Testimonials.tsx`

```typescript
import { tokens } from './tokens'  // ADD THIS IMPORT

// Replace all color references similar to above components
// PRIMARY: #507061 → tokens.colors.primary
// LIGHT: #9eb08b → tokens.colors.primaryLight
// ACCENT: #c2aa6a → tokens.colors.accent
// TEXT: #6b6b6b → tokens.colors.textSecond
```

### Step 9: Update Manifeste Component

**File:** `/src/components/Manifeste.tsx`

```typescript
import { tokens } from './tokens'  // ADD THIS IMPORT

// Replace all color references
```

### Step 10: Update DesignShowcase Component

**File:** `/src/components/DesignShowcase.tsx`

```typescript
// OLD: linear-gradient(90deg, #c2aa6a 0%, #c9a962 100%)
// NEW: linear-gradient(90deg, ${tokens.colors.accent} 0%, ${tokens.colors.accentDark} 100%)
```

---

## PART 2: DESIGN-SPECIFIC TOKEN UPDATES

### Design 2: Olive-Elegance

**File:** `/src/designs/olive-elegance/tokens.ts`

Add opacity variants and semantic colors:

```typescript
export const tokens = {
  colors: {
    // Keep existing OKLCH values
    royal: 'oklch(52% 0.12 260)',
    royalLight: 'oklch(68% 0.12 260)',
    royalDark: 'oklch(40% 0.10 260)',
    royalMuted: 'oklch(52% 0.04 260)',

    accent: 'oklch(75% 0.08 90)',
    accentLight: 'oklch(85% 0.08 90)',
    accentDark: 'oklch(65% 0.08 90)',

    offWhite: 'oklch(99% 0.005 90)',
    cream: 'oklch(98% 0.003 260)',
    creamDark: 'oklch(95% 0.002 260)',

    charcoal: 'oklch(25% 0.01 260)',
    charcoalLight: 'oklch(45% 0.02 260)',
    muted: 'oklch(55% 0.02 260)',
    border: 'oklch(88% 0.01 260)',

    // ADD: Backward compatibility aliases
    olive: 'oklch(52% 0.12 260)',
    oliveLight: 'oklch(68% 0.12 260)',
    oliveDark: 'oklch(40% 0.10 260)',
    sage: 'oklch(62% 0.10 260)',

    // ADD: Complete opacity series
    whiteOpaque95: 'rgba(255,255,255,0.95)',
    whiteOpaque90: 'rgba(255,255,255,0.90)',
    whiteOpaque80: 'rgba(255,255,255,0.80)',
    whiteOpaque70: 'rgba(255,255,255,0.70)',
    whiteOpaque60: 'rgba(255,255,255,0.60)',
    whiteOpaque50: 'rgba(255,255,255,0.50)',
    whiteOpaque40: 'rgba(255,255,255,0.40)',
    whiteOpaque30: 'rgba(255,255,255,0.30)',
    whiteOpaque20: 'rgba(255,255,255,0.20)',
    whiteOpaque10: 'rgba(255,255,255,0.10)',

    // ADD: Semantic colors
    error: 'oklch(55% 0.20 30)',
    success: 'oklch(60% 0.15 150)',
    warning: 'oklch(65% 0.16 85)',
    info: 'oklch(65% 0.14 270)',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
} as const
```

### Design 3: Royal-Academy

**File:** `/src/designs/royal-academy/tokens.ts`

Add complete opacity series and semantic colors:

```typescript
export const tokens = {
  colors: {
    // Keep existing
    royal: 'oklch(42% 0.16 272)',
    royalLight: 'oklch(58% 0.16 272)',
    navy: 'oklch(30% 0.12 272)',
    sky: 'oklch(65% 0.12 272)',
    royalMuted: 'oklch(42% 0.05 272)',

    accent: 'oklch(70% 0.14 75)',
    accentLight: 'oklch(80% 0.14 75)',
    accentDark: 'oklch(60% 0.14 75)',
    gold: 'oklch(70% 0.14 75)',
    goldLight: 'oklch(80% 0.14 75)',

    offWhite: 'oklch(97% 0.01 272)',
    cream: 'oklch(98% 0.003 272)',
    creamDark: 'oklch(94% 0.002 272)',

    charcoal: 'oklch(15% 0.02 272)',
    charcoalLight: 'oklch(35% 0.02 272)',
    muted: 'oklch(55% 0.02 272)',
    border: 'oklch(86% 0.01 272)',

    // ADD: Backward compatibility
    royalBase: 'oklch(42% 0.16 272)',

    // ADD: Complete opacity series
    whiteOpaque95: 'rgba(255,255,255,0.95)',
    whiteOpaque90: 'rgba(255,255,255,0.90)',
    whiteOpaque80: 'rgba(255,255,255,0.80)',
    whiteOpaque70: 'rgba(255,255,255,0.70)',
    whiteOpaque60: 'rgba(255,255,255,0.60)',
    whiteOpaque50: 'rgba(255,255,255,0.50)',
    whiteOpaque40: 'rgba(255,255,255,0.40)',
    whiteOpaque30: 'rgba(255,255,255,0.30)',
    whiteOpaque20: 'rgba(255,255,255,0.20)',
    whiteOpaque10: 'rgba(255,255,255,0.10)',

    // ADD: Semantic colors
    error: 'oklch(55% 0.20 30)',
    success: 'oklch(60% 0.15 150)',
    warning: 'oklch(65% 0.16 85)',
    info: 'oklch(68% 0.12 270)',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
} as const
```

### Design 4: Nature-Growth

**File:** `/src/designs/nature-growth/tokens.ts`

Add nature variants and semantic colors:

```typescript
export const tokens = {
  colors: {
    // Keep existing
    forest: 'oklch(48% 0.10 245)',
    forestLight: 'oklch(62% 0.10 245)',
    royalDark: 'oklch(35% 0.08 245)',
    moss: 'oklch(55% 0.08 245)',
    sage: 'oklch(65% 0.06 245)',

    terracotta: 'oklch(72% 0.12 65)',
    terracottaLight: 'oklch(80% 0.12 65)',
    terracottaDark: 'oklch(62% 0.12 65)',
    accent: 'oklch(72% 0.12 65)',

    sand: 'oklch(96% 0.02 95)',
    cream: 'oklch(97% 0.01 95)',
    warmWhite: 'oklch(99% 0.005 95)',

    charcoal: 'oklch(22% 0.02 245)',
    charcoalLight: 'oklch(42% 0.02 245)',
    muted: 'oklch(60% 0.02 245)',
    border: 'oklch(88% 0.01 245)',

    // ADD: Nature variants
    leaf: 'oklch(52% 0.12 140)',
    soil: 'oklch(45% 0.08 65)',
    water: 'oklch(60% 0.12 250)',

    // ADD: Semantic colors
    error: 'oklch(55% 0.20 30)',
    success: 'oklch(60% 0.15 150)',
    warning: 'oklch(65% 0.16 85)',
    info: 'oklch(65% 0.14 270)',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
} as const

export const blobStyle = (color: string, size: number, top: string, left: string, rotation: number = 0) => ({
  position: 'absolute' as const,
  width: `${size}px`,
  height: `${size}px`,
  top,
  left,
  background: color,
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  transform: `rotate(${rotation}deg)`,
  opacity: 0.15,
  filter: 'blur(40px)',
  zIndex: 0,
})
```

### Design 5: Modern-Institution

**File:** `/src/designs/modern-institution/tokens.ts`

Verify and maintain current comprehensive palette (already excellent):

```typescript
// Already well-configured with:
// - Complete opacity series
// - Semantic colors
// - High contrast text variants
// - Dark overlays for modals

// Just verify all values are present:
export const tokens = {
  colors: {
    royal: 'oklch(40% 0.19 285)',
    royalLight: 'oklch(56% 0.19 285)',
    royalDark: 'oklch(28% 0.15 285)',
    electric: 'oklch(56% 0.15 285)',
    electricLight: 'oklch(68% 0.15 285)',
    royalMuted: 'oklch(40% 0.06 285)',

    accent: 'oklch(82% 0.10 88)',
    accentLight: 'oklch(88% 0.10 88)',
    accentDark: 'oklch(72% 0.10 88)',

    offWhite: 'oklch(98% 0.005 285)',
    white: 'oklch(99% 0.002 285)',
    grayLight: 'oklch(92% 0.01 285)',
    grayMid: 'oklch(60% 0.02 285)',
    grayDark: 'oklch(30% 0.02 285)',

    text: 'oklch(18% 0.03 285)',

    // Keep all opacity variants
    whiteOpaque95: 'rgba(255,255,255,0.95)',
    whiteOpaque70: 'rgba(255,255,255,0.7)',
    whiteOpaque50: 'rgba(255,255,255,0.5)',
    whiteOpaque40: 'rgba(255,255,255,0.4)',
    whiteOpaque30: 'rgba(255,255,255,0.3)',
    whiteOpaque08: 'rgba(255,255,255,0.08)',
    whiteOpaque03: 'rgba(255,255,255,0.03)',

    accentWithOpacity15: 'rgba(237, 137, 54, 0.15)',
    accentWithOpacity10: 'rgba(237, 137, 54, 0.1)',

    darkOpaque97: 'rgba(26, 54, 93, 0.97)',
    darkOpaque60: 'rgba(0,0,0,0.6)',

    error: 'oklch(55% 0.20 30)',
    success: 'oklch(60% 0.15 150)',
  },
  fonts: {
    display: "'DM Sans', 'IBM Plex Sans', -apple-system, sans-serif",
    body: "'IBM Plex Sans', -apple-system, sans-serif",
  },
} as const
```

---

## PART 3: TESTING CHECKLIST

### Accessibility Testing

- [ ] Run all text colors through WebAIM Contrast Checker
- [ ] Verify 7:1 ratio for normal text (WCAG AAA)
- [ ] Verify 4.5:1 ratio for large text (WCAG AA)
- [ ] Test with NVDA screen reader
- [ ] Test with color blindness simulator (Coblis)
- [ ] Test focus states with keyboard navigation
- [ ] Verify link underlines are visible

### Visual Testing

- [ ] Test all 5 design versions in light/dark environments
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test responsive design on mobile/tablet
- [ ] Verify gradients render smoothly
- [ ] Check hover states for all interactive elements
- [ ] Verify opacity variants don't look muddy

### Performance Testing

- [ ] Bundle size with new tokens
- [ ] CSS rendering performance
- [ ] Component render times
- [ ] Mobile performance impact

---

## PART 4: COMMON PATTERNS & QUICK REPLACEMENTS

### Pattern 1: Text Color Changes

```typescript
// OLD (hardcoded)
className="text-[#507061]"

// NEW (with tokens)
style={{ color: tokens.colors.primary }}
// OR for inline Tailwind:
className="text-[color:var(--primary)]" // if using CSS variables
```

### Pattern 2: Background Colors

```typescript
// OLD
style={{ background: '#fffaea' }}

// NEW
style={{ background: tokens.colors.background }}
```

### Pattern 3: Border Colors with Opacity

```typescript
// OLD
className="border-[#9eb08b]/30"

// NEW (approach 1 - inline style)
style={{ borderColor: tokens.colors.primaryLight + '4d' }}  // 30% = 4d in hex

// NEW (approach 2 - CSS variable)
// Define in global CSS:
// --primary-light: oklch(62% 0.14 250);
// --primary-light-30: color-mix(in oklch, var(--primary-light) 30%, transparent);
```

### Pattern 4: Gradients

```typescript
// OLD
background: `linear-gradient(135deg, #507061, #9eb08b)`

// NEW
background: `linear-gradient(135deg, ${tokens.colors.primary}, ${tokens.colors.primaryLight})`
```

### Pattern 5: Hover States

```typescript
// OLD
className="text-[#507061] hover:text-[#9eb08b]"

// NEW
style={{
  color: tokens.colors.primary,
  transition: 'color 0.3s ease',
}}
onMouseEnter={(e) => e.currentTarget.style.color = tokens.colors.primaryLight}
onMouseLeave={(e) => e.currentTarget.style.color = tokens.colors.primary}
```

---

## PART 5: MIGRATION TIMELINE

### Week 1: Base Design (Shared Components)
- [ ] Day 1: Create `/src/components/tokens.ts`
- [ ] Day 2-3: Update Hero, Footer, Navigation
- [ ] Day 4: Update Contact, Services
- [ ] Day 5: Update Portfolio, Testimonials, Manifeste, DesignShowcase
- [ ] Testing & verification

### Week 2: Design-Specific Updates
- [ ] Day 1: Update Design 2 (olive-elegance)
- [ ] Day 2: Update Design 3 (royal-academy)
- [ ] Day 3: Update Design 4 (nature-growth)
- [ ] Day 4: Verify Design 5 (modern-institution)
- [ ] Day 5: Cross-design testing

### Week 3: Accessibility & Documentation
- [ ] Day 1-2: Full accessibility audit
- [ ] Day 3: Color blindness testing
- [ ] Day 4: Documentation & comments
- [ ] Day 5: Performance optimization

---

## PART 6: TROUBLESHOOTING

### Issue: Colors look different in different browsers

**Solution:**
- OKLCH is well-supported in modern browsers (90%+ coverage)
- For older browsers, use CSS fallbacks:
```css
color: #507061; /* fallback */
color: oklch(45% 0.14 250);
```

### Issue: Opacity values don't render correctly

**Solution:**
- Use rgba() format for maximum compatibility
- Don't mix Tailwind opacity classes with manual colors

### Issue: Contrast ratio fails WCAG

**Solution:**
- Always pair darkest text (L < 25%) on light backgrounds
- Use `tokens.colors.text` for all body copy
- Use `tokens.colors.textHighContrast` for critical elements

### Issue: Color appears saturated or unsaturated

**Solution:**
- OKLCH saturation (Chroma) uses 0-0.37 range
- Higher values (0.15+) are vibrant
- Lower values (0.01-0.05) are muted
- Adjust C value in oklch() to fine-tune saturation

---

## RESOURCES

- **OKLCH Converter:** https://oklch.com/
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Color Blindness Simulator:** https://www.color-blindness.com/coblis-color-blindness-simulator/
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **OKLCH Spec:** https://drafts.csswg.org/css-color-4/#ok-lab

---

**Implementation Status:** Ready to Begin
**Last Updated:** February 12, 2026
**Prepared by:** Claude (Anthropic) - OKLCH Color Specialist
