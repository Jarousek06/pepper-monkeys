# Pepper Monkey's — web

Cinematic web pro restauraci **Pepper Monkey's** (Roudnice nad Labem).
React + Vite + TypeScript.

## Struktura

```
pepper-monkeys/
├── src/             komponenty, styly
├── public/          statické soubory
├── index.html
├── vite.config.ts
└── package.json
```

## Lokální vývoj

```bash
npm install
npm run dev
```

Poběží na http://localhost:5195 (v `.claude/launch.json` konfigurace `pepper-monkeys`).

## Build

```bash
npm run build
```

Výstup jde do `dist/`.

## Stav

Čeká se na reálné logo, maskota a fotky z provozovny — teď jsou na webu
zástupné/ilustrační materiály.

## Nasazení

[Netlify Drop](https://app.netlify.com/drop) — přetáhnout vygenerovanou složku `dist/`.
