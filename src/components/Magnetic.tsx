import { useRef, type ReactNode } from 'react'
import { useMotionValue, useSpring, motion } from 'framer-motion'

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** Spring-based magnetic wrapper; no-op on touch. */
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 })
  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: 'inline-block' }}
      onPointerMove={(e) => {
        if (!canHover() || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * strength)
        y.set((e.clientY - r.top - r.height / 2) * strength)
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}
