export const tokens = {
  colors: {
    forest: '#2d4a3e',
    forestLight: '#3d6b5a',
    moss: '#7a9a8a',
    sage: '#a8c4b8',
    terracotta: '#c4856a',
    terracottaLight: '#d9a590',
    sand: '#e8ddd4',
    cream: '#faf8f5',
    warmWhite: '#fffcf8',
    charcoal: '#2a2a2a',
    charcoalLight: '#4a4a4a',
    muted: '#7a7a7a',
    border: '#e5dfd8',
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
