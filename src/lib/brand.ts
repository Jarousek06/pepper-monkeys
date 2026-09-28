// Drop real brand files into src/assets/brand/ and they are picked up automatically:
//   logo.(png|svg|webp)     – official Pepper Monkey's logo
//   mascot.(png|svg|webp)   – full-body monkey illustration (transparent background)
const files = import.meta.glob('../assets/brand/*.{png,svg,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const find = (name: string) => Object.entries(files).find(([p]) => new RegExp(`/${name}\.`).test(p))?.[1]

export const logoSrc = find('logo') ?? '/assets/pepper-monkeys/logo.webp'

export const IMG = (n: string) => `/img/${n}.webp`

// Verified via firmy.cz listing (contact + hours). Owner should confirm — sources differ.
export const INFO = {
  name: "Pepper Monkey's",
  address: 'Karlovo náměstí 27, 413 01 Roudnice nad Labem',
  phone: '776 804 676',
  phoneHref: 'tel:+420776804676',
  facebook: 'https://www.facebook.com/opicezroudnice',
  instagram: 'https://www.instagram.com/opicezroudnice/',
  map: 'https://mapy.com/cs/?source=firm&id=13543201',
  delivery: 'https://www.jidlopodnos.cz/rozvoz-jidel/roudnice-nad-labem/pepper-monkeys-restaurant',
  onlineMenu: 'https://opicezroudnice.cz/online-menu',
  hours: [
    { d: 'Po – Čt', t: '16:00 – 23:00' },
    { d: 'Pátek', t: '16:00 – 24:00' },
    { d: 'Sobota', t: '11:30 – 24:00' },
    { d: 'Neděle', t: '11:30 – 22:00' },
  ],
}
