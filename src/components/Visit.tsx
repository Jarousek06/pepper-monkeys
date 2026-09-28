import { MapPin, Phone } from 'lucide-react'

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
)
const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /></svg>
)
import { INFO } from '../lib/brand'
import { Logo } from './Logo'
import { Magnetic } from './Magnetic'
import { BlurWords } from './BlurWords'
import { Smoke } from './Smoke'

export function Visit() {
  return (
    <>
      <section id="navstivte" aria-labelledby="visit-h" className="halftone" style={{ position: 'relative', background: '#D82027', color: '#FFF1D0', padding: 'clamp(56px, 8vw, 120px) 0', overflow: 'hidden' }}>
        <Smoke count={5} />
        <div className="wrap" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 48 }}>
          <div>
            <p className="script" style={{ margin: 0, fontSize: 'clamp(1.8rem, 3.4vw, 2.5rem)', marginBottom: 8, color: '#F4C51B' }}>see you there</p>
            <h2 id="visit-h" className="display" style={{ fontSize: 'clamp(3.6rem, 12vw, 11rem)', margin: '4px 0 24px' }}>
              <BlurWords text="Přijď" /> <BlurWords text="hladový." delay={0.2} />
            </h2>
            <address style={{ fontStyle: 'normal', fontSize: '1.3rem', lineHeight: 1.5, fontWeight: 500 }}>
              {INFO.name} Restaurant &amp; Bar<br />{INFO.address.replace(', ', '\n').split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
            </address>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 28 }}>
              <Magnetic><a href={INFO.map} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><MapPin size={18} /> Trasa</a></Magnetic>
              <Magnetic><a href={INFO.phoneHref} className="btn btn-ghost"><Phone size={18} /> {INFO.phone}</a></Magnetic>
            </div>
          </div>
          <div style={{ background: '#101638', border: '4px solid #070a1c', borderRadius: 22, boxShadow: '10px 10px 0 #070a1c', padding: 'clamp(22px, 3vw, 40px)', alignSelf: 'start', transform: 'rotate(1.2deg)' }}>
            <h3 className="display" style={{ fontSize: '2.2rem', margin: '0 0 12px', color: '#F4C51B', fontWeight: 400 }}>Otevírací doba</h3>
            <dl style={{ margin: 0 }}>
              {INFO.hours.map((h) => (
                <div key={h.d} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '12px 0', borderBottom: '2px dashed rgba(255,241,208,.3)', fontSize: '1.15rem' }}>
                  <dt style={{ fontWeight: 700 }}>{h.d}</dt><dd style={{ margin: 0 }}>{h.t}</dd>
                </div>
              ))}
            </dl>
            <p style={{ fontSize: '.8rem', opacity: .65, margin: '14px 0 0' }}>Otevírací dobu prosím ověřte telefonicky nebo na Facebooku – může se měnit.</p>
          </div>
        </div>
      </section>

      <footer style={{ background: '#070a1c', padding: '48px 0 32px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size={110} />
          <div style={{ display: 'flex', gap: 14 }}>
            <a className="btn btn-ghost" style={{ minHeight: 48 }} href={INFO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /> Instagram</a>
            <a className="btn btn-ghost" style={{ minHeight: 48 }} href={INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /> Facebook</a>
          </div>
        </div>
        <p className="wrap" style={{ fontSize: '.8rem', opacity: .55, marginTop: 28 }}>© {new Date().getFullYear()} Pepper Monkey's Restaurant &amp; Bar · Karlovo nám. 27, Roudnice nad Labem</p>
      </footer>
    </>
  )
}
