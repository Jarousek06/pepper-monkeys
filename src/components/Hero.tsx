import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, MapPin } from 'lucide-react'
import { BlurWords } from './BlurWords'
import { Magnetic } from './Magnetic'
import { Smoke } from './Smoke'
import { IMG, INFO } from '../lib/brand'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const py = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const rot = useTransform(scrollYProgress, [0, 1], [0, 4])

  return (
    <section ref={ref} id="top" className="hero grain" aria-label="Pepper Monkey's – úvod">
      <Smoke count={6} style={{ zIndex: 1 }} />
      <motion.div className="hero-photo" style={{ y: py, rotate: rot, zIndex: 2 }}
        initial={{ scale: 1.25, rotate: -6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.6, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}>
        <img src={IMG('burger-bacon')} alt="Burger se šťavnatým hovězím, cheddarem a slaninou" fetchPriority="high" width={1800} height={1201} />
      </motion.div>

      <motion.a href={INFO.instagram} target="_blank" rel="noopener noreferrer" className="hero-tag display" aria-label="Instagram #opicezroudnice"
        initial={{ opacity: 0, scale: 0.3, rotate: -30 }} animate={{ opacity: 1, scale: 1, rotate: -9 }} whileHover={{ rotate: -3, scale: 1.06 }}
        transition={{ delay: 2.1, type: 'spring', stiffness: 160, damping: 9 }}>
        #opicezroudnice
      </motion.a>

      <div className="wrap hero-inner" style={{ width: '100%' }}>
        <motion.span className="sticker" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6, type: 'spring' }}>
          American bar · Roudnice n. L.
        </motion.span>
        <h1 className="display" style={{ marginTop: 18 }}>
          <span style={{ display: 'block' }}><BlurWords text="Good food." delay={0.9} /></span>
          <span style={{ display: 'block', color: '#F4C51B' }}><BlurWords text="Wild nights." delay={1.3} /></span>
        </h1>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 34, alignItems: 'center' }}>
          <Magnetic><a href="#menu" className="btn btn-red">Prohlédnout menu</a></Magnetic>
          <Magnetic><a href="#navstivte" className="btn btn-gold"><MapPin size={18} /> Navštiv nás</a></Magnetic>
          <span className="script" style={{ fontSize: '1.4rem', opacity: .85 }}>{INFO.address.split(',')[0]}</span>
        </motion.div>
      </div>

      <motion.a href="#menu" aria-label="Scrollovat dolů" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
        style={{ position: 'absolute', right: 'var(--pad)', bottom: 28, zIndex: 4, display: 'grid', placeItems: 'center', width: 56, height: 56, borderRadius: '50%', border: '2px solid #FFF1D0' }}>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}><ArrowDown size={22} /></motion.span>
      </motion.a>
    </section>
  )
}
