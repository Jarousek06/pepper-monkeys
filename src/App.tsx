import { Intro } from './components/Intro'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Menu } from './components/Menu'
import { Mascot } from './components/Mascot'
import { Atmosphere } from './components/Atmosphere'
import { Visit } from './components/Visit'
import { SmokeDivider } from './components/Smoke'
import { ChiliTrail } from './components/ChiliTrail'
import { MENU } from './lib/menu'

export default function App() {
  return (
    <>
      <Intro />
      <ChiliTrail />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <div style={{ height: 40, background: '#101638' }} />
        <SmokeDivider from="#101638" to={MENU[0].bg} />
        <Menu />
        <SmokeDivider from={MENU[0].bg} to="#101638" />
        <Mascot />
        <SmokeDivider from="#101638" to="#070a1c" />
        <Atmosphere />
        <SmokeDivider from="#070a1c" to="#D82027" />
        <Visit />
      </main>
    </>
  )
}
