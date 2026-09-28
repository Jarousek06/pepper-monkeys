import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, X } from 'lucide-react'
import { Logo } from './Logo'
import { INFO } from '../lib/brand'

const LINKS = [
  ['Menu', '#menu'],
  ['Příběh', '#opice'],
  ['Atmosféra', '#bar'],
  ['Navštiv nás', '#navstivte'],
] as const

/** Logo left, phone + big "Menu" toggle right. Full-screen overlay instead of a row of text links. */
export function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const s = () => setSolid(scrollY > 60)
    s(); addEventListener('scroll', s, { passive: true })
    return () => removeEventListener('scroll', s)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k)
    return () => removeEventListener('keydown', k)
  }, [open])

  return (
    <>
      <header style={{ position: 'fixed', inset: '0 0 auto 0', zIndex: 60, transition: 'background .3s, backdrop-filter .3s', background: solid && !open ? 'rgba(16,22,56,.88)' : 'transparent', backdropFilter: solid ? 'blur(8px)' : undefined }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <a href="#top" aria-label="Pepper Monkey's – nahoru" style={{ marginTop: solid ? 0 : 24, transition: 'margin .3s', position: 'relative', zIndex: 2 }}>
            <Logo size={solid ? 56 : 92} />
          </a>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <a href={INFO.phoneHref} className="btn btn-ghost link-u" style={{ minHeight: 48 }} aria-label={`Zavolat ${INFO.phone}`}>
              <Phone size={18} /> <span className="hide-sm">{INFO.phone}</span>
            </a>
            <button className="btn btn-gold" style={{ minHeight: 48 }} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen((o) => !o)}>
              {open ? <><X size={18} /> Zavřít</> : 'Menu ✶'}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav id="mnav" aria-label="Hlavní navigace"
            initial={{ clipPath: 'circle(0% at 90% 5%)' }} animate={{ clipPath: 'circle(150% at 90% 5%)' }} exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 55, background: '#D82027', display: 'grid', alignContent: 'center', padding: 'var(--pad)' }}
            className="halftone">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 4 }}>
              {LINKS.map(([l, h], i) => (
                <motion.li key={h} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.07 }}>
                  <a href={h} onClick={() => setOpen(false)} className="display" style={{ fontSize: 'clamp(3rem, 11vw, 8rem)', textDecoration: 'none', color: '#FFF1D0', display: 'inline-block' }}>{l}</a>
                </motion.li>
              ))}
            </ul>
            <p className="script" style={{ fontSize: '1.7rem', color: '#F4C51B', margin: '1.5rem 0 0' }}>{INFO.address}</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
