import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IMG } from '../lib/brand'
import { BlurWords } from './BlurWords'

gsap.registerPlugin(ScrollTrigger)

const SHOTS = [
  { n: 'dvorek', alt: 'Dvorek restaurace s popínavou zelení a slunečníky', cap: 'Zavřený dvorek', s: { gridColumn: 'span 7', aspectRatio: '3 / 2' }, real: true, speed: -30 },
  { n: 'beer', alt: 'Točené pivo do sklenice – ilustrační foto', cap: 'Pivo & koktejly', s: { gridColumn: 'span 5', aspectRatio: '4 / 5', marginTop: '10%' }, speed: 40 },
  { n: 'neon', alt: 'Neonový nápis bar – ilustrační foto', cap: 'Až do noci', s: { gridColumn: 'span 5', aspectRatio: '4 / 3' }, speed: -20 },
  { n: 'bar', alt: 'Barový pult s lahvemi – ilustrační foto', cap: 'Bar', s: { gridColumn: 'span 7', aspectRatio: '16 / 10', marginTop: '-4%' }, speed: 30 },
] as const

export function Atmosphere() {
  const root = useRef<HTMLElement>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
        gsap.fromTo(el.querySelector('img'), { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
        gsap.fromTo(el, { y: 0 }, { y: Number(el.dataset.speed), ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="bar" ref={root} aria-labelledby="bar-h" style={{ background: '#070a1c', padding: 'clamp(56px, 8vw, 120px) 0', overflow: 'hidden' }}>
      <div className="wrap" style={{ position: 'relative' }}>
        <h2 id="bar-h" className="display" style={{ fontSize: 'clamp(3.4rem, 12vw, 11rem)', margin: 0 }}>
          <BlurWords text="Večer" /> <span className="outline" style={{ color: 'transparent' }}><BlurWords text="patří" delay={0.15} /></span> <span style={{ color: '#D82027' }}><BlurWords text="nám." delay={0.3} /></span>
        </h2>
        <p style={{ maxWidth: '52ch', fontSize: '1.15rem', lineHeight: 1.55, margin: '18px 0 48px', opacity: .9 }}>
          Americký bar s venkovním posezením, skvělými koktejly, craft pivem a živou hudbou. Sedni si, objednej a nespěchej – lidé u nás obvykle zůstanou hodinu i dvě.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'clamp(12px, 2vw, 28px)' }} className="gallery">
          {SHOTS.map((s) => (
            <figure key={s.n} data-speed={s.speed} style={{ margin: 0, position: 'relative', ...s.s }} className="shot">
              <div style={{ overflow: 'hidden', borderRadius: 14, border: '3px solid #FFF1D0', height: '100%', aspectRatio: s.s.aspectRatio }}>
                <img src={IMG(s.n)} alt={s.alt} loading="lazy" width={1800} height={1200} style={{ width: '100%', height: '118%', objectFit: 'cover' }} />
              </div>
              <figcaption className="sticker" style={{ position: 'absolute', left: 12, bottom: -12, fontSize: '1.05rem' }}>{s.cap}</figcaption>
            </figure>
          ))}
        </div>
        <style>{`@media (max-width: 760px){ .gallery .shot{ grid-column: 1 / -1 !important; margin-top: 0 !important; } }`}</style>
        <p style={{ fontSize: '.85rem', opacity: .6, marginTop: 40 }}>Foto dvorku: restaurace (firmy.cz). Ostatní fotografie jsou ilustrační.</p>
      </div>
    </section>
  )
}
