import { useRef, type ReactNode, type CSSProperties } from 'react'
import { useMotionValue, useSpring, motion } from 'framer-motion'

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** Tilt + glare on hover-capable devices. */
export function GlareCard({ children, style, className = '' }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 })
  return (
    <motion.div
      ref={ref}
      className={`glare ${className}`}
      style={{ ...style, rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (!canHover() || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        ry.set((px - 0.5) * 9)
        rx.set((0.5 - py) * 9)
        ref.current.style.setProperty('--gx', `${px * 100}%`)
        ref.current.style.setProperty('--gy', `${py * 100}%`)
        ref.current.style.setProperty('--go', '1')
      }}
      onPointerLeave={() => { rx.set(0); ry.set(0); ref.current?.style.setProperty('--go', '0') }}
    >
      {children}
    </motion.div>
  )
}
