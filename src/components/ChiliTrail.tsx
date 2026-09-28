import { useEffect, useRef } from 'react'

type Spark = { x: number; y: number; vx: number; vy: number; l: number; r: number; col: string }

/** Desktop-only pointer trail: a few red/gold sparks. Skipped on touch and reduced motion. */
export function ChiliTrail() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const c = ref.current
    if (!ok || !c) return
    const ctx = c.getContext('2d')!
    let raf = 0
    let w = 0
    let h = 0
    const P: Spark[] = []
    const size = () => { w = c.width = innerWidth; h = c.height = innerHeight }
    size()
    addEventListener('resize', size)
    let last = 0
    const move = (e: PointerEvent) => {
      const now = performance.now()
      if (now - last < 28) return
      last = now
      for (let i = 0; i < 2; i++) {
        P.push({ x: e.clientX, y: e.clientY, vx: (Math.random() - 0.5) * 1.4, vy: -Math.random() * 1.2 - 0.2, l: 1, r: 2 + Math.random() * 3.5, col: Math.random() < 0.6 ? '#D82027' : '#F4C51B' })
      }
      if (P.length > 60) P.splice(0, P.length - 60)
    }
    addEventListener('pointermove', move)
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = P.length - 1; i >= 0; i--) {
        const p = P[i]
        p.x += p.vx; p.y += p.vy; p.l -= 0.028
        if (p.l <= 0) { P.splice(i, 1); continue }
        ctx.globalAlpha = p.l
        ctx.fillStyle = p.col
        ctx.beginPath()
        ctx.ellipse(p.x, p.y, p.r * p.l + 0.5, p.r * 1.7 * p.l + 0.5, 0.6, 0, 7)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('pointermove', move) }
  }, [])
  return <canvas ref={ref} aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 90 }} />
}
