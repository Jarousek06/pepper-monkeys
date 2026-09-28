import type { CSSProperties } from 'react'

/** Lightweight CSS smoke: cream puffs rising. Never blocks pointer events. */
export function Smoke({ count = 7, style }: { count?: number; style?: CSSProperties }) {
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', ...style }}>
      {Array.from({ length: count }, (_, i) => (
        <i
          key={i}
          className="smoke-puff"
          style={{
            left: `${(i * 97) % 100}%`,
            bottom: `${-10 + (i % 3) * 8}%`,
            width: 160 + (i % 4) * 60,
            height: 160 + (i % 4) * 60,
            ['--dur' as string]: `${12 + (i % 5) * 3}s`,
            ['--del' as string]: `${-i * 2.3}s`,
            ['--dx' as string]: `${(i % 2 ? 1 : -1) * (30 + i * 9)}px`,
          }}
        />
      ))}
    </div>
  )
}

/** Wavy divider: waves are painted in the colour of the NEXT section, smoke drifts across. */
export function SmokeDivider({ from, to }: { from: string; to: string }) {
  return (
    <div aria-hidden style={{ position: 'relative', height: 'clamp(70px, 10vw, 150px)', background: from, marginBottom: -1 }}>
      <Smoke count={5} />
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <path d="M0 120c140-40 220 30 360 0s200-40 340-10 240 40 380-10 240-30 360 0v60H0z" fill={to} opacity=".5" />
        <path d="M0 90c120-60 200 40 340 10s180-70 320-30 200 60 340 10 300-60 440-10v130H0z" fill={to} />
      </svg>
    </div>
  )
}
