import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

const WORDS = ["Pepper Monkey's", 'Burgery', 'Žebra', 'Křídla', 'Good food', 'Wild nights']

/** Brand marquee whose speed reacts to scroll velocity. */
export function Marquee() {
  const base = useMotionValue(0)
  const { scrollY } = useScroll()
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const boost = useTransform(vel, [-2000, 0, 2000], [-4, 0, 4], { clamp: false })
  const dir = useRef(1)
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  useAnimationFrame((_, delta) => {
    if (reduce) return
    const b = boost.get()
    if (b < -0.05) dir.current = -1
    else if (b > 0.05) dir.current = 1
    base.set(base.get() + dir.current * (0.03 + Math.abs(b) * 0.05) * (delta / 16))
  })
  const x = useTransform(base, (v) => `${-(((v % 25) + 25) % 25)}%`)
  const row = WORDS.map((w, i) => (
    <span key={i} className="display">{w}<span style={{ color: '#D82027' }} aria-hidden>✶</span></span>
  ))
  return (
    <div className="marquee" aria-hidden>
      <motion.div style={{ x, display: 'inline-block' }}>{row}{row}{row}{row}</motion.div>
    </div>
  )
}
