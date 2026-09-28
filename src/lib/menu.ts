// Prices & descriptions: Food Under Your Nose (jidlopodnos.cz) delivery menu + restaurant listing.
// Verify against the in-house menu before launch. price: null = not verified.
export type Dish = { name: string; desc: string; price: number | null; hot?: boolean }
export type Category = { id: string; label: string; script: string; img: string; bg: string; ink: string; accent: string; dishes: Dish[] }

export const MENU: Category[] = [
  { id: 'burgery', label: 'Burgery', script: 'the big ones', img: 'burger-bacon', bg: '#D82027', ink: '#FFF1D0', accent: '#F4C51B', dishes: [
    { name: 'Classic BBQ Burger', desc: 'Hovězí maso, BBQ omáčka, vejce, slanina, cheddar, rajče, okurka', price: null },
    { name: 'Anča Burger', desc: 'Hovězí mleté maso, glazovaná cibule, slanina, sýr Raclette, mix salátů', price: 279 },
  ]},
  { id: 'zebra', label: 'Žebra & speciality', script: 'fall-off-the-bone', img: 'zebra', bg: '#101638', ink: '#FFF1D0', accent: '#F4C51B', dishes: [
    { name: 'BBQ Ribs', desc: '600 g pečená vepřová žebra, BBQ omáčka, salát', price: 289 },
    { name: 'Chicken Caesar Salad', desc: '400 g římský salát, grilované kuřecí prso, ančovičková omáčka, slanina', price: 255 },
  ]},
  { id: 'kridla', label: 'Křídla', script: 'finger lickin’', img: 'wings', bg: '#F4C51B', ink: '#101638', accent: '#D82027', dishes: [
    { name: 'Corn Wings', desc: '6 ks, obalená v podmáslí a kukuřičné mouce', price: 199 },
    { name: 'Boneless Wings', desc: '200 g smažené kousky, parmezán, tymián', price: 189 },
    { name: 'BBQ Boneless Wings', desc: '200 g', price: 189 },
  ]},
  { id: 'tortilly', label: 'Tortilly', script: 'wrapped up', img: 'quesadilla', bg: '#1b2352', ink: '#FFF1D0', accent: '#F4C51B', dishes: [
    { name: 'Chicken Tortilla', desc: '120 g kuřecí maso, cheddar, BBQ fazole, rajčata, kukuřice', price: 185 },
    { name: 'Pulled Pork Tortilla', desc: '120 g trhané vepřové, glazovaná cibule, slanina, sýr', price: 195 },
    { name: 'Blue Cheese Quesadilla', desc: '120 g kuřecí maso, modrý sýr', price: 229 },
  ]},
  { id: 'predkrmy', label: 'Předkrmy', script: 'to share', img: 'nachos', bg: '#FFF1D0', ink: '#101638', accent: '#D82027', dishes: [
    { name: 'Chedar Cheese Nachos', desc: '150 g nachos, cheddarová omáčka, jalapeños, slanina', price: 169, hot: true },
    { name: 'Cheese Nuggets', desc: '150 g smažák, doporučujeme dip', price: 119 },
    { name: 'Cheddar Cheese Bites', desc: '6 ks smažené kousky, jalapeños, bylinkový dip', price: 99, hot: true },
    { name: 'Onion Rings', desc: '10 ks smažené cibulové kroužky, mátový dip', price: 99 },
    { name: 'Blue Cheese Veggie Sticks', desc: 'Celer, mrkev, dip z modrého sýra', price: 99 },
  ]},
  { id: 'prilohy', label: 'Přílohy', script: 'always order fries', img: 'fries', bg: '#D82027', ink: '#FFF1D0', accent: '#F4C51B', dishes: [
    { name: 'Batátové hranolky', desc: '200 g', price: 95 },
    { name: 'Bramborové chipsy', desc: '200 g', price: 75 },
    { name: 'Tenké hranolky', desc: '200 g', price: 65 },
    { name: 'Steakové hranolky', desc: '200 g', price: 65 },
    { name: 'Coleslaw', desc: '200 g', price: 65 },
  ]},
]
