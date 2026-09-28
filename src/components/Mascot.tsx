import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Smoke } from './Smoke'
import { BlurWords } from './BlurWords'

/** Meet the Monkey: mascot illustration (public/assets/pepper-monkeys/mascot.webp) on navy with red sunburst. */
export function Mascot() {
  const ref = useRef<HTMLElement>(null)
  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 15 })
  const tilt = useTransform(mx, [-1, 1], [-3, 3])
  const shift = useTransform(mx, [-1, 1], [-12, 12])

  return (
    <section id="opice" aria-labelledby="opice-h" ref={ref} className="halftone"
      onPointerMove={(e) => { const r = ref.current!.getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width) * 2 - 1) }}
      style={{ position: 'relative', background: '#101638', color: '#FFF1D0', overflow: 'hidden', padding: 'clamp(64px, 9vw, 130px) 0' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'repeating-conic-gradient(from 0deg at 76% 55%, rgba(216,32,39,.28) 0 6deg, transparent 6deg 12deg)' }} />
      <Smoke count={5} />
      <div className="wrap" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 40, alignItems: 'center' }}>
        <div>
          <p className="script" style={{ margin: 0, fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', marginBottom: 8, color: '#F4C51B' }}>meet the monkey</p>
          <h2 id="opice-h" className="display" style={{ fontSize: 'clamp(3.4rem, 10vw, 9.5rem)', margin: '6px 0 18px' }}>
            <BlurWords text="Trochu" /> <span style={{ color: '#F4C51B' }}><BlurWords text="divoký," delay={0.2} /></span><br /><BlurWords text="pořádně" delay={0.4} /> <BlurWords text="dobrý." delay={0.6} />
          </h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '46ch', lineHeight: 1.5 }}>
            Opice na Karlově náměstí hlídá burgery, žebra a chladné pivo. Zajdi si k nám na dvorek, dej si cheddar navíc a zůstaň na dýl.
          </p>
        </div>
        <motion.div style={{ rotate: tilt, x: shift, display: 'grid', justifyItems: 'center' }}
          initial={{ y: 120, opacity: 0, scale: 0.9 }} whileInView={{ y: 0, opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ type: 'spring', stiffness: 90, damping: 12 }}>
          <img src="/assets/pepper-monkeys/mascot.webp" alt="Maskot Pepper Monkey's – opice v obleku s pivem a chilli papričkou v puse" loading="lazy" width={1000} height={1500}
            style={{ height: 'min(640px, 72vh)', width: 'auto', maxWidth: '100%', objectFit: 'contain', animation: 'float 5s ease-in-out infinite', filter: 'drop-shadow(0 18px 24px rgba(0,0,0,.45))' }} />
        </motion.div>
      </div>
    </section>
  )
}
