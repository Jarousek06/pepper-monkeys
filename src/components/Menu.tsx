import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { MENU } from '../lib/menu'
import { IMG, INFO } from '../lib/brand'
import { GlareCard } from './GlareCard'
import { BlurWords } from './BlurWords'
import { Magnetic } from './Magnetic'

export function Menu() {
  const [id, setId] = useState(MENU[0].id)
  const cat = MENU.find((c) => c.id === id)!

  return (
    <motion.section id="menu" aria-labelledby="menu-h" animate={{ backgroundColor: cat.bg, color: cat.ink }} transition={{ duration: 0.6 }}
      style={{ position: 'relative', padding: 'clamp(56px, 8vw, 120px) 0', ['--tab-ink' as string]: cat.ink, ['--tab-bg' as string]: cat.bg }}>
      <div className="wrap">
        <p className="script" style={{ margin: 0, fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', marginBottom: 8, color: cat.accent }}>what's cooking</p>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0 clamp(12px, 3vw, 40px)', margin: '0 0 24px' }}>
          <h2 id="menu-h" className="display" style={{ fontSize: 'clamp(3.6rem, 11vw, 10rem)', margin: 0 }}>
            <BlurWords text="Naše menu" />
          </h2>
        </div>

        <div role="tablist" aria-label="Kategorie menu" className="menu-tabs">
          {MENU.map((c) => (
            <button key={c.id} role="tab" aria-selected={c.id === id} aria-controls="menu-panel" className="tab" onClick={() => setId(c.id)}>{c.label}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={cat.id} id="menu-panel" role="tabpanel"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(28px, 5vw, 80px)', alignItems: 'start', marginTop: 28 }}>
            <div style={{ position: 'relative' }}>
              <GlareCard style={{ ['--c-ink' as string]: '#070a1c', aspectRatio: '4 / 3', transform: 'rotate(-2deg)' }}>
                <img src={IMG(cat.img)} alt={`${cat.label} – ilustrační foto`} loading="lazy" width={1800} height={1200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </GlareCard>
              <span className="sticker" style={{ position: 'absolute', right: -6, bottom: -14, fontSize: '1.4rem', background: cat.accent, color: cat.accent === '#D82027' ? '#FFF1D0' : '#101638' }}>{cat.script}</span>
            </div>

            <div>
              <h3 className="display outline" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', margin: '0 0 8px', fontWeight: 400 }}>{cat.label}</h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {cat.dishes.map((d, i) => (
                  <motion.li key={d.name} className="dish" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.06 }}>
                    <h3>{d.name}</h3>
                    <span className="price">{d.price ? `${d.price} Kč` : <small style={{ fontFamily: 'var(--font-sans)', fontSize: '.85rem', opacity: .8 }}>cena v menu</small>}</span>
                    <p>{d.desc}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ marginTop: 44, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <Magnetic><a className="btn btn-gold" href={INFO.onlineMenu} target="_blank" rel="noopener noreferrer">Celé menu a rezervace <ExternalLink size={18} /></a></Magnetic>
          <Magnetic><a className="btn btn-ghost" href={INFO.delivery} target="_blank" rel="noopener noreferrer" style={{ borderColor: 'currentColor', color: 'inherit' }}>Objednat s sebou</a></Magnetic>
        </div>
        <p style={{ marginTop: 22, maxWidth: '62ch', fontSize: '.9rem', opacity: .8 }}>
          Ceny a popisy jsou převzaté z objednávkového menu a mohou se lišit od jídelního lístku v restauraci. Fotografie jsou ilustrační. Informace o alergenech vám na požádání sdělí obsluha.
        </p>
      </div>
    </motion.section>
  )
}
