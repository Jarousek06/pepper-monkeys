import { logoSrc } from '../lib/brand'

/** Uses the real logo when src/assets/brand/logo.* exists; otherwise a clearly temporary emblem. */
export function Logo({ size = 96, className = '' }: { size?: number; className?: string }) {
  if (logoSrc) return <img src={logoSrc} alt="Pepper Monkey's" className={className} style={{ height: size, width: 'auto' }} />
  return (
    <svg role="img" aria-label="Pepper Monkey's – logo (zástupné)" viewBox="0 0 200 200" width={size} height={size} className={className}>
      <defs>
        <path id="pmArc" d="M28 100a72 72 0 0 1 144 0" />
        <path id="pmArc2" d="M22 108a78 78 0 0 0 156 0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="#101638" stroke="#F4C51B" strokeWidth="6" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="#FFF1D0" strokeWidth="1.5" strokeDasharray="3 5" />
      <text fontFamily="Anton, Impact" fontSize="27" fill="#FFF1D0" letterSpacing="2">
        <textPath href="#pmArc" startOffset="50%" textAnchor="middle">PEPPER MONKEY'S</textPath>
      </text>
      <text fontFamily="Anton, Impact" fontSize="15" fill="#F4C51B" letterSpacing="3">
        <textPath href="#pmArc2" startOffset="50%" textAnchor="middle">RESTAURANT · BAR</textPath>
      </text>
      <g transform="translate(100 100) rotate(-28)">
        <path d="M-6 -34c14-6 26 6 22 24-4 20-18 40-34 46-12 4-14-8-8-22 6-16 14-40 20-48z" fill="#D82027" stroke="#070a1c" strokeWidth="3" strokeLinejoin="round" />
        <path d="M-8 -36c-2-8 4-12 10-12" stroke="#5aa02c" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}
