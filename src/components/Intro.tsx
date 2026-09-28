import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './Logo'

const KEY = 'pm-intro-seen'

/** ~1.6 s branded entrance. Shown once per session, skippable by click / key. */
export function Intro() {
  const [show, setShow] = useState(() => {
    try { return !sessionStorage.getItem(KEY) && !window.matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return true }
  })
  const close = () => { try { sessionStorage.setItem(KEY, '1') } catch { /* private mode */ } setShow(false) }
  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    const t = setTimeout(close, 1900)
    const k = () => close()
    addEventListener('keydown', k)
    return () => { clearTimeout(t); removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          onClick={close}
          role="button"
          aria-label="Přeskočit úvod"
          exit={{ clipPath: 'circle(0% at 50% 50%)' }}
          initial={{ clipPath: 'circle(150% at 50% 50%)' }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
          style={{ position: 'fixed', inset: 0, zIndex: 200, background: '#101638', display: 'grid', placeItems: 'center', cursor: 'pointer', overflow: 'hidden' }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.i key={i} className="smoke-puff" style={{ left: `${20 + i * 20}%`, bottom: '10%', width: 260, height: 260, opacity: 0 }}
              animate={{ y: -420, opacity: [0, 0.8, 0], scale: 1.8 }} transition={{ duration: 2.2, delay: i * 0.15 }} />
          ))}
          <motion.div initial={{ scale: 0.4, rotate: -12, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 140, damping: 12, delay: 0.1 }}>
            <Logo size={Math.min(280, innerWidth * 0.6)} />
          </motion.div>
          <motion.span className="script" style={{ position: 'absolute', bottom: '12%', fontSize: '1.6rem', color: '#F4C51B' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            good food · wild nights
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
